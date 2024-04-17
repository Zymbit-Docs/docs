---
title: Zymbit Bootware Update Utility
linkTitle: "zb-update"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-17"
draft: false
images: []
type: docs
layout: single
weight: 40
toc: true

---

-----


## zb-update - Utility to perform Bootware Updates

```
zb-update -h

Usage: zb-update [ [-k <key-slot>] [--key-file=<filepath>] [-w] | [-y] [-r] ]


Flags                Description

---------------------------------------------------------------------------------------------------------------------

-k, --key-slot [int]      Key-slot of HSM for verifying the update. Uses HSM.

-w, --not-foreign         Key slot is not a foreign key slot

-f, --key-file [str]      Public pem file verifying the update. Uses software.

-y                        Say yes to all prompts

-r                        Perform rollback swap between active and non-active root partitions

---------------------------------------------------------------------------------------------------------------------


### Examples of Bootware updates:


```
sudo zb-update
```

The script will show your configuration for review and confirmation, or give you the option to change the configuration. This method can be used as an alternative to using the Wizaard.

{{< cardpane >}}
{{% card header="zb-update" %}}
{{< figure
    src="updatemain.png"
    alt="zboot update"
    caption="Review and continue for zboot update"
    >}}
{{% /card %}}
{{< /cardpane >}}

The script will prompt for a reboot to complete the process. 


## Bootware Boot Process

The Bootware Update process will now take place. 

{{< callout warning >}}The initial configuration process can take up to 2 hours to complete. The process can be completed via ssh, but an HDMI console is helpful to follow the process. During the process, the blue LED will be OFF.{{< /callout >}}

On the console, you will see:

* “Loading: Encrypted zboot please wait…” message, which takes around 4-5min.
* The A/B partitions will be configured and setup for LUKS encryption protected by the Zymbit SCM
* It will then take a few minutes to get/unpack tarballs from the image.
* It will take some time to unpack the image into the A/B root partitions depending on the size of the image.
* Once it's done unpacking the image to the A and B partitions, it will boot into the updated ACTIVE partition. You can use `lsblk` to examine the partitions.

## Reload all utilities

The Bootware utilities are needed for Bootware to function. If not included in your newly loaded image, you will need to load the utilities into your partition(s). Our example zi file base_bullseye.zi has the Bootware Utilities pre-loaded.

## Recovery

Each successful boot will clear a max_boot_failure counter. A max_boot_failure count of 3 will trigger the recovery mechanism. The BACKUP partition will become the ACTIVE partition. If neither can boot, the endpoint with a good image will be loaded. A ROLLOVER notification message will be added to the MOTD.

## Force Failover (Change Active/Backup partitions)

A failover from Active to Backup is done with the `-r` option to `zb-update`

```
sudo zb-update -r
```


### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

