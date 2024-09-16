---
title: "zbcli update"
linkTitle: "update"
description: "Schedules Bootware to perform device update on the next reboot"
date: "2024-08-14"
lastmod: "2024-09-16"
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
  -n                         Do not the reboot the system when `yes` flag is enabled
  -h, --help                 Print help
```

### Examples

```bash
sudo zbcli update
```

The script will show your configuration for review and confirmation.

After confirmation of the config parameters, the script will prompt for a reboot to complete the process. 

```
sudo zbcli update
   Validated bootware installation
        ---------
        Pi Module:         Raspberry Pi 5
        Operating System:  Rpi-Bookworm
        Zymbit module:     Zymkey
        Kernel:            kernel_2712.img
        ---------
     Created '/etc/zymbit/zboot/update_artifacts/tmp'
       Found update configs
? Proceed with current configs? These can be modified through 'zbcli update-config'
        ---------
        Update endpoint   /dev/sda1
        Update name       zymbit_bookworm64_pi5_1.2
        Endpoint type     LOCAL
        Partition layout  A/B
        Update policy     UPDATE_BOTH
        ---------
 (y/n) › yes
```

You will need to supply a public key in order to verify the update image. The public key should correspond to the private key used for the image signing process. The key pairs can either be a software key file in PEM format, or a reference to a hardware key slot from the Zymbit HSM key store.

```
? Enter public key file (Pem format) › pub_key.pem
```
After verifying the contents of the zi image with your supplied public key, status of the process will be displayed and you will be asked if you would like to reboot now.

```
✔ Enter public key file (Pem format) · pub_key.pem
     Mounted '/dev/sda1' to '/etc/zymbit/zboot/update_artifacts/tmp/.tmpUaPKTT'
       Found image tarball (/etc/zymbit/zboot/update_artifacts/tmp/.tmpUaPKTT/zymbit_bookworm64_pi5_1.2.zi)
    Unpacked '/etc/zymbit/zboot/update_artifacts/tmp/.tmpoPa4D2/file_deletions'
    Unpacked '/etc/zymbit/zboot/update_artifacts/tmp/.tmpoPa4D2/file_manifest'
    Unpacked '/etc/zymbit/zboot/update_artifacts/tmp/.tmpoPa4D2/signatures'
    Unpacked '/etc/zymbit/zboot/update_artifacts/tmp/.tmpoPa4D2/header.txt'
    Unpacked '/etc/zymbit/zboot/update_artifacts/tmp/.tmpoPa4D2/update_artifact.tar'
     Decoded header signature
     Decoded image signature
     Decoded manifest signature
     Decoded deletions signature
       Found header data
       Found image data
       Found manifest data
       Found file deletions data
    Verified header signature
    Verified image signature
    Verified manifest signature
    Verified file deletions signature
    Modified zbconfig 'public_key'
    Modified zbconfig 'new_update_needed'
    Modified zbconfig 'root_a'
    Modified zbconfig 'root_b'
    Modified zbconfig 'root_dev'
    Modified zbconfig 'update_with_new_image'
    Modified zbconfig 'kernel_filename'
? Scheduled update for the next reboot. Reboot now? (y/n) › yes
```
If you are ready to reboot, answer `yes` to start the update process.

#### Bootware Update Process

The Bootware Update process will now take place. 

{{< callout warning >}}The initial configuration process can take over an hour to complete, depending on partitioning and the size of the image(s). The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions and the DATA partition will be configured and setup for LUKS encryption protected by the Zymbit SCM or HSM
* Bootware will verify the zi image with your provided software or hardware key.
* It will take some time to unpack the image into the A/B root partitions depending on the size of the image.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

#### Options to run non-interactively

The update process can be run non-interactively by providing the the public key for verification and the `-y` option on the command line. Note: This will carry out an update and a reboot with no confirmation later in the process.

```bash
sudo zbcli update -f <my_pub_key_file.pem> -y
```

To run non-interactively up to the point of reboot confirmation, include the `-n` along with `-y`.

```bash
sudo zbcli update -y -n
```

### See Also
[zbcli update-config](../update-config)

