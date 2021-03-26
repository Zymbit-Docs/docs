---
title: Cpp API Documentation
description: This is the official documentation for the official zkapputils Cpp API library.
date: '2021-03-26T19:41:21'
lastmod: '2021-03-26T19:41:21'
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

# zkapputils C++ Documentation

C++ interface to Zymkey Application Utilities Library.

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

<div id="typedefs" class="section">

## Typedefs

<span id="_CPPv3N10zkAppUtils9byteArrayE"></span> <span id="_CPPv2N10zkAppUtils9byteArrayE"></span> <span id="zkAppUtils::byteArray"></span> <span id="zk_app_utils_class_8h_1a8cb247b41a182478fcdf780c1ce524e3" class="target"></span> *<span class="pre">typedef</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">vector</span> <span class="pre">&lt;</span> <span class="pre">uint8\_t</span> <span class="pre">&gt;</span> `           zkAppUtils                        ::           ` `           byteArray         `    
Typedef for a simple unsigned bytes container.

<!-- -->

<span id="_CPPv3N10zkAppUtils8intArrayE"></span> <span id="_CPPv2N10zkAppUtils8intArrayE"></span> <span id="zkAppUtils::intArray"></span> <span id="zk_app_utils_class_8h_1a7cc12af0cdc6374a29588629bd450da6" class="target"></span> *<span class="pre">typedef</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">vector</span> <span class="pre">&lt;</span> <span class="pre">int</span> <span class="pre">&gt;</span> `           zkAppUtils                        ::           ` `           intArray         `    
Typedef for a simple integer container.

</div>

<div id="structs" class="section">

## Structs

<span id="_CPPv3N10zkAppUtils9accelDataE"></span> <span id="_CPPv2N10zkAppUtils9accelDataE"></span> <span id="zkAppUtils::accelData"></span> <span id="structzk_app_utils_1_1accel_data" class="target"></span> *<span class="pre">struct</span>* `           zkAppUtils                        ::           ` `           accelData         `    
Structure typedef used for retrieval of accelerometer data.

<div class="breathe-sectiondef docutils container">

Public Members

<span id="_CPPv3N10zkAppUtils9accelData1xE"></span> <span id="_CPPv2N10zkAppUtils9accelData1xE"></span> <span id="zkAppUtils::accelData::x__double"></span> <span id="structzk_app_utils_1_1accel_data_1ade088cb17d564e9ab8de27df8e529b53" class="target"></span> <span class="pre">double</span> `                 x               `    

<!-- -->

<span id="_CPPv3N10zkAppUtils9accelData1yE"></span> <span id="_CPPv2N10zkAppUtils9accelData1yE"></span> <span id="zkAppUtils::accelData::y__double"></span> <span id="structzk_app_utils_1_1accel_data_1a523ccaa6bbe89ac2e2e7ccd6ed56ba92" class="target"></span> <span class="pre">double</span> `                 y               `    

<!-- -->

<span id="_CPPv3N10zkAppUtils9accelData1zE"></span> <span id="_CPPv2N10zkAppUtils9accelData1zE"></span> <span id="zkAppUtils::accelData::z__double"></span> <span id="structzk_app_utils_1_1accel_data_1a5080fb3abbdeeac3b6b99bbeab84d2af" class="target"></span> <span class="pre">double</span> `                 z               `    

<!-- -->

<span id="_CPPv3N10zkAppUtils9accelData7tapDirXE"></span> <span id="_CPPv2N10zkAppUtils9accelData7tapDirXE"></span> <span id="zkAppUtils::accelData::tapDirX__i"></span> <span id="structzk_app_utils_1_1accel_data_1acad0eacf3d403f2b9337223f915e7693" class="target"></span> <span class="pre">int</span> `                 tapDirX               `    

<!-- -->

<span id="_CPPv3N10zkAppUtils9accelData7tapDirYE"></span> <span id="_CPPv2N10zkAppUtils9accelData7tapDirYE"></span> <span id="zkAppUtils::accelData::tapDirY__i"></span> <span id="structzk_app_utils_1_1accel_data_1acee9fe0835114a7ee167ebe706dc807e" class="target"></span> <span class="pre">int</span> `                 tapDirY               `    

<!-- -->

<span id="_CPPv3N10zkAppUtils9accelData7tapDirZE"></span> <span id="_CPPv2N10zkAppUtils9accelData7tapDirZE"></span> <span id="zkAppUtils::accelData::tapDirZ__i"></span> <span id="structzk_app_utils_1_1accel_data_1a411a716f8caae78a98ea4983d796779f" class="target"></span> <span class="pre">int</span> `                 tapDirZ               `    

</div>

</div>

<div id="exceptions" class="section">

## Exceptions

<span id="_CPPv3N10zkAppUtils15commonExceptionE"></span> <span id="_CPPv2N10zkAppUtils15commonExceptionE"></span> <span id="zkAppUtils::commonException"></span> <span id="classzk_app_utils_1_1common_exception" class="target"></span> *<span class="pre">class</span>* `           zkAppUtils                        ::           ` `           commonException         ` <span class="pre">:</span> *<span class="pre">public</span>* <span class="pre">exception</span>    
Exception class derived from std::exception.

<div class="breathe-sectiondef docutils container">

Public Functions

<span id="_CPPv3N10zkAppUtils15commonException15commonExceptionENSt6stringE"></span> <span id="_CPPv2N10zkAppUtils15commonException15commonExceptionENSt6stringE"></span> <span id="zkAppUtils::commonException::commonException__ss"></span> <span id="classzk_app_utils_1_1common_exception_1a02a5816cccdcd19e719bb288080c0e82" class="target"></span> `                 commonException               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> *<span class="pre">status</span>* <span class="sig-paren">)</span>    
Constructor.

**Parameters**  
-   `                           status                         `: A string which described the verbose exception

<!-- -->

<span id="_CPPv3N10zkAppUtils15commonExceptionD0Ev"></span> <span id="_CPPv2N10zkAppUtils15commonExceptionD0Ev"></span> <span id="zkAppUtils::commonException::~commonException"></span> <span id="classzk_app_utils_1_1common_exception_1a3c0053dca967e9c898837a8a1f949f28" class="target"></span> *<span class="pre">inline</span>* *<span class="pre">virtual</span>* `                 ~commonException               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Destructor.

<!-- -->

<span id="_CPPv3NK10zkAppUtils15commonException4whatEv"></span> <span id="_CPPv2NK10zkAppUtils15commonException4whatEv"></span> <span id="zkAppUtils::commonException::whatC"></span> <span id="classzk_app_utils_1_1common_exception_1a91506a3f15bd559b94d9239a661390cb" class="target"></span> *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> `                 what               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span> *<span class="pre">const</span>*    
Override of std::exception <a href="#classzk_app_utils_1_1common_exception_1a91506a3f15bd559b94d9239a661390cb" class="reference internal"><span class="std std-ref">what()</span></a> method.

</div>

<!-- -->

<span id="_CPPv3N10zkAppUtils16timeoutExceptionE"></span> <span id="_CPPv2N10zkAppUtils16timeoutExceptionE"></span> <span id="zkAppUtils::timeoutException"></span> <span id="classzk_app_utils_1_1timeout_exception" class="target"></span> *<span class="pre">class</span>* `           zkAppUtils                        ::           ` `           timeoutException         ` <span class="pre">:</span> *<span class="pre">public</span>* <span class="pre">exception</span>    
Exception class derived from std::exception.

<div class="breathe-sectiondef docutils container">

Public Functions

<span id="_CPPv3N10zkAppUtils16timeoutException16timeoutExceptionENSt6stringE"></span> <span id="_CPPv2N10zkAppUtils16timeoutException16timeoutExceptionENSt6stringE"></span> <span id="zkAppUtils::timeoutException::timeoutException__ss"></span> <span id="classzk_app_utils_1_1timeout_exception_1aa5da5e052dc4c819ad7294fb0c840d58" class="target"></span> `                 timeoutException               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> *<span class="pre">status</span>* <span class="sig-paren">)</span>    
Constructor.

**Parameters**  
-   `                           status                         `: A string which described the verbose exception

<!-- -->

