---
title: "Zymbit Documentation"
description: ""
date: 2020-10-06T08:47:36+00:00
lastmod: 2023-12-19
draft: false
images: []
weight: 8
type: docs
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit products.

### Recent Activity
<br>

#### December 2023
-----
We have added support for Bookworm (64-bit) on the Pi5, PI4 and CM4 for the ZYMKEY, HSM4, and HSM6. Follow the Getting Started guides to install and encrypt. List of supported OS platforms:

<br>
![supported OSs](supported-os-dots.png) 
<br>

#### October 2023
-----
Secure Compute Module moved from Revision A to Revision B. The Zymbit Software did not change. The root filesystem partitioning changed from 100% of the eMMC to 50% of the eMMC (encrypted). This was done to accommodate future support for Bootware, which is available in a Preview mode. A utility is included to repartition to 100% (encrypted) if required. 

See the [Troubleshooting/FAQ](troubleshooting/scm) for more information on the changes from Rev A to Rev B of the SCM itself.
<br>
<br>

#### September 2023
-----
We recently pushed up a Preview for Bootware evaluation. This is for Development pur
oses and not meant for Production. More details on the Preview can be found here:  [Bootware Preview](bootware-preview)
