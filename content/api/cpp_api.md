---
title: C++ API Documentation
description: C++ interface to Zymkey Application Utilities Library.
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

<p>C++ interface to Zymkey Application Utilities Library.</p>
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

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type">std::vector&lt;uint8_t&gt;</span><span class="name">byteArray</span></span>

<div class="body">
<p>Typedef for a simple unsigned bytes container.</p>
</div>
</span>
<span class="type">

### <span class="markdown-h3 signature include-toc"><span class="annotation">typedef</span> <span class="type">std::vector&lt;int&gt;</span><span class="name">intArray</span></span>

<div class="body">
<p>Typedef for a simple integer container.</p>
</div>
</span>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Structs</span>

<div class="struct">

### <span class="markdown-h3 signature include-toc"><span class="annotation">struct </span> <span class="name">accelData</span></span>

<div class="body">
<div class="description">
<em>#include &lt;zkAppUtilsClass.h&gt;</em>
<p>Structure typedef used for retrieval of accelerometer data.</p>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">double</span> <span class="name">x</span></span>

<div class="body">
                                </div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">double</span> <span class="name">y</span></span>

<div class="body">
                                </div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">double</span> <span class="name">z</span></span>

<div class="body">
                                </div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">int</span> <span class="name">tapDirX</span></span>

<div class="body">
                                </div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">int</span> <span class="name">tapDirY</span></span>

<div class="body">
                                </div>
</div>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">int</span> <span class="name">tapDirZ</span></span>

<div class="body">
                                </div>
</div>
</div>
</div>
</div>
<div class="api-docs">

## <span class="markdown-h2 include-toc">Classes</span>

<div class="class">

### <span class="markdown-h3 signature include-toc"><span class="annotation">class</span> <span class="name">zkClass</span></span>

<div class="body">
<span class="source-file">zkAppUtilsClass.h</span>
<p>The main class.</p>
<div class="context">
<h4 class="context-name">Zymkey Context</h4>
<div class="method">

#### <span><span class="name">zkClass</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="zkClass-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Constructor: a Zymkey context is opened.</p>
</div>
</div>
<div class="method">