<span id="_CPPv3N10zkAppUtils16timeoutExceptionD0Ev"></span> <span id="_CPPv2N10zkAppUtils16timeoutExceptionD0Ev"></span> <span id="zkAppUtils::timeoutException::~timeoutException"></span> <span id="classzk_app_utils_1_1timeout_exception_1abf7d12b6c879936a5e91438133716e31" class="target"></span> *<span class="pre">inline</span>* *<span class="pre">virtual</span>* `                 ~timeoutException               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Destructor.

<!-- -->

<span id="_CPPv3NK10zkAppUtils16timeoutException4whatEv"></span> <span id="_CPPv2NK10zkAppUtils16timeoutException4whatEv"></span> <span id="zkAppUtils::timeoutException::whatC"></span> <span id="classzk_app_utils_1_1timeout_exception_1aa02ea9cf2775e88dd07620569e2a9904" class="target"></span> *<span class="pre">const</span>* <span class="pre">char</span> <span class="pre">\*</span> `                 what               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span> *<span class="pre">const</span>*    
Override of std::exception <a href="#classzk_app_utils_1_1timeout_exception_1aa02ea9cf2775e88dd07620569e2a9904" class="reference internal"><span class="std std-ref">what()</span></a> method.

</div>

</div>

<div id="classes" class="section">

## Classes

<span id="zkapputils-zkclass" class="target"></span>

<span id="_CPPv3N10zkAppUtils7zkClassE"></span> <span id="_CPPv2N10zkAppUtils7zkClassE"></span> <span id="zkAppUtils::zkClass"></span> <span id="classzk_app_utils_1_1zk_class" class="target"></span> *<span class="pre">class</span>* `           zkAppUtils                        ::           ` `           zkClass         `    
The main class.

<div class="breathe-sectiondef docutils container">

Zymkey Context

<span id="_CPPv3N10zkAppUtils7zkClass7zkClassEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass7zkClassEv"></span> <span id="zkAppUtils::zkClass::zkClass"></span> <span id="classzk_app_utils_1_1zk_class_1af2017a24669f2f1f84743ab8eb1b2e6d" class="target"></span> `                 zkClass               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Constructor: a Zymkey context is opened.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClassD0Ev"></span> <span id="_CPPv2N10zkAppUtils7zkClassD0Ev"></span> <span id="zkAppUtils::zkClass::~zkClass"></span> <span id="classzk_app_utils_1_1zk_class_1a9fd36f5cebc6fc718abd7c63b0e30035" class="target"></span> *<span class="pre">virtual</span>* `                 ~zkClass               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Destructor: the Zymkey context is closed.

</div>

<div class="breathe-sectiondef docutils container">

Random Number Generation

<span id="_CPPv3N10zkAppUtils7zkClass18createRandDataFileERNSt6stringEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass18createRandDataFileERNSt6stringEi"></span> <span id="zkAppUtils::zkClass::createRandDataFile__ssR.i"></span> <span id="classzk_app_utils_1_1zk_class_1a9a4a7c019b82d8b1760ae9f743de944d" class="target"></span> <span class="pre">void</span> `                 createRandDataFile               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">dst\_filename</span>* , <span class="pre">int</span> *<span class="pre">rdata\_sz</span>* <span class="sig-paren">)</span>    
Write random data to a file.

**Parameters**  
-   `                           dst_filename                         `: A string containing the absolute path to the file where random data is written

-   `                           rdata_sz                         `: The number of random bytes to generate

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass12getRandBytesEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass12getRandBytesEi"></span> <span id="zkAppUtils::zkClass::getRandBytes__i"></span> <span id="classzk_app_utils_1_1zk_class_1aa15449b33414f6da9074c51b525eca03" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 getRandBytes               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">rdata\_sz</span>* <span class="sig-paren">)</span>    
Generate a block of random data.

**Return**  
A pointer to container with the random bytes

**Parameters**  
-   `                           rdata_sz                         `: The number of random bytes to generate

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Lock Data

<span id="_CPPv3N10zkAppUtils7zkClass8lockDataERKNSt6stringERKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass8lockDataERKNSt6stringERKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::lockData__ssCR.ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a65aee74e18121f104b8420822013452e" class="target"></span> <span class="pre">void</span> `                 lockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">src\_pt\_filename</span>* , *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">dst\_ct\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Locks data from a plaintext source file and stores locked data object to a destination file.

**Parameters**  
-   `                           src_pt_filename                         `: Absolute path to source plaintext file

-   `                           dst_ct_filename                         `: Absolute path to destination file which will contain locked data object

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass8lockDataERK9byteArrayRKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass8lockDataERK9byteArrayRKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::lockData__byteArrayCR.ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a12a0b56f2d9957e4f6f66964b1dc88c8" class="target"></span> <span class="pre">void</span> `                 lockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">src\_pt\_data</span>* , *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">dst\_ct\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Locks data from a plaintext source byte container and stores locked data object to a destination file.

**Parameters**  
-   `                           src_pt_data                         `: Unsigned byte container which holds source plaintext data

-   `                           dst_ct_filename                         `: Absolute path to destination file which will contain locked data object

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass8lockDataERKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass8lockDataERKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::lockData__ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1ae676bd567545ed2030db7ccffef2b4b7" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 lockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">src\_pt\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Locks data from a plaintext source file and stores locked data object in a container of unsigned bytes.

**Return**  
Byte container with locked data

**Parameters**  
-   `                           src_pt_filename                         `: Absolute path to source plaintext file

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass8lockDataERK9byteArrayb"></span> <span id="_CPPv2N10zkAppUtils7zkClass8lockDataERK9byteArrayb"></span> <span id="zkAppUtils::zkClass::lockData__byteArrayCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a78026efcb7d94cbbf93ae3800241b22d" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 lockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">src\_pt\_data</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Locks data from a plaintext source byte container and stores locked data object in a container of unsigned bytes.

**Return**  
Byte container with locked data

**Parameters**  
-   `                           src_pt_data                         `: Unsigned byte container which holds source plaintext data

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Unlock Data

<span id="_CPPv3N10zkAppUtils7zkClass10unlockDataERKNSt6stringERKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass10unlockDataERKNSt6stringERKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::unlockData__ssCR.ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a0ecbe6c828556f8f762fb74e628f13af" class="target"></span> <span class="pre">void</span> `                 unlockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">src\_ct\_filename</span>* , *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">dst\_pt\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Unocks a locked data object from source file and stores unlocked data object to a destination file.

**Parameters**  
-   `                           src_ct_filename                         `: Absolute path to source file which contains locked data object

-   `                           dst_pt_filename                         `: Absolute path to destination file which will contain unlocked plaintext data

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass10unlockDataERK9byteArrayRKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass10unlockDataERK9byteArrayRKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::unlockData__byteArrayCR.ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a40befc1bfc64e6a06e2169c8a102cd2f" class="target"></span> <span class="pre">void</span> `                 unlockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">src\_ct\_data</span>* , *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">dst\_pt\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Unlocks a locked data object contained in an unsigned byte container and stores plaintext data to a destination file.

**Parameters**  
-   `                           src_ct_data                         `: Unsigned byte container which holds locked data object

-   `                           dst_pt_filename                         `: Absolute path to destination file which will contain unlocked plaintext data

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass10unlockDataERKNSt6stringEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass10unlockDataERKNSt6stringEb"></span> <span id="zkAppUtils::zkClass::unlockData__ssCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a8b26b3c35b2985ae5f7d8b6b50b5ec1d" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 unlockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">src\_ct\_filename</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Unlocks a locked data object from a plaintext source file and stores plaintext data in a container of unsigned bytes.

**Return**  
Byte container with plaintext data

**Parameters**  
-   `                           src_ct_filename                         `: Absolute path to source file which contains locked data object

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass10unlockDataERK9byteArrayb"></span> <span id="_CPPv2N10zkAppUtils7zkClass10unlockDataERK9byteArrayb"></span> <span id="zkAppUtils::zkClass::unlockData__byteArrayCR.b"></span> <span id="classzk_app_utils_1_1zk_class_1a6527e117b67f19853e40423aa782fd6f" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 unlockData               ` <span class="sig-paren">(</span> *<span class="pre">const</span>* <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">src\_ct\_bytes</span>* , <span class="pre">bool</span> *<span class="pre">use\_shared\_key</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Unlocks a locked data object contained in an unsigned byte container and stores plaintext data in a container of unsigned bytes.

