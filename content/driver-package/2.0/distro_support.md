## Zymbit Driver Package 2.0 Supported distributions

Zymbit Driver Package 2.0 supports 64-bit ARM (arm64/aarch64) only. 32-bit ARM (armhf) packages are no longer built as standard. If you have a 32-bit requirement, contact Zymbit support at <support@zymbit.com>; case-by-case support may be available.

| Distribution | Codename | Driver Package 2.0 |
| --- | --- | --- |
| Ubuntu 26.04 LTS | resolute | Supported |
| Ubuntu 24.04 LTS | noble | Supported |
| Ubuntu 22.04 LTS | jammy | Not supported |
| Debian 13 (Raspberry Pi OS) | trixie | Supported |
| Debian 12 (Raspberry Pi OS) | bookworm | Supported |
| Debian 11 (Raspberry Pi OS) | bullseye | Not supported |

Ubuntu 22.04 and Debian 11 are not supported because the packages require glibc 2.36 or newer. Devices on those releases, or on a 32-bit OS, should stay on the [Driver Package 1.0 packages](legacy/) or upgrade the OS.

Production ZYMKEY5, HSM60, and SEN-505 units require Driver Package 2.0, so they cannot be used on Ubuntu 22.04, Debian 11, or a 32-bit OS. Earlier units of these products work with both Driver Package 2.0 and 1.0. Driver Package 1.0 receives no regular security updates; they are planned only if a critical or severe issue is discovered.

Production ZYMKEY5 units identify as `zymkey5`, which Driver Package 1.0 does not recognize. Pre-production ZYMKEY5 units identify as an HSM6.