#### <span><span class="annotation">virtual</span> <span class="name">~zkClass</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="virtual-~zkClass-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Destructor: the Zymkey context is closed.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Random Number Generation</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">createRandDataFile</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">dst\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">rdata\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--createRandDataFile-e3444204" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Write random data to a file.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">getRandBytes</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">rdata\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="getRandBytes-745f6a2c" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate a block of random data.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Lock Data</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">lockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">dst\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--lockData-ec438417" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Locks data from a plaintext source file and stores locked data object to a destination file.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">lockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_pt\_data</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">dst\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--lockData-942434d8" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Locks data from a plaintext source byte container and stores locked data object to a destination file.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">lockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="lockData-f6af014d" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Locks data from a plaintext source file and stores locked data object in a container of unsigned bytes.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">lockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_pt\_data</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="lockData-acb5e31b" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Locks data from a plaintext source byte container and stores locked data object in a container of unsigned bytes.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Unlock Data</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">unlockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">dst\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--unlockData-ec438417" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Unocks a locked data object from source file and stores unlocked data object to a destination file.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">unlockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_ct\_data</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">dst\_pt\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--unlockData-942434d8" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Unlocks a locked data object contained in an unsigned byte container and stores plaintext data to a destination file.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">unlockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_ct\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="unlockData-f6af014d" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Unlocks a locked data object from a plaintext source file and stores plaintext data in a container of unsigned bytes.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">unlockData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation">const</span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">src\_ct\_bytes</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">use\_shared\_key</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="unlockData-acb5e31b" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Unlocks a locked data object contained in an unsigned byte container and stores plaintext data in a container of unsigned bytes.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">ECDSA</h4>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">genECDSASigFromDigest</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="genECDSASigFromDigest-067907b4" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate a signature from a data digest using the Zymkey&#8217;s private key.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">bool</span>  <span class="pointer-ref"></span> <span class="name">verifyECDSASigFromDigest</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">digest</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">sig</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pub\_key\_slot</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">pub\_key\_is\_foreign</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="bool--verifyECDSASigFromDigest-e0555bcd" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Verify a signature from a data digest using the Zymkey&#8217;s public key. The public key is not given as an input. Rather, the Zymkey uses its own copy of the private key. This insures that the public key that matches the private key is used.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">ECDH and KDF</h4>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">doRawECDH</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">peer\_pubkey</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="doRawECDH-a77442d1" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is presented in the call.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">doRawECDHWithIntPeerPubkey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot\_is\_foreign</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="doRawECDHWithIntPeerPubkey-d788e54d" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">doECDHAndKDF</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_ECDH\_KDF\_TYPE</span> <span class="pointer-ref"></span> <span class="name">kdf\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">peer\_pubkey</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">salt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">info</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">num\_iterations</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">derived\_key\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="doECDHAndKDF-f1769cf8" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is presented in the call.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">doECDHAndKDFWithIntPeerPubkey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_ECDH\_KDF\_TYPE</span> <span class="pointer-ref"></span> <span class="name">kdf\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">peer\_pubkey\_slot\_is\_foreign</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">salt</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">info</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">num\_iterations</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">derived\_key\_sz</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="doECDHAndKDFWithIntPeerPubkey-c33b0f50" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
<p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Key Management</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">saveECDSAPubKey2File</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref"></span> <span class="name">dst\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--saveECDSAPubKey2File-c6fe22fc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>[DEPRECATED] Use exportPubKey2File. Save the public key that matches the Zymkey&#8217;s private key into a PEM formatted file. Mainly used for Certificate Signing Request (CSR) generation.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">exportPubKey2File</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref"></span> <span class="name">dst\_filename</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--exportPubKey2File-c75fa5f6" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Store the public key to a host file in PEM format.</p>
<p>This function is useful for generating Certificate Signing Requests (CSR).</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">getECDSAPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="getECDSAPubKey-baa17d4d" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>[DEPRECATED] Use exportPubKey. Get a container of bytes which contains the ECDSA public key.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">exportPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="exportPubKey-2bc8a24f" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Gets the public key and stores in a byte array created by this function.</p>
</div>
</div>
<div class="method">

