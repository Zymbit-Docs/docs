---
title: C API Documentation
description: This is the official documentation for the official zkapputils C API library.
lastmod: '2021-03-26T21:34:55'
draft: false
images: []
type: docs
layout: single
weight: 0
toc: true
---

<!--

################################################################################

WARNING: DO NOT EDIT THIS PAGE MANUALLY!

################################################################################

This template should only be used for automatically-generated API documentation.

DO NOT edit the content of this page manually, as it will be overwritten
the next time the API documentation is automatically updated.

################################################################################

WARNING: DO NOT EDIT THIS PAGE MANUALLY!

################################################################################

//-->


C interface to Zymkey Application Utilities Library.

This file contains the C API to the the Zymkey Application Utilities library. This API facilitates writing user space applications which use Zymkey to perform cryptographic operations, such as:

1.  Signing of payloads using ECDSA

2.  Verification of payloads that were signed using Zymkey

3.  Exporting the public key that matches Zymkey’s private key

4.  ”Locking” and “unlocking” data objects

5.  Generating random data Additionally, there are functions for changing the i2c address (i2c units only), setting tap sensitivity and controlling the LED.

**Author**  
Scott Miller

**Version**  
1.0

**Date**  
November 17, 2016

**Copyright**  
Zymbit, Inc.

<div id="defines" class="section">

## Defines

<div class="breathe-sectiondef docutils container">

Defines

<span id="zk__app__utils_8h_1a483ab601bc65411778a8573de194ca28" class="target"></span> `             ZK_PERIMETER_EVENT_ACTION_NOTIFY           `    
Perimeter breach action flag definitions.

<!-- -->

<span id="zk__app__utils_8h_1aeb46102a3b07a7dbc1938c2e64a3bc56" class="target"></span> `             ZK_PERIMETER_EVENT_ACTION_SELF_DESTRUCT           `    

</div>

</div>

<div id="typedefs" class="section">

## Typedefs

<div class="breathe-sectiondef docutils container">

Typedefs

<span id="_CPPv35zkCTX"></span> <span id="_CPPv25zkCTX"></span> <span id="zkCTX"></span> <span id="zk__app__utils_8h_1ad9cb7324974b6700baaa38bb1e0dd692" class="target"></span> *<span class="pre">typedef</span>* <span class="pre">void</span> <span class="pre">\*</span> `             zkCTX           `    

<!-- -->

<span id="_CPPv314ZK_EC_KEY_TYPE"></span> <span id="_CPPv214ZK_EC_KEY_TYPE"></span> <span id="ZK_EC_KEY_TYPE"></span> <span id="zk__app__utils_8h_1a466f1a324a212ed96c66e1c32e362ad9" class="target"></span> *<span class="pre">typedef</span>* *<span class="pre">enum</span>* <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> `             ZK_EC_KEY_TYPE           `    
Supported key types.

<!-- -->

<span id="_CPPv316ZK_ECDH_KDF_TYPE"></span> <span id="_CPPv216ZK_ECDH_KDF_TYPE"></span> <span id="ZK_ECDH_KDF_TYPE"></span> <span id="zk__app__utils_8h_1a57faf2007f284dae9bb19d3a94a5463a" class="target"></span> *<span class="pre">typedef</span>* *<span class="pre">enum</span>* <a href="index.html#_CPPv416ZK_ECDH_KDF_TYPE" class="reference internal" title="ZK_ECDH_KDF_TYPE"><span class="pre">ZK_ECDH_KDF_TYPE</span></a> `             ZK_ECDH_KDF_TYPE           `    
Supported ECDH key derivation function types.

<!-- -->

<span id="_CPPv318ZK_ACCEL_AXIS_TYPE"></span> <span id="_CPPv218ZK_ACCEL_AXIS_TYPE"></span> <span id="ZK_ACCEL_AXIS_TYPE"></span> <span id="zk__app__utils_8h_1a369df68bcf1bf7db34eace92022d26ff" class="target"></span> *<span class="pre">typedef</span>* *<span class="pre">enum</span>* <a href="index.html#_CPPv418ZK_ACCEL_AXIS_TYPE" class="reference internal" title="ZK_ACCEL_AXIS_TYPE"><span class="pre">ZK_ACCEL_AXIS_TYPE</span></a> `             ZK_ACCEL_AXIS_TYPE           `    
Accelerometer axis enum, used to set tap sensitivity.

<!-- -->

<span id="_CPPv324ZK_THRESHOLD_ACTION_TYPE"></span> <span id="_CPPv224ZK_THRESHOLD_ACTION_TYPE"></span> <span id="ZK_THRESHOLD_ACTION_TYPE"></span> <span id="zk__app__utils_8h_1a0176b010ec1f1afafc61cce5fc80279e" class="target"></span> *<span class="pre">typedef</span>* *<span class="pre">enum</span>* <a href="index.html#_CPPv424ZK_THRESHOLD_ACTION_TYPE" class="reference internal" title="ZK_THRESHOLD_ACTION_TYPE"><span class="pre">ZK_THRESHOLD_ACTION_TYPE</span></a> `             ZK_THRESHOLD_ACTION_TYPE           `    
Possible actions for threshold monitor functions.

<!-- -->

<span id="_CPPv319zkAccelAxisDataType"></span> <span id="_CPPv219zkAccelAxisDataType"></span> <span id="zkAccelAxisDataType"></span> <span id="zk__app__utils_8h_1a855b16a590ca334181860bf90a0c997f" class="target"></span> *<span class="pre">typedef</span>* *<span class="pre">struct</span>* <a href="index.html#_CPPv419zkAccelAxisDataType" class="reference internal" title="zkAccelAxisDataType"><span class="pre">zkAccelAxisDataType</span></a> `             zkAccelAxisDataType           `    
zkGetAccelerometer data output.

</div>

</div>

<div id="enums" class="section">

## Enums

<div class="breathe-sectiondef docutils container">

Enums

<span id="zk__app__utils_8h_1ad1e233079d658083389bcda3e66bffa7" class="target"></span> *<span class="pre">enum</span>* `             ZK_EC_KEY_TYPE           `    
Supported key types.

*Values:*

<span id="_CPPv3N14ZK_EC_KEY_TYPE11ZK_NISTP256E"></span> <span id="_CPPv2N14ZK_EC_KEY_TYPE11ZK_NISTP256E"></span> <span id="zk__app__utils_8h_1ad1e233079d658083389bcda3e66bffa7a4b1eb00eb760cf6137262448dd924f66" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_NISTP256               `    

<span id="_CPPv3N14ZK_EC_KEY_TYPE12ZK_SECP256R1E"></span> <span id="_CPPv2N14ZK_EC_KEY_TYPE12ZK_SECP256R1E"></span> <span id="zk__app__utils_8h_1ad1e233079d658083389bcda3e66bffa7a5bfe43be8b3a4df1be2416e607b99bf4" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_SECP256R1               `    

<span id="_CPPv3N14ZK_EC_KEY_TYPE12ZK_SECP256K1E"></span> <span id="_CPPv2N14ZK_EC_KEY_TYPE12ZK_SECP256K1E"></span> <span id="zk__app__utils_8h_1ad1e233079d658083389bcda3e66bffa7ae9bdfaebeae5590ee19daa5757d216d6" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_SECP256K1               `    

<!-- -->

<span id="zk__app__utils_8h_1abee5b47d3dde7bd528de628f5330919e" class="target"></span> *<span class="pre">enum</span>* `             ZK_ECDH_KDF_TYPE           `    
Supported ECDH key derivation function types.

*Values:*

<span id="_CPPv3N16ZK_ECDH_KDF_TYPE21ZK_KDF_RFC5869_SHA256E"></span> <span id="_CPPv2N16ZK_ECDH_KDF_TYPE21ZK_KDF_RFC5869_SHA256E"></span> <span id="zk__app__utils_8h_1abee5b47d3dde7bd528de628f5330919ea5c03f868fbfae1cabab5b843f5fce3db" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_KDF_RFC5869_SHA256               `    

<span id="_CPPv3N16ZK_ECDH_KDF_TYPE21ZK_KDF_RFC5869_SHA512E"></span> <span id="_CPPv2N16ZK_ECDH_KDF_TYPE21ZK_KDF_RFC5869_SHA512E"></span> <span id="zk__app__utils_8h_1abee5b47d3dde7bd528de628f5330919ea7eef6f090fa056c47366d3c887c72d80" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_KDF_RFC5869_SHA512               `    

<span id="_CPPv3N16ZK_ECDH_KDF_TYPE20ZK_KDF_PBKDF2_SHA256E"></span> <span id="_CPPv2N16ZK_ECDH_KDF_TYPE20ZK_KDF_PBKDF2_SHA256E"></span> <span id="zk__app__utils_8h_1abee5b47d3dde7bd528de628f5330919ea6218c948cfbd3276da30a47eac4c483f" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_KDF_PBKDF2_SHA256               `    

<span id="_CPPv3N16ZK_ECDH_KDF_TYPE20ZK_KDF_PBKDF2_SHA512E"></span> <span id="_CPPv2N16ZK_ECDH_KDF_TYPE20ZK_KDF_PBKDF2_SHA512E"></span> <span id="zk__app__utils_8h_1abee5b47d3dde7bd528de628f5330919ea0e80147f1a0b2f3256b6dd23809885d2" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_KDF_PBKDF2_SHA512               `    

<!-- -->

<span id="zk__app__utils_8h_1aedbdda1d06346a4a4c7b8b0a3ad70f61" class="target"></span> *<span class="pre">enum</span>* `             ZK_ACCEL_AXIS_TYPE           `    
Accelerometer axis enum, used to set tap sensitivity.

*Values:*

<span id="_CPPv3N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_XE"></span> <span id="_CPPv2N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_XE"></span> <span id="zk__app__utils_8h_1aedbdda1d06346a4a4c7b8b0a3ad70f61a059eeb9df0335701c7049e9cb75ed0da" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACCEL_AXIS_X               `    

