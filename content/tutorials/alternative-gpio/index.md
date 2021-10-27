---
title: "Using an Alternative GPIO Pin"
linkTitle: "Alternative GPIO Pin"
icon: ""
description: ""
date: ""
lastmod: ""
draft: false
images: []
toc: true
---

## Remapping GPIO4 Pin

Zymkey4 uses GPIO4 for a 'handshake signal' to coordinate communications with the host Pi.
There is a logical (software), electrical and mechanical connection with GPIO4. If you need to use an alternative GPIO pin, here are the steps you need to take reconfigure your system:


### Software Configuration

To remap the GPIO_4 pin used by Zymbit from GPIO4 to GPIO_X:
1.	Locate the directory  '/var/lib/zymbit'
2.	Locate the configuration file name 'zkenv.conf' - if non exists then create text file 'zkenv.conf'
3.	Into the file 'zkenv.conf'  insert the line `ZK_GPIO_WAKE_PIN=X`,  where X is your GPIO pin of choice.
4.	'In the RaspberryPi file named  'config.txt' you will also need to explicity set GPIO_X  to an input .  (Note that this is the RaspberryPi config file, which is different to the Zymbit conf file)
5.	Finish

### Electrical Configuration
* Electrically reconnect Zymkey4 pins per the diagram below.

![Zymkey4 Alternative GPIO Pin](alt-gpio.png)


### Mechanical Configuration

* Move your Zymkey4 so it does not mechanically or electrically interfere with other devices connected to pins 1 thru 10.
