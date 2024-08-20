---
title: "General FAQ & Troubleshooting"
linkTitle: "General"
lastmod: "03-21-2023"
draft: false
images: []
weight: 10
toc: true
---

-----

### **Release Notes - Latest Release 1/13/2023 (RC-23.01)**

We updated the common Zymbit software release common to all products: ZYMKEY4, HSM4, HSM6, and the new SCM-based product line. Existing customers can do an update/upgrade to get the latest code.

```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo pip3 install zku --upgrade
```

#### Zymbit Host Side Code Versions (view with `dpkg -l | grep -i zym`):
* libzk 1.1-22
* libzymkeyssl 1.0-11
* zkapputilslib 1.1-25
* zkbootrtc 1.1-15
* zkifc 1.2-36
* zkpkcs11 1.0-3
* zksaapps 1.0-16
* zku 1.0.33

#### Changes
* Added support for Raspberry OS Bullseye 64-bit and Ubuntu 22.04 Jammy 32-bit and 64-bit
* Common code base supports across all products including SCM. See SCM release notes for details on SCM features.
* Fixed: #120 get_public_key() with a very large number crashes zkifc
* Fixed: #123 zk_pkcs11: Doesn't work with 64-bit OS
* Fixed: #113 LED resets to default pattern after 5-10 minutes
* Fixed: #110 Fixed memory leak in zkifc which eventually could lead to zkifc crashing
* API functions that include Bip or Slip have been renamed to BIP and SLIP. See API docs for new syntax



-----

### **Issues and Solutions**

#### Expired GPG Key Preventing Access to Repository

The Zymbit GPG key expired and was renewed on September 30, 2022. New installations should not have any problems. `apt-get update` may complain that the GPG key has expired. To update your local key, do the following:

```bash
sudo su
curl -L https://zk-sw-repo.s3.amazonaws.com/apt-zymkey-pubkey.gpg | apt-key add -
```


#### CPU Scaling Governor
We have seen some issues with the scaling cpu governor on the raspberry pi interfere with the i2c bus. This sometimes causes the zymkey to be put into a odd state or return failures from operations that get optimized out by the governor. The raspberry pi sets the **scaling governor** to be "**ondemand**" by default. We recommend switching this mode to "**performance**" to get the best out of the zymkey. Details:

{{< resource_link "reference/cpu-scaling/" >}}
How to set cpu governor to performance.
{{< /resource_link >}}

#### Unattended-upgrades
When encrypting your rootfs, we highly recommend turning off unattended-upgrades prior to the encryption process. In some cases primarily with Ubuntu 20.04, during an update/upgrade after encryption, the `update-initramfs` process may fail and leave the system unable to boot.

To mitigate this issue, remove the service unattended-upgrades:

`systemctl stop unattended-upgrades`

`systemctl disable unattended-upgrades`


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

##### Q: What is the expected battery life for Zymbit Products?

<details>

<summary>Expand for Answer</summary>

<br>

![Battery Lifetime Guidelines](../pub-battery-lifetimes.png)

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

-----

</details>

##### Q: What curves are supported for Zymbit products?

<details>

<summary>Expand for Answer</summary>

<br>

Zymkey and HSM4: NIST P-256 and secp256r1

SCM and HSM6: NIST P-256, secp256r1, secp256k1, X25519, ED25519

All Products: Only EC curves are supported. No RSA support is provided in hardware. RSA support is provided via hardware lock/unlock of PKCS11 store on host.

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
