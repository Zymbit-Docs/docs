---
title: "Secure Compute Module - SCM"
linktitle: SCM Module
description: "Secure Compute Module, used in Zymbit SEN400. Not available for purchase separately."
#toc_hide: true           # hides THIS section page from the left nav
#hide_summary: true       # also hides it from the section landing page tiles
#cascade:
  #toc_hide: true         # hide all child pages from the left nav
  #hide_summary: true     # hide children from section landing page lists
toc: true
aliases:
    - /quickstart/getting-started/scm/
draft: false
images: []
weight: 50
---

-----
### **Overview**

The Zymbit Secure Compute Module (SCM) is an all-in-one Linux compute module - secured and ready to deploy into your IoT and edge applications : a Zymbit Security Module + Hardware Wallet + Raspberry Pi CM4 integrated into a secure encapsulated module.

{{< cardpane >}}
{{< card header="SCM Physical Architecture" >}}
{{< figure
    src="scm_layer.png"
    alt=""
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}


-----
## **Configure and Setup your SCM**

#### Power On, Bootup, and login
 * Connect up the ethernet and 12V power. The unit is designed to run headless. You do not need a monitor, keyboard, or mouse. As shipped, the hostname is `zymbit-dev` and a user named `zymbit` can be used for login either on the console or via SSH. The default password for zymbit is zymbit. Please change your password once you login. 

{{< callout notice >}}
All necessary Zymbit Driver Packages have been pre-installed. No further installation is necessary. The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Without `rpiboot`, a change that prevents the SCM from booting most likely cannot be corrected, as there is no way to access the boot partition. Also, the SCM only allows boot off the eMMC. Proceed with caution before changing boot files, such as config.txt. 
{{< /callout >}}

{{< callout danger >}}
The SCM requires the `dtoverlay=dwc2,dr_mode=host` line in config.txt. DO NOT REMOVE or you will brick the unit. Do not use `otg_mode=1`.
{{< /callout >}}

 * Monitor the Blue LED on the Zymbit SCM module. The total boot time as configured should take approximately 90 seconds from power on. It will go through the following stages:
    - one slow blink:    *initializing the SCM*
    - one -> two -> three -> four blinks:   *Supervised Boot is verifying the signed file information*
    - rapid blinking:   *Supervised Boot successfully completed, booting underway*
    - blinking stops:   *USB bus enumeration found SCM; may stay off for seconds*
    - one blink every 3 seconds:   *zkifc has loaded and the system is ready to go*


##### Example of Successful Supervised Boot LED Sequence (Click image for video)

[<img src="LED_image.png" width="30%">](https://user-images.githubusercontent.com/78050323/230241994-473fc680-41da-4412-bf58-e3c0e4a5ed6c.mp4)

#### Pre-loaded OS options
* Raspberry PI OS Lite (64-bit Bookworm)
* Raspberry PI OS Lite (Legacy 64-bit Bullseye)
* Ubuntu Server 22.04 LTS (64-bit jammy)

{{< callout warning >}}
We highly recommend turning off unattended-upgrades prior to the encryption process. In some cases primarily with Ubuntu, during an update/upgrade after encryption, the update-initramfs process may fail and leave the system unable to boot.

To mitigate this issue, remove the service unattended-upgrades:
```bash
systemctl stop unattended-upgrades
systemctl disable unattended-upgrades
apt remove --purge unattended-upgrades -y
```

{{< /callout >}}

#### Recent Changes

* Now allow console login.
* Now allow initial SSH via password (use zymbit/zymbit). Please change once logged in.
* No longer providing SSH key on USB stick; as noted above, you can use password.
* No longer necessary to register product; no SSH key necessary so no need for key passphrase.
* sudo for user zymbit with password in standard PI OS manner allowed; no need to supply password every time.

* FW 01.02.02release - April 2024. Update bootcode.bin to 1/11/2023 version. You can verify with `vcgencmd bootloader_version`. Should say 1/11/2023. Necessary to support Ubuntu 22.04.
* FW 01.02.02release - Supports B1 revision of SCM
* FW 01.00.00 - Supports A1 revision of SCM
* FW 01.00.00 - Fixed:  #117 Stored tamper event on shutdown has incorrect timestamp
* zkifc 1.2-36 - Fixed: #120 get_public_key() with a very large number crashes zkifc
* zkpkcs 11 1.0-3 - Fixed: #123 zk_pkcs11: Doesn't work with 64-bit OS

{{% callout notice %}}

#### Issue Number #159 - Major
Affects SCM, Firmware version: 01.02.02release (not in earlier firmware releases)

On B1 versions of the SCM with firmware version 01.02.02release, generated key pairs created with `gen_key_pair()` are removed during reboot.

You can determine the version with:

`python3 -c "import zymkey; print(zymkey.client.get_firmware_version())"`

#### Details and Workaround:

`gen_key_pair(key_type)` creates key pairs for slots 16 and up, but a reboot removes the key slots. Keys generated using the BIP32 wallet with `gen_wallet_master_seed()`/`gen_wallet_child_key()` keys are not removed on reboot. The BIP32 wallet keys can be used as a workaround for B1 units.

For example,

Instead of:

`key_slot = gen_key_pair("secp256k1")`

Use:

`seed = zymkey.client.gen_wallet_master_seed("secp256k1", "", "wallet_name")`

`key_slot = zymkey.client.gen_wallet_child_key(seed, 0, False)`

From this point on you can use the `key_slot` in the same manner to `get_public_key(key_slot)` or `remove_key(key_slot)`

#### Notes:

* The problem does not affect the use of slots 0 through 15.
* The problem does not affect public keys stored in the Foreign key store.
* BIP32 wallets are hierarchical key stores, meaning removing the wallet master seed will remove all the keys in that wallet; removing a parent will remove all child slots of the parent. See BIP32 for more information.
* BIP32 wallets can be recovered if you setup a recovery method using either BIP39 mnemonics, or SLIP39 Shamir's Secret Sharing of mnemonics. Zymbit supports both methods.
* Your particular application of keys may lend itself to different key hierarchy strategies - you could put one key in each wallet and create many wallets or put many keys in one wallet. For details on wallets, you can see https://docs.zymbit.com/tutorials/digital-wallet/
* If you are creating multiple wallets, each wallet must have a unique name.
 
This only affects SCMs with firmware 01.02.02release. This does not affect the HSM6.

{{% /callout %}}

## Secure Compute Module

{{< cardpane >}}
{{< card header="SCM Functional Architecture" >}}
{{< figure
    src="scm_block.png"
    alt=""
    caption=""
    >}}
{{< /card >}}
{{< /cardpane >}}

##### Highlights
* 100% pin compatible with RPi CM4, all configurations.
* 100% code compatible with RPi
* Easy to Scale
* Pre-encrypted file system
{{< callout notice >}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Bootware can be used to replace supported Operating System images. See [Bootware](../../../bootware) for details.
{{< /callout >}}
* Pre-loaded Operating System (bookworm, bullseye, or Ubuntu 22.04 64-bit)
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

### Zymbit Platform Reference
 * [Zymbit Secure Edge Node 400](/hardware/sen/sen400/)
 * [Development vs Production Mode for the SCM](production-mode)

### Using SCM: API and Examples

 * [See API Documentation](/api/)
 * [Working with Supervised Boot](/tutorials/supervised-boot/)
 * [Securing the SCM further with the example Sanitization Script](https://github.com/zymbit-applications/zk-scripts)
 * [Working with the HD Wallet](/tutorials/digital-wallet/)
 * [Setting up Tamper Detect](/tutorials/perimeter-detect/)

### Support

 * [Release Notes](/troubleshooting/scm/)
 * [Contact Support](mailto:support@zymbit.com)


