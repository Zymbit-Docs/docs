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
weight: 90
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


> Not supported in Bootware 2.0.0-Beta

{{% /tab %}}

{{% tab header="Zymbit SEN500" %}}

#### Steps to enable secure boot on Zymbit SEN500 or CM5

> Not supported in Bootware 2.0.0-Beta

{{% /tab %}}

{{< /tabpane >}}

