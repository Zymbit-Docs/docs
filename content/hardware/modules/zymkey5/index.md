---
title: "ZYMKEY5: Quickstart and Integration"
linktitle: ZYMKEY5
description: "The essential hardware security module for Raspberry Pi"
aliases:
    - /quickstart/getting-started/zymkey5/
    - /getting-started/zymkey5/quickstart/
date: ""
lastmod: "2026-01-03"
draft: false
images: []
weight: 20
toc: true
---

ZYMKEY5 is the essential Zymbit security module designed specifically to work with Raspberry Pi. It connects to the GPIO header of the SBC and uses the {{% term/i2c %}} bus and `GPIO4` as a WAKE_PIN to communicate with the SBC CPU via an encrypted channel.

In this *Getting Started* guide we describe how to install your ZYMKEY5 to a Raspberry Pi running Raspberry PI OS or Ubuntu. The installation process is the same for both of these Linux distributions.

The ZYMKEY5 occupies 10 pins on the GPIO header. It can also be used with other GPIO devices attached, or other {{% term/i2c %}} devices attached. The correct address range and use of IO pins will be described in this guide as well.

{{< cardpane >}}
{{< card header="ZYMKEY5 Hardware" >}}
{{< figure
    src="zymkey5.png"
    alt="Diagram of the ZYMKEY5 hardware"
    caption="The ZYMKEY5 hardware showing the location of the GPIO header and other connectors."
    >}}
{{< /card >}}
{{< card header="ZYMKEY5 Pinout" >}}
{{< figure
    src="ZK4-pinout.png"
    alt="Diagram of the ZYMKEY5 pinout"
    caption="The pinout of the header of the ZYMKEY5. ZYMKEY5 requires exclusive access to `GPIO4`, which can be remapped to another GPIO pin. It also share the {{% term/i2c %}} bus with the default address of `0x30`."
    >}}
{{< /card >}}
{{< /cardpane >}}

### Summary of Setup Steps

Installing the hardware
:   Connect the external battery to the ZYMKEY5, and connect it to the host single-board computer (SBC). The battery connector is a 1.00mm Pitch, 2-pin, JST PCB header that mates with housings with SHR-02V-S-B or similar headers. It takes 3.3V batteries and is used to power the RTC on the ZYMBIT SCM as well as power the security supervisor on the SCM in a low-power state when there is no primary power.Install the battery on the ZYMKEY5, 

Establish an {{% term/i2c %}} connection
:   Enable the {{% term/i2c %}} bus on the host device in order to be able to communicate with the ZYMKEY5.

Install the Zymbit Driver Package
:   These utilities provided by Zymbit are necessary to interact with the hardware module.

Test the installation
:   Your ZYMKEY5 is now temporarily bound to your SBC and ready for use in developer mode.

## Installing the hardware

### Battery Installation

{{< callout warning >}}
Battery installation is not required for the ZYMKEY5 to function, but it is highly recommended if your device is vulnerable to physical access!
{{< /callout >}}

Connect an external battery to the ZYMKEY5, and connect it to the host single-board computer (SBC). The battery connector is a 1.00mm Pitch, 2-pin, JST PCB header that mates with housings with SHR-02V-S-B or similar headers. It takes 3.3V batteries and is used to power the RTC on the ZYMBIT SCM as well as power the security supervisor on the SCM in a low-power state when there is no primary power.Install the battery on the ZYMKEY5, 

<!-- Link to resource about battery installation and purpose -->

### Hardware Installation

{{< callout danger >}}
Installing your hardware correctly is important to avoid destroying your Pi or ZYMKEY5. Be sure to follow the instructions below carefully. In particular:

* Pay close attention to the images below to ensure the SBC's GPIO pins are **properly aligned** with the ZYMKEY5's header.
* Ensure that your **Raspberry Pi is powered down** before proceeding.
* Ensure that the coincell battery (if installed) is installed with the positive side (marked with `+`) facing upward.

{{< /callout >}}

#### Before installing