#### <span><span class="pointer-ref">\*</span> <span class="name">getAllocSlotsList</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">foreign\_key\_pool</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="getAllocSlotsList-aae7e3e9" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get the list of allocated keys. (model &gt;= HSM6).</p>
<p>This function returns a list of all allocated key slots.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">storeForeignPubKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">pk\_type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">pk</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--storeForeignPubKey-607a7919" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Store a new foreign public key in Zymkey. (model &gt;= HSM6).</p>
<p>This function stores a new foreign public key in the Zymkey public key ring. This public key can be used for signature verification in use cases where it is desirable to hide the public key.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">disablePubKeyExport</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">pubkey\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--disablePubKeyExport-9a723be9" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Prevent a public key from being exported to the host. (model &gt;= HSM6).</p>
<p>This function prevents the public key at the specified slot from being exported to the host using the API zkExportPubKey.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">genKeyPair</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--genKeyPair-a92324d5" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate a new persistent key pair. (model &gt;= HSM6).</p>
<p>This function generates a new key pair of the specified type and store it persistently. This key pair cannot be used as part of the zymkey&#8217;s digital wallet operations.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">genEphemeralKeyPair</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--genEphemeralKeyPair-a92324d5" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate an ephemeral key pair. (model &gt;= HSM6).</p>
<p>This function generates an ephemeral key pair of the specified type. Ephemeral key pairs are useful when performing ECDH for time-of-flight encryption. Only one ephemeral key slot is available and is not persistent between reboots.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">removeKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">slot\_is\_foreign</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--removeKey-ac3a53a7" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Remove a key pair or a foreign public key. (model &gt;= HSM6).</p>
<p>This function deletes a key pair or a foreign public key from persistent storage.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">invalidateEphemeralKey</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="void--invalidateEphemeralKey-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Invalidate the ephemeral key. (model &gt;= HSM6).</p>
<p>This function invalidates the ephemeral key.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Digital Wallet (BIP32/39/44)</h4>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">genBIP32WalletMasterSeed</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">master\_generator\_key</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--genBIP32WalletMasterSeed-05540bde" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate a BIP32 master seed to start a new blockchain wallet. (model &gt;= HSM6).</p>
<p>This function generates a new blockchain master seed for creating a new wallet per BIP32.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">std::string \*</span>  <span class="pointer-ref"></span> <span class="name">genBIP39WalletMasterSeed</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">master\_generator\_key</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">\*</span> <span class="name">slot\_num</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="std::string-genBIP39WalletMasterSeed-aada1e84" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate a BIP39 master seed to start a new blockchain wallet. (model &gt;= HSM6).</p>
<p>This function generates a new blockchain master seed for creating a new wallet per BIP39.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">genWalletChildKey</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">parent\_key\_slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">index</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">is\_hardened</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--genWalletChildKey-7b498800" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Generate child key from a parent key in a blockchain wallet . (model &gt;= HSM6).</p>
<p>This function generates a new child key descendent from a specified parent key in a wallet.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">restoreWalletMasterSeedFromBIP39Mnemonic</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_EC\_KEY\_TYPE</span> <span class="pointer-ref"></span> <span class="name">type</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::byteArray</span> <span class="pointer-ref">&amp;</span> <span class="name">master\_generator\_key</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">bip39\_mnemonic</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--restoreWalletMasterSeedFromBIP39Mnemonic-2b185ae7" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Restore a master seed from a BIP39 mnemonic and a master generator key. (model &gt;= HSM6).</p>
<p>This function restores a wallet master seed from a supplied BIP39 mnemonic string and a master generator key.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">getWalletNodeAddrFromKeySlot</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">slot</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">\*</span> <span class="name">out\_node\_addr</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">\*</span> <span class="name">out\_wallet\_name</span> = <span class="default-val">NULL</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--getWalletNodeAddrFromKeySlot-978d739e" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Derive the node address from a key slot number. (model &gt;= HSM6).</p>
<p>This function derives a node address from an input key slot number.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">int</span>  <span class="pointer-ref"></span> <span class="name">getWalletKeySlotFromNodeAddr</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">node\_addr</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">std::string</span> <span class="pointer-ref">&amp;</span> <span class="name">wallet\_name</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">master\_seed\_slot</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="int--getWalletKeySlotFromNodeAddr-f97fd4f4" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Derive the slot address from a node address. (model &gt;= HSM6).</p>
<p>This function returns the slot number associated with a given node address.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">LED Control</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">ledOff</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="void--ledOff-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Turn LED off.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">ledOn</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="void--ledOn-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Turn LED on.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">ledFlash</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">on\_ms</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">off\_ms</span> = <span class="default-val">0</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">num\_flashes</span> = <span class="default-val">0</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--ledFlash-1c61cd28" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Flash LED a certain number of times.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Administrative</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setI2CAddr</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">addr</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setI2CAddr-b2a46129" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Sets the i2c address (i2c versions only). Used in case of i2c bus device address conflict.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Time</h4>
<div class="method">

