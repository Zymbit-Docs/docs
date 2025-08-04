---
title: Zymbit Bootware 1.0-general Overlay Image Updates
linkTitle: "Bootware 1.0-general Overlay Image Updates"
lastmod:
date: "2024-04-17"
draft: false
images: []
type: docs
layout: single
weight: 30
toc: true

---

-----

Overlay Images are meant to update devices without nuking and remaking the luks encrypted partitions on the SCM. Overlay updates can be much smaller in size than “FULL” updates, as they are meant to drop in a crate of files over an existing bootware enabled system. Overlay updates simply try and unpack the update over the system and overwrite any previous existing files of the same name. The files that are packed into an overlay image is specified by the user with the tool `zb-manifest`.

`zb-manifest` is a simple tool that basically modifies two files:

- /etc/zymbit/zboot/update_artifacts/file_manifest
- /etc/zymbit/zboot/update_artifacts/file_deletions

The `file_manifest` is a file that keeps track of the files that are specified by the user to wrap into an overlay image using `zb-imager`. `file_manifest` can contain both folder paths and file paths.

The `file_deletions` is a file that keeps track of what files are deleted after the `file_manifest` of files is dropped into the system. `file_deletions` can also contain both folder paths and file paths.

### Overlay updates and system reboots

Overlay updates will need to reboot into zboot to fully apply an overlay update for these two scenarios:

- When updating the kernel and initramfs
- When updating the non-active/backup partition

Overlay updates will not need to reboot the system on UPDATE_ACTIVE policies as they will try to unpack the `overlay.zi` over the active system. This is not true if the update contains a new kernel, as zboot needs to remake the `usr-kernel.enc` in /boot with the new kernel.

`zb-update` will prompt the user with a “This update requires a reboot” when one of the conditions above is fulfilled.

### Example: Updating a kernel on a bootware enabled device

Overlay updates expects the user’s system to already have gone through a “FULL” update before. This means it expects there to be LUKS encrypted devices as well as backed up artifacts in /boot/zboot_bkup.

**Why apt update/upgrade doesn’t update the kernel on the system?**

Zboot creates a secure FIT image labelled usr-kernel.enc in /boot. This effectively functions as the kernel that gets booted by zboot every boot-up. This FIT image only gets remade by zboot.

The FIT image consists of two things:

- Kernel (kernel8.img for raspiOS, vmlinuz for Ubuntu)
- Zymbit generated initramfs (For unlocking the LUKS system with keys in the HSM)

To update one’s kernel on the device and remake the FIT Image:

Both a “FULL” and “OVERLAY” image that contain a kernel will remake the FIT image, but an overlay update will be much faster if that is the only thing a user wants to update.

Example: have `zb-manifest` add the kernel to the `file_manifest`

```bash
sudo zb-manifest --add /boot/kernel8.img
```

You can see the the file path get added here

```bash
cat /etc/zymbit/zboot/update_artifacts/file_manifest
>/boot/kernel8.img
```

Create the overlay image with `zb-imager`.

This .zi is only filled with the files specified in `file_manifest`.

```bash
sudo zb-imager --overlay-image --image-name=overlay
...
Created overlay.zi!
```

Run `zb-update` with the correct endpoint and policies. Then point it at `overlay.zi`.

```bash
sudo zb-update
...
Found these .zi Pick one?:
1. overlay
2. Cancel
> 1
...
This update requires a reboot. Reboot now? (Y/n):
> Y
```

### See also:

[zb-manifest utility](../../utilities/zbmanifest)

[zb-imager utility](../../utilities/zbimager)

[zb-update utility](../../utilities/zbupdate)

