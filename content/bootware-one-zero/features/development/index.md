---
title: Development path from CM4
linkTitle: Development path from CM4"
lastmod:
#aliases:
#    - /zboot-preview/
date: "2024-04-22"
draft: false
images: []
type: docs
layout: single
weight: 10
toc: true

---

-----


### How to Develop on a CM4 and transfer your Image to an SCM

#### Steps
1. Start with Bullseye or Ubuntu 22.04 image
2. Load Zymbit software (do not need a ZYMBIT HSM
3. Load/Install bootware tools
4. Use zb-imager to create a zi image signed with software key
5. Pre-configure SCM with known good A/B partition, jic
6. Transfer zi image (w/ pub key) to USB or HTTPS location
10. Load zi image on SCM with zb-update

### See also:

[zb-imager utility](../../utilities/zbimager)


### Additional Information and Support
    
[Contact Support](mailto:support@zymbit.com)

