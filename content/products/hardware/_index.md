---
title: Hardware
linktitle: Hardware
description: Secure Edge Nodes (SEN), Components, and Modules
draft: false
images: []
weight: 30
layout: single
---

Zymbit hardware line - Complete Secure Edge Nodes, components,and module reference.

### [Secure Edge Nodes](sen)

Fully integrated enterprise grade computers ready to deploy. Easy to customize with available dev kits. 

| Model            | Pi CPU        | Zymbit Motherboard     | Zymbit HSM              |  Options                |
|:-----------------|:-------------:|:-----------------------|:------------------------|:------------------------|
| [SEN500](sen500/)           | CM5           | [Secure Base Board](mobos/sbb/)           | [HSM65](modules/hsm65)   | POE Module    |
| [SEN400](sen400/)           | CM4           | [Secure Base Board](mobos/sbb/)           | [HSM64](modules/hsm64), [SCM](modules/scm) | POE Module              |
| [SEN D35 (legacy)](send35) | CM4           | [Legacy Base Board D35](mobos/lbb-d35/)           | [SCM](modules/scm)           |                         |

### [Modules](modules)

Standalone secure elements included in Zymbit nodes, or for Raspberry Pi platforms.

| Model            | Pi CPU        | Release Status         | Description:
|:-----------------|:-------------:|:-----------------------|:------------------------|
| [ZYMKEY FIVE](modules/zymkey5)    | Pi5, Pi4      | Released - NEW         |                         |
| [ZYMKEY ZERO](modules/zymkey0)    | Pi5, Pi4      | Released - NEW           |                         |
| [ZYMKEY4](modules/zymkey4)        | Pi5, Pi4      | Released               |                         |
| [HSM65](modules/hsm65)            | CM5           | Released - NEW         | HSM for SEN500; not sold separately     |
| [HSM64](modules/hsm64)            | CM4           | Released - NEW         | HSM for SEN500, SEN400; not sold separately     |
| [HSM60](modules/hsm60)            | CM5, CM4      | Released - NEW         | HSM for non-Zymbit IO motherboards |
| [HSM6](modules/hsm6)              | Pi5, Pi4      | Legacy                 |                         |
| [HSM4](modules/hsm4)              | Pi5, Pi4      | Legacy                 |                         |

### [Components](components)

Components included in the SEN product line.

| Model            | Pi CPU        | Zymbit HSM             | Description:
|:-----------------|:-------------:|:-----------------------|:------------------------|
| [Secure Base Board](mobos/sbb/)            | CM5, CM4      | [HSM65](modules/hsm65), [HSM64](modules/hsm64) | Secure Base Board Included in SEN500, SEN400. Not sold separately |
| [Legacy Base Board D35](mobos/lbb-d35/)            | CM4           | [SCM](modules/scm)               | Legacy Base Board D35 Included in D35. Not sold separately |
