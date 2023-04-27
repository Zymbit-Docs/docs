---
title: "ETH-Connect Python API"
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

### Abstract Classes

1. Account
 - An abstract class which outlines the basic functionality required to be considered an account
2. Keyring
 - An abstract class which outlines the basic functionality required to be considered a keyring
 - If you want your keyring to work with KeyringManager, your keyring implementation must be a subclass of keyring

### Classes
 
1. EthAccount
    - A subclass of Account which represents an Ethereum account in the context of Zymbit's hardware wallet
2. ZymbitEthKeyring
    - A subclass of Keyring which represents a keyring of Ethereum accounts
    - Can be used to create, manage, use (sign transactions and messages), and delete Ethereum accounts 
3. KeyringManager
    - A class used to create, manage, and delete multiple Keyrings (must be a subclass of Keyring)
4. EthTransaction
    - A class representing an unsigned EIP-1559 Ethereum transaction
5. SignedEthTransaction
    - A class representing a signed EIP-1559 Ethereum transaction
4. EthConnect
    - A class with an assortment of methods for interacting with Ethereum using ZymbitEthKeyring instances



