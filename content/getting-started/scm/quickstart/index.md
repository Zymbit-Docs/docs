---
title: "SCM - Getting Started"
linkTitle: "Getting Started"
lastmod: "2022-06-20"
draft: false
images: []
weight: 5
toc: true
---

-----
<details>

<summary>
<h3>Introduction to Alpha Release</h3>
</summary>

A big thank you for agreeing to checkout out our new SCM Alpha release. Your testing and feedback will help us improve the features and quality of final product before it’s general release. 

    
The following types of feedback will be very helpful to us: 
    
*	Quality - does the feature work as advertised?  
*	Useability – was the feature easy/intuitive to use?  Or totally mind numbing?  
*	Improvements/new features – what improvements or new features would you like to see? 
    
The following are key features of the product that we encourage you to test. Most have specific tutorials or documentation to support your evaluation linked below.
    
*   Tightening up standard Pi login access  
*	Pre-configured and encrypted operating system  
*   Verified Boot  
*	Sanitization Script  
*   Tamper sensors and policies  

**Getting Support**

[Contact Support](mailto:support@zymbit.com)

**Pen Testing and Beyond**
    
For those of you trying pen test the device, we understand that anything and everything is possible! Its just a question of how much time, money and expertise you have.
    
*   Can you brick it?  Yes if you do bad things to it!  
*   Can you extract sensitive data from it? Try it.  
    
Useful feedback on pen testing would include how you had configured the SCM – what sensors and policies did you have enabled, what attack and escalation path did you follow. If you have any cool pictures of angle grinders or drills, or lasers, please share them!

**Final Thoughts on Purpose**
    
SCM is a commercial product, designed to bring a higher level of security to applications that use single board computers deployed outside the security of a data center – IoT, gateways, terminals etc. Its purpose is to protect valuable assets like IP, data and credentials from typical real-world exploits. It’s designed for developers to innovate freely using familiar tools, without needing expert security knowledge or additional layers of technology. 
    
If you can help us achieve our purpose of making compute hardware products more secure, we’re on the same page. Thanks for testing – we look forward to your feedback and suggestions!

Team Zymbit.  


</details>

-----
### **Overview**
May 11, 2022

The SCM Alpha kit provides all the hardware and software components required to evaluate the Zymbit Secure Compute Module. The product you are receiving is alpha-release which means there are a small number of features that have not been included, and a few known bugs that have not yet been resolved. Refer to [SCM Alpha Release Notes](../../../troubleshooting/scm/).

#### Register your device, receive SSH passphrase

Before getting started your will need to register your device to receive a unique passphrase that has been associated with your device by Zymbit.  Register here:

[Register](https://forms.zoho.com/phil12/form/SecureComputeModuleAlphaDeviceRegistration/)

![register](reg_barcode.png)

### **Contents of Kit**
 
 * Zymbit Secure Compute Module including Pi CM4
 * Raspberry Pi CM4 I/O board[ (Datasheet)](https://datasheets.raspberrypi.com/cm4io/cm4io-datasheet.pdf)
 * Zymbit Perimeter Detect Cable
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

The Zymbit Secure Compute Module comprises a Zymbit Security Module + Hardware Wallet + Raspberry Pi CM4 integrated into a secure encapsulated module.

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
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field for Alpha. Please contact support@zymbit.com for assistance.
{{% /callout %}}
* Pre-loaded Linux kernel
* Pre-load with customer software
* Pre-defined file manifest & policies
* Custom MAC OUID blocks available
* Embedded hardware wallet with SLIP39-Shamir's Secret Sharing

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

### **Configure and Setup your SCM**

##### 1) Power On and Bootup
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for SSH login. SSH login is restricted to only use keys.
 
 * Monitor the Blue LED on the Zymbit SCM module. It will go through the following stages:
    - one slow blink:    *initializing the SCM*
    - one -> two -> three -> four blinks:   *Verified Boot is verifying the signed file information*
    - rapid blinking:   *Verified Boot successfully completed, booting underway*
    - blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*

{{< cardpane >}}
{{% card header="Boot Sequence" %}}
{{< figure 
    src="good_verified_boot.gif"
    alt="SCM Boot Sequence"
    caption="Example of successful Verified Boot LED Sequence"
    >}}
{{% /card %}}
{{< /cardpane >}}

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
 * [Working with Verified Boot](../../../tutorials/verified-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)
    
#### Support
    
 * [Release Notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