<span id="_CPPv3N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_YE"></span> <span id="_CPPv2N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_YE"></span> <span id="zk__app__utils_8h_1aedbdda1d06346a4a4c7b8b0a3ad70f61adb91693f4203922414d4c8190667c999" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACCEL_AXIS_Y               `    

<span id="_CPPv3N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_ZE"></span> <span id="_CPPv2N18ZK_ACCEL_AXIS_TYPE15ZK_ACCEL_AXIS_ZE"></span> <span id="zk__app__utils_8h_1aedbdda1d06346a4a4c7b8b0a3ad70f61a25d262bab2dfd6ce743e06d49cc5b617" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACCEL_AXIS_Z               `    

<span id="_CPPv3N18ZK_ACCEL_AXIS_TYPE17ZK_ACCEL_AXIS_ALLE"></span> <span id="_CPPv2N18ZK_ACCEL_AXIS_TYPE17ZK_ACCEL_AXIS_ALLE"></span> <span id="zk__app__utils_8h_1aedbdda1d06346a4a4c7b8b0a3ad70f61a467e1c997db20ac4d04c81cd1ab92b0d" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACCEL_AXIS_ALL               `    

<!-- -->

<span id="zk__app__utils_8h_1a33917af8836db67d44da0de5f65c31f5" class="target"></span> *<span class="pre">enum</span>* `             ZK_THRESHOLD_ACTION_TYPE           `    
Possible actions for threshold monitor functions.

*Values:*

<span id="_CPPv3N24ZK_THRESHOLD_ACTION_TYPE14ZK_ACTION_NONEE"></span> <span id="_CPPv2N24ZK_THRESHOLD_ACTION_TYPE14ZK_ACTION_NONEE"></span> <span id="zk__app__utils_8h_1a33917af8836db67d44da0de5f65c31f5adbd51f81cd5f9e013a0024ec505ce737" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACTION_NONE               `    

<span id="_CPPv3N24ZK_THRESHOLD_ACTION_TYPE23ZK_ACTION_SELF_DESTRUCTE"></span> <span id="_CPPv2N24ZK_THRESHOLD_ACTION_TYPE23ZK_ACTION_SELF_DESTRUCTE"></span> <span id="zk__app__utils_8h_1a33917af8836db67d44da0de5f65c31f5a56e327600bf958958912d1788ce84842" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACTION_SELF_DESTRUCT               `    

<span id="_CPPv3N24ZK_THRESHOLD_ACTION_TYPE15ZK_ACTION_SLEEPE"></span> <span id="_CPPv2N24ZK_THRESHOLD_ACTION_TYPE15ZK_ACTION_SLEEPE"></span> <span id="zk__app__utils_8h_1a33917af8836db67d44da0de5f65c31f5a5079d5b11b4d84929cf5fa7861f42326" class="target"></span> *<span class="pre">enumerator</span>* `                 ZK_ACTION_SLEEP               `    

</div>

</div>

<div id="structs" class="section">

## Structs

<span id="structzk_accel_axis_data_type" class="target"></span> *<span class="pre">struct</span>* `           zkAccelAxisDataType         `    
zkGetAccelerometer data output.

<div class="breathe-sectiondef docutils container">

Public Members

<span id="_CPPv3N19zkAccelAxisDataType1gE"></span> <span id="_CPPv2N19zkAccelAxisDataType1gE"></span> <span id="zkAccelAxisDataType::g__double"></span> <span id="structzk_accel_axis_data_type_1a0b0263b57b8cfdee66bc8ba88832f30a" class="target"></span> <span class="pre">double</span> `                 g               `    
the axis reading in units of g-force

<!-- -->

<span id="_CPPv3N19zkAccelAxisDataType12tapDirectionE"></span> <span id="_CPPv2N19zkAccelAxisDataType12tapDirectionE"></span> <span id="zkAccelAxisDataType::tapDirection__i"></span> <span id="structzk_accel_axis_data_type_1af3b1fd34e286b65f39293b9035460966" class="target"></span> <span class="pre">int</span> `                 tapDirection               `    
the direction of the force along the axis which caused a tap event: -1 = negative +1 = positive 0 = did not cause a tap event

</div>

</div>

<div id="functions" class="section">

## Functions

<div class="breathe-sectiondef docutils container">

Zymkey Context

<span id="_CPPv36zkOpenP5zkCTX"></span> <span id="_CPPv26zkOpenP5zkCTX"></span> <span id="zkOpen__zkCTXP"></span> <span id="zk__app__utils_8h_1a48a562243cd2902b84bb7347a540b8d6" class="target"></span> <span class="pre">int</span> `             zkOpen           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> <span class="pre">\*</span> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Open a Zymkey context.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (output) returns a pointer to a Zymkey context.

<!-- -->

<span id="_CPPv37zkClose5zkCTX"></span> <span id="_CPPv27zkClose5zkCTX"></span> <span id="zkClose__zkCTX"></span> <span id="zk__app__utils_8h_1af427eb2bb73d78bb7acdf723ec99750a" class="target"></span> <span class="pre">int</span> `             zkClose           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Close a Zymkey context.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) The Zymkey context to close

</div>

<div class="breathe-sectiondef docutils container">

Random Number Generation

<span id="_CPPv320zkCreateRandDataFile5zkCTXPKci"></span> <span id="_CPPv220zkCreateRandDataFile5zkCTXPKci"></span> <span id="zkCreateRandDataFile__zkCTX.cCP.i"></span> <span id="zk__app__utils_8h_1a899ce7a6aebb542b5796fc027f021695" class="target"></span> <span class="pre">int</span> `             zkCreateRandDataFile           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">dst\_filename</span>* , <span class="pre">int</span> *<span class="pre">rdata\_sz</span>* <span class="sig-paren">)</span>    
Fill a file with random numbers.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       dst_filename                     `: (input) Absolute path name for the destination file.

-   `                       rdata_sz                     `: (input) The number of random bytes to generate.

<!-- -->

<span id="_CPPv314zkGetRandBytes5zkCTXPP7uint8_ti"></span> <span id="_CPPv214zkGetRandBytes5zkCTXPP7uint8_ti"></span> <span id="zkGetRandBytes__zkCTX.uint8_tPP.i"></span> <span id="zk__app__utils_8h_1a7b2e6031f9f72f3810c47202ca04b8b5" class="target"></span> <span class="pre">int</span> `             zkGetRandBytes           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">rdata</span>* , <span class="pre">int</span> *<span class="pre">rdata\_sz</span>* <span class="sig-paren">)</span>    
Get an array of random bytes.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       rdata                     `: (input) Pointer to a pointer of bytes.

-   `                       rdata_sz                     `: (input) The number of random bytes to generate.

</div>

<div class="breathe-sectiondef docutils container">

Lock Data

<span id="_CPPv313zkLockDataF2F5zkCTXPKcPKcb"></span> <span id="_CPPv213zkLockDataF2F5zkCTXPKcPKcb"></span> <span id="zkLockDataF2F__zkCTX.cCP.cCP.b"></span> <span id="zk__app__utils_8h_1aa0885303a749fe9c049f277ba8c11e21" class="target"></span> <span class="pre">int</span> `             zkLockDataF2F           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">src\_pt\_filename</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">dst\_ct\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Lock up source (plaintext) data from a file and store the results (ciphertext) in a destination file.

This function encrypts and signs a block of plaintext data from a file and stores the result in a destination file.

**Note**  
The zymkey has two keys that can be used for locking/unlocking operations, designated as ‘shared’ and ‘one-way’.

1.  The one-way key is meant to lock up data only on the local host computer. Data encrypted using this key cannot be exported and deciphered anywhere else.

2.  The shared key is meant for publishing data to other sources that have the capability to generate the shared key, such as the Zymbit cloud server.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_pt_filename                     `: (input) The absolute path to the file where the source (plaintext) data is located.

-   `                       dst_ct_filename                     `: (input) The absolute path to the file where the destination (ciphertext) data should be deposited.

-   `                       use_shared_key                     `: (input) This parameter specifies which key will be used to used to lock the data up. A value of ‘false’ specifies that the Zymkey will use the one-way key whereas ‘true’ specifies that the shared key will be used. Specify ‘true’ for publishing data to another that has the shared key (e.g. Zymbit cloud) and ‘False’ when the data is meant to reside exclusively withing the host computer.

<!-- -->

<span id="_CPPv313zkLockDataB2F5zkCTXPK7uint8_tiPKcb"></span> <span id="_CPPv213zkLockDataB2F5zkCTXPK7uint8_tiPKcb"></span> <span id="zkLockDataB2F__zkCTX.uint8_tCP.i.cCP.b"></span> <span id="zk__app__utils_8h_1ad18866d7ca51cacbc750f8a39e6e1e6c" class="target"></span> <span class="pre">int</span> `             zkLockDataB2F           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">src\_pt</span>* , <span class="pre">int</span> *<span class="pre">src\_pt\_sz</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">dst\_ct\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Lock up source (plaintext) data from a byte array and store the results (ciphertext) in a destination file.

This function encrypts and signs a block of binary plaintext data and stores the result in a destination file.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_pt                     `: (input) Binary plaintext source byte array.

-   `                       src_pt_sz                     `: (input) Size of plaintext source data.

-   `                       dst_ct_filename                     `: (input) The absolute path to the file where the destination (ciphertext) data should be deposited.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

<!-- -->

<span id="_CPPv313zkLockDataF2B5zkCTXPKcPP7uint8_tPib"></span> <span id="_CPPv213zkLockDataF2B5zkCTXPKcPP7uint8_tPib"></span> <span id="zkLockDataF2B__zkCTX.cCP.uint8_tPP.iP.b"></span> <span id="zk__app__utils_8h_1adfed9aa2d8ca8f631fb83ee51e82cb6b" class="target"></span> <span class="pre">int</span> `             zkLockDataF2B           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">src\_pt\_filename</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">dst\_ct</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">dst\_ct\_sz</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Lock up source (plaintext) data from a file and store the results (ciphertext) in a destination byte array.

