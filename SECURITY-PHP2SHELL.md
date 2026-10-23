# Security note — PHP2Shell (CVE-2026-109618 / CVE-2026-109619)

**Important:** This is a vulnerability in the **PHP runtime** (engine), not a bug in this application's PHP source. Updating WordPress/Laravel/plugins alone does **not** fix it.

## What to do on the server

1. Check version: `php -v` (or hosting panel).
2. Upgrade PHP to a patched release, then restart the web SAPI:
   - **8.5.12+** · **8.4.27+** · **8.3.36+** · **8.2.35+**
   - PHP **8.1 and older**: upgrade to a supported branch, or apply vendor/LTS backport if your host provides one.
3. Restart **PHP-FPM** / **Apache mod_php** / **LiteSpeed** after the upgrade.
4. Re-check: `php -v` matches a patched build.

## References

- https://www.wiz.io/blog/php2shell-php-rce
- https://www.php2shell.com/
- https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote

## This repository

Partial PHP pages — only relevant if the host still executes `.php` files; patch **server PHP** if so.

Logged for operators: 2026-10-23.

