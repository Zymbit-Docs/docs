---
title: Enabling Production Mode - Secure Edge Node
linkTitle: "Enabling Production Mode - Secure Edge Node"
description: ""
aliases:
    - /quickstart/production-mode/scn/
    - /getting-started/scn/production-mode/
date: "2022-04-29"
lastmod: "2024-10-22"
draft: false
images: []
weight: 1000
toc: true
---

If left in Development Mode, self-destruct events are simulated with LED flash sequences and recovery rather than destruction to allow for experimentation with the security functions. The LED sequence will repeat three times and then the system will recover.

{{< callout destructive >}}
THE BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO THE FOLLOWING:

* If you are using the *Perimeter Detect* features, then the sequence in which you arm and disarm this feature is very important. Be sure to carefully follow the process steps below.

If you decide that you are not ready for permanent binding, leave the SEN in developer mode.
{{< /callout >}}

The table below summarizes the differences between Development Mode (no Bind Lock) and Production Mode (Bind Locked)

| Event | Development Mode | Production Mode | Triggers |
| :---- | :---- | :---- | :---- |
| Tamper Event| 6 flash + channel sub-flash | Destroy all keys | Immediately |
| Low Temp Threshold | 20 flash + 1 sub-flash | Do Not Boot | Immediately |
| High Temp Threshold | 20 flash + 2 sub-flash | Do Not Boot | Immediately |
| Low Battery Voltage Threshold | 4 flash + 1 sub-flash | Two Policies: Prevent Boot or Destroy all keys | Power Off |
| Supervised Boot Failure | 4 flash + 2 sub-flash | Two Policies: Prevent Boot or Destroy all keys | On Boot |


Once locked, setting the Event Action modes are limited in the following way:

| Event | Setting |
| :---- | :----- |
| Tamper | One time after locked |
| Low Temp Threshold | Must be set prior to locking |
| High Temp Threshold | Must be set prior to locking |
| Low Battery Voltage Threshold | Must be set prior to locking |
| Supervised Boot Failure | No limit |

When you have completed your development work with the SEN and are ready to deploy your system into the field, we recommend that you permanently bind your SEN to a specific host device.

### Summary of Steps

Develop your application

[ ] Ensure your host has all the necessary prerequisites in place to interface with the SEN and that it will be able to run your software application.

Activate Production Mode

[ ] Permanently bind your SEN.

## Develop your application

The following steps should be complete:

[ ] Install a battery on the Zymbit SEN I/O board.

[ ] Install all necessary software for your application on the host and establish temporary binding in development mode.

After these steps have been completed, you are ready to prepare your device for permanent binding.

### Prepare *Perimeter Detect*

The `Perimeter Event Actions` for your SEN should be set to `none` or `notify` only. If your SEN's action mode is set to `self_destruct`, you might render your unit useless while attempting to activate Production Mode.

{{< resource_link "tutorials/perimeter-detect/sen/" >}}
Understand how to use the SEN's perimeter detect features.
{{< /resource_link >}}

To do this quickly, with the SEN client libraries installed, you can run the following shell command to use the Python API to communicate with the SEN and set the `Perimeter Event Actions` to only Notify when triggered:

```bash
python3 -c "import zymkey;
for ch in (0, 1):
    zymkey.client.set_perimeter_event_actions(ch, action_notify=True, action_self_destruct=False)
zymkey.client.clear_perimeter_detect_info()"
```

### Prepare your application

You should then install your application on your host SBC. The SEN root partition is pre-encrypted and is secured by the SEN itself.

### Test, debug, and test again

{{< callout danger >}}
*DO NOT* skip this step. If you encounter a major issue with your application after your SEN has been permanently bound to your device and armed, you may not be able to fix it.
{{< /callout >}}

Test the functionality of your application thoroughly to ensure it is free of major defects that will prevent it from functioning properly. In Production Mode when *Perimeter Detect* features are in use, it may be difficult to make significant changes to your configuration without locking youself out of the SEN, depending on the nature of your application and its configuration.

## Activate Production Mode

To put the SEN into Production Mode only requires a function call followed by a power cycle.

The API function lock_binding puts the SEN into Production Mode. Below are three examples which check the current binding info, lock the SEN binding, then check the current binding info again. Remove the comments around the lock binding function to move to Production Mode.

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
  printf("SEN is bound: ");
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
  printf("SEN is bound: ");
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
  printf("SEN is bound: ");
  printf(is_bound ? "true" : "false");
  printf("\n");

  //zk_inst->lockBinding();
  //printf("lockBinding successful\n");

  zk_inst->getCurrentBindingInfo(binding_is_locked, is_bound);
  printf("Binding is locked: ");
  printf(binding_is_locked ? "true" : "false");
  printf("\n");
  printf("SEN is bound: ");
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
print("SEN is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))

#zymkey.client.lock_binding()

tup = zymkey.client.get_current_binding_info()
print("SEN is bound: " + str(tup[1]))
print("Binding is locked: " + str(tup[0]))
```
</details>

{{< callout warning >}}
Do not proceed without completing the steps outlined above, including setting the `Perimeter Event Actions` to `none` or `notify`. Prior to setting the Bind Lock.
{{< /callout >}}


### Finalize your device for deployment

After using the APIs to lock binding, reboot. The blink pattern on the SEN will change to 3 rapid blinks once every 3 seconds to indicate that the SEN has bound to the host in Production Mode.

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

If you get a message that a breach event was detected from the above command, run it again to ensure all events have been cleared.

{{< callout warning >}}
You only get one chance to set `Perimeter Event Actions` once you are in Production Mode!
{{< /callout >}}

When it confirms that no breach events have been detected, it is then safe to arm the system by setting the `Perimeter Event Actions` to `notify` or `selfdestruct`, if desired.

Your system is now armed and ready to be used in the field!

