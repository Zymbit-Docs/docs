---
title: Bootware on the PiZero 2W 
linkTitle: Bootware on the PiZero 2W 
description: Describes the process of installing on PiZero 2W or other memory resource limited Pi platforms
date: "2025-03-28"
lastmod: "2025-03-28"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true
---

-----

### Process of Updating on Pi plaforms with limited RAM space.

Certain Pi platforms, such as the Pi Zero 2W, may have as little as 512MB of RAM. This is not enough space to process a Bootware update from a URL endpoint entirely in memory. In lieu of RAM, Bootware will attempt to use storage space instead.

The first time Bootware Updates, it creates A, B, and a DATA partition of a user-specified size. If the Pi is deemed to have insufficient RAM (currently less that 4GB), Bootware will override the user supplied size of the DATA partition, and create three approximately equal size partitions - A, B, and DATA. The DATA partition will be used for image checking and processing in place of RAM.

[NOTE TO ME:  Maybe insert a graphic here of the partitioning?]

When the Update runs from a URL Endpoint, the DATA partition will receive the image download. The signatures will be verified from the DATA partition and files will be copied from the DATA partition to the A, B, or both partitions as specified in the Update configuration.

Note that the DATA partition will never be deleted during an Update process. If the DATA partition exists, Bootware will attempt to use it. If the existing DATA partition is too small, the Update process will fail and you will boot back into your existing configuration. To allow the future Updates to succeed, delete the DATA partition and the next run of Update will re-partition your A, B, and DATA partitions with sufficient space to complete the update process. For standard Bootware installations, the DATA partition will be partition 4. To delete with parted, (WARNING! You will lose all data in partition 4)

`sudo parted -s /dev/mmcblk0 rm 4`




