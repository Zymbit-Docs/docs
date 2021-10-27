---
title : "Encrypting Root File System with HSM4"
linkTitle: "HSM4"
description: ""
date: ""
lastmod: ""
draft: false
images: []
layout: "single"
weight: -670
toc: true
---

![image1](../erfs-hsm-1.jpeg)

#### Prerequisites

Raspberry Pi:
* Raspbian: Buster (32 or 64 bit); or Ubuntu 18 or 20 (32 or 64 bit)

Nvidia Jetson:
* Jetson Xavier NX or Nano
* Jetpack 4.4 or earlier

## **BACKGROUND** 

To skip the background information and start encrypting your RFS, click [here](https://docs.zymbit.com/tutorials/encrypt-rfs/zymkey4/#how-to-encrypt).

### WHY ENCRYPT?


There are many reasons to encrypt the Root File System (RFS), from keeping WiFi credentials immutable to keeping proprietary software and sensitive data from being cloned.

For many Raspberry Pi configurations, only two partitions exist:

* /boot   <nbsp> on    /dev/mmcblk0p1
* /          on   /dev/mmcblk0p2

For Jetson configurations, many small partitions are created but the / file system including the /boot area is located here:

* /dev/mmcblk0p1


So it makes sense to encrypt the root partition as a way of encrypting everything.


------------

### INTRODUCING LUKS

LUKS (**L**inux **U**nified **K**ey **S**etup) is the popular key management setup for dm-crypt, the de-facto standard for block device encryption with Linux.

LUKS provides a robust and flexible mechanism for multiple users (and services) to interface to and access Linux's '[dm-crypt](https://wiki.archlinux.org/index.php/dm-crypt)' infrastructure.

_dm-crypt_ is a transparent disk encryption subsystem in Linux kernel versions 2.6 and later and is part of the device mapper infrastructure, and uses cryptographic routines from the kernel's Crypto API. Both are widely used and understood in the IT community.



#### Weaknesses of single Master key
dm-crypt has a single Master Key that is used to encrypt / decrypt data in/out of the block. To ensure long term security and deal with changing authorized users/services, it would be necessary to change the Master Key frequently, and potentially share it with multiple users/services on a regular basis. Every new iteration of Master Key would require the underlying data block to be re-encrypted everytime. In real systems, touched by different users/services, this is impractical.

#### Hierarchical key management
A more practical solution is to have a hierarchical  key management setup  in which users/services are given User Keys that are used to release the MasterKey.  User Keys can be easily changed and revoked, without having to re-encrypt the underlying data block.
The management of such a hirearchical key managers is the role of LUKS.

In this post we show how to use HSM4 to lock a User Key, that is subsequently used to unlock the Master Key and provide access to the Root File System. If you'd like to learn more about LUKS see the References at the bottom of this post.

![image2](../erfs2.png)

--------

### SECURE STORAGE OF LUKS USER KEYS
The security efficacy of your LUKS encrypted RFS is highly dependent upon how the User Keys are generated and where they are stored.

#### The SD Card is NOT a secure storage location

The growing single board computer family is awesome, and we love it! It is inexpensive, has an incredible amount of computing power for an embedded device and has a very robust software development ecosystem.

However, these devices have an Achilles heel: the SD card is the primary software deployment media, and it can be very easily removed and manipulated.

The natural inclination would be to encrypt the file system using LUKS on dm-crypt, but for unattended use across many deployed units the obvious question is: where is the LUKS key stored? Of course, it's the file system. Even if you try to obfuscate it through various programmatic means, the key is still very vulnerable to attack.



### Securing LUKS User Key with HSM4 Security Module.

![image1](../erfs-hsm-1.jpeg)



HSM4 provides a general "locking" service whereby a block of plaintext data is encrypted and signed.

When used with LUKS, the User Key is sent to the HSM4 to be locked (encrypted and signed) when the file system is created. When the system boots and needs to decrypt the root file system, the locked LUKS key is "unlocked" (signature verified and contents decrypted) and presented to dm-crypt. If the key was unlocked successfully, the boot process continues normally. Here is the boot sequence with a LUKS/dm-crypt filesystem where the key is protected by HSM4:

1. The kernel initializes initramfs
2. initramfs presents the locked LUKS key to HSM4
3. HSM4 validates the signature and decrypts the key*
4. The decrypted key is presented to LUKS and the root file system is then decrypted

*requires that HSM4 operational status is "secure"


------
_HSM4 fitted to Raspberry Pi and Jetson_

<p><img src="../erfs3.png" alt="rpi" width="50%"><img src="../jetson3.png" alt="jetson" width="50%"></p>

**HSM4 Authenticates Host System Before Unlocking LUKS Key**

One of the key features of HSM4 is to generate a unique Identity (ID) for the host system, based upon a fingerprint that measures specific system components. This fingerprinting process is used to "bind" together a specific HSM4 (root of trust, key store, crypto services), a specific host computer and a specific SD card. Once bound, these components form a permanent and immutable ID of the host system.

Each time the host device boots, and at random intervals thereafter, the HSM4 rechecks the ID fingerprint. If any of the system components have changed the fingerprint changes and the system is deemed to have been compromised, authentication fails and all security services are shut down.

Using this ID / Authentication feature, HSM4 can be used to protect LUKS User Keys in unattended applications, where it might be easy to remove and copy SD card content. (HSM4 also has other physical security features which are also used to lock/enable security services)


![image4](../erfs-hsm-3.jpeg)

----------

### WHERE TO STORE YOUR LUKS ENCRYPTED RFS

LUKS is very versatile and can be applied to both SD Card and external storage media. Lets review the pros and cons of each option:

#### Option 1 - Convert existing SD Card to LUKS

Converting the existing root file system on the SD card still requires an external device (e.g. USB flash drive) that is used as a temporary boot root file system: this provide an easier and lower risk means to convert and copy the original contents. The external devices needs to be a little larger than the existing root file system in order to store the old file system.

**Pros:**
1. Less physical space requirements.
2. Much less power required.

**Cons:**
1. Conversion is more complex and time consuming than migrating to an external drive.
2. Data space constraints.
3. Write cycle constraints.
4. Access speed constraints.


**Process Steps:**
1. Make a tarball of the original root file system and store it on the external device
2. Copy the original root file system files to the external device to form a temporary file system
3. Boot to the temporary file system. Once booted, the temporary file system will:
* Create a LUKS key
* Lock the LUKS key with HSM4
* Create a LUKS volume on the original root partition. The standard Jetson installation creates up to 14 partitions. In most cases, the new partition will be mmcblk0p13 or mmcblk0p15.
* Create an ext4 partition on the LUKS volume on the original root partition
* Untar the root file system tarball into the converted partition
* For Jetson users: Untar the /boot area into the original SD card partition, mmcblk0p1


#### Option 2 - Migrate existing SD card to external LUKS storage device.


The existing root file system can be migrated to an external LUKS encrypted USB flash, hard drive or SSD.

**Pros:**
1. External devices can hold much more data.
2. Migration is easier and quicker than SD card conversion method.
3. Some external devices have much faster data access than SD cards.
4. Some external devices (e.g. HDD) can tolerate many more write cycles than an SD card.

**Cons:**
1. For HDD and SSD and non-compact USB flash devices, there are additional power requirements.
2. Except for compact USB flash devices, physical space requirements also increase. This may be especially important for the Raspberry Pi Zero family.

**Process Steps:**
1. Create the LUKS key
2. Lock the LUKS key
3. Create a LUKS volume on an external USB device
4. Create an ext4 partition on the LUKS volume
5. Move the existing root file system to the LUKS volume on the external device
6. For RPi users: Boot to the new root file system and erase the previous root volume
* For Jetson users: Copy the /boot area into the original SD card partition mmcblk0p1
7. Boot to the new root file system


----------

## **HOW TO ENCRYPT**

### BUILDING YOUR LUKS ENCRYPTED RFS

#### Prerequisites

Make sure you have the HSM4 software suite already running and operational as well as insuring that your HSM4 is bound. Instructions [here](https://docs.zymbit.com/quickstart/getting-started/hsm4).

##### NOTE for RPi users: For the CM4/IO Module with eMMC, additional steps are needed due to the fact that the USB 2.0 ports are disabled by default:
1. Upgrade the bootloader version: Jan. 16 2021
2. Set the boot order to allow booting off USB: 0xf15
3. Modify /boot/config.txt and add the line "otg_mode=1" under [all]. This replaces the line, "dtoverlay=dwc2,dr_mode=host" if added.


#### Option 1 - Convert existing SD Card to LUKS

To convert your root file system to LUKS/dm-crypt, you will need to connect an external USB disk (as temporary storage). As mentioned previously, this is necessary because it is not possible to encrypt the partition in place, so the external disk is needed as temporary storage and a temporary root file system while the conversion takes place. The external disk needs to be at least twice as big as the root partition. Next, run the following script:

`curl -G https://s3.amazonaws.com/zk-sw-repo/mk_encr_sd_rfs.sh | sudo bash`

For RPi users: This script is parameterized, so if you have special requirements (e.g. root file system lives on /dev/mmcblk0p4), you can invoke it in the following fashion:

`curl -G https://s3.amazonaws.com/zk-sw-repo/mk_encr_sd_rfs.sh | sudo bash -s -- -x <path to external storage device (e.g. /dev/sdX> -m <source partition number>`

In the above invocation with no parameters, the defaults are:
 1. Original root file system located on /dev/mmcblk0p2
 2. Temporary root file system/storage for original root tarball located on /dev/sda
 3. Temporary root file system takes up entirety of new device

**The very first run of this script on a new temporary external USB disk could take a long time. Also, two reboots are required before the script is complete.**

One thing to note is that, if the external storage device has an ext4 formatted partition with the original root file system partition (e.g. /dev/mmcblk0p2) on it, this script will use what is already on the external storage device to convert the SD card. This cuts down time for converting lots of device root file systems and allows the script to be used in a mass production deployment.

On a Pi3 with an attached USB SSD as the external device on a bare Jessie "full" version (~4GB), the first run of this script requires about an hour to complete the first phase. The second phase takes around 15 minutes.

The same platform with a Jessie "lite" version (~1.6GB) takes around 20 minutes for phase 1 and 5 minutes for phase 2.

For Jetson, the first run of this script can take upwards of 30 minutes to an hour to complete the first phase. The second phase takes around 15 minutes.

Based on the above, using the formatted external device to convert subsequent units should only take 15 minutes.

#### Option 2 - Migrate existing SD card to external LUKS storage device.

To migrate your root file system to an external USB device, you can run the following script:

`curl -G https://s3.amazonaws.com/zk-sw-repo/mk_encr_ext_rfs.sh | sudo bash`

This script is parameterized, so if you have special requirements, you can invoke in the following fashion:

`curl -G https://s3.amazonaws.com/zk-sw-repo/mk_encr_ext_rfs.sh | sudo bash -s -- -x <path to external storage device (e.g. /dev/sdX> -p <destination partition number -s <max size of new root partition> -m <source partition number>`


In the above invocation with no parameters, the defaults for RPi are:
 1. Original root file system located on /dev/mmcblk0p2
 2. New root file system located on /dev/sda1
 3. New root file system takes up entirety of new device
The defaults for Jetson are:
1. Original root file system located on /dev/mmcblk0p1
2. Temporary root file system/storage for original root tarball located on /dev/sda
3. Temporary root file system takes up entirety of new device

Please note that the new root file system should be at least a little larger in size than the original root partition

Running this script takes around 30-40 minutes. The HSM4's LED flashes rapidly until the process has completed.

----------

### INTEGRATING LUKS INTO VOLUME MANUFACTURING WORKFLOW

The examples above are designed to help you get up and running with single and low volume applications.

If you require support in developing a high volume manufacturing encryption workflow then please [contact us](https://www.zymbit.com/contact-us/) to discuss our OEM engineering services.

----------
### REFERENCES

* [LUKS features - the de-facto standard in Linux Kernel.](https://wiki.archlinux.org/index.php/disk_encryption#Comparison_table)
* [Wiki overview to dm-crypt](https://en.wikipedia.org/wiki/Dm-crypt)
* [ArchLinux - adding LUKS keys to dm-crypt device encryption](https://wiki.archlinux.org/index.php/Dm-crypt/Device_encryption#Adding_LUKS_keys)

* [GitLab - LUKS and Cryptsetup - FAQ](https://gitlab.com/cryptsetup/cryptsetup/wikis/FrequentlyAskedQuestions)


* [GitLab - LUKS and Cryptsetup - open-source disk encryption](https://gitlab.com/cryptsetup/cryptsetup)

<h2 id="troubleshooting">TROUBLESHOOTING</h2>
<ul>
<li><a href="https://docs.zymbit.com/quickstart/faq/hsm4/#troubleshooting">HSM4 Troubleshooting FAQ</a></li>
<li><a href="https://community.zymbit.com/">Community Forum</a></li>
</ul>