This function encrypts and signs a block of plaintext data from a file and stores the result in a binary byte array.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_pt_filename                     `: (input) The absolute path to the file where the source (plaintext) data is located.

-   `                       dst_ct                     `: (output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.

-   `                       dst_ct_sz                     `: (output) A pointer to an integer which contains the size of the destination array.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

<!-- -->

<span id="_CPPv313zkLockDataB2B5zkCTXPK7uint8_tiPP7uint8_tPib"></span> <span id="_CPPv213zkLockDataB2B5zkCTXPK7uint8_tiPP7uint8_tPib"></span> <span id="zkLockDataB2B__zkCTX.uint8_tCP.i.uint8_tPP.iP.b"></span> <span id="zk__app__utils_8h_1a98ed878370908120142f5e353a369448" class="target"></span> <span class="pre">int</span> `             zkLockDataB2B           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">src\_pt</span>* , <span class="pre">int</span> *<span class="pre">src\_pt\_sz</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">dst\_ct</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">dst\_ct\_sz</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Lock up source (plaintext) data from a byte array and store the results (ciphertext) in a destination byte array.

This function encrypts and signs a block of plaintext data and stores the result in a binary byte array.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_pt                     `: (input) Binary plaintext source byte array.

-   `                       src_pt_sz                     `: (input) Size of plaintext source data.

-   `                       dst_ct                     `: (output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.

-   `                       dst_ct_sz                     `: (output) A pointer to an integer which contains the size of the destination array.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

</div>

<div class="breathe-sectiondef docutils container">

Unlock Data

<span id="_CPPv315zkUnlockDataF2F5zkCTXPKcPKcb"></span> <span id="_CPPv215zkUnlockDataF2F5zkCTXPKcPKcb"></span> <span id="zkUnlockDataF2F__zkCTX.cCP.cCP.b"></span> <span id="zk__app__utils_8h_1a4a8c161f1dfcdf08d741f5926d5f77f2" class="target"></span> <span class="pre">int</span> `             zkUnlockDataF2F           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">src\_ct\_filename</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">dst\_pt\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Unlock source (ciphertext) data from a file and store the results (plaintext) in a destination file.

This function verifies a locked object signature and decrypts the associated ciphertext data.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_ct_filename                     `: (input) The absolute path to the file where the source (ciphertext) data is located.

-   `                       dst_pt_filename                     `: (input) The absolute path to the file where the destination (plaintext) data should be deposited.

-   `                       use_shared_key                     `: (input) This parameter specifies which key will be used to used to lock the data up. A value of ‘false’ specifies that the Zymkey will use the one-way key whereas ‘true’ specifies that the shared key will be used. Specify ‘true’ for publishing data to another that has the shared key (e.g. Zymbit cloud) and ‘False’ when the data is meant to reside exclusively withing the host computer.

<!-- -->

<span id="_CPPv315zkUnlockDataB2F5zkCTXPK7uint8_tiPKcb"></span> <span id="_CPPv215zkUnlockDataB2F5zkCTXPK7uint8_tiPKcb"></span> <span id="zkUnlockDataB2F__zkCTX.uint8_tCP.i.cCP.b"></span> <span id="zk__app__utils_8h_1a2c63c6a31a2a9d787bb670c0e855795c" class="target"></span> <span class="pre">int</span> `             zkUnlockDataB2F           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">src\_ct</span>* , <span class="pre">int</span> *<span class="pre">src\_ct\_sz</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">dst\_pt\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Unlock source (ciphertext) data from a byte array and store the results (plaintext) in a destination file.

This function verifies a locked object signature and decrypts the associated ciphertext data.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_ct                     `: (input) Binary ciphertext source byte array.

-   `                       src_ct_sz                     `: (input) Size of ciphertext source data.

-   `                       dst_pt_filename                     `: (input) The absolute path to the file where the destination (plaintext) data should be deposited.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

<!-- -->

<span id="_CPPv315zkUnlockDataF2B5zkCTXPKcPP7uint8_tPib"></span> <span id="_CPPv215zkUnlockDataF2B5zkCTXPKcPP7uint8_tPib"></span> <span id="zkUnlockDataF2B__zkCTX.cCP.uint8_tPP.iP.b"></span> <span id="zk__app__utils_8h_1a7553aa0574bf2bfe13b7b32d2774baa8" class="target"></span> <span class="pre">int</span> `             zkUnlockDataF2B           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">src\_ct\_filename</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">dst\_pt</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">dst\_pt\_sz</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Unlock source (ciphertext) data from a file and store the results (plaintext) in a destination byte array.

This function verifies a locked object signature and decrypts the associated ciphertext data.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_ct_filename                     `: (input) The absolute path to the file where the source (ciphertext) data is located.

-   `                       dst_pt                     `: (output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.

-   `                       dst_pt_sz                     `: (output) A pointer to an integer which contains the size of the destination array.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

<!-- -->

<span id="_CPPv315zkUnlockDataB2B5zkCTXPK7uint8_tiPP7uint8_tPib"></span> <span id="_CPPv215zkUnlockDataB2B5zkCTXPK7uint8_tiPP7uint8_tPib"></span> <span id="zkUnlockDataB2B__zkCTX.uint8_tCP.i.uint8_tPP.iP.b"></span> <span id="zk__app__utils_8h_1acfe501ceb80ecb6b51385a5573b4da3a" class="target"></span> <span class="pre">int</span> `             zkUnlockDataB2B           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">src\_ct</span>* , <span class="pre">int</span> *<span class="pre">src\_ct\_sz</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">dst\_pt</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">dst\_pt\_sz</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="sig-paren">)</span>    
Unlock source (ciphertext) data from a byte array and store the results (plaintext) in a destination byte array.

This function verifies a locked object signature and decrypts the associated ciphertext data.

**Note**  
(See zkLockDataF2F for notes about keys)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       src_ct                     `: (input) Binary ciphertext source byte array.

-   `                       src_ct_sz                     `: (input) Size of ciphertext source data.

-   `                       dst_pt                     `: (output) A pointer to a pointer to an array of unsigned bytes created by this function. This pointer must be freed by the application when no longer needed.

-   `                       dst_pt_sz                     `: (output) A pointer to an integer which contains the size of the destination array.

-   `                       use_shared_key                     `: (input) Specifies if shared key is to be used. See zkLockDataF2F.

</div>

<div class="breathe-sectiondef docutils container">

ECDSA

<span id="_CPPv323zkGenECDSASigFromDigest5zkCTXPK7uint8_tiPP7uint8_tPi"></span> <span id="_CPPv223zkGenECDSASigFromDigest5zkCTXPK7uint8_tiPP7uint8_tPi"></span> <span id="zkGenECDSASigFromDigest__zkCTX.uint8_tCP.i.uint8_tPP.iP"></span> <span id="zk__app__utils_8h_1a803174f6dbeba5d1e59d63bd127cc746" class="target"></span> <span class="pre">int</span> `             zkGenECDSASigFromDigest           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">digest</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">sig</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">sig\_sz</span>* <span class="sig-paren">)</span>    
Generate a signature using the Zymkey’s ECDSA private key.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       digest                     `: (input) This parameter contains the digest of the data that will be used to generate the signature.

-   `                       slot                     `: (input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.

-   `                       sig                     `: (output) A pointer to a pointer to an array of unsigned bytes which contains the generated signature. This pointer is created by this function and must be freed by the application when no longer needed.

-   `                       sig_sz                     `: (output) A pointer to an integer which contains the size of the signature.

<!-- -->

<span id="_CPPv326zkVerifyECDSASigFromDigest5zkCTXPK7uint8_tiPK7uint8_ti"></span> <span id="_CPPv226zkVerifyECDSASigFromDigest5zkCTXPK7uint8_tiPK7uint8_ti"></span> <span id="zkVerifyECDSASigFromDigest__zkCTX.uint8_tCP.i.uint8_tCP.i"></span> <span id="zk__app__utils_8h_1af2fff1ad2dc2962c075d86e4c7f32910" class="target"></span> <span class="pre">int</span> `             zkVerifyECDSASigFromDigest           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">digest</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">sig</span>* , <span class="pre">int</span> *<span class="pre">sig\_sz</span>* <span class="sig-paren">)</span>    
Verify a signature using one of the Zymkey’s public keys.

Verify a signature using an internal public key from the Zymkey private/public key store.

**Return**  
0 for signature verification failed, 1 for signature verification passed, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       digest                     `: (input) This parameter contains the digest of the data that will be used to generate the signature.

-   `                       pubkey_slot                     `: (input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.

-   `                       sig                     `: (input) Array of bytes which contains the signature.

-   `                       sig_sz                     `: (input) Size of signature.

<!-- -->

<span id="_CPPv344zkVerifyECDSASigFromDigestWithForeignKeySlot5zkCTXPK7uint8_tiPK7uint8_ti"></span> <span id="_CPPv244zkVerifyECDSASigFromDigestWithForeignKeySlot5zkCTXPK7uint8_tiPK7uint8_ti"></span> <span id="zkVerifyECDSASigFromDigestWithForeignKeySlot__zkCTX.uint8_tCP.i.uint8_tCP.i"></span> <span id="zk__app__utils_8h_1ac01a977ceac50cd7a4fb8ddb1672c7b4" class="target"></span> <span class="pre">int</span> `             zkVerifyECDSASigFromDigestWithForeignKeySlot           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">digest</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">sig</span>* , <span class="pre">int</span> *<span class="pre">sig\_sz</span>* <span class="sig-paren">)</span>    
Verify a signature using one of the Zymkey’s foreign public keys.

Verify a signature using a public key from the Zymkey foreign key store.

