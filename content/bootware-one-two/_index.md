---
title: "Bootware 1.2 
linkTitle: "Bootware 1.2"
icon: ""
description: ""
aliases:
    - /bootware/
date: "2024-08-11"
lastmod: ""
draft: false
weight: 5
images: []
toc: True

---


### Bootware 1.2: General Platform Release

Bootware™ is a set of software tools and micro services for the Zymbit Security Modules. Bootware 1.2 adds support for the ZYMKEY across additional platforms. Bootware 1.2 adds support for Raspberry Pi5 along with an entirely new User Interface consolidated into one executable.

The following matrix of platforms and Operating Systems support Bootware™:

| Platform | Zymbit Module | OS Support |
| ----- | ----- | ----- |
| CM4 | SCM | Bookworm 64-bit (default), Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| CM4 | ZYMKEY4 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| Pi5 | ZYMKEY4 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| Pi4 | ZYMKEY4 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |

#### Other significant enhancements in Bootware 1.2:

**Enhancement** - uboot updated to kernel 6.6 baseline.

**Enhancement** - Baseline Pi images updated to 7/4/2024 release.

**Enhancement** - User can now specify the size of the common data partition. The common data partition is encrypted and the LUKS key (shared by A and B) is locked by the Zymbit HSM. The data partition is now mounted by default.

**Enhancement** - More efficient handling of zi images in memory. Earlier images were limited to the size of the uncompressed image in RAM. Bootware 1.2 can accommodate zi images that are compressed up to the size of RAM.

**Issue #145** - For the ZYMKEY4, the GPIO WAKE PIN is now set properly upon an OS image change.

**Issue #153** - New zi image loads of users other than the default user zymbit set permissions of /var/lib/zymbit files correctly.

**Issue #xxx** - DNS failure in zboot now times out

---

To get started with Bootware, you should have your plaform OS installed and the Zymbit SCM or ZYMKEY4 up and running. For our example images, the default hostname is zymbit-dev and the default login is zymbit with a password of zymbit. We recommend you change those during your development process. 

For any Bootware image, the PI RAM must exceed the size of the compressed zi image. We recommend the PI have at least 4MB RAM.

It is also recommended to have an HDMI console attached when using Bootware. The process of repartitioning and populating partitions can take substantial time, upwards of 45 minutes and the console serves as a point of reference of activity.

### [More information on Bootware  from zymbit.com](https://www.zymbit.com/bootware/)

## Bootware 1.2 User's Guide and Information

