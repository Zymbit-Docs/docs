---
title: "Quickstart - SCM Developer Kit 2"
linkTitle: "Quickstart"
lastmod: "2023-10-31"
draft: false
images: []
weight: 5
toc: true
---

-----
## **SCM Developer Kit 2**

The SCM Developer's kit provides all the hardware and software components required to evaluate the Zymbit Secure Compute Module.
 * Zymbit Secure Compute Module (Zymbit Security Module and CM4)
 * Zymbit Secure Compute I/O Motherboard
 * Zymbit Perimeter Detect Cable for Channel 2
 * Zymbit External Battery (optional)
 * 12V Power Supply

{{< cardpane >}}
{{% card header="Contents of Dev Kit" %}}
{{< figure 
    src="scm-dev-kit2.png"
    alt="SCM Dev Kit"
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}

## Secure Compute Module

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
* Pre-loaded Linux kernel (bullseye 64-bit or 32-bit)
* Optionally Pre-load with customer software
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

### Using SCM: API and Examples
    
 * [See API Documentation](../../../api/)   
 * [Working with Supervised Boot](../../../tutorials/supervised-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)
    
### Support
    
 * [Release Notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


