---
title: "Working with SCM Supervised Boot"
linkTitle: "Supervised Boot (SCM)"
description: ""
aliases:
    - /tutorials/verified-boot/
date: "2022-03-28"
lastmod: "2023-01-22"
draft: false
images: []
toc: true
---
Updated: 2023-01-22

## What is Supervised Boot?

Supervised Boot is Zymbit's method for insuring that the boot process is secure. A list of files can be specifed to be hashed, signed, and verified by the SCM prior to allowing the CM4 module to boot. By default, the following files are signed and verified:

```
/boot/bcm2711-rpi-cm4.dtb
/boot/cmdline.txt
/boot/config.txt
/boot/initrd.img
/boot/kernel8.img  (or /boot/kernel7l.img for 32-bit)
/boot/start4.elf
/boot/zymbit_mac_address
/boot/overlays/vc4-kms-v3d.dtbo
```

## The Manifest

The Manifest is the list of files that will be tracked and verified by the Zymbit Secure Compute Module (SCM) during the boot process. The Manifest resides within the SCM itself. It does not live on any file system. Zymbit provides an API interface to add/update/delete entries in the Manifest as well as set the action to take if a signature verification of a file should fail.

All files in the Manifest must reside within the /boot partition. File paths in the Manifest all include `/boot/` by default. Only include the portion of the file path after `/boot/`. For instance, to include `/boot/config.txt`, you would call our API with the string `config.txt`.

If any file exists in the Manifest, Supervised Boot is automatically enabled. To turn off Supervised Boot, remove all files from the Manifest.

## Example Python CLI Application


### Prerequisites

* Zymbit Modules that support this feature:
    * [Secure Compute Module (SCM )](https://www.zymbit.com/secure-compute-node/)

* All code snippets written in this article are written using Python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](../../api)

### Example Application

The code below can be used to add/update/delete and display the Manifest of files to check during Secure Boot operation. It can also update all the files in the Manifest or delete all the files in the Manifest. Save the code below to a file. We will name it manifest.py for the following examples.

```python
#!/usr/bin/python3

import argparse
import zymkey


def add_update(filepath, slot=None):
    if slot:
        print(f"Manifest Add/Update {filepath}    slot={slot}")
        zymkey.client.add_or_update_supervised_boot_file(filepath, int(slot))
    else:
        print(f"Manifest Add/Update {filepath}  default slot=15")
        zymkey.client.add_or_update_supervised_boot_file(filepath)


def update_all_entries(slot=None):
    list = zymkey.client.get_supervised_boot_file_manifest()
    if len(list) ==  0:
        print("Manifest is empty")
    else:
        for filepath in list.split():
            add_update(filepath, slot)


def delete(filepath):
    print(f"Manifest Delete:  {filepath}")
    zymkey.client.remove_supervised_boot_file(filepath)


def delete_all_entries():
    list = zymkey.client.get_supervised_boot_file_manifest()
    if len(list) ==  0:
        print("Manifest is empty")
    else:
        for filepath in list.split():
            delete(filepath)



def show():
    print("\nManifest:")
    print("---------")
    list = zymkey.client.get_supervised_boot_file_manifest()
    if len(list) ==  0:
        print("Manifest is empty")
    else:
        for filepath in list.split():
            print(filepath)
    print("")


if __name__ == "__main__":

    # Setup arg parser
    parser = argparse.ArgumentParser(
        description="add/del/update Supervised Boot Manifest. (show by default)",
        epilog="filepath from /boot. ex: for /boot/config.txt, provide config.txt."
        )
    group = parser.add_mutually_exclusive_group()
    group.add_argument("-a", "--add", metavar="filepath", help="add filepath to manifest", action="store", required=False)
    group.add_argument("-u", "--update", metavar="filepath", help="update filepath in manifest", action="store", required=False)
    group.add_argument("-U", help="update all entries in manifest", action="store_true", required=False)
    group.add_argument("-d", "--delete", metavar="filepath", help="delete filepath from manifest", action="store", required=False)
    group.add_argument("-D", help="delete all entries from manifest", action="store_true", required=False)
    parser.add_argument("-s", "--slot", metavar="slot_num", help="use slot for add/delete (default=15)", action="store", required=False)
    args = parser.parse_args()
    parser.parse_args()

    if args.add:
        add_update(args.add, args.slot)
    elif args.update:
        add_update(args.update, args.slot)
    elif args.U:
        print("Updating all entries in manifest...")
        update_all_entries(args.slot)
    elif args.delete:
        delete(args.delete)
    elif args.D:
        print("Deleting all entries from manifest...")
        delete_all_entries()

    show()

```

### Working with the Manifest

Running the example with no parameters will display the current contents of the Manifest. The default Manifest as shipped contains:

```python
$ ./manifest.py
Manifest:
---------
bcm2711-rpi-cm4.dtb
bootcode.bin
cmdline.txt
config.txt
initrd.img
kernel8.img
start4.elf
zymbit_mac_address
overlays/vc4-kms-v3d.dtbo
```

To add a file to the Manifest, run the example script with the `--add` option and give it a filepath to a file in /boot. We'll create a sample file by copying `/etc/hosts`,

```bash
$ sudo cp /etc/hosts /boot/sample.txt
$ ./manifest.py --add sample.txt
Manifest:
---------
bcm2711-rpi-cm4.dtb
bootcode.bin
cmdline.txt
config.txt
initrd.img
kernel8.img
start4.elf
zymbit_mac_address
overlays/vc4-kms-v3d.dtbo
sample.txt
```

The SCM will create a signature for the file `sample.txt` and store it internally. The SCM will verify that signature against the file upon the next boot. If the signature does not verify, the SCM will be held in reset and will not boot. In Development Mode (no bind lock), the SCM will "simulate" this process by flashing an LED sequence of 4 followed by 2 flashes, repeated three times, and then the SCM will boot normally.

You can test this out:

 * First, after adding `sample.txt` to the Manifest and power cycle. The system should boot normally.
 * Next, edit `/boot/sample.txt` and power cycle. The sign/verify process will fail and the SCM will simulate a __Held in Reset__ condition with a sequence of 4 flashes followed by 2 flashes, three times. If left in Development Mode (no bind lock), the SCM will boot up and allow you to recover.

There are three ways you can remedy the verification failure:

 * Edit `/boot/sample.txt` and revert back to its original contents.
 * Update the Manifest to sync up the current contents of the file with the Manifest
```bash
./manifest.py --update sample.txt
```

 * Remove the file from the Manifest with `./manifest.py --delete
```bash
./manifest.py --delete sample.txt
```

The next powercycle should boot with the normal sequence - it should not flash the 4 flashes followed by 2 flashes, three times sequence.

### Specifying a Different Slot

The example above uses the default slot 15 but will take alternative slot numbers, 0-15. Slots in the key store (Slots 16-528) are not supported.



