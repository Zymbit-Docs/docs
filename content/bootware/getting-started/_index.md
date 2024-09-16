---
title: "Getting Started: Bootware 1.2"
linkTitle: "Getting Started"
description: Getting Started tutorial to get Bootware up and running
date: "2024-08-21"
lastmod: "2024-09-16"
aliases:
    - /bootware/getting-started/
draft: false
type: docs
images: []
weight: 20
headless: false

---

-----

## Quickstart - Download and Install Bootware

In this Getting Started guide we describe how to bring up a common use case for Bootware - A/B partitioning for fallback and recovery.

The default SCM/SEN as shipped has Zymbit software pre-installed. For setups using the ZYMKEY4 or other Zymbit HSM's, the installation is up to the user. The Zymbit product should be up and running with the blue LED flashing once every three seconds before installing Bootware. We recommend partitioning your /boot partition with a size of 512MB (default for Bookworm). There is no need to setup encryption of your root filesystem as Bootware will do this for you. 

An HDMI console is highly recommended for setting up your unit with Bootware. The process of repartitioning and loading takes time and the console is handy for monitoring progress.

Bootware 1.2 includes a new, consolidated User Interface. The process of installation and configuration has changed since 1.1.

Details of the commands in this Quickstart are linked in line.
See the [Features](../features) section for more information on how to use Bootware.

### Overview of steps to get up and running

1. Download the Bootware 1.2 executable, `zbcli`. 
2. Run `zbcli install` to install the Bootware tools and artifacts
3. Run `zbcli imager` to create and sign a Zymbit image file (zi image) of your current root file system as a backup. 
4. Run `zbcli update-config` to configure Partitions and Recovery strategy. For this Quickstart, we will setup A/B partitions.
5. Run `zbcli update` to load a known good example zi image into the Backup (B) partition; set B to the Active partition.
6. Run `zbcli rollback-swap` to force a Rollback to your original partition to verify your A/B setup is working.

### 1. Download Bootware

Download the Bootware 1.2 executable. A boostrap utility to get the Bootware executable can be downloaded with curl:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/zymbit-applications/zb-bin/main/install.sh | sudo bash
```

The install will identify your Pi and OS and then prompt you for `zbcli` whether you'd like to include a binary that supports hardware signing. All Zymbit products support software signing. Only the SCM and the HSM6 support hardware signing. For the purpose of this tutorial, we will use software signing. Use the arrow keys to move the selection to `> No`.

```
zb-install.sh: bootstrapping the zbcli installer
        ---------
        Pi Module:         Raspberry Pi 4/Compute Module 4
        Operating System:  Rpi-Bookworm
        Zymbit module:     Zymkey
        Kernel:            kernel8.img
        ---------

? 'zbcli' comes with software signing by default. Include hardware signing? ›
  Yes
❯ No
```

Next, you will be asked to select a version of the `zbcli` from a list of recent versions to install. In most cases, you will want to select the latest version. Use the up and down arrows to select the version. You can use ctrl-c to exit at any time.

```
? Select version ›
  zbcli-1.2.0-rc.24
  zbcli-1.2.0-rc.23
  zbcli-1.2.0-rc.22
```

The process will finish to load the `zbcli`.

```
Installing zbcli
Installed zbcli. Run 'zbcli --help' for more options.
zb-install.sh: cleaning up
```

### 2. Run `zbcli install`

Install, Bootware. Answer `yes` when prompted to complete the installation.

```bash
sudo zbcli install
```




After installing the zboot tools and artifacts, you will need to reboot into zboot. You will be prompted for confirmation to reboot.

```
? Bootware installation will require 62.59 MiB in `/boot/firmware` and will modify config.txt and rc.local. The system w       Found kernel '/boot/firmware/kernel8.img'
     Created '/etc/zymbit/zboot/mnt'
     Created '/etc/zymbit/zboot/scripts'
     Created '/etc/zymbit/zboot/zboot_backup'
     Created '/boot/firmware/zboot_bkup'
   Installed 'u-boot-tools'
     Created '/etc/fw_env.config'
     Created '/usr/bin/zb_get_root_dev.sh'
     Created '/usr/bin/zbconfig'
       Found OpenSSL 3
     Created '/boot/firmware/zb_config.enc'
    Modified zbconfig 'kernel_filename'
   Installed zboot
    Modified '/etc/rc.local'
     Created '/lib/cryptsetup/scripts/zk_get_shared_key'
    Modified '/boot/firmware/config.txt'
     Created '/etc/update-motd.d/01-zymbit-fallback-message'
    Modified /etc/update-motd.d/01-zymbit-fallback-message
