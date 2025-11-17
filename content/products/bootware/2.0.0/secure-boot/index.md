---
title: Bootware and Secure Boot
linkTitle: Bootware and Secure Boot
description: Description of Secure Boot process
date: "2025-03-28"
lastmod: "2025-11-05"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true
---

-----

### Description of Secure Boot

This explains Bootware integration with Secure Boot.

### Steps to setup Secure Boot

Bootware integration with Secure Boot is supported on Pi4, Pi5, and SEN500 (CM5-based) platforms. Choose your platform:

## Platforms

{{< tabpane text=true >}}

{{% tab header="Raspberry Pi 5" %}}

####  Steps to enable secure boot on Pi5.

Quick overview:
1. Start with Zymbit Driver Software and basic Bootware 2.0.0 installed and configured.
2. Run `zbcli secure-boot` to choose to enable Secure Boot. Sets up a zip file to be used for EEPROM configuration enabling SIGNED and SECURE Boot flags.
3. Configure you PC to provide SECURE boot signed updates of EEPROM and BOOT images via Rpiboot. Transfer zip file from previous step onto PC.
4. Establish USB download connection between the rpiboot PC and your PI5 USB-C.
5. Hold down the button on the Pi5 while you Power up.

> NOTE! THIS NEXT STEP IS IRREVERSIBLE!

6. Login to your PC and run `rpiboot -d <zymbit_folder>`. This will setup the ONE-TIME-PROGRAMMABLE registers.
7. When complete, re-connect your main power USB-C in place of the PC cable and power up. 

{{% /tab %}}

{{% tab header="Raspberry Pi 4" %}}

#### Steps to enable secure boot on Pi4

Quick overview:
1. Start with Zymbit Driver Software and basic Bootware 2.0.0 installed and configured.
2. Run `zbcli secure-boot` to choose to enable Secure Boot. Sets up a zip file to be used for EEPROM configuration enabling SIGNED and SECURE Boot flags.
3. Configure you PC to provide SECURE boot signed updates of EEPROM and BOOT images via Rpiboot. Transfer zip file from previous step onto PC.
4. Establish USB download connection between the rpiboot PC and your PI5 USB-C.
5. Additional steps needed to enable rpiboot to the Pi4:
  - Script assumes no boot.img is in use prior to its procedure, and that one will be in use afterwards.
  - The script's instructions neglect to mention removing the erase_eeprom=1 line from /boot/firmware/config.txt after the procedure is complete, since it assumes we are on the way to turning on SIGNED_BOOT, and the boot.img we will be using has its own config.txt that was created before erase_eeprom=1 was added to the one in /boot/firmware/. Probably a good idea to instruct people to delete it after the fact anyway, just to be on the safe side, but if they ignore that advice it shouldn't be an issue as long as the Pi will use a boot.img for the future.
  - You will need to enable the appropriate GPIO pins to act as a jumper to go into `rpiboot` mode. **ADD INSTRUCTION**

> NOTE! THIS NEXT STEP IS IRREVERSIBLE!

6. Login to your PC and run `rpiboot -d <zymbit_folder>`. This will setup the ONE-TIME-PROGRAMMABLE registers.
7. When complete, re-connect your main power USB-C in place of the PC cable and power up. 

{{% /tab %}}

{{% tab header="Zymbit SEN500" %}}

#### Steps to enable secure boot on Pi4

Quick overview:
1. Start with Zymbit Driver Software and basic Bootware 2.0.0 installed and configured.
2. Run `zbcli secure-boot` to choose to enable Secure Boot. Sets up a zip file to be used for EEPROM configuration enabling SIGNED and SECURE Boot flags.
3. Configure you PC to provide SECURE boot signed updates of EEPROM and BOOT images via Rpiboot. Transfer zip file from previous step onto PC.
4. Establish USB download connection between the rpiboot PC and your PI5 USB-C.
5. Disassemble the SEN-5OO.
 - Open the case.
 - Remove the motherboard.
 - Remove the CM5 and HSM65.
 - Solder a zero ohm resistor across the R104 pads.
 - Put a jumper on J20
 - Create a USB cable to connect to the internal AUX USB pins and the PC that will rpiboot the SEN-500.

> NOTE! THIS NEXT STEP IS IRREVERSIBLE!

6. Login to your PC and run `rpiboot -d <zymbit_folder>`. This will setup the ONE-TIME-PROGRAMMABLE registers.
7. When complete, re-connect your main power USB-C in place of the PC cable and power up. 

{{% /tab %}}

{{< /tabpane >}}

