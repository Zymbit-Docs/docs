---
title: "Troubleshooting"
linkTitle: "Troubleshooting" 
lastmod: "2023-10-10"
draft: false
images: []
weight: 50
toc: true

---

-----
### Troubleshooting tips and FAQ

#### Known Issues

-----

#### Modifications from Standard Raspberry PI OS Lite

The SCM ships with a pre-installed version of Raspberry PI OS Lite (bullseye 64bit) with a more secure configuration.

{{% callout notice %}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot` in the field. Please contact support@zymbit.com if you require a different image.
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

