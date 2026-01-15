---
title: "Zymbit Documentation"
linktitle: "Zymbit Documentation"
description: "Zymbit Documentation"
aliases:
    - /getting-started
date: 2020-10-06T08:47:36+00:00
lastmod: "2025-11-16"
draft: false
images: []
weight: 8
layout: single
---

Welcome to Zymbit’s Documentation Site! Here, you will find all the resources you need to learn about and to use all Zymbit hardware and software.

{{% callout note %}}
Recent Updates - December 2025:
- Release of new HSM 
  - HSM 60 ([Order](https://store.zymbit.com/products/hsm60)) - Security Module for Pi Compute Modules
  - ZYMKEY5 ([Pre-Order](https://store.zymbit.com/products/zymkey5)) - Plug-in hardware security module (for Raspberry Pi).

Details: [December 2025 Update](#december-2025)
{{% /callout %}}


### Latest STABLE Platform and OS Support


|                  Pi Platform:     |    SEN-500/CM5    |  SEN-400/CM4           | Pi5                    |   Pi4             | 
|:----------------------------------|:-----------------:|:----------------------:|:----------------------:|:-----------------:|
|                  **Zymbit HSMs:** | **Zymkey,HSM60**  | **Zymkey,HSM60,SCM**   | **Zymkey**             | **Zymkey**        |
| Raspberry Pi OS Bookworm (64-bit) | {{< supported >}} | {{< supported >}} &nbsp; | {{< supported >}} | {{< supported >}} &nbsp; |
| Raspberry Pi OS Bullseye (64-bit) |                   | {{< supported >}} [^1] |                        |  {{< supported >}} [^1] |
| Ubuntu 24.04.3 LTS Noble (64-bit) |{{< supported >}}  | {{< supported >}} &nbsp;     | {{< supported >}} | {{< supported >}} &nbsp; |
| Ubuntu 22.04 LTS Jammy (64-bit)   |                   | {{< supported >}} [^1] |                        |  {{< supported >}} [^1]                  |

{{< supported >}} Full Bootware Support

> NOTICE: Changes from the Pi foundation to the Pi5/CM5 firmware are incompatible with Bootware. Symptom is Bootware Updates cannot access USB Endpoints to get images. You won't see the problem with the 11/19 release. The 11/19 release can be downloaded from here: [Pi5 Raspberry Pi OS Lite 64-bit 2024-11-19](https://downloads.raspberrypi.com/raspios_lite_arm64/images/raspios_lite_arm64-2024-11-19/)

Contact [support](mailto:support@zymbit.com) for PiZero 2W.

[^1]: For Bootware to use Wi-Fi to retrieve images from remote endpoints on Pi4/CM4 running either Ubuntu 22.04 (jammy) or Bullseye, you must use the latest dtb file, available [here:](/bootware/1.3.2/troubleshooting/pi4-wifi).

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

-----
#### Previous Release Notes are in the [Troubleshooting](troubleshooting) section.
-----
<br>

