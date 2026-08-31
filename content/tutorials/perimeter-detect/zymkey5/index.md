---
title : "Perimeter Detect: ZYMKEY FIVE"
linkTitle: "ZYMKEY FIVE"
description: "Set up perimeter detect on Zymkey5 with a two wire loop and handle tamper events in your application."
date: ""
lastmod: "2025-10-15"
draft: false
images: []
layout: "single"
weight: -690
toc: true
---

> NOTICE Aug 2026: The perimeter detect behavior described here is correct for Zymkey5, but the physical connections are not the same as Zymkey4. Zymkey5 brings the perimeter circuits out on a 12 pin JST 0.8mm receptacle, not the micro USB connector used by Zymkey4. Contact support@zymbit.com for the Zymkey5 perimeter pinout and cable options before wiring your loops.

## Scope

This section explains the perimeter detect feature on Zymkey5 and how to use it in your software application with a simple two wire loop physical configuration.

For alternative physical configurations and best practices: [Learn more >](https://docs.zymbit.com/tutorials/perimeter-detect/examples)

![Perimeter detect circuits](../ZK4-perim-detect-thick-lines.png)

Perimeter Detect provides two additional layers of physical security that can be used to detect when the perimeter of your device is breached. This is an important feature when devices are deployed in the field, unattended  or in high risk environments.

Zymkey5 includes two independent Perimeter Loops that can be configured to meet different applications.

When a Perimeter Loop is breached, Zymkey5 can be configured (at time of binding) to respond with different "Actions", depending upon your security policy.


### Connecting Perimeter Loop Circuits

Zymkey5 brings perimeter circuits 1 and 2 out on a 12 pin JST 0.8mm receptacle, which mates with a JST 12SUR-32S connector. See the [Zymkey5 product brief](/reference/product-briefs/zymkey5/) for the full connector specification.

Perimeter cable assemblies are available from Zymbit as an accessory. [Contact Zymbit](https://www.zymbit.com/contact-us/) for the pinout and cable options.

### Electrical Circuit

Each perimeter loop should be connected with a 30 AWG wire or thicker and nominal length of 2 feet. For longer lengths contact Zymbit. The wire should be electrically insulated for all applications. A shielded cable may be necessary for electrically noisy or industrial applications.

Custom flex PCBs and rigid PCBs may also be used to complete a perimeter loop circuit.



### Perimeter Breach Response Actions
Prior to permanently binding your Zymkey to a specific host device, it can be configured through the API to respond to a perimeter breach event in one of three ways. After permanent binding is completed, the selected configuration is locked and immutable.

##### Response Choices

A)  Do nothing (disable)
B)  Notify host when perimeter breach occurs
C)  Destroy all key material (this essentially destroys any encrypted data or file system)

Refer to API documentation for more details.

### Test Perimeter Detect

**Developer Mode only**

To quickly test your perimeter detect setup, here are two samples of code using the Python and C API's. Both programs will wait for one second to detect any perimeter breaches.

Please specify the channel (0 or 1) you are testing in either set_perimeter_event_actions or zkSetPerimeterEventAction. Currently the channel is set to 0. In the API, perimeter circuit 2 (as shown in the above images) is defined as channel 1 and perimeter circuit 1 is defined as channel 0.

<details>

<summary>For Python:</summary>

<br>

```python
import zymkey

zymkey.client.set_perimeter_event_actions(0, action_notify=True, action_self_destruct=False)

try:
  zymkey.client.wait_for_perimeter_event(timeout_ms=1000)
  perim_status_str = ""
  idx = 0
  plst = zymkey.client.get_perimeter_detect_info()

  for p in plst:
    if p:
       perim_status_str += "Channel %d breach timestamp = %d\n" % (idx, p)
    idx += 1
  print("Perimeter breach detected!\n" + perim_status_str)

except zymkey.exceptions.ZymkeyTimeoutError:
  print("No perimeter breach detected.")

zymkey.client.clear_perimeter_detect_info()
```
</details>

<details>

<summary>For C:</summary>

<br>

```c
#include <stdio.h>
#include "zk_app_utils.h"

void check_code(int code, char* location)
{
  if (code < 0)
  {
    printf("FAILURE: %s - %d\n", location, code);
  }
  else if (code >= 0)
  {
    printf("SUCCESS: %s - %d\n", location, code);
  }
}

int main()
{
  zkCTX zk_ctx;
  int status = zkOpen(&zk_ctx);
  check_code(status, "zkOpen");

  status = zkSetPerimeterEventAction(zk_ctx, 0, ZK_PERIMETER_EVENT_ACTION_NOTIFY);
  check_code(status, "zkSetPerimeterEventAction");

  int p_code = zkWaitForPerimeterEvent(zk_ctx, 1000);
  check_code(p_code, "zkWaitForPerimeterEvent");

  uint32_t* timestamps_sec;
  int num_timestamps;
  status = zkGetPerimeterDetectInfo(zk_ctx, &timestamps_sec, &num_timestamps);
  check_code(status, "zkGetPerimeterDetectInfo");

  //There was a perimeter event/breach.
  if (p_code == 0)
  {
    printf("Perimeter breach detected!\n");
    for(int i=0; i<num_timestamps; i++)
    {
      printf("Channel %d breach timestamp = %d\n", i, timestamps_sec[i]);
    }
    printf("\n");
  }

  status = zkClearPerimeterDetectEvents(zk_ctx);
  check_code(status, "zkClearPerimeterDetectEvents");

  status = zkClose(zk_ctx);
  check_code(status, "zkClose");
  return 0;
}
```
</details>


To compile
```bash
gcc -I /usr/include/zymkey/ -l zk_app_utils <Your Program>
```
If the perimeter is not breached, zkWaitForPerimeterEvent will return a failure code indicating a timeout occurred and no breach was detected.
```bash
SUCCESS: zkOpen - 0
SUCCESS: zkSetPerimeterEventAction - 0
FAILURE: zkWaitForPerimeterEvent - -110
SUCCESS: zkGetPerimeterDetectInfo - 0
SUCCESS: zkClearPerimeterDetectEvents - 0
SUCCESS: zkClose - 0
```
----------
### Perimeter Detect Circuit Examples
For best practices and examples of how to physically configure perimeter circuits:
[Learn more>](https://docs.zymbit.com/tutorials/perimeter-detect/examples)

## Troubleshooting
[Troubleshooting](https://docs.zymbit.com/troubleshooting/)
[Community](https://community.zymbit.com/)

