---
title : "Zymbit Verified Boot Whitepaper"
description: ""
date: ""
lastmod: "03-28-2022"
draft: false
images: []
type: "docs"
layout: "single"
weight: 55
toc: true
---

# Introduction
The recent proliferation of intelligent embedded devices operating at the edge of the network (the “wild west”) has led to many security concerns that revolve around penetration of these devices. Minimizing the attack surface of a given device from the available interfaces (e.g. USB, Ethernet, Wi-Fi, Bluetooth, etc.) requires a more evolved security mindset. If the operating system of the edge device is running Linux, many of the security tactics and strategies that work in the cloud or on desktop computers also work on these embedded devices. These strategies focus on methods of infiltration purely from the network interfaces. Concerns over physical access in the server room are largely ignored, for example, because the environment is usually attended by security personnel.  

In this document, we'll explore what can be done to tighten up the security of the boot process of a Linux-based edge device, how some chip vendors are implementing the boot process in a secure manner and how Zymbit is better.

# Life on the Edge Can be Dangerous
Because edge devices are often placed in environments which are not supervised and where attackers can, in a significant number of cases, easily gain physical access to the device, physical penetration expands the overall attack surface:

- SD card media: if the root file system and/or boot partitions are in an unencrypted form living on detachable media such as SD card, the attacker can easily remove the SD card, install his own malware or spyware or siphon off IP and replace the SD card.
- eMMC: some people incorrectly think that an eMMC chip that is soldered on their hardware is a good security measure simply because the media is not easily removable. While this is true, a determined attacker can rather easily solder on wires to the eMMC chip and fashion an SD card interface. After this step is complete, they can then access the file systems using a PC and perform the same exploits that could be achieved in the SD card use case.  

## Security Measure #1: Encrypt the Root File System
A good first step, then, would be to encrypt the parts of the media that can be legitimately encrypted, such as the root file system. Unfortunately, this does not fit in well with unattended operation since such file systems (e.g. dm-crypt LUKS) typically require a passphrase to be entered during the boot process. Also, all of the boot artifacts are typically exposed and vulnerable to attacks since many embedded boot processes do not have adequate authentication and decryption mechanisms built in (e.g. Raspberry Pi). Unattended operation requires the use of a standalone key manager such as Zymbit's HSM6 module. Even still, Linux systems running, for example, on Raspberry Pi merely need to have "init=/bin/sh" or "rinit=/bin/sh" appended onto the kernel command line in order to gain full access to the root file system.  

Other common exploits include replacing critical boot and run-time components with versions that implement back doors. Such components include secondary and tertiary bootloaders, Linux device tree blobs and even the Linux kernel itself.

## Security Measure #2: Prevent Modification of Vulnerable Boot Components Using Secure Boot
This specific vulnerability can be mitigated with a secure boot strategy. Some microprocessors, such as the NXP i.MX8 and the Nvidia Tegra incorporate secure boot features which generally work very well. However, these Secure Boot strategies suffer from a couple of issues:
1. Authentication methods rely solely on RSA: it was recently revealed that RSA uses EC-DRBG for their nonce generation and, therefore, it might be significantly easier to forge signatures than other signature methods such as ECDSA or EdDSA.
2. Authentication requires PKI: in order to maintain a root of trust and to maintain a unique identity, X.509 certificates are typically required, leading to a top-down hierarchal approach to boot-time security. In some secure boot frameworks, the root certificate is required to be from the chip vendor which could, if eventually compromised, lead to entire fleets that are left vulnerable.
3. Some secure boot frameworks utilize ARM TrustZone or similar paradigms. Although mostly robust, there have been successful attacks against these frameworks.  
4. These boot processes are typically comprised of many steps that run sequentially on the host CPU, opening up possibilities for injecting timing attacks.
5. No event journaling is available if an attacker tried to gain physical access regardless of whether they succeed or not.
6. No risk mitigation strategies are available. For instance, some use cases might require "bricking" the device if a security breach of some kind is detected (e.g. manipulation of boot components like the kernel command line).

