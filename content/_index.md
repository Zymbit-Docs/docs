---
title: "Zymbit Documentation"
linktitle: "Zymbit Documentation"
description: "Zymbit Documentation"
date: 2020-10-06T08:47:36+00:00
lastmod: "2025-11-16"
draft: false
images: []
weight: 8
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit .

{{% callout note %}}
Recent Updates - November 2025:
- Release of new HSM 
  - ZYMKEY FIVE
  - ZYMKEY ZERO ([Pre-order](https://store.zymbit.com//zymkey-zero))
  - HSM 60 ([Pre-order](https://store.zymbit.com//hsm60))
- Release of Bootware 2.0 Beta
  - Full boot artifact isolation
  - New Zymbit hardware integration
  - Integration with Pi's Secure Boot
- Update to Zymbit Driver Package - Add support for Trixie

Details: [November 2025 Update](#november-2025)
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
#### November 2025
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
   - #207: Bootware: replace ext2 with ext4; add fsck whenever booting through zboot.

- zkifc
   - Added support for Trixie
   - Added support for new Zymbit HSM model: ZYMKEY FIVE
   - `zkifc -v` added to return version
   - zkpkcs11 package build fixed for 64-bit OSs
   - Installation script can now set the distribution via an environment variable. This allows pointing a newer distribution to use an older repo. For example, to point any OS at the Zymbit `bookworm` repo, do the following on your Pi,

```
    export distro=bookworm
    curl -fsSL https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo -E bash
```

-----
#### Previous Release Notes are in the [Troubleshooting](troubleshooting) section.
-----
<br>

