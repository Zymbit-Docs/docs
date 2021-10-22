---
title: Binding, Device ID, and Authentication
description: ""
date: ""
lastmod: ""
draft: false
images: []
# weight: 0
toc: true
---

Good security begins with assigning each device a unique and unalterable identity (Device ID), that is used to authenticate subsequent interactions with the device.

Zymkey generates a unique Device ID by measuring certain attributes of the specific host (Measurement), and then combining that Measurement with the unique ID of that specific Zymkey. The process of combing these identifiers uses a cryptographic function, and this process is generally termed *binding*.

On completion of the binding process, the Zymkey is said to be *bound* to the Pi.

Zymkey supports two operating modes:

Developer Mode
:   Binding is temporary and the Zymkey can be used with a different host SBC and SD card in the future.

Production Mode
:   Binding in production mode is ***permanent***! The Zymkey can **NOT** be moved to different host SBC or used with a different SD card.
