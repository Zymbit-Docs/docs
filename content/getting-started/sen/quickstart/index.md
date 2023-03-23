---
title: "Quickstart - Secure Edge Node"
linkTitle: "Quickstart"
lastmod: "2023-03-17"
draft: false
images: []
weight: 5
toc: true
---

{{< cardpane >}}
{{% card header="Secure Edge Node" %}}
{{< figure
    src="scn.jpg"
    alt=""
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}
-----
### **Overview**

Secure Edge Node - Zymbit offers a standard baseline enclosure that accommodates Zymbit’s secure motherboard, Secure Compute Module (SCM) and a choice of accessories.  

* Standard Type D35 Enclosure

  * Rugged plastic and metal construction
  * Tamper switch compatible - Enclosure complete Channel 1 Tamper circuit (Opening box causes Tamper Event on Ch1)
  * Integrated heatsink
  * Customizable front connector plate
  * Stackable
  * 1.04 x 3.95 x 5.80 inches,  26 x 100 x 148mm
  * Fit into standard 3.5″ drive bay caddy
  * Optional SATA power connector
  * Optional POE module
  * Custom Features

  * User cover is easily modified to include customer-specific designs 
  * Mechanical interface CAD files available
  * Options User Cover with SATA power support

* 12V Power Supply

### **Configure and Setup your Secure Edge Node**

##### Power On, Bootup, and SSH in
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for SSH login. The default password for SSH is zymbit. Please change your password once you login. Console login has been disabled.
 
 {{% callout notice %}}

The total boot time as configured should take approximately 90 seconds from power on.

{{% /callout %}}
 * Monitor the Blue LED on the Zymbit SCM module. It will go through the following stages:
    - one slow blink:    *initializing the SCM*
    - one -> two -> three -> four blinks:   *Supervised Boot is verifying the signed file information*
    - rapid blinking:   *Supervised Boot successfully completed, booting underway*
    - blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*

{{% callout notice %}}
All necessary Zymbit software has been pre-installed. No further installation is necessary. The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com for assistance.
{{% /callout %}}

##### Secure Compute Module

Inside the Secure Edge Node is the Secure Compute Module: a Zymbit Security Module + Hardware Wallet + Raspberry Pi CM4 integrated into a secure encapsulated module.

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
    
### Pre-loaded OS options

* Raspberry PI OS Lite 64-bit (Bullseye)
* Raspberry PI OS Lite 32-bit (Bullseye)

#### Using SCM: API and Examples
    
 * [See API Documentation](../../../api/)   
 * [Working with Supervised Boot](../../../tutorials/supervised-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)
    
#### Support
    
 * [Release Notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


