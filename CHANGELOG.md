# Changelog

## 2026-05-20

### Added

- Browser-based ambient mixer with a single shared Web Audio `AudioContext`
- Bundled ambient tracks for `rain`, `waves`, `jungle`, `wind`, `stream`, `crickets`, `brown noise`, and `campfire`
- Per-track play or pause, mute, and volume controls
- Master volume control
- Quick scenes for `Deep Focus`, `Ocean Calm`, and `Night`
- Scene Studio for editing built-in scenes and creating custom scenes
- Light and dark theme toggle
- Floating global play or pause button
- GitHub Pages deployment workflow
- Service worker caching
- PWA manifest and install icons

### Changed

- Replaced generated fallback audio with real downloaded source assets
- Unified the mixer into a more minimal icon-first interface
- Improved mobile layout for quick scenes and Scene Studio
- Added live preview while editing scene mixes
- Added reset and revert behavior for built-in and custom scenes
- Optimized runtime audio from original MP3 sources into lighter AAC `.m4a` files
- Compressed `brown noise` and `jungle` more aggressively for better mobile loading
- Added background audio warmup to reduce first-click delay after refresh
- Removed the unused original source-audio folder from the repo

### Documentation

- Added sourcing shortlist and asset rationale
- Added replication and deployment notes
- Added onboarding, lessons learned, and metrics/logging guidance
- Documented Git publishing issues, root causes, and the successful recovery flow

### Fixed

- Clarified that the initial failure was not a broken local commit, but a remote publish problem
- Switched the Git remote from SSH to HTTPS after GitHub SSH auth failed with `Permission denied (publickey)`
- Avoided a large first-push transport failure by splitting the publish into:
  - a smaller app/docs commit
  - a second audio-assets commit
