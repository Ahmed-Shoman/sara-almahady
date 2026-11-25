# Sara Alwahedy — Salla store customization

Custom CSS and JS for the homepage of saraalwahedy.com (Salla, Raed theme), served via jsDelivr.

The Salla theme fields load the files pinned to a commit:

- CSS field: `@import url('https://cdn.jsdelivr.net/gh/Ahmed-Shoman/sara-almahady@<commit>/custom.css');`
- JS field: a loader that adds `https://cdn.jsdelivr.net/gh/Ahmed-Shoman/sara-almahady@<commit>/custom.js`

## Updating
1. Edit `custom.css` / `custom.js`, commit and push.
2. Copy the new commit hash (`git log -1 --format=%h`).
3. In Salla (تخصيص متقدم ← CSS / JavaScript) replace the old hash in both links and save.

Pinning to a commit avoids jsDelivr's branch cache (`@main` can serve an old version for up to 12 hours).
