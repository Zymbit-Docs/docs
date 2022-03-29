---
title : "Zymbit SCM Derived Requirements"
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


### v1.0.1 (alpha)
Jan 19, 2022

1. All HSM6 Features
   * Support for NIST-P256, secp256k1, ed25519 and x25519
   * ECDSA + EdDSA
   * ECDH + EdDH
   * Data Lock/Unlock
   * RTC (1ppm)
   * Digital Tamper Detect
   * Accelerometer
   * Number of keypairs - 512+ generatable
      * Pre-baked keys - 0-13
      * ephemeral key(s) - 1+ 
   * Number of foreign keys - 128+
   * Number of wallets - HSM6 currently 128
   * Shamir's - from HSM6 14x14, increased to 16x16
2. Enhanced Features
   * USB 2.0 interface - removes i2c communications bottleneck
   * Faster cryptographic algorithm processing throughput (6 - 25 times)
   * X.509 Certificate storage - TBD (not in alpha, look at implementations, ATECC?)
   * Store LUKS key in hardware - TBD (not in alpha)
3. Verified Boot
   * Leverages GPU bootstrap mechanism used to program CM4 eMMC (rpi-boot)
   * SCM takes over boot discrete signals and can hold BCM CPU in reset
   * Digital signatures of critical boot partition held in encrypted file system contained on external flash chip
   * Fault actions (one or the other):
     * Hold BCM in reset until remediation measures have been taken (TBD)
         * Development Mode: Flash a code three times (TBD), allow boot and mechanism to re-create signatures
         * Production Mode: Take action above
     * Destroy system via internal key and eMMC boot partition destruction
         * Development Mode: Flash a code three times
         * Production Mode: Take action above
4. System logging (not in alpha)
   * Tamper Detection Events
   * Verified Boot Signature Failures
   * Temperature out of range
   * Battery voltage below threshold
   * Tap events if configured
   * Self Test Results
   * Ability to extract logs from "failed" hardware (TBD)
5. Self Test (not in alpha)
   * Power on
     * Check peripherals
     * Check crypto algorithms against test vectors
       * SHA + HMAC
       * Signature generation and verification
       * Encryption/decryption
       * Key derivation functions
       * Random number generation
     * Integrity checks
       * Code digest
       * Keystore digest
       * Critical key material digest
   * Background
     * Integrity checks
   * Commanded tests (TBD)
   * Policy for POST failures - fatal
6. Fault remediation if action set to "host reset" (need customer feedback)
   * Remediation candidates:
     * Verified boot
       * Restoration of faulted files. Would need adequate storage to contain verified files. Could be an encrypted file on boot sector itself.
       * Fallback to a recovery mode, probably a small encrypted root file system and boot partition. (Question: What would backend look like? Integration with existing solutions? OTA solutions?)
       * Dedicated remote connection, e.g. LoRA, cell phone OOB.
     * Tamper detect: reconnect tamper loop and authorize boot continuation
     * Temperature: wait for temperature to get back into operating range
     * Battery voltage below threshold: wait for battery voltage to get back into range after authorization to continue boot
   * Authorization mechanisms - remediation mechanism notwithstanding, authorization to proceed must be provided at some point. (not in alpha)
     * Accelerometer tap code - this feature could be accomplished today with an automated device, i.e. cell phone vibrate app. The code would be issued via an API on the host side. (not in alpha)
     * NFC tag/phone - would need an NFC reader (and programmer?) on module
       * Could potentially use SLIP39 sharding
     * Remote connection: known party key exchange could be used on LoRA connection to authorize continuation.
7. Host Side Improvements
   * Metrics of system events (powercycles, wifi events, etc.)  TBD
   * API for host side events  TBD
8. Manufacturing (alpha units done by hand)
   * Rig similar to current encryption PC
   * Initial programming of firmware and configuration of ZSCM followed by encryption of main volume in one step.
   * Ports needed on PC:
     * Discrete I/O: e.g.  USB to discrete I/O bridge (https://www.amazon.com/USB-Based-24-Channel-Digital-Module/dp/B003DV6W9G)
     * USB to each unit
     * Ethernet to each unit
   1. Module programming and configuration phase:
     1. use OpenOCD via discrete ports for programming L21 and S70 MPUs
     2. normal cfg phase follows:  
       a. configuration (ATECC key baking, etc.)  
       b. RTC calibration
     3. Push bootcode4.bin and start4.elf to external flash fs via S70
   2. CM4 programming:
      a. Method 1: CM4 module configured for DHCP boot loads kernel and mounts NFS root file system  
        1. module self-fuzzes and partitions eMMC  
        2. module unpacks boot and root fs tarballs into eMMC
      b. Method 2: PC programs CM4 module using exposed usb connection and rpi-boot. (Not preferred)
      c. Method 3: (Not preferred for attack vectors)
         1. An encrypted baseline image is programmed on CM4 using rpi-boot
         2. Secure module creates random key.
         3. Secure module encrypts random key.
         4. CM4 programs new random key into LUKS.
         5. CM4 removes default LUKS key.

# Appendix A: Open questions and issues

* Manufacturing + Verified boot: can the module get access via the connector to the SPI EEPROM on the CM4 in order to sign the bootloader and put the CM4 into TFTP boot mode?
* Decide on verified boot remediation candidates: 1) Restore faulted files, 2) Fallback to recovery, 3) Recover over a connection dedicated to the security module (e.g. LoRA).
* Research authentication mechanisms (compatible with OTA policy):
  * Can an accelerometer tap code based approach be used on a cell phone?
  * NFC reader hardware? How to distribute NFC tag(s) to admin?
* Regardless of when the manufacturing station is complete, a hardware fixture must be designed to program the secure compute module. (future)
* Is it possible to get CM4 modules from Newark/OKDo that are preconfigured for TFTP boot? This would save us a manufacturing step if we can't access the CM4 SPI EEPROM from the module.
* Versioning?
   * Alpha to include fast wallet
   * Support a feature list bitmask?
   * L21 and S70 firmware version
* EEPROM signature?

