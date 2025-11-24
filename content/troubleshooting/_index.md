---
title: "FAQ and Troubleshooting"
draft: false
images: []
weight: 40
# headless: true
---
### **Troubleshooting Checklist**

Before contacting Zymbit with troubleshooting related questions, please read through the following troubleshooting checklist.

1. Power supply. Most of the problems we see are from a poor power source. Start with a good power supply from the PI foundation or Canakit, not a phone charger. The recommended power for the PI4 is 5V and 3 amps.  For a PI5, the recommended power supply should provide 5V, 5 amps.
2. (For Zymkey, HSM4, HSM6) I2C enabled. Double check that you have enabled the I2C bus. An easy way to check is "ls -l /dev/i2c-1". If /dev/i2c-1 exists, the I2C bus is enabled.
3. apt update and upgrade. Be sure that your software is up to date.
4. Installation. The curl script will reboot your system once completed. After the reboot, the blue LED on your Zymbit device should blink once every 3 seconds. You must get to this step before proceeding to encryption, etc.

If your issue is not related to any of the above list, read through the FAQ below to see if your issue is answered. If you still do not see a solution to your problem, reach out on our [Community Forum](https://community.zymbit.com/). Thank you!

-----
