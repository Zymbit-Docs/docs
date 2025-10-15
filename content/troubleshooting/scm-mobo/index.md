---
title: "SCM Motherboard D35 FAQ and Troubleshooting"
linkTitle: "SCM Motherboard D35"
lastmod: "2025-10-15"
draft: false
images: []
weight: 18
toc: true
---

-----
### GPIO Pinout Reference

{{< cardpane >}}
{{< card header="SCM Motherboard D35 GPIO Pinout" >}}
{{< figure
    src="SCM-motherboard-revA1-gpio-pinout-SPI-example.jpg"
    alt=""
    caption="Note the standard GPIO pinout is accessed on the bottom side of the D35 board."
    >}}
{{< /card >}}
{{< /cardpane >}}


#### Known Issues - Rev A1
* Zymbit IO board: Subject to rebooting during high USB in rush current. See [Engineering Note 20230721](/reference/engineering-notes/Zymbit-Engineering-Note-20230721-SCM-Motherboard-USB.pdf).
* Zymbit IO board: The ID EEPROM I2C pins are not connected. To use this feature with the Zymbit IO board, you will need two green wires to pins 27 and 28. [Contact Support](mailto:support@zymbit.com) for more information.



