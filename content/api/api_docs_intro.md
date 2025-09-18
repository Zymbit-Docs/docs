---
title: Intro to Zymkey Application Utilities
description: []
draft: false
images: []
type: docs
layout: single
weight: -1000
toc: true
---



The Zymkey App Utils library provides an API which allows user space applications to incorporate Zymkey's cryptographic features, including:

* Generation of random numbers
* Locking and unlocking of data objects
* ECDSA signature generation and verification

In addition, the Zymkey App Utils library provides interfaces for administrative functions, such as:

* Control of the LED
* Setting the i2c address (i2c units only)
* Setting the tap detection sensitivity

## A Note About Files

Some of the interfaces can take a filename as an argument. The following rules must be observed when using these interfaces:

* Absolute path names must be provided.
* For destination filenames, the permissions of the path (or existing file) must be set:
    - Write permissions for all.
    - Write permissions for common group: in this case, user `zymbit` must be added to the group that has permissions for the destination directory path and/or existing file.
    - Destination path must be fully owned by user and/or group `zymbit`.
* Similar rules exist for source filenames:
    - Read permissions for all.
    - Read permissions for common group: in this case, user `zymbit` must be added to the group that has permissions for the source directory path and/or existing file.
    - Source path must be fully owned by user and/or group `zymbit`.

## Crypto Features

### Random Number Generation

This feature is useful when the default host random number generator is suspected of having [cryptographic weakness](http://security.stackexchange.com/questions/47475/testing-a-hardware-random-number-generator). It can also be used to supplement existing random number generation sources. Zymkey bases its random number generation on an internal TRNG (True Random Number Generator) and performs well under Fourmilab's `ent`.

### Data Locker

Zymkey includes a feature, called Data Locking. This feature is essentially an AES encryption of the data block followed by an ECDSA signature trailer.

#### Data Locker Keys

In addition to a unique ECDSA private/public key pair, each Zymkey has two unique AES keys that are programmed at the factory.

### ECDSA Operations

Each Zymkey comes out of the factory with three (Zymkey 4i/HSM4) or 12 (HSM6) unique ECDSA private/public key pairs. These private keys are randomly programmed within hardware at the time of manufacture and never exported. In fact, Zymbit doesn't even know what the value of the private keys are.

There are three ECDSA operations available:

* **Generate signature:**
    - The Zymkey is capable of generating an ECDSA signature.
* **Verification signature:**
    - The Zymkey is capable of verifying an ECDSA signature.
* **Export the ECDSA public key:**
    - This saves the public key to a file in PEM format. This operation is useful for generating a Certificate Signing Request (CSR).

## Other Features

### LED

The Zymkey has an LED which can be turned on, off or flashed at an interval.

### i2c Address

For Zymkeys with an i2c interface, the base address can be changed to work around addressing conflicts. The default address is `0x30`, but can be changed in the ranges `0x30 - 0x37` and `0x60 - 0x67`.

### Tap Sensitivity

The Zymkey has an accelerometer which can perform tap detection. The sensitivity of the tap detection is configurable.

## Programming Language Support

Currently, C, C++ and Python are supported.

## Binding

Before a Zymkey can be effectively used on a host computer, it must be "bound" to it. Binding is a process where a "fingerprint" is made which is composed of the host computer and its SD card serial numbers as well as the Zymkey serial number. If the host computer or SD card is changed from the time of binding, the Zymkey will refuse to accept commands.

To learn more about binding your zymkey, go to the Zymbit Community "Getting Started" page for your Zymkey model (e.g. [Getting Started with ZYMKEY](https://community.zymbit.com/t/getting-started-with-zymkey-4i)).

## HSM4

### Soft Bind Lock

Unlike Zymkey, HSM4 does not have a physical lock tab that is cut to lock the host binding. Instead, it has a software API for locking the binding to the host. See the soft bind lock API description for more information.

## HSM6

### Soft Bind Lock

See "HSM4: Soft Bind Lock" above.

### ECDH

ECDH with some Key Derivation Functions (KDFs) is available. The available KDFs include:

1. **none:** The raw pre-master secret is returned.
1. **rfc5869:** This KDF can be invoked with SHA256 or SHA512 as the hashing function.
1. **pbkdf2:** Like rfc5869, SHA256 or SHA512 can be specified.

### Koblitz Curve Support

In addition to NIST P-256 which is available on Zymkey and HSM4, the Koblitz 256 bit curve is available as well.

### More Key Slots

HSM6 now has 12 factory pre-configured NIST P-256 key slots and 512 key pairs for generated key pair and digital wallet allocation for NIST P-256 or Koblitz 256. All of these key slots can be used for  ECDSA as well as ECDH operations. It is also possible to remove the keys in the 512 key pair store and also prohibit public key export.

### Foreign Public Keyring

128 public key slots are available to form a public key store for storing foreign party public keys. Like the 512 key pair store, public keys can be removed and prohibited from export.

### Digital Wallet

HSM6 provides APIs which allow the creation of 1 or more digital wallets per BIP 32/39/44. The number of master seeds and child nodes is only limited by the number of key pairs provided for in the 512 byte key pair store. The BIP 39 feature provides the mnemonic sentence using the 2048 word English dictionary.

### Battery and Temperature Monitoring

The HSM6 has APIs for reading the battery voltage as well as monitoring policies for taking action if certain thresholds are exceeded.

#### Battery Monitoring

The Battery Monitoring feature provides for 1 of 2 actions if the battery voltage below specified threshold (settable from 2.5V or lower via API).

1. **self-destruct:**
    * If the battery voltage goes lower than the threshold, destroy all key material. Good for use cases where a low battery voltage is interpreted as an attempt to attack the low power tamper detect operation.

1. **sleep-until-battery-recovery:**
    * Do not permit full functionality until the battery has gone above the threshold. Good for use cases where battery replacement is desirable.

#### Temperature Monitoring

The Temperature Monitoring feature provides protection from attacks that are based on manipulation of temperature (e.g. memory freeze attacks). If invoked, the system may be configured to destroy keys if temperature thresholds are exceeded.