#### <span><span class="returns">uint32\_t</span>  <span class="pointer-ref"></span> <span class="name">getTime</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref"></span> <span class="name">precise\_time</span> = <span class="default-val">false</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="uint32t--getTime-64df3f4b" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get current GMT time.</p>
<p>This method is called to get the time directly from a Zymkey&#8217;s Real Time Clock (RTC).</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Accelerometer</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setTapSensitivity</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">pct</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_ACCEL\_AXIS\_TYPE</span> <span class="pointer-ref"></span> <span class="name">axis</span> = <span class="default-val">ZK\_ACCEL\_AXIS\_ALL</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setTapSensitivity-d4990882" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Sets the sensitivity of the tap detection as a percentage for an individual axis or all axes.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">waitForTap</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">timeout\_ms</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--waitForTap-31151db6" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Wait for a tap event to be detected.</p>
<p>This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">getAccelerometerData</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">zkAppUtils::accelData</span> <span class="pointer-ref">&amp;</span> <span class="name">accel\_data</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--getAccelerometerData-76968e99" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get current accelerometer data and tap info.</p>
<p>This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis. Array index 0 = x 1 = y 2 = z.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Binding Management</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">lockBinding</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="void--lockBinding-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set soft binding lock.</p>
<p>This function locks the binding for a specific HSM. This API is only valid for HSM series products.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">getCurrentBindingInfo</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref">&amp;</span> <span class="name">binding\_is\_locked</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">bool</span> <span class="pointer-ref">&amp;</span> <span class="name">is\_bound</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--getCurrentBindingInfo-223d6c78" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get current binding info.</p>
<p>This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Perimeter Detect</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setPerimeterEventAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">channel</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">action\_flags</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setPerimeterEventAction-8cb52c8f" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set perimeter breach action.</p>
<p>This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:</p>
<ul>
<li>Notify host.</li>
<li>Zymkey self-destruct.</li>
</ul>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setDigitalPerimeterDetectLPPeriod</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">lp\_period</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setDigitalPerimeterDetectLPPeriod-42acacc4" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set the low power period (model &gt;= HSM6).</p>
<p>This function sets low power period on the digital perimeter detect.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setDigitalPerimeterDetectLPMaxBits</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">max\_num\_bits</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setDigitalPerimeterDetectLPMaxBits-4e385e59" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set the low power max number of bits (model &gt;= HSM6).</p>
<p>This function sets low power max number of bits on the digital perimeter detect.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setDigitalPerimeterDetectDelays</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">min\_delay\_ns</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref"></span> <span class="name">max\_delay\_ns</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setDigitalPerimeterDetectDelays-16d29912" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set the delays (model &gt;= HSM6).</p>
<p>This function sets delays on the digital perimeter detect.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">waitForPerimeterEvent</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref"></span> <span class="name">timeout\_ms</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--waitForPerimeterEvent-31151db6" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Wait for a perimeter breach event to be detected.</p>
<p>This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero. Note that, in order to receive perimeter events, the zymkey must have been configured to notify the host on either or both of the perimeter detect channels via a call to &#8220;zkSetPerimeterEventAction&#8221;.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">getPerimeterDetectInfo</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">uint32\_t</span> <span class="pointer-ref">\*\*</span> <span class="name">timestamp\_sec</span></span><span class="param-divider">, </span></span><span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">int</span> <span class="pointer-ref">&amp;</span> <span class="name">num\_timestamps</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--getPerimeterDetectInfo-6a2843a7" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get current perimeter detect info.</p>
<p>This function gets the timestamp of the first perimeter detect event for the given channel.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">clearPerimeterDetectEvents</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="void--clearPerimeterDetectEvents-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Clear perimeter detect info.</p>
<p>This function clears all perimeter detect info and rearms all perimeter detect channels.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">std::string \*</span>  <span class="pointer-ref"></span> <span class="name">getModelNumberString</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="std::string-getModelNumberString-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get Zymkey model number.</p>
<p>This function retrieves the model number of the zymkey referred to in a specified context.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">std::string \*</span>  <span class="pointer-ref"></span> <span class="name">getFirmwareVersionString</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="std::string-getFirmwareVersionString-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get Zymkey firmware version.</p>
<p>This function retrieves the firmware version of the zymkey referred to in a specified context.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">std::string \*</span>  <span class="pointer-ref"></span> <span class="name">getSerialNumberString</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="std::string-getSerialNumberString-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get Zymkey serial number.</p>
<p>This function retrieves the serial number of the zymkey referred to in a specified context.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Module Info</h4>
<div class="method">