**Return**  
Byte container with plaintext data

**Parameters**  
-   `                           src_ct_data                         `: Unsigned byte container which holds locked data object

-   `                           use_shared_key                         `: Determines whether one-way or shared key is used for locking. Default = false.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

ECDSA

<span id="_CPPv3N10zkAppUtils7zkClass21genECDSASigFromDigestER9byteArrayi"></span> <span id="_CPPv2N10zkAppUtils7zkClass21genECDSASigFromDigestER9byteArrayi"></span> <span id="zkAppUtils::zkClass::genECDSASigFromDigest__byteArrayR.i"></span> <span id="classzk_app_utils_1_1zk_class_1a14702ae32491257edc3618fe44f65cc8" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 genECDSASigFromDigest               ` <span class="sig-paren">(</span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">digest</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* <span class="pre">=</span> <span class="pre">0</span> <span class="sig-paren">)</span>    
Generate a signature from a data digest using the Zymkey’s private key.

**Return**  
Byte container with binary signature

**Parameters**  
-   `                           digest                         `: Currently, this should be a SHA256 digest

-   `                           slot                         `: The key slot to use for verification.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass24verifyECDSASigFromDigestER9byteArrayR9byteArrayib"></span> <span id="_CPPv2N10zkAppUtils7zkClass24verifyECDSASigFromDigestER9byteArrayR9byteArrayib"></span> <span id="zkAppUtils::zkClass::verifyECDSASigFromDigest__byteArrayR.byteArrayR.i.b"></span> <span id="classzk_app_utils_1_1zk_class_1a5046d6ddc2fb67c7c352df859c84089d" class="target"></span> <span class="pre">bool</span> `                 verifyECDSASigFromDigest               ` <span class="sig-paren">(</span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">digest</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">sig</span>* , <span class="pre">int</span> *<span class="pre">pub\_key\_slot</span>* <span class="pre">=</span> <span class="pre">0</span>, <span class="pre">bool</span> *<span class="pre">pub\_key\_is\_foreign</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Verify a signature from a data digest using the Zymkey’s public key. The public key is not given as an input. Rather, the Zymkey uses its own copy of the private key. This insures that the public key that matches the private key is used.

**Return**  
true = signature verification passed, false = signature verification failed

**Parameters**  
-   `                           digest                         `: Currently, this should be a SHA256 digest

-   `                           sig                         `: The signature to verify

-   `                           pub_key_slot                         `: The key slot to use for verification.

-   `                           pub_key_is_foreign                         `: If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced.

-   `                           pub_key_is_foreign                         `: If false, the normal key store is referenced. Otherwise, the foreign public key store is referenced.

</div>

<div class="breathe-sectiondef docutils container">

ECDH and KDF

<span id="_CPPv3N10zkAppUtils7zkClass9doRawECDHEiR9byteArray"></span> <span id="_CPPv2N10zkAppUtils7zkClass9doRawECDHEiR9byteArray"></span> <span id="zkAppUtils::zkClass::doRawECDH__i.byteArrayR"></span> <span id="classzk_app_utils_1_1zk_class_1a5081a2fa23323039ce2d6b082c55bc1b" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 doRawECDH               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">slot</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">peer\_pubkey</span>* <span class="sig-paren">)</span>    
Perform a raw ECDH operation. (model &gt;= HSM6)

Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is presented in the call.

**Return**  
Byte container with pre master secret

**Parameters**  
-   `                           slot                         `: The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                           peer_pubkey                         `: The peer public key.

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass26doRawECDHWithIntPeerPubkeyEiib"></span> <span id="_CPPv2N10zkAppUtils7zkClass26doRawECDHWithIntPeerPubkeyEiib"></span> <span id="zkAppUtils::zkClass::doRawECDHWithIntPeerPubkey__i.i.b"></span> <span id="classzk_app_utils_1_1zk_class_1ae7f1572cb081e4fb915ed2076fe3a092" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 doRawECDHWithIntPeerPubkey               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">peer\_pubkey\_slot\_is\_foreign</span>* <span class="sig-paren">)</span>    
Perform a raw ECDH operation. (model &gt;= HSM6)

Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is referenced from the zymkey internal key store.

**Return**  
Byte container with pre master secret

**Parameters**  
-   `                           slot                         `: The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                           peer_pubkey_slot                         `: The peer public key slot where the peer public key is to be found.

-   `                           peer_pubkey_slot_is_foreign                         `: If true, the peer public key slot is found in the foreign public keyring.

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass12doECDHAndKDFE16ZK_ECDH_KDF_TYPEiR9byteArrayR9byteArrayR9byteArrayii"></span> <span id="_CPPv2N10zkAppUtils7zkClass12doECDHAndKDFE16ZK_ECDH_KDF_TYPEiR9byteArrayR9byteArrayR9byteArrayii"></span> <span id="zkAppUtils::zkClass::doECDHAndKDF__ZK_ECDH_KDF_TYPE.i.byteArrayR.byteArrayR.byteArrayR.i.i"></span> <span id="classzk_app_utils_1_1zk_class_1a16388137bf11d6d38f6fdaee0a87c08a" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 doECDHAndKDF               ` <span class="sig-paren">(</span> <span class="pre">ZK\_ECDH\_KDF\_TYPE</span> *<span class="pre">kdf\_type</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">peer\_pubkey</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">salt</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">info</span>* , <span class="pre">int</span> *<span class="pre">num\_iterations</span>* , <span class="pre">int</span> *<span class="pre">derived\_key\_sz</span>* <span class="sig-paren">)</span>    
Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6)

Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is presented in the call.

**Return**  
Byte container with pre master secret.

**Parameters**  
-   `                           slot                         `: The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                           peer_pubkey                         `: The peer public key.

-   `                           salt                         `: The salt to use for the selected KDF.

-   `                           info                         `: The info field to use for RFC 5869. Ignored for PBKDF2.

-   `                           num_iterations                         `: Number of iterations to carry out (PBKDF only)

-   `                           derived_key_sz                         `: The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass29doECDHAndKDFWithIntPeerPubkeyE16ZK_ECDH_KDF_TYPEiibR9byteArrayR9byteArrayii"></span> <span id="_CPPv2N10zkAppUtils7zkClass29doECDHAndKDFWithIntPeerPubkeyE16ZK_ECDH_KDF_TYPEiibR9byteArrayR9byteArrayii"></span> <span id="zkAppUtils::zkClass::doECDHAndKDFWithIntPeerPubkey__ZK_ECDH_KDF_TYPE.i.i.b.byteArrayR.byteArrayR.i.i"></span> <span id="classzk_app_utils_1_1zk_class_1af719207421b038378dc30f07611b3e6b" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 doECDHAndKDFWithIntPeerPubkey               ` <span class="sig-paren">(</span> <span class="pre">ZK\_ECDH\_KDF\_TYPE</span> *<span class="pre">kdf\_type</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">int</span> *<span class="pre">peer\_pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">peer\_pubkey\_slot\_is\_foreign</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">salt</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">info</span>* , <span class="pre">int</span> *<span class="pre">num\_iterations</span>* , <span class="pre">int</span> *<span class="pre">derived\_key\_sz</span>* <span class="sig-paren">)</span>    
Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6)

Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is referenced from the zymkey internal key store.

**Return**  
Byte container with pre master secret.

**Parameters**  
-   `                           slot                         `: The key slot to use for the local key. If this parameter is -1, the ephemeral key is used.

-   `                           peer_pubkey_slot                         `: The peer public key slot where the peer public key is to be found.

-   `                           peer_pubkey_slot_is_foreign                         `: If true, the peer public key slot is found in the foreign public keyring.

-   `                           salt                         `: The salt to use for the selected KDF.

-   `                           info                         `: The info field to use for RFC 5869. Ignored for PBKDF2.

-   `                           num_iterations                         `: Number of iterations to carry out (PBKDF only)

-   `                           derived_key_sz                         `: The desired number of bytes to return for the KDF. For RFC 5869, this value must be less than 8160 bytes (SHA256) or 16320 (SHA512).

</div>

<div class="breathe-sectiondef docutils container">

Key Management

