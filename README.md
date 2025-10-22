# Reelblock

Blocks Facebook Reels by removing matching elements from the page as they load.


## Overview
- Stack: Plain JavaScript content script + WebExtension Manifest (Manifest V3).
- Packaging/build: None.


## Requirements
- A supported browser:
  - Chromium-based (Chrome, Edge, Brave, etc.).
  - Firefox.
- No Node.js or package manager required.


## Setup and Running (Load Unpacked)
There is no build step. Load the extension directly from this folder.

Chromium-based browsers (Chrome, Edge, Brave):
1. Open the Extensions page:
   - Chrome/Brave: `chrome://extensions/`
   - Edge: `edge://extensions/`
2. Enable "Developer mode".
3. Click "Load unpacked" and select this project folder.
4. Navigate to facebook.com and ensure the extension is enabled.

Firefox:
1. Open `about:debugging#/runtime/this-firefox`.
2. Click "Load Temporary Add-on...".
3. Select the `manifest.json` file from this project folder.
4. Navigate to facebook.com.

Note: In Firefox, temporary add-ons are removed on browser restart; repeat the loading steps during development.
