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

The SCM Developer Kit2 provides all the hardware and software components required to evaluate the Zymbit [Secure Compute Module](../../scm/quickstart).
 * Zymbit [Secure Compute Module](../../scm/quickstart) (Zymbit Security Module and CM4)
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

### **Configure and Setup your SCM Developer Kit2**

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


