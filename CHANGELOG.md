# Changelog

## 2026-05-20

### 18:59:10 -0400

Commit: `daf485c` `Optimize mobile delivery and add PWA support`

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

### 19:09:29 -0400

Commit: `326e56c` `Merge remote main before publishing`

Added:
- Added `LICENSE` from the remote branch into local history during the merge

Changed:
- Merged local work with `origin/main` before the first publish attempt

### 19:16:18 -0400

Git action: reset to `origin/main`

Changed:
- Removed unpublished local commits from branch history with `git reset --mixed origin/main`
- Preserved all in-progress file changes in the working tree for a clean recommit

### 19:16:58 -0400

Commit: `e45f69d` `Optimize mobile delivery and add PWA support`

Added:
- Recommitted app code, docs, workflow, manifest, service worker, and icons without the audio payload

Changed:
- Split the original publish into a smaller first commit to reduce push risk

### 19:17:11 -0400

Commit: `b17f372` `Add optimized ambient audio assets`

Added:
- Added optimized runtime audio files in `assets/audio/pixabay-optimized/`
- Added optimized `.m4a` assets for `brown noise`, `campfire`, `crickets`, `jungle`, `rain`, `stream`, `waves`, and `wind`

Changed:
- Switched the deployed runtime audio set to the optimized `.m4a` files
- Compressed `brown noise` and `jungle` more aggressively for better mobile delivery

### 19:19:21 -0400

Commit: `5c299cb` `Document Git publishing issues and recovery flow`

Added:
- Added publish troubleshooting guidance to `ONBOARDING.md`
- Added a safer recommended publish flow to `README.md`
- Added Git troubleshooting lessons to `LESSONS_LEARNED.md`

Changed:
- Expanded `CHANGELOG.md` to record the Git publish failure and recovery steps
- Clarified in the docs that the failed operation was remote publishing, not local commit creation
- Documented the switch from SSH to HTTPS for the GitHub remote
- Documented the successful split-push strategy of app/docs first and audio assets second

### 19:20:21 -0400

Commit: `796ac93` `Refine changelog into edit-by-edit entries`

Changed:
- Reworked the changelog from broad grouped notes into explicit added, changed, and removed entries
- Organized the project history into clearer milestone-level records

## Facts confirmed from Git metadata

- `daf485c` was created at `2026-05-20 18:59:10 -0400`
- `326e56c` was created at `2026-05-20 19:09:29 -0400`
- the mixed reset to `origin/main` happened at `2026-05-20 19:16:18 -0400`
- `e45f69d` was created at `2026-05-20 19:16:58 -0400`
- `b17f372` was created at `2026-05-20 19:17:11 -0400`
- `5c299cb` was created at `2026-05-20 19:19:21 -0400`
- `796ac93` was created at `2026-05-20 19:20:21 -0400`

## Strong inferences from the session

- The first local app commit likely represented the main "build ambient sound mixer" implementation pass.
- The failure sequence happened after local commits existed, during remote publish and recovery work rather than during feature implementation itself.
