<!-- markdownlint-disable-next-line MD041 -->
Log in to your host device and follow these steps to install Zymbit Driver Package 2.0 for your %PRODUCT%. The same steps upgrade a device that was set up with the legacy `install_zk_sw.sh` script.

Zymbit Driver Package 2.0 requires a 64-bit OS: Raspberry Pi OS (Debian 12 bookworm or Debian 13 trixie), or Ubuntu 24.04 or 26.04. On Ubuntu 22.04, Debian 11, or a 32-bit OS, use the [Driver Package 1.x instructions](/reference/driver-package/legacy/) instead.

1. Download the Zymbit repository package. The file is saved under its versioned name, for example `zymbit-repo_1.0-1_all.deb`:

    ```bash
    curl -fsSLOJ https://zk-repo.s3.amazonaws.com/zymbit-repo.deb
    ```

1. Install it and refresh the package lists. This adds the Zymbit `apt` source and signing key, and removes the legacy zk-sw-repo source if one is present:

    ```bash
    sudo apt install ./zymbit-repo_*_all.deb
    sudo apt update
    ```

1. If this device was set up with `install_zk_sw.sh`, back up `/var/lib/zymbit` before continuing.

1. Install the driver, the encryption tools, and the Python API, then reboot:

    ```bash
    sudo apt install zkifc zksaapps python3-zku
    sudo reboot
    ```

To install only the packages you need, opt in to beta updates, or build applications against the Zymkey API, see [Installing the Zymbit Driver Package](/reference/driver-package/).
