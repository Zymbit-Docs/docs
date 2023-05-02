---
title: ETH-Connect Python Documentation
linkTitle: ETH-Connect Python SDK
description: Eth-Connect Python SDK
lastmod:
draft: false
images: []
type: docs
api_docs: true
layout: single
weight: 0
toc: true
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

</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">ETH-Connect Python Classes</span>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">ethconnect.</span><span class="name">EthAccount</span></span>

<div class="body">
<p>The EthAccount class definition</p>
<p>This class provides access to EthAccount within Python.</p>
<p>EthAccount extends the Account abstract class.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">\_\_init\_\_</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">path</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">address</span>, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="init-81aed69" class="markdown-h4 signature include-toc"}

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

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">ethconnect.</span><span class="name">ZymbitEthKeyring</span></span>

<div class="body">
<p>The ZymbitEthKeyring class definition</p>
<p>This class provides access to ZymbitEthKeyring within Python.</p>
<p>ZymbitEthKeyring extends the Keyring abstract class.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">TYPE</span> = "ETH"</span></span> {id="type" class="markdown-h4 signature include-toc"}

</div>

<div class="method">

#### <span><span class="name">BASE_PATH</span> = "m/44'/60'/0'/0"</span></span> {id="base_path" class="markdown-h4 signature include-toc"}

</div>

<div class="method">

#### <span><span class="name">CURVE</span> = EllipticCurve.secp256k1</span></span> {id="curve" class="markdown-h4 signature include-toc"}

</div>

<div class="method">

