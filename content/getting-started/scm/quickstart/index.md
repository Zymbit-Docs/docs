---
title: "SCM - Getting Started"
linkTitle: "Getting Started"
lastmod: "2023-01-18
draft: false
images: []
weight: 5
toc: true
---

-----
<details>

<summary>
<h3><b>Introduction to Secure Compute Module</b></h3>
</summary>

<br>
Thank you for in our Secure Compute Module (SCM) product line. SCM is a commercial product, designed to bring a higher level of security to applications that use single board computers deployed outside the security of a data center – IoT, gateways, terminals etc. Its purpose is to protect valuable assets like IP, data and credentials from typical real-world exploits. It is designed for developers to innovate freely using familiar tools, without needing expert security knowledge or additional layers of technology.

**Getting Support**

[Contact Support](mailto:support@zymbit.com)

</details>

-----
### **Overview**

The Secure Compute Module is offered as a standalone unit or can be ordered from us with two options of Development Kits, or as a complete, enclosed Node product. We currently offer two flavors of a pre-installed image:

* Raspberry PI OS Lite (Bullseye 64-bit)
* Raspberry PI OS Lite (Bullseye 32-bit)

Refer to [SCM Beta Release Notes](../../../troubleshooting/scm/) for details on this SCM release (rc-23.01)

{{% callout notice %}}
All necessary Zymbit software has been pre-installed. No further installation is necessary. The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com for assistance.
{{% /callout %}}

### **Contents of Development Kit**

 * Zymbit Secure Compute Module including Pi CM4
 * Zymbit Secure Compute I/O Motherboard [(Datasheet)](https://www.zymbit.com/secure-compute-node/#platform-features)
 * (optional) Raspberry Pi CM4 I/O board [(Datasheet)](https://datasheets.raspberrypi.com/cm4io/cm4io-datasheet.pdf)
 * Zymbit Perimeter Detect Cable for Channel 2
 * Zymbit External Battery
 * 12V Power Supply
 * USB drive with SSH keys necessary for SSH login

{{< cardpane >}}
{{% card header="Contents" %}}
{{< figure
    src="SCM-Alpha-Kit-components-2.png"
    alt="SCM Alpha Kit"
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}

##### Secure Compute Module

The Zymbit Secure Compute Module comprises a Zymbit Security Service + Hardware Wallet + Raspberry Pi CM4 integrated into a secure encapsulated module.

{{< cardpane >}}
{{% card header="SCM Physical Architecture" %}}
{{< figure
    src="scm_layer.png"
    alt=""
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}

{{< cardpane >}}
{{% card header="SCM Functional Architecture" %}}
{{< figure
    src="scm_block.png"
    alt=""
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}

##### Highlights
* 100% pin compatible with RPi CM4, all configurations.
* 100% code compatible with RPi
* Easy to Scale
* Pre-fuzzed, pre-encrypted file system
{{% callout notice %}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com for assistance.
{{% /callout %}}
* Pre-loaded Linux kernel (bullseye 32-bit)
* Pre-load with customer software
* Pre-defined file manifest & policies
* Custom MAC OUID blocks available
* Embedded hardware wallet with SLIP39-Shamir's Secret Sharing

##### Layers of Security
* Supervised boot
* Fully encapsulated
* Last gasp power defenses
* Tamper sense and response
* File system encryption
* Measured system identity & authentication
* Data encryption & signing

##### Compute Options
* Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
* LPDDR4 RAM: 1G to 8G, eMMC: 0G to 32G
* 2.4/5.0GHz Wi-Fi & Bluetooth

### **Configure and Setup your SCM**

##### 1) Power On and Bootup
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for SSH login. SSH login is restricted to only use keys.

 {{% callout notice %}}


The total boot time as configured should take approximately 90 seconds from power on.

{{% /callout %}}
 * Monitor the Blue LED on the Zymbit SCM module. It will go through the following stages:
    - one slow blink:    *initializing the SCM*
    - one -> two -> three -> four blinks:   *Supervised Boot is verifying the signed file information*
    - rapid blinking:   *Supervised Boot successfully completed, booting underway*
    - blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*

##### Example of Successful Supervised Boot LED Sequence (Click image for video)

[<img src="LED_image.jpg" width="30%">](https://user-images.githubusercontent.com/78050323/182961313-4a3981b1-6730-4cd9-a8d6-f1c8defba45e.mp4)

##### 2) Login via SSH with key
The SSH key is included on the USB drive in two formats: PPK for use with Putty and PEM for standard linux ssh

<details>

<summary>
   SSH login with Putty
</summary>

* Copy PPK key file zscn.ppk from USB drive to your host

{{< cardpane >}}
{{% card header="Open PuTTY" %}}
{{< figure
    src="putty1.png"
    alt="Load SSH key file into PuTTY"
    caption="Open PuTTY, navigate to SSH -> Auth, and Browse to the PPK file."
    >}}
{{% /card %}}
{{< /cardpane >}}

{{< cardpane >}}
{{% card header="Configure and Save" %}}
{{< figure
    src="putty2.png"
    alt="Choose Session, then name and Save"
    caption="Choose Session, then fill out the Host Name, the Session name, and Save."
    >}}
{{% /card %}}
{{< /cardpane >}}

{{< cardpane >}}
{{% card header="Open SSH Session" %}}
{{< figure
    src="putty3.png"
    alt="Open your PuTTY Session"
    caption="Choose your saved session and Open. Enter the Passphrase you received from Zymbit when prompted."
    >}}
{{% /card %}}
{{< /cardpane >}}

</details>

<details>

<summary>
   SSH login from Linux CLI
</summary>

1) Copy PEM key file zscn.pem from USB drive to your host  
2) `ssh -i zscn.pem zymbit@zymbit-dev`  
3) Present your passphrase when prompted  

</details>


#### Using SCM: API and Examples

 * [See API Documentation](../../../api/)   
 * [Working with Supervised Boot](../../../tutorials/supervised-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)

#### Support

 * [Release Notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)
