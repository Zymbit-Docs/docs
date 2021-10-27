---
title : "Perimeter Detect: ZYMKEY4"
linkTitle: "ZYMKEY4"
description: ""
date: ""
lastmod: ""
draft: false
images: []
layout: "single"
weight: -690
toc: true
---

## Scope

This section explains the perimeter detect feature on Zymkey4 and how to use it in your software application with a simple two wire loop physical configuration. 

For alternative physical configurations and best practices: [Learn more >](https://docs.zymbit.com/tutorials/perimeter-detect/examples)

![Zymkey4-PD-thick-lines](../ZK4-perim-detect-thick-lines.png)

Perimeter Detect provides two additional layers of physical security that can be used to detect when the perimeter of your device is breached. This is an important feature when devices are deployed in the field, unattended  or in high risk environments. 

Zymkey4 includes two independent Perimeter Loops that can be configured to meet different applications.

When a Perimeter Loop is breached, Zymkey4 can be configured (at time of binding) to respond with different "Actions", depending upon your security policy. 


### Connecting Perimeter Loop Circuits

Zymkey4 uses a standard microUSB connector to interface to perimeter circuits 1 and 2. This is convenient for rapid prototyping and small scale production situations.

<p><img src="../ZK4-cable-connector.png" alt="Zymkey4 Cable Connector" width="50%"></p>

(For high volume applications, different connector types are available.  [Contact Zymbit](https://www.zymbit.com/contact-us/) for more details.)



### Using a Standard USB EXTENSION Cable for Perimeter Loop

You can use a micro-usb EXTENSION cable, which carries all necessary signals, to connect to the perimeter detect. [Here is one example of an extension cable that will work.](https://www.amazon.com/gp/product/B071RYP3SC/ref=oh_aui_detailpage_o08_s02?ie=UTF8&psc=1) (Remove the female connector to expose the flying leads as shown below, then connect your perimeter circuits - P1, P2 -  to these)

![Cable Pic 1](../ZK4-perim-detect-cable-pic.png)

![Cable Pic 2](../ZK4-perim-detect-cable.png) 


**IMPORTANT:** do **NOT**  use standard micro-usb **charging cable**  it will not work, because it does not have a wire on pin 4.

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

```
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

```
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
```
gcc -I /usr/include/zymkey/ -l zk_app_utils <Your Program>
```
If the perimeter is not breached, zkWaitForPerimeterEvent will return a failure code indicating a timeout occurred and no breach was detected.
```
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

<h2 id="troubleshooting">TROUBLESHOOTING</h2>
<ul>
<li><a href="https://docs.zymbit.com/quickstart/faq/zymkey4/#troubleshooting">Zymkey Troubleshooting FAQ</a></li>
<li><a href="https://community.zymbit.com/">Community Forum</a></li>
</ul>
