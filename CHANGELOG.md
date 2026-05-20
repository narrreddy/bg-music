# Changelog

## Operational Timeline

This file records the build and publish flow as an event-by-event timeline.

## Facts confirmed from Git metadata

### timestamp
`2026-05-20T18:59:10-04:00`

### event type
`Commit`

### short title
`Local root commit created for full ambient mixer build`

### Added:
- Added `index.html` with the static app shell
- Added `app.js` with the audio engine, track catalog, scene logic, transport logic, and startup warmup
- Added `styles.css` with responsive layout, light/dark theme support, and mixer styling
- Added `.github/workflows/deploy-pages.yml`
- Added `.gitignore`
- Added `.nojekyll`
- Added `site.webmanifest`
- Added `sw.js`
- Added icon assets in `assets/icons/`
- Added docs: `README.md`, `ASSET_SHORTLIST.md`, `CHANGELOG.md`, `LESSONS_LEARNED.md`, `METRICS_AND_LOGGING.md`, and `ONBOARDING.md`

### Changed:
- Changed the runtime design from generated fallback audio to sourced ambient files described in the docs
- Changed the UI direction to a minimal icon-first mixer with quick scenes, Scene Studio, theme toggle, and floating play/pause
- Changed mobile behavior to support smaller-screen quick-scene and Scene Studio layouts
- Changed scene editing to support live preview, reset, and revert behavior
- Changed startup behavior to warm audio in the background before first interaction

### Removed:
- Removed the unused original source-audio folder from the repo payload before publication

### timestamp
`2026-05-20T19:06:54-04:00`

### event type
`Commit`

### short title
`Remote repository initial commit already existed`

### Added:
- Added `LICENSE` on the remote branch
- Added a minimal `README.md` on the remote branch

### Changed:
- Changed the future publish path by requiring local history to reconcile with an existing `origin/main`

### timestamp
`2026-05-20T19:09:29-04:00`

### event type
`Merge`

### short title
`Merged local branch with origin/main before first publish attempt`

### Added:
- Added `LICENSE` from the remote branch into local merged history

### Changed:
- Changed the local branch state from a standalone root commit to a merged branch that included `origin/main`
- Changed `README.md` into a merge-resolved file during the pre-publish integration path

### timestamp
`2026-05-20T19:16:18-04:00`

### event type
`Reset`

### short title
`Mixed reset to origin/main to preserve changes while dropping unpublished local history`

### Added:
- Added no new tracked files in this step

### Changed:
- Changed branch history by moving `HEAD` to `origin/main`
- Changed the worktree state so the unpublished local changes remained present but unstaged
- Changed the publication strategy from “push merged history as-is” to “recommit in smaller chunks”

### Removed:
- Removed the local-only merged commit chain from current branch history while retaining file content in the worktree

### timestamp
`2026-05-20T19:16:58-04:00`

### event type
`Commit`

### short title
`Recommitted app code, docs, workflow, and PWA shell without audio payload`

### Added:
- Added `app.js` back into tracked history after the reset
- Added `index.html` back into tracked history after the reset
- Added `styles.css` back into tracked history after the reset
- Added `.github/workflows/deploy-pages.yml`
- Added `.gitignore`
- Added `.nojekyll`
- Added `site.webmanifest`
- Added `sw.js`
- Added icon assets in `assets/icons/`
- Added docs: `README.md`, `ASSET_SHORTLIST.md`, `CHANGELOG.md`, `LESSONS_LEARNED.md`, `METRICS_AND_LOGGING.md`, and `ONBOARDING.md`

### Changed:
- Changed the first-publish packaging strategy by isolating app/docs/platform files from large audio binaries
- Changed the repo into a smaller initial push candidate before re-adding the optimized audio assets

### timestamp
`2026-05-20T19:17:11-04:00`

### event type
`Commit`

### short title
`Added optimized ambient audio assets as a separate publish unit`