**Return**  
0 for signature verification failed, 1 for signature verification passed, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       digest                     `: (input) This parameter contains the digest of the data that will be used to generate the signature.

-   `                       pubkey_slot                     `: (input) The key slot to generate a signature from. This parameter is only valid for Zymkey models 4i and beyond.

-   `                       sig                     `: (input) Array of bytes which contains the signature.

-   `                       sig_sz                     `: (input) Size of signature.

</div>

<div class="breathe-sectiondef docutils container">

ECDH and KDF

<span id="_CPPv311zkDoRawECDH5zkCTXiPK7uint8_tiPP7uint8_t"></span> <span id="_CPPv211zkDoRawECDH5zkCTXiPK7uint8_tiPP7uint8_t"></span> <span id="zkDoRawECDH__zkCTX.i.uint8_tCP.i.uint8_tPP"></span> <span id="zk__app__utils_8h_1adc168549885a25d8967e6f0537ea0253" class="target"></span> <span class="pre">int</span> `             zkDoRawECDH           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">peer\_pubkey</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_sz</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">pre\_master\_secret</span>* <span class="sig-paren">)</span>    
Perform a raw ECDH operation. (model &gt;= HSM6)

Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is presented in the call.

**Return**  
0 for success, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                       peer_pubkey                     `: (input) The peer public key.

-   `                       peer_pubkey_sz                     `: (input) Size of the peer public key.

-   `                       pre_master_secret                     `: (output) returned pointer to the pre-master secret

<!-- -->

<span id="_CPPv328zkDoRawECDHWithIntPeerPubkey5zkCTXiibPP7uint8_t"></span> <span id="_CPPv228zkDoRawECDHWithIntPeerPubkey5zkCTXiibPP7uint8_t"></span> <span id="zkDoRawECDHWithIntPeerPubkey__zkCTX.i.i.b.uint8_tPP"></span> <span id="zk__app__utils_8h_1ac1222347f2bd12f688db3a5bbbb83f97" class="target"></span> <span class="pre">int</span> `             zkDoRawECDHWithIntPeerPubkey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">peer\_pubkey\_slot\_is\_foreign</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">pre\_master\_secret</span>* <span class="sig-paren">)</span>    
Perform a raw ECDH operation. (model &gt;= HSM6)

Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is referenced from the zymkey internal key store.

**Return**  
0 for success, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                       peer_pubkey_slot                     `: (input) The peer public key slot where the peer public key is to be found.

-   `                       peer_pubkey_slot_is_foreign                     `: (input) If true, the peer public key slot is found in the foreign public keyring.

-   `                       pre_master_secret                     `: (output) returned pointer to the pre-master secret

<!-- -->

<span id="_CPPv314zkDoECDHAndKDF5zkCTX16ZK_ECDH_KDF_TYPEiPK7uint8_tiPK7uint8_tiPK7uint8_tiiiPP7uint8_t"></span> <span id="_CPPv214zkDoECDHAndKDF5zkCTX16ZK_ECDH_KDF_TYPEiPK7uint8_tiPK7uint8_tiPK7uint8_tiiiPP7uint8_t"></span> <span id="zkDoECDHAndKDF__zkCTX.ZK_ECDH_KDF_TYPE.i.uint8_tCP.i.uint8_tCP.i.uint8_tCP.i.i.i.uint8_tPP"></span> <span id="zk__app__utils_8h_1a772ea57e2db2aeab6d3e30e32c1af3b9" class="target"></span> <span class="pre">int</span> `             zkDoECDHAndKDF           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv416ZK_ECDH_KDF_TYPE" class="reference internal" title="ZK_ECDH_KDF_TYPE"><span class="pre">ZK_ECDH_KDF_TYPE</span></a> *<span class="pre">kdf\_type</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">peer\_pubkey</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_sz</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">salt</span>* , <span class="pre">int</span> *<span class="pre">salt\_sz</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">info</span>* , <span class="pre">int</span> *<span class="pre">info\_sz</span>* , <span class="pre">int</span> *<span class="pre">num\_iterations</span>* , <span class="pre">int</span> *<span class="pre">derived\_key\_sz</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">derived\_key</span>* <span class="sig-paren">)</span>    
Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6)

Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is presented in the call.

**Return**  
0 for success, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                       peer_pubkey                     `: (input) The peer public key.

-   `                       peer_pubkey_sz                     `: (input) Size of the peer public key.

-   `                       salt                     `: (input) The salt to use for the selected KDF.

-   `                       salt_sz                     `: (input) The salt size. Must be less than or equal to 128 bytes.

-   `                       info                     `: (input) The info field to use for RFC 5869. Ignored for PBKDF2.

-   `                       info_sz                     `: (input) The size of the info parameter. Must be less than or equal to 128 bytes.

-   `                       num_iterations                     `: (input) Number of iterations to carry out (PBKDF only)

-   `                       derived_key_sz                     `: (input) The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).

-   `                       derived_key                     `: (output) returned pointer to the derived key.

<!-- -->

<span id="_CPPv331zkDoECDHAndKDFWithIntPeerPubkey5zkCTX16ZK_ECDH_KDF_TYPEiibPK7uint8_tiPK7uint8_tiiiPP7uint8_t"></span> <span id="_CPPv231zkDoECDHAndKDFWithIntPeerPubkey5zkCTX16ZK_ECDH_KDF_TYPEiibPK7uint8_tiPK7uint8_tiiiPP7uint8_t"></span> <span id="zkDoECDHAndKDFWithIntPeerPubkey__zkCTX.ZK_ECDH_KDF_TYPE.i.i.b.uint8_tCP.i.uint8_tCP.i.i.i.uint8_tPP"></span> <span id="zk__app__utils_8h_1a38ce470571919d1fc26e877b4c1edc16" class="target"></span> <span class="pre">int</span> `             zkDoECDHAndKDFWithIntPeerPubkey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv416ZK_ECDH_KDF_TYPE" class="reference internal" title="ZK_ECDH_KDF_TYPE"><span class="pre">ZK_ECDH_KDF_TYPE</span></a> *<span class="pre">kdf\_type</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">peer\_pubkey\_slot\_is\_foreign</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">salt</span>* , <span class="pre">int</span> *<span class="pre">salt\_sz</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">info</span>* , <span class="pre">int</span> *<span class="pre">info\_sz</span>* , <span class="pre">int</span> *<span class="pre">num\_iterations</span>* , <span class="pre">int</span> *<span class="pre">derived\_key\_sz</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">derived\_key</span>* <span class="sig-paren">)</span>    
Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6)

Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is referenced from the zymkey internal key store.

**Return**  
0 for success, less than 0 for general failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                       peer_pubkey_slot                     `: (input) The peer public key slot where the peer public key is to be found.

-   `                       peer_pubkey_slot_is_foreign                     `: (input) If true, the peer public key slot is found in the foreign public keyring.

-   `                       salt                     `: (input) The salt to use for the selected KDF.

-   `                       salt_sz                     `: (input) The salt size. Must be less than or equal to 128 bytes.

-   `                       info                     `: (input) The info field to use for RFC 5869. Ignored for PBKDF2.

-   `                       info_sz                     `: (input) The size of the info parameter. Must be less than or equal to 128 bytes.

-   `                       num_iterations                     `: (input) Number of iterations to carry out (PBKDF only)

-   `                       derived_key_sz                     `: (input) The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).

-   `                       derived_key                     `: (output) returned pointer to the derived key.

</div>

<div class="breathe-sectiondef docutils container">

Key Management

<span id="_CPPv322zkSaveECDSAPubKey2File5zkCTXPKci"></span> <span id="_CPPv222zkSaveECDSAPubKey2File5zkCTXPKci"></span> <span id="zkSaveECDSAPubKey2File__zkCTX.cCP.i"></span> <span id="zk__app__utils_8h_1a2843e04c508eb3b242bf3ec2a10b90bb" class="target"></span> <span class="pre">int</span> `             zkSaveECDSAPubKey2File           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">filename</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* <span class="sig-paren">)</span>    
\[DEPRECATED\] Use zkExportPubKey2File. Store the public key to a host file in PEM format.

This function is useful for generating Certificate Signing Requests (CSR).

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       filename                     `: (input) Filename where PEM formatted public key is to be stored.

-   `                       slot                     `: (input) The key slot to retrieve. Only valid for model 4i and above.

<!-- -->

<span id="_CPPv319zkExportPubKey2File5zkCTXPKcib"></span> <span id="_CPPv219zkExportPubKey2File5zkCTXPKcib"></span> <span id="zkExportPubKey2File__zkCTX.cCP.i.b"></span> <span id="zk__app__utils_8h_1a6446ab63ac57d94a77e5c6373ee24399" class="target"></span> <span class="pre">int</span> `             zkExportPubKey2File           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">filename</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="sig-paren">)</span>    
Store the public key to a host file in PEM format.