<span id="_CPPv3N10zkAppUtils7zkClass20saveECDSAPubKey2FileENSt6stringEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass20saveECDSAPubKey2FileENSt6stringEi"></span> <span id="zkAppUtils::zkClass::saveECDSAPubKey2File__ss.i"></span> <span id="classzk_app_utils_1_1zk_class_1a90e0ace2d84e42b6ccdaad122f9035c8" class="target"></span> <span class="pre">void</span> `                 saveECDSAPubKey2File               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> *<span class="pre">dst\_filename</span>* , <span class="pre">int</span> *<span class="pre">slot</span>* <span class="pre">=</span> <span class="pre">0</span> <span class="sig-paren">)</span>    
\[DEPRECATED\] Use exportPubKey2File. Save the public key that matches the Zymkey’s private key into a PEM formatted file. Mainly used for Certificate Signing Request (CSR) generation.

**Parameters**  
-   `                           dst_filename                         `: Absolute location where the PEM formatted file is to be stored

-   `                           slot                         `: Reserved for future use

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass17exportPubKey2FileENSt6stringEib"></span> <span id="_CPPv2N10zkAppUtils7zkClass17exportPubKey2FileENSt6stringEib"></span> <span id="zkAppUtils::zkClass::exportPubKey2File__ss.i.b"></span> <span id="classzk_app_utils_1_1zk_class_1a1bdc2d2f9d479a28af6de6cd7889020b" class="target"></span> <span class="pre">void</span> `                 exportPubKey2File               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> *<span class="pre">dst\_filename</span>* , <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* <span class="pre">=</span> <span class="pre">0</span>, <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Store the public key to a host file in PEM format.

This function is useful for generating Certificate Signing Requests (CSR).

**Parameters**  
-   `                           dst_filename                         `: Filename where PEM formatted public key is to be stored.

-   `                           pubkey_slot                         `: The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.

-   `                           slot_is_foreign                         `: If true, designates the pubkey slot to come from the foreign keystore. (model &gt;= HSM6)

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass14getECDSAPubKeyEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass14getECDSAPubKeyEi"></span> <span id="zkAppUtils::zkClass::getECDSAPubKey__i"></span> <span id="classzk_app_utils_1_1zk_class_1ae5f9669f44c14e15c795b313f6ae5a08" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 getECDSAPubKey               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">slot</span>* <span class="pre">=</span> <span class="pre">0</span> <span class="sig-paren">)</span>    
\[DEPRECATED\] Use exportPubKey. Get a container of bytes which contains the ECDSA public key

**Return**  
Byte container with binary public key

**Parameters**  
-   `                           slot                         `: Reserved for future use.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass12exportPubKeyEib"></span> <span id="_CPPv2N10zkAppUtils7zkClass12exportPubKeyEib"></span> <span id="zkAppUtils::zkClass::exportPubKey__i.b"></span> <span id="classzk_app_utils_1_1zk_class_1a6bb9ac93c1aac45a45f7e58002e9dcd7" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">\*</span> `                 exportPubKey               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* <span class="pre">=</span> <span class="pre">0</span>, <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="pre">=</span> <span class="pre">0</span> <span class="sig-paren">)</span>    
Gets the public key and stores in a byte array created by this function.

**Parameters**  
-   `                           pubkey_slot                         `: The key slot to retrieve. Zymkey and HSM4 have slots 0, 1, and 2.

-   `                           slot_is_foreign                         `: If true, designates the pubkey slot to come from the foreign keystore. (model &gt;= HSM6)

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass17getAllocSlotsListEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass17getAllocSlotsListEb"></span> <span id="zkAppUtils::zkClass::getAllocSlotsList__b"></span> <span id="classzk_app_utils_1_1zk_class_1a636729b4700e21c3392bd75aac2d8873" class="target"></span> <a href="index.html#_CPPv4N10zkAppUtils8intArrayE" class="reference internal" title="zkAppUtils::intArray"><span class="pre">intArray</span></a> <span class="pre">\*</span> `                 getAllocSlotsList               ` <span class="sig-paren">(</span> <span class="pre">bool</span> *<span class="pre">foreign\_key\_pool</span>* <span class="sig-paren">)</span>    
Get the list of allocated keys. (model &gt;= HSM6)

This function returns a list of all allocated key slots.

**Return**  
Array of the allocated keys.

**Parameters**  
-   `                           foreign_key_pool                         `: (input) if true, retrieve allocation list of the foreign keys

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass18storeForeignPubKeyE14ZK_EC_KEY_TYPER9byteArray"></span> <span id="_CPPv2N10zkAppUtils7zkClass18storeForeignPubKeyE14ZK_EC_KEY_TYPER9byteArray"></span> <span id="zkAppUtils::zkClass::storeForeignPubKey__ZK_EC_KEY_TYPE.byteArrayR"></span> <span id="classzk_app_utils_1_1zk_class_1aa95d4e59e180197bf8e847b4d52d5001" class="target"></span> <span class="pre">int</span> `                 storeForeignPubKey               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">pk\_type</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">pk</span>* <span class="sig-paren">)</span>    
Store a new foreign public key in Zymkey. (model &gt;= HSM6)

This function stores a new foreign public key in the Zymkey public key ring. This public key can be used for signature verification in use cases where it is desirable to hide the public key.

**Return**  
Allocated slot number in foreign key store, less than 0 for failure.

**Parameters**  
-   `                           pk_type                         `: The type of the public key. {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

-   `                           pk                         `: Public key to store.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass19disablePubKeyExportEib"></span> <span id="_CPPv2N10zkAppUtils7zkClass19disablePubKeyExportEib"></span> <span id="zkAppUtils::zkClass::disablePubKeyExport__i.b"></span> <span id="classzk_app_utils_1_1zk_class_1ab730469e9e5ffb217455a775960732d1" class="target"></span> <span class="pre">void</span> `                 disablePubKeyExport               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">pubkey\_slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Prevent a public key from being exported to the host. (model &gt;= HSM6)

This function prevents the public key at the specified slot from being exported to the host using the API zkExportPubKey.

**Parameters**  
-   `                           pubkey_slot                         `: The key slot to disable pubkey export on.

-   `                           slot_is_foreign                         `: The slot parameter refers to a slot in the foreign keyring.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass10genKeyPairE14ZK_EC_KEY_TYPE"></span> <span id="_CPPv2N10zkAppUtils7zkClass10genKeyPairE14ZK_EC_KEY_TYPE"></span> <span id="zkAppUtils::zkClass::genKeyPair__ZK_EC_KEY_TYPE"></span> <span id="classzk_app_utils_1_1zk_class_1afa4595edba19c2c98109763898dbfc9a" class="target"></span> <span class="pre">int</span> `                 genKeyPair               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">type</span>* <span class="sig-paren">)</span>    
Generate a new persistent key pair. (model &gt;= HSM6)

This function generates a new key pair of the specified type and store it persistently. This key pair cannot be used as part of the zymkey’s digital wallet operations.

**Return**  
Allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                           type                         `: The type of key to generate (ZK\_EC\_KEY\_TYPE). {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass19genEphemeralKeyPairE14ZK_EC_KEY_TYPE"></span> <span id="_CPPv2N10zkAppUtils7zkClass19genEphemeralKeyPairE14ZK_EC_KEY_TYPE"></span> <span id="zkAppUtils::zkClass::genEphemeralKeyPair__ZK_EC_KEY_TYPE"></span> <span id="classzk_app_utils_1_1zk_class_1ada05198c035f694fda303a8b7e30b4b5" class="target"></span> <span class="pre">void</span> `                 genEphemeralKeyPair               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">type</span>* <span class="sig-paren">)</span>    
Generate an ephemeral key pair. (model &gt;= HSM6)

This function generates an ephemeral key pair of the specified type. Ephemeral key pairs are useful when performing ECDH for time-of-flight encryption. Only one ephemeral key slot is available and is not persistent between reboots.

