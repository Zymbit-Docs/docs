---
title: "Bootware Preview2 DRAFT        Early August, 2023"
linkTitle: "Bootware Preview"
icon: ""
description: ""
aliases:
    - /zboot-preview/
date: "2023-08-09"
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

Bootware™ is a set of software tools and micro services for the Zymbit Secure Compute Module [(SCM)](https://www.zymbit.com/scm/) based product line, including the Zymbit Secure Edge Node [(SEN)](https://www.zymbit.com/secure-compute-node/). Bootware™ includes:

* Trusted execution layer with secure, supervised boot chain  
* Full image secure updates  
* Automatic secure image recovery (A/B, Safe)  
* Customer-defined OTA distribution  
* OTA update diagnostics  
* Optional Zymbit distribution/recovery service  

### Bootware Release Schedule:  
* Bootware Preview1 – Now. Limited functionality detailed below
* Bootware Preview2 - Early August. Will include rollback/recovery
* Bootware Full Release to OEMs “Beta” – Late August 2023
* Bootware Full Standard Release – Q4 2023

### BOOTWARE PREVIEW1 FEATURE SET (JUNE 1, 2023)
#### Bootware Preview1 was designed for customers to do the following:

1. Transfer a Raspberry Pi CM4 image to an SCM
2. Replicate a SCM “golden image” to other SCMs
3. In a single SCM, store an original golden image in one eMMC partition plus a copy for development in a
second partition, allowing regression to the original golden image at will

#### To achieve this functionality, Bootware Preview provides the following new SCM functionality:

1. The ability to make and update two partitions (A/B), managed by a partition supervisor called zboot.
2. A zboot methodology to load (and subsequently reload) the A/B partitions from a USB or a URL (Ethernet)
3. The ability to manually select to boot from one partition or the other.
4. Initial tools and scripts for creating and loading images into the A/B partitions.

#### Important Bootware Preview Restrictions

1. Maximum SCM partition size is 14.4 GB. Images larger than 14.4 GB should not be attempted, else it may
render the SCM inoperable. Size checks will be implemented in a future release.
2. Two partitions (A/B) are supported. A shared data partition is not included and will be implemented in a future release.
3. The A/B partitions are not to be encrypted during Bootware development in the Preview release. Partition and kernel encryption
will be implemented in a future release.
4. The A/B partition selection for boot is handled manually. Automated process, scheduling and
rollback/recovery will be implemented in a future release.
5. Only load SCM or CM4 images that have been tested. The Preview unit cannot recover if it does not
boot. Bootware will safeguard from this in a future release. by A/B rollback recovery as well as “bare metal
recovery”, including up to reformatting the eMMC, reloading zboot and a safe image.
6. The Preview SCM uses its own/boot/config.txt that both enables zboot and the dwc2 driver. Do not enable
otg mode in config.txt. Bootware rollback recovery (A/B/Safe) will be implemented in a future release.
Confidential & Proprietary Information, Zymbit, Inc., www.zymbit.com
7. USB storage devices most likely require a powered hub. Failure to do so may result in the SCM rebooting.
8. Bullseye 64-based images are supported by the Preview. For other images, please contact Zymbit for
verification

## Using zboot - Hardened Zymbit boot utility

Zboot is Zymbit's boot utility that can pull and reflash a device with a new user image. In the current Preview, the image can be downloaded two ways:

* over the internet via https  
* from a USB storage device

If the device has only one root partition, zboot creates an A/B partition scheme and loads the new image to both partitions. Partition A will be Active and Partition B will be Backup.

If the device has an existing A/B partition scheme, zboot loads the new image to the Backup partition of A/B and sets the updated partition to Active. 

IMPORTANT: 

{{< callout warning >}}
The current Preview of zboot does not have roll back recovery. It cannot detect if the device doesn’t boot up. A failure to boot does not allow access to the SCM in order to take action to recover.
{{< /callout >}}

## Downloading zboot Utilities

Download the zboot utilities to the SCM. The zboot utilities can be downloaded from here with curl:

```
curl https://zk-sw-repo.s3.amazonaws.com/ota_preview/zymbit-ota-preview2.tgz --output zymbit-ota-preview2.tgz
```

Once the tar file is downloaded, untar:

```
tar xvzf zymbit-ota-preview2.tgz
```

The contents will be extracted into zymbit-ota-preview/. Files extracted: 

| Item | Description |
| ----- | ----- |
| install_zboot_tools.sh | Shell script to install zboot tools       |
| scripts/               | Scripts and configuration files for zboot |
| zboot_artifacts/       | zboot executable and boot artifacts       |



Run the following install script on the SCM to install the zboot utilities:

```
cd zymbit-ota-preview
sudo ./install_zboot_tool.sh
```

```
Installing zboot tools...
Reading package lists... Done
Building dependency tree... Done
…
Installing zboot...
Done!
After installing the zboot tools. A reboot is required. Reboot now? (y/n)
```

Reboot to complete the installation process. Once completed, all necessary files required for loading new images via zboot will be installed.

NOTE: The install script will copy necessary scripts to /usr/bin and copy over zboot binaries to /boot. Because we copy binaries and modify files in /boot, if /dev/mmcblk0p1 is mounted somewhere other than /boot, the zboot binaries need to be copied to that mount point instead. For instance, if /dev/mmcblk0p1 is mounted on /myboot instead of /boot, after running the install script, please run:

```
sudo cp -a zymbit-ota-preview/zboot_artifacts/. /myboot
```

## Installing and running zboot to reflash an image

zboot requires images in a particular format unique to zboot. An image conversion tool is provided. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions. NOTE: This does not have to be done on the running device. The script can be run on any workstation.

TODO: Update the sample image in the next step. This image is from Preview1

> If you would like to get started with a sample image, we've converted the base image installed on the SCM for the preview to a zboot format. Otherwise, continue on to create your own image. Our example image can be downloaded from here:

```
curl https://zk-sw-repo.s3.amazonaws.com/ota_preview/base_ota.zi --output base_ota.zi
```

The script used to convert to a zboot image is: 

```
zymbit-ota-preview/scripts/zymbit-image-converter [ test.img | {-b <boot.tar> -r <root.tar} | -z ] [-o]
	test.img	Binary image file of eMMC (e.g. created from dd). Name of output image need not match.
	-b	Use this boot tarball as input
    -r  Use this root tarball as input
    -o  Output directory for new .zi image
    -z  Creates a zi image from your current running root file system.
```

### Examples of Image conversions:

```
cd ~/zymbit-ota-preview/scripts
```

### Example to create a zi image from your current running root file system

```
sudo ./zymbit-image-convertor my.img
```

### Example to convert a binary image file (created from dd if=/dev/sda bs=4M of=my.img):

```
sudo ./zymbit-image-convertor my.img -z
```

TODO: Needs updating 

The script will prompt for information:

| Item | Description |
| ----- | ----- |
| Name of Image?: base_ota                         | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |
| Boot File System Partition Number? (EX: 1): 1 | Partition number of boot filesystem in binary image file. Must be provided; no default. |
| Root File System Partition Number? (EX: 2): 2 | Partition number of root filesystem in binary image file. Must be provided; no default. |

The script extracts the boot/root tarballs of the binary image. It will then packages it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_ota.zi`

### Example to convert boot/root tarballs (created from tar cvf my_boot.tar <boot_part>, tar cvf my_rfs.tar <root_part>)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo ./zymbit-image-convertor -T
```

The script will prompt for information:

| Item | Description |
| ----- | ----- |
|Name of Image?: base_ota | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference.
| Boot tarball path? ./golden_boot.tar | Path including filename of boot tarball. Must be provided; no default. |
| Root tarball path? ./golden_root.tar | Path including filename of root tarball. Must be provided; no default. |

The script extracts the boot/root tarballs of the binary image. It will then package it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/base_ota.zi`

Put the .zi image from the script on a server or USB drive for download. Zboot downloads images from either a USB storage device or the internet via curl requests.

## Use zboot to Install the New Image
Run: `zboot_install_new_update` with root permissions (this will be an executable in /usr/bin/ and can be called anywhere). Follow the prompted questions for input params needed:

```
sudo zboot_install_new_update
```
| Item | Description |
| ----- | ----- |
| Name of Image? (Don't add .zi extension): base_ota | Name of the zi formatted image. Leave off the zi extension. Important: For this Preview this name must match the name of the file in the enpoint URL below. |
| Update endpoint? (Ex: /dev/sda1): /dev/sda1     | Endpoint location of base_ota.zi image. This should either be the USB device or the full URL of the file if pulling via HTTP. Not optional; no default. Example for URL: https://myserver.com/base_ota.zi |
| Update endpoint type?  1. USB 2. HTTPS : 1      | Enter 1 if using a USB device or 2 if using HTTPS. |

After this script finishes running, you can verify these parameters by looking at /boot/zbmanifest.txt.  (This file helps communicate these config params to zboot)

`cat /boot/zbmanifest.txt`

| Item | Description |
| ----- | ----- |
| new_update_needed=1       | Flag set when zboot runs and detects it | needs an update If set to 0, zboot does not apply the update |
| root_dev=/dev/mmcblk0p2   | The ACTIVE root partition |
| root_a=/dev/mmcblk0p2     | Partition A |
| root_b=/dev/mmcblk0p3     | Partition B |
| update_endpoint=/dev/sda1 | If zi image is not detected in /etc/zymbit/zboot/update_artifacts/output of ACTIVE root, will look here for zi image and attempt download |
| endpoint_type=USB         | Either USB or HTTPS |
| update_name=base_ota      | The base name of the zi image |

Reboot to boot into Zboot and apply your updates.

`sudo reboot`

## zboot Boot Process

The Zboot process will now take place. On the console, you will see:

* “Loading zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit HSM
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions - approximately 7 minutes, each.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

## Reload all utilities

The Bootware utilities are needed for Bootware to function. If not included in your newly loaded image, you will need to load the utilities into your partition(s).

## Recovery

Each successful boot will clear a max_boot_failure counter. A max_boot_failure count of 3 (currently not user configurable) will trigger the recovery mechanism. The BACKUP partition will become the ACTIVE partition. If neither can boot, the endpoint with a good image will be loaded.

## Force Failover

## Automatic Update Process

Bootware is configured with a cronjob that will check your endpoint for a new image once every minute. If Bootware detects a new image, it will attempt to pull down the new image and reload to the BACKUP partition. The BACKUP partition will then be set as the ACTIVE partition for the next boot. If the next boot fails, Bootware will move the ACTIVE partition back to the original ACTIVE partition.

## Change Active/Backup Partitions
OUT OF DATE FOR PREVIEW2
To switch the Active partition manually, edit /boot/cmdline.txt and change the root= parameter to point at the other partition:

Current Partition Active:

`console=serial0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 fsck.repair=yes rootwait`

Switch to other Partition Active:

`console=serial0,115200 console=tty1 root=/dev/mmcblk0p3 rootfstype=ext4 fsck.repair=yes rootwait`


# FAQ

Q. What happens if I cannot boot into the ACTIVE partition?  
A.If your ACTIVE fails to boot more than 3 times, Bootware will switch the ACTIVE and BACKUP partitions.
Q. How do I create my own custom image using Preview?  
A. The recommended procedure is to create two tarballs - one of the boot partition and one of the root partition.
An alternative would be to use a CM4 to create image and then use dd or similar tool to extract a binary
image from there. The included converter utility, zymbit-image-convertor can create a zboot image from either a
binary image or two tarballs.

Q. What happens if my boot artifacts have a problem during Preview2? Can I recover?  
A. Unfortunately no. Rollback/recovery will be implemented per the Bootware in a future release.

Q. Can I start over, meaning completely from scratch, if a Preview unit cannot boot?  
A. You must be able to access zboot. If you cannot boot, there is currently no method for recovery in this Preview.

