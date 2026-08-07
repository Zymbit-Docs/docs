---
title: "ZYMKEY5 CAD Files"
linkTitle: "ZYMKEY5 CAD Files"
description: "3D Step Model, drawings, and GPIO pinout for the ZYMKEY5"
aliases:
    - /technical_reference/cad/zymkey5/
date: ""
lastmod: "2026-08-07"
draft: false
images: []
weight: 10
---

### 3D Step Model

[ZYMKEY5 STEP model](ZYMKEY5-Z052-01-000-A2.zip)

### Auxiliary Connector

12 pin JST SURS connector ([SM12B-SURS-TF(LF)(SN)](https://www.digikey.com/en/products/detail/jst-sales-america-inc/SM12B-SURS-TF/9920600?s=N4IgTCBcDaIMoFkCMYBCBaOBVASndAKgGIAUAMkQJQlwBylIAugL5A))

Mates with [12SUR-32S](https://www.digikey.com/en/products/detail/jst-sales-america-inc/12SUR-32S/1300329) ([premade cable harnesses](https://www.digikey.com/en/products/filter/rectangular-cable-assemblies/450?s=N4IgTCBcDaIMoFUBKIA0ICMZEoLoF8g))

{{< cardpane >}}
{{< card header="ZYMKEY5 Auxiliary Connector Pinout" >}}
{{< figure
    src="aux_pinout.png"
    alt="ZYMKEY5 auxiliary connector pinout"
    caption=""
    >}}
{{< /card >}}
{{< card header="ZYMKEY5 Auxiliary Connector" >}}
{{< figure
    src="aux_connector.png"
    alt="ZYMKEY5 auxiliary connector"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

| Pin Number | Pin Name | Description |
| --- | --- | --- |
| 1 | PERIM_1 | Tamper detection loop 1 recieve |
| 2 | GND | System ground |
| 3 | PERIM_0 | Tamper detection transmit.  Connect this pin to PERIM_1 and/or PERIM_2 |
| 4 | GPAUX_IN_RD | VEXT_MON | General purpose auxiliary receive and external voltage monitor pin (future use) |
| 5 | PERIM_2 | Tamper detection loop 2 receive |
| 6 | GPAUX_OUT_TXD | General purpose auxiliary transmit (future use) |
| 7 | RSVD_GND | Ground pin that is reserved for potential (future use) |
| 8 | 3V3_CM4 | 3.3V output from the Raspberry Pi |
| 9 | nSECURE_FAIL | Zymbit security fault indicator |
| 10 | LED_C2 | Zymbit’s security status LED |
| 11 | GND | System ground |
| 12 | PWR_BTN_IN | Replicates power button function of Pi 5 power button.  Active low. (future use) |

- Tamper detection pins (pins 1, 3, 5): To close a tamper loop, PERIM0 is the TX and PERIM1/PERIM2 are the RX.  So connecting PERIM0 to either of the RX lines completes the tamper for the associated loop.  This is not simply a constant voltage, it is a pseudo random encoded sequence. Breaking this loop will trigger a tamper detection security event
- GPAUX pins (pins 4, 6): these are general purpose auxiliary pins passed through from the ZYMKEY5.  These pins are currently reserved for future use
- 3V3 power (pin 8): This is the 3.3V power output that comes from the Raspberry Pi Compute Module
- Security indicator signals (pins 9, 10): These are typically used to drive LEDs which indicate the security status of the device.  Note these pins are used together and typically drive a red/blue LED. These pins are currently reserved for future use
    - nSECURE_FAIL: indicates a security fault
        - If there is a security fault but the LED_C2 is still active, this means a noncritical security failure.  If the LED_C2 is not active at the same time this means a critical security fault and the system is not operational anymore
    - LED_C2:  Zymbit’s security status LED.  When being used with the SCM4 or CM5 + Interposer, this will blink a pattern to give its status (see [SCM LED Reference](https://docs.zymbit.com/troubleshooting/scm/#led-reference) for details)

{{< cardpane >}}
{{< card header="Example use to drive LED" >}}
{{< figure
    src="led.png"
    alt="ZYMKEY5 LED example circuit"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}


### Breakout Board / Cable

Zymbit makes a breakout cable that exposes the pins of the Auxiliary connector.  Use one of the premade cable harnesses to connect to the breakout board.  The pins are labeled according to their function and are laid out in a way that is intuitive for use, not in order of pin number!  Use the pin descriptions above to identify how each pin operates.

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


### Battery Connector

The battery connector is a 1.00mm Pitch, 2-pin, JST PCB header that mates with housings with [02SR-3S](https://www.digikey.com/en/products/detail/jst-sales-america-inc/02SR-3S/1300342?gclsrc=aw.ds&gad_source=1&gad_campaignid=17922795960&gbraid=0AAAAADrbLliwlFAtLOnu4vYnRkMIG6SK8&gclid=Cj0KCQiAi9rJBhCYARIsALyPDtt9lTPFIlJEf0wJDW97hiAQmPxFoRK7w1qn3IasFqn-Juu6-khD8VMaAhC3EALw_wcB) or similar headers.  This is the same battery connector that is on the Pi5.  It takes 3.3V batteries ([like the Pi5 battery](https://www.digikey.com/en/products/detail/raspberry-pi/SC1163/21658274?gclsrc=aw.ds&gad_source=1&gad_campaignid=20228387720&gbraid=0AAAAADrbLlhDWbqKh4-P4EF0aSO6unV-A&gclid=Cj0KCQjwqebEBhD9ARIsAFZMbfxdwRKiRkUYcolECpajh4qdoJvdAUH6vsefttLv7gQ-ObwtNwXfgVEaArlbEALw_wcB)) and is used to power the RTC on the ZYMKEY5.

### BATT CHRG Pads

Battery charging is not enabled (future use). DO NOT SHORT THESE PADS. Shorting will cause leakage, prematurely draining the battery. 

### GPIO Pinout

Same as Zymkey4.

{{< cardpane >}}
{{< card header="ZYMKEY5 GPIO Pinout" >}}
{{< figure
    src="ZK4-pinout.png"
    alt="ZYMKEY5 GPIO Pinout"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

