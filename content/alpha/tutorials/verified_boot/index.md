---
title: "Working with SCM Verified Boot Manifest"
linkTitle: "Verified Boot"
description: ""
date: "2022-03-28"
lastmod: ""
draft: false
weight: 20
images: []
toc: true
---
Updated: 2022-03-28

## What is Verified Boot?

Description for Verfied Boot and the Manifest.

## The Manifest

The Manifest is the list of files that will be tracked and verified by the Zymbit Secure Compute Module (SCM) during the boot process. The Manifest resides within the SCM itself. It does not live on any file system. Zymbit provides an API interface to add/update/delete entries in the Manifest, as well as set the action to take if a signature verification of a file should fail.
 
All files in the Manifest must reside within the /boot partition. File paths in the Manifest all include `/boot/` by default. Only include the portion of the file path after `/boot/`. For instance, to include `/boot/config.txt`, you would call our API with the string `config.txt`.

## Example Python CLI Application

### Prerequisites

* Zymbit Modules that support this feature:
    * [SCM Early Access](https://www.zymbit.com/secure-compute-node//)

* The SCM comes pre-installed and ready to run. No additional steps are necessary

* All code snippets written in this article are written using Python3. For more Zymbit API documentation (Python/C/C++) visit: [API Documentation](https://docs/zymbit.com/api)

### Example Application

The code below can be used to add/update/delete and display the Manifest of files to check during Secure Boot operation. Save the code below to a file. We will name it manifest.py for the following examples.

```python
#!/usr/bin/python3

import argparse
import zymkey

class Manifest:

    def add_update(slot, filepath):
        print(f"Manifest Add/Update (slot={slot}):  {filepath}")
        zymkey.client.add_or_update_verified_boot_file(slot, filepath)

    def delete(filepath: str):
        print(f"Manifest Delete:  {filepath}")
        zymkey.client.remove_verified_boot_file(filepath) 

    def show():
        print("Manifest:")
        print("---------")
        zymkey.client.retrieve_manifest_method()


# Setup arg parser
parser = argparse.ArgumentParser(
    description="add/del/update Verified Boot Manifest. (show by default)",
    epilog="filepath from /boot. ex: for /boot/config.txt, provide config.txt."
    )
group = parser.add_mutually_exclusive_group()
group.add_argument("-a", "--add", metavar="filepath", help="add filepath to manifest", action="store", required=False)
group.add_argument("-u", "--update", metavar="filepath", help="update filepath in manifest", action="store", required=False)
group.add_argument("-d", "--delete", metavar="filepath", help="delete filepath from manifest", action="store", required=False)
parser.add_argument("-s", "--slot", metavar="slot_num", help="use slot for add/delete (default=0)", default=0, action="store", required=False)
args = parser.parse_args()
parser.parse_args()


if args.add:
    Manifest.add_update(args.slot, args.add)

elif args.update:
    Manifest.add_update(args.slot, args.update)

elif args.delete:
    Manifest.delete(args.delete)

Manifest.show()
```

### Display the Current Manifest

Running the example with no parameters will display the current contents of the Manifest. The default Manifest as shipped contains,

```
./manifest.py
Manifest:
---------
config.txt
cmdline.txt
start4.elf
kernel.img
```