**Parameters**  
-   `                           type                         `: The type of key to generate (ZK\_EC\_KEY\_TYPE). {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass9removeKeyEib"></span> <span id="_CPPv2N10zkAppUtils7zkClass9removeKeyEib"></span> <span id="zkAppUtils::zkClass::removeKey__i.b"></span> <span id="classzk_app_utils_1_1zk_class_1a62f486dc7c3502fd49c43f628a48fd62" class="target"></span> <span class="pre">void</span> `                 removeKey               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">bool</span> *<span class="pre">slot\_is\_foreign</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Remove a key pair or a foreign public key. (model &gt;= HSM6)

This function deletes a key pair or a foreign public key from persistent storage.

**Parameters**  
-   `                           slot                         `: The slot

-   `                           slot_is_foreign                         `: The slot parameter refers to a slot in the foreign keyring.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass22invalidateEphemeralKeyEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass22invalidateEphemeralKeyEv"></span> <span id="zkAppUtils::zkClass::invalidateEphemeralKey"></span> <span id="classzk_app_utils_1_1zk_class_1a2b2d25ba5fa9e7ddd56e293aeac069c6" class="target"></span> <span class="pre">void</span> `                 invalidateEphemeralKey               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Invalidate the ephemeral key. (model &gt;= HSM6)

This function invalidates the ephemeral key.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Digital Wallet (BIP32/39/44)

<span id="_CPPv3N10zkAppUtils7zkClass24genBIP32WalletMasterSeedE14ZK_EC_KEY_TYPERNSt6stringER9byteArray"></span> <span id="_CPPv2N10zkAppUtils7zkClass24genBIP32WalletMasterSeedE14ZK_EC_KEY_TYPERNSt6stringER9byteArray"></span> <span id="zkAppUtils::zkClass::genBIP32WalletMasterSeed__ZK_EC_KEY_TYPE.ssR.byteArrayR"></span> <span id="classzk_app_utils_1_1zk_class_1a0444ee1fc1bf9ca89dfe6dc2584d4d22" class="target"></span> <span class="pre">int</span> `                 genBIP32WalletMasterSeed               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">type</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">wallet\_name</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">master\_generator\_key</span>* <span class="sig-paren">)</span>    
Generate a BIP32 master seed to start a new blockchain wallet. (model &gt;= HSM6)

This function generates a new blockchain master seed for creating a new wallet per BIP32.

**Return**  
Allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                           type                         `: The type of key to generate (ZK\_EC\_KEY\_TYPE). {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

-   `                           wallet_name                         `: An ASCII string which contains the name of the wallet.

-   `                           master_generator_key                         `: The master generator key used to help generate the master seed.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass24genBIP39WalletMasterSeedE14ZK_EC_KEY_TYPERNSt6stringER9byteArrayPi"></span> <span id="_CPPv2N10zkAppUtils7zkClass24genBIP39WalletMasterSeedE14ZK_EC_KEY_TYPERNSt6stringER9byteArrayPi"></span> <span id="zkAppUtils::zkClass::genBIP39WalletMasterSeed__ZK_EC_KEY_TYPE.ssR.byteArrayR.iP"></span> <span id="classzk_app_utils_1_1zk_class_1a6db3f774b7220c58977d47fb27d5b98e" class="target"></span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> `                 genBIP39WalletMasterSeed               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">type</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">wallet\_name</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">master\_generator\_key</span>* , <span class="pre">int</span> <span class="pre">\*</span> *<span class="pre">slot\_num</span>* <span class="sig-paren">)</span>    
Generate a BIP39 master seed to start a new blockchain wallet. (model &gt;= HSM6)

This function generates a new blockchain master seed for creating a new wallet per BIP39.

**Return**  
A pointer to the bip39 mnemonic sentence.The string is null terminated and encoded in UTF-8 NFKD from the BIP39 Enlish dictionary.

**Parameters**  
-   `                           type                         `: The type of key to generate (ZK\_EC\_KEY\_TYPE). {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

-   `                           wallet_name                         `: An ASCII string which contains the name of the wallet.

-   `                           master_generator_key                         `: The master generator key used to help generate the master seed.

-   `                           (output)                         `: Allocated slot number if successful.

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass17genWalletChildKeyEi8uint32_tb"></span> <span id="_CPPv2N10zkAppUtils7zkClass17genWalletChildKeyEi8uint32_tb"></span> <span id="zkAppUtils::zkClass::genWalletChildKey__i.uint32_t.b"></span> <span id="classzk_app_utils_1_1zk_class_1a908e3ce1eb468f08d48d542d0b27145e" class="target"></span> <span class="pre">int</span> `                 genWalletChildKey               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">parent\_key\_slot</span>* , <span class="pre">uint32\_t</span> *<span class="pre">index</span>* , <span class="pre">bool</span> *<span class="pre">is\_hardened</span>* <span class="sig-paren">)</span>    
Generate child key from a parent key in a blockchain wallet . (model &gt;= HSM6)

This function generates a new child key descendent from a specified parent key in a wallet.

**Return**  
Allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                           parent_key_slot                         `: The parent key slot to base the child key derivation on.

-   `                           index                         `: The index of the child seed. This determines the node address as well as the outcome of the key generation.

-   `                           is_hardened                         `: If true, a hardened key is generated.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass40restoreWalletMasterSeedFromBIP39MnemonicE14ZK_EC_KEY_TYPERNSt6stringER9byteArrayRNSt6stringE"></span> <span id="_CPPv2N10zkAppUtils7zkClass40restoreWalletMasterSeedFromBIP39MnemonicE14ZK_EC_KEY_TYPERNSt6stringER9byteArrayRNSt6stringE"></span> <span id="zkAppUtils::zkClass::restoreWalletMasterSeedFromBIP39Mnemonic__ZK_EC_KEY_TYPE.ssR.byteArrayR.ssR"></span> <span id="classzk_app_utils_1_1zk_class_1afd1180d3d857b3f4adb11201c72af7fb" class="target"></span> <span class="pre">int</span> `                 restoreWalletMasterSeedFromBIP39Mnemonic               ` <span class="sig-paren">(</span> <span class="pre">ZK\_EC\_KEY\_TYPE</span> *<span class="pre">type</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">wallet\_name</span>* , <a href="index.html#_CPPv4N10zkAppUtils9byteArrayE" class="reference internal" title="zkAppUtils::byteArray"><span class="pre">byteArray</span></a> <span class="pre">&</span> *<span class="pre">master\_generator\_key</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">bip39\_mnemonic</span>* <span class="sig-paren">)</span>    
Restore a master seed from a BIP39 mnemonic and a master generator key. (model &gt;= HSM6)

This function restores a wallet master seed from a supplied BIP39 mnemonic string and a master generator key.

**Return**  
Allocated slot number if successful, less than 0 for failure.

**Parameters**  
-   `                           type                         `: The type of key to generate (ZK\_KEY\_TYPE). {ZK\_NISTP256, ZK\_SECP256R1 = ZK\_NISTP256, ZK\_SECP256K1}

-   `                           wallet_name                         `: An ASCII string which contains the name of the wallet.

-   `                           master_generator_key                         `: The master generator key used to help generate the master seed.

-   `                           bip39_mnemonic                         `: The bip39\_mnemonic string, null terminated and UTF-8 NFKD encoded from the BIP39 English dictionary.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass28getWalletNodeAddrFromKeySlotEiPNSt6stringEPNSt6stringE"></span> <span id="_CPPv2N10zkAppUtils7zkClass28getWalletNodeAddrFromKeySlotEiPNSt6stringEPNSt6stringE"></span> <span id="zkAppUtils::zkClass::getWalletNodeAddrFromKeySlot__i.ssP.ssP"></span> <span id="classzk_app_utils_1_1zk_class_1a62bc7fcc98b1b71507a959451322fc31" class="target"></span> <span class="pre">int</span> `                 getWalletNodeAddrFromKeySlot               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">slot</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> *<span class="pre">out\_node\_addr</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> *<span class="pre">out\_wallet\_name</span>* <span class="pre">=</span> <span class="pre">NULL</span> <span class="sig-paren">)</span>    
Derive the node address from a key slot number. (model &gt;= HSM6)

This function derives a node address from an input key slot number.

**Return**  
The master seed key slot.

**Parameters**  
-   `                           slot                         `: (input) A key slot number that is part of a digital wallet.

-   `                           out_node_addr                         `: (output) A pointer to a string which will contain the node address in ASCII.

-   `                           wallet_name                         `: (output) A pointer to a string which will contain the wallet name in ASCII. If NULL, this parameter will not be retrieved.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass28getWalletKeySlotFromNodeAddrERNSt6stringERNSt6stringEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass28getWalletKeySlotFromNodeAddrERNSt6stringERNSt6stringEi"></span> <span id="zkAppUtils::zkClass::getWalletKeySlotFromNodeAddr__ssR.ssR.i"></span> <span id="classzk_app_utils_1_1zk_class_1af955d4038166b61c98da8d6a03796f1c" class="target"></span> <span class="pre">int</span> `                 getWalletKeySlotFromNodeAddr               ` <span class="sig-paren">(</span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">node\_addr</span>* , <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">&</span> *<span class="pre">wallet\_name</span>* , <span class="pre">int</span> *<span class="pre">master\_seed\_slot</span>* <span class="sig-paren">)</span>    
Derive the slot address from a node address. (model &gt;= HSM6)

This function returns the slot number associated with a given node address.

**Return**  
The associated key slot.

**Parameters**  
-   `                           node_addr                         `: (input) A pointer which contains the node address in ASCII.

-   `                           wallet_name                         `: (input) A pointer which contains the wallet name in ASCII, used to identify the wallet identity. If desired, this parameter can be NULL and the master\_seed\_slot parameter can be specified instead.

-   `                           master_seed_slot                         `: (input) The master seed slot. Can be used to specify the wallet identity instead of the wallet name.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

LED Control

<span id="_CPPv3N10zkAppUtils7zkClass6ledOffEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass6ledOffEv"></span> <span id="zkAppUtils::zkClass::ledOff"></span> <span id="classzk_app_utils_1_1zk_class_1a0071ea33df7fcddd04d53c1314d535c3" class="target"></span> <span class="pre">void</span> `                 ledOff               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Turn LED off.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass5ledOnEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass5ledOnEv"></span> <span id="zkAppUtils::zkClass::ledOn"></span> <span id="classzk_app_utils_1_1zk_class_1a8531fbc0c9c218131d8e583d5275c8c9" class="target"></span> <span class="pre">void</span> `                 ledOn               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Turn LED on.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass8ledFlashE8uint32_t8uint32_t8uint32_t"></span> <span id="_CPPv2N10zkAppUtils7zkClass8ledFlashE8uint32_t8uint32_t8uint32_t"></span> <span id="zkAppUtils::zkClass::ledFlash__uint32_t.uint32_t.uint32_t"></span> <span id="classzk_app_utils_1_1zk_class_1a40f09d223beda138c8cb94fb6104caca" class="target"></span> <span class="pre">void</span> `                 ledFlash               ` <span class="sig-paren">(</span> <span class="pre">uint32\_t</span> *<span class="pre">on\_ms</span>* , <span class="pre">uint32\_t</span> *<span class="pre">off\_ms</span>* <span class="pre">=</span> <span class="pre">0</span>, <span class="pre">uint32\_t</span> *<span class="pre">num\_flashes</span>* <span class="pre">=</span> <span class="pre">0</span> <span class="sig-paren">)</span>    
Flash LED a certain number of times.

**Parameters**  
-   `                           on_ms                         `: Number of milliseconds that the LED will be on during a flash cycle

-   `                           off_ms                         `: Number of milliseconds that the LED will be off during a flash cycle

-   `                           num_flashes                         `: Number of flash cycles to execute. 0 = infinite.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Administrative

<span id="_CPPv3N10zkAppUtils7zkClass10setI2CAddrEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass10setI2CAddrEi"></span> <span id="zkAppUtils::zkClass::setI2CAddr__i"></span> <span id="classzk_app_utils_1_1zk_class_1acd808f1709fcc0a8cdda9de14763ff1b" class="target"></span> <span class="pre">void</span> `                 setI2CAddr               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">addr</span>* <span class="sig-paren">)</span>    
Sets the i2c address (i2c versions only). Used in case of i2c bus device address conflict.

**Parameters**  
-   `                           addr                         `: The i2c address to set. Upon successful change, the Zymkey will reset itself. However, if the address is the same as the current setting, the Zymkey will not reset. Valid address ranges are 0x30 - 0x37 and 0x60 - 0x67.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Time

<span id="_CPPv3N10zkAppUtils7zkClass7getTimeEb"></span> <span id="_CPPv2N10zkAppUtils7zkClass7getTimeEb"></span> <span id="zkAppUtils::zkClass::getTime__b"></span> <span id="classzk_app_utils_1_1zk_class_1ac31d4badb6328045e8cab672e3394018" class="target"></span> <span class="pre">uint32\_t</span> `                 getTime               ` <span class="sig-paren">(</span> <span class="pre">bool</span> *<span class="pre">precise\_time</span>* <span class="pre">=</span> <span class="pre">false</span> <span class="sig-paren">)</span>    
Get current GMT time.

This method is called to get the time directly from a Zymkey’s Real Time Clock (RTC)

**Return**  
The time in seconds from the epoch (Jan. 1, 1970).

**Parameters**  
-   `                           precise_time                         `: (input) If true, this API returns the time after the next second falls. This means that the caller could be blocked up to one second. If false, the API returns immediately with the current time reading.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Accelerometer

<span id="_CPPv3N10zkAppUtils7zkClass17setTapSensitivityEf18ZK_ACCEL_AXIS_TYPE"></span> <span id="_CPPv2N10zkAppUtils7zkClass17setTapSensitivityEf18ZK_ACCEL_AXIS_TYPE"></span> <span id="zkAppUtils::zkClass::setTapSensitivity__float.ZK_ACCEL_AXIS_TYPE"></span> <span id="classzk_app_utils_1_1zk_class_1ac9d8a6cc388eaf2b37099929da776a59" class="target"></span> <span class="pre">void</span> `                 setTapSensitivity               ` <span class="sig-paren">(</span> <span class="pre">float</span> *<span class="pre">pct</span>* , <span class="pre">ZK\_ACCEL\_AXIS\_TYPE</span> *<span class="pre">axis</span>* <span class="pre">=</span> <span class="pre">ZK\_ACCEL\_AXIS\_ALL</span> <span class="sig-paren">)</span>    
Sets the sensitivity of the tap detection as a percentage for an individual axis or all axes.

**Parameters**  
-   `                           pct                         `: Sensitivity expressed in percentage. 0% = off, 100% = maximum.

-   `                           axis                         `: X, Y, Z or all (default).

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass10waitForTapE8uint32_t"></span> <span id="_CPPv2N10zkAppUtils7zkClass10waitForTapE8uint32_t"></span> <span id="zkAppUtils::zkClass::waitForTap__uint32_t"></span> <span id="classzk_app_utils_1_1zk_class_1ab00515782c453df5103905b5058fc21f" class="target"></span> <span class="pre">void</span> `                 waitForTap               ` <span class="sig-paren">(</span> <span class="pre">uint32\_t</span> *<span class="pre">timeout\_ms</span>* <span class="sig-paren">)</span>    
Wait for a tap event to be detected.

This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.

**Parameters**  
-   `                           timeout_ms                         `: (input) The maximum amount of time in milliseconds to wait for a tap event to arrive.

**Exceptions**  
-   `                           zkAppUtilsTimeoutException                         `: upon timeout or zkAppUtilsException upon other errors

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass20getAccelerometerDataER9accelData"></span> <span id="_CPPv2N10zkAppUtils7zkClass20getAccelerometerDataER9accelData"></span> <span id="zkAppUtils::zkClass::getAccelerometerData__accelDataR"></span> <span id="classzk_app_utils_1_1zk_class_1ae9c5c2c67b60cea02fd13e5f545158a6" class="target"></span> <span class="pre">void</span> `                 getAccelerometerData               ` <span class="sig-paren">(</span> <a href="index.html#_CPPv4N10zkAppUtils9accelDataE" class="reference internal" title="zkAppUtils::accelData"><span class="pre">accelData</span></a> <span class="pre">&</span> *<span class="pre">accel\_data</span>* <span class="sig-paren">)</span>    
Get current accelerometer data and tap info.

This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis. Array index 0 = x 1 = y 2 = z

**Parameters**  
-   `                           accel_data                         `: (output) The current accelerometer data and tap information

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Binding Management

<span id="_CPPv3N10zkAppUtils7zkClass11lockBindingEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass11lockBindingEv"></span> <span id="zkAppUtils::zkClass::lockBinding"></span> <span id="classzk_app_utils_1_1zk_class_1a88a59ed6eca3f5bd83895d2fabac0000" class="target"></span> <span class="pre">void</span> `                 lockBinding               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Set soft binding lock.

This function locks the binding for a specific HSM. This API is only valid for HSM series products.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass21getCurrentBindingInfoERbRb"></span> <span id="_CPPv2N10zkAppUtils7zkClass21getCurrentBindingInfoERbRb"></span> <span id="zkAppUtils::zkClass::getCurrentBindingInfo__bR.bR"></span> <span id="classzk_app_utils_1_1zk_class_1a984102f5f0bfdd298db1fb67b1e2111e" class="target"></span> <span class="pre">void</span> `                 getCurrentBindingInfo               ` <span class="sig-paren">(</span> <span class="pre">bool</span> <span class="pre">&</span> *<span class="pre">binding\_is\_locked</span>* , <span class="pre">bool</span> <span class="pre">&</span> *<span class="pre">is\_bound</span>* <span class="sig-paren">)</span>    
Get current binding info.

This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.

**Parameters**  
-   `                           binding_is_locked                         `: (output) Binary value which expresses the current binding lock state. is\_bound (output) Binary value which expresses the current bind state.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Perimeter Detect

<span id="_CPPv3N10zkAppUtils7zkClass23setPerimeterEventActionEi8uint32_t"></span> <span id="_CPPv2N10zkAppUtils7zkClass23setPerimeterEventActionEi8uint32_t"></span> <span id="zkAppUtils::zkClass::setPerimeterEventAction__i.uint32_t"></span> <span id="classzk_app_utils_1_1zk_class_1a2bf03172ebb08f4b8aef9d2541545cdf" class="target"></span> <span class="pre">void</span> `                 setPerimeterEventAction               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">channel</span>* , <span class="pre">uint32\_t</span> *<span class="pre">action\_flags</span>* <span class="sig-paren">)</span>    
Set perimeter breach action.

This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:

-   Notify host

-   Zymkey self-destruct

    **Parameters**  
    -   `                               channel                             `: (input) The channel (0 or 1) that the action flags will be applied to.

    -   `                               action_flags                             `: (input) The actions to apply to the perimeter event channel:

        -   Notify (ZK\_PERIMETER\_EVENT\_ACTION\_NOTIFY)

        -   Self-destruct (ZK\_PERIMETER\_EVENT\_ACTION\_SELF\_DESTRUCT)

    **Exceptions**  
    -   `                               zkAppUtilsException                             `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass33setDigitalPerimeterDetectLPPeriodEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass33setDigitalPerimeterDetectLPPeriodEi"></span> <span id="zkAppUtils::zkClass::setDigitalPerimeterDetectLPPeriod__i"></span> <span id="classzk_app_utils_1_1zk_class_1a435c6ceebccb97bcaf8316a853b0f220" class="target"></span> <span class="pre">void</span> `                 setDigitalPerimeterDetectLPPeriod               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">lp\_period</span>* <span class="sig-paren">)</span>    
Set the low power period (model &gt;= HSM6).

This function sets low power period on the digital perimeter detect

**Return**  
void.

**Parameters**  
-   `                           lp_period                         `: (input) low power period in microseconds

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass34setDigitalPerimeterDetectLPMaxBitsEi"></span> <span id="_CPPv2N10zkAppUtils7zkClass34setDigitalPerimeterDetectLPMaxBitsEi"></span> <span id="zkAppUtils::zkClass::setDigitalPerimeterDetectLPMaxBits__i"></span> <span id="classzk_app_utils_1_1zk_class_1aa78c0fb85fefdf67ba5292024718bdcf" class="target"></span> <span class="pre">void</span> `                 setDigitalPerimeterDetectLPMaxBits               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">max\_num\_bits</span>* <span class="sig-paren">)</span>    
Set the low power max number of bits (model &gt;= HSM6).

