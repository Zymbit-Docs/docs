---
title: Getting Started - ZYMKEY FIVE
linkTitle: Getting Started - ZYMKEY FIVE
description: "Quickstart guide to get your ZYMKEY FIVE up and running."
aliases:
    - /quickstart/getting-started/zymkey5/
date: ""
lastmod: "2025-11-05"
draft: false
images: []
weight: 1
toc: true
---

ZYMKEY FIVE is Zymbit's advanced plug-in security module designed to work with Raspberry Pi. It connects to the GPIO header of the Raspberry Pi and uses the {{% term/i2c %}} bus and `GPIO4` as a WAKE_PIN to communicate with the Raspberry Pi CPU via an encrypted channel.

In this *Getting Started* guide we describe how to install your ZYMKEY FIVE on a Raspberry Pi running Raspberry PI OS or Ubuntu. The installation process is the same for both of these Linux distributions.

The ZYMKEY FIVE occupies 10 pins on the GPIO header. It can also be used with other GPIO devices attached, or other {{% term/i2c %}} devices attached. The correct address range and use of IO pins will be described in this guide as well.


{{< cardpane >}}
{{< card header="ZYMKEY FIVE Hardware" >}}
{{< figure
    src="ZK4-top-bottom.png"
    alt="Diagram of the ZYMKEY FIVE hardware"
    caption="The top and bottom of the ZYMKEY FIVE hardware showing the location of the GPIO header and other connectors."
    >}}
{{< /card >}}
{{< card header="ZYMKEY FIVE Pinout" >}}
{{< figure
    src="ZK5-pinout.png"
    alt="Diagram of the ZYMKEY FIVE pinout"
    caption="The pinout of the header of the ZYMKEY FIVE. ZYMKEY FIVE requires exclusive access to `GPIO4`, which can be remapped to another GPIO pin. It also share the {{% term/i2c %}} bus with the default address of `0x30`."
    >}}
{{< /card >}}
{{< /cardpane >}}

### Summary of Setup Steps

Installing the hardware
:   Connect the battery (optional) to the ZYMKEY FIVE, and connect the ZYMKEY FIVE to the Raspberry Pi GPIO header.

Establish an {{% term/i2c %}} connection
:   Enable the {{% term/i2c %}} bus on the Raspberry Pi in order to be able to communicate with the ZYMKEY FIVE.

Install the Zymbit Driver Package
:   These utilities provided by Zymbit are necessary to interact with the hardware module.

Test the installation
:   Your ZYMKEY FIVE is now temporarily bound to your Raspberry Pi and ready for use in developer mode.

## Installing the hardware

### Battery Installation

{{< callout warning >}}
Battery installation is not required for the ZYMKEY FIVE to function, but it is highly recommended if your device is vulnerable to physical access!
{{< /callout >}}

