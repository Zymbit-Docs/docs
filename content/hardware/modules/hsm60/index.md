---
title: "HSM60: Compute Module Interposer - Quickstart and Integration"
linktitle: HSM60
description: "HSM60 Solution for non-Zymbit CM5,CM4 IO motherboards"
aliases:
    - /quickstart/getting-started/hsm60/
    - /getting-started/hsm60/quickstart/
date: ""
lastmod: "2026-01-03"
draft: false
images: []
weight: 10
toc: true
---

# HSM60 Integration Guide

The Zymbit HSM60 is a security interposer designed to work with the Raspberry Pi CM4 or CM5 as a drop in HSM with the same form factor.  It also can facilitate compute upgradeability, allowing a CM5 to be used on an IO board originally designed for a CM4. 

Note: Although using a CM4 on an IO board for a CM5 is technically possible, this is not recommended nor supported by Zymbit.  

This integration guide will walk you through how to install a Zymbit HSM60 Security Interposer onto a Raspberry Pi CM5 IO board with a Raspberry Pi Compute Module 5.

## Hardware Installation

### Mount Assembly

- Remove the compute module from the IO board

{{< cardpane >}}
{{< card header="HSM60 Pi CM5, CM5 IO Board" >}}
{{< figure
    src="mount0.jpg"
    alt="HSM60, CM5, IO Board"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

- Install the HSM60 onto the IO board ensuring that both connectors click in and it sits flat

<!-- ![x.png](x.png)

![check.png](check.png) -->

{{< cardpane >}}
{{< card header="❌ HSM60 incorrect orientation" >}}
{{< figure
    src="mount1.jpg"
    alt="HSM60 IO orientation"
    caption=""
    >}}
{{< /card >}}
{{< card header="✅ HSM60 Correct orientation" >}}
{{< figure
    src="mount2.jpg"
    alt="HSM60 IO correct orientation"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

{{< cardpane >}}
{{< card header="HSM60 / IO Board Placement" >}}
{{< figure
    src="mount3.png"
    alt="HSM60 IO mount"
    caption=""
    >}}
{{< /card >}}
{{< card header="HSM60 / IO Board Seated" >}}
{{< figure
    src="mount4.png"
    alt="HSM60 IO final mount"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

- Install the Raspberry Pi Compute Module

{{< cardpane >}}
{{< card header="HSM60 Pi CM5, CM5 IO Board installation complete" >}}
{{< figure
    src="mount5.jpg"
    alt="HSM60, CM5, IO Board installation"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

## Software Installation

### Overview:
* Enable the {{% term/i2c %}} bus in order to communicate with the HSM.
* Install the Zymbit Driver Package
* Test the installation

### Establish an I2C connection

For Raspian-based operating systems, you must configure the state of the {{% term/i2c %}}.

1. Log in to your Raspberry Pi and run `sudo raspi-config`.
1. Navigate to Interfacing Options -> I2C -> Would you like the ARM I2C interface to be enabled?
1. Select yes, and confirm this choice.

Your {{% term/i2c %}} bus is now configured and ready to talk to the HSM. The default {{% term/i2c %}} address for the HSM is 0x30.

{{< resource_link "troubleshooting/hsm6/#q-how-do-i-set-an-alternative-i2c-address" >}} The default I2C address for HSM is 0x30. If this conflicts with another device in your system, you can reconfigure the HSM6 to use another address of your choice. {{< /resource_link >}}

Your {{% term/i2c %}} bus is now on and ready to talk to the HSM.

### Install the Zymbit Driver Package

Login to your host device and follow these steps to install the HSM's Zymbit Driver Package.

The HSM will require a number of packages to be installed from the Raspbian and Zymbit `apt` repositories. The following setup script will be install a number of files and software packages on your system, including:

* Zymbit `.service` files located in the `/etc/systemd/system` directory
* `pip3`

Ensure that `curl` is installed on your host:

`sudo apt install curl`

Download and install the necessary Zymbit services onto your device.

`curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash`



When the software installation has completed, the script will automatically reboot your device. After the reboot has completed, the Pi will perform an operation that will temporarily bind the HSM to your SBC. Once the HSM is bound to the SBC, the HSM's blue LED should blink slowly--once every 3 seconds--to indicate that the binding is complete.

{{< resource_link "reference/binding" >}}
In production mode, HSM generates a unique Device ID by measuring certain attributes of the specific host and the HSM itself to permanently associate the two.
{{< /resource_link >}}

### Test the installation

The quickest way to get started is to see the HSM's various features at work by running these test scripts that were installed with the Zymbit Driver Package:

`python3 /usr/local/share/zymkey/examples/zk_app_utils_test.py`

`python3 /usr/local/share/zymkey/examples/zk_crypto_test.py`

Now you're ready to start developing with HSM and Raspberry Pi, or [install Bootware](/bootware/1.3.2/getting-started).

When it's time to deploy your project, read our guide on enabling Production Mode:
                                                                                                                 {{< resource_link "/tutorials/production-mode" >}}
To permanently bind the HSM to a host board, generates a unique Device ID by measuring certain attributes of the host and the HSM itself to associate the two devices.
{{< /resource_link >}}

## Additional Hardware Configuration.

### Battery Connector (J8)

{{< callout warning >}}
Battery installation is not required for the HSM to function, but it is highly recommended if your device is vulnerable to physical access!
{{< /callout >}}

The battery connector is a 1.00mm Pitch, 2-pin, JST PCB header that mates with housings with [02SR-3S](https://www.digikey.com/en/products/detail/jst-sales-america-inc/02SR-3S/1300342?gclsrc=aw.ds&gad_source=1&gad_campaignid=17922795960&gbraid=0AAAAADrbLliwlFAtLOnu4vYnRkMIG6SK8&gclid=Cj0KCQiAi9rJBhCYARIsALyPDtt9lTPFIlJEf0wJDW97hiAQmPxFoRK7w1qn3IasFqn-Juu6-khD8VMaAhC3EALw_wcB) or similar headers.  This is the same battery connector that is on the Pi5.  It takes 3.3V batteries ([like the Pi5 battery](https://www.digikey.com/en/products/detail/raspberry-pi/SC1163/21658274?gclsrc=aw.ds&gad_source=1&gad_campaignid=20228387720&gbraid=0AAAAADrbLlhDWbqKh4-P4EF0aSO6unV-A&gclid=Cj0KCQjwqebEBhD9ARIsAFZMbfxdwRKiRkUYcolECpajh4qdoJvdAUH6vsefttLv7gQ-ObwtNwXfgVEaArlbEALw_wcB)) and is used to power the RTC on the ZYMBIT HSM as well as power the security supervisor on the HSM in a low-power state when there is no primary power.  See API documentation for uses.



### Auxiliary Connector (J1)

This connector is a 12 pin JST SURS connector ([SM12B-SURS-TF(LF)(SN)](https://www.digikey.com/en/products/detail/jst-sales-america-inc/SM12B-SURS-TF/9920600?s=N4IgTCBcDaIMoFkCMYBCBaOBVASndAKgGIAUAMkQJQlwBylIAugL5A)) and mates with [12SUR-32S](https://www.digikey.com/en/products/detail/jst-sales-america-inc/12SUR-32S/1300329) ([premade cable harnesses](https://www.digikey.com/en/products/filter/rectangular-cable-assemblies/450?s=N4IgTCBcDaIMoFUBKIA0ICMZEoLoF8g))

{{< cardpane >}}
{{< card header="HSM60 Auxiliary Connector Pinout" >}}
{{< figure
    src="aux_pinout.png"
    alt="HSM60 auxiliary connector pinout"
    caption=""
    >}}
{{< /card >}}
{{< card header="HSM Auxiliary Connector" >}}
{{< figure
    src="aux_connector.png"
    alt="HSM60 auxiliary connector"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

| Pin Number | Pin Name | Description |
| --- | --- | --- |
| 1 | PERIM_1 | Tamper detection loop 1 receive |
| 2 | GND | System ground |
| 3 | PERIM_0 | Tamper detection transmit.  Connect this pin to PERIM_1 and/or PERIM_2 |
| 4 | GPAUX/VEXT MON | Auxiliary input (digital or analog, 1k R in series)  |
| 5 | PERIM_2 | Tamper detection loop 2 receive |
| 6 | GPAUX_OUT | Auxiliary output (digital, 100ohm R in series)  |
| 7 | RSVD_GND | Ground pin do not use (reserved) |
| 8 | 3V3 | 3.3V output from Zymkey voltage regulator. Powered from 5V, on when Pi is shut down |
| 9 | nSECURE_FAIL | Open drain security fault indicator; 12V max |
| 10 | nLED_OUT | Open drain blue LED indicator; 12V max |
| 11 | GND | System ground |
| 12 | nSEC_BTN_IN | Secure button input. 3.3V max. Connect between the pin and ground |

A. AUX I/O pins 4 and 6 are supported on certain firmware releases only. Contact Zymbit for more details.

B. CAUTION: 3V3 pin 8 is the direct output from the voltage regulator on Zymkey. This regulator is completely separate from the 3.3V supply on the host and is powered from the 5V pin on the 10-pin host connector. Avoid drawing more than 10mA of current. Avoid shorting the pin or back-feeding voltage into the pin. Avoid connecting the output of this pin to host I/O pins as doing so may back-power the host when its 3.3V power is off and may cause a latch-up and/or hardware damage. The 3V3 pin is intended for LEDs and for low power / sleep mode operation only. This pin may be used to power the SECURE_FAIL LED or the remote blue security status LED, for example (see below). Failure to follow these instructions may cause damage to both Zymkey and the host.

C. Tamper detection pins (pins 1, 3, 5): PERIM_0 is the transmit line and PERIM_1/PERIM_2 are the receive lines. NOTE: Zymkey 5 perimeter circuit is more advanced as compared to Zymkey 4 circuit. Connecting PERIM_0 to either of the RX lines PERIM_1/PERIM_2 completes the respective tamper loop. The tamper loop uses a high-entropy encoded pulse train with circuit delay measurement. Caution: do not connect tamper loop pins to any other voltage source or system ground. When the system is powered off and the battery is installed, the tamper loop is powered from the coin cell battery. Avoid creating current leakage in the loop as that may reduce battery life. Do not power LEDs from the loop.

D. nSECURE_FAIL pin 9: open collector output that is pulled low when a hard security failure has occurred, or self-destruct was triggered (certain scenarios). 12V max pull-up voltage, 20mA max current. The output may activate briefly when the device is in coin-cell backup mode (no 5V power). This is due to the low power nature of battery operation, as the internal circuit on Zymkey is fail-safe (i.e. generic hardware or Zymkey CPU failures will cause the output to be active). The pin may also activate for a short period of time when power is turned on/off and when Zymkey reboots internally. >2sec activation of nSECURE_FAIL with full power applied to the 5V rail may be used to definitively establish the failure.

E. nLED_OUT pin 10: open collector output that is pulled low when the blue LED on Zymkey is on. 12V max pull-up voltage, 20mA max current. Please see <insert link> for LED status codes.

F. nSEC_BTN_IN pin 12: secure button input. Install button between this pin and ground. Drive to 0 to activate. Supported on certain firmware releases only. Contact Zymbit for more details.

{{< cardpane >}}
{{< card header="Example use to drive LED" >}}
{{< figure
    src="led.png"
    alt="HSM60 LED example circuit"
    width=50%
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}
    

### Breakout Board / Cable

Zymbit makes a breakout cable that exposes the pins of the Auxiliary connector (J1).  Use one of the premade cable harnesses to connect to the breakout board.  The pins are labeled according to their function and are laid out in a way that is intuitive for use, not in order of pin number!  Use the pin descriptions above to identify how each pin operates.

{{< cardpane >}}
{{< card header="Breakout Board Pin Assignment" >}}
{{< figure
    src="bob_pinout.jpg"
    alt="Breakout Board Pin Assignment"
    caption=""
    >}}
{{< /card >}}

{{< card header="Breakout Board and Cable" >}}
{{< figure
    src="bob_cable1.jpg"
    alt="Breakout Board and Cable"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}


### Power on and confirm operation

Power up the Pi and you will see a blue LED blinking rapidly and consistently (5 blinks per second). This indicates the HSM is operational but not configured.

If the blue LED blinks erratically, or not at all, then there is an installation error and you should check your connections.


