---
title: Quickstart - ZYMKEY4
linkTitle: Quickstart
description: ""
aliases:
    - /quickstart/getting-started/zymkey4/
date: ""
lastmod: "2025-10-15"
draft: false
images: []
weight: 1
toc: true
---

ZYMKEY4 is the fourth generation of the Zymbit security module designed specifically to work with Raspberry Pi. It connects to the GPIO header of the SBC and uses the {{% term/i2c %}} bus and `GPIO4` as a WAKE_PIN to communicate with the SBC CPU via an encrypted channel.

In this *Getting Started* guide we describe how to install your ZYMKEY4 to a Raspberry Pi running Raspberry PI OS or Ubuntu. The installation process is the same for both of these Linux distributions.

<!-- TODO: Update link -->
<!-- **[Learn about Linux OS support for ZYMKEY4.](https://community.zymbit.com/c/operating-system/23)** -->

The ZYMKEY4 occupies 10 pins on the GPIO header. It can also be used with other GPIO devices attached, or other {{% term/i2c %}} devices attached. The correct address range and use of IO pins will be described in this guide as well.


<!-- TODO: Make a shortcode that can style things like this more consistent between cards. -->
{{< cardpane >}}
{{< card header="ZYMKEY4 Hardware" >}}
{{< figure
    src="ZK4-top-bottom.png"
    alt="Diagram of the ZYMKEY4 hardware"
    caption="The top and bottom of the ZYMKEY4 hardware showing the location of the GPIO header and other connectors."
    >}}
{{< /card >}}
{{< card header="ZYMKEY4 Pinout" >}}
{{< figure
    src="ZK4-pinout.png"
    alt="Diagram of the ZYMKEY4 pinout"
    caption="The pinout of the header of the ZYMKEY4. ZYMKEY4 requires exclusive access to `GPIO4`, which can be remapped to another GPIO pin. It also share the {{% term/i2c %}} bus with the default address of `0x30`."
    >}}
{{< /card >}}
{{< /cardpane >}}

### Summary of Setup Steps

<!-- TODO: Add better styling for definition lists in this theme. -->
Installing the hardware
:   Install the battery on the ZYMKEY4, and connect it to the host single-board computer (SBC).

Establish an {{% term/i2c %}} connection
:   Enable the {{% term/i2c %}} bus on the host device in order to be able to communicate with the ZYMKEY4.

Install the Zymbit Driver Package
:   These utilities provided by Zymbit are necessary to interact with the hardware module.

Test the installation
:   Your ZYMKEY4 is now temporarily bound to your SBC and ready for use in developer mode.

## Installing the hardware

### Battery Installation

{{< callout warning >}}
Battery installation is not required for the ZYMKEY4 to function, but it is highly recommended if your device is vulnerable to physical access!
{{< /callout >}}

To maintain the real-time clock (RTC) and tamper detection features in the event of power loss, install a **high quality** 3V `CR1025` coincell battery (not included) in the ZYMKEY4's battery slot with `+ve` **facing upward**. Recommend CR1025 from [Panasonic](https://industrial.panasonic.com/cdbs/www-data/pdf2/AAA4000/AAA4000C273.pdf) or [Renata](https://www.mouser.com/datasheet/2/346/CR1025_v06-25259.pdf)

![Battery Install](ZK4-battery-install.png)

<!-- Link to resource about battery installation and purpose -->

### Hardware Installation

{{< callout danger >}}
Installing your hardware correctly is important to avoid destroying your SBC or ZYMKEY4. Be sure to follow the instructions below carefully. In particular:

* Pay close attention to the images below to ensure the SBC's GPIO pins are **properly aligned** with the ZYMKEY4's header.
* Ensure that your **Raspberry Pi is powered down** before proceeding.
* Ensure that the coincell battery (if installed) is installed with the positive side (marked with `+`) facing upward.

{{< /callout >}}

#### Before installing

Power off your Raspberry Pi to ensure that neither the SBC or the ZYMKEY4 are damaged.

#### Attach hardware

Hold the ZYMKEY4 with the LED and battery holder facing upward. Then, carefully align the ZYMKEY4's connector with the first 10 GPIO pins of the Raspberry Pi.

![Alignment of the ZYMKEY4 on the Raspberry Pi GPIO header](ZK4-hw-install-1.png)

Press down firmly on the ZYMKEY4 to connect it to the GPIO pins of the Raspberry Pi. The ZYMKEY4 should fit relatively snug and maintain a tight interference fit around the pins.

![Alignment of the ZYMKEY4 on the Raspberry Pi GPIO header (side view)](ZK4-hw-install-2.png)

The ZYMKEY4 occupies 10 pins on the GPIO header. If the header of the ZYMKEY4 isn't properly aligned with the GPIO header of the Raspberry Pi, both devices could be damaged.

{{< resource_link "tutorials/alternative-gpio" >}}
The default configuration uses GPIO4. This can be reconfigured to use another GPIO of your choice.
{{< /resource_link >}}

#### Power on and confirm operation

After you have connected the hardware and are sure that the pins are properly aligned, power up your Raspberry Pi. You should see a blue LED blinking rapidly and consistently (5 blinks per second). This confirms that your ZYMKEY4 is operation but unconfigured.

![ZYMKEY4 LED 5 per sec](ZK-LED-power.gif)

If the blue LED blinks erractically, or not at all, then there is an installation error and you should check the connections.

{{< resource_link "reference/power-quality/" >}}
Power quality matters to the reliable and secure operation of your system and ZYMKEY4.
{{< /resource_link >}}

## Establish an I2C connection

For Raspian-based operating systems, you must configure the state of the {{% term/i2c %}}.

1. Log in to your Raspberry Pi and run `sudo raspi-config`.
1. Navigate to `Interfacing Options` -> `I2C` -> `Would you like the ARM I2C interface to be enabled?`
1. Select yes, and confirm this choice.

Your {{% term/i2c %}} bus is now configured and ready to talk to the ZYMKEY4. The default {{% term/i2c %}} address for the ZYMKEY4 is `0x30`. NOTE: The ZYMKEY4 will not show up in the display of tools such as `i2cdetect`. This is by design.

{{< resource_link "troubleshooting/zymkey4/#q-how-do-i-set-an-alternative-i2c-address" >}}
The default I2C address for ZYMKEY4 is 0x30. If this conflicts with another device in your system, you can reconfigure the ZYMKEY4 to use another address of your choice.
{{< /resource_link >}}

## Install the Zymbit Driver Package

Login to your host device and follow these steps to install the ZYMKEY4's Zymbit Driver Package.

The ZYMKEY4 will require a number of packages to be installed from the Raspbian and Zymbit `apt` repositories. The following setup script will be install a number of files and software packages on your system, including:

* Zymbit `.service` files located in the `/etc/systemd/system` directory
* `pip`

Ensure that `curl` is installed on your host:

```bash
sudo apt install curl
```

Download and install the necessary Zymbit services onto your device.

```bash
curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash
```


## Test the installation

When the software installation has completed, reboot your device. After the reboot has completed, the Raspberry Pi will perform an operation that will temporarily bind the ZYMKEY4 to your SBC. Once the ZYMKEY4 is bound to the SBC, the ZYMKEY4's blue LED should blink slowly--once every 3 seconds--to indicate that the binding is complete.

{{< resource_link "reference/binding" >}}
In production mode, ZYMKEY4 generates a unique Device ID by measuring certain attributes of the specific host and the ZYMKEY4 itself to permanently associate the two.
{{< /resource_link >}}

The quickest way to get started is to see the ZYMKEY4's various features at work by running some example test scripts.

Run the scripts:

```bash
python3 /usr/local/share/zymkey/examples/zk_app_utils_test.py
python3 /usr/local/share/zymkey/examples/zk_crypto_test.py
```

Now you're ready to start developing with ZYMKEY4 and Raspberry Pi. When it's time to deploy your project, read our guide on enabling Production Mode:

{{< resource_link "getting-started/zymkey4/production-mode" >}}
To permanently bind the ZYMKEY4 to a host board, generates a unique Device ID by measuring certain attributes of the host and the ZYMKEY4 itself to associate the two devices.
{{< /resource_link >}}
