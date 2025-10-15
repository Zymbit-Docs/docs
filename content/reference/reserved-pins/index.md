---
title: SCM Reserved Pins
description: ""
aliases:
    - /technical_reference/reserved-pins/
date: ""
lastmod: "2025-10-15"
draft: false
images: []
weight: 55
toc: true
---

The following is a list of reserved pins & services that cannot be used or are not available to the user (they are reserved for Zymbit SCM operation). 


#### Pins that can be used but SCM has control
* USB2_N
* USB2_P

#### Pins that can be used but SCM can monitor
* nEXTRST
* GPIO17
* GPIO22
* GPIO27

#### Pins that currently cannot be used, SCM has control (possible future use with firmware changes)
* RUN_PG
* nRPIBOOT
* USB_OTG_ID

#### Not connected
* GPIO_VREF