This function sets low power max number of bits on the digital perimeter detect

**Return**  
void.

**Parameters**  
-   `                           max_num_bits                         `: (input) max number of bits

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass31setDigitalPerimeterDetectDelaysEii"></span> <span id="_CPPv2N10zkAppUtils7zkClass31setDigitalPerimeterDetectDelaysEii"></span> <span id="zkAppUtils::zkClass::setDigitalPerimeterDetectDelays__i.i"></span> <span id="classzk_app_utils_1_1zk_class_1a21ffee7105f368c8f72d6fd36de577f4" class="target"></span> <span class="pre">void</span> `                 setDigitalPerimeterDetectDelays               ` <span class="sig-paren">(</span> <span class="pre">int</span> *<span class="pre">min\_delay\_ns</span>* , <span class="pre">int</span> *<span class="pre">max\_delay\_ns</span>* <span class="sig-paren">)</span>    
Set the delays (model &gt;= HSM6).

This function sets delays on the digital perimeter detect

**Return**  
void.

**Parameters**  
-   `                           min_delay_ns                         `: (input) minimum delay in nanoseconds

-   `                           max_delay_ns                         `: (input) maximum delay in nanoseconds

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass21waitForPerimeterEventE8uint32_t"></span> <span id="_CPPv2N10zkAppUtils7zkClass21waitForPerimeterEventE8uint32_t"></span> <span id="zkAppUtils::zkClass::waitForPerimeterEvent__uint32_t"></span> <span id="classzk_app_utils_1_1zk_class_1a0b2fcd99b282a30b779560375eb6e54f" class="target"></span> <span class="pre">void</span> `                 waitForPerimeterEvent               ` <span class="sig-paren">(</span> <span class="pre">uint32\_t</span> *<span class="pre">timeout\_ms</span>* <span class="sig-paren">)</span>    
Wait for a perimeter breach event to be detected.