? A reboot into zboot is required. Reboot now? (y/n) › yes
```

Reboot to complete the installation process and to boot into zboot. Once completed, all necessary files required for loading new images via Bootware will be installed. The install process will change the boot sequence to use u-boot and Zymbit's zboot but does not alter your filesystem.

### 3. Run `zbcli imager` to create Bootware-ready Zymbit Image backup (zi image)

Bootware requires images in a secure, signed format for loading with zboot. We refer to these images as `zi` images. An image conversion tool, [`zbcli imager`](../zbcli/imager), creates the zi image. `zbcli imager` can take a snapshot of your running system or input can be tarballs of your /boot and /rootfs partitions. Images can also be partial file additions and deletions called [Overlay images](../features/overlays).

> If you are Developing on a CM4 directly and need to transition to the SCM, See [Developing on the CM4](../features/development) for instructions on how to create an image from your CM4 to load onto the SCM.


#### Create a zi image backup from your current running root file system

Use `zbcli imager` to create a Zymbit Image (zi) backup of your current running system. Once created, the zi image can be propagated to other disk partitions securely. A Private/Public key pair will be used for signing the zi image at time of creation and verifying at time of loading onto a new partition. Key pairs can either be created in software or using the Zymbit HSM hardware. For this Quickstart, we will use software keys. Details on signing and verifying can be found [here](../features/signing).


In this guide, we will output the image directly to a USB stick. Mount the USB stick for access,

```bash
sudo mount /dev/sda1 /mnt
```

Start the imager module of zbcli. We will run interactively. You can also run non-interactively by supplying all necessary parameters on the command line. See [zbcli imager](../zbcli/imager) for details.


All necessary information will be prompted for starting with the output directory and the name of the image file. The output directory will be excluded from the image. A zi extension will be added to the image name provided.

```bash
sudo zbcli imager
```

```
   Validated bootware installation
        ---------
        Pi Module         Raspberry Pi 4
        Operating System  Rpi-Bookworm
        Zymbit module     Secure Compute Module
        Kernel            kernel8.img
        ---------
     Cleaned '/etc/zymbit/zboot/update_artifacts/tmp'
✔ Enter output directory · /mnt
✔ Enter image name · my_image
```

Next, you will be prompted for what type of image to make: A full image of the live system or an Overlay image from files added with `zbcli manifest`. An Overlay image can be used to add, replace, or delete a select group of files for updates, patches, etc. For this example, we will create a complete image from the running system. Select the Full Image option. 

```
? Select image type ›
❯ Full image of live system
  Overlay image from files added with zbcli manifest
```

You can optionally provide an image version. This is for your use in helping to identify the image later. It is not used in the process. 

Next, you will be prompted for signing keys. Keys can be Software or Hardware based. Keys are used for signing and verification of images. Software keys are supported on all Zymbit products. Hardware keys are supported with Secure Compute Module (SCM) or HSM6 products. Had we chosen earlier to include hardware key support, we would be asked to choose either hardware or software key support. We chose earlier to not include hardware key support. You can use an existing key or the script will create keys for you. For this Quickstart, we will generate a new Software key. Select `Create new software key slot`

```
? Select key slot ›
❯ Create new software key
  Use pre-existing software key
```

The `zbcli imager` script will now build your zi image. Progress will be shown on the screen.

```
   Validated bootware installation
        ---------
        Pi Module         Raspberry Pi 4
        Operating System  Rpi-Bookworm
        Zymbit module     Secure Compute Module
        Kernel            kernel8.img
        ---------
     Cleaned '/etc/zymbit/zboot/update_artifacts/tmp'
✔ Enter output directory · /mnt
✔ Enter image name · my_image
✔ Select image type · Full image of live system
✔ (Optional) enter image version ·
✔ Select key slot · Create new software key slot
     Created signing key
    Verified path unmounted '/etc/zymbit/zboot/mnt'
     Cleaned '/etc/zymbit/zboot/mnt'
    Verified disk size (required: 3.97 GiB, free: 8.31 GiB)
     Created initramfs
     Running [====>                                   ] 1/10 (00:04:47): taking snapshot of boot             
