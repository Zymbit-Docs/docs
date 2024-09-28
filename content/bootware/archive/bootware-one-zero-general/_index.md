---
title: "Bootware® 1.1 General"
linkTitle: "Bootware® 1.1 General"
icon: ""
description: ""
# aliases:
#    - /bootware/
date: "2024-07-23"
lastmod: ""
draft: false
weight: 5
images: []
toc: True

---


### Bootware® 1.1: General Platform Release

{{< callout notice >}}
[Bootware® 1.2](../bootware) is now available. Bootware® 1.2 adds support for all Zymbit devices and now includes the Pi5 platform. The user interface has been re-written from a series of scripts into one, coherent executable.
{{< /callout >}}

Bootware®™ is a set of software tools and micro services for the Zymbit Security Modules. Bootware® 1.1 adds support for the ZYMKEY across additional platforms. The following matrix of platforms and Operating Systems support Bootware®™:

| Platform | Zymbit Module | OS Support |
| ----- | ----- | ----- |
| CM4 | SCM | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| CM4 | ZYMKEY4 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |
| Pi4 | ZYMKEY4 | Bookworm 64-bit, Bullseye 64-bit, Ubuntu 22.04 (jammy) |

#### Other significant enhancements in Bootware® 1.1:

**Issue #142** - OS updates that change boot.scr can prevent future boot. Affects Ubuntu. Although the Pi version of Ubuntu does not use U-Boot, Ubuntu's dpkg kernel update re-writes the file /boot/firmware/boot.scr. boot.scr was used by Bootware® 1.0, and a re-write of the file could leave the system unable to boot. Bootware® 1.1 no longer relies on the file.

**Enhancement** - Bootware® 1.1 now includes a common data partition of 512MB. The common data partition is  encrypted and the LUKS key (shared by A and B) is locked by the Zymbit HSM.

---


To get started with Bootware®, you should have your plaform OS installed and the Zymbit SCM up and running. For our example images, the default hostname is zymbit-dev and the default login is zymbit with a password of zymbit. We recommend you change those during your development process. 

For any Bootware® image, the Pi RAM must exceed the size of the zi image. We recommend the Pi have at least 4MB RAM.

It is also recommended to have an HDMI console attached when using Bootware®. The process of repartitioning and populating partitions can take substantial time, upwards of 45 minutes and the console serves as a point of reference of activity.

### [More information on Bootware®  from zymbit.com](https://www.zymbit.com/bootware/)

## Bootware® 1.1 User's Guide and Information