To maintain the real-time clock (RTC) and tamper detection features in the event of power loss, connect a [Raspberry Pi ML2020 RTC Battery](https://www.raspberrypi.com/products/rtc-battery/) to the two-pin JST plug on the top side of the ZYMKEY FIVE.

![Battery Install](ZK5-battery-install.png)

### Hardware Installation

{{< callout danger >}}
Installing your hardware correctly is important to avoid destroying your Raspberry Pi or ZYMKEY FIVE. Be sure to follow the instructions below carefully. In particular:

* Pay close attention to the images below to ensure the Raspberry Pi's GPIO pins are **properly aligned** with the ZYMKEY FIVE's header.
* Ensure that your **Raspberry Pi is powered down** before proceeding.
* Ensure that the battery (if installed) is fully seated in the two-pin JST plug.

{{< /callout >}}

#### Before installing

Power off your Raspberry Pi to ensure that neither the Raspberry Pi or the ZYMKEY FIVE are damaged.

#### Attach hardware

Hold the ZYMKEY FIVE with the LED and battery connector facing upward. Then, carefully align the ZYMKEY FIVE's connector with the first 10 GPIO pins of the Raspberry Pi.

![Alignment of the ZYMKEY FIVE on the Raspberry Pi GPIO header](ZK4-hw-install-1.png)

Press down firmly on the ZYMKEY FIVE to connect it to the GPIO pins of the Raspberry Pi. The ZYMKEY FIVE should fit relatively snug and maintain a tight interference fit around the pins.

![Alignment of the ZYMKEY FIVE on the Raspberry Pi GPIO header (side view)](ZK4-hw-install-2.png)

The ZYMKEY FIVE occupies 10 pins on the GPIO header. If the header of the ZYMKEY FIVE isn't properly aligned with the GPIO header of the Raspberry Pi, both devices could be damaged.

{{< resource_link "tutorials/alternative-gpio" >}}
The default configuration uses GPIO4. This can be reconfigured to use another GPIO of your choice.
{{< /resource_link >}}

#### Power on and confirm operation

After you have connected the hardware and are sure that the pins are properly aligned, power up your Raspberry Pi. You should see a blue LED blinking rapidly and consistently (5 blinks per second). This confirms that your ZYMKEY FIVE is operational but unconfigured.

![ZYMKEY FIVE LED 5 per sec](ZK-LED-power.gif)

If the blue LED blinks erractically, or not at all, then there is an installation error and you should check the connections.

{{< resource_link "reference/power-quality/" >}}
Power quality matters to the reliable and secure operation of your system and ZYMKEY FIVE.
{{< /resource_link >}}

## Establish an I2C connection

For Raspian-based operating systems, you must configure the state of the {{% term/i2c %}}.

1. Log in to your Raspberry Pi and run `sudo raspi-config`.
2. Navigate to `Interface Options` -> `I2C` -> `Would you like the ARM I2C interface to be enabled?`
3. Select yes, and confirm this choice.

Your {{% term/i2c %}} bus is now configured and ready to talk to the ZYMKEY FIVE. The default {{% term/i2c %}} address for the ZYMKEY FIVE is `0x30`. NOTE: The ZYMKEY FIVE will not show up in the display of tools such as `i2cdetect`. This is by design.

{{< resource_link "troubleshooting/zymkey4/#q-how-do-i-set-an-alternative-i2c-address" >}}
The default I2C address for ZYMKEY FIVE is 0x30. If this conflicts with another device in your system, you can reconfigure the ZYMKEY FIVE to use another address of your choice.
{{< /resource_link >}}

## Install the Zymbit Driver Package

Login to your Raspberry Pi and follow these steps to install the ZYMKEY FIVE's Zymbit Driver Package.

The ZYMKEY FIVE will require a number of packages to be installed from the Raspbian and Zymbit `apt` repositories. The following setup script will be install a number of files and software packages on your system, including:

* Zymbit `.service` files located in the `/etc/systemd/system` directory
* `pip`

Ensure that `curl` is installed on your host:

```bash
sudo apt install curl
```

Download and install the necessary Zymbit services onto your device.

```bash
curl -fsSL https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash
```


## Test the installation

When the software installation has completed, reboot your device. After the reboot has completed, the Raspberry Pi will perform an operation that will temporarily bind the ZYMKEY FIVE to your Raspberry Pi. Once the ZYMKEY FIVE is bound to the Raspberry Pi, the ZYMKEY FIVE's blue LED should blink slowly *once every 3 seconds* to indicate that the binding is complete.

The quickest way to get started is to see the ZYMKEY FIVE's various features at work by running some example test scripts.

Run the scripts:

```bash
python3 /usr/local/share/zymkey/examples/zk_app_utils_test.py
python3 /usr/local/share/zymkey/examples/zk_crypto_test.py
```

Now you're ready to start developing with ZYMKEY FIVE and Raspberry Pi. When it's time to deploy your project, read our guide on enabling Production Mode:

{{< resource_link "products/modules/zymkey5/production-mode" >}}
To permanently bind the ZYMKEY FIVE to a host board, generates a unique Device ID by measuring certain attributes of the host and the ZYMKEY FIVE itself to associate the two devices.
{{< /resource_link >}}
