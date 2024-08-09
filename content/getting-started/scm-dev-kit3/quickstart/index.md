---
title: "Quickstart - SCM Developer Kit 3"
linkTitle: "Quickstart"
lastmod: "2024-02-09"
draft: false
images: []
weight: 5
toc: true
---

-----
## **SCM Developer Kit 3**

{{< callout warning >}}
The SCM Developer Kit 3 is currently still under development. The Dev Kit 3 contains the MOBO2 which is available as an engineeering sample and is not meant for deployment. The items included in the Dev Kit 3 are subject to change.
{{< /callout >}}

The SCM Developer Kit 3 provides all the hardware and software components required to evaluate the Zymbit [Secure Compute Module](../../scm/quickstart) with the MOBO2 motherboard engineering samples. This motherboard is used in the [SEN Pro](https://www.zymbit.com/secure-edge-node-pro/) (Secure Edge Node Pro) product.  The Dev Kit includes:

 * Zymbit [Secure Compute Module](../../scm/quickstart) (Zymbit Security Module and CM4)
 * Zymbit Secure Compute I/O Motherboard2 (MOBO2)
 * Perimeter Detect wires for Channels 1, 2
 * 40-Pin GPIO Header PIN connector
 * 12V Power Supply
 * Zymbit External Battery (optional)

{{< cardpane >}}
{{< card header="Zymbit Dev Kit 3 Motherboard (MOBO2) - Top" >}}
{{< figure
    src="mobo2x1_top.png"
    alt="Mobo2x1_top"
    caption="The top and bottom of the Zymbit SCM Developer Kit3 Motherboard"
    >}}
{{< /card >}}
{{< card header="Zymbit Dev Kit 3 Motherboard (MOBO2) - Bottom" >}}
{{< figure
    src="mobo2x1_bottom.png"
    alt="Mobo2x1 Bottom"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}


{{< cardpane >}}
{{< card header="Dev Kit 3 - Motherboard2 (MOBO2) Rev X1 Connectors" >}}
{{< figure
    src="mobo2x1_table.png"
    alt="MOBO2 Rev X1 Connectors"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

### GPIO Pinout Reference

{{< cardpane >}}
{{< card header="SCM Motherboard MOBO2 Rev X1 GPIO Pinout" >}}
{{< figure
    src="zymbit-scm-motherboard-2X1-bottom-gpio-pinout-1500px.jpg"
    alt=""
    caption="Note: the standard GPIO pinout is accessed on the bottom side of the D35 board."
    >}}
{{< /card >}}
{{< /cardpane >}}

-----

### **Configure and Setup your SCM Developer Kit 3**

##### Power On
 * Connect the included 12V Power Supply up to the front panel 12V barrel connector. Connect an ethernet cable to the gigabit ethernet port. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. The only access is via SSH.

Monitor the Blue LED on the Zymbit SCM module. The total boot time as configured should take approximately 90 seconds from power on. It will go through the following stages:

- one slow blink:    *initializing the SCM*
- one -> two -> three -> four blinks:   *Supervised Boot is verifying the signed file information*
- rapid blinking:   *Supervised Boot successfully completed, booting underway*
- blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
- one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*

##### Login via SSH

Once the boot sequence completes and the Blue LED is blinking once every three seconds, login remotely via SSH. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for SSH login. The default password for SSH is zymbit. Please change your password once you login. Console login has been disabled.

See [Quickstart for SCM](../../scm/quickstart) for more information on how to proceed.

### Additional information - Using SCM: API and Examples

 * [See API Documentation](../../../api/)
 * [Working with Supervised Boot](../../../tutorials/supervised-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](../../../tutorials/digital-wallet/)
 * [Setting up Tamper Detect](../../../tutorials/perimeter-detect/)

### Support

 * [Release Notes](../../../troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