Power off your Raspberry Pi to ensure that neither the Pi or the ZYMKEY5 are damaged.

#### Attach hardware

Press down firmly on the ZYMKEY5 to connect it to the GPIO pins of the Raspberry Pi. The ZYMKEY5 should fit relatively snug and maintain a tight interference fit around the pins.
Hold the ZYMKEY5 with the LED and battery holder facing upward. Then, carefully align the ZYMKEY5's connector with the first 10 GPIO pins of the Raspberry Pi. 

![Alignment of the ZYMKEY5 on the Raspberry Pi GPIO header](zk5-hw-install.png)


The ZYMKEY5 occupies 10 pins on the GPIO header. If the header of the ZYMKEY5 isn't properly aligned with the GPIO header of the Raspberry Pi, both devices could be damaged.

{{< resource_link "tutorials/alternative-gpio" >}}
The default configuration uses GPIO4. This can be reconfigured to use another GPIO of your choice.
{{< /resource_link >}}

#### Power on and confirm operation

After you have connected the hardware and are sure that the pins are properly aligned, power up your Raspberry Pi. You should see a blue LED blinking rapidly and consistently (5 blinks per second). This confirms that your ZYMKEY5 is operation but unconfigured.

![ZYMKEY5 LED 5 per sec](ZK-LED-power.gif)

If the blue LED blinks erractically, or not at all, then there is an installation error and you should check the connections.

{{< resource_link "reference/power-quality/" >}}
Power quality matters to the reliable and secure operation of your system and ZYMKEY5.
{{< /resource_link >}}

## Establish an I2C connection

For Raspberry Pi operating systems, you must configure the state of the {{% term/i2c %}}.

1. Log in to your Raspberry Pi and run `sudo raspi-config`.
1. Navigate to `Interfacing Options` -> `I2C` -> `Would you like the ARM I2C interface to be enabled?`
1. Select yes, and confirm this choice.

Your {{% term/i2c %}} bus is now configured and ready to talk to the ZYMKEY5. The default {{% term/i2c %}} address for the ZYMKEY5 is `0x30`. NOTE: The ZYMKEY5 will not show up in the display of tools such as `i2cdetect`. This is by design.

{{< resource_link "troubleshooting/zymkey4/#q-how-do-i-set-an-alternative-i2c-address" >}}
The default I2C address for ZYMKEY5 is 0x30. If this conflicts with another device in your system, you can reconfigure the ZYMKEY5 to use another address of your choice.
{{< /resource_link >}}

## Install the Zymbit Driver Package

Login to your host device and follow these steps to install the ZYMKEY5's Zymbit Driver Package.

The ZYMKEY5 will require a number of packages to be installed from the Raspbian and Zymbit `apt` repositories. The following setup script will be install a number of files and software packages on your system, including:

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

When the software installation has completed, reboot your device. After the reboot has completed, the Raspberry Pi will perform an operation that will temporarily bind the ZYMKEY5 to your SBC. Once the ZYMKEY5 is bound to the SBC, the ZYMKEY5's blue LED should blink slowly--once every 3 seconds--to indicate that the binding is complete.

{{< resource_link "/reference/binding" >}}
In production mode, ZYMKEY5 generates a unique Device ID by measuring certain attributes of the specific host and the ZYMKEY5 itself to permanently associate the two.
{{< /resource_link >}}

The quickest way to get started is to see the ZYMKEY5's various features at work by running some example test scripts.

Run the scripts:

```bash
python3 /usr/local/share/zymkey/examples/zk_app_utils_test.py
python3 /usr/local/share/zymkey/examples/zk_crypto_test.py
```

Now you're ready to start developing with ZYMKEY5 and Raspberry Pi. When it's time to deploy your project, read our guide on enabling Production Mode:

{{< resource_link "/tutorials/production-mode" >}}
To permanently bind the ZYMKEY5 to a host board, generates a unique Device ID by measuring certain attributes of the host and the ZYMKEY5 itself to associate the two devices.
{{< /resource_link >}}
