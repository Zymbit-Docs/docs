---
title: "ETH-Connect Python SDK"
linkTitle: "ETH-Connect-PY Documentation"
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

<div class="api-docs">

## <span class="markdown-h2 include-toc">Introduction</span>
<p>This documentation contains a set of Python classes which intend to abstract away the technical complexities of the Ethereum blockchain, and allow developers to easily integrate Ethereum accounts, transactions, and dApps in their embedded Python applications.</p>

## <span class="markdown-h2 include-toc">Installation</span>
```
pip install ethconnect
```

## <span class="markdown-h2 include-toc">High Level Overview</span>

### <span class="markdown-h3 include-toc">Abstract Classes</span>

1. Account
    - An abstract class which outlines the basic functionality for an account
2. Keyring
    - An abstract class which outlines the basic functionality required to be considered a keyring
    - If you want your keyring to work with KeyringManager, your keyring implementation must be a subclass of keyring

### <span class="markdown-h3 include-toc">Classes</span>
 
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


<div class="api-docs">

## <span class="markdown-h2 include-toc">SDK Classes</span>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">ethconnect.</span><span class="name">EthAccount</span></span>

<div class="body">
<p>The EthAccount class definition</p>
<p>This class provides access to EthAccounts within Python.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">\_\_init\_\_</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">path</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">address</span>, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="ledflash-81aed609" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Initialize an instance of an EthAccount context</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The BIP44 path of the Ethereum Account. Must be a child of m/44'/60'/0'/0</span>
</li>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the Ethereum account. Must be a valid checksum address.</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The key slot that holds the private key for the account.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the path, address, or slot is invalid</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">serialize</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="init-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Serialize the EthAccount object</p>
<div class="returns">
<h5>Returns</h5>
<span class="return_type">dict</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">containing the "path", "address", and "slot" properties</span>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get\_public\_key</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="init-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Retrieve the public key associated with the Ethereum account</p>
<div class="returns">
<h5>Returns</h5>
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">hex encoded public key</span>
</div>
</div>
</div>

</div>
</div>