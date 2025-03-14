---
title: "Quickstart - SEN 400 Prototype Kit"
linkTitle: "Quickstart"
lastmod: "2024-10-30"
draft: false
images: []
weight: 5
toc: true
---

-----

<img src="sen400.png" alt="SEN 400" width="700"/>

The SEN 400 Prototype Kit provides all the hardware and software components required to evaluate the Zymbit [Secure Compute Module](../../scm/quickstart) with the SEN 400 Professional Baseboard. This baseboard is used in the [SEN 400](https://www.zymbit.com/secure-edge-node-pro/) (shown above) product.

The Dev Kit includes:

 * Zymbit [Secure Compute Module](../../scm/quickstart) (Zymbit Security Module and CM4)
 * Zymbit Professional Baseboard 400
 * Optional 12V Power Supply
 * Optional PoE++ 802.bt, 55W. Customer supplied PoE power source.

{{< cardpane >}}
{{< card header="Zymbit SEN 400 Baseboard - Top" >}}
{{< figure
    src="bb400_top.png"
    alt="Baseboard 400 top"
    caption="The top and bottom of the Zymbit SEN 400 Baseboard"
    >}}
{{< /card >}}
{{< card header="Zymbit SEN 400 Baseboard- Bottom" >}}
{{< figure
    src="bb400_bottom.png"
    alt="Baseboard 400 Bottom"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}


{{< cardpane >}}
{{< card header="SEN 400 Baseboard Connectors" >}}
{{< figure
    src="bb400_table.png"
    alt="SEN 400 Connectors"
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

### GPIO Pinout Reference

{{< cardpane >}}
{{< card header="SEN 400 Baseboard GPIO Pinout" >}}
{{< figure
    src="zymbit-scm-motherboard-2X1-bottom-gpio-pinout-1500px.jpg"
    alt=""
    caption="Note: the standard GPIO pinout is accessed on the bottom side of the SEN 400 Baseboard."
    >}}
{{< /card >}}
{{< /cardpane >}}

-----

### **Configure and Setup your SEN 400 Prototype Kit**

#### Power On
Connect the included 12V Power Supply up to the front panel 12V barrel connector. Connect an ethernet cable to the gigabit ethernet port. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. The preferred access is via SSH.

#### Status LED Indicators

| Order | Purpose | Legend | Type | Off | Red | Yellow or purple | Green or Blue |
| ----- | ------- | ------ | ---- | --- | --- | ---------------- | ------------- |
| Top | Security | SEC | Blue/Red | Not Secure | Critical security fault | Noncritical Security fault/incident | Blinking Zymbit Blue LED |
| 3 | Activity | ACT | Green/Red | No Activity | Pi power error | Pi Power error but still operational | eMMC or PCIE activity |
| 2 | Primary power | PWR | Green/Red | No primary power | Primary power error | Sleep/low power | Full primary power |
| Bottom | Secondary power | PWR2 | Green/Red | No secondary power | Secondary power error | Secondary power is limited	| Full secondary power | 

Monitor the Blue LED for the status of the Zymbit SCM module. The total boot time for an SCM should take approximately 90 seconds from power on. It will go through the following stages:

- one slow blink:    *initializing the SCM*
- one -> two -> three -> four blinks:   *Supervised Boot is verifying the signed file information*
- rapid blinking:   *Supervised Boot successfully completed, booting underway*
- blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
- one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*

##### Login via SSH

Once the boot sequence completes and the Blue LED is blinking once every three seconds, login either via the console or remotely via SSH. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for login. The default password is zymbit. Please change your password once you login.

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


