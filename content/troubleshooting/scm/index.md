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
July 22, 2022

### Issues

**Issue #98**  FEATURE CHANGE: Changed references from Verified Boot to Supervised Boot. The names of methods and function calls for the Python, C, and C++ APIs changed. Any programs written to manipulate the manifest will require updating. Changes are in version `zkapputilslib 1.1-24`. To update to the new naming convention,
```
sudo apt-get update
sudo apt-get upgrade
dpkg --list zkapputilslib

```

**Fixed Issue #92** Major: SCM: Power up issues - Sometimes powering up does not complete. The LED will either never come on or will stay on. Most likely related to supercapacitor charge.

**Fixed Issue #93**: SCM: battery_voltage_threshold - bad window from 2.5V - 3.0V. Setting the low voltage threshold within the range of 2.5V to 3.0V should not be allowed but there is currently no check. Do not set the low voltage threshold to > 2.5 volts.

**Open Issue #90**: SCM: zkifc stop/reset drops all USB devices except SCM. Causes problems when rebooting, setting tamper actions, and also during encryption. Workaround is to powercycle after any stop/reset of zkifc. Note: Configured headless precludes any issues that may surface with console I/O via a USB keyboard/mouse.

**Open Issue #88**: SCM: Master Wallet Seed remove times out from host side. Timeout can vary but happens with approximately 20 derived child key entries per wallet. Workaround for now is to limit individual wallet size / depth.

**Fixed Issue #87**: SCM: Manifest Retrieve missing a space between file name chunks. Manifest filename storage occurs in chunks of approximately 1k. If the total size of the strings requires multiple chunks, a space is left out between displaying the end of the chunk and the start of the next chunk. Uncovered in testing. Not a normal user configuration.

#### Firmware: 
 - SCM: 00.00.34alpha

#### Zymbit Host Side Code:
 - libzk 1.1-22
 - libzymkeyssl 1.0-10
 - zkapputilslib 1.1-24
 - zkbootrtc 1.1-15
 - zkifc 1.2-34
 - zkpkcs11 1.0-2 
 - zksaapps 1.0.-16
 - zku 1.0.34


-----
### Previous SCM Alpha Release
April 22, 2022

### Issues

**Open Issue #92** Major: SCM: Power up issues - Sometimes powering up does not complete. The LED will either never come on or will stay on. Most likely related to supercapacitor charge. Workaround for alpha is to power down and allow 30 seconds to discharge prior to powering back up.

**Open Issue #93**: SCM: battery_voltage_threshold - bad window from 2.5V - 3.0V. Setting the low voltage threshold within the range of 2.5V to 3.0V should not be allowed but there is currently no check. Do not set the low voltage threshold to > 2.5 volts.

**Open Issue #90**: SCM: zkifc stop/reset drops all USB devices except SCM. Causes problems when rebooting, setting tamper actions, and also during encryption. Workaround is to powercycle after any stop/reset of zkifc. Note: Configured headless precludes any issues that may surface with console I/O via a USB keyboard/mouse.

**Open Issue #88**: SCM: Master Wallet Seed remove times out from host side. Timeout can vary but happens with approximately 20 derived child key entries per wallet. Workaround for now is to limit individual wallet size / depth.

**Open Issue #87**: SCM: Manifest Retrieve missing a space between file name chunks. Manifest filename storage occurs in chunks of approximately 1k. If the total size of the strings requires multiple chunks, a space is left out between displaying the end of the chunk and the start of the next chunk. Uncovered in testing. Not a normal user configuration.

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

-----

#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of Raspberry PI OS Lite (legacy/buster32) with a more secure configuration.

{{% callout notice %}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field for Alpha. Please contact support@zymbit.com if you require a different image.
{{% /callout %}}

The table below summarizes changes made to the standard image. 

| Default | As Shipped |
|------------------|--------------------------|
| Console login allowed | Disabled |
| SSH with password allowed | Disabled. SSH must use keys |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed |
| MAC with Pi OID | MAC uses Zymbit OID |
| sudo password free | sudo requires a password (zymkey) |

-----
### SCM Alpha Non-Standard Functionality
For the Alpha Evaluation, much of the destructive functionality will be simulated, allowing the user to trigger events for experimentation without rendering the unit useless. The Alpha units will be recoverable here at Zymbit. Production units will not be recoverable here at Zymbit if self-destruct has been triggered in the field.

| Item | Alpha | Production |
|------------|------------------------------------------------|-----------------------------------------------------------|
| Tamper Detect | Self-destruct mode does 6 flashes, 3 times and then recovers. Close loops to resume. | Self-destruct will destroy all keys. No recovery possible. |
| Supervised Boot | Sign/Verify file integrity failure does 22 flashes followed by 9 flashes, 3 times and then recovers. | Sign/Verify file integrity failure with execute policy to either hold in reset or self-destruct. No recovery possible.
| Last Gasp | Battery Threshold action of self-destruct does 4 flashes, 3 times and recovers. Requires bind lock. | Self-destruct action destroy all keys. No recovery possible. |

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
| 4 | None | Low voltage threshold event |
| 5 | None | ATECC Serial number mismatch. Usually the result of the keys being erased due to a tamper breach with self-destruct policy. |
| 6 | None | Digest of keys area of SCM flash have failed. Could be caused by a tamper breach or a hardware failure. Also the result of Battery Voltage Threshold self_destruct action.|
| 6 | subcode | Tamper detect event in self destruct mode while in developer mode. Subcode represents aggregate of all channels witnessed. |
| 8 | None | SCM unable to send response back to host. Can be caused by overutilized host CPU which causes heartbeats to not be sent to SCM. |
| 20 | 1 | Temperature below low boundary in self destruct mode in developer mode. |
| 20 | 2 | Temperature above high boundary in self destruct mode in developer mode. |
| 22 | 9 | Supervised Boot failure: at least one Supervised Boot file failed signature check. |


