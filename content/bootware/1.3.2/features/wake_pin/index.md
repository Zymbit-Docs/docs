---
title: Zymbit Bootware Alternative GPIO Wake Pin
linkTitle: "Configuring Bootware Alternative GPIO Wake Pin"
description: Describes using alternative GPIO Wake Pin from with Bootware
lastmod: "2026-06-22"
date: "2026-06-22"
draft: false
aliases:
    - /bootware/features/wake_pin/

images: []
type: docs
layout: single
weight: 35
toc: true
---

-----

This feature was added in zbcli version 1.3.2-4

## Remapping GPIO4 Wake Pin

Zymkeys and HSMs use GPIO4 for a "handshake signal" to coordinate communication with the host Pi. There is a logical, electrical, and mechanical connection with GPIO4. Bootware treats this assignment separately from the Zymbit Driver Suite host side code.
If you need to use an alternative GPIO, you can configure Bootware to use a different GPIO Wake Pin.

> NOTE: You will also need to re-map the physical electrical configuration and the host side code following the instructions here: [Alternative GPIO Pin](/tutorials/alternative-gpio). The Bootware alternative setting most likely will always match the value in `/var/lib/zymbit/zkenv.conf`.

### Bootware Software Configuration

The alternative GPIO Wake Pin is set in userspace with the `zbconfig` utility, encrypted, and passed into zboot for use subsequent updates. 

Example, to set the zk_gpio_wake_pin to 516 in zboot:

```bash
sudo zbconfig -set /boot/firmware/zb_config.enc zk_gpio_wake_pin=516
```

In order to view the current setting, use get:

```bash
zbconfig -get /boot/firmware/zb_config.enc zk_gpio_wake_pin
```


