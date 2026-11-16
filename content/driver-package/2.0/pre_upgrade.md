## Heading

**Upgrading from the 1.0 Zymbit Driver to Zymbit Driver Package 2.0 is a migration, not a routine update.** It moves devices from the heterogeneous, distribution-specific legacy APT repositories to a common new APT repository, renames and splits several packages, and drops Ubuntu 22.04, Debian 11 and 32-bit ARM. Running `apt upgrade` on a device still using zk-sw-repo will not move it to 2.0.

## Before upgrading to Zymbit Driver Package 2.0

* Back up `/var/lib/zymbit`.
* Keep a copy of `/etc/zk_pkcs11.conf` and your PKCS#11 tokens. The token directory stays at `/var/lib/zymbit/zk_pkcs11/tokens/`, so existing tokens carry over.
* Plan to rebuild applications built against the old Zymkey API libraries. The new libraries have versioned names.

{{< callout warning >}}
**Upgrading deployed devices?** Driver Package 2.0 has been tested in upgrade scenarios; however, there is always risk when encrypted in-field devices are being upgraded. Test before deployment and proceed at your own risk. Please contact Zymbit support at <support@zymbit.com> if you need assistance.
{{< /callout >}}

The `zymbit-repo` package is aware of the old driver and will generally behave correctly. However, if the system install has been customized, or the distribution is non-standard, the standard procedure may not upgrade properly. Always test and check to make sure the upgrade is working as intended.