---
title : "Perimeter Detect: Secure Edge Node"
linkTitle: "Secure Edge Node"
description: ""
date: "05-11-2022"
lastmod: "03-20-2023"
draft: false
images: []
layout: "single"
weight: -660
toc: true
---

## Scope

This describes the perimeter detect feature on the Secure Edge Node (SEN)

Perimeter Detect provides two additional layers of physical security that can be used to detect when the perimeter of your device is breached. This is an important feature when devices are deployed in the field, unattended or in high risk environments. When a Perimeter Loop is breached, the Secure Edge Node can be configured to respond with different "Actions", depending upon your security policy.

### Connecting Perimeter Loop Circuits

{{< cardpane >}}
{{% card header="Secure Compute Motherboard Perimeter Loop Circuits" %}}
{{< figure
    src="scmio_bottom.png"
    alt=""
    caption=""
    >}}
{{% /card %}}
{{< /cardpane >}}

The Secure Edge Node includes two independent Perimeter Loops that can be configured to meet different applications. The first perimeter loop connects to the four switches on the bottom of the motherboard. The four switches are in a closed position when the Secure Edge Node enclosure is screwed tightly. Opening the Node will open the switches, opening the first perimeter loop. 

There is also a four pin connector labeled "Perimeter" on the underside of the IO board. The first perimeter loop can be controlled by the two center pins of the header; the second perimeter loop can be controlled by the outside two pins of the header.

### Access to the Perimeter Loop Circuits.

Use a Torx-T10 screwdriver to loosen the six screws holding the Node enclosure together. Flip over and remove the bottom to access the Perimeter Loop circuits.

### Electrical Circuit

Each perimeter loop should be connected with a 30 AWG wire or thicker and nominal length of up to 2 feet. For longer lengths contact Zymbit. The wire should be electrically insulated for all applications. A shielded cable may be necessary for electrically noisy or industrial applications.

Custom flex PCBs and rigid PCBs may also be used to complete a perimeter loop circuit.

### Perimeter Breach Response Actions

Prior to permanently binding your Secure Edge Node to a specific host device, it can be configured through the API to respond to a perimeter breach event in one of three ways. After permanent binding is completed, the selected configuration is locked and immutable.

##### Response Choices

-  Do nothing (disable)
-  Notify host when perimeter breach occurs (default as shipped)
-  Destroy all key material (prevents access to encrypted data or root file system)

### Test Perimeter Detect
**Developer Mode only**

To quickly test your perimeter detect setup, here is sample code using the Python API. The program will wait for ten seconds to detect any perimeter breaches. Before running this script, connect the circuits with the provided yellow and blue wires and during the ten second pause in the script, breach the perimeter by unplugging the circuit wires. The wait function should immediately detect the event.

In the API, perimeter circuit 2 (as shown in the above images) is defined as channel 1 and perimeter circuit 1 is defined as channel 0. As shipped, Channel 0 and Channel 1 have been set to action_notify=True.

Example for monitoring Perimeter Events:
<details>

<summary>For Python</summary>

```
#!/usr/bin/python3

import zymkey
from datetime import datetime
import time

# Get any existing events, including while powered down with battery in place
print("Checking for existing events.")
plst = zymkey.client.get_perimeter_detect_info()
print("Perimeter 1 Timestamp: " + str(datetime.fromtimestamp(plst[0])) + "  [" + str(plst[0]) + "]")
print("Perimeter 2 Timestamp: " + str(datetime.fromtimestamp(plst[1])) + "  [" + str(plst[1]) + "]")

# Clear the events
print("Clearing perimeter detect info...")
zymkey.client.clear_perimeter_detect_info()
time.sleep(2)

# Loop waiting for events while up and running
#while True:
while input('Enter or (q)uit: ') != 'q':
    try:
        print("Waiting 10 secs for an event")
        zymkey.client.wait_for_perimeter_event(timeout_ms=10000)
        plst = zymkey.client.get_perimeter_detect_info()
        print("Perimeter event detected!")
        print("Perimeter 1 Timestamp: " + str(datetime.fromtimestamp(plst[0])) + "  [" + str(plst[0]) + "]")
        print("Perimeter 2 Timestamp: " + str(datetime.fromtimestamp(plst[1])) + "  [" + str(plst[1]) + "]")
        print("Clearing perimeter detect info...")
        zymkey.client.clear_perimeter_detect_info()
        time.sleep(2)
    except zymkey.exceptions.ZymkeyTimeoutError:
        print("No perimeter event detected. (Timed out)")

```
</details>

----------

### Perimeter Detect Circuit Examples

For best practices and examples of how to physically configure perimeter circuits:
[Learn more>](../examples)

### Additional Self Destruct Policies

SCM has additional self destruct policies independent of Perimeter Detect: Supervised Boot, Low/High Temperature and Low Voltage level monitoring. For more information, visit [Python documentation](https://docs.zymbit.com/api/python_api/#setbatteryvoltageaction-45bcda8a) or [C documentation](https://docs.zymbit.com/api/c_api/#int--zkSetBatteryVoltageAction-f90f5fd1).

## Troubleshooting
[Troubleshooting](../../../troubleshooting/)
[Community](https://community.zymbit.com/)
