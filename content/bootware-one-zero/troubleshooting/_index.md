---
title: "Troubleshooting and FAQ"
linkTitle: "Troubleshooting/FAQ" 
lastmod: "2024-04-22"
draft: false
images: []
weight: 50
toc: true

---

-----
### Troubleshooting tips and FAQ


#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of either Raspberry PI OS Lite (bullseye 64bit) or Ubuntu Server 22.04 (jammy) with a more secure configuration.

{{% callout notice %}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot`. Once Bootware is installed, Bootware can install new images based off Bullseye or Jammy in the Zymbit `zi` image format. See the [Getting Started](../getting-started) section and the [zb-update](../utiitiies/zb-update) tool.  

{{% /callout %}}

The table below summarizes changes made to the standard image. 

| Default | As Shipped |
|------------------|--------------------------|
| Boot partition of 256MB | 2x Boot partition size - 512MB |
| Console login allowed | Disabled |
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed |
| MAC with Pi OID | MAC uses Zymbit OID |
| sudo password free | sudo requires a password (zymkey) |

-----

