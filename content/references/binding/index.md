---
title: Binding, Device ID, and Authentication
description: ""
aliases:
    - /technical_reference/binding/
date: ""
lastmod: "2022-03-08"
draft: false
images: []
weight: 50
toc: true
---

Good security begins with assigning each device a unique and unalterable identity (Device ID), that is used to authenticate subsequent interactions with the device.

ZYMKEY generates a unique Device ID by measuring certain attributes of the specific host (Measurement), and then combining that Measurement with the unique ID of that specific ZYMKEY. The process of combing these identifiers uses a cryptographic function, and this process is generally termed *binding*.

On completion of the binding process, the ZYMKEY is said to be *bound* to the Pi.

### ZYMKEY supports two operating modes:

#### Developer Mode
:   Binding is temporary and the ZYMKEY can be used with a different host SBC and SD card in the future.

#### Production Mode
:   Binding in production mode is ***permanent***! The ZYMKEY can **NOT** be moved to different host SBC or used with a different SD card.

The tables below summarize the actions in Development Mode vs Production Mode with an encrypted root filesystem.

#### Developer vs Production Mode

SD Card A′ - image copy of original, encrypted SD Card A

**Developer Mode**

| **SD Card** | **ZYMKEY** | **PI4** | **Locks/Unlocks** |
| --- | --- | --- | --- |
| A | A | A | Unlocks |
| A′ | A | A | Unlocks |
| A | B | A | Locked |
| A′ | B | A | Locked |
| A | A | B | Unlocks |
| A′ | A | B | Unlocks |
| A | B | B | Locked |
| A′ | B | B | Locked |

Summary: Developer Mode is lenient and will accommodate an SD card change, or a PI4 change (or both). You cannot use a different ZYMKEY.

You also can always start over and re-use the ZYMKEY in a new setup

**Production Mode**

| **SD Card** | **ZYMKEY** | **PI4** | **Locks/Unlocks** |
| --- | --- | --- | --- |
| A | A | A | Unlocks |
| A′ | A | A | Locked |
| A | B | A | Locked |
| A′ | B | A | Locked |
| A | A | B | Locked |
| A′ | A | B | Locked |
| A | B | B | Locked |
| A′ | B | B | Locked |

Summary: Production Mode is strict and will not unlock an encrypted rootfs without the original SD card, original ZYMKEY and original PI. You **cannot** re-use that ZYMKEY in a different setup.
