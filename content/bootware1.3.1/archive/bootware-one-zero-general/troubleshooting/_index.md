---
title: "Troubleshooting and FAQ"
linkTitle: "Troubleshooting/FAQ"
lastmod: "2024-06-18"
draft: false
images: []
weight: 50
toc: true

---

-----
### Troubleshooting tips and FAQ


#### Modifications from Standard Raspberry Pi OS Lite

The SCM ships with a pre-installed with the following options for Operating System:

* Raspberry Pi OS Lite (bookworm 64bit)
* Raspberry Pi OS Lite (bullseye 64bit)
* Ubuntu Server LTS 22.04 (jammy 64bit)

{{< callout notice >}}
The pre-installed image is encrypted and cannot be replaced via `rpiboot`. Once Bootware is installed, Bootware can install new images based off Bullseye or Jammy in the Zymbit `zi` image format. See the [Getting Started](../getting-started) section and the [zb-update](../utilities/zbupdate) tool.

Important: The CM4/SCM firmware must include bootloader version 2023/01/11 or later in order to work with Ubuntu 22.04. The version can be verified with the `vcgencmd bootloader_version` command. The firmware is not field upgradeable. If you have a CM4/SCM with an earlier version of the bootloader and need to run Ubuntu 22.04, please contact support@zymbit.com.

{{< /callout >}}

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
- In config.txt, otg_mode=1 can’t be set. DWC2 needs to be enabled. This is set at our factory and by bootware (and is the default with ubuntu), but if changed, the system will not boot.
- Non Bootware: Ubuntu requires the initrd.img on their system to boot up. Be wary of replacing this file or removing it
- Be cautious around the policies set in the supervised boot and the files put in the manifest. This follows hardware not images. This also applies to the other tamper policies.

### Known Issues

* *Issue #145:* Bootware 1.1: Switching OS with Zymkey does not properly set GPIO WAKE PIN. For instance, if you install on Bookworm, the WAKE PIN is set at installation time to 516. If you then load a bullseye zi, bullseye with older kernels wants the WAKE PIN at 4. Bootware needs to take this into account. Workaround is to setup your Zymkey with the operating system you intend to use and create your Bootware zi image within that OS.

* *Issue #147:* Bootware: Needs to identify the kernel file to be loaded for custom kernels named something other than kernel8.img or vmlinuz. Needed for supporting custom kernel versions. Workaround is to copy or link your custom kernel to either kernel8.img for Raspberry Pi based OS, or vmlinuz for Ubuntu based OS.

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

