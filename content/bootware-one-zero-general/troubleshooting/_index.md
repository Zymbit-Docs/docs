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
The pre-installed image is encrypted and cannot be replaced via `rpiboot`. Once Bootware is installed, Bootware can install new images based off Bullseye or Jammy in the Zymbit `zi` image format. See the [Getting Started](../getting-started) section and the [zb-update](../utilities/zbupdate) tool.  

Important: The CM4/SCM firmware must include bootloader version 2023/01/11 or later in order to work with Ubuntu 22.04. The version can be verified with the `vcgencmd bootloader_version` command. The firmware is not field upgradeable. If you have a CM4/SCM with an earlier version of the bootloader and need to run Ubuntu 22.04, please contact support@zymbit.com.

{{% /callout %}}

### Precautions

- HTTPS endpoints are limited to a zi image of approximately 6GB. The zi images are compressed, so this is not normally a limitation with A/B configurations. If you have zi imagest larger tha 6MB, download the image to a local device with 3x the image size space and use the local device endpoint.

- Important boot files to not delete.
    - Boot.scr
    - zboot.enc
    - u-boot.bin
    - config.txt
    - [After bootware update] usr-kernel.enc
    - [Before bootware] cmdline.txt
    - [Before bootware] kernel8.img for rpiOS and vmlinuz for ubuntu

- The `/boot` filesystem should be partitioned for 512MB of space or more. Our default configuration as shipped uses a `/boot` partition of 512MB. Ubuntu in particular creates backups of all files on updates that may exceed free space with Bootware.
- Turn off unattended-upgrades. `/boot/firmware/boot.scr` in ubuntu gets replaced by updates from apt and other services. This will brick the device if its booted on the ubuntu made boot.scr. Ubuntu does not use u-boot on the Pi but writes over `boot.scr`. If ever doing a kernel update/upgrade, you must `cp boot.scr.bak boot.scr` prior to rebooting.
- In config.txt, otg_mode=1 can’t be set. DWC2 needs to be enabled. This is set at our factory and by bootware (and is the default with ubuntu), but if changed, the system will not boot.
- Non Bootware: Ubuntu requires the initrd.img on their system to boot up. Be wary of replacing this file or removing it
- Be cautious around the policies set in the supervised boot and the files put in the manifest. This follows hardware not images. This also applies to the other tamper policies.

### Changes to our standard images

The table below summarizes changes made to the standard image. 

| Default | As Shipped |
|------------------|--------------------------|
| Boot partition of 256MB | 2x Boot partition size - 512MB |
| Console login allowed | Disabled |
| SSH optionally enabled |SSH with password allowed |
| Hostname is `raspberrypi` | Hostname changed to `zymbit-dev` |
| Default user of `pi` | Default user is `zymbit`. User `pi` removed. Passwd set to zymbit |

-----