```

The imager will take some time, depending on the size of your file system. Progress will be reported on the screen. Once completed, the zi image and Private/Public key will be saved to your specified output directory (/mnt). Keep your private key private. The zi image can be used from the local storage device or a remote server accessible via HTTPS. The public key file will be needed to load the zi image. 

When complete, there will be three files in your output folder: the Public key, the Private key, and the zi image.

```
     ...

     Created signing key
     Created '/etc/zymbit/zboot/update_artifacts/file_manifest'
     Created '/etc/zymbit/zboot/update_artifacts/file_deletions'
    Verified path unmounted '/etc/zymbit/zboot/mnt'
     Cleaned '/etc/zymbit/zboot/mnt'
     Deleted '/etc/crypttab'
    Verified disk size (required: 2.54 GiB, free: 10.05 GiB)
     Created initramfs
     Created snapshot of boot (/etc/zymbit/zboot/update_artifacts/tmp/.tmpEyFuyt/my_image_boot.tar)
     Created snapshot of root (/etc/zymbit/zboot/update_artifacts/tmp/.tmpEyFuyt/my_image_rfs.tar)
    Verified boot tarball (/etc/zymbit/zboot/update_artifacts/tmp/.tmpEyFuyt/my_image_boot.tar)
    Verified zymbit and zboot tool installation
     Created staging directory (/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk)
     Created '/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/header.txt'
     Created tarball (/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/update_artifact.tar)
     Created header signature
     Created update artifact signature
     Created file manifest signature
     Created file deletions signature
     Created '/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/signatures'
     Created signatures (/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/signatures)
      Copied file (/etc/zymbit/zboot/update_artifacts/file_manifest) to (/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/file_manifest)
      Copied file (/etc/zymbit/zboot/update_artifacts/file_deletions) to (/etc/zymbit/zboot/update_artifacts/tmp/.tmpmwFylk/file_deletions)
     Created tarball (/mnt/my_image.zi)
     Created '/mnt/my_image_private_key.pem'
       Saved private key '/mnt/my_image_private_key.pem'
     Created '/mnt/my_image_pub_key.pem'
       Saved public key '/mnt/my_image_pub_key.pem'
       Saved image '/mnt/my_image.zi' (2.54 GiB)
    Finished in 894.5s
$ ls -l /mnt
total 1134224
-rwxr-xr-x 1 root root        242 Sep  8 11:55 my_image_private_key.pem
-rwxr-xr-x 1 root root        178 Sep  8 11:55 my_image_pub_key.pem
-rwxr-xr-x 1 root root 1161410560 Sep  8 11:55 my_image.zi
```

Additional examples of `zbcli imager` usage can be found here: [zbcli imager usage](../zbcli/imager)


### 4. Run `zbcli update-config` to configure the Partitioning and Image loading

Now we will use the zi image and public key we just created to configure an A/B partition and load the image into the BACKUP (B) partition.

First, copy the public key file created earlier from /dev/sda1 to a location on your local filesystem,

```bash
cp /mnt/my_image_pub_key.pem .
```

#### Use the Bootware `zbcli update-config` to Configure your System

Bootware includes a tool to help configure your system called `zbcli update-config`. `zbcli update-config` is meant to setup your device environment to load a zi image from a configured endpoint and the update policies for how to apply those updates. More information on `zbcli update-config` can be found [here](../zbcli/update-config). Navigate through the menus with up and down arrows. Use ENTER to make a choice. Each Configure option will display the available options with explanations.

We are going to configure with A/B partitioning and UPDATE the BACKUP, leaving the A partition as the stable partition for fallback, setting the update option to BACKUP. Note: The A and B partitions will roughly split the disk space available. If your current partition size exceeds more than half the space, the update mode will be switched to UPDATE_BOTH, and your zi image will be loaded into both the A and B partition. You will be given notification that your UPDATE mode has switched from UPDATE_BACKUP to UPDATE_BOTH.

```bash
sudo zbcli update-config
```

```
   Validated bootware installation
        ---------
        Pi Module         Raspberry Pi 4
        Operating System  Rpi-Bookworm
        Zymbit module     Secure Compute Module
        Kernel            kernel8.img
        ---------
❯ Configure partition layout
  Configure update policy
  Configure update endpoint
  Configure wireless network
  Revert to default configuration
  Save and exit
