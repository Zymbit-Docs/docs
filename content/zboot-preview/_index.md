---
title: "zboot preview"
linkTitle: "zboot preview"
icon: ""
description: ""
aliases:
    - /quickstart/zboot-preview/
date: "2023-06-09"
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

## Overview

Zymbit has begun the rollout of a Bootware strategy, making modern IoT infrastructure resilient to compromised updates and bricked hardware. The first portion begins to address image updates in secure manner that provides for rollover and recovery. This early preview implementation provides A/B partitioning with zboot hardened bootloader.

**NOTE:** Only available on the [SCM](https://www.zymbit.com/scm/), and [SEN](https://www.zymbit.com/secure-compute-node/) in limited numbers at this time.


## zboot Summary

Zboot can pull and reflash a device with a new user image. In the current Preview, the image can be downloaded two ways:

* over the internet via http 

* from a USB storage device

If the device has only one root partition, zboot creates an A/B partition scheme and loads the new image to both partitions. Partition A will be Active and Partition B will be Backup.

If the device has an existing A/B partition scheme, zboot loads the new image to the Backup partition of A/B and sets the updated partition to Active. 

IMPORTANT: The current Preview of zboot does not have roll back recovery. It cannot detect if the device doesn’t boot up. 
## Downloading zboot Utilities

Download the zboot utilities to the SCM. The zboot utilities can be downloaded from here with curl:

```
curl https://zk-sw-repo.s3.amazonaws.com/ota_preview/zymbit-ota-preview.tar --output zymbit-ota-preview.tar
```

Once the tar file is downloaded, untar:

```
tar xvf zymbit-ota-preview.tar
```

The contents will be extracted into zymbit-ota-preview/. Files extracted: 

| install_zboot_tools.sh | Shell script to install zboot tools       |
| scripts/               | Scripts and configuration files for zboot |
| zboot_artifacts/       | zboot executable and boot artifacts       |

The install script will copy necessary scripts to /usr/bin and copy over zboot binaries to /boot. Because we copy binaries and modify files in /boot, if /dev/mmcblk0p1 is mounted somewhere other than /boot, the zboot binaries need to be copied to that mount point instead. For instance, if /dev/mmcblk0p1 is mounted on /myboot instead of /boot, please run:

```
sudo cp -a zymbit-ota-preview/zboot_artifacts/. /tmp/p1 
```

after the install script.

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
```

Once completed, all necessary files required for loading new images via zboot will be installed.

## Installing and running zboot to reflash an image

zboot requires images in a particular format unique to zboot. An image conversion tool is provided. Input images can be either complete binary images of your entire eMMC or tarballs of your /boot and /rootfs partitions. NOTE: This does not have to be done on the running device. The script can be run on any workstation.

The script used to convert to a zboot image is: 

```
zymbit-ota-preview/scripts/zymbit-image-converter [ test.img | -T ]
	test.img	Binary image file of eMMC (e.g. created from dd). Name of output image need not match.
	-T	Takes a boot partition tarball and root partition tarball as input.
```

### Examples:

```
cd zymbit-ota-preview/scripts
chmod +x zymbit-image-convertor
sudo pip3 install pycryptodome
```

### Example to convert a binary image file (created from dd if=/dev/sda bs=4M of=my.img):

```
sudo ./zymbit-image-convertor my.img
```

The script will prompt for information:

| Name of Image?: myImg                         | Name of the converted output file. A zi extension will be added to the name.  The name does not need to match the name given on the command line. |
| Version?: 1.0                                 | An arbitrary version number for your reference. |
| Boot File System Partition Number? (EX: 1): 1 | Partition number of boot filesystem in binary image file. Must be provided; no default. |
| Root File System Partition Number? (EX: 2): 2 | Partition number of root filesystem in binary image file. Must be provided; no default. |

The script extracts the boot/root tarballs of the binary image. It will then packages it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/myImg.zi`

### Example to convert boot/root tarballs (created from tar cvf my_boot.tar <boot_part>, tar cvf my_rfs.tar <root_part>)

You will need to provide the names and paths to your tarballs. Run the script:

```
sudo ./zymbit-image-convertor -T
```

The script will prompt for information:

|Name of Image?: my                    | Name of the converted output file. A zi extension will be added to the name. |
| Version?: 1.0 | An arbitrary version number for your reference.
| Boot tarball path? ./golden_boot.tar | Path including filename of boot tarball. Must be provided; no default. |
| Root tarball path? ./golden_root.tar | Path including filename of root tarball. Must be provided; no default. |

The script extracts the boot/root tarballs of the binary image. It will then package it up in a Zymbit image and output it to:

`/etc/zymbit/zboot/update_artifacts/output/myTar.zi`

Put the .zi image from the script on a server or USB drive for download. Zboot downloads images from either a USB storage device or the internet via curl requests.

## Use zboot to Install the New Image
Run: zboot_install_new_update with root permissions (this will be an executable in /usr/bin/ and can be called anywhere). Follow the prompted questions for input params needed:

```
sudo zboot_install_new_update
```
| Name of Image? (Don't add .zi extension): myTar | Name of the zi formatted image. Leave off the zi extension |
| Update endpoint? (Ex: /dev/sda1): /dev/sda1     | Endpoint location of myTar.zi image. | This should either be the USB device or the full URL of the file if pulling via HTTP. Not optional; no default. Example for URL: https://myserver.com/myTar.zi |
| Update endpoint type?  1. USB 2. HTTPS : 1      | Enter 1 if using a USB device or 2 if using HTTPS. |

After this script finishes running, you can verify these parameters by looking at /boot/zbmanifest.txt.  (This file helps communicate these config params to zboot)

`cat /boot/zbmanifest.txt`

| new_update_needed=1       | Flag set when zboot runs and detects it | needs an update If set to 0, zboot does not apply the update |
| root_dev=/dev/mmcblk0p2   | The ACTIVE root partition |
| root_a=/dev/mmcblk0p2     | Partition A |
| root_b=/dev/mmcblk0p3     | Partition B |
| update_endpoint=/dev/sda1 | If zi image is not detected in /etc/zymbit/zboot/update_artifacts/output of ACTIVE root, will look here for zi image and attempt download |
| endpoint_type=USB         | Either USB or HTTPS |
| update_name=base_ota      | The base name of the zi image |

Reboot to boot using Zboot and apply your updates.

`sudo reboot`

## Zboot Boot Process

The Zboot process will now take place. On the console, you will see:

* “Loading zboot please wait…” message, which takes around 4-5min.
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions - approximately 7 minutes, each.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

## Change Active/Backup Partitions
To switch the Active partition manually, edit /boot/cmdline.txt and change the root= parameter to point at the other partition:

```
Current Partition Active:
console=serial0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 fsck.repair=yes rootwait
Switch to other Partition Active:
console=serial0,115200 console=tty1 root=/dev/mmcblk0p 3 rootfstype=ext4 fsck.repair=yes rootwait
```

## Warnings
* For the default eMMC size of 32GB, the maximum available size for root partition data is approximately 14.4 GB. There is currently no sanity check for the data size. Please keep your root filesystem data under 14.4 GB.
* Rollback recovery and bare metal recovery is not currently implemented. You can swap the A/B partitions manually. If the unit doesn’t boot up properly, then there is currently no way to recover this unit.
* The SCM depends on the dwc2 driver instead of otg_mode driver. Do not enable otg_mode in /boot/config.txt or the SCM will not boot and cannot be recovered. /boot/config.txt from the installation scripts will be used. /boot/config.txt from your image will be ignored.
* Please note with the Waveshare IO board, any USB storage devices should be used in conjunction with a powered hub. Otherwise the SCM may reboot upon insertion


