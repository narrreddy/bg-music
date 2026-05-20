# Changelog

## 2026-05-20

### Initial commit

Added:
- Created the static ambient mixer app shell in `index.html`
- Added the full audio engine, scene system, and UI wiring in `app.js`
- Added the responsive visual design and theme styling in `styles.css`
- Added bundled ambient categories for `rain`, `waves`, `jungle`, `wind`, `stream`, `crickets`, `brown noise`, and `campfire`
- Added per-track play or pause, mute, and volume controls
- Added master volume control
- Added quick scenes for `Deep Focus`, `Ocean Calm`, and `Night`
- Added Scene Studio for editing built-in scenes and creating custom scenes
- Added a floating global play or pause control
- Added a light and dark theme toggle
- Added the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`
- Added service worker support in `sw.js`
- Added PWA metadata in `site.webmanifest`
- Added install icons in `assets/icons/`
- Added repo hygiene files `.gitignore` and `.nojekyll`
- Added project documentation in `README.md`, `ASSET_SHORTLIST.md`, `CHANGELOG.md`, `LESSONS_LEARNED.md`, `METRICS_AND_LOGGING.md`, and `ONBOARDING.md`

Changed:
- Replaced generated fallback audio with real sourced assets
- Unified the mixer into a more minimal icon-first interface
- Improved mobile layout for quick scenes and Scene Studio
- Added live-preview behavior while editing scene mixes
- Added reset and revert behavior for built-in and custom scenes
- Added background audio warmup to reduce first-click delay after refresh

Removed:
- Removed the unused original source-audio folder from the repo

### Add optimized ambient audio assets

Added:
- Added optimized runtime audio files in `assets/audio/pixabay-optimized/`
- Added optimized `.m4a` assets for `brown noise`, `campfire`, `crickets`, `jungle`, `rain`, `stream`, `waves`, and `wind`

Changed:
- Switched the deployed runtime audio set to the optimized `.m4a` files
- Compressed `brown noise` and `jungle` more aggressively for better mobile delivery

### Document Git publishing issues and recovery flow

Added:
- Added publish troubleshooting guidance to `ONBOARDING.md`
- Added a safer recommended publish flow to `README.md`
- Added Git troubleshooting lessons to `LESSONS_LEARNED.md`

Changed:
- Expanded `CHANGELOG.md` to record the Git publish failure and recovery steps
- Clarified in the docs that the failed operation was remote publishing, not local commit creation
- Documented the switch from SSH to HTTPS for the GitHub remote
- Documented the successful split-push strategy of app/docs first and audio assets second
