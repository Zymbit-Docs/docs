---
title: "update - Schedules device to perform OTA update on the next reboot"
linkTitle: "update"
lastmod:
date: "2024-08-14"
draft: false
images: []
type: docs
layout: single
weight: 40
toc: true

---

-----

## zbcli update

### Description

Requires superuser privilege.

Utility to perform Bootware updates; re-partitions and loads images into the Active, Backup or Both partitions

### Usage

```
zbcli update [OPTIONS]

Options:
  -f, --key-file <KEY_FILE>  Public pem file verifying the update (software signed)
  -y                         Says `yes` to all prompts. This includes rebooting your system
  -h, --help                 Print help
```

### Examples

```
sudo zbcli update
```

The script will show your configuration for review and confirmation.

After confirmation of the config parameters, the script will prompt for a reboot to complete the process. 

#### Bootware Update Process

The Bootware Update process will now take place. 

{{< callout warning >}}The initial configuration process can take over an hour to complete, depending on partitioning and the size of the image(s). The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit SCM
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions depending on the size of the image.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.


### See Also
[zbcli update-config](../update-config)

