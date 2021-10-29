---
title: C API Documentation
linkTitle: C API Documentation
description: C interface to Zymkey Application Utilities Library.
lastmod:
draft: false
images: []
api_docs: true
layout: single
weight: 0
toc: true
---

<div class="api-docs">

## <span class="markdown-h2 include-toc">Introduction</span>

<p>C interface to Zymkey Application Utilities Library.</p>
<p>This file contains the C API to the the Zymkey Application Utilities library. This API facilitates writing user space applications which use Zymkey to perform cryptographic operations, such as:</p>
<ol>
<li>Signing of payloads using ECDSA.</li>
<li>Verification of payloads that were signed using Zymkey.</li>
<li>Exporting the public key that matches Zymkey&#8217;s private key.</li>
<li>&#8220;Locking&#8221; and &#8220;unlocking&#8221; data objects.</li>
<li>Generating random data Additionally, there are functions for changing the i2c address (i2c units only), setting tap sensitivity and controlling the LED.</li>
</ol>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Typedefs</span>

<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type">void *</span><span class="name">zkCTX</span></span>

<div class="body">
                </div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">enum</span> <span class="type"></span><span class="type">ZK_EC_KEY_TYPE</span><span class="name">ZK_EC_KEY_TYPE</span></span>

<div class="body">
<p>Supported key types.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">enum</span> <span class="type"></span><span class="type">ZK_RECOVERY_STRATEGY</span><span class="name">ZK_RECOVERY_STRATEGY</span></span>

<div class="body">
<p>Supported recovery strategies.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">enum</span> <span class="type"></span><span class="type">ZK_ECDH_KDF_TYPE</span><span class="name">ZK_ECDH_KDF_TYPE</span></span>

<div class="body">
<p>Supported ECDH key derivation function types.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">enum</span> <span class="type"></span><span class="type">ZK_ACCEL_AXIS_TYPE</span><span class="name">ZK_ACCEL_AXIS_TYPE</span></span>

<div class="body">
<p>Accelerometer axis enum, used to set tap sensitivity.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">enum</span> <span class="type"></span><span class="type">ZK_THRESHOLD_ACTION_TYPE</span><span class="name">ZK_THRESHOLD_ACTION_TYPE</span></span>

<div class="body">
<p>Possible actions for threshold monitor functions.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type"></span><span class="annotation">struct</span> <span class="type"></span><span class="type">zkAccelAxisDataType</span><span class="name">zkAccelAxisDataType</span></span>

<div class="body">
<p>zkGetAccelerometer data output.</p>
</div>
</span>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Structs</span>

<div class="struct">

### <span class="markdown-h3 signature include-toc"><span class="annotation">struct </span> <span class="name">zkAccelAxisDataType</span></span>

<div class="body">
<div class="description">
<em>#include &lt;zk_app_utils.h&gt;</em>
<p>zkGetAccelerometer data output.</p>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">double</span> <span class="name">g</span></span>

<div class="body">
<p>the axis reading in units of g-force.</p>
</div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">int</span> <span class="name">tapDirection</span></span>

<div class="body">
<p>the direction of the force along the axis which caused a tap event: -1 = negative +1 = positive 0 = did not cause a tap event.</p>
</div>
</div>
</div>
</div>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Enums</span>

<div class="enum">

### <span class="markdown-h3 signature include-toc"><span class="annotation">enum </span> <span class="name">ZK_EC_KEY_TYPE</span></span>

<div class="body">
<div class="description">
<p>Supported key types.</p>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_NISTP256</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_SECP256R1</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_SECP256K1</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ED25519</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_X25519</span>
</span>
</div>
</div>
</div>
<div class="enum">

### <span class="markdown-h3 signature include-toc"><span class="annotation">enum </span> <span class="name">ZK_RECOVERY_STRATEGY</span></span>

<div class="body">
<div class="description">
<p>Supported recovery strategies.</p>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_NONE</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_BIP39</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_SLIP39</span>
</span>
</div>
</div>
</div>
<div class="enum">

### <span class="markdown-h3 signature include-toc"><span class="annotation">enum </span> <span class="name">ZK_ECDH_KDF_TYPE</span></span>

<div class="body">
<div class="description">
<p>Supported ECDH key derivation function types.</p>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_KDF_RFC5869_SHA256</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_KDF_RFC5869_SHA512</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_KDF_PBKDF2_SHA256</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_KDF_PBKDF2_SHA512</span>
</span>
</div>
</div>
</div>
<div class="enum">

### <span class="markdown-h3 signature include-toc"><span class="annotation">enum </span> <span class="name">ZK_ACCEL_AXIS_TYPE</span></span>

