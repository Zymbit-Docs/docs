---
title: Enabling Production Mode - HSM6
linkTitle: "Enabling Production Mode - HSM6"
description: ""
aliases:
    - /quickstart/production-mode/hsm6/
date: "2022-03-08"
lastmod: ""
draft: false
images: []
weight: 1000
toc: true
---

{{< callout destructive >}}
THE BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO THE FOLLOWING:

* Your specific HSM6 will be **permanently** locked to the specific host device.
* It will be impossible to move or bind your HSM6 to another device. There are no factory resets, masterkeys, or other forms of recovery.
* If you are using the *Perimeter Detect* features, then the sequence in which you arm and disarm this feature is very important. Be sure to carefully follow the process steps below.
* Once you have locked your HSM6 into production mode, Zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch). [Contact Zymbit for more information.](https://www.zymbit.com/contact-us/)

If you decide that you are not ready for permanent binding, leave the HSM6 in developer mode, but beware this makes it easier for a bad actor to replace the host with rogue hardware.

{{< /callout >}}

When you have completed your development work with the HSM6 and are ready to deploy your system into the field, we recommend that you permanently bind your HSM6 to a specific host device and SD card.

{{< resource_link "reference/binding" >}}
HSM6 generates a unique Device ID by measuring certain attributes of the specific host and the HSM6 itself to permanently associate the two devices.
{{< /resource_link >}}

### Summary of Steps

Develop your application
* [ ] Ensure your host has all the necessary prerequisites in place to interface with the HSM6 and that it will be able to run your software application.

Active production mode
* [ ] Permanently bind your HSM6 to the host device.

## Develop your application

To begin, ensure that you have followed the Getting Started guide for your HSM6 carefully to install the prerequisite Zymbit Driver Package:

{{< resource_link "getting-started/hsm6" >}}
Install your HSM6 to a Raspberry Pi running Raspbian or Ubuntu before moving to production mode.
{{< /resource_link >}}

To reiterate, before you continue, the following steps should be complete:

* [ ] Install a battery on the HSM6.
* [ ] Connect the GPIO header of the HSM6 to the GPIO pins of the host board while the host is powered down.
* [ ] Install HSM6 software on the host and establish temporary binding in development mode.

After these steps have been completed, you are ready to prepare your device for permanent binding.

### Prepare *Perimeter Detect*

The `Perimeter Event Actions` for your HSM6 should be set to `none` or `notify` only. If your HSM6's action mode is set to `selfdestruct`, you might render your HSM6 useless while attempting to activate production mode.

{{< resource_link "tutorials/perimeter-detect/hsm6/" >}}
Understand how to use the HSM6's perimeter detect features.
{{< /resource_link >}}

To do this quickly, with the HSM6 client libraries installed, you can run the following shell command to use the Python API to communicate with the HSM6 and set the `Perimeter Event Actions` to do nothing when triggered:

```bash
python3 -c "import zymkey;
for ch in (0, 1):
    zymkey.client.set_perimeter_event_actions(ch, action_notify=False, action_self_destruct=False)
zymkey.client.clear_perimeter_detect_info()"
```

### Prepare your application

If you intend to use your HSM6 to encrypt your root file system, you should complete that step now, using our guide. This step is highly recommended.

{{< resource_link "tutorials/encrypt-rfs/" >}}
Encrypt the root file system of your host device using LUKS and your HSM6.
{{< /resource_link >}}

You should then install your application on your host SBC (in the encrypted volume, if applicable).

### Test, debug, and test again

{{< callout danger >}}
*DO NOT* skip this step. If you encounter a major issue with your application after your HSM6 has been permanently bound to your device and armed, you may not be able to fix it.
{{< /callout >}}

Test the functionality of your application thoroughly to ensure it is free of major defects that will prevent it from functioning properly. After the HSM6 has been bound to your host SBC, especially if *Perimeter Detect* features are in use, it may be difficult to make significant chances to your configuration without locking youself out of the HSM6, depending on the nature of your application and its configuration.

## Activate production mode

With the Zymkey, a physical tab was cut to go into production mode. In the HSM models, to go into production mode it only requires a function call followed by a reboot.

The API function lock binding puts the HSM into production mode. Below are three examples which check the current binding info, lock the HSM binding, then check the current binding info again. Remove the comments around the lock binding function to move to production mode.

<details>

<summary>C - zkLockBinding</summary>
<br>

```c
// gcc example_binding.c -I /usr/include/zymkey -l zk_app_utils -o example_binding

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "zk_app_utils.h"
#include "zk_b64.h"

void check_code(int code, char* location){
  if (code < 0)
  {
    fprintf(stderr, "FAILURE: %s - %s\n", location, strerror(code));
  }
  else if (code >= 0)
  {
    fprintf(stdout, "SUCCESS: %s - %d\n", location, code);
  }
}

void HSM_soft_bind(zkCTX zk_ctx)
{
  bool binding_is_locked = false;
  bool is_bound = false;
  int ret = zkGetCurrentBindingInfo(zk_ctx, &binding_is_locked, &is_bound);
  check_code(ret, "zkGetCurrentBindingInfo");
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n\n");

  //ret = zkLockBinding(zk_ctx);
  //if(binding_is_locked && is_bound)
  //{
  //  check_code(ret, "zkLockBinding - Already Bound");
  //}
  //else
  //{
  //  check_code(ret, "zkLockBinding");
  //}
  //printf("\n");

  ret = zkGetCurrentBindingInfo(zk_ctx, &binding_is_locked, &is_bound);
  check_code(ret, "zkGetCurrentBindingInfo");
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n\n");
}

int main()
{
  zkCTX zk_ctx;
  int status = zkOpen(&zk_ctx);
  check_code(status, "zkOpen");
  printf("\n\n");

  HSM_soft_bind(zk_ctx);

  status = zkClose(zk_ctx);
  check_code(status, "zkClose");
  printf("\n");

  return 0;
}
```
</details>


<details>
<summary>C++ - lockBinding</summary>
<br>

```cpp
#include <stdio.h>
#include <zkAppUtilsClass.h>

using namespace std;
using namespace zkAppUtils;

void HSM_soft_bind(zkClass* zk_inst)
{
  bool binding_is_locked = false;
  bool is_bound = false;
  zk_inst->getCurrentBindingInfo(binding_is_locked, is_bound);
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n");

  //zk_inst->lockBinding();
  //printf("lockBinding successful\n");

  zk_inst->getCurrentBindingInfo(binding_is_locked, is_bound);
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("HSM is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n");
}

int main()
{
  zkClass* zk_inst;
  zk_inst = new zkClass();

  HSM_soft_bind(zk_inst);

  delete zk_inst;
  return 0;
}
```
</details>


<details>

<summary>Python - lock_binding</summary>
<br>

```python
import zymkey
tup = zymkey.client.get_current_binding_info()
print("HSM is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))

#zymkey.client.lock_binding()

tup = zymkey.client.get_current_binding_info()
print("HSM is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))
```
</details>

{{< callout warning >}}
Do not proceed without completing the steps outlined above, including setting the `Perimeter Event Actions` to `none` or `notify`.
{{< /callout >}}


### Finalize your device for deployment

After using the APIs to lock binding, reboot. The blink pattern on the HSM6 will change to 3 rapid blinks once every 3 seconds to indicate that HSM6 has bound to the host in production mode.

If you are using the *Perimeter Detect* features, close your perimeter circuits (for example, by closing the enclosure's lid), and then clear any `Perimeter Detect Events` using the API:

```bash
python3 -c "import zymkey; idx = 0;
zymkey.client.clear_perimeter_detect_info()
for p in zymkey.client.get_perimeter_detect_info():
  if p:
    print(f'Channel {idx} has a detected breach event. Clear the Perimeter Detect Events again.')
    idx += 1
  else:
    print('No perimeter breach detected.')"
```

If you get a message that a breach event was detected from the above command, run it again to ensure all events have been cleared. When it confirms that no breach events have been detected, it is then safe to arm the system by setting the `Perimeter Event Actions` to `notify` or `selfdestruct`, if desired.

Your system is now armed and ready to be used in the field!

