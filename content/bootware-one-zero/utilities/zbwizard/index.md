---
title: Zymbit Bootware Configuration Wizard
linkTitle: "zb-wizard"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-02"
draft: false
images: []
type: docs
layout: single
weight: 30
toc: true

---

-----

## zb-wizard

### Description

Bootware Preview includes a dialog enabled tool to help configure your system called `zb-wizard`. `zb-wizard` is meant to set your device environment up for pulling down updates from a configured endpoint and the update policies for how to apply those updates prior to running `zb-update`.  To start the wizard,

### Example 

```
sudo zb-wizard
```

Choose your settings as described below.

{{< cardpane >}}
{{% card header="Bootware Wizard -Main Screen" %}}
{{< figure
    src="wizmain.png"
    alt="Bootware Wizard"
    caption="Choose your options, save and exit."
    >}}
{{% /card %}}
{{< /cardpane >}}

**Partition Setup** – Specifies the device partition layout after an update. The root file system will be re-partitioned with your chosen configuration. Filesystem sizes estimates are based off of 32GB CM4s.

*	1  A Only [HALF DISK] – This will take the remaining disk space available after the boot partition and create an encrypted partition that will use half of this space as the root partition (around 14.4 GB). This leaves half the disk empty on purpose for dev usage.

*	2  A only [FULL DISK] – This will take the remaining disk space available after the boot partition (around ~29GB) and create an encrypted partition that will use almost all of this space as the root partition.

*	3  A/B – RECOMMENDED This will take the remaining disk space available after the boot partition and create two encrypted partitions, each taking up half of the remaining space (around 14.4 GB). Most useful for rollback and recovery with an Active/Backup configuration.

**Update Policy** – The update policies are centered around how a new update gets applied to the filesystems on the device. The update policies listed below are only related to (A)ctive/(B)ackup partitioned devices, as (A)ctive only devices only have one filesystem to update.

*	1  Backup – RECOMMENDED Apply new updates to current backup filesystem and swap to booting the new updated backup partition as the active partition now. If the new update is bad, it will rollback into the previous stable active partition. Only relevant when configured with A/B partitions.
  
*	2  Active – Apply new updates to only the current active filesystem and keep the backup partition untouched. Only relevant when configured with A/B partitions.

*	3  Both – Apply new updates to both filesystems and always boot on the first root partition as the active partition. Warning: A bad update will have nothing to rollback to; the device will have to go through a recovery process.

**Endpoint Setup** – The configured endpoint ready with a new update(.zi image). The endpoint can be either an https URL or an external mass storage device like a USB stick. 

*	Endpoint – Type the endpoint where the .zi image resides for the device to pull updates from. The endpoint will be checked for validity.

    > Example https URL: https://zk-sw-repo.s3.amazonaws.com/ota_preview/base_preview.zi  
    > Example USB stick: /dev/sda1

**Wireless Setup** – Bootware supports pulling updates via Wifi or LAN connections. Wifi credentials need to be provided in order for bootware to access the wifi during updates. If no wireless credentials are provided, the wireless interface is disabled in zboot.

*   SSID - Provide the Wifi SSID
*   Passphrase - Provide the Wifi passphrase

**Save** and **Exit**. You may also choose to Revert to the default configuration.


### See also
    
[zb-update](../zbupdate)


