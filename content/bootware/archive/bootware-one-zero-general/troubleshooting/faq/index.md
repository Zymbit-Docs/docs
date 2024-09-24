---
title: Frequently Asked Questions
linkTitle: "Bootware® 1.1 FAQ"
lastmod:
draft: false
images: []
type: docs
layout: single
weight: 10
toc: false

---

-----
##### Q: What Zymbit products support Bootware® 1.1?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware® 1.1 runs on the Secure Compute Module based products - the Secure Edge Node, SCM Development kits, SCM modules. Bootware® 1.1 can also run with a ZYMKEY4 on a Dev Kit with an SCM, or with a ZYMKEY on a Raspberry Pi4.

-----

</details>

##### Q: What Operating Systems are supported?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware® 1.1 supports the following OS options:
- Bookworm 64-bit
- Bullseye 64-bit
- Ubuntu 22.04 (jammy) 64-bit

-----

</details>

##### Q: Can I use Bootware® to switch Operating Systems from Bookworm to Bullseye or Ubuntu 22.04?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, you can switch between the supported Operating Systems.  Note: The CM4/SCM firmware must include bootloader version 2023/01/11 or later in order to work with Ubuntu 22.04. The version can be verified with the `vcgencmd bootloader_version` command.

-----

</details>

##### Q: Can I use a custom kernel build?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, if it is based off of one of the supported OS images - Bullseye or Ubuntu 22.04. You will need to supply your kernel and the corresponding modules from your build. You will need to link or rename your kernel image `kernel8.img` for Bookworm/Bullseye, or `vmlinuz` for Ubuntu.

-----

</details>

##### Q: What are the partitioning schema?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware® 1.1 primarily consists of three partitioning schemes:
- Boot 512MB, RootA: Approximately 50%, RootB: Approximately 50%, Encrypted Data partition 512MB
- Boot 512MB, RootA: Approximately 100%, Encrypted Data partition 512MB
- Boot 512MB, RootA: Approximately 50%, Encrypted Data partition 512MB

-----

</details>

##### Q: Are the partitions encrypted?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, the Root and Data partitions are encrypted with LUKS encryption. The Root partitions are protected by separate keys, i.e. RootA can only be unlocked with its key; the same key cannot unlock RootB. The Data partition is encrypted with a shared key between A and B; the Data partition is accessible by both RootA and RootB. The Boot partition is not encrypted.

-----

</details>

##### Q: What types of curves are used to sign and verify zi images?

<details>

<summary>Expand for Answer</summary>

<br>

A: The sign/verify process relies on ECDSA-based curves, in particular secp256k1. Public/Private key pairs can be generated in either software or Zymbit HSM hardware. The ZYMKEY uses software keys.

-----

</details>

##### Q: Is there Bare Metal Recovery?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bare metal recovery is not currently available.

-----

</details>

