---
title: "zbcli rollback-swap"
linkTitle: "rollback-swap"
description: "Performs rollback swap between active and backup root partitions"
date: "2024-08-14"
lastmod: "2024-09-18"
draft: false
images: []
type: docs
layout: single
weight: 50
toc: true

---

-----

## `zbcli rollback-swap`

### Description

Requires superuser privilege.

Performs rollback swap between active and non-active root partitions.

### Usage

```
zbcli rollback-swap

Options:
  -h, --help  Print help
```

`zbcli rollback-swap` provides a convenient method to manually swap between the active and non-active root partitions.

### Examples

Use `lsblk` to see that the ACTIVE root partition (/) is mounted at /dev/mmcblk0p2 -> cryptrfs_A. Only the ACTIVE partition mount point will show up.

```bash
lsblk
```

```
NAME              MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINTS
sda                 8:0    1 57.3G  0 disk
└─sda1              8:1    1 57.3G  0 part
mmcblk0           179:0    0 29.7G  0 disk
├─mmcblk0p1       179:1    0  512M  0 part  /boot/firmware
├─mmcblk0p2       179:2    0 14.4G  0 part
│ └─cryptrfs_A    254:0    0 14.3G  0 crypt /
├─mmcblk0p3       179:3    0 14.4G  0 part
└─mmcblk0p4       179:4    0  512M  0 part
  └─cryptrfs_DATA 254:1    0  496M  0 crypt
```

Now run `zbcli rollback-swap`. Confirm reboot. 

```bash
sudo zbcli rollback-swap
```

```
   Validated bootware installation
        ---------
        Pi Module:         Raspberry Pi 5
        Operating System:  Rpi-Bookworm
        Zymbit module:     Zymkey
        Kernel:            kernel_2712.img
        ---------
? Confirm swap active and non-active root partitions? This will reboot the device. (y/n) › yes
```

During the boot, Bootware® will display an INFO message that it is Executing a Rollback. After the reboot completes, look at the new mount points. The ACTIVE root (/) partition should now be mounted at /dev/mmcblk0p3 -> cryptrfs_B.

```bash
lsblk
```

```
NAME              MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINTS
sda                 8:0    1 57.3G  0 disk
└─sda1              8:1    1 57.3G  0 part
mmcblk0           179:0    0 29.7G  0 disk
├─mmcblk0p1       179:1    0  512M  0 part  /boot/firmware
├─mmcblk0p2       179:2    0 14.4G  0 part
├─mmcblk0p3       179:3    0 14.4G  0 part
│ └─cryptrfs_B    254:0    0 14.3G  0 crypt /
└─mmcblk0p4       179:4    0  512M  0 part
  └─cryptrfs_DATA 254:1    0  496M  0 crypt
```


### See Also
[zbcli update](../update)

