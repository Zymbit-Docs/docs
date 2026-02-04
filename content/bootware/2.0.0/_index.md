---
title: "Bootware 2.0.0 (Beta)"
linkTitle: "Bootware 2.0.0 (Beta)"
icon: ""
description: "Beta release. Includes seamless integration of Secure Boot."
date: "2024-08-11"
lastmod: "2025-10-15"
draft: false
weight: 20
images: []
toc: True
version: "2.0.0"
---

-----

{{< bootware_version_notice >}}


Bootware is a secure integrated tool for managing multiple Linux OS installations for edge / embedded Linux machines. Bootware supports various Raspberry Pi computers and requires a Zymbit HSM or SCM to run. Bootware takes advantage of security features of various Zymbit products and protects credentials via the HSM. 

A free ZYMKEY is available when you sign up for a Bootware trial. See [Get Bootware](https://www.zymbit.com/get-bootware)

-----

#### If you want to jump right in, [Click here to Get Started!](getting-started)

-----

## What is Bootware 2.0 Beta?

![Bootware Overview](with-bw.png "Bootware in A/B Configuration")

- Bootware 2.0 Beta includes support for Pi Foundations Secure Boot and signed boot image capability.

- Bootware is a full-featured native OS switcher/manager with first rate support for encrypted root and data partitions. Bootware is not a hypervisor.

- Bootware supports both manual and automatic rollback between A and B installations. If rollback fails, Bootware is able to enter recovery to reload one of the installations from either a local image or a remote secure endpoint.

- Bootware works with 64-bit versions of Raspberry Pi OS and Ubuntu on Raspberry Pi 4 and 5 and the various compute module variants.

- Bootware is not an OS, therefore custom OS builds are generally supported. For larger orders, Zymbit is able to offer device programming and image validation services of custom user OS builds.

- Bootware is not an IoT cloud stack, and interoperates well with most popular stacks. Bootware manages the relationship between bare metal and OS installations as simply, securely, and robustly as possible.

- Bootware correctly handles potentially conflicting sets of kernels and boot artifacts, allowing for major kernel upgrades to occur without undue distress.

- Bootware fully isolates bootable root partitions with separate sets of LUKS credentials, which are securely injected into user s OS initramfs images. Bootware supports a shared data partition, for which the credentials are distributed to new installations. Each new installation gets a clean new set of keys and one root partition cannot access the other.

- New installations are deployed from within Bootware's secure enclave, zboot, which boots straight via secure boot. zboot is able to download, validate, and deploy updates without relying on a potentially compromised OS installation to install the next new clean image.

- Bootware has a robust workflow for update signing, which may use either hardware or software key options. Update signing occurs on a dedicated publishing node.

- Bootware uses full image forklift updates for major OS installations. Partial overlay updates are also supported, and may be installed directly from user mode.

- Bootware runs of top of Zymbit's security services package, which is required to use Zymbit security hardware.

- Bootware has additional integrations with Zymbit Secure Edge Nodes, which may be purchased to development and production use, or may be used as reference designs for custom hardware. 

#### Bootware installation locations:

- Bootware secure uboot and the secure enclave, zboot, along with encrypted configurations files are installed in into /boot/firmware.

- Bootware uses Zymbit LUKS initramfs unlock code already present in standard Zymbit driver package, but will inject credentials before encrypting the initramfs together with the kernel and boot artifacts into an immutable boot image for secure uboot.

- Bootware installs `zbcli` and Bootware scripts into user OS. User must ensure that these packages are present in user images to be deployed using Bootware. User mode tools manage Bootware settings and check for updates on USB drives or on remote endpoints. `zbcli` also allows user to trigger manual rollback and update installations. Once a suitable update is located, Bootware reboots into zboot to install.

#### Bootware 2.0 boot sequence:

- Pre-boot environment validates signed boot.img, RAM copy of /boot/firmware partition.

- Pi ROM code boots and loads standard Pi artifacts.

- Zymbit uboot loads

- If user boot is to proceed normally:

  * Uboot loads, decrypts, and validates boot package for the active boot partition. The package includes everything required to boot that installation inclusive of kernel, initramfs, args, device tree objects, etc.

  * Boot counter is incremented and control is passed to the kernel.

  * Once in initramfs, zkunlock is invoked to connect to the HSM and to decrypt LUKS credentials that have been previously injected into initramfs. /root is mounted.

  * Once boot is complete, boot counter is reset. If the boot fails, and the system reboots for whichever reason, the process repeats with boot counter incrementing.

- If the boot counter has exceeded the threshold, rollback occurs:

  * Uboot loads zboot to switch to the backup partition

  * System reboots

  * Uboot attempts to boot the backup boot partition in the same way it boots the active partition.

  * Once boot is complete, boot counter is reset. If the boot fails, and the system reboots for whichever reason, the process repeats with boot counter incrementing.

- If the boot counter for the backup partition also exceeds the threshold without a successful boot, the system enters recovery mode:

  * Uboot loads zboot.

  * Zboot attempts to locate an image to install from either a local USB drive or from a known remote endpoint.

  * If the image is found, it is installed, and then the system is rebooted into it. All images are checked for correct signatures before applying them to the system.

  * If the image is not found, zboot enters console interactive mode and asks for endpoint information. Any image to be installed must have a proper signature.

Bootware is designed with the singular goal to ensure that properly validated and installed image is booted successfully on user's machine. 

-----

#### Additional Resources

[Register for Bootware Technical Updates](https://www.zymbit.com/get-bootware/)

[More information on Bootware on zymbit.com](https://www.zymbit.com/bootware/)

[Bootware Community](https://community.zymbit.com/c/bootware)

-----

#### Links to Bootware Documentation Sections

