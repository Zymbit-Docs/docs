---
title: "Troubleshooting"
linkTitle: "Troubleshooting" 
lastmod: "2023-10-10"
draft: false
images: []
weight: 30
toc: true

---

-----
### Updated Release 10/10/2023 (RC-23.01 base software unchanged)

Updated the SCM release to support the Rev B release of the SCM hardware. 

Summary of changes:

#### Pre-loaded OS options
* Raspberry PI OS Lite 64-bit (Bullseye) - SHIPPED AS STANDARD (NO CHANGE)
* Raspberry PI OS Lite 32-bit (Bullseye) - OPTIONAL, FACTORY CONFIGURED (NO CHANGE)
* Root partition now 50% of available eMMC space (encrypted). Message included on login as a reminder, along with steps to expand the root partition to 100% of space (encrypted)

#### SCM Hardware changes

* FW 01.02.02 - Supports SCM Rev B.
* SCM Rev B has different boot timing as compared to Rev A. This has to do with additional checks and with new requirements related to Zymbit bootware(tm). Average boots times are similar, however, some boot times may be longer by approximately 50 seconds. This is normal behavior for SCM Rev B units.
* SCM Rev. B has one new 40-pin connector and a different connector for tamper detect and battery backer. Please see the ECN for complete details. The new tamper/battery connector improves physical security of the SCM, improves compatibility with generic CM4 boards, and provides additional features. The new 40-pin expansion connector provides access to additional USB ports as well as additional security and integration features in future versions of the SCM.

#### Known Issues
* Zymbit IO board: Subject to rebooting during high USB in rush current. See [Engineering Note 20230721](/reference/engineering-notes/Zymbit-Engineering-Note-20230721-SCM-Motherboard-USB.pdf).
* Zymbit IO board: The ID EEPROM I2C pins are not connected. To use this feature with the Zymbit IO board, you will need two green wires to pins 27 and 28. [Contact Support](mailto:support@zymbit.com) for more information.

-----

### Updated Software Release 1/13/2023 (RC-23.01)

We've updated the SCM release to support the A1 release of the SCM hardware. Summary of changes:

#### Pre-loaded OS options
* Raspberry PI OS Lite 64-bit (Bullseye)

#### Modifications from previous beta
* Now allow initial SSH via password (use zymbit/zymbit). Please change once logged in.
* No longer providing SSH key on USB stick; as noted above, you can use password.
* No longer necessary to register product; no SSH key necessary so no need for key passphrase.
* sudo for user zymbit with password in standard PI OS manner allowed; no need to supply password every time.

#### Changes
* FW 01.00.00 - Supports SCM hardware version A1
* FW 01.00.00 - Fixed:  #117 Stored tamper event on shutdown has incorrect timestamp
* zkifc 1.2-36 - Fixed: #120 get_public_key() with a very large number crashes zkifc
* zkpkcs 11 1.0-3 - Fixed: #123 zk_pkcs11: Doesn't work with 64-bit OS

#### Open Issues
 * #122 - SCM: USB Isochronous mode data experiences delays while zkifc is running
 * #119 - SCM: will not work with otg_mode=1, must set dtoverylay=dwc2,dr_mode=host. This can affect the ability for recognition of some other USB devices at boot time
 * #126 - SCM: set_supervised_boot_policy not implemented. Currently, if there is an entry in the manifest, it is enabled. If no entry in manifest it is disabled. In Development mode it will flash 4-2 for failure. In Production mode, it self-destructs. There is no "held in reset" mode implemented.

-----

### SCM Beta Release
Oct 1, 2022

### Changes and Additions since Alpha program

* Numerous improvements in stability regarding tamper settings and events

* Added permanent slots 14 and 15 as pre-configured ed25519 slots. 

* Added a default slot for Supervised Boot manifest using slot 15. Switched the order of the filename and slot to accommodate the default. Example for python:

Was: `add_or_update_supervised_boot_file(slot = 0 , filepath ="")`
Is:  `add_or_update_supervised_boot_file(filepath ="" , slot = 15)`

* self-destruct now permanently destroys keys in Production Mode

* A system shutdown no longer reboots. It shuts down.

* Stopping `zkifc` no longer disables all USB devices.

### Issues in 10/1/2022 Beta Release

**Issue #117** SCM: Stored tamper event on shutdown has incorrect timestamp. The status of an event (or no event) is always correct, just the timestamp value is incorrectly stored when powering down. Timestamps are correct for running systems and for events that happen while under battery. This does not affect the tamper detect functionality, only the timestamp.

**Issue #116** SCM: crypt unlock takes two tries. The first attempt times out while waiting for the SCM to come on line. If you have a console attached, you will see a message stating "No Zymkeys", then the process will wait and unlock the LUKS key to gain access to the root file system.

**Issue #114**  set_perimeter_event_actions() leaves the LED off. The LED will return to normal after the next zkifc Open Session after approximately one minute.

**Fixed from Alpha to Beta - Issue #99** Minor: SCM: set_perimeter_event_actions() resets and can cause problems if another command is attempted for a period of seconds. A delay of 10 seconds after a set_perimeter_event_actions() will workaround the issue.

