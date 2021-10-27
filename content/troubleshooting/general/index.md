---
title: "FAQ & Troubleshooting"
linkTitle: "GENERAL"
lastmod:
draft: false
images: []
api_docs: true
weight: 4
toc: true
---

-----

### **Products**

##### Q: Where can I learn about and/or pre-order future products?

<details>

<summary>Expand for Answer</summary>

<br>

A: Sign up for our new product email updates at the bottom of [Zymbit's homepage](https://www.zymbit.com/).

-----

</details>

##### Q: What are the differences between Zymbit's Products?

<details>

<summary>Expand for Answer</summary>

<br>

A: See the [Product Comparison Matrix](https://www.zymbit.com/security-modules/#compare-modules) for the differences between Zymkey, HSM4, and HSM6. Please [reach out](https://www.zymbit.com/contact-us/) with any further questions.

-----

</details>

##### Q: How much power do Zymbit products consume?

<details>

<summary>Expand for Answer</summary>

<br>

*   Zymkey-RPi (3.3V): idle approx. 1mA; max active < 25mA with LED off, < 35mA with LED on.
*   Zymkey-USB (5V): idle approx. 1.5mA; max active < 40mA with LEDs off, < 60mA with LEDs on.

See [Power Quality]( https://docs.zymbit.com/reference/power-quality/) for more information.

-----

</details>

### **Compatibility**

##### Q: Which operating systems does Zymbit support?
 
<details>

<summary>Expand for Answer</summary>

<br>

![supported OSs](../supported-os-dots.png) 

-----

</details>

##### Q: Which SBCs are compatible with Zymbit Products?

<details>

<summary>Expand for Answer</summary>

<br>

*  Electrically, the Zymkey-I2C will interface to any single board computer using I2C. Check compatibility with your particular Linux distribution.
*  Raspberry Pi 3, 3B+, 4, Zero
*  RPi Compute Module 3, 4
*  NVIDIA Jetson Nano, Xavier NX

-----

</details>

##### Q: Do Zymbit Products work with Arduino?

<details>

<summary>Expand for Answer</summary>

<br>

A: We have no plans to release an Arduino shield version. While we love Arduinos and use them all the time, they generally don’t have enough resources to handle cryptographic operations at this level.


-----

</details>

##### Q: Do Zymbit Products work with BeagleBone?

<details>

<summary>Expand for Answer</summary>

<br>

A: Zymbit does not officially support the BeagleBoard platform at this time.

-----

</details>
