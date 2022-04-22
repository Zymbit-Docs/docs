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
### Current SCM Alpha Release
April 22, 2022

#### Firmware: 
 - SCM: 00.00.27alpha

#### Zymbit Host Side Code:
 - libzk 1.1-22
 - libzymkeyssl 1.0-10
 - zkapputilslib 1.1-23
 - zkbootrtc 1.1-15
 - zkifc 1.2-33
 - zkpkcs11 1.0-2 
 - zksaapps 1.0.-15
 - zku 1.0.31

#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of Raspberry PI OS Lite (legacy/buster32) with a more secure configuration. The table below summarizes changes made to the standard image. 

| Default | As Shipped |
|------------------|--------------------------|
| Console login allowed | Disabled |
| SSH with password allowed | Disabled. SSH must use keys |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed |
| MAC with Pi OID | MAC uses Zymbit OID |

-----
### SCM Alpha Non-Standard Functionality
For the Alpha Evaluation, much of the destructive functionality will be simulated, allowing the user to trigger events for experimentation without rendering the unit useless. The Alpha units will be recoverable here at Zymbit. Production units will not be recoverable here at Zymbit if self-destruct has been triggered in the field.

| Item | Alpha | Production |
|------------|------------------------------------------------|-----------------------------------------------------------|
| Tamper Detect | Self-destruct mode does 6 flashes, 3 times and then recovers. Close loops to resume. | Self-destruct will destroy all keys. No recovery possible. |
| Verified Boot | Sign/Verify file integrity failure does 20 flashes, 3 time and then recovers. | Sign/Verify file integrity failure with execute policy to either hold in reset or self-destruct. No recovery possible.
| Last Gasp | Battery Threshold action of self-destruct does 4 flashes, 3 times and recovers. Requires bind lock. | Self-destruct action destroy all keys. No recovery possible. |


-----
### Known Issues

**Issue #91**: SCM: Low Power Last Gasp doesn't react initially if Supply power pulled then battery pulled.

Sequence to reproduce:
* plug in battery, plug in power
* set_battery_voltage_action(False, True)
* lock_binding()
* unplug power, wait 5 seconds, unplug battery, wait 5 seconds
* plug in power
* SCM does not self-destruct
On the next powercycle without the battery connected, SCM self destructs

**Issue #90**: SCM: zkifc stop/reset drops all USB devices except SCM. Causes problems when rebooting, setting tamper actions, and also during encryption. Workaround is to powercycle after any stop/reset of zkifc. Note: Configured headless precludes any issues that may surface with console I/O via a USB keyboard/mouse.

**Issue #88**: SCM: Master Wallet Seed remove times out from host side. Timeout can vary but happens with approximately 20 derived child key entries per wallet. Workaround for now is to limit individual wallet size / depth.

**Issue #87**: SCM: Manifest Retrieve missing a space between file name chunks. Manifest filename storage occurs in chunks of approximately 1k. If the total size of the strings requires multiple chunks, a space is left out between displaying the end of the chunk and the start of the next chunk. Uncovered in testing. Not a normal user configuration.