This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero. Note that, in order to receive perimeter events, the zymkey must have been configured to notify the host on either or both of the perimeter detect channels via a call to “zkSetPerimeterEventAction”.

**Parameters**  
-   `                           timeout_ms                         `: (input) The maximum amount of time in milliseconds to wait for a perimeter event to arrive.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass22getPerimeterDetectInfoEPP8uint32_tRi"></span> <span id="_CPPv2N10zkAppUtils7zkClass22getPerimeterDetectInfoEPP8uint32_tRi"></span> <span id="zkAppUtils::zkClass::getPerimeterDetectInfo__uint32_tPP.iR"></span> <span id="classzk_app_utils_1_1zk_class_1a57aa4d041fe70d3d2728b4de44d4e6eb" class="target"></span> <span class="pre">void</span> `                 getPerimeterDetectInfo               ` <span class="sig-paren">(</span> <span class="pre">uint32\_t</span> <span class="pre">\*</span> <span class="pre">\*</span> *<span class="pre">timestamp\_sec</span>* , <span class="pre">int</span> <span class="pre">&</span> *<span class="pre">num\_timestamps</span>* <span class="sig-paren">)</span>    
Get current perimeter detect info.

This function gets the timestamp of the first perimeter detect event for the given channel

**Parameters**  
-   `                           timestamps_sec                         `: (output) The timestamps for when any events occurred. The index in this array corresponds to the channel number used by zkSetPerimeterEventAction. A 0 value means no breach has occurred on this channel. This array is allocated by this routine and so it must be freed by the caller.

-   `                           num_timestamps                         `: (output) The number of timestamps in the returned array

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass26clearPerimeterDetectEventsEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass26clearPerimeterDetectEventsEv"></span> <span id="zkAppUtils::zkClass::clearPerimeterDetectEvents"></span> <span id="classzk_app_utils_1_1zk_class_1af94e6c0e537f18e320c65728764e5ca8" class="target"></span> <span class="pre">void</span> `                 clearPerimeterDetectEvents               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Clear perimeter detect info.

This function clears all perimeter detect info and rearms all perimeter detect channels

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass20getModelNumberStringEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass20getModelNumberStringEv"></span> <span id="zkAppUtils::zkClass::getModelNumberString"></span> <span id="classzk_app_utils_1_1zk_class_1a732b084f85070c00ef2423f76aba29e2" class="target"></span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> `                 getModelNumberString               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get Zymkey model number.

This function retrieves the model number of the zymkey referred to in a specified context

**Return**  
A pointer to a string containing the Zymkey model number.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass24getFirmwareVersionStringEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass24getFirmwareVersionStringEv"></span> <span id="zkAppUtils::zkClass::getFirmwareVersionString"></span> <span id="classzk_app_utils_1_1zk_class_1a00d5031efc2b7040db08da5e86e85e2c" class="target"></span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> `                 getFirmwareVersionString               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get Zymkey firmware version.