#### <span><span class="name">\_\_init\_\_</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">options</span> = <span class="default-val">{}</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="init-81aed609" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Initialize an instance of a ZymbitEthKeyring context</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">options</span>
<span class="type-paren paren-open">(</span><span class="type">dict</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Must contain "wallet_name" or "master_slot" property. Can be the <span class="type">dict<span> returned by <span class="name">serialize()</span></span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the "wallet_name" or "master_slot" provided in options is invalid</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">serialize</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="init-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Serialize the ZymbitEthKeyring object</p>
<div class="returns">
<h5>Returns</h5>
<span class="return_type">dict</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">containing the "wallet_name", "master_slot", "type", "base_path", "base_slot", and "accounts" for the ZymbitEthKeyring instance</span>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">deserialize</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">options</span> = <span class="default-val">{}</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="deserialize-81aed609" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Restore an instance of a ZymbitEthKeyring context</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">options</span>
<span class="type-paren paren-open">(</span><span class="type">dict</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Must contain "wallet_name" or "master_slot" property. Can be the <span class="type">dict<span> returned by <span class="name">serialize()</span></span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the "wallet_name" or "master_slot" provided in options is invalid</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">add_account</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">index</span> = <span class="default-val">0</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_account" class="markdown-h4 signature include-toc"}
<div class="body">
<div class="description">
<p>Add an Ethereum account to the keyring at the specified index.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">index</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The index at which to add the account</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the index is invalid or the account already exists in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">EthAccount</span> <span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The added Ethereum account</span>
</li>
</ul>
</div>
</div>
</div>
<div class="method">

#### <span><span class="name">add_accounts</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">n</span> = <span class="default-val">1</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_accounts" class="markdown-h4 signature include-toc"}
<div class="body">
<div class="description">
<p>Add multiple Ethereum accounts to the keyring.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">n</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The number of accounts to add</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the number of accounts to add is invalid</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">list[EthAccount]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A list of added Ethereum accounts</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">add_accounts_list</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">index_list</span> = <span class="default-val">[]</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_accounts_list" class="markdown-h4 signature include-toc"}
<div class="body">
<div class="description">
<p>Add Ethereum accounts to the keyring at specified indexes from a list.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">index_list</span>
<span class="type-paren paren-open">(</span><span class="type">list[int]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">A list of indexes at which to add the accounts</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the list of indexes is invalid or an account with the specified index already exists in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">list[EthAccount]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A list of added Ethereum accounts</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get_accounts</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="get_accounts" class="markdown-h4 signature include-toc"}
<div class="body">
<div class="description">
<p>Get a list of Ethereum accounts in the keyring.</p>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">list[EthAccount]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A list of Ethereum accounts in the keyring</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">remove_account</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="remove_account" class="markdown-h4 signature include-toc"}


<div class="body">
<div class="description">
<p>Remove an Ethereum account from the keyring by its address, slot, or path.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the account to remove</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot of the account to remove</span>
</li>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path of the account to remove</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If valid address, slot, or path is not provided</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bool</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">True if the account is removed, False otherwise</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get_public_key</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="get_public_key" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Retrieve the public key of an Ethereum account in the keyring by its address, slot, or path.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the account</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot of the account</span>
</li>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path of the account</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If valid address, slot, or path is not provided</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the account is not found in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The public key of the Ethereum account</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">sign_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">transaction</span></span><span class="param-divider">, </span></span> <span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="sign_transaction" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Sign an Ethereum transaction using an account in the keyring by its address, slot, or path.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">transaction</span>
<span class="type-paren paren-open">(</span><span class="type">EthTransaction</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction to be signed</span>
</li>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the account used to sign the transaction</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot of the account used to sign the transaction</span>
</li>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path of the account used to sign the transaction</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the transaction is not of type EthTransaction</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If valid address, slot, or path is not provided</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the account does not exist in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">SignedEthTransaction</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The signed Ethereum transaction</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">sign_message</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">message</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="sign_message" class="markdown-h4 signature include-toc"}



<div class="body">
<div class="description">
<p>Sign a message using an account in the keyring by its address, slot, or path.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">message</span>
<span class="type-paren paren-open">(</span><span class="type">Union[SHA256.SHA256Hash, keccak.Keccak_Hash]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The message to be signed as a Crypto.Hash object</span>
</li>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the account used to sign the message</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot of the account used to sign the message</span>
</li>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path of the account used to sign the message</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If the message is not an instance of either SHA256.SHA256Hash or keccak.Keccak_Hash Crypto.Hash object</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the message is not a valid 256 bit digest in hex format</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If valid address, slot, or path is not provided</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the account does not exist in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">tuple[int, int, int]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A tuple containing the v, r, and s values of the signed message</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">generate_eth_address</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">slot</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="generate_eth_address" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Generates an Ethereum address using the provided slot.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot to be used for generating the Ethereum address</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The generated Ethereum address</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">account_exists</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">index</span></span></span></span><span class="param-paren paren-close">)</span></span></span> {id="account_exists" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Checks if an account with the given index exists in the keyring.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">index</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The index to be checked for the existence of an account in the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bool</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">True if the account exists in the keyring, False otherwise</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">digest_to_hex</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">digest</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="digest_to_hex" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Converts a given Crypto.Hash digest to its hexadecimal representation.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">digest</span>
<span class="type-paren paren-open">(</span><span class="type">Union[SHA256.SHA256Hash, keccak.Keccak_Hash]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The digest to be converted to its hexadecimal representation</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If the digest is not an instance of either SHA256.SHA256Hash or keccak.Keccak_Hash Crypto.Hash object</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The hexadecimal representation of the given digest</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">ethconnect.</span><span class="name">ZymbitKeyringManager</span></span>

<div class="body">
<p>The ZymbitKeyringManager class definition</p>
<p>This class provides access to ZymbitKeyringManager within Python.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">__init__</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyrings</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="__init__" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method initializes a new instance of the class with an optional list of keyrings. If keyrings are provided, it validates that each keyring is an instance of the Keyring class or a subclass thereof.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyrings</span>
<span class="type-paren paren-open">(</span><span class="type">list[Type[Keyring]]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">An optional list of keyring instances</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">create_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyring_class</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_gen_key</span> = <span class="default-val">bytearray()</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="create_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method creates a new keyring of the specified class and wallet name, and optionally uses the provided master generation key. It returns a tuple containing the master slot and the mnemonic seed phrase.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyring_class</span>
<span class="type-paren paren-open">(</span><span class="type">Type[Keyring]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The class of the keyring to be created</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The name of the wallet associated with the keyring</span>
</li>
<li class="param-item">
<span class="name">master_gen_key</span>
<span class="type-paren paren-open">(</span><span class="type">bytearray</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Optional master generation key. Default is an empty bytearray</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">tuple[int, str]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A tuple containing the master slot (int) and the mnemonic seed phrase (str)</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">add_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyring</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method adds a keyring instance to the list of keyrings. The method validates that the provided keyring is an instance of the Keyring class or a subclass thereof and returns True upon successful addition.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyring</span>
<span class="type-paren paren-open">(</span><span class="type">Type[Keyring]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The keyring instance to be added</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bool</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">True if the keyring was added successfully</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_slot</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="get_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method retrieves a keyring instance from the list of keyrings by either the wallet name or the master slot. If neither wallet name nor master slot is provided, a ValueError is raised. If the requested keyring is not found in the KeyringManager, a ValueError is raised as well.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The wallet name associated with the keyring (optional)</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot associated with the keyring (optional)</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">Type[Keyring]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The keyring instance corresponding to the provided wallet name or master slot</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get_keyrings</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="get_keyrings" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method retrieves the list of keyring instances stored in the KeyringManager.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<p>None</p>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">list[Type[Keyring]]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The list of keyring instances stored in the KeyringManager</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">remove_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">remove_master</span> = <span class="default-val">False</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="remove_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>This method removes a keyring instance from the list of keyrings in the KeyringManager by either the wallet name or the master slot. If neither wallet name nor master slot is provided, a ValueError is raised. If the 'remove_master' flag is set to True, the method will also remove the master key associated with the keyring.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The wallet name associated with the keyring (optional)</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot associated with the keyring (optional)</span>
</li>
<li class="param-item">
<span class="name">remove_master</span>
<span class="type-paren paren-open">(</span><span class="type">bool</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Flag indicating whether to remove the master key associated with the keyring. Default is False</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bool</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">True if the keyring is successfully removed, False otherwise</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">ethconnect.</span><span class="name">EthTransaction</span></span>

<div class="body">
<p>The EthTransaction class definition</p>
<p>This class provides access to EthTransaction within Python.</p>
<div class="attribute">

<div class="body">
</div>
</div>

</div>
</div>
</div>