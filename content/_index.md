---
title: "Zymbit Documentation"
linktitle: "Zymbit Documentation"
description: "Zymbit Documentation"
aliases:
    - /getting-started
date: 2020-10-06T08:47:36+00:00
lastmod: "2026-01-28"
draft: false
images: []
weight: 8
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit .

{{% callout note %}}
Recent Updates - February 2026:
- Release of Bootware 2.0 Beta
  - Integration with Pi's Secure Boot
  - Full boot artifact isolation
  - Bootware bug fixes
  - Support for Trixie
- Update to Zymbit Driver Package
  - Add support for Trixie
  - PKCS11 bug fix for 64-bit OS builds

Details: [February 2026 Update](#february-2026)
{{% /callout %}}


### Latest STABLE Platform and OS Support

|                  Pi Platform:     |    SEN-500/CM5    |  SEN-400/CM4           | Pi4                    |   Pi5             | 
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM60**  | **Zymkey,HSM60,SCM**   | **Zymkey**             | **Zymkey**        |
| Raspberry Pi OS Trixie   (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} &nbsp; | {{< supported >}} |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} &nbsp; | {{< supported >}} |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< supported >}} [^1] | {{< supported >}} [^1] |                   |
| Ubuntu 24.04.3 LTS Noble (64-bit) |{{< supported >}}  | {{< supported >}} &nbsp;     | {{< supported >}} &nbsp;     | {{< supported >}} |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< supported >}} [^1] | {{< supported >}} [^1] |                   |

{{< supported >}} Full Bootware 1.3.2 Support

> NOTICE: Changes from the Pi foundation to the Pi5/CM5 firmware are incompatible with Bootware. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 release. The 11/19 release can be downloaded from here: [Pi5 Raspberry Pi OS Lite 64-bit 2024-11-19](https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/)

Contact [support](support@zymbit.com) for PiZero 2W.

[^1]: For Bootware to use Wi-Fi to retrieve images from remote endpoints on Pi4/CM4 running either Ubuntu 22.04 (jammy) or Bullseye, you must use the latest dtb file, available [here:](//bootware/1.3.2/troubleshooting/pi4-wifi).
[^2]: To install Bootware on a PiZero2W running Bullseye64, you need to update the boot artifacts prior to installation. See instructions [here](//bootware/1.3.2/troubleshooting/pizero-bullseye).

-----
#### February 2026 
-----
**Bootware® 2.0.0 Beta**

| Pi Platform:                      |  SEN500/CM5       |  SEN400/CM4            |  Pi4                   |   Pi5             |
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM60**   | **Zymkey,HSM60,SCM**  | **Zymkey**        | **Zymkey**   |
| Raspberry Pi OS Trixie   (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} &nbsp; | {{< supported >}} |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} &nbsp; | {{< supported >}} |
| Ubuntu 24.04.3 LTS Noble (64-bit) |{{< supported >}}  | {{< supported >}} &nbsp;     | {{< supported >}} &nbsp;     | {{< supported >}} |

- Features
  - Signed Boot Images: Provide known-good boot.img support for use with Bootware on Raspberry Pi devices to control the boot artifacts. Controlling boot artifacts by implementing the above will allow secure update paths for OS changes, kernel changes, overlay changes, eliminating the chance of Bootware no longer functioning after update. Images securely signed with Bootware.
  - Secure Boot: Seamless integration of Raspberry Pi's Secure Boot process into Bootware, ensuring only trusted software can run on the device. All  except SCM.

- Limitations
   - Operating Systems NOT fully supported : Bullseye, Jammy (Ubuntu 22)
   - Requires a clean Bootware install of Beta 2.0.0 - cannot upgrade from an existing Bootware 1.3.2.

- Bug fixes
  - #208: zbcli update-config doesn't allow you to clear wifi SSID and Passphrase, takes "" as valid characters.
  - #207: Bootware: replace ext2 with ext4; add fsck whenever booting through zboot.
  - #205: zbcli update-config cli errors off with `Invalid Parameter: user`. Workaround is to provide one option at a time.
  - #200: zbcli update confirmation screen indicates password has been set to change when it hasn't

- zkifc
   - Added support for Trixie
   - zkpkcs11 package build fixed for 64-bit OSs


-----
#### December 2025
-----

- Released HSM 60 - Security Module for Pi Compute Modules
- Released ZYMKEY5 - Plug-in hardware security module (for Raspberry Pi).

- zkifc
   - Installation script can now set the distribution via an environment variable. This allows pointing a newer distribution to use an older repo. For example, to point any OS at the Zymbit `bookworm` repo, do the following on your Pi,

```
    export distro=bookworm
    curl -fsSL https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo -E bash
```

Bootware® 1.3.2-3
- Open bugs:
  - #208: zbcli update-config doesn't allow you to clear wifi SSID and Passphrase, takes "" as valid characters.
  - #205: zbcli update-config cli errors off with `Invalid Parameter: user`. Workaround is to provide one option at a time.
  - #200: zbcli update confirmation screen indicates password has been set to change when it hasn't
  - #199: Multiple copies of rollback message in MOTD. Also refers to rollback as rollover. 
  - #196: overlay .zi images saves files as root regardless of what it was owned by before.
  - #195: If you delete the DATA partition with your update policy not set to BOTH, zboot does not inject the new data key into the non-updated partition's initramfs. If the user switches to the non-updated partition, the data key will return bad passphrase from initramfs. The system will timeout, boot up, and unlock the partition's LUKS volume. Access to the shared LUKS data partition will be unavailable.

-----
#### Previous Release Notes are in the [Troubleshooting](troubleshooting) section.
-----
<br>