**Fixed from Alpha to Beta - Issue #103** Major: SCM: Tamper Detect events occassionally resets the SCM and CM4. We are still investigating the root cause of this issue, but it happens quite often with tamper events. For Alpha, self-destruction is disabled for evaluation purposes which should prevent any loss of data. It will cause a reboot.

**Fixed from Alpha to Beta - Issue #93**: SCM: battery_voltage_threshold - bad window from 2.5V - 3.0V. Setting the low voltage threshold within the range of 2.5V to 3.0V should not be allowed but there is currently no check. Do not set the low voltage threshold to > 2.5 volts.

**Fixed from Alpha to Beta - Issue #90**: SCM: zkifc stop/reset drops all USB devices except SCM. Causes problems when rebooting, setting tamper actions, and also during encryption. Workaround is to powercycle after any stop/reset of zkifc. Note: Configured headless precludes any issues that may surface with console I/O via a USB keyboard/mouse.

**Fixed from Alpha to Beta - Issue #88**: SCM: Master Wallet Seed remove times out from host side. Timeout can vary but happens with approximately 20 derived child key entries per wallet. Workaround for now is to limit individual wallet size / depth.


#### Firmware: 
 - SCM: 00.00.51beta, 00.00.34beta

#### Zymbit Host Side Code:
 - libzk 1.1-22
 - libzymkeyssl 1.0-10
 - zkapputilslib 1.1-25
 - zkbootrtc 1.1-15
 - zkifc 1.2-35
 - zkpkcs11 1.0-2 
 - zksaapps 1.0.-16
 - zku 1.0.33


-----

#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of Raspberry PI OS Lite (bullseye 64bit) with a more secure configuration.

{{% callout notice %}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com if you require a different image.
{{% /callout %}}

The table below summarizes changes made to the standard image. 

| Default | As Shipped |
|------------------|--------------------------|
| Console login allowed | Disabled |
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed |
| MAC with Pi OID | MAC uses Zymbit OID |
| sudo password free | sudo requires a password (zymkey) |

-----
### SCM Beta
Unlike the Alpha program, the Beta units allow the user to bind lock the unit in Production Mode and permanently destroy the keys. Beta units out in Production Mode will not be recoverable here at Zymbit if self-destruct has been triggered in the field.

| Item | Beta in Development Mode | Beta in Production Mode |
|------------|------------------------------------------------|-----------------------------------------------------------|
| Tamper Detect | Self-destruct mode does 6 flashes, 3 times and then recovers. Close loops to resume. | Self-destruct will destroy all keys. No recovery possible. |
| Supervised Boot | Sign/Verify file integrity failure does 4 flashes followed by 2 flashes, 3 times and then recovers. | Sign/Verify file integrity failure with execute policy to either hold in reset or self-destruct. No recovery possible.
| Last Gasp | Battery Threshold action of self-destruct does 6 flashes, 3 times and recovers. Requires bind lock. | Self-destruct action destroy all keys. No recovery possible. |

-----
### LED Reference

Common LED patterns:

* Once every 3 seconds
   * This indicates that your SCM is working and running.  

* Three rapid blinks every 3 seconds
   * This indicates the SCM is in Production Mode and is working and running.  

* Constant rapid blinking (waiting for host to connect)
   * This indicates that your SCM is operational but has not bound to the host. If the SCM continues to blink this pattern, it could mean that there is a problem with the host Pi or that the SCM is not seen by the Pi.  

* Rapid blinking then LED off permanently
   * This indicates the SCM is in Production Mode but cannot bind with the RPi.  In Production Mode the binding with a particular Pi becomes permanent. Most likely cause for this is that the SCM or the PI has been swapped out. Also can indicate an improper salt file.  

The Zymkey has the following fatal LED structure.

- Preamble: 10 very rapid flashes
- Off for 1 second
- Main code: a number of 0.5 second flashes which define the main code
- Off for 1 second
- Optional subcode: a number of 0.5 second flashes which define the subcode

The fatal LED sequence is repeated 3 times, after which the SCM reboots.

| Main Code | Sub Code | Description |
| ------ | ------ | ------ |
| 4 | 2 | Supervised Boot failure: At least one Supervised Boot file failed signature check. |
| 5 | None | ATECC Serial number mismatch. Usually the result of the keys being erased due to a tamper breach with self-destruct policy. |
| 6 | None | Digest of keys area of SCM flash have failed. Could be caused by a tamper breach or a hardware failure. Also the result of Battery Voltage Threshold self_destruct action.|
| 6 | subcode | Tamper detect event in self destruct mode while in developer mode. Subcode represents aggregate of all channels witnessed. |
| 8 | None | SCM unable to send response back to host. Can be caused by overutilized host CPU which causes heartbeats to not be sent to SCM. |
| 20 | 1 | Temperature below low boundary in self destruct mode in developer mode. |
| 20 | 2 | Temperature above high boundary in self destruct mode in developer mode. |
| 22 | 9 | Supervised Boot failure: True failure in Supervised Boot process. |