This function is useful for generating Certificate Signing Requests (CSR).

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       filename                     `: (input) Filename where PEM formatted public key is to be stored.

-   `                       pubkey_slot                     `: (input) The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.

-   `                       slot_is_foreign                     `: (input) If true, designates the pubkey slot to come from the foreign keystore. (model &gt;= HSM6)

<!-- -->

<span id="_CPPv316zkGetECDSAPubKey5zkCTXPP7uint8_tPii"></span> <span id="_CPPv216zkGetECDSAPubKey5zkCTXPP7uint8_tPii"></span> <span id="zkGetECDSAPubKey__zkCTX.uint8_tPP.iP.i"></span> <span id="zk__app__utils_8h_1a2c71f05a6b2b14d0440b9d3c81b41bfa" class="target"></span> <span class="pre">int</span> `             zkGetECDSAPubKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">pk</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">pk\_sz</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* <span class="sig-paren">)</span>    
\[DEPRECATED\] Use zkExportPubKey. Gets the public key and stores in a byte array created by this function.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       pk                     `: (output) Pointer to a pointer created by this function which contains the public key.

-   `                       pk_sz                     `: (output) Pointer to an integer which contains the size of the public key.

-   `                       slot                     `: (input) The key slot to retrieve. Only valid for model 4i and above.

<!-- -->

<span id="_CPPv314zkExportPubKey5zkCTXPP7uint8_tPiib"></span> <span id="_CPPv214zkExportPubKey5zkCTXPP7uint8_tPiib"></span> <span id="zkExportPubKey__zkCTX.uint8_tPP.iP.i.b"></span> <span id="zk__app__utils_8h_1a8f43ab1e3cfd0429a33f6e1292dced00" class="target"></span> <span class="pre">int</span> `             zkExportPubKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">pk</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">pk\_sz</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="sig-paren">)</span>    
Gets the public key and stores in a byte array created by this function.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       pk                     `: (output) Pointer to a pointer created by this function which contains the public key.

-   `                       pk_sz                     `: (output) Pointer to an integer which contains the size of the public key.

-   `                       pubkey_slot                     `: (input) The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.

-   `                       slot_is_foreign                     `: (input) If true, designates the pubkey slot to come from the foreign keystore (model &gt;= HSM6).

<!-- -->

<span id="_CPPv319zkGetAllocSlotsList5zkCTXbPiPPiPi"></span> <span id="_CPPv219zkGetAllocSlotsList5zkCTXbPiPPiPi"></span> <span id="zkGetAllocSlotsList__zkCTX.b.iP.iPP.iP"></span> <span id="zk__app__utils_8h_1ac4f620af7fafbf32fd820f6db8861e5f" class="target"></span> <span class="pre">int</span> `             zkGetAllocSlotsList           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">bool</span> *<span class="pre">is\_foreign</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">max\_num\_keys</span>* , <span class="pre">int</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">alloc\_key\_list</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">alloc\_key\_list\_sz</span>* <span class="sig-paren">)</span>    
Get the list of allocated keys (model &gt;= HSM6).

This function returns a list of all allocated key slots.

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       is_foreign                     `: (input) if true, retrieve allocation list of the foreign keys

-   `                       max_num_keys                     `: (input) retrieves the key pool size

-   `                       alloc_key_list                     `: (output) a pointer to an array of integers provided by this function to the caller

-   `                       alloc_key_list_sz                     `: (output) a pointer to an integer which contains the size of the returned key list

<!-- -->

<span id="_CPPv320zkStoreForeignPubKey5zkCTX14ZK_EC_KEY_TYPEP7uint8_ti"></span> <span id="_CPPv220zkStoreForeignPubKey5zkCTX14ZK_EC_KEY_TYPEP7uint8_ti"></span> <span id="zkStoreForeignPubKey__zkCTX.ZK_EC_KEY_TYPE.uint8_tP.i"></span> <span id="zk__app__utils_8h_1a558efd96315d7e1e7245e52cdfa0bd0e" class="target"></span> <span class="pre">int</span> `             zkStoreForeignPubKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> *<span class="pre">pk\_type</span>* , <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">pk</span>* , <span class="pre">int</span> *<span class="pre">pk\_sz</span>* <span class="sig-paren">)</span>    
Store a new foreign public key in Zymkey. (model &gt;= HSM6)

This function stores a new foreign public key in the Zymkey public key ring. This public key can be used for signature verification in use cases where it is desirable to hide the public key.

**Return**  
allocated slot number in foreign key store, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       pk_type                     `: (input) The type of the public key.

-   `                       pk                     `: (input) Pointer to the public key to store.

-   `                       pk_sz                     `: (input) The public key size.

<!-- -->

<span id="_CPPv321zkDisablePubKeyExport5zkCTXib"></span> <span id="_CPPv221zkDisablePubKeyExport5zkCTXib"></span> <span id="zkDisablePubKeyExport__zkCTX.i.b"></span> <span id="zk__app__utils_8h_1a156c256f416f2e5b466fe7379d64899b" class="target"></span> <span class="pre">int</span> `             zkDisablePubKeyExport           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="sig-paren">)</span>    
Prevent a public key from being exported to the host. (model &gt;= HSM6)

This function prevents the public key at the specified slot from being exported to the host using the API zkExportPubKey.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       pubkey_slot                     `: (input) The key slot to disable pubkey export on.

-   `                       slot_is_foreign                     `: (input) The slot parameter refers to a slot in the foreign keyring.

<!-- -->

<span id="_CPPv312zkGenKeyPair5zkCTX14ZK_EC_KEY_TYPE"></span> <span id="_CPPv212zkGenKeyPair5zkCTX14ZK_EC_KEY_TYPE"></span> <span id="zkGenKeyPair__zkCTX.ZK_EC_KEY_TYPE"></span> <span id="zk__app__utils_8h_1a7d440c70c23f8fe1144a4a95b2ada1e3" class="target"></span> <span class="pre">int</span> `             zkGenKeyPair           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> *<span class="pre">type</span>* <span class="sig-paren">)</span>    
Generate a new persistent key pair. (model &gt;= HSM6)

This function generates a new key pair of the specified type and store it persistently. This key pair cannot be used as part of the zymkey’s digital wallet operations.

**Return**  
allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       type                     `: (input) The type of key to generate (ZK\_EC\_KEY\_TYPE).

<!-- -->

<span id="_CPPv321zkGenEphemeralKeyPair5zkCTX14ZK_EC_KEY_TYPE"></span> <span id="_CPPv221zkGenEphemeralKeyPair5zkCTX14ZK_EC_KEY_TYPE"></span> <span id="zkGenEphemeralKeyPair__zkCTX.ZK_EC_KEY_TYPE"></span> <span id="zk__app__utils_8h_1ab97b544f292dae99810a4d2128a0ba53" class="target"></span> <span class="pre">int</span> `             zkGenEphemeralKeyPair           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> *<span class="pre">type</span>* <span class="sig-paren">)</span>    
Generate an ephemeral key pair. (model &gt;= HSM6)

This function generates an ephemeral key pair of the specified type. Ephemeral key pairs are useful when performing ECDH for time-of-flight encryption. Only one ephemeral key slot is available and is not persistent between reboots.

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       type                     `: (input) The type of key to generate (ZK\_EC\_KEY\_TYPE).

<!-- -->

<span id="_CPPv311zkRemoveKey5zkCTXib"></span> <span id="_CPPv211zkRemoveKey5zkCTXib"></span> <span id="zkRemoveKey__zkCTX.i.b"></span> <span id="zk__app__utils_8h_1a68c45329be1247878b4d0d9a690e2915" class="target"></span> <span class="pre">int</span> `             zkRemoveKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="sig-paren">)</span>    
Remove a key pair or a foreign public key. (model &gt;= HSM6)

This function deletes a key pair or a foreign public key from persistent storage.

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) The slot

-   `                       slot_is_foreign                     `: (input) The slot parameter refers to a slot in the foreign keyring.

<!-- -->

<span id="_CPPv324zkInvalidateEphemeralKey5zkCTX"></span> <span id="_CPPv224zkInvalidateEphemeralKey5zkCTX"></span> <span id="zkInvalidateEphemeralKey__zkCTX"></span> <span id="zk__app__utils_8h_1a6d74d4a5fd5748dd90c30c372bf23e2b" class="target"></span> <span class="pre">int</span> `             zkInvalidateEphemeralKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Invalidate the ephemeral key. (model &gt;= HSM6)

This function invalidates the ephemeral key.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

</div>

<div class="breathe-sectiondef docutils container">

Digital Wallet (BIP32/39/44)

<span id="_CPPv321zkGenWalletMasterSeed5zkCTX14ZK_EC_KEY_TYPEPKcPK7uint8_tiPPc"></span> <span id="_CPPv221zkGenWalletMasterSeed5zkCTX14ZK_EC_KEY_TYPEPKcPK7uint8_tiPPc"></span> <span id="zkGenWalletMasterSeed__zkCTX.ZK_EC_KEY_TYPE.cCP.uint8_tCP.i.cPP"></span> <span id="zk__app__utils_8h_1a3c5b9d59df297fd5a20c8f098279c4e0" class="target"></span> <span class="pre">int</span> `             zkGenWalletMasterSeed           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> *<span class="pre">type</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">wallet\_name</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">master\_generator\_key</span>* , <span class="pre">int</span> *<span class="pre">master\_generator\_key\_size</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">bip39\_mnemonic</span>* <span class="sig-paren">)</span>    
Generate master seed to start a new blockchain wallet. (model &gt;= HSM6)

This function generates a new blockchain master seed for creating a new wallet.

**Return**  
allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       type                     `: (input) The type of key to generate (ZK\_EC\_KEY\_TYPE).

-   `                       wallet_name                     `: (input) An ASCII string which contains the name of the wallet.

-   `                       master_generator_key                     `: (input) The master generator key used to help generate the master seed.

-   `                       master_generator_key_size                     `: (input) The size of the master generator key. If 0, no master generator key is used in the formulation of the master seed.

-   `                       bip39_mnemonic                     `: (output) A pointer to the bip39 mnemonic sentence. If NULL, the master seed is generated per BIP32. Otherwise, the master seed is generated per BIP39 and the mnemonic sentence is returned in this parameter. The string is null terminated and encoded in UTF-8 NFKD from the BIP39 Enlish dictionary.

<!-- -->

<span id="_CPPv319zkGenWalletChildKey5zkCTXi8uint32_tb"></span> <span id="_CPPv219zkGenWalletChildKey5zkCTXi8uint32_tb"></span> <span id="zkGenWalletChildKey__zkCTX.i.uint32_t.b"></span> <span id="zk__app__utils_8h_1aaab64bbea25d2d10f7f889ff24d0080b" class="target"></span> <span class="pre">int</span> `             zkGenWalletChildKey           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">parent\_key\_slot</span>* , <span class="pre">uint32\_t</span> *<span class="pre">index</span>* , <span class="pre">bool</span> *<span class="pre">is\_hardened</span>* <span class="sig-paren">)</span>    
Generate child key from a parent key in a blockchain wallet . (model &gt;= HSM6)

This function generates a new child key descendent from a specified parent key in a wallet.

