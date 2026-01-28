---
title: Hardware
linktitle: Hardware
<<<<<<< HEAD
description: Secure Edge Nodes (SEN), Components, and Modules
=======
description: Secure Edge Nodes (SEN), Developer Kits, Components, and Modules
>>>>>>> origin/main
draft: false
images: []
weight: 10
layout: single
---

<<<<<<< HEAD
Zymbit hardware line - Secure Edge Nodes, Security Modules, and Components reference.

### [Secure Edge Nodes](sen)

Fully integrated enterprise grade computers ready to deploy. Easy to customize with available dev kits. 

| Model            | Pi CPU        | Zymbit Motherboard     | Zymbit HSM              |  Options                |
|:-----------------|:-------------:|:-----------------------|:------------------------|:------------------------|
| [SEN500](sen/sen500/)           | CM5           | [Secure Base Board](components/sbb/)           | [HSM65](modules/hsm65)   | POE Module    |
| [SEN400](sen/sen400/)           | CM4           | [Secure Base Board](components/sbb/)           | [HSM64](modules/hsm64), [SCM](modules/scm) | POE Module              |
| [SEN D35 (legacy)](sen/send35) | CM4           | [Legacy Base Board D35](components/lbb-d35/)           | [SCM](modules/scm)           |                         |
=======
Zymbit hardware line - Secure Edge Nodes, Developer Kits, Security Modules, and Components reference.

### [Secure Edge Nodes](sen)

Fully integrated enterprise grade computers ready to deploy. 

| Model            | Pi CPU        | Zymbit Motherboard     | Zymbit HSM              |  Options                |
|:-----------------|:-------------:|:-----------------------|:------------------------|:------------------------|
| [SEN500](sen/sen500/)           | CM5           | [Secure Base Board](components/sbb/)           | [HSM64](components/hsm64)   | POE Module    |
| [SEN400](sen/sen400/)           | CM4           | [Secure Base Board](components/sbb/)           | [HSM64](components/hsm64), [SCM](components/scm) | POE Module              |
| [SEN D35 (legacy)](sen/send35) | CM4           | [Legacy Base Board D35](components/lbb-d35/)           | [SCM](components/scm)           |                         |

### [Developer Kits](dev-kits)

Secure Edge Node Developer Kits

| Model            | Pi CPU        | Zymbit Motherboard     | Zymbit HSM              |  Options                |
|:-----------------|:-------------:|:-----------------------|:------------------------|:------------------------|
| [SEN500 Developer Kit](dev-kits/sen500-dev-kit/)           | CM5           | [Secure Base Board](components/sbb/)           | [HSM64](components/hsm64)   | [See included options](https://store.zymbit.com/products/sen-500-developer-kit-2)    |
>>>>>>> origin/main

### [Security Modules](modules)

Standalone secure elements included in Zymbit nodes, or as add-ons for Raspberry Pi platforms.

| Model            | Pi CPU        | Release Status         | Description:
|:-----------------|:-------------:|:-----------------------|:------------------------|
<<<<<<< HEAD
| [ZYMKEY FIVE](modules/zymkey5)    | Pi5, Pi4      | Released - NEW         |                         |
| [ZYMKEY ZERO](modules/zymkey0)    | Pi5, Pi4      | Released - NEW           |                         |
| [ZYMKEY4](modules/zymkey4)        | Pi5, Pi4      | Released               |                         |
| [HSM65](modules/hsm65)            | CM5           | Released - NEW         | HSM for SEN500; not sold separately     |
| [HSM64](modules/hsm64)            | CM4           | Released - NEW         | HSM for SEN500, SEN400; not sold separately     |
=======
| [ZYMKEY4](modules/zymkey4)        | Pi5, Pi4      | Released               |                         |
>>>>>>> origin/main
| [HSM60](modules/hsm60)            | CM5, CM4      | Released - NEW         | HSM for non-Zymbit IO motherboards |
| [HSM6](modules/hsm6)              | Pi5, Pi4      | Legacy                 |                         |
| [HSM4](modules/hsm4)              | Pi5, Pi4      | Legacy                 |                         |

<<<<<<< HEAD
### [Components](components)
=======
### [Components](components) (Add-ons and modules not sold separately)
>>>>>>> origin/main

Components included in the SEN product line.

| Model            | Pi CPU        | Zymbit HSM             | Description:
|:-----------------|:-------------:|:-----------------------|:------------------------|
<<<<<<< HEAD
| [Secure Base Board](components/sbb/)            | CM5, CM4      | [HSM65](modules/hsm65), [HSM64](modules/hsm64) | Secure Base Board included in SEN-500, SEN-400. Not sold separately |
| [Legacy Base Board D35](components/lbb-d35/)            | CM4           | [SCM](modules/scm)               | Legacy Base Board D35 Included in D35. Not sold separately |
=======
| [Secure Base Board](components/sbb/)            | CM5, CM4      | [HSM64](components/hsm64) | Secure Base Board included in SEN-500, SEN-400. Not sold separately |
| [Legacy Base Board D35](components/lbb-d35/)            | CM4           | [SCM](components/scm)               | Legacy Base Board D35 Included in D35. Not sold separately |
| [HSM64](components/hsm64)            | CM4, CM5           | Released               | HSM for SEN500, SEN400; not sold separately     |
>>>>>>> origin/main
| POE Module       |               |                        | For use as with the Secure Base Board included in the SEN 500, SEN 400.
