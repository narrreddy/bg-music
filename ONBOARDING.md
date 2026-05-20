# Onboarding

## Objective

Help a new contributor understand the repo quickly, run it locally, and make safe changes without breaking playback or deployment.

## Repo map

- `index.html`
  - static app shell and UI structure
- `styles.css`
  - all layout, responsive, and theme styling
- `app.js`
  - audio engine, scene logic, UI binding, and startup optimization
- `assets/audio/pixabay-optimized/`
  - optimized browser runtime assets tracked for deployment
- `sw.js`
  - service worker for shell and audio caching
- `site.webmanifest`
  - install metadata for phones and other PWA-capable browsers
- `assets/icons/`
  - app icons for installed and browser surfaces
- `ASSET_SHORTLIST.md`
  - sourcing decisions and asset-selection reasoning
- `CHANGELOG.md`
  - high-level project change history
- `LESSONS_LEARNED.md`
  - project lessons and faster-next-time guidance
- `METRICS_AND_LOGGING.md`
  - current observability status and recommended next metrics

## Fast start

1. Install nothing. This is a no-build static app.
2. From the repo root, run:

```bash
python3 -m http.server 4173
```

3. Open:

```text
http://127.0.0.1:4173
```

4. Run a syntax check after JavaScript edits:

```bash
node --check app.js
```

## How the app works

- `app.js` defines the track catalog at the top.
- On first meaningful use, the app creates one shared `AudioContext`.
- Each track gets:
  - one decoded `AudioBuffer`
  - one `GainNode`
  - a looping `AudioBufferSourceNode` when playing
- Scene buttons call mix presets that set track volumes and active tracks.
- Scene Studio allows editing and live-previewing a scene before saving it.
- The floating play or pause button resumes the previously paused mix.

## Safe edit areas

- Add or adjust scenes in `DEFAULT_RECIPES` inside `app.js`
- Adjust initial track volumes in `TRACKS`
- Improve layout and responsiveness in `styles.css`
- Update documentation in the markdown files

## Risky edit areas

- `initializeAudio()`
  - affects asset loading and decode flow
- loop-point logic
  - changes can break seamless playback
- floating playback resume behavior
  - easy to regress if global transport logic is simplified too aggressively

## Pre-merge checklist

- Run `node --check app.js`
- Serve the app locally
- Verify at least:
  - one track plays
  - one scene plays
  - Scene Studio previews changes live
  - floating play or pause resumes the last paused mix
  - mobile layout is usable in a narrow viewport

## Deployment notes

- GitHub Pages deploys tracked repo files only
- optimized `.m4a` runtime assets are the deployed audio set
- `main` currently tracks `origin/main` over HTTPS

## Git publish troubleshooting

- If a publish appears to fail, separate local history from remote state first:
  - `git log --oneline -n 5`
  - `git reflog -n 10`
  - `git ls-remote --heads origin`
- If the local commit exists but the remote branch did not move, the problem is push or auth, not commit creation.
- If SSH access fails with `Permission denied (publickey)`, switch the remote to HTTPS:

```bash
git remote set-url origin https://github.com/<your-username>/<your-repo>.git
```

- If a large first push disconnects during upload, split the publish into smaller commits:
  - push app code, docs, workflow, manifest, service worker, and icons first
  - push audio assets in a second commit
- If you need to remove unpublished local commits but keep the worktree intact:

```bash
git reset --mixed origin/main
```

- That reset removes local-only commits while preserving file changes unstaged for a clean recommit.
