---
title: Bootware Additional Info
linkTitle: "Additional File Info"
description: Detailed information about important Bootware files
lastmod: "2024-09-26"
draft: false
images: []
type: docs
layout: single
weight: 0
toc: false
---

-----
### Bootware File Structure Overview:

Brief description of Bootware files that complete the Bootware process.

#### Location: /boot or /boot/firmware

##### Critical Files:

Filename: `config.txt`

Description: RPi Configuration File

Critical Lines:
```
dtoverlay=dwc2,dr_mode=host
kernel=u-boot.bin
enable_uart=1
```

-----
Filename: `u-boot.bin`

Description: U-Boot Bootloader

Functions:  Loads and executes boot script

-----
Filename: `boot.scr`

Description: U-Boot Boot Script

Functions:

* Generates U-Boot Environment
* Updates U-Boot Environment
* Loads and Boots Kernel

-----
Filename: `zboot.enc`

Description: zboot (Bootware zboot Module)

Functions:
* Initialize Bootware
* Perform Update
* Perform Rollback
* Perform Recovery
				
-----
Filename: `zb_config.enc`

Description: zboot Configuration File - Generated by `zbcli update-config`
				
-----
Filename: `uboot.env`

Description: u-Boot Environment
				
-----
Filename: `usr-kernel.enc`

Description: Encrypted Kernel - Generated by zboot

##### Non-Critical Files:

Filename: `zboot.log`

Description: zboot Log File

-----
### zbconfig

`zbcli config-update` internally uses the `zbconfig` tool to configure the device environment. Developers may directly use the `zbconfig` CLI interface instead of the `zbcli config-update` to configure their device environment. 

`zbconfig` simply reads and writes values to an encrypted JSON file (`/boot/zb_config.enc`) that bootware uses to apply updates. The values that can be configured are listed below:

| Value | Type | Description |
| :-------- | :------- | :---------- |
| one_root_fs | Boolean | True will facilitate A only filesystems, while false enables A/B filesystems. |
| resize_a | Boolean | If one_root_fs is true, this parameter is checked for resizing A only filesystems.<br /> true - full disk<br />false - half disk |
| update_mode | String | This parameter is only checked for A/B filesystems. Set the policy for the updates: <br />UPDATE_ACTIVE <br />UPDATE_BACKUP <br />UPDATE_BOTH |
| update_endpoint | String | The endpoint where new images are pulled from. <br />Example https URL: https://zk-sw-repo.s3.amazonaws.com/ota_preview/base_ota.zi<br />Example USB stick: /dev/sda1 |
| endpoint_type | String | The type of endpoint for the update_endpoint param. Value must be all uppercase.<br />HTTPS<br />USB |
| update_name | String | The name of the .zi image that will be used for the update. If the name of the new update is base_ota.zi, this parameter needs to be named “base_ota