```

Choose your settings as described below.

For `Configure partition layout`, choose `[RECOMMENDED] A/B:`

```
❯   [RECOMMENDED] A/B: This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space. Most useful for rollback and recovery with an Active/Backup configuration.
```

For `Configure update policy`, choose `[RECOMMENDED] BACKUP:`

```
❯   [RECOMMENDED] BACKUP: Applies new updates to current backup filesystem and swap to booting the new updated backup partition as the active partition now. If the new update is bad, it will rollback into the previous stable active partition.
```

For `Configure data partition size in MB`, choose the size of the encrypted shared DATA partition. The default is 512MB.

```
? Enter size of data partition in MB ›  1024
```

For `Configure update endpoint`, choose you USB stick that holds your zi file. The default of `/dev/sda1` most likely will be appropriate.

```
       Using update endpoint '/dev/sda1'
  Defaulting to configured endpoint '/dev/sda1'
        Info update endpoints can be either an HTTPS URL or an external mass storage device like a USB stick.
? Enter update endpoint › /dev/sda1     
```

`zbcli update-config` will attempt to verify the zi image name if the endpoint is reachable.

`Configure wireless network` - Along with local devices, such as a USB stick, Bootware supports pulling remote updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot.

**Save** and **exit** to save and exit `zbcli update-config`. You also have the choice to **Revert to default configuration**. This choice will reset your update configs to the default settings.



### 5. Run `zbcli update` to create the Backup partition and load the zi image.

Once you have completed using the Wizard to configure your Bootware, run `zbcli update` to complete the process of repartitioning and loading your image.

```bash
sudo zbcli update
```

```
   Validated bootware installation
        ---------
        Pi Module         Raspberry Pi 4
        Operating System  Rpi-Bookworm
        Zymbit module     Secure Compute Module
        Kernel            kernel8.img
        ---------
     Cleaned '/etc/zymbit/zboot/update_artifacts/tmp'
       Found update configs
? Proceed with current configs? These can be modified through 'sudo zbcli update-config'
        ---------
        Update endpoint   /dev/sda1
        Update name       my_image
        Endpoint type     LOCAL
        Partition layout  A/B
        Update policy     UPDATE_BACKUP
        ---------
 (y/n) › yes
```

The script will show your configuration for review and confirmation and give you the option to change the configuration. If not correct, enter `no` to exit and re-run `zbcli update-config` to correct the configuration. If the configuration is not valid, `zbcli update` will exit.

Next, you need to enter the path to your Public Key file (in PEM format). For this example, we will use the public key file we copied locally earlier.

```
✔ Enter public key file (Pem format) · ./my_image_pub_key.pem
```

If verification with the Public Key succeeds, `zbcli update` will continue with progress information, then prompt for a reboot to complete the process. 

#### Bootware Boot Process

The Bootware boot process will now take place. zboot will boot your system. Upon reboot, an encrypted B partition will be created and the zi image will be loaded onto B. The A partition will remain untouched.

{{< callout warning >}}The initial configuration process can take 30 to 60 minutes to complete depending on the size of the image. The process can be completed via ssh, but an HDMI console is helpful to follow the progress. The blue LED will return to flashing once every three seconds once the process completes.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit HSM.
* It will then take a few minutes to get/unpack tarballs from the image, and verify the signature
* It will take some time to unpack the image into the B root partition, depending on the size of the image.
* Once it's done unpacking the image to the B partition, it will boot into the B partition as the ACTIVE partition. You can use `lsblk` to examine the partitions.

### 4. Quickcheck - Force Failover (Change Active/Backup partitions)

To verify you now have two valid partitions, force a failover from Active to Backup with `zbcli rollback-swap`. You can use `lsblk` to verify your active partition. If your original partition was less than half the available space and the UPDATE_BACKUP completed, you should be on `cryptrfs_B`. If your original partition was more than half the available space and you were switched to UPDATE_BOTH, both A and B will be re-partitioned and your image loaded into both. Your active partition should be on `cryptrfs_A`. You can now force a rollback from the active partition to the backup partition with `zbcli rollback-swap`.

```bash
sudo zbcli rollback-swap
```

Once again, you can use `lsblk` to verify the active partition has moved. You should now have Active and Backup partitions with working images ready for your development.

### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