This function retrieves the firmware version of the zymkey referred to in a specified context.

**Return**  
A pointer to a string containing the Zymkey firmware version.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass21getSerialNumberStringEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass21getSerialNumberStringEv"></span> <span id="zkAppUtils::zkClass::getSerialNumberString"></span> <span id="classzk_app_utils_1_1zk_class_1ab545df4772a4c23fae3e970a9e185a38" class="target"></span> <span class="pre">std</span> <span class="pre">::</span> <span class="pre">string</span> <span class="pre">\*</span> `                 getSerialNumberString               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get Zymkey serial number.

This function retrieves the serial number of the zymkey referred to in a specified context.

**Return**  
A pointer to a string containing the Zymkey serial number.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Module Info

<span id="_CPPv3N10zkAppUtils7zkClass10getCPUTempEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass10getCPUTempEv"></span> <span id="zkAppUtils::zkClass::getCPUTemp"></span> <span id="classzk_app_utils_1_1zk_class_1a6956a4bedbe0baee05318807605dc674" class="target"></span> <span class="pre">float</span> `                 getCPUTemp               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get the CPU Temp. (model &gt;= HSM6)

This function gets the current HSM CPU temp.

**Return**  
The CPU temp as a float.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass11getRTCDriftEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass11getRTCDriftEv"></span> <span id="zkAppUtils::zkClass::getRTCDrift"></span> <span id="classzk_app_utils_1_1zk_class_1a2a9214bf2810417108ea300ff79b6d46" class="target"></span> <span class="pre">float</span> `                 getRTCDrift               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get the RTC drift. (model &gt;= HSM6)

This function gets the current RTC drift.

**Return**  
The RTC drift as a float.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass17getBatteryVoltageEv"></span> <span id="_CPPv2N10zkAppUtils7zkClass17getBatteryVoltageEv"></span> <span id="zkAppUtils::zkClass::getBatteryVoltage"></span> <span id="classzk_app_utils_1_1zk_class_1acaf94e9560d986f54750718ce6f12402" class="target"></span> <span class="pre">float</span> `                 getBatteryVoltage               ` <span class="sig-paren">(</span> <span class="sig-paren">)</span>    
Get the battery voltage(model &gt;= HSM6).

This function gets the current battery voltage

**Return**  
the battery voltage as a float.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

Battery Voltage Monitor

<span id="_CPPv3N10zkAppUtils7zkClass23setBatteryVoltageActionE24ZK_THRESHOLD_ACTION_TYPE"></span> <span id="_CPPv2N10zkAppUtils7zkClass23setBatteryVoltageActionE24ZK_THRESHOLD_ACTION_TYPE"></span> <span id="zkAppUtils::zkClass::setBatteryVoltageAction__ZK_THRESHOLD_ACTION_TYPE"></span> <span id="classzk_app_utils_1_1zk_class_1a374940c6de51d1a2bf9259d0542e0b0c" class="target"></span> <span class="pre">void</span> `                 setBatteryVoltageAction               ` <span class="sig-paren">(</span> <span class="pre">ZK\_THRESHOLD\_ACTION\_TYPE</span> *<span class="pre">action</span>* <span class="sig-paren">)</span>    
Set battery voltage threshold action. (model &gt;= HSM6)

This function specifies the action to take when the battery voltage falls below the threshold set by zkSetBatteryVoltageThreshold. If this function is never called, do nothing is default. There are three actions:

-   Do nothing

-   Go to sleep until battery is replaced

-   Self-destruct

    **Parameters**  
    -   `                               action                             `: (input) The action to apply, specify one of the ZK\_THRESHOLD\_ACTION\_TYPE:

        -   Do nothing (ZK\_ACTION\_NONE)

        -   Sleep (ZK\_ACTION\_SLEEP)

        -   Self-destruct (ZK\_ACTION\_SELF\_DESTRUCT)

    **Exceptions**  
    -   `                               zkAppUtilsException                             `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass26setBatteryVoltageThresholdEf"></span> <span id="_CPPv2N10zkAppUtils7zkClass26setBatteryVoltageThresholdEf"></span> <span id="zkAppUtils::zkClass::setBatteryVoltageThreshold__float"></span> <span id="classzk_app_utils_1_1zk_class_1af48b1f11765f94cc8f707101f197eeb5" class="target"></span> <span class="pre">void</span> `                 setBatteryVoltageThreshold               ` <span class="sig-paren">(</span> <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the battery voltage threshold. (model &gt;= HSM6)

This function sets the threshold at which if the battery voltage falls bellow, the action set by zkSetBatteryVoltageAction will be carried out. The recommended threshold is 2.3V. If this function isn’t called 2.5V is assumed by default.

**Parameters**  
-   `                           threshold                         `: (input) The threshold in Volts.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

</div>

<div class="breathe-sectiondef docutils container">

CPU Temperature Monitor

<span id="_CPPv3N10zkAppUtils7zkClass16setCPUTempActionE24ZK_THRESHOLD_ACTION_TYPE"></span> <span id="_CPPv2N10zkAppUtils7zkClass16setCPUTempActionE24ZK_THRESHOLD_ACTION_TYPE"></span> <span id="zkAppUtils::zkClass::setCPUTempAction__ZK_THRESHOLD_ACTION_TYPE"></span> <span id="classzk_app_utils_1_1zk_class_1ada7ce931928fedde9cec5c15cb1d1d91" class="target"></span> <span class="pre">void</span> `                 setCPUTempAction               ` <span class="sig-paren">(</span> <span class="pre">ZK\_THRESHOLD\_ACTION\_TYPE</span> *<span class="pre">action</span>* <span class="sig-paren">)</span>    
Set HSM CPU temperature threshold action. (model &gt;= HSM6)

This function specifies the action to take when the HSM CPU temperature falls below the threshold set by zkSetCPULowTempThreshold, or rises above the threshold set by zkSetCPUHighTempThreshold. There are two actions to apply:

-   Do nothing

-   Self-destruct

    **Parameters**  
    -   `                               action                             `: (input) The action to apply, used it’s named constant from ZK\_THRESHOLD\_ACTION\_TYPE:

        -   Do nothing (ZK\_ACTION\_NONE)

        -   Self-destruct (ZK\_ACTION\_SELF\_DESTRUCT)

    **Exceptions**  
    -   `                               zkAppUtilsException                             `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass22setCPULowTempThresholdEf"></span> <span id="_CPPv2N10zkAppUtils7zkClass22setCPULowTempThresholdEf"></span> <span id="zkAppUtils::zkClass::setCPULowTempThreshold__float"></span> <span id="classzk_app_utils_1_1zk_class_1aee3dcb54cfa647f1f51b81d539ceb1d6" class="target"></span> <span class="pre">void</span> `                 setCPULowTempThreshold               ` <span class="sig-paren">(</span> <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the HSM CPU low temperature threshold. (model &gt;= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature falls below, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU’s ambient temperature. The recommended setting is no more than 20C. If no threshold is set, -10 degrees Celsius is set as default.

**Parameters**  
-   `                           threshold                         `: (input) The threshold in celsius.

**Exceptions**  
-   `                           zkAppUtilsException                         `: upon error

<!-- -->

<span id="_CPPv3N10zkAppUtils7zkClass23setCPUHighTempThresholdEf"></span> <span id="_CPPv2N10zkAppUtils7zkClass23setCPUHighTempThresholdEf"></span> <span id="zkAppUtils::zkClass::setCPUHighTempThreshold__float"></span> <span id="classzk_app_utils_1_1zk_class_1a7ca53d9e747c76a88be85aad6ed60e3b" class="target"></span> <span class="pre">void</span> `                 setCPUHighTempThreshold               ` <span class="sig-paren">(</span> <span class="pre">float</span> *<span class="pre">threshold</span>* <span class="sig-paren">)</span>    
Sets the HSM CPU high temperature threshold. (model &gt;= HSM6)

This function sets the threshold at which if the on-board HSM CPU’s tempreature rises above, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU’s ambient temperature. The recommended setting is no less than 40C. If no threshold is set, 65 degrees celsius is set as default.

**Return**  
0 for success, less than 0 for failure.

**Parameters**  
-   `                           threshold                         `: (input) The threshold in celsius.

</div>

</div>