**Return**  
allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       parent_key_slot                     `: (input) The parent key slot to base the child key derivation on.

-   `                       index                     `: (input) The index of the child seed. This determines the node address as well as the outcome of the key generation.

-   `                       is_hardened                     `: (input) If true, a hardened key is generated.

<!-- -->

<span id="_CPPv337zkRestoreWalletMasterSeedFromMnemonic5zkCTX14ZK_EC_KEY_TYPEPKcPK7uint8_tiPc"></span> <span id="_CPPv237zkRestoreWalletMasterSeedFromMnemonic5zkCTX14ZK_EC_KEY_TYPEPKcPK7uint8_tiPc"></span> <span id="zkRestoreWalletMasterSeedFromMnemonic__zkCTX.ZK_EC_KEY_TYPE.cCP.uint8_tCP.i.cP"></span> <span id="zk__app__utils_8h_1a89be1f197af0af5fbd69dc860dde49c4" class="target"></span> <span class="pre">int</span> `             zkRestoreWalletMasterSeedFromMnemonic           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv414ZK_EC_KEY_TYPE" class="reference internal" title="ZK_EC_KEY_TYPE"><span class="pre">ZK_EC_KEY_TYPE</span></a> *<span class="pre">type</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">wallet\_name</span>* , *<span class="pre">const</span>* <span class="pre">uint8\_t</span> <span class="pre">\*</span> *<span class="pre">master\_generator\_key</span>* , <span class="pre">int</span> *<span class="pre">master\_generator\_key\_size</span>* , <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">bip39\_mnemonic</span>* <span class="sig-paren">)</span>    
Restore a master seed from a BIP39 mnemonic and a master generator key. (model &gt;= HSM6)

This function restores a wallet master seed from a supplied BIP39 mnemonic string and a master generator key.

**Return**  
allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       type                     `: (input) The type of key to generate (ZK\_KEY\_TYPE).

-   `                       wallet_name                     `: (input) An ASCII string which contains the name of the wallet.

-   `                       master_generator_key                     `: (input) The master generator key used to help generate the master seed.

-   `                       master_generator_key_size                     `: (input) The size of the master generator key. If 0, no master generator key is used in the formulation of the master seed.

-   `                       bip39_mnemonic                     `: (input) The bip39\_mnemonic string, null terminated and UTF-8 NFKD encoded from the BIP39 English dictionary.

<!-- -->

<span id="_CPPv330zkGetWalletNodeAddrFromKeySlot5zkCTXiPPcPPcPi"></span> <span id="_CPPv230zkGetWalletNodeAddrFromKeySlot5zkCTXiPPcPPcPi"></span> <span id="zkGetWalletNodeAddrFromKeySlot__zkCTX.i.cPP.cPP.iP"></span> <span id="zk__app__utils_8h_1a5d6c1880618a06e360fad5f3b6b554a9" class="target"></span> <span class="pre">int</span> `             zkGetWalletNodeAddrFromKeySlot           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">node\_addr</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">wallet\_name</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">master\_seed\_slot</span>* <span class="sig-paren">)</span>    
Derive the node address from a key slot number. (model &gt;= HSM6)

This function derives a node address from an input key slot number.

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       slot                     `: (input) A key slot number that is part of a digital wallet.

-   `                       node_addr                     `: (output) A pointer to a pointer which will contain the node address in ASCII.

-   `                       wallet_name                     `: (output) A pointer to a pointer which will contain the wallet name in ASCII. If NULL, this parameter will not be retrieved.

-   `                       master_seed_slot                     `: (output) A pointer to an integer which will contain the master seed key slot. If NULL, this parameter will not be retrieved.

<!-- -->

<span id="_CPPv330zkGetWalletKeySlotFromNodeAddr5zkCTXPKcPKciPi"></span> <span id="_CPPv230zkGetWalletKeySlotFromNodeAddr5zkCTXPKcPKciPi"></span> <span id="zkGetWalletKeySlotFromNodeAddr__zkCTX.cCP.cCP.i.iP"></span> <span id="zk__app__utils_8h_1ab8d71adf4a175f319cc56ce83fc745d0" class="target"></span> <span class="pre">int</span> `             zkGetWalletKeySlotFromNodeAddr           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">node\_addr</span>* , *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> *<span class="pre">wallet\_name</span>* , <span class="pre">int</span> *<span class="pre">master\_seed\_slot</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">slot</span>* <span class="sig-paren">)</span>    
Derive the slot address from a node address. (model &gt;= HSM6)

This function returns the slot number associated with a given node address.

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       node_addr                     `: (input) A pointer which contains the node address in ASCII.

-   `                       wallet_name                     `: (input) A pointer which contains the wallet name in ASCII, used to identify the wallet identity. If desired, this parameter can be NULL and the master\_seed\_slot parameter can be specified instead.

-   `                       master_seed_slot                     `: (input) The master seed slot. Can be used to specify the wallet identity instead of the wallet name.

-   `                       slot                     `: (output) A pointer to an integer which contains the associated key slot.

</div>

<div class="breathe-sectiondef docutils container">

Perimeter Detect

<span id="_CPPv325zkSetPerimeterEventAction5zkCTXi8uint32_t"></span> <span id="_CPPv225zkSetPerimeterEventAction5zkCTXi8uint32_t"></span> <span id="zkSetPerimeterEventAction__zkCTX.i.uint32_t"></span> <span id="zk__app__utils_8h_1a099e0f45cd4ddeaddc9089ee1ee4618f" class="target"></span> <span class="pre">int</span> `             zkSetPerimeterEventAction           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">channel</span>* , <span class="pre">uint32\_t</span> *<span class="pre">action\_flags</span>* <span class="sig-paren">)</span>    
Set perimeter breach action.

This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:

-   Notify host

-   Zymkey self-destruct

    **Return**  
    0 for success, less than 0 for failure.

    **Parameters**  
    -   `                           channel                         `: (input) The channel (0 or 1) that the action flags will be applied to.

    -   `                           action_flags                         `: (input) The actions to apply to the perimeter event channel:

        -   Notify (ZK\_PERIMETER\_EVENT\_ACTION\_NOTIFY)

        -   Self-destruct (ZK\_PERIMETER\_EVENT\_ACTION\_SELF\_DESTRUCT)

<!-- -->

<span id="_CPPv335zkSetDigitalPerimeterDetectLPPeriod5zkCTXi"></span> <span id="_CPPv235zkSetDigitalPerimeterDetectLPPeriod5zkCTXi"></span> <span id="zkSetDigitalPerimeterDetectLPPeriod__zkCTX.i"></span> <span id="zk__app__utils_8h_1af3e8e23e3a8cdbf5ec95f115fb154915" class="target"></span> <span class="pre">int</span> `             zkSetDigitalPerimeterDetectLPPeriod           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">lp\_period</span>* <span class="sig-paren">)</span>    
Set the low power period (model &gt;= HSM6).

This function sets low power period on the digital perimeter detect

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       lp_period                     `: (input) low power period in microseconds

<!-- -->

<span id="_CPPv336zkSetDigitalPerimeterDetectLPMaxBits5zkCTXi"></span> <span id="_CPPv236zkSetDigitalPerimeterDetectLPMaxBits5zkCTXi"></span> <span id="zkSetDigitalPerimeterDetectLPMaxBits__zkCTX.i"></span> <span id="zk__app__utils_8h_1a6e29752c07d3f08810b1ef78162e00d2" class="target"></span> <span class="pre">int</span> `             zkSetDigitalPerimeterDetectLPMaxBits           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">max\_num\_bits</span>* <span class="sig-paren">)</span>    
Set the low power max number of bits (model &gt;= HSM6).

This function sets low power max number of bits on the digital perimeter detect

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       max_num_bits                     `: (input) max number of bits

<!-- -->

<span id="_CPPv333zkSetDigitalPerimeterDetectDelays5zkCTXii"></span> <span id="_CPPv233zkSetDigitalPerimeterDetectDelays5zkCTXii"></span> <span id="zkSetDigitalPerimeterDetectDelays__zkCTX.i.i"></span> <span id="zk__app__utils_8h_1a32d0c0a1960f271c4c37b173fd6f6fde" class="target"></span> <span class="pre">int</span> `             zkSetDigitalPerimeterDetectDelays           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">min\_delay\_ns</span>* , <span class="pre">int</span> *<span class="pre">max\_delay\_ns</span>* <span class="sig-paren">)</span>    
Set the delays (model &gt;= HSM6).

This function sets delays on the digital perimeter detect

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       min_delay_ns                     `: (input) minimum delay in nanoseconds

-   `                       max_delay_ns                     `: (input) maximum delay in nanoseconds

<!-- -->

<span id="_CPPv323zkWaitForPerimeterEvent5zkCTX8uint32_t"></span> <span id="_CPPv223zkWaitForPerimeterEvent5zkCTX8uint32_t"></span> <span id="zkWaitForPerimeterEvent__zkCTX.uint32_t"></span> <span id="zk__app__utils_8h_1a8ee9b92164a922565327aae70ea12578" class="target"></span> <span class="pre">int</span> `             zkWaitForPerimeterEvent           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint32\_t</span> *<span class="pre">timeout\_ms</span>* <span class="sig-paren">)</span>    
Wait for a perimeter breach event to be detected.

This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero. Note that, in order to receive perimeter events, the zymkey must have been configured to notify the host on either or both of the perimeter detect channels via a call to “zkSetPerimeterEventAction”.

**Return**  
0 for success, less than 0 for failure, -ETIMEDOUT when no perimeter events detected within the specified timeout

**Parameters**  
-   `                       timeout_ms                     `: (input) The maximum amount of time in milliseconds to wait for a perimeter event to arrive.

<!-- -->

<span id="_CPPv324zkGetPerimeterDetectInfo5zkCTXPP8uint32_tPi"></span> <span id="_CPPv224zkGetPerimeterDetectInfo5zkCTXPP8uint32_tPi"></span> <span id="zkGetPerimeterDetectInfo__zkCTX.uint32_tPP.iP"></span> <span id="zk__app__utils_8h_1ac21dfdb0c57067772fe45c6481551029" class="target"></span> <span class="pre">int</span> `             zkGetPerimeterDetectInfo           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint32\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">timestamps\_sec</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">num\_timestamps</span>* <span class="sig-paren">)</span>    
Get current perimeter detect info.