### Added:
- Added `assets/audio/pixabay-optimized/brown-noise-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/campfire-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/crickets-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/jungle-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/rain-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/stream-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/waves-pixabay.m4a`
- Added `assets/audio/pixabay-optimized/wind-pixabay.m4a`

### Changed:
- Changed the deployed runtime asset set to the optimized `.m4a` files
- Changed `brown noise` and `jungle` into more aggressively compressed runtime files for faster mobile loading

### timestamp
`2026-05-20T19:19:21-04:00`

### event type
`Docs update`

### short title
`Documented publish failures, recovery flow, and safer remote strategy`

### Added:
- Added a `Git publish troubleshooting` section to `ONBOARDING.md`
- Added a safer staged publish flow to `README.md`
- Added Git failure lessons to `LESSONS_LEARNED.md`

### Changed:
- Changed `CHANGELOG.md` to record the publish failure and recovery flow
- Changed repo documentation to clarify that the earlier failure was a remote publish problem, not a local commit-creation problem
- Changed the documented recommendation to prefer HTTPS when SSH keys are not already verified
- Changed the documented recommendation to publish app/docs first and audio assets second for media-heavy first pushes

### timestamp
`2026-05-20T19:20:21-04:00`

### event type
`Docs update`

### short title
`Refined changelog from broad notes into explicit edit-by-edit entries`

### Added:
- Added more granular event wording inside `CHANGELOG.md`

### Changed:
- Changed the changelog structure from grouped milestone notes to explicit `Added`, `Changed`, and `Removed` entries
- Changed the level of detail so the file tracked concrete edits rather than only broad project summaries

### timestamp
`2026-05-20T19:21:53-04:00`

### event type
`Docs update`

### short title
`Converted changelog to a timestamped operational timeline`

### Added:
- Added timestamped event formatting to `CHANGELOG.md`

### Changed:
- Changed the changelog into a timeline-oriented record tied to commit and reflog timestamps

## Strong inferences from the session

The events below are supported by current repo docs and remote state, but their exact execution timestamps are not present in git commit metadata or reflog. They are recorded as inferred operational steps.

### timestamp
`2026-05-20T19:09:29-04:00 to 2026-05-20T19:16:18-04:00` `inferred`

### event type
`Push fix`

### short title
`Large first publish failed after local merge attempt`

### Added:
- Added no durable tracked files in this step

### Changed:
- Changed the diagnosis from “history needs merge” to “remote upload path is failing during first publish”
- Changed the publication plan toward a smaller staged push

### timestamp
`2026-05-20T19:09:29-04:00 to 2026-05-20T19:19:21-04:00` `inferred`

### event type
`Push fix`

### short title
`SSH publish path was abandoned and remote strategy switched to HTTPS`

### Added:
- Added no durable tracked files in this step

### Changed:
- Changed the expected transport from SSH to HTTPS for `origin`
- Changed the documented publish guidance to prefer HTTPS when SSH keys are not already verified

### timestamp
`2026-05-20T19:16:58-04:00` `inferred to have been followed by a successful remote push`

### event type
`Push fix`

### short title
`Smaller app/docs publish completed after the recommit split`

### Added:
- Added no new tracked content beyond the already-recorded commit payload

### Changed:
- Changed the remote publication strategy by pushing the lighter app/docs/platform commit separately from audio binaries

### timestamp
`2026-05-20T19:17:11-04:00` `inferred to have been followed by a successful remote push`

### event type
`Push fix`

### short title
`Audio-assets publish completed as the second stage of the split push`

### Added:
- Added no new tracked content beyond the already-recorded audio asset commit payload

### Changed:
- Changed the remote publication flow into a two-stage upload that separated code/docs from runtime audio files

### timestamp
`2026-05-20T19:19:21-04:00 to 2026-05-20T19:21:53-04:00` `inferred`

### event type
`Docs update`

### short title
`Post-publish follow-up commits captured the recovery flow and timeline`

### Added:
- Added repo guidance for future Git troubleshooting
- Added stricter operational history to the changelog

### Changed:
- Changed the documentation set so future contributors can distinguish local commit success from remote publish failures
