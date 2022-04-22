---
title: "SCM Alpha Release Troubleshooting/FAQ"
linkTitle: "SCM (Alpha)"
lastmod:
draft: false
images: []
weight: 60
toc: true
---

-----
### **Current SCM Alpha Release**
April 10, 2022

#### Firmware: 
 - SCM: XX.XX.XX

#### Zymbit Host Side Code:
 - libzk Y.Y.YY
 - libzymkeyssl 
 - zkapputilslib 
 - zkbootrtc 
 - zkifc 
 - zkpkcs 
 - zksaapps 
 - zku 

### System Platform and OS
 - CM4
 - CM4 I/O
 - Buster 32

#### Modifications from Standard Raspberry PI OS Lite
  * Login access is only available via SSH with provided key
  * No console logins are enabled.
  * Zymbit MAC address replaces Pi foundation MAC address
  * Default `pi` username replaced with `zymbit`
  * Hostname changed to `zymbit-dev`

### Features
 * Zymbit Verified Boot
 * All other existing features of HSM6 including wallet support
 * Non-destructive feature support for Alpha
 * Pre-encrypted root file system

-----

### **Known Issues**

Issue #91: SCM: Low Power Last Gasp doesn't react initially if Supply power pulled then battery pulled.

Sequence to reproduce:
* plug in battery, plug in power
* set_battery_voltage_action(False, True)
* lock_binding()
* unplug power, wait 5 seconds, unplug battery, wait 5 seconds
* plug in power
* SCM does not self-destruct
On the next powercycle without the battery connected, SCM self destructs

Issue #90: SCM: zkifc stop/reset drops all USB devices except SCM. Causes problems when rebooting, setting tamper actions, and also during encryption. Workaround is to powercycle after any stop/reset of zkifc. Note: Configured headless precludes any issues that may surface with console I/O via a USB keyboard/mouse.

Issue #88: SCM: Master Wallet Seed remove times out from host side. Timeout can vary but happens with approximately 20 derived child key entries per wallet. Workaround for now is to limit individual wallet size / depth.

Issue #87: SCM: Manifest Retrieve missing a space between file name chunks. Manifest filename storage occurs in chunks of approximately 1k. If the total size of the strings requires multiple chunks, a space is left out between displaying the end of the chunk and the start of the next chunk. Uncovered in testing. Not a normal user configuration.


