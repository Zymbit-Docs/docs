---
title: Bootware on Low Memory Platforms
linkTitle: Bootware on Low Memory Platforms
description: Installing on memory resource limited Pi platforms, such as the PiZero 2W
date: "2025-03-28"
lastmod: "2025-07-18"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true
---

-----

### Process of Updating on Pi plaforms with limited RAM space.

Certain Pi platforms, such as the Pi Zero 2W, may have as little as 512MB of RAM. This is not enough space to process a Bootware update from a URL endpoint entirely in memory. In lieu of RAM, Bootware will attempt to use storage space instead. The space Bootware uses is within the DATA partition.

The first time Bootware Updates, it creates A, B, and a DATA partition of a user-specified size. If the Pi is deemed to have insufficient RAM (currently less that 4GB), Bootware will override the user supplied size of the DATA partition, and create three approximately equal size partitions - A, B, and DATA. The DATA partition will be used for image checking and processing in place of RAM.

When the Update runs from a URL Endpoint, the DATA partition will receive the image download. The signatures will be verified from the DATA partition and files will be copied from the DATA partition to the A, B, or both partitions as specified in the Update configuration.

Note that the DATA partition will never be deleted during an Update process. If the DATA partition exists, Bootware will attempt to use it. If the existing DATA partition is too small, the Update process will fail and you will boot back into your existing configuration. To allow the future Updates to succeed, delete the DATA partition and the next run of Update will re-partition your A, B, and DATA partitions with sufficient space to complete the update process. For standard Bootware installations, the DATA partition will be partition 4. To delete with parted, (WARNING! You will lose all data in partition 4)

`sudo parted -s /dev/mmcblk0 rm 4`

### Notes on ignore_low_ram flag:

1.3.2 and later includes an `ignore_low_ram=true` flag. Setting the flag to true ignores the low ram check in zboot to download images into the /DATA partition on devices that have less than 3GB RAM space. If not set (default) or set to false, a device with less that 3GB RAM space will attempt to use the DATA partition for download image processing. If the DATA partition does not exist, a DATA partition equivalent to a third of the overall space will be created for zboot use. A and B will be re-sized accordingly.

Use `zbconfig` to set the flag,

```bash
sudo zbconfig -set /boot/firmware/zb_config.enc ignore_low_ram=true
```

### Notes on Bootware Shared Data Partition:

 - Bootware creates an encrypted partition 4 called the DATA partition. This partition is viewable from either the A or B root partitions of the device. 
 - Bootware will always try to create this data partition when it applies an update. The size of this partition is specified by the user in zbcli update-config -> data partition size [default is 512 MB].
 - The DATA partition will not be resized or deleted until the user deletes the partition.
 - NEW for 1.3.1  For updates that are downloaded from an http/https endpoint: If Bootware detects insufficient RAM (currently set to less than 4GB), it will try to create and use the data partition as space to pull the image update.
   - If the DATA partition already exists, it will try to use that space.
   - If the DATA partition does not exist, like on the initial update, the DATA partition creation overrides the size given by the user - Bootware creates a partition the size of 1/3rd of the SD card. For this reason we recommend an SD card of at least 32GB.
 - This partition always has the label /dev/mapper/cryptrfs_DATA created from /dev/mmcblk0p4.
 - The data partition will always be unlocked on boot up and will be available for the user to mount in userspace. I.E mount /dev/mapper/cryptrfs_DATA <directory>
 - This partition can be used like an external drive for zbcli update-config --update-endpoint=/dev/mapper/cryptrfs_DATA to pull a .zi update from.


