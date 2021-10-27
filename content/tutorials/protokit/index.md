---
title: "ProtoKit5"
icon: ""
description: ""
date: ""
lastmod: ""
draft: false
images: []
toc: true
---

## SECURE PROTOKIT FOR Pi COMPUTERS
**Waterproof, Dustproof, Radio Transparent, Tamper Evident.**

![image1](image1.png)


### Upgraded Features
ProtoKit5 replaces the ProtoKit4. We had a lot of great feedback from customers of our earlier ProtoKit 4. Here are some of the improvements we made:

* Larger IP67 enclosure:   W x H x D  |  130 x 175 x 45 mm  |  5.12 x 3.24  x 1.77 inches
* Two cable glands
* All components soldered to board, ready to go.
* Fully integrated tamper detect perimeter circuits - switch, pads, user defined.
* Easier to wire, more robust connectors - screwless, spring cage & tension clamp.
* Dedicated +5V connector
* Schematics
* How to wire



### What's Inside Your Kit
![image2](image2.png)

This kit comes assembled and ready to start building your prototype in to. The following components are included:

❶ IP67 enclosure, dustproof, waterproof enclosure with lid

❷ Integrated protoboard.

❸ Adapter for perimeter circuits

❹ GPIO connector extension

❺ Standoffs for Pi, M2.5 - x 3

❻ Screws for Pi, M2,5 Torx T8 - x 3

❼ Screws for protoboard fix - x5

❽ Cable glands, 3/4 - x2

❾ IP67 lid with neoprene gasket

❿ Screws for lid - x6

⓫ Tamper switch actuators - x2



### [BUY NOW >](https://store.zymbit.com/products/protokit-5)

----------

## A TOUR OF THE PROTOBOARD
The protoboard fits cleaning into the enclosure and can easily be removed for wiring and assembly with your components.


**Slot for Pi Computer**

Protokit will fit the following Pi footprint computers:
* Raspberry Pi 2, 3, 3B+, Zero
* Asus Tinkerboard
* Odroid C2 (Heatsink may interfer if zymbit security module fitted)

***IMPORTANT !** - The Pi computer is fitted connector down, with the CPU facing the protoboard.*

![image3](image3.png)

----------

**Standoffs to Mount Pi Computer**
Three M2.5, 5mm pcb standoffs are soldered to the board. Additional screw-in standoffs are supplied to achieve an overal standoff - between Pi and protoboard - of 18mm.
![image4](image4.png)

----------

**Slot for Zymbit Security Module - Zymkey 4i**
![image5](image5.png)

----------

**Perimeter Adapter Interface**
![image6](image6.png)

----------

**Perimeter Configuration Jumper**
![image7](image7.png)

----------

**Tamper Switches - Circuit 1**
![image8](image8.png)

----------

**Perimeter Pads - Circuit 2**
![image9](image9.png)

----------

**Input / Output Connectors**
![image10](image10.png)

----------

**+5V Power Input Connector**
![image11](image11.png)

----------

**Power Bus - 3v3**
![image12](image12.png)

----------

**Bus Bars - 2 X 15**
![image13](image13.png)

----------

**Grid Arrays - 5 X 15**
The grids are not powered and are designed to make it convient to solder wires and components into your design.
The reference markers make it easy to document your design and later transfer to work instructions or a PCB design net list. Each pad can be uniquely referenced as G15.D.9 for example.
![image14](image14.png)

----------

