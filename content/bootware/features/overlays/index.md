---
title: Zymbit Bootware® Overlay Image Updates
linkTitle: "Overlay Image Updates"
description: How to use Overlay (partial) image updates to update/modify/remove individual files
lastmod: "2024-09-26"
date: "2024-08-22"
draft: false
images: []
type: docs
layout: single
weight: 30
toc: true

---

-----

## ZI Overlay Images 

Overlay Images are meant to update devices without nuking and remaking the LUKS-encrypted partitions. Overlay updates can be much smaller in size than "FULL" updates, as they are meant to drop in a crate of files over an existing bootware enabled system. Overlay updates simply try and unpack the update over the system and overwrite any previous existing files of the same name. 

The process flow for loading an overlay image:

1. Use `zbcli manifest` to include files to add/delete/modify in your partitions

2. Use `zbcli imager` to create the overlay image from the manifest file entries

3. Use `zbcli update-config` and `zbcli-update` to update your partitions

The files that are packed into an overlay image are specified by the user with the tool [zbcli manifest](../../zbcli/manifest).

`zbcli manifest` is a simple tool that basically modifies two files:

- /etc/zymbit/zboot/update_artifacts/file_manifest
- /etc/zymbit/zboot/update_artifacts/file_deletions

The `file_manifest` tracks which files are specified by the user to wrap into an overlay image using `zbcli imager`. `file_manifest` can contain both directory paths and file paths.

The `file_deletions` tracks which files are to be deleted after the `file_manifest` of files is dropped into the system. `file_deletions` can also contain both directory paths and file paths.

> Do not include the zboot ramdisk `/boot/firmware/zboot.enc` in overlay updates. The imager will refuse to generate an overlay image that contains `zboot.enc`. {{< /callout >}}

### Overlay updates and system reboots

Applying overlay updates requires rebooting into zboot in these two scenarios:

- When updating the kernel and initramfs
- When updating the non-active/backup partition

No reboot is necessary when the UPDATE_ACTIVE policy is in effect: the update mechanism will apply changes live while the system is running. Note that a reboot is still required if the update contains a new kernel, as zboot needs to remake the FIT image with the incoming kernel.

`zbcli update` will prompt the user with a “This update requires a reboot” when one of the conditions above is fulfilled.

### Example: Update the kernel on a bootware-enabled device

Overlay updates expect the system to have already gone through a FULL update at least once. There should be LUKS-encrypted devices as well as backed up artifacts in `/boot/firmware/zboot_bkup/`.

**Why doesn't `apt` upgrade the kernel on the system?**

Bootware® creates a secure FIT (Flattened uImage Tree) image labeled `usr-kernel.enc` in `/boot/firmware`. This contains the kernel that is loaded by zboot on each boot. Only zboot is allowed to remake and sign/encrypt the FIT image.

The FIT image consists of two things:

- Kernel (`kernel8.img`/`kernel_2712.img` for Raspberry Pi OS, `vmlinuz` for Ubuntu)
- Zymbit generated initramfs (For unlocking the LUKS system with keys in the HSM)

To update the kernel on the device and remake the FIT Image:

Both FULL and OVERLAY image updates that contain a kernel will trigger a rebuild of the FIT image, but an overlay update will be much faster if that is the only thing a user wishes to update.

### Example: Add the kernel to the addition manifest using `zbcli manifest`

```bash
sudo zbcli manifest add /boot/firmware/kernel8.img
```

You can see the the file path via the `zbcli manifest print` subcommand:

```
   Validated bootware installation
    ---------
	Pi Module:         Raspberry Pi 5
	Operating System:  Rpi-Bookworm
	Zymbit module:     Hardware Security Module 6
	Kernel:            kernel_2712.img
	---------
  Files to be overwritten
    /boot/firmware/kernel_2712.img

  No files to be deleted
    Finished in 0s                                                  
```

Create the overlay image with `zbcli imager`.

This zi image is only populated with the files specified in `file_manifest`.

```bash
sudo zbcli imager --overlay-image --image-name=overlay
```

Follow the prompts to provide optional version information, as well as the Private Key information.

Run `zbcli update-config` with the correct endpoint and policies. Then point it at `overlay.zi`.

```bash
sudo zbcli update-config
```

Reboot to apply the changes.

### See also:

[zbcli manifest](../../zbcli/manifest)

[zbcli imager](../../zbcli/imager)

[zbcli update-config](../../zbcli/update-config)

[zbcli update](../../zbcli/update)
