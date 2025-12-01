---
title: "Bootware 1.2.2 zbcli update-config"
linkTitle: "Bootware 1.2.2 update-config"
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
  Configure data partition size in MB
  Configure update endpoint
  Configure wireless network
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

**Configure data partition size in MB** - Along with A/B partitions for your root file system, Bootware includes a shared, encrypted data partition. The data partition can be accessed from either the Active or Backup partition. The default partition size is 512MB. Use this option to specify the size of the shared data partition in MegaBytes (MB).

```
? Enter size of data partition in MB ›
```

**Configure update endpoint** – The endpoint holding the update image (zi image). rUupdate endpoints can be either an HTTPS URL or an external mass storage device like a USB stick. The default endpoint is the local device /dev/sda1. The endpoint provided will be checked for a valid file with a 'zi' extension.

```
? Enter update endpoint ›
```

> Example https URL: https://bootware.s3.amazonaws.com/zymbit_bookworm64_1.1.zi  
> Example USB stick: /dev/sda1

**Configure wireless network** – Bootware supports pulling updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. These credentials are configured separately from the host OS wireless credentials as they run within Bootware. If no wireless credentials are provided, the wireless interface in Bootware is disabled.

```
 Enter Wi-Fi SSID · my_wifi
✔ Enter Wi-Fi passphrase · ********
✔ Re-enter Wi-Fi passphrase · ********
       Wi-Fi configuration set
```

**Save and exit**. The final step is Save all your configuration settings and exit. The settings will be used for future updates by executing the `zbcli update` command, or automatically during the rollback/recovery process.

### See also
    
[zbcli update](../update)


