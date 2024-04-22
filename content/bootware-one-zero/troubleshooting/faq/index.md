---
title: Frequently Asked Questions
linkTitle: "Bootware 1.0 FAQ"
lastmod:
draft: false
images: []
type: docs
layout: single
weight: 10
toc: false

---

-----
##### Q: What Zymbit products support Bootware 1.0?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware 1.0 runs on the Secure Compute Module based products - the Secure Edge Node, SCM Development kits, SCM modules.

-----

</details>

##### Q: What operation systems are supported.

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware 1.0 supports the standard SCM OS options:
- Bullseye 64-bit
- Ubuntu 22.04 (jammy) 64-bit

-----

</details>

##### Q: Can I use a custom kernel build?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, if it is based off of one of the supported OS images - Bullseye or Ubuntu 22.04. You will need to supply your kernel and the corresponding modules from your build.

-----

</details>

##### Q: What are the partitioning schema?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bootware 1.0 primarily consists of three partitioning schemes:
- Boot 512MB, RootA: Approximately 50%, RootB: Approximately 50%, Data partition 512MB
- Boot 512MB, RootA: Approximately 100%, Data partition 512MB
- Boot 512MB, RootA: Approximately 50%, Data partition 512MB

-----

</details>

##### Q: Are the partitions encrypted?

<details>

<summary>Expand for Answer</summary>

<br>

A: Yes, the Root partitions are encrypted with LUKS encryption, protected by separate keys, i.e. RootA can only be unlocked with its key; the same key cannot unlock RootB. The Boot and Data partitions are not encrypted.

-----

</details>

##### Q: What types of curves are used to sign and verify zi images?

<details>

<summary>Expand for Answer</summary>

<br>

A: The sign/verify process relies on ECDSA-based curves, in particular secp256k1. Public/Private key pairs can be generated in either software or Zymbit HSM hardware.

-----

</details>

##### Q: Is there Bare Metal Recovery?

<details>

<summary>Expand for Answer</summary>

<br>

A: Bare metal recovery is not currently available.

-----

</details>

