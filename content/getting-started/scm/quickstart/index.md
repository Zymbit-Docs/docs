---
title: "SCM (Alpha Release) Getting Started"
linkTitle: "Getting Started"
lastmod:
draft: false
images: []
weight: 5
toc: true
---

-----
### **Getting Started with the Secure Compute Module Alpha Release**
April 17, 2022

#### Welcome Intro

The SCM Early Release comes pre-loaded with Raspberry Pi OS Lite (legacy) - Buster 32bit, and all Zymbit software. The root filesystem is already encrypted. A default set of boot files are configured to use Zymbit Verified Boot mechanism.

##### What's included in the Alpha box

 * Raspberry Pi CM4 8GB, 32GB eMMC, with wireless
 * Zymbit SCM Secure Compute Module (permanently attached to CM4)
 * Raspberry Pi CM4/IO board
 * USB drive with SSH keys necessary for login
 * Zymbit Perimeter Detect Cable Adapter
 * Zymbit Battery Adapter
 * 12V Power Supply

#### Modifications to standard Raspberry PI OS Lite
  * Login access is only available via ssh with provided key
  * No console logins are enabled.
  * Zymbit MAC address replaces Pi foundation MAC address
  * Default `pi` username replaced with `zymbit`
  * Hostname changed to `zymbit-dev`

##### Power on and Bootup
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse.
 * Monitor the Blue LED on the Zymbit SCM module. It will go through the following stages:
    - one slow blink  *initializing the SCM*
    - one -> two -> three -> four blinks *Verified Boot is verifying the signed file information*
    - rapid blinking *Verified Boot successfully completed, booting underway*
    - blinking stops *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds *zkifc has loaded and the system is ready to go*
   
   ![Example boot video](good_verified_boot.gif)

##### Changing Configuration
 * Steps to add custom packages/software

##### Where to Next?
 * Verified Boot page
 * Other tutorials (wallet, aws)
 * API link

##### Support
 * Link to release notes
 * Link to support@zymbit.com