This function gets the timestamp of the first perimeter detect event for the given channel

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       timestamps_sec                     `: (output) The timestamps for when any breach occurred. The index in this array corresponds to the channel number used by zkSetPerimeterEventAction. A 0 value means no breach has occurred on this channel. This array is allocated by this routine and so it must be freed by the caller.

-   `                       num_timestamps                     `: (output) The number of timestamps in the returned array

<!-- -->

<span id="_CPPv328zkClearPerimeterDetectEvents5zkCTX"></span> <span id="_CPPv228zkClearPerimeterDetectEvents5zkCTX"></span> <span id="zkClearPerimeterDetectEvents__zkCTX"></span> <span id="zk__app__utils_8h_1aaba47000d3349d6278c4e0389f3be92d" class="target"></span> <span class="pre">int</span> `             zkClearPerimeterDetectEvents           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Clear perimeter detect events.

This function clears all perimeter detect event info and rearms all perimeter detect channels

**Return**  
0 for success, less than 0 for failure.

</div>

<div class="breathe-sectiondef docutils container">

LED Control

<span id="_CPPv38zkLEDOff5zkCTX"></span> <span id="_CPPv28zkLEDOff5zkCTX"></span> <span id="zkLEDOff__zkCTX"></span> <span id="zk__app__utils_8h_1a0a8056c9a978f68358a6c30e32a0554a" class="target"></span> <span class="pre">int</span> `             zkLEDOff           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Turns the LED off.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

<!-- -->

<span id="_CPPv37zkLEDOn5zkCTX"></span> <span id="_CPPv27zkLEDOn5zkCTX"></span> <span id="zkLEDOn__zkCTX"></span> <span id="zk__app__utils_8h_1a95b9136c02dd481c3c5da5835e47dc4c" class="target"></span> <span class="pre">int</span> `             zkLEDOn           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Turns the LED on.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

<!-- -->

<span id="_CPPv310zkLEDFlash5zkCTX8uint32_t8uint32_t8uint32_t"></span> <span id="_CPPv210zkLEDFlash5zkCTX8uint32_t8uint32_t8uint32_t"></span> <span id="zkLEDFlash__zkCTX.uint32_t.uint32_t.uint32_t"></span> <span id="zk__app__utils_8h_1a83ef549eec6c821909be6a542995ebca" class="target"></span> <span class="pre">int</span> `             zkLEDFlash           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint32\_t</span> *<span class="pre">on\_ms</span>* , <span class="pre">uint32\_t</span> *<span class="pre">off\_ms</span>* , <span class="pre">uint32\_t</span> *<span class="pre">num\_flashes</span>* <span class="sig-paren">)</span>    
Flashes the LED.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       on_ms                     `: (input) The amount of time, in milliseconds, that the LED will stay on during a flash cycle.

-   `                       off_ms                     `: (input) The amount of time, in milliseconds, that the LED will stay off during a flash cycle.

-   `                       num_flashes                     `: (input) The number of on/off flash cycles to complete. If this parameter is 0, then the LED will flash indefinitely.

</div>

<div class="breathe-sectiondef docutils container">

Administrative Ops

<span id="_CPPv312zkSetI2CAddr5zkCTXi"></span> <span id="_CPPv212zkSetI2CAddr5zkCTXi"></span> <span id="zkSetI2CAddr__zkCTX.i"></span> <span id="zk__app__utils_8h_1a17a243ae1bf977c5357aae425c0613a9" class="target"></span> <span class="pre">int</span> `             zkSetI2CAddr           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">addr</span>* <span class="sig-paren">)</span>    
Sets the i2c address of the Zymkey (i2c versions only)

This method should be called if the i2c address of the Zymkey is shared with another i2c device on the same i2c bus. The default i2c address for Zymkey units is 0x30. Currently, the address may be set in the ranges of 0x30 - 0x37 and 0x60 - 0x67. After successful completion of this command, the Zymkey will reset itself.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       addr                     `: (input) The i2c address that the Zymkey will set itself to.

</div>

<div class="breathe-sectiondef docutils container">

Time

<span id="_CPPv39zkGetTime5zkCTXP8uint32_tb"></span> <span id="_CPPv29zkGetTime5zkCTXP8uint32_tb"></span> <span id="zkGetTime__zkCTX.uint32_tP.b"></span> <span id="zk__app__utils_8h_1a4bcc349ef785502a3e5eabdc33629181" class="target"></span> <span class="pre">int</span> `             zkGetTime           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint32\_t</span> <span class="pre">\*</span> *<span class="pre">epoch\_time\_sec</span>* , <span class="pre">bool</span> *<span class="pre">precise\_time</span>* <span class="sig-paren">)</span>    
Get current GMT time.

This function is called to get the time directly from a Zymkey’s Real Time Clock (RTC)

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       epoch_time_sec                     `: (output) The time in seconds from the epoch (Jan. 1, 1970).

-   `                       precise_time                     `: (input) If true, this API returns the time after the next second falls. This means that the caller could be blocked up to one second. If false, the API returns immediately with the current time reading.

</div>

<div class="breathe-sectiondef docutils container">

Accelerometer

<span id="_CPPv319zkSetTapSensitivity5zkCTXif"></span> <span id="_CPPv219zkSetTapSensitivity5zkCTXif"></span> <span id="zkSetTapSensitivity__zkCTX.i.float"></span> <span id="zk__app__utils_8h_1a4f378947ae177504717b050ee892c48f" class="target"></span> <span class="pre">int</span> `             zkSetTapSensitivity           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">axis</span>* , <span class="pre">float</span> *<span class="pre">pct</span>* <span class="sig-paren">)</span>    
Sets the sensitivity of tap operations.

This method permits setting the sensitivity of the tap detection feature. Each axis may be individually configured or all at once.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       axis                     `: (input) The axis to configure. This parameter should contain one of the values in the enum typedef ACCEL\_AXIS\_TYPE.

-   `                       pct                     `: (input) The sensitivity expressed as percentage.

    1.  0% = Shut down: Tap detection should not occur along the axis.

    2.  100% = Maximum sensitivity.

<!-- -->

<span id="_CPPv312zkWaitForTap5zkCTX8uint32_t"></span> <span id="_CPPv212zkWaitForTap5zkCTX8uint32_t"></span> <span id="zkWaitForTap__zkCTX.uint32_t"></span> <span id="zk__app__utils_8h_1a59be1e5f44001cfe4dbaac2a77bbab4c" class="target"></span> <span class="pre">int</span> `             zkWaitForTap           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">uint32\_t</span> *<span class="pre">timeout\_ms</span>* <span class="sig-paren">)</span>    
Wait for a tap event to be detected.

This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.

**Return**  
0 for success, less than 0 for failure, -ETIMEDOUT when no tap events detected within the specified timeout

**Parameters**  
-   `                       timeout_ms                     `: (input) The maximum amount of time in milliseconds to wait for a tap event to arrive.

<!-- -->

<span id="_CPPv322zkGetAccelerometerData5zkCTXP19zkAccelAxisDataTypeP19zkAccelAxisDataTypeP19zkAccelAxisDataType"></span> <span id="_CPPv222zkGetAccelerometerData5zkCTXP19zkAccelAxisDataTypeP19zkAccelAxisDataTypeP19zkAccelAxisDataType"></span> <span id="zkGetAccelerometerData__zkCTX.zkAccelAxisDataTypeP.zkAccelAxisDataTypeP.zkAccelAxisDataTypeP"></span> <span id="zk__app__utils_8h_1aafb16259abbab1dc1a65c0efa54d5a42" class="target"></span> <span class="pre">int</span> `             zkGetAccelerometerData           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <a href="index.html#_CPPv419zkAccelAxisDataType" class="reference internal" title="zkAccelAxisDataType"><span class="pre">zkAccelAxisDataType</span></a> <span class="pre">\*</span> *<span class="pre">x</span>* , <a href="index.html#_CPPv419zkAccelAxisDataType" class="reference internal" title="zkAccelAxisDataType"><span class="pre">zkAccelAxisDataType</span></a> <span class="pre">\*</span> *<span class="pre">y</span>* , <a href="index.html#_CPPv419zkAccelAxisDataType" class="reference internal" title="zkAccelAxisDataType"><span class="pre">zkAccelAxisDataType</span></a> <span class="pre">\*</span> *<span class="pre">z</span>* <span class="sig-paren">)</span>    
Get current accelerometer data and tap info.

This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       x                     `: (output) x axis accelerometer information y (output) y axis accelerometer information z (output) z axis accelerometer information

</div>

<div class="breathe-sectiondef docutils container">

Binding Management

<span id="_CPPv313zkLockBinding5zkCTX"></span> <span id="_CPPv213zkLockBinding5zkCTX"></span> <span id="zkLockBinding__zkCTX"></span> <span id="zk__app__utils_8h_1a34dcd3e4579174085cc753e7148bc3e7" class="target"></span> <span class="pre">int</span> `             zkLockBinding           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* <span class="sig-paren">)</span>    
Set soft binding lock.

This function locks the binding for a specific HSM. This API is only valid for HSM series products.

**Return**  
0 for success, less than 0 for failure.

<!-- -->

<span id="_CPPv323zkGetCurrentBindingInfo5zkCTXPbPb"></span> <span id="_CPPv223zkGetCurrentBindingInfo5zkCTXPbPb"></span> <span id="zkGetCurrentBindingInfo__zkCTX.bP.bP"></span> <span id="zk__app__utils_8h_1a9c1ac0054642eb48f4d9b604e1fb0ab5" class="target"></span> <span class="pre">int</span> `             zkGetCurrentBindingInfo           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">bool</span> <span class="pre">\*</span> *<span class="pre">binding\_is\_locked</span>* , <span class="pre">bool</span> <span class="pre">\*</span> *<span class="pre">is\_bound</span>* <span class="sig-paren">)</span>    
Get current binding info.

This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       binding_is_locked                     `: (output) Binary value which expresses the current binding lock state. is\_bound (output) Binary value which expresses the current bind state.