## Security Measure #3: Use a Dedicated and Independed Security Manager to Check Critical Boot Components to Manage a "Verified Boot" Policy
Regardless of whether a built-in secure boot mechanism is available and utilized, a better approach would be to attach an independent security manager which would validate the critical boot components prior to the start of the host CPU boot sequence. For example, Zymbit has implemented a feature in its latest security module targeted for Raspberry Pi Compute Module, "Secure Module for CM4", or SM4CM4, called "Verified Boot". When enabled, the Verified Boot feature takes control of the host boot media and validates signatures over each of the critical boot components. The signatures are generated using Elliptical Curve private keys that are only accessible by the SM4CM4 and consequently securely stored on the SM4CM4. On the Raspberry Pi framework, these components include:  
1. config.txt
2. cmdline.txt
3. start4.elf
4. Device Tree Blobs (DTBs)
5. initrd
6. Any "interim" bootloaders (e.g. U-Boot)
7. kernel*.img

Various breach detection policies can be configured for the Verified Boot feature:
1. Brick Device: this configuration causes the destruction of all key material on the SM4CM4 on signature verification failure which means that, if the root file system is encrypted, the use of the root file is permanently disabled and the host CPU will be prevented from completing boot.
2. Prevent Boot Until Remediation: this configuration causes the SM4CM4 to hold the host CPU in reset after a boot breach until the condition is mitigated by authorized personnel.

Irrespective of the above configurations, the Verified Boot feature will always add any boot-time breach detection events to a secure journal as part of its ongoing evolution of identity. This journal is "released" to the host CPU upon successful boot.

# Why is "Verified Boot" Better Than an On-Chip Secure Boot Framework?
To answer this question, let's take a look at how the i.MX8 High Assurance Boot (HAB) works from a high level.
## NXP i.MX8 Secure Boot
![i.MX8_AHAB_high_level_boot_flowchart](uploads/9726a92b323e42caa1024a4d57c6be54/i.MX8_AHAB_high_level_boot_flowchart.png)
### Vulnerabilities
< Go into more detail from "Security Measure 2" >
## Zymbit Verified Boot
![CM4_Secure_boot_high_level_flowchart](uploads/eb50355759a71bb9dbb1aafcf4c281de/CM4_Secure_boot_high_level_flowchart.png)
### Preliminary Requirements
1. Need way to hold host processor in reset. The CM4 brings the RUN pin out of its connector.
2. Need way to access boot media. The CM4 can pose as a slave processor and, after loading a special bootloader, it exposes the eMMC as a USB device.
# Conclusions
The unattended embedded edge devices in the IoT paradigm are oftentimes exposed and vulnerable to physical attacks. In addition to a robust physical tamper detection strategy, one should also encrypt the root file system and use a secure boot strategy in the case that the tamper detection mechanisms are bypassed. Regardless of whether the applications processor has a secure boot process available and is employed for use, Zymbit recommends using their Verified Boot feature which is currently available on their SM4CM4 Independent Security Management product offering.  

An analogue to IoT security exists in the realm of Internet Identity that is directly applicable: the trust triangle. The trust triangle is composed of three independent entities: Issuer, Holder and Verifier:
* Issuer: an entity responsible for generating or sending material (e.g. data or software updates) to a designated Holder of said material.
* Holder: the designated endpoint for materials issued by the Issuer.
* Verifier: an entity that is responsible for verifying materials on behalf of the Issuer and Holder.  

 We'll use the real world use case of drivers licenses and software updates in the realm of IoT:  
* Issuer:
    * Drivers License: the DMV is the issuer of drivers licenses
    * IoT: the owner of a fleet and their development team is the issuer of software updates for edge devices.
* Holder:
    * Drivers License: the individual that has been issued a drivers license
    * IoT: the edge device
* Verifier:
    * Drivers License: the various law enforcement agencies responsible for driver safety.
    * IoT: Independent Security Manager (e.g. Verified Boot feature of SM4CM4).

In the world of IoT, application CPUs that have a secure boot framework are combining the roles of Holder and Verifier. This is analogous to the Holder of a drivers license also being the verifier. Of course this would be a ridiculous proposition. A more sensible approach in the IoT world would be to have an Independent Security Manager assuming the role of Verifier for the Holder (i.e. edge device) because its role is focused on the security of the overall edge device system. Reframing IoT system security in this manner will result in a more reasonable and manageable approach to boot-time security.