<div class="body">
<div class="description">
<p>Accelerometer axis enum, used to set tap sensitivity.</p>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACCEL_AXIS_X</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACCEL_AXIS_Y</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACCEL_AXIS_Z</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACCEL_AXIS_ALL</span>
</span>
</div>
</div>
</div>
<div class="enum">

### <span class="markdown-h3 signature include-toc"><span class="annotation">enum </span> <span class="name">ZK_THRESHOLD_ACTION_TYPE</span></span>

<div class="body">
<div class="description">
<p>Possible actions for threshold monitor functions.</p>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACTION_NONE</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACTION_SELF_DESTRUCT</span>
</span>
</div>
<div class="enum-value">
<span class="enum-signature">
<span class="annotation">enumerator </span> 
<span class="name">ZK_ACTION_SLEEP</span>
</span>
</div>
</div>
</div>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Functions</span>

<div class="context">
<h3 class="context-name">Zymkey Context</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkOpen</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref">\*</span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkOpen-89673204" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Open a Zymkey context.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) returns a pointer to a Zymkey context.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkClose</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkClose-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Close a Zymkey context.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The Zymkey context to close.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Random Number Generation</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkCreateRandDataFile</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">dst\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">rdata\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkCreateRandDataFile-bf584d18" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Fill a file with random numbers.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Absolute path name for the destination file.</p>
</span>
</li>
<li class="param-item">
<span class="name">rdata_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The number of random bytes to generate.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetRandBytes</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">rdata</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">rdata\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetRandBytes-e872e277" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get an array of random bytes.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">rdata</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Pointer to a pointer of bytes.</p>
</span>
</li>
<li class="param-item">
<span class="name">rdata_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The number of random bytes to generate.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Lock Data</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLockDataF2F</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">src\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">dst\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLockDataF2F-3854c09f" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Lock up source (plaintext) data from a file and store the results (ciphertext) in a destination file.</p>
<p>This function encrypts and signs a block of plaintext data from a file and stores the result in a destination file.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the source (plaintext) data is located.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the destination (ciphertext) data should be deposited.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter specifies which key will be used to used to lock the data up. A value of &#8220;false&#8221; specifies that the Zymkey will use the one-way key whereas &#8220;true&#8221; specifies that the shared key will be used. Specify &#8220;true&#8221; for publishing data to another that has the shared key (e.g. Zymbit cloud) and &#8220;False&#8221; when the data is meant to reside exclusively withing the host computer.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLockDataB2F</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">src\_pt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">src\_pt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">dst\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLockDataB2F-efa0ab37" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Lock up source (plaintext) data from a byte array and store the results (ciphertext) in a destination file.</p>
<p>This function encrypts and signs a block of binary plaintext data and stores the result in a destination file.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Binary plaintext source byte array.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of plaintext source data.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the destination (ciphertext) data should be deposited.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLockDataF2B</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">src\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">dst\_ct</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">dst\_ct\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLockDataF2B-ec0c18ed" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Lock up source (plaintext) data from a file and store the results (ciphertext) in a destination byte array.</p>
<p>This function encrypts and signs a block of plaintext data from a file and stores the result in a binary byte array.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the source (plaintext) data is located.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the destination array.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLockDataB2B</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">src\_pt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">src\_pt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">dst\_ct</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">dst\_ct\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLockDataB2B-db6e3314" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Lock up source (plaintext) data from a byte array and store the results (ciphertext) in a destination byte array.</p>
<p>This function encrypts and signs a block of plaintext data and stores the result in a binary byte array.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Binary plaintext source byte array.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_pt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of plaintext source data.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_ct_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the destination array.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Unlock Data</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkUnlockDataF2F</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">src\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">dst\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkUnlockDataF2F-3854c09f" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Unlock source (ciphertext) data from a file and store the results (plaintext) in a destination file.</p>
<p>This function verifies a locked object signature and decrypts the associated ciphertext data.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the source (ciphertext) data is located.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the destination (plaintext) data should be deposited.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter specifies which key will be used to used to lock the data up. A value of &#8220;false&#8221; specifies that the Zymkey will use the one-way key whereas &#8220;true&#8221; specifies that the shared key will be used. Specify &#8220;true&#8221; for publishing data to another that has the shared key (e.g. Zymbit cloud) and &#8220;False&#8221; when the data is meant to reside exclusively withing the host computer.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkUnlockDataB2F</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">src\_ct</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">src\_ct\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">dst\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkUnlockDataB2F-efa0ab37" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Unlock source (ciphertext) data from a byte array and store the results (plaintext) in a destination file.</p>
<p>This function verifies a locked object signature and decrypts the associated ciphertext data.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Binary ciphertext source byte array.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of ciphertext source data.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the destination (plaintext) data should be deposited.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkUnlockDataF2B</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">src\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">dst\_pt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">dst\_pt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkUnlockDataF2B-ec0c18ed" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Unlock source (ciphertext) data from a file and store the results (plaintext) in a destination byte array.</p>
<p>This function verifies a locked object signature and decrypts the associated ciphertext data.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct_filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The absolute path to the file where the source (ciphertext) data is located.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the destination array.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkUnlockDataB2B</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">src\_ct</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">src\_ct\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">dst\_pt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">dst\_pt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkUnlockDataB2B-db6e3314" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Unlock source (ciphertext) data from a byte array and store the results (plaintext) in a destination byte array.</p>
<p>This function verifies a locked object signature and decrypts the associated ciphertext data.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Binary ciphertext source byte array.</p>
</span>
</li>
<li class="param-item">
<span class="name">src_ct_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of ciphertext source data.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">dst_pt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the destination array.</p>
</span>
</li>
<li class="param-item">
<span class="name">use_shared_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Specifies if shared key is to be used. See zkLockDataF2F.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">ECDSA</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenECDSASigFromDigest</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">sig</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">sig\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenECDSASigFromDigest-9c5032b4" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate a signature using the Zymkey&#8217;s ECDSA private key.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">digest</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter contains the digest of the data that will be used to generate the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes which contains the generated signature. This pointer is created by this function and must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the signature.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenECDSASigFromDigestWithRecID</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">sig</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">sig\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">recovery\_id</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenECDSASigFromDigestWithRecID-37a9cb7b" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate a signature using the Zymkey&#8217;s ECDSA private key.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">digest</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter contains the digest of the data that will be used to generate the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer to an array of unsigned bytes which contains the generated signature. This pointer is created by this function and must be freed by the application when no longer needed.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the size of the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">recovery_id</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Returns recovery id value needed for ethereum key recovery.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkVerifyECDSASigFromDigest</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">sig</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">sig\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkVerifyECDSASigFromDigest-02cfc8cd" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Verify a signature using one of the Zymkey&#8217;s public keys.</p>
<p>Verify a signature using an internal public key from the Zymkey private/public key store.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">digest</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter contains the digest of the data that will be used to generate the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Array of bytes which contains the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of signature.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for signature verification failed, 1 for signature verification passed, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkVerifyECDSASigFromDigestWithForeignKeySlot</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">sig</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">sig\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkVerifyECDSASigFromDigestWithForeignKeySlot-02cfc8cd" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Verify a signature using one of the Zymkey&#8217;s foreign public keys.</p>
<p>Verify a signature using a public key from the Zymkey foreign key store.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">digest</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) This parameter contains the digest of the data that will be used to generate the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Array of bytes which contains the signature.</p>
</span>
</li>
<li class="param-item">
<span class="name">sig_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of signature.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for signature verification failed, 1 for signature verification passed, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">ECDH and KDF</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkDoRawECDH</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">peer\_pubkey</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">pre\_master\_secret</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkDoRawECDH-d865ab36" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is presented in the call.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The peer public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of the peer public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">pre_master_secret</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) returned pointer to the pre-master secret.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkDoRawECDHWithIntPeerPubkey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot\_is\_foreign</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">pre\_master\_secret</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkDoRawECDHWithIntPeerPubkey-9a0ccb31" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The peer public key slot where the peer public key is to be found.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, the peer public key slot is found in the foreign public keyring.</p>
</span>
</li>
<li class="param-item">
<span class="name">pre_master_secret</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) returned pointer to the pre-master secret.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkDoECDHAndKDF</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_ECDH\_KDF\_TYPE</span> <span class="pointer-ref"></span> <span class="name">kdf\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">peer\_pubkey</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">salt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">salt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">info</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">info\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">num\_iterations</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">derived\_key\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">derived\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkDoECDHAndKDF-fe74548b" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is presented in the call.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The peer public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Size of the peer public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">salt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The salt to use for the selected KDF.</p>
</span>
</li>
<li class="param-item">
<span class="name">salt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The salt size. Must be less than or equal to 128 bytes.</p>
</span>
</li>
<li class="param-item">
<span class="name">info</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The info field to use for RFC 5869. Ignored for PBKDF2.</p>
</span>
</li>
<li class="param-item">
<span class="name">info_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The size of the info parameter. Must be less than or equal to 128 bytes.</p>
</span>
</li>
<li class="param-item">
<span class="name">num_iterations</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Number of iterations to carry out (PBKDF only).</p>
</span>
</li>
<li class="param-item">
<span class="name">derived_key_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).</p>
</span>
</li>
<li class="param-item">
<span class="name">derived_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) returned pointer to the derived key.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkDoECDHAndKDFWithIntPeerPubkey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_ECDH\_KDF\_TYPE</span> <span class="pointer-ref"></span> <span class="name">kdf\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot\_is\_foreign</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">salt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">salt\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">info</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">info\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">num\_iterations</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">derived\_key\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">derived\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkDoECDHAndKDFWithIntPeerPubkey-6dc19353" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The peer public key slot where the peer public key is to be found.</p>
</span>
</li>
<li class="param-item">
<span class="name">peer_pubkey_slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, the peer public key slot is found in the foreign public keyring.</p>
</span>
</li>
<li class="param-item">
<span class="name">salt</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The salt to use for the selected KDF.</p>
</span>
</li>
<li class="param-item">
<span class="name">salt_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The salt size. Must be less than or equal to 128 bytes.</p>
</span>
</li>
<li class="param-item">
<span class="name">info</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The info field to use for RFC 5869. Ignored for PBKDF2.</p>
</span>
</li>
<li class="param-item">
<span class="name">info_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The size of the info parameter. Must be less than or equal to 128 bytes.</p>
</span>
</li>
<li class="param-item">
<span class="name">num_iterations</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Number of iterations to carry out (PBKDF only).</p>
</span>
</li>
<li class="param-item">
<span class="name">derived_key_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).</p>
</span>
</li>
<li class="param-item">
<span class="name">derived_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) returned pointer to the derived key.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for general failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Key Management</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSaveECDSAPubKey2File</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSaveECDSAPubKey2File-16bd6bce" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>[DEPRECATED] Use zkExportPubKey2File. Store the public key to a host file in PEM format.</p>
<p>This function is useful for generating Certificate Signing Requests (CSR).</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Filename where PEM formatted public key is to be stored.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to retrieve. Only valid for model 4i and above.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkExportPubKey2File</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkExportPubKey2File-17f0e494" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Store the public key to a host file in PEM format.</p>
<p>This function is useful for generating Certificate Signing Requests (CSR).</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">filename</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Filename where PEM formatted public key is to be stored.</p>
</span>
</li>
<li class="param-item">
<span class="name">pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, designates the pubkey slot to come from the foreign keystore. (model &gt;= HSM6).</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetECDSAPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">pk</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">pk\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetECDSAPubKey-648c6194" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>[DEPRECATED] Use zkExportPubKey. Gets the public key and stores in a byte array created by this function.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Pointer to a pointer created by this function which contains the public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Pointer to an integer which contains the size of the public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to retrieve. Only valid for model 4i and above.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkExportPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">pk</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">pk\_sz</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkExportPubKey-cde18fa8" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Gets the public key and stores in a byte array created by this function.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Pointer to a pointer created by this function which contains the public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Pointer to an integer which contains the size of the public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, designates the pubkey slot to come from the foreign keystore (model &gt;= HSM6).</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetAllocSlotsList</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">is\_foreign</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">max\_num\_keys</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*\*</span> <span class="name">alloc\_key\_list</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">alloc\_key\_list\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetAllocSlotsList-ac833c39" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get the list of allocated keys (model &gt;= HSM6).</p>
<p>This function returns a list of all allocated key slots.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) if true, retrieve allocation list of the foreign keys.</p>
</span>
</li>
<li class="param-item">
<span class="name">max_num_keys</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) retrieves the key pool size.</p>
</span>
</li>
<li class="param-item">
<span class="name">alloc_key_list</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) a pointer to an array of integers provided by this function to the caller.</p>
</span>
</li>
<li class="param-item">
<span class="name">alloc_key_list_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) a pointer to an integer which contains the size of the returned key list.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkStoreForeignPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">pk\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">pk</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pk\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkStoreForeignPubKey-0a5a5c27" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Store a new foreign public key in Zymkey. (model &gt;= HSM6).</p>
<p>This function stores a new foreign public key in the Zymkey public key ring. This public key can be used for signature verification in use cases where it is desirable to hide the public key.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk_type</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The type of the public key.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Pointer to the public key to store.</p>
</span>
</li>
<li class="param-item">
<span class="name">pk_sz</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The public key size.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>allocated slot number in foreign key store, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkDisablePubKeyExport</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkDisablePubKeyExport-16c21f67" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Prevent a public key from being exported to the host. (model &gt;= HSM6).</p>
<p>This function prevents the public key at the specified slot from being exported to the host using the API zkExportPubKey.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">pubkey_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The key slot to disable pubkey export on.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The slot parameter refers to a slot in the foreign keyring.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenKeyPair</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenKeyPair-2d61d8f0" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate a new persistent key pair. (model &gt;= HSM6).</p>
<p>This function generates a new key pair of the specified type and store it persistently. This key pair cannot be used as part of the zymkey&#8217;s digital wallet operations.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">type</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The type of key to generate (ZK_EC_KEY_TYPE).</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>allocated slot number if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenEphemeralKeyPair</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenEphemeralKeyPair-2d61d8f0" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate an ephemeral key pair. (model &gt;= HSM6).</p>
<p>This function generates an ephemeral key pair of the specified type. Ephemeral key pairs are useful when performing ECDH for time-of-flight encryption. Only one ephemeral key slot is available and is not persistent between reboots.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">type</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The type of key to generate (ZK_EC_KEY_TYPE).</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkRemoveKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkRemoveKey-f8f8a941" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Remove a key pair or a foreign public key. (model &gt;= HSM6).</p>
<p>This function deletes a key pair or a foreign public key from persistent storage.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The slot.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot_is_foreign</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The slot parameter refers to a slot in the foreign keyring.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkInvalidateEphemeralKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkInvalidateEphemeralKey-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Invalidate the ephemeral key. (model &gt;= HSM6).</p>
<p>This function invalidates the ephemeral key.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Digital Wallet (BIP32/39/44)</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenWalletMasterSeed</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">master\_generator\_key</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">master\_generator\_key\_size</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">bip39\_passphrase</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">bip39\_mnemonic</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenWalletMasterSeed-9db3218b" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate master seed to start a new blockchain wallet. (model &gt;= HSM6).</p>
<p>This function generates a new blockchain master seed for creating a new wallet.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">type</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The type of key to generate (ZK_EC_KEY_TYPE).</p>
</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) An ASCII string which contains the name of the wallet.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_generator_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The master generator key used to help generate the master seed. Can be empty string.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_generator_key_size</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The size of the master generator key. If 0, no master generator key is used in the formulation of the master seed.</p>
</span>
</li>
<li class="param-item">
<span class="name">bip39_passphrase</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The passphrase to generate a different bip39_mnemonic. Can be empty string.</p>
</span>
</li>
<li class="param-item">
<span class="name">bip39_mnemonic</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to the bip39 mnemonic sentence. If NULL, the master seed is generated per BIP32. Otherwise, the master seed is generated per BIP39 and the mnemonic sentence is returned in this parameter. The string is null terminated and encoded in UTF-8 NFKD from the BIP39 Enlish dictionary.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>allocated slot number if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGenWalletChildKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">parent\_key\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">index</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">is\_hardened</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGenWalletChildKey-bf20f5b9" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Generate child key from a parent key in a blockchain wallet . (model &gt;= HSM6).</p>
<p>This function generates a new child key descendent from a specified parent key in a wallet.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">parent_key_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The parent key slot to base the child key derivation on.</p>
</span>
</li>
<li class="param-item">
<span class="name">index</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The index of the child seed. This determines the node address as well as the outcome of the key generation.</p>
</span>
</li>
<li class="param-item">
<span class="name">is_hardened</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, a hardened key is generated.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>allocated slot number if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkRestoreWalletMasterSeedFromMnemonic</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">uint8\_t</span> <span class="pointer-ref">\*</span> <span class="name">master\_generator\_key</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">master\_generator\_key\_size</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">bip39\_passphrase</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">bip39\_mnemonic</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkRestoreWalletMasterSeedFromMnemonic-cd838ac6" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Restore a master seed from a BIP39 mnemonic and a master generator key. (model &gt;= HSM6).</p>
<p>This function restores a wallet master seed from a supplied BIP39 mnemonic string and a master generator key.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">type</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The type of key to generate (ZK_KEY_TYPE).</p>
</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) An ASCII string which contains the name of the wallet.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_generator_key</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The master generator key used to help generate the master seed.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_generator_key_size</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The size of the master generator key. If 0, no master generator key is used in the formulation of the master seed.</p>
</span>
</li>
<li class="param-item">
<span class="name">bip39_passphrase</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The passphrase used to generate the bip39_mnemonic.</p>
</span>
</li>
<li class="param-item">
<span class="name">bip39_mnemonic</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The bip39_mnemonic string, null terminated and UTF-8 NFKD encoded from the BIP39 English dictionary.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>allocated slot number if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetWalletNodeAddrFromKeySlot</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">node\_addr</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">master\_seed\_slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetWalletNodeAddrFromKeySlot-6ae813ad" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Derive the node address from a key slot number. (model &gt;= HSM6).</p>
<p>This function derives a node address from an input key slot number.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) A key slot number that is part of a digital wallet.</p>
</span>
</li>
<li class="param-item">
<span class="name">node_addr</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer which will contain the node address in ASCII.</p>
</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to a pointer which will contain the wallet name in ASCII. If NULL, this parameter will not be retrieved.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_seed_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which will contain the master seed key slot. If NULL, this parameter will not be retrieved.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetWalletKeySlotFromNodeAddr</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">node\_addr</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">char</span> <span class="pointer-ref">\*</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">master\_seed\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetWalletKeySlotFromNodeAddr-6862b739" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Derive the slot address from a node address. (model &gt;= HSM6).</p>
<p>This function returns the slot number associated with a given node address.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">node_addr</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) A pointer which contains the node address in ASCII.</p>
</span>
</li>
<li class="param-item">
<span class="name">wallet_name</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) A pointer which contains the wallet name in ASCII, used to identify the wallet identity. If desired, this parameter can be NULL and the master_seed_slot parameter can be specified instead.</p>
</span>
</li>
<li class="param-item">
<span class="name">master_seed_slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The master seed slot. Can be used to specify the wallet identity instead of the wallet name.</p>
</span>
</li>
<li class="param-item">
<span class="name">slot</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A pointer to an integer which contains the associated key slot.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Perimeter Detect</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetPerimeterEventAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">channel</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">action\_flags</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetPerimeterEventAction-28dc7f4a" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set perimeter breach action.</p>
<p>This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:</p>
<ul>
<li>Notify host.</li>
<li>Zymkey self-destruct.</li>
</ul>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">channel</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The channel (0 or 1) that the action flags will be applied to.</p>
</span>
</li>
<li class="param-item">
<span class="name">action_flags</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The actions to apply to the perimeter event channel:</p>
<ul>
<li>Notify (ZK_PERIMETER_EVENT_ACTION_NOTIFY).</li>
<li>Self-destruct (ZK_PERIMETER_EVENT_ACTION_SELF_DESTRUCT).</li>
</ul>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetDigitalPerimeterDetectLPPeriod</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">lp\_period</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetDigitalPerimeterDetectLPPeriod-10d464f7" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set the low power period (model &gt;= HSM6).</p>
<p>This function sets low power period on the digital perimeter detect.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">lp_period</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) low power period in microseconds.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetDigitalPerimeterDetectLPMaxBits</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">max\_num\_bits</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetDigitalPerimeterDetectLPMaxBits-2ba98637" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set the low power max number of bits (model &gt;= HSM6).</p>
<p>This function sets low power max number of bits on the digital perimeter detect.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">max_num_bits</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) max number of bits.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetDigitalPerimeterDetectDelays</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">min\_delay\_ns</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">max\_delay\_ns</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetDigitalPerimeterDetectDelays-78561eac" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set the delays (model &gt;= HSM6).</p>
<p>This function sets delays on the digital perimeter detect.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">min_delay_ns</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) minimum delay in nanoseconds.</p>
</span>
</li>
<li class="param-item">
<span class="name">max_delay_ns</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) maximum delay in nanoseconds.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkWaitForPerimeterEvent</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">timeout\_ms</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkWaitForPerimeterEvent-9f61c3e7" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Wait for a perimeter breach event to be detected.</p>
<p>This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero. Note that, in order to receive perimeter events, the zymkey must have been configured to notify the host on either or both of the perimeter detect channels via a call to &#8220;zkSetPerimeterEventAction&#8221;.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">timeout_ms</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The maximum amount of time in milliseconds to wait for a perimeter event to arrive.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure, -ETIMEDOUT when no perimeter events detected within the specified timeout.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetPerimeterDetectInfo</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">timestamps\_sec</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">num\_timestamps</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetPerimeterDetectInfo-83e5f8fc" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current perimeter detect info.</p>
<p>This function gets the timestamp of the first perimeter detect event for the given channel.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">timestamps_sec</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The timestamps for when any breach occurred. The index in this array corresponds to the channel number used by zkSetPerimeterEventAction. A 0 value means no breach has occurred on this channel. This array is allocated by this routine and so it must be freed by the caller.</p>
</span>
</li>
<li class="param-item">
<span class="name">num_timestamps</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The number of timestamps in the returned array.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkClearPerimeterDetectEvents</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkClearPerimeterDetectEvents-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Clear perimeter detect events.</p>
<p>This function clears all perimeter detect event info and rearms all perimeter detect channels.</p>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">LED Control</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLEDOff</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLEDOff-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Turns the LED off.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLEDOn</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLEDOn-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Turns the LED on.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLEDFlash</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">on\_ms</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">off\_ms</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">num\_flashes</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLEDFlash-74fb8b51" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Flashes the LED.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">on_ms</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The amount of time, in milliseconds, that the LED will stay on during a flash cycle.</p>
</span>
</li>
<li class="param-item">
<span class="name">off_ms</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The amount of time, in milliseconds, that the LED will stay off during a flash cycle.</p>
</span>
</li>
<li class="param-item">
<span class="name">num_flashes</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The number of on/off flash cycles to complete. If this parameter is 0, then the LED will flash indefinitely.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Administrative Ops</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetI2CAddr</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">addr</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetI2CAddr-b9280f65" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Sets the i2c address of the Zymkey (i2c versions only).</p>
<p>This method should be called if the i2c address of the Zymkey is shared with another i2c device on the same i2c bus. The default i2c address for Zymkey units is 0x30. Currently, the address may be set in the ranges of 0x30 - 0x37 and 0x60 - 0x67. After successful completion of this command, the Zymkey will reset itself.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">addr</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The i2c address that the Zymkey will set itself to.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Time</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetTime</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref">\*</span> <span class="name">epoch\_time\_sec</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">precise\_time</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetTime-8aa2544c" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current GMT time.</p>
<p>This function is called to get the time directly from a Zymkey&#8217;s Real Time Clock (RTC).</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">epoch_time_sec</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The time in seconds from the epoch (Jan. 1, 1970).</p>
</span>
</li>
<li class="param-item">
<span class="name">precise_time</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) If true, this API returns the time after the next second falls. This means that the caller could be blocked up to one second. If false, the API returns immediately with the current time reading.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Accelerometer</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetTapSensitivity</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">axis</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">pct</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetTapSensitivity-e5c96e10" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Sets the sensitivity of tap operations.</p>
<p>This method permits setting the sensitivity of the tap detection feature. Each axis may be individually configured or all at once.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">axis</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The axis to configure. This parameter should contain one of the values in the enum typedef ACCEL_AXIS_TYPE.</p>
</span>
</li>
<li class="param-item">
<span class="name">pct</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The sensitivity expressed as percentage.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkWaitForTap</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">timeout\_ms</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkWaitForTap-9f61c3e7" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Wait for a tap event to be detected.</p>
<p>This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">timeout_ms</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The maximum amount of time in milliseconds to wait for a tap event to arrive.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure, -ETIMEDOUT when no tap events detected within the specified timeout.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetAccelerometerData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAccelAxisDataType</span> <span class="pointer-ref">\*</span> <span class="name">x</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAccelAxisDataType</span> <span class="pointer-ref">\*</span> <span class="name">y</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAccelAxisDataType</span> <span class="pointer-ref">\*</span> <span class="name">z</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetAccelerometerData-e92a69a1" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current accelerometer data and tap info.</p>
<p>This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">x</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) x axis accelerometer information y (output) y axis accelerometer information z (output) z axis accelerometer information.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Binding Management</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkLockBinding</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkLockBinding-ac5d4fe2" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set soft binding lock.</p>
<p>This function locks the binding for a specific HSM. This API is only valid for HSM series products.</p>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetCurrentBindingInfo</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref">\*</span> <span class="name">binding\_is\_locked</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref">\*</span> <span class="name">is\_bound</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetCurrentBindingInfo-7deb67ce" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current binding info.</p>
<p>This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">binding_is_locked</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) Binary value which expresses the current binding lock state. is_bound (output) Binary value which expresses the current bind state.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Module Info</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetModelNumberString</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">model\_str</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetModelNumberString-d7f84a5a" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get Zymkey model number.</p>
<p>This function retrieves the model number of the zymkey referred to in a specified context.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context which was created with zkOpen.</p>
</span>
</li>
<li class="param-item">
<span class="name">model_str</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A double pointer to the model string. This function allocates this string. It is the caller&#8217;s responsibility to free it.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetFirmwareVersionString</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">fw\_ver\_str</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetFirmwareVersionString-4cae511d" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get Zymkey firmware version.</p>
<p>This function retrieves the firmware version number of the zymkey referred to in a specified context.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context which was created with zkOpen.</p>
</span>
</li>
<li class="param-item">
<span class="name">version_str</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A double pointer to the firmware version string. This function allocates this string. It is the caller&#8217;s responsibility to free it.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetSerialNumberString</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">char</span> <span class="pointer-ref">\*\*</span> <span class="name">serial\_num\_str</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetSerialNumberString-1b4f1bb9" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get Zymkey serial number.</p>
<p>This function retrieves the serial number of the zymkey referred to in a specified context.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context which was created with zkOpen.</p>
</span>
</li>
<li class="param-item">
<span class="name">serial_num_str</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) A double pointer to the serial number string. This function allocates this string. It is the caller&#8217;s responsibility to free it.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetCPUTemp</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref">\*</span> <span class="name">cpu\_temp</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetCPUTemp-08eecbc9" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current HSM CPU temperature. (model &gt;= HSM6).</p>
<p>This function gets the current HSM CPU temp.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">cpu_temp</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The temperature in celsius of the CPU.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetRTCDrift</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref">\*</span> <span class="name">rtc\_drift</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetRTCDrift-69c8eb88" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get current RTC drift. (model &gt;= HSM6).</p>
<p>This function is called to get the current RTC drift.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">rtc_drift</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The RTC drift.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkGetBatteryVoltage</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref">\*</span> <span class="name">batt\_voltage</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkGetBatteryVoltage-8d923f88" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Get the battery voltage (model &gt;= HSM6).</p>
<p>This function gets the current battery voltage.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">ctx</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) Zymkey context.</p>
</span>
</li>
<li class="param-item">
<span class="name">battV</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(output) The current battery voltage value.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 if successful, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">Battery Voltage Monitor</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetBatteryVoltageAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">action</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetBatteryVoltageAction-f90f5fd1" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set battery voltage threshold action. (model &gt;= HSM6).</p>
<p>This function specifies the action to take when the battery voltage falls below the threshold set by zkSetBatteryVoltageThreshold. If this function is never called, do nothing is default. There are three actions:</p>
<ul>
<li>Do nothing.</li>
<li>Go to sleep until battery is replaced.</li>
<li>Self-destruct.</li>
</ul>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">action</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The action to apply, specify one of the ZK_THRESHOLD_ACTION_TYPE:</p>
<ul>
<li>Do nothing (ZK_ACTION_NONE).</li>
<li>Sleep (ZK_ACTION_SLEEP).</li>
<li>Self-destruct (ZK_ACTION_SELF_DESTRUCT).</li>
</ul>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetBatteryVoltageThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetBatteryVoltageThreshold-1392b24a" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Sets the battery voltage threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the battery voltage falls bellow, the action set by zkSetBatteryVoltageAction will be carried out. The recommended threshold is 2.3V. If this function isn&#8217;t called 2.3V is assumed by default. Threshold must be below 2.5V.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">threshold</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The threshold in Volts.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
<div class="context">
<h3 class="context-name">CPU Temperature Monitor</h3>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetCPUTempAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">action</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetCPUTempAction-f90f5fd1" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Set HSM CPU temperature threshold action. (model &gt;= HSM6).</p>
<p>This function specifies the action to take when the HSM CPU temperature falls below the threshold set by zkSetCPULowTempThreshold, or rises above the threshold set by zkSetCPUHighTempThreshold. There are two actions to apply:</p>
<ul>
<li>Do nothing.</li>
<li>Self-destruct.</li>
</ul>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">action</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The action to apply, used it&#8217;s named constant from ZK_THRESHOLD_ACTION_TYPE:</p>
<ul>
<li>Do nothing (ZK_ACTION_NONE).</li>
<li>Self-destruct (ZK_ACTION_SELF_DESTRUCT).</li>
</ul>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetCPULowTempThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetCPULowTempThreshold-1392b24a" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Sets the HSM CPU low temperature threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature falls below, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU&#8217;s ambient temperature. The recommended setting is no more than 20C. If no threshold is set, -10 degrees celsius is set as default.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">threshold</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The threshold in celsius.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
<div class="method">

### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">zkSetCPUHighTempThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkCTX</span> <span class="pointer-ref"></span> <span class="name">ctx</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--zkSetCPUHighTempThreshold-1392b24a" class="markdown-h3 signature include-toc"}

<div class="body">
<div class="description">
<p>Sets the HSM CPU high temperature threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature rises above, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU&#8217;s ambient temperature. The recommended setting is no less than 40C. If no threshold is set, 65 degrees celsius is set as default.</p>
</div>
<div class="parameters">
<h4>Parameters</h4>
<ul>
<li class="param-item">
<span class="name">threshold</span><span class="param-desc-divider"> &#8212; </span><span class="description">
<p>(input) The threshold in celsius.</p>
</span>
</li>
</ul>
</div>
<div class="returns">
<h4>Returns</h4>
<span class="return_value">
<p>0 for success, less than 0 for failure.</p>
</span>
</div>
</div>
</div>
</div>
</div>
