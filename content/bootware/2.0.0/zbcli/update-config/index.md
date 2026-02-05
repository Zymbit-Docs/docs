---
title: "zbcli update-config"
linkTitle: "update-config"
description: "update-config - Sets configs for installing updates"
date: "2024-08-14"
lastmod: "2025-10-15"
draft: false
images: []
type: docs
layout: single
weight: 30
toc: true

---

-----

## `zbcli update-config`

### Description

Requires superuser privilege.

Bootware includes a tool to help configure your system called `zbcli update-config`. `zbcli update-config` is meant to setup your device environment for pulling down updates from a configured endpoint and specify the update policies for how to apply those updates. The tool can be run interactively or non-interactively by specifying options on its command line.

### Usage:
```
zbcli update-config [OPTIONS]

Options:

      --partition <PARTITION>
          Configures partition layout [possible values: a/b, a-half-disk, a-full-disk]
      --update-policy <UPDATE_POLICY>
          Configures update mode [possible values: backup, active, both]
      --data-part-size-mb <DATA_PART_SIZE_MB>
          Configures data partition of size MB
      --update-endpoint <UPDATE_ENDPOINT>
          Configures update endpoint either as HTTPS URL or external mass storage device
      --wifi-ssid <WIFI_SSID>
          Configures Wi-Fi SSID
      --wifi-passphrase <WIFI_PASSPHRASE>
          Configures Wi-Fi passphrase
      --update-endpoint-cert <UPDATE_ENDPOINT_CERT>
          Configures Wi-Fi ssl certificate for zboot
      --wpa-supplicant-conf <WPA_SUPPLICANT_CONF>
          Configures wpa supplicant for Wi-Fi
      --hostname <HOSTNAME>
          Configures Hostname for post-update
      --user <USER>
          Configures User for post-update password change
      --password <PASSWORD>
          Configures password for post-update
      --signed-boot
          Flash eeprom and turn on signed boot
      --bsk <BSK>
          Configure new boot signing key
      --resign-boot
          Resigns boot images with configured bsk
  -h, --help
          Print help

```

### Example 

```bash
sudo zbcli update-config
```

The command will validate your bootware installation and then present a list of configuration options.

```
   Validated bootware installation
        ---------
        Pi Module:         Raspberry Pi 5
        Operating System:  Rpi-Bookworm
        Zymbit module:     Zymkey
        Kernel:            kernel_2712.img
        ---------
❯ Configure partition layout
  Configure update policy
  Configure data partition size in MB. Does not apply if there is an existing data partition.
  Configure update endpoint
  Configure wireless network manually with a ssid / psk
  Configure wireless network automatically with a wpa supplicant conf file
  Configure hostname for post-update
  Configure password for post-update
  Configure Secure Boot parameters and credentials
  Save and exit
```

Choose your settings as described below.

**Configure partition layout** – Specifies the device partition layout after an update. The root file system will be re-partitioned with your chosen configuration. Filesystem sizes estimates are based off of 32GB storage.

```
? Select device partition layout after an update ›
❯   [RECOMMENDED] A/B: This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space. Most useful for rollback and recovery with an Active/Backup configuration.
    Only A (half disk): This will take the remaining disk space available after the boot partition and create an encrypted partition that will use half of this space as the root partition. This leaves half the disk empty on purpose for dev usage.
    Only A (full disk): This will take the remaining disk space available after the boot partition and create an encrypted partition that will use almost all of this space as the root partition.
```

**Configure update policy** – The update policies are centered around how a new update gets applied to the filesystems on the device. The update policies listed below are only related to (A)ctive/(B)ackup partitioned devices, as (A)ctive only devices only have one filesystem to update.

```
? Select update policy ›
    [RECOMMENDED] BACKUP: Applies new updates to current backup filesystem and swap to booting the new updated backup partition as the active partition now. If the new update is bad, it will rollback into the previous stable active partition.
    ACTIVE: Applies new updates to only the current active filesystem and keeps the backup partition untouched.
❯   BOTH: Applies new updates to both filesystems and always boot on the first root partition as the active partition. Warning: a bad update will have nothing to rollback to and the device will have to go through a recovery process.
```

**Configure data partition size in MB** - Along with A/B partitions for your root file system, Bootware includes a shared, encrypted data partition. The data partition can be accessed from either the Active or Backup partition. The default partition size is 512MB. Use this option to specify the size of the shared data partition in MegaBytes (MB). NOTE: If the partition already exists, this setting has no effect.

```
? Enter size of data partition in MB ›
```

**Configure update endpoint** – The endpoint holding the update image (zi image). Uupdate endpoints can be either an HTTPS URL or an external mass storage device like a USB stick. The default endpoint is the local device /dev/sda1. The endpoint provided will be checked for a valid file with a 'zi' extension.

```
? Enter update endpoint ›
```

Example https URL: https://bootware.s3.amazonaws.com/zymbit_bookworm64_1.1.zi  

Example USB stick: /dev/sda1

**Configure wireless network manually with a ssid / psk** – Along with local devices, such as a USB stick, Bootware supports pulling remote updates via Wi-Fi or LAN connections. Bootware Wi-Fi credentials are separate from the standard userspace Wi-fi credentials.  Wi-Fi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot. Here, you can simply supply your SSID and password. If you need to supply additional Wi-Fi security, the next option allows you to supply credentials in a standard, wpa_supplicant.conf format.

```
 Enter Wi-Fi SSID · my_wifi
✔ Enter Wi-Fi passphrase · ********
✔ Re-enter Wi-Fi passphrase · ********
       Wi-Fi configuration set
```

**Configure wireless network automatically with a wpa supplicant conf file** New since 1.2.2. - Bootware/zboot contains a functional wpa_supplicant implementation. This option allows the user to point to a standard wpa_supplicant.conf file in userspace that will be imported into Bootware directly. Use this option if your setup requires certificate-based authentication, or other more complicated setups.

**Configure hostname for post-update** New since 1.2.2. - A post-update process is included to change your hostname to the specified name. This will be done for every future update until cleared or changed.   NOTE: The "@" character cannot be used.

**Configure password for post-update** New since 1.2.2. - A post-update process is included to change the password for a specified user. This will be done for every future update until cleared or changed.   NOTE: The "@" character cannot be used.

**Configure Secure Boot parameters and credentials** New in 2.0.0-BETA. - Allows Setting up Secure Boot / Signed image parameters and credentials, including importing your 2048-bit RSA boot signing key (BSK), signing and enforcing signing of your boot.img in EEPROM, and the option to re-sign your existing boot images.

Menu options:
```
❯ Turn on Signed Boot (Flash EEPROM)
  Configure the boot signing key
  Resign boot images with the configured boot signing key
  Exit
```

**Save and exit**. The final step is Save all your configuration settings and exit. The settings will be used for future updates by executing the `zbcli update` command, or automatically during the rollback/recovery process.

### See also
    
[zbcli update](../update)