#### <span><span class="returns">float</span>  <span class="pointer-ref"></span> <span class="name">getCPUTemp</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="float--getCPUTemp-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get the CPU Temp. (model &gt;= HSM6).</p>
<p>This function gets the current HSM CPU temp.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">float</span>  <span class="pointer-ref"></span> <span class="name">getRTCDrift</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="float--getRTCDrift-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get the RTC drift. (model &gt;= HSM6).</p>
<p>This function gets the current RTC drift.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">float</span>  <span class="pointer-ref"></span> <span class="name">getBatteryVoltage</span> <span class="param-list"><span class="param-paren paren-open">(</span><span class="param-paren paren-close">)</span></span></span> {id="float--getBatteryVoltage-f24db7dc" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Get the battery voltage(model &gt;= HSM6).</p>
<p>This function gets the current battery voltage.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Battery Voltage Monitor</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setBatteryVoltageAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_THRESHOLD\_ACTION\_TYPE</span> <span class="pointer-ref"></span> <span class="name">action</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setBatteryVoltageAction-bc64806b" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set battery voltage threshold action. (model &gt;= HSM6).</p>
<p>This function specifies the action to take when the battery voltage falls below the threshold set by zkSetBatteryVoltageThreshold. If this function is never called, do nothing is default. There are three actions:</p>
<ul>
<li>Do nothing.</li>
<li>Go to sleep until battery is replaced.</li>
<li>Self-destruct.</li>
</ul>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setBatteryVoltageThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setBatteryVoltageThreshold-c78fde9a" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Sets the battery voltage threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the battery voltage falls bellow, the action set by zkSetBatteryVoltageAction will be carried out. The recommended threshold is 2.3V. If this function isn&#8217;t called 2.5V is assumed by default.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">CPU Temperature Monitor</h4>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setCPUTempAction</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">ZK\_THRESHOLD\_ACTION\_TYPE</span> <span class="pointer-ref"></span> <span class="name">action</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setCPUTempAction-bc64806b" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Set HSM CPU temperature threshold action. (model &gt;= HSM6).</p>
<p>This function specifies the action to take when the HSM CPU temperature falls below the threshold set by zkSetCPULowTempThreshold, or rises above the threshold set by zkSetCPUHighTempThreshold. There are two actions to apply:</p>
<ul>
<li>Do nothing.</li>
<li>Self-destruct.</li>
</ul>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setCPULowTempThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setCPULowTempThreshold-c78fde9a" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Sets the HSM CPU low temperature threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature falls below, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU&#8217;s ambient temperature. The recommended setting is no more than 20C. If no threshold is set, -10 degrees Celsius is set as default.</p>
</div>
</div>
<div class="method">

#### <span><span class="returns">void</span>  <span class="pointer-ref"></span> <span class="name">setCPUHighTempThreshold</span> <span class="param-list"><span class="param-paren paren-open">(</span> <span class="param-item-wrapper"><span class="param"><span class="annotation"></span>  <span class="type">float</span> <span class="pointer-ref"></span> <span class="name">threshold</span></span></span><span class="param-paren paren-close">)</span></span></span> {id="void--setCPUHighTempThreshold-c78fde9a" class="markdown-h4 signature include-toc"}

<div class="body">
<div class="description"></div>
<p>Sets the HSM CPU high temperature threshold. (model &gt;= HSM6).</p>
<p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature rises above, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU&#8217;s ambient temperature. The recommended setting is no less than 40C. If no threshold is set, 65 degrees celsius is set as default.</p>
</div>
</div>
</div>
<div class="context">
<h4 class="context-name">Private Members</h4>
<div class="struct-var">

#### <span class="markdown-h4 signature include-toc"><span class="returns">zkCTX</span> <span class="name">zkContext</span></span>

<div class="body">
                                </div>
</div>
</div>
</div>
</div>
</div>
