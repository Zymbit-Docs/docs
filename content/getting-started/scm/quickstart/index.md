---
title: "SCM (Alpha Release) Getting Started"
linkTitle: "Getting Started"
lastmod: "2022-04-20"
draft: false
images: []
weight: 5
toc: true
---

-----
### **Getting Started with the Secure Compute Module (SCM) Alpha Release**
April 22, 2022

The SCM Alpha comes pre-loaded with Raspberry Pi OS Lite (legacy buster 32 bit) and all Zymbit software. The root filesystem is already encrypted. A default set of boot files are configured to use Zymbit Verified Boot mechanism.

{{< cardpane >}}
{{% card header="SCM Alpha Kit Components" %}}
{{< figure 
    src="SCM-Alpha-Kit-components-2.png"
    alt="SCM Alpha Kit"
    caption="Contents of the SCM Alpha Kit"
    >}}
{{% /card %}}
{{< /cardpane >}}

##### Items
 
 * Zymbit Secure Compute Module including Pi CM4
 * Raspberry Pi CM4/IO board
 * Zymbit Perimeter Detect Cable
 * Zymbit External Battery
 * 12V Power Supply
 * USB drive with SSH keys necessary for SSH login

{{< cardpane >}}
{{% card header="Zymbit SCM Internals" %}}
{{< figure
    src="scm_block.png"
    alt=""
    caption="High Level Features"
    >}}
{{% /card %}}
{{% card header="SCM Layout" %}}
{{< figure
    src="scm_layer.png"
    alt=""
    caption="Layout Overview"
    >}}
{{% /card %}}
{{< /cardpane >}}
    
##### Highlights
* 100% pin compatible with RPi CM4, all configurations.
* 100% code compatible with RPi
* Easy to Scale
* Pre-fuzzed, pre-encrypted file system
* Pre-loaded Linux kernel
* Pre-load with customer software
* Pre-defined file manifest & policies
* Custom MAC OUID blocks available

##### Layers of Security
* Verified boot
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


#### Power On and Bootup
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for SSH login. SSH login is restricted to only use keys.
 
 * Monitor the Blue LED on the Zymbit SCM module. It will go through the following stages:
    - one slow blink  *initializing the SCM*
    - one -> two -> three -> four blinks *Verified Boot is verifying the signed file information*
    - rapid blinking *Verified Boot successfully completed, booting underway*
    - blinking stops *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds *zkifc has loaded and the system is ready to go*

{{< cardpane >}}
{{% card header="Boot Sequence" %}}
{{< figure 
    src="good_verified_boot.gif"
    alt="SCM Boot Sequence"
    caption="Example of successful Verified Boot LED Sequence"
    >}}
{{% /card %}}
{{< /cardpane >}}


#### Login via SSH with key
The SSH key is included on the USB drive in two formats: PPK for use with Putty and PEM for standard linux ssh

<details>

<summary>
   SSH login with Putty
</summary>
    
* Copy PPK key from USB drive to your host

{{< cardpane >}}
{{% card header="Open PuTTY" %}}
{{< figure
    src="putty1.png"
    alt="Load SSH key file into PuTTY"
    caption="Open PuTTY, navigate to SSH -> Auth, and Browse to the PPK file."
    >}}
{{% /card %}}
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

    1. Copy PEM key from USB drive to your host
    2. `ssh -i zscm.pem zymbit@zymbit-dev`
    3. Present your passphrase when prompted

</details>

#### Where to Next?
 * [Working with Verified Boot](../../../tutorials/verified-boot/)
 * [See API Documentation](../../../api/)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)
##### Support
 * [Release notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


