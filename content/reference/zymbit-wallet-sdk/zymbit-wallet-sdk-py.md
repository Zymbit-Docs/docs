---
title: Zymbit Wallet Python SDK Documentation
linkTitle: Zymbit Wallet Python SDK
description: Zymbit Wallet Python SDK
lastmod: "2025-10-15"
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
<p>This documentation contains a set of Python classes which intend to abstract away the technical complexities of using Zymbit's hardware wallet with various blockchains. </p>

<p>The first iteration of the SDK encapsulates all wallet creation, management, and use (sending transactions and interacting with dApps) capabilities for Ethereum and EVM compatible chains.</p>

To see examples of the Python SDK in use, check out [this tutorial](https://docs.zymbit.com/tutorials/digital-wallet/zymbit-wallet-python-sdk/)

## <span class="markdown-h2 include-toc">Installation</span>
```bash
pip install zymbitwalletsdk
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
2. EllipticCurve
    - An enum which represents the elliptic curves supported on Zymbit's hardware wallet.
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

## <span class="markdown-h2 include-toc">Zymbit Wallet SDK Classes</span>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">EthAccount</span></span>

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
<span class="return_value">containing the path (str), address (hex encoded str), and slot (int) properties</span>
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

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">EllipticCurve</span></span>

<div class="body">
<p>The EllipticCurve class definition</p>
<p>This class represents an enumeration of elliptic curves available on Zymbit's hardware wallet and extends the Python Enum class.</p>

<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">secp256k1</span> <span class="param-list"></span></span> {id="secp256k1" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>An enumeration value representing the secp256k1 elliptic curve, used in Ethereum and Bitcoin.</p>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">secp256r1</span> <span class="param-list"></span></span> {id="secp256r1" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>An enumeration value representing the secp256r1 elliptic curve, also known as nist256 or prime256v1.</p>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">ed25519</span> <span class="param-list"></span></span> {id="ed25519" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>An enumeration value representing the Ed25519 elliptic curve, used in Cardano, Solana, Polkadot, and Monero to name a few</p>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">get_curve_type</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="get_curve_type" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Returns the string representation of the elliptic curve type.</p>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The string representation of the elliptic curve type. Can return "secp256k1", "secp256r1", or "ed25519", depending on the enum's value.</span>
</li>
</ul>
</div>
</div>
</div>

</div>
</div>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">ZymbitEthKeyring</span></span>

<div class="body">
<p>The ZymbitEthKeyring class definition</p>
<p>This class provides access to ZymbitEthKeyring within Python.</p>
<p>ZymbitEthKeyring extends the Keyring abstract class.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">TYPE</span></span></span> {id="type" class="markdown-h4 signature include-toc"}
<p> A class level variable set to "ETH" </p>
</div>

<div class="method">

#### <span><span class="name">BASE_PATH</span></span></span> {id="base_path" class="markdown-h4 signature include-toc"}
<p> A class level variable set to "m/44'/60'/0'/0" </p>
</div>

<div class="method">

#### <span><span class="name">CURVE</span></span></span> {id="curve" class="markdown-h4 signature include-toc"}
<p> A class level variable set to <code>EllipticCurve.secp256k1 </code></p>
</div>

<div class="method">

#### <span class="name">\_\_init\_\_</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_slot</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span> {id="init" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Initialize an instance of a ZymbitEthKeyring context. Internally calls <code>deserialize(wallet_name, master_slot)</code> and makes some basic checks.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The name of the wallet associated with the keyring.</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot number of the keyring, optional.</span>
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

#### <span class="name">serialize</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span> {id="serialize" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Serialize the ZymbitEthKeyring instance.</p>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">dict</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A dictionary containing the serialized keyring's data including wallet_name (str), master_slot (int), type ("ETH"), curve (EllipticCurve.secp256k1), base_path ("m/44'/60'/0'/0"), base_slot (int), and accounts (list of serialized EthAccount instances).</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span class="name">deserialize</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_slot</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span> {id="deserialize" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Deserializes a keyring using either a wallet name or a master slot to restore an instance of a ZymbitEthKeyring context.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The wallet name associated with the keyring.</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot number of the keyring.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If neither wallet_name nor master_slot are provided</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If both wallet_name and master_slot are provided</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the provided wallet_name or master_slot is invalid</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bool</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">True if the keyring is successfully deserialized, otherwise an exception is raised.</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">add_account</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-item-wrapper"><span class="param"><span class="name">index</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_account" class="markdown-h4 signature include-toc"}

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

#### <span class="name">add_accounts</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">n</span> = <span class="default-val">1</span></span></span><span class="param-paren paren-close">)</span></span> {id="add_accounts" class="markdown-h4 signature include-toc"}

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

#### <span class="name">add_accounts_list</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">index_list</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span> {id="add_accounts_list" class="markdown-h4 signature include-toc"}


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

#### <span><span class="name">generate_eth_address</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="generate_eth_address" class="markdown-h4 signature include-toc"}


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

#### <span class="name">account_exists</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">index</span></span></span><span class="param-paren paren-close">)</span></span> {id="account_exists" class="markdown-h4 signature include-toc"}

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

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">ZymbitKeyringManager</span></span>

<div class="body">
<p>The ZymbitKeyringManager class definition</p>
<p>This class provides access to ZymbitKeyringManager within Python.</p>
<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">\_\_init\_\_</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyrings</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="init" class="markdown-h4 signature include-toc"}
<div class="body">
<div class="description">
<p>Initializes an instance of a KeyringManager with an optional list of Keyring objects.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyrings</span>
<span class="type-paren paren-open">(</span><span class="type">list[Keyring]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">A list of Keyring objects to be managed by the KeyringManager</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If any item in the keyrings list is not an instance of a subclass of the Keyring abstract class.</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

<div class="method">

#### <span class="name">create_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyring_class</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">wallet_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">master_gen_key</span> = <span class="default-val">bytearray()</span></span></span><span class="param-paren paren-close">)</span></span> {id="create_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Creates a new keyring of the specified type, associates it with a wallet name, and optionally initializes it with a master generation key.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyring_class</span>
<span class="type-paren paren-open">(</span><span class="type">Type[Keyring]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The Keyring subclass representing the type of keyring to create</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The name of the wallet associated with the keyring</span>
</li>
<li class="param-item">
<span class="name">master_gen_key</span>
<span class="type-paren paren-open">(</span><span class="type">bytearray</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master generation key used for initializing the keyring, optional (default is an empty bytearray)</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If keyring_class is not a subclass of Keyring</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If wallet_name is empty or not a string</span>
</li>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If master_gen_key is not a bytearray</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the keyring creation fails</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">tuple[int, str]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A tuple containing the wallet's master key slot and the new wallet's mnemonic phrase (store safely for wallet recovery)</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">add_keyring</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">keyring</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="add_keyring" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Adds a keyring instance to the list of keyrings</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">keyring</span>
<span class="type-paren paren-open">(</span><span class="type">Keyring</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The keyring instance to be added</span>
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
<p>Retrieves a keyring instance from the list of keyrings by either the wallet name or the master slot.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The wallet name associated with the keyring</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot associated with the keyring</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">Keyring</span><span class="param-desc-divider"> &#8212; </span>
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
<p>Retrieves the list of keyring instances stored in the KeyringManager.</p>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">list[Keyring]</span><span class="param-desc-divider"> &#8212; </span>
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
<p>Removes a keyring instance from the list of keyrings in the KeyringManager and deletes all related keys from the module by either the wallet name or the master slot. If the 'remove_master' flag is set to True, the method will also remove the master key associated with the keyring.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">wallet_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The wallet name associated with the keyring</span>
</li>
<li class="param-item">
<span class="name">master_slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The master slot associated with the keyring</span>
</li>
<li class="param-item">
<span class="name">remove_master</span>
<span class="type-paren paren-open">(</span><span class="type">bool</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Flag indicating whether to remove the master key associated with the keyring</span>
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

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">EthTransaction</span></span>

<div class="body">
<p>The EthTransaction class definition</p>
<p>This class represents an Ethereum transaction according to the EIP-1559 standard and extends the rlp.Serializable class.</p>

<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">transaction_type</span> <span class="param-list"></span></span> {id="transaction-type" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>An integer value of 2, representing the EIP-1559 transaction type.</p>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">fields</span> <span class="param-list"></span></span> {id="fields" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>A list of fields that are relevant to a raw EIP-1559 transaction. The fields are:</p>
<ul>
<li>chain_id: The chain ID of the Ethereum network the transaction is meant for.</li>
<li>nonce: The nonce value for the sender's account, representing the number of transactions sent from the account.</li>
<li>max_priority_fee_per_gas: The maximum fee per gas the sender is willing to pay for the transaction's priority.</li>
<li>max_fee_per_gas: The maximum total fee per gas the sender is willing to pay, including both priority and base fees.</li>
<li>gas: The amount of gas the sender is willing to allocate to the transaction.</li>
<li>to: The recipient's address, or an empty address for contract creation transactions.</li>
<li>value: The amount of Wei the sender is transferring to the recipient.</li>
<li>data: The transaction data payload, typically used for contract interaction.</li>
<li>access_list: A list of addresses and storage keys the transaction will access, used for EIP-2930 access list transactions.</li>
</ul>
</div>
</div>
</div>

</div>
</div>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">SignedEthTransaction</span></span>

<div class="body">
<p>The SignedEthTransaction class definition</p>
<p>This class represents a signed Ethereum transaction according to the EIP-1559 standard and extends the rlp.Serializable class.</p>

<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">transaction_type</span> <span class="param-list"></span></span> {id="transaction-type" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>An integer value of 2, representing the EIP-1559 transaction type.</p>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">fields</span> <span class="param-list"></span></span> {id="fields" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>A list of fields that are relevant to a raw EIP-1559 transaction. The fields are:</p>
<ul>
<li>chain_id: The chain ID of the Ethereum network the transaction is meant for.</li>
<li>nonce: The nonce value for the sender's account, representing the number of transactions sent from the account.</li>
<li>max_priority_fee_per_gas: The maximum fee per gas the sender is willing to pay for the transaction's priority.</li>
<li>max_fee_per_gas: The maximum total fee per gas the sender is willing to pay, including both priority and base fees.</li>
<li>gas: The amount of gas the sender is willing to allocate to the transaction.</li>
<li>to: The recipient's address, or an empty address for contract creation transactions.</li>
<li>value: The amount of Wei the sender is transferring to the recipient.</li>
<li>data: The transaction data payload, typically used for contract interaction.</li>
<li>access_list: A list of addresses and storage keys the transaction will access, used for EIP-2930 access list transactions.</li>
<li>y_parity: The y-coordinate parity of the public key, used for signature validation.</li>
<li>r: The r value of the ECDSA signature.</li>
<li>s: The s value of the ECDSA signature.</li>
</ul>
</div>
</div>
</div>

</div>
</div>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="addname">zymbitwalletsdk.</span><span class="name">EthConnect</span></span>

<div class="body">
<p>The EthConnect class definition</p>
<p>This class contains an assortment of static methods which allow you to use the accounts in your ZymbitEthKeyring instances to sign Ethereum transactions and messages</p>

<div class="attribute">

<div class="body">
</div>
</div>

<div class="method">

#### <span><span class="name">create_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">chain_id</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">nonce</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_priority_fee_per_gas</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_fee_per_gas</span> = <span class="default-val">10</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">gas</span> = <span class="default-val">21000</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">to</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">value</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">data</span> = <span class="default-val">"0x"</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">access_list</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="create_transaction" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Create and return an EthTransaction object with the specified parameters.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">chain_id</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The chain ID of the Ethereum network. Defaults to 1, the chainId of the main Ethereum network</span>
</li>
<li class="param-item">
<span class="name">nonce</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction nonce</span>
</li>
<li class="param-item">
<span class="name">max_priority_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum priority fee per gas unit</span>
</li>
<li class="param-item">
<span class="name">max_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum fee per gas unit</span>
</li>
<li class="param-item">
<span class="name">gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The amount of gas units for the transaction</span>
</li>
<li class="param-item">
<span class="name">to</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The recipient Ethereum address</span>
</li>
<li class="param-item">
<span class="name">value</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The amount of Wei to be sent with the transaction</span>
</li>
<li class="param-item">
<span class="name">data</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction data in hexadecimal format</span>
</li>
<li class="param-item">
<span class="name">access_list</span>
<span class="type-paren paren-open">(</span><span class="type">list</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The access list for the transaction</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If one or more parameter types are invalid</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the 'to' field is not a valid checksum address</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">EthTransaction</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">An EthTransaction object with the specified parameters</span>
</li>
</ul>
</div>
</div>
</div>


<div class="method">

#### <span><span class="name">create_deploy_contract_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">chain_id</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">nonce</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_priority_fee_per_gas</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_fee_per_gas</span> = <span class="default-val">10</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">gas</span> = <span class="default-val">21000</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">value</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">access_list</span> = <span class="default-val">[]</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">contract_bytecode_path</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">contract_abi_path</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">constructor_args</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="create_deploy_contract_transaction" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Create an EthTransaction object for deploying a smart contract with the provided parameters, bytecode, and ABI.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">chain_id</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The chain ID of the Ethereum network. Defaults to 1, the chainId of the main Ethereum network</span>
</li>
<li class="param-item">
<span class="name">nonce</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction nonce</span>
</li>
<li class="param-item">
<span class="name">max_priority_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum priority fee per gas</span>
</li>
<li class="param-item">
<span class="name">max_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum fee per gas</span>
</li>
<li class="param-item">
<span class="name">gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The gas limit for the transaction</span>
</li>
<li class="param-item">
<span class="name">value</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The amount of Wei to be sent with the transaction</span>
</li>
<li class="param-item">
<span class="name">access_list</span>
<span class="type-paren paren-open">(</span><span class="type">list</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">An access list for the transaction</span>
</li>
<li class="param-item">
<span class="name">contract_bytecode_path</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path to the file containing the contract bytecode. Should be a text file with the bytecode hex encoded.</span>
</li>
<li class="param-item">
<span class="name">contract_abi_path</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path to the file containing the contract ABI (Application Binary Interface). Should be a JSON file.</span>
</li>
<li class="param-item">
<span class="name">constructor_args</span>
<span class="type-paren paren-open">(</span><span class="type">list</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">A list of arguments to pass to the contract constructor. Ordered from first parameter to last.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If one or more parameter types are invalid</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the bytecode or ABI file paths do not exist</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">EthTransaction</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">An EthTransaction object for deploying the smart contract with the provided parameters, bytecode, and ABI</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">create_execute_contract_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">chain_id</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">nonce</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_priority_fee_per_gas</span> = <span class="default-val">1</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">max_fee_per_gas</span> = <span class="default-val">10</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">gas</span> = <span class="default-val">210000</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">contract_address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">value</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">access_list</span> = <span class="default-val">[]</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">contract_abi_path</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">function_name</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">args</span> = <span class="default-val">[]</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="create_execute_contract_transaction" class="markdown-h4 signature include-toc"}



<div class="body">
<div class="description">
<p>Create a transaction to execute a function of a smart contract on an Ethereum network.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">chain_id</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The chain ID of the Ethereum network. Defaults to 1, the chainId of the main Ethereum network</span>
</li>
<li class="param-item">
<span class="name">nonce</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction nonce</span>
</li>
<li class="param-item">
<span class="name">max_priority_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum priority fee per gas</span>
</li>
<li class="param-item">
<span class="name">max_fee_per_gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The maximum fee per gas</span>
</li>
<li class="param-item">
<span class="name">gas</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The gas limit for the transaction</span>
</li>
<li class="param-item">
<span class="name">contract_address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the smart contract</span>
</li>
<li class="param-item">
<span class="name">value</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The amount of Wei to be sent with the transaction</span>
</li>
<li class="param-item">
<span class="name">access_list</span>
<span class="type-paren paren-open">(</span><span class="type">list</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">An access list for the transaction</span>
</li>
<li class="param-item">
<span class="name">contract_abi_path</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path to the file containing the contract ABI (Application Binary Interface). Should be a JSON file.</span>
</li>
<li class="param-item">
<span class="name">function_name</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The name of the smart contract function to be executed</span>
</li>
<li class="param-item">
<span class="name">args</span>
<span class="type-paren paren-open">(</span><span class="type">list</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The arguments for the function to be executed. From first parameter to last.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If one or more parameter types are invalid, or if the provided contract address is not a valid checksum address, or if the ABI file path does not exist</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">EthTransaction</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">An EthTransaction object representing the contract execution transaction</span>
</li>
</ul>
</div>
</div>
</div>


<div class="method">

#### <span class="name">sign_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">transaction</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">keyring</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span> {id="sign_transaction_eth_connect" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Signs an Ethereum transaction using a Zymbit keyring.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">transaction</span>
<span class="type-paren paren-open">(</span><span class="type">EthTransaction</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction to be signed</span>
</li>
<li class="param-item">
<span class="name">keyring</span>
<span class="type-paren paren-open">(</span><span class="type">ZymbitEthKeyring</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The Zymbit keyring to use for signing</span>
</li>
<li class="param-item">
<span class="name">address</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The address of the account in the keyring used to sign the transaction</span>
</li>
<li class="param-item">
<span class="name">slot</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The slot of the account in the keyring used to sign the transaction</span>
</li>
<li class="param-item">
<span class="name">path</span>
<span class="type-paren paren-open">(</span><span class="type">int</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The path of the account in the keyring used to sign the transaction</span>
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
<span class="description">If the keyring is not of type ZymbitEthKeyring</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If none of address, slot, or path are provided</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">SignedEthTransaction</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A SignedEthTransaction object ready to be serialized and broadcasted to an Ethereum network</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">rlp_serialize_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">transaction</span></span></span><span class="param-divider">)</span></span> {id="rlp_serialize_transaction" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Serialize an EthTransaction or SignedEthTransaction object using RLP encoding.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">transaction</span>
<span class="type-paren paren-open">(</span><span class="type">Union[EthTransaction, SignedEthTransaction]</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The transaction to be serialized</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the transaction is neither of type EthTransaction nor SignedEthTransaction</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">bytes</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The serialized transaction in bytes format</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">rlp_deserialize_transaction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">encoded_transaction</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="rlp_deserialize_transaction" class="markdown-h4 signature include-toc"}



<div class="body">
<div class="description">
<p>Deserialize an RLP-encoded transaction to either an EthTransaction or a SignedEthTransaction object.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">encoded_transaction</span>
<span class="type-paren paren-open">(</span><span class="type">bytes</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The encoded transaction as bytes</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the encoded transaction is not a bytes object</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the encoded transaction is not an EIP-1559 transaction (type 2)</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If the encoded transaction cannot be deserialized to an EthTransaction or a SignedEthTransaction object</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">Union[EthTransaction, SignedEthTransaction]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">An EthTransaction or a SignedEthTransaction object representing the deserialized transaction</span>
</li>
</ul>
</div>
</div>
</div>


<div class="method">

#### <span><span class="name">create_message</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">message</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="create_message" class="markdown-h4 signature include-toc"}



<div class="body">
<div class="description">
<p>Create an Ethereum message to be signed. Prepends the message that is passed in with <code>"Ethereum Signed Message:\n"</code></p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">message</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The message to be signed as a string</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">TypeError</span>
<span class="description">If the message is not a string</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">tuple[str, bytes]</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A tuple containing the Ethereum message (str) and its corresponding bytes representation (bytes)</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">sign_message</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">message</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">keyring</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">address</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">slot</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">path</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="sign_message" class="markdown-h4 signature include-toc"}



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
<span class="name">keyring</span>
<span class="type-paren paren-open">(</span><span class="type">ZymbitEthKeyring</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The keyring object used to sign the message</span>
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
<span class="description">If the keyring is not an instance of ZymbitEthKeyring</span>
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
<span class="return_type">str</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The concatenated hex encoded ECDSA signature</span>
</li>
</ul>
</div>
</div>
</div>


<div class="method">

#### <span><span class="name">keccak256</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">str_data</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">bytes_data</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="keccak256" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate a Keccak256 hash digest from the given string or bytes data.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">str_data</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">String data to generate the Keccak256 hash digest from.</span>
</li>
<li class="param-item">
<span class="name">bytes_data</span>
<span class="type-paren paren-open">(</span><span class="type">bytes</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Bytes data to generate the Keccak256 hash digest from.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If both str_data and bytes_data are provided.</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If neither str_data nor bytes_data are provided.</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">keccak.Keccak_Hash</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A Keccak256 hash digest as a Crypto.Hash.keccak.Keccak_Hash object.</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">sha256</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">str_data</span> = <span class="default-val">None</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="name">bytes_data</span> = <span class="default-val">None</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="sha256" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate a SHA256 hash digest from the given string or bytes data.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">str_data</span>
<span class="type-paren paren-open">(</span><span class="type">str</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">String data to generate the SHA256 hash digest from.</span>
</li>
<li class="param-item">
<span class="name">bytes_data</span>
<span class="type-paren paren-open">(</span><span class="type">bytes</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">Bytes data to generate the SHA256 hash digest from.</span>
</li>
</ul>
</div>
<div class="exceptions">
<h5>Exceptions</h5>
<ul>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If both str_data and bytes_data are provided.</span>
</li>
<li class="exc-item">
<span class="name">ValueError</span>
<span class="description">If neither str_data nor bytes_data are provided.</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">SHA256.SHA256Hash</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">A SHA256 hash digest as a Crypto.Hash.SHA256.SHA256Hash object.</span>
</li>
</ul>
</div>
</div>
</div>

<div class="method">

#### <span><span class="name">eth_to_wei</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="name">ether_amount</span></span><span class="param-divider">= </span><span class="param-item"><span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="eth_to_wei" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description">
<p>Converts a given amount in Ether to its equivalent value in Wei.</p>
</div>
<div class="parameters">
<h5>Parameters</h5>
<ul>
<li class="param-item">
<span class="name">ether_amount</span>
<span class="type-paren paren-open">(</span><span class="type">float</span><span class="type-paren paren-close">)</span><span class="param-desc-divider"> &#8212; </span><span class="description">The amount of Ether to convert to Wei</span>
</li>
</ul>
</div>
<div class="returns">
<h5>Returns</h5>
<ul>
<li class="return-item">
<span class="return_type">int</span><span class="param-desc-divider"> &#8212; </span>
<span class="return_value">The equivalent value in Wei as an integer.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>

## <span class="markdown-h2 include-toc">Additional Resources</span>

If you are a developer interested in creating your own custom implementations of Accounts and/or Keyrings to work with `ZymbitKeyringManager`, we encourage you to explore [our Github repository](https://github.com/Zymbit-Wallet/Zymbit-Wallet-Python-SDK). By extending the Account and Keyring [Abstract Base Classes (ABCs)](https://docs.python.org/3/library/abc.html), you can implement the required methods and any additional functionality as needed. The elliptic curves we support (secp256k1, secp256r1, and ed25519) are used by many major blockchains, including Bitcoin, Ethereum, Cardano, Solana, and Polkadot. Developing your own keyrings can be incredibly beneficial for a wide range of applications, such as key management or on-chain interactions like sending transactions or interacting with smart contracts.

</div>
