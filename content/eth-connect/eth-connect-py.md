---
title: "ETH-Connect Python API"
linkTitle: "ETH-Connect-Python"
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

## Abstract Classes

1. Account
 - An abstract class which outlines the basic functionality required to be considered an account
2. Keyring
 - An abstract class which outlines the basic functionality required to be considered a keyring
 - If you want your keyring to work with KeyringManager, your keyring implementation must be a subclass of keyring

## Classes
 
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

