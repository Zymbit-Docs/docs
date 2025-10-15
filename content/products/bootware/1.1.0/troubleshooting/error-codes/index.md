---
title: "Bootware 1.0-general Error Codes"
linkTitle: "Logging and Bootware 1.0-general Error Codes"
lastmod: "2025-10-15"
draft: false
images: []
weight: 10
toc: false
---

-----

Bootware error codes are displayed on the screen (HDMI console is all that is visible until booted) and are logged in `/boot/zboot.log`. The list below includes all the available error codes. 

-----
### **zb_config Errors:**

##### [ERROR] [0.2.0] [SYSTEM] [0x0802] load_config(): decrypt zb_config.enc
<details>

<summary>Details</summary>

Description: Failed to decrypt zb_config.enc

Cause: Corrupted zb_config.enc

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0a02] load_config(): load_config(): zbconfig -gen zb_config.enc
<details>

<summary>Details</summary>

Description: Failed to generate zb_config.enc

Cause: Error writing to /boot/zb_config.enc

</details>
  
##### [ERROR] [0.2.0] [SYSTEM] [0x0a01] load_config(): load_config(): key=value
<details>

<summary>Details</summary>

Description: Unable to parse zb_config.enc

Cause: Corrupted zb_config.enc

</details>

-----
### **WiFi Errors:**

##### [ERROR] [0.2.0] [SYSTEM] [0x0604] start_wifi(): wlan0 wpa_supplicant
<details>

<summary>Details</summary>


Description: Failed to start wpa supplicant

Cause: Corrupted zb_config.enc

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0603] start_wifi(): wlan0 udhcpc
<details>

<summary>Details</summary>

Description: Failed to get IP

Cause: Unable to connect to WiFi/Incorrect SSID/Credentials

</details>

-----
### **Time Errors:**

##### [WARNING] [0.2.0] [SYSTEM] [0x0602] set_time(): ntpdate
<details>

<summary>Details</summary>

Description: Failed to Sync Time

Cause: No network connectivity

</details>

-----
### **u-boot Environment Errors:**

##### [ERROR] [0.2.0] [SYSTEM] [0x0304] set_uboot_variables(): fw_setenv boot_count
<details>

<summary>Details</summary>

Description: Failed to write boot_count environment variable

Cause: Unable to write to /boot/uboot.env

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0304] set_uboot_variables(): fw_setenv error_code
<details>

<summary>Details</summary>

Description: Failed to write error_code environment variable

Cause: Unable to write to /boot/uboot.env

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0304] set_uboot_variables(): fw_setenv zb_update
<details>

<summary>Details</summary>

Description: Failed to write zb_update environment variable

Cause: Unable to write to /boot/uboot.env

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0304] set_uboot_variables(): fw_setenv rollback_count
<details>

<summary>Details</summary>

Description: Failed to write rollback_count environment variable

Cause: Unable to write to /boot/uboot.env

</details>

##### [ERROR] [0.2.0] [SYSTEM] [0x0304] set_uboot_variables(): fw_setenv max_boot_attempts
<details>

<summary>Details</summary>

Description: Failed to write max_boot_attempts environment variable

Cause: Unable to write to /boot/uboot.env

</details>

-----
### **User Kernel FitImage Errors:**

##### [FATAL] [0.2.0] [GEN_USR_KERNEL] [0x0501] generate_usr_kernel(): File Not Found /boot/kernel8.img
<details>

<summary>Details</summary>

Description: /boot/kernel8.img not found

</details>

##### [FATAL] [0.2.0] [GEN_USR_KERNEL] [0x0501] generate_usr_kernel(): File Not Found /boot/initrd.img
<details>

<summary>Details</summary>

Description: /boot/initrd.img not found

</details>

##### [FATAL] [0.2.0] [GEN_USR_KERNEL] [0x0701] generate_usr_kernel(): Generate kernel8 FitImage
<details>

<summary>Details</summary>

Description: Failed to generate kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [GEN_USR_KERNEL] [0x0802] generate_usr_kernel(): Encrypt $KERNEL FitImage
<details>

<summary>Details</summary>

Description: Failed to encrypt kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [GEN_USR_KERNEL] [0x0506] generate_usr_kernel(): mv /boot/kernel8.enc
<details>

<summary>Details</summary>

Description: Failed to move kernel8.enc to /boot/kernel8.enc

Cause: Unable to write to /boot/kernel8.enc

</details>

-----
### **Update Errors:**

##### [FATAL] [0.2.0] [UPDATE] [0x0501] update(): File Not Found /boot/kernel8.img
<details>

<summary>Details</summary>

Description: /boot/kernel8.img not found

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0b01] update(): Failure
<details>

<summary>Details</summary>

Description: Unexpected ZBoot Update Failure

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0701] update(): Generate kernel8 FitImage
<details>

<summary>Details</summary>

Description: Failed to generate kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0802] update(): Encrypt kernel8 FitImage
<details>

<summary>Details</summary>

Description: Failed to encrypt kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0506] update(): mv /boot/kernel8.enc
<details>

<summary>Details</summary>

Description: Failed to move kernel8.enc to /boot/kernel8.enc

Cause: Unable to write to /boot/kernel8.enc

</details>

-----
### **Rollback Errors:**

##### [ERROR] [0.2.0] [ROLLBACK] [0x0c01] rollback(): Max Rollback Attempts
<details>

<summary>Details</summary>

Description: Maximum rollback attempts exceeded

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0501] rollback(): File Not Found File Not Found /boot/kernel8.img
<details>

<summary>Details</summary>

Description: /boot/kernel8.img not found

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0b01] rollback(): Failure
<details>

<summary>Details</summary>

Description: Unexpected Rollback Failure

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0701] rollback(): File Not Found Generate kernel8 FitImage
<details>

<summary>Details</summary>

Description: Failed to generate kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0802] rollback(): File Not Found Encrypt kernel8 FitImage
<details>

<summary>Details</summary>

Description: Failed to encrypt kernel8 FitImage

</details>

##### [FATAL] [0.2.0] [UPDATE] [0x0506] rollback(): File Not Found mv /boot/kernel8.enc
<details>

<summary>Details</summary>

Description: Failed to move kernel8.enc to /boot/kernel8.enc

Cause: Unable to write to /boot/kernel8.enc

</details>

-----
### **Recovery Errors:**

##### [FATAL] [0.2.0] [RECOVERY] [0x0d01] recovery(): Max Recovery Attempts
<details>

<summary>Details</summary>

Description: Maximum recovery attempts exceeded

</details>

##### [FATAL] [0.2.0] [RECOVERY] [0x0b01] recovery(): update Failure
<details>

<summary>Details</summary>

Description: Unexpected Recovery Update Failure

</details>

##### [FATAL] [0.2.0] [RECOVERY] [0x0d02] recovery(): Failure
<details>

<summary>Details</summary>

Description: Unexpected Recovery Failure

</details>

##### [FATAL] [0.2.0] [RECOVERY] [0x0b01] recovery(): update Failure
<details>

<summary>Details</summary>

Description: Unexpected Recovery Update Failure

</details>

