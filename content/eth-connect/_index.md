---
title: "ETH-Connect API"
linkTitle: "ETH-Connect"
icon: ""
description: ""
aliases:
    - /quickstart/eth-connect/
date: ""
lastmod: ""
draft: false
weight: 10
images: []
# headless: true
# layout: "single"
---

## Overview

Ethereum accounts, signatures, and transactions have an additional layer of complexity over traditional cryptographic keys and signatures. Zymbit's ETH-Connect API aims to abstract away this complexity, enabling you to seamlessly integrate with Ethereum and EVM compatible chains without having to deal with their technical intricacies.

**NOTE:** Only available on the [HSM6](https://www.zymbit.com/hsm6/), [SCM](https://www.zymbit.com/scm/), and [SEN](https://www.zymbit.com/secure-compute-node/)


## Architecture

The ETH-Connect API is the general term used for our libraries which support Ethereum account creation, management, and use. Eth-Connect consists of modular components which can work independently or together, depending on your use case, to create a powerful interface between Zymbit's [HD hardware wallet](https://www.zymbit.com/hd-hardware-wallet/) and the Ethereum blockchain.