</div>

<div class="breathe-sectiondef docutils container">

Module Info

<span id="_CPPv322zkGetModelNumberString5zkCTXPPc"></span> <span id="_CPPv222zkGetModelNumberString5zkCTXPPc"></span> <span id="zkGetModelNumberString__zkCTX.cPP"></span> <span id="zk__app__utils_8h_1a96ef2502bb9c17c1884cd8e5a481ec55" class="target"></span> <span class="pre">int</span> `             zkGetModelNumberString           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">model\_str</span>* <span class="sig-paren">)</span>    
Get Zymkey model number.

This function retrieves the model number of the zymkey referred to in a specified context

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context which was created with zkOpen

-   `                       model_str                     `: (output) A double pointer to the model string. This function allocates this string. It is the caller’s responsibility to free it.

<!-- -->

<span id="_CPPv326zkGetFirmwareVersionString5zkCTXPPc"></span> <span id="_CPPv226zkGetFirmwareVersionString5zkCTXPPc"></span> <span id="zkGetFirmwareVersionString__zkCTX.cPP"></span> <span id="zk__app__utils_8h_1a277fddb2c0abff8b8b2e532b46481fe5" class="target"></span> <span class="pre">int</span> `             zkGetFirmwareVersionString           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">fw\_ver\_str</span>* <span class="sig-paren">)</span>    
Get Zymkey firmware version.

This function retrieves the firmware version number of the zymkey referred to in a specified context

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context which was created with zkOpen

-   `                       version_str                     `: (output) A double pointer to the firmware version string. This function allocates this string. It is the caller’s responsibility to free it.

<!-- -->

<span id="_CPPv323zkGetSerialNumberString5zkCTXPPc"></span> <span id="_CPPv223zkGetSerialNumberString5zkCTXPPc"></span> <span id="zkGetSerialNumberString__zkCTX.cPP"></span> <span id="zk__app__utils_8h_1a2de34f6c567cf67e908d6aafce53b323" class="target"></span> <span class="pre">int</span> `             zkGetSerialNumberString           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">char</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">serial\_num\_str</span>* <span class="sig-paren">)</span>    
Get Zymkey serial number.

This function retrieves the serial number of the zymkey referred to in a specified context

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context which was created with zkOpen

-   `                       serial_num_str                     `: (output) A double pointer to the serial number string. This function allocates this string. It is the caller’s responsibility to free it.

<!-- -->

<span id="_CPPv312zkGetCPUTemp5zkCTXPf"></span> <span id="_CPPv212zkGetCPUTemp5zkCTXPf"></span> <span id="zkGetCPUTemp__zkCTX.floatP"></span> <span id="zk__app__utils_8h_1a2e463f92b62c58b0ffb3d036998de8cd" class="target"></span> <span class="pre">int</span> `             zkGetCPUTemp           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> <span class="pre">\*</span> *<span class="pre">cpu\_temp</span>* <span class="sig-paren">)</span>    
Get current HSM CPU temperature. (model &gt;= HSM6)

This function gets the current HSM CPU temp.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       cpu_temp                     `: (output) The temperature in celsius of the CPU.

<!-- -->

<span id="_CPPv313zkGetRTCDrift5zkCTXPf"></span> <span id="_CPPv213zkGetRTCDrift5zkCTXPf"></span> <span id="zkGetRTCDrift__zkCTX.floatP"></span> <span id="zk__app__utils_8h_1a4fb1581bda04b621f56af043173159f7" class="target"></span> <span class="pre">int</span> `             zkGetRTCDrift           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> <span class="pre">\*</span> *<span class="pre">rtc\_drift</span>* <span class="sig-paren">)</span>    
Get current RTC drift. (model &gt;= HSM6)

This function is called to get the current RTC drift.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       rtc_drift                     `: (output) The RTC drift.

<!-- -->

<span id="_CPPv319zkGetBatteryVoltage5zkCTXPf"></span> <span id="_CPPv219zkGetBatteryVoltage5zkCTXPf"></span> <span id="zkGetBatteryVoltage__zkCTX.floatP"></span> <span id="zk__app__utils_8h_1a9c2d7b0c22146f89ba04ccc7df38052b" class="target"></span> <span class="pre">int</span> `             zkGetBatteryVoltage           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> <span class="pre">\*</span> *<span class="pre">batt\_voltage</span>* <span class="sig-paren">)</span>    
Get the battery voltage (model &gt;= HSM6).

This function gets the current battery voltage

**Return**  
0 if successful, less than 0 for failure.

**Parameters**  
-   `                       ctx                     `: (input) Zymkey context.

-   `                       battV                     `: (output) The current battery voltage value

</div>

<div class="breathe-sectiondef docutils container">

Battery Voltage Monitor

<span id="_CPPv325zkSetBatteryVoltageAction5zkCTXi"></span> <span id="_CPPv225zkSetBatteryVoltageAction5zkCTXi"></span> <span id="zkSetBatteryVoltageAction__zkCTX.i"></span> <span id="zk__app__utils_8h_1a004db48c634667dab0d53c745aa36266" class="target"></span> <span class="pre">int</span> `             zkSetBatteryVoltageAction           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">action</span>* <span class="sig-paren">)</span>    
Set battery voltage threshold action. (model &gt;= HSM6)

This function specifies the action to take when the battery voltage falls below the threshold set by zkSetBatteryVoltageThreshold. If this function is never called, do nothing is default. There are three actions:

-   Do nothing

-   Go to sleep until battery is replaced

-   Self-destruct

    **Return**  
    0 for success, less than 0 for failure.

    **Parameters**  
    -   `                           action                         `: (input) The action to apply, specify one of the ZK\_THRESHOLD\_ACTION\_TYPE:

        -   Do nothing (ZK\_ACTION\_NONE)

        -   Sleep (ZK\_ACTION\_SLEEP)

        -   Self-destruct (ZK\_ACTION\_SELF\_DESTRUCT)

<!-- -->

<span id="_CPPv328zkSetBatteryVoltageThreshold5zkCTXf"></span> <span id="_CPPv228zkSetBatteryVoltageThreshold5zkCTXf"></span> <span id="zkSetBatteryVoltageThreshold__zkCTX.float"></span> <span id="zk__app__utils_8h_1a85d7e20bba98c94d2bd92b1f8dfc68c9" class="target"></span> <span class="pre">int</span> `             zkSetBatteryVoltageThreshold           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the battery voltage threshold. (model &gt;= HSM6)

This function sets the threshold at which if the battery voltage falls bellow, the action set by zkSetBatteryVoltageAction will be carried out. The recommended threshold is 2.3V. If this function isn’t called 2.5V is assumed by default. 2.5V is also the maximum threshold you can set.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       threshold                     `: (input) The threshold in Volts.

</div>

<div class="breathe-sectiondef docutils container">

CPU Temperature Monitor

<span id="_CPPv318zkSetCPUTempAction5zkCTXi"></span> <span id="_CPPv218zkSetCPUTempAction5zkCTXi"></span> <span id="zkSetCPUTempAction__zkCTX.i"></span> <span id="zk__app__utils_8h_1a9e7e23bdb88149047344b1522f62a627" class="target"></span> <span class="pre">int</span> `             zkSetCPUTempAction           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">int</span> *<span class="pre">action</span>* <span class="sig-paren">)</span>    
Set HSM CPU temperature threshold action. (model &gt;= HSM6)

This function specifies the action to take when the HSM CPU temperature falls below the threshold set by zkSetCPULowTempThreshold, or rises above the threshold set by zkSetCPUHighTempThreshold. There are two actions to apply:

-   Do nothing

-   Self-destruct

    **Return**  
    0 for success, less than 0 for failure.

    **Parameters**  
    -   `                           action                         `: (input) The action to apply, used it’s named constant from ZK\_THRESHOLD\_ACTION\_TYPE:

        -   Do nothing (ZK\_ACTION\_NONE)

        -   Self-destruct (ZK\_ACTION\_SELF\_DESTRUCT)

<!-- -->

<span id="_CPPv324zkSetCPULowTempThreshold5zkCTXf"></span> <span id="_CPPv224zkSetCPULowTempThreshold5zkCTXf"></span> <span id="zkSetCPULowTempThreshold__zkCTX.float"></span> <span id="zk__app__utils_8h_1a0bf795c9bed846f2d87855816e70c114" class="target"></span> <span class="pre">int</span> `             zkSetCPULowTempThreshold           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the HSM CPU low temperature threshold. (model &gt;= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature falls below, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU’s ambient temperature. The recommended setting is no more than 20C. If no threshold is set, -10 degrees celsius is set as default.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       threshold                     `: (input) The threshold in celsius.

<!-- -->

<span id="_CPPv325zkSetCPUHighTempThreshold5zkCTXf"></span> <span id="_CPPv225zkSetCPUHighTempThreshold5zkCTXf"></span> <span id="zkSetCPUHighTempThreshold__zkCTX.float"></span> <span id="zk__app__utils_8h_1a26fab5ddba18b8d79feebcebe8583e1a" class="target"></span> <span class="pre">int</span> `             zkSetCPUHighTempThreshold           ` <span class="sig-paren">(</span> <a href="index.html#_CPPv45zkCTX" class="reference internal" title="zkCTX"><span class="pre">zkCTX</span></a> *<span class="pre">ctx</span>* , <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the HSM CPU high temperature threshold. (model &gt;= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature rises above, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU’s ambient temperature. The recommended setting is no less than 40C. If no threshold is set, 65 degrees celsius is set as default.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                       threshold                     `: (input) The threshold in celsius.

</div>

</div>
