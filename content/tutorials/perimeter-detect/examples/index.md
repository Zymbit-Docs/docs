---
title : "Perimeter Detect Circuit Examples"
linkTitle: "CIRCUIT EXAMPLES"
description: ""
date: ""
lastmod: ""
draft: false
images: []
layout: "single"
weight: 0
toc: true
---

# OVERVIEW

ZYMKEY and HSM security modules feature two independent perimeter circuits that can be configured to detect physical tamper intrusion events. 

![HSM Perimeter Detect|690x484](../HSM-PD-perimter.png) 

## Electrical Requirements

Each perimeter loop should be connected with a 30 AWG wire or thicker and nominal length of 2 feet. For longer lengths contact Zymbit. The wire should be electrically insulated for all applications. A shielded cable may be necessary for electrically noisy or industrial applications. 

## Physical Circuit Connections

How these circuits are configured physically will vary depending upon the specific application, enclosure and security needs. Standard wires, custom flex PCBs and rigid PCBs may all be used to complete a perimeter loop circuit.

Here we share some practical examples of how to configure perimeter detect circuits for different applications and equipment.  

To learn about software configuration and use of perimeter detect functions [Learn more>](https://docs.zymbit.com/tutorials/perimeter-detect/zymkey4/)

----------

# CONFIGURATION EXAMPLES
----------

## Direct Connect to HSM4 Hat

HSM4 HAT provides four pin header and FPC connectors to interface to perimeter circuits 1 and 2. This is convenient for rapid prototyping and small scale production situations.
For high volume applications, different connector types are available - [contact zymbit](https://www.zymbit.com/contact-us/) for more details.

### Perimeter HDR (Header) Pinout

![HSM4 HAT Perim Pinout HDR|582x500, 75%](../image1.jpeg) 

### Perimeter FPC (Flexible Printed Circuit) Pinout

![HSM4 HAT Perim Pinout FPC|612x500, 75%](../image2.jpeg) 

### HSM Direct Connector - Hirose Header DF40HC(3.5)-30DS-0.4V(51)

![HSM4 Module Pinout|690x435, 75%](../image3.png) 


----------

## Direct Cable Connect to Zymkey 4i

Perimeter circuits on Zymbit 4i are accessed from a standard microUSB connector. 

![ZK4%20perim%20detect%20cable%201|690x365](../image4.png)

Use a standard microUSB extension cable to close circuits P1 and P2 as follows. 

![zymkey-4i-perim-detect-cable-revB|690x302](../image5.png) 

----------

## Adapter Connect to Zymkey 4i

Several adapters are available from Zymbit that simplify connection from the microUSB to header and FPC. These are convenient for development.  [Buy Adapters >](https://store.zymbit.com/)

![Perimeter Adapter Types 2020.06|690x491](../image6.png) 

----------

## Flexible Security Shield Wrapping RPi4

HSM4 Security Module, fitted to PiHat1. Flex circuit connects to FPC connector on HAT

![Security Blanket Wrapping Pi4_|600x427](../graphic7.gif) 

![Security Blanket Fitted to Pi4_1|690x353](../image8.png)

----------

## Rigid Security Shield installed on ProtoKit4

A printed circuit shield is fitted into the lid of the ProtoKit 4 and pogo pins connect the top mesh to the the bottom board. When the lid is closed, the circuit is closed.

![PerimShield Graphic 1|689x436](../image9.jpeg)

![Zymit ProtoKit4-with-shield|690x460](../image10.jpeg) 

![Perim-Shield-Open|690x435](../image11.png) 

![Perim Shield Graphic 3|690x287](../image12.jpeg)


The shield connects the following four perimeter signals available on the protoboard: 

* PERIM_1B
* PERIM_2B
* PERIM_2A
* PERIM_1A

![ProtoKit4 Perim Circuits|690x404](../image13.jpeg) 


----------

## FlexCable Wrap with PiZero Hat

![Zymbit Tamper Circuit Example 20|375x500](../image14.jpeg) 

![Zymbit Tamper Circuit Example 21|375x500](../image15.jpeg) 

![Zymbit Tamper Circuit Example 22|375x500](../image16.jpeg)

----------

## SDCard Blocking Perimeter Adapter with PiZero Hat

![ZK4-to-pizero-adapter-type-1-overview|690x333](../image17.jpeg) 

----------


## Tamper Switches & FlexCable with Secure Compute Device

Zymbit secure compute motherboard for RPi

![Zymbit Tamper-Circuit-Example-10|657x500](../image18.jpeg)

![Zymbit Tamper-Circuit-Example-11|657x500](../image19.jpeg) 

![Zymbit Tamper-Circuit-Example-12|666x500](../image20.jpeg) 

![Zymbit Tamper-Circuit-Example-13|666x500](../image21.jpeg)

Internal Tamper Switches

![IMG_5317|666x500](../image22.jpeg)

----------

## Secure Compute Device in 2U Rack with External Tamper Switches

![SecureComputeTamperDetectin-2U-Rack_|690x481](../image23.png)