**Schematic of Protoboard**
[Download Schematic >](https://zymbit.com/documents/protokit-5s-schematic)

![image15](image15.png)


----------

## ASSEMBLING YOUR PROTOKIT 5S

### Fitting a Zymbit Security Module & Perimeter Adapter

If you are fitting a Zymbit security module, here's where it goes. Fit the perimeter adapter at the same time.

![image16](image16.png)
![image17](image17.png)

**Sequence for Fitting Zymkey4 and Perimeter Adapter**

![graphic18](graphic18.gif)

----------
### Configuring Perimeter Detect Circuits
Zymbit security modules contain two perimeter circuits that can be used to detect tampering of a secure envelope. Each tamper circuit is closed in normal operation. When a circuit is opened, a Tamper Event is registered by the Zymbit Security Module.

 [Learn how to configure and operate perimeter events in software >](https://docs.zymbit.com/tutorials/perimeter-detect/zymkey4/)

Typically the two circuits are configured to provide independent layers of physical security:

* PERIM 1 -  protects an inner electronic enclosure, like this ProtoKit5 enclosure.
* PERIM 2 -  protects an outer cabinet enclosure, trip wire or other.

![image19](image19.png)


On ProtoKit 5 there are several ways to configure PERIM 1 and PERIM 2.  By default both circuits are closed with two jumpers.  1A<>1B   , 2A<>2B.

<p><img src="image20.png" alt="image20" width="25%"></p>

### Using Tamper Switches
The protoboard includes two tamper switches, PERIM_SWA and PERIM_SWB,  that are connected in series to the PERIM 1 tamper circuit. To configure and activate these switches follow these steps:
* Remove the Jumper 1A<>1B
* Pressing down both switches SWA, SWB will close the PERIM 1 circuit.
* The lid of you ProtoKit 5 includes two "actuators" that align with the switches and activate (close) them when the lid is fitted and screwed securely in place. If needed you can adjust the length by screwing the actuator in or our of the panel.

![image8](image8.png)

**Tamper Switch Actuators Fitted to Lid**
![image21](image21.png)

**Tamper Switch Actuators Pressing Switches**
![image22](image22.png)

### Using Perimeter Pads
The protoboard includes four tamper pads that are connected to the PERIM 2 tamper circuit as follows:

> **Connected on protoboard PCB (orange color)**
> PERIM_PAD_2A <> PERIM_2A_ZYMKEY4
> PERIM_PAD_2B <> PERIM_2B_ZYMKEY4
> PERIM_PAD_2C <> PERIM_PAD_2D

> **Connected by user circuit (green color)**
> PERIM_PAD_2A <> PERIM_PAD_2C
> PERIM_PAD_2B <> PERIM_PAD_2D

![image23](image23.png)



**Examples for Using Perimeter Pads**
The Perimeter Pads are designed to be used in applications where the lid contains a user defined circuit such as a display or keypad, or this custom shield (which was designed for ProtoKit4). Springed Pogo pins can be used to connect the lid to the perimeter pads. This provides an additional layer of  physical security to the tamper-switches.


![image24](image24.png)
![image25](image25.png)

----------


### Add Your Pi Computer
**Fit the GPIO extender header**.
![image26](image26.png)

**Fit your Pi computer being careful to correctly align pins. Secure in place with three M2.5 screws using a T8 TORX driver.**
![image27](image27.png)


----------
### Place into Enclosure
![image28](image28.png)


----------

### Fitting Cable Glands

Your kit comes with two nylon cable glands pre-fitted into ½" 14 NPT threaded holes. They accept cables with diameter 0.51" to 0.71".

![image29](image29.png)

**Need something different?**
There a many different types of cable glands: size, cable clamp, strain relief, number of cables, material, etc. If you need something different to what is supplied with you kit, then check out this supplier who has a great selection.  [ElecDirect >](http://www.elecdirect.com/cord-grips-strain-relief)

![image30](image30.png)


----------

### Add Enclosure Lid
Be sure to add the black seal that was provided with your kit.


----------

### IP67 Enclosure Ratings
The enclosure is rated for the following ingress protection.

**IP6x  Solid particle protection**

* Dust Tight - complete protection against contact (dust tight). A vacuum must be applied. Test duration of up to 8 hours based on air flow.


----------
**IPx7  Liquid ingress protection**

* Immersion, up to 1 m depth. Ingress of water in harmful quantity shall not be possible when the enclosure is immersed in water under defined conditions of pressure and time (up to 1 m of submersion).

For further details on IP ratings refer to [wiki/IP_Code.](https://en.wikipedia.org/wiki/IP_Code)



----------



## MOUNTING OPTIONS

**Panel Mounting**
This enclosure can be mounted directly to a wall or flat surface using two self tapping screws.

![image31](image31.png)



**Pole Mounting**
This enclosure can be easily mounted to a pole using a [pole mounting brackets available from the Zymbit store.](https://store.zymbit.com/products/protokit-pole-mount-brackets)

![image32](image32.png)
![image33](image33.png)
![image34](image34.png)

[![image35](image35.png)](https://www.zymbit.com/product/c-00-1001/)



----------
