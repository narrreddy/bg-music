# Stillwave Ambient Mixer

A lightweight browser-based ambient mixer built with the Web Audio API.

## Features

- Minimal icon-first ambient mixer
- One-tap scene buttons for `Deep Focus`, `Ocean Calm`, and `Night`
- Bundled local audio loops
- Single shared `AudioContext`
- Looping `AudioBufferSourceNode` playback
- Simple per-track volume sliders
- Per-track mute toggles
- Master volume control
- Responsive no-build UI
- Service worker caching for repeat visits
- PWA manifest for a more app-like phone install experience

## Project docs

- [CHANGELOG.md](/Users/arvind/Downloads/personal-repos/music/CHANGELOG.md:1)
  - high-level project history
- [ONBOARDING.md](/Users/arvind/Downloads/personal-repos/music/ONBOARDING.md:1)
  - where to start and how to work safely in this repo
- [LESSONS_LEARNED.md](/Users/arvind/Downloads/personal-repos/music/LESSONS_LEARNED.md:1)
  - what worked, what slowed us down, and how to move faster next time
- [METRICS_AND_LOGGING.md](/Users/arvind/Downloads/personal-repos/music/METRICS_AND_LOGGING.md:1)
  - current observability status and recommended next metrics

## Audio organization

- `assets/audio/pixabay-optimized/`
  - the AAC `.m4a` runtime assets used by the app in the browser

## Replication process

Use this workflow if someone needs to recreate the asset pipeline from the beginning.

1. Define the sound categories needed by the app.
   - For this project: `rain`, `waves`, `jungle`, `wind`, `stream`, `crickets`, `brown noise`, `campfire`.

2. Source only original files from free/licensed libraries first.
   - We prioritized Pixabay source pages because they expose creator attribution and clear licensing.
   - Avoid converter/ripping sites and avoid using third-party reuploads as the primary source.

3. Vet each candidate against the product requirements.
   - Must feel calm and focus-friendly.
   - Must be suitable for layering with other ambience.
   - Must be long enough, or steady enough, to support looping.
   - Must not contain vocals, music leads, or harsh distracting peaks.
   - Must have a visible license or reuse policy on the source page.

4. Save the shortlisted source information before downloading.
   - Record title, creator, source page, reason for selection, and any loop/mix risk.
   - See [ASSET_SHORTLIST.md](/Users/arvind/Downloads/personal-repos/music/ASSET_SHORTLIST.md:1).

5. Download the approved source files.
   - Rename them to simple stable filenames by category, for example `rain-pixabay.mp3`.
   - Keep the source-page credits even if the raw downloads are not retained in the repo.

6. Create optimized runtime files for the web app.
   - Convert the source MP3s into lighter AAC `.m4a` files for faster browser loading.
   - Store those optimized runtime files in `assets/audio/pixabay-optimized/`.
   - For this project, we first reduced the runtime audio set from about `59 MB` to about `24 MB`, then compressed `brown noise` and `jungle` further for better mobile speed.

7. Make the optimized assets the active runtime set.
   - The app now points directly at the `.m4a` files in `assets/audio/pixabay-optimized/`.
   - Loop behavior is handled in the playback layer by computing per-track loop regions after decoding.

8. Wire the app to the chosen runtime assets.
   - Audio file paths are defined in [app.js](/Users/arvind/Downloads/personal-repos/music/app.js:1).
   - If you swap source files later, update those paths there and re-test loop quality.

9. Credit the original creators in project docs.
   - Keep creator and source attribution in this README.
   - Recheck source terms before any redistribution or commercial reuse.

10. Validate the final structure.
   - Confirm asset files exist in the expected folders.
   - Run `node --check app.js`.
   - Serve locally with `python3 -m http.server 4173`.
   - Open `http://127.0.0.1:4173` and verify loading, playback, mixing, and no console errors.

## Included mixer sounds

- Rain
- Waves
- Jungle
- Wind
- Stream
- Crickets
- Brown Noise
- Campfire

## Credits

The optimized runtime files in `assets/audio/pixabay-optimized/` were derived from Pixabay source downloads and should remain credited to their original uploaders and source pages:

- Rain: `CALMING RAIN` by `liecio`
  - <https://pixabay.com/sound-effects/nature-calming-rain-257596/>
- Waves: `Soothing Ocean Waves` by `Dragon-Studio`
  - <https://pixabay.com/sound-effects/nature-soothing-ocean-waves-372489/>
- Jungle: `Nature sounds.tropical,jungle,birds` by `placidplace`
  - <https://pixabay.com/sound-effects/nature-nature-soundstropicaljunglebirds-108380/>
- Wind: `Wind Rustling Grass` by `Dragon-Studio`
  - <https://pixabay.com/sound-effects/wind-rustling-grass-339094/>
- Stream: `Peaceful Stream` by `Dragon-Studio`
  - <https://pixabay.com/sound-effects/nature-peaceful-stream-420898/>
- Crickets: `Night atmosphere with crickets` by `schorsch1964`
  - <https://pixabay.com/sound-effects/night-atmosphere-with-crickets-374652/>
- Brown Noise: `Soft Brown Noise` by `Cosmic Scapes`
  - <https://pixabay.com/sound-effects/film-special-effects-soft-brown-noise-299934/>
- Campfire: `Campfire Crackling | Fireplace Sound` by `SoundsForYou`
  - <https://pixabay.com/sound-effects/nature-campfire-crackling-fireplace-sound-119594/>

These were sourced for a personal project from Pixabay under the Pixabay Content License. Review source-page terms again before any broader redistribution or commercial reuse.

## Run locally

From the project root:

```bash
python3 -m http.server 4173
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## GitHub Pages

This project is set up to deploy as a static site through GitHub Pages using a GitHub Actions workflow.

Tracked files for deployment:

- app code in the project root
- optimized runtime audio in `assets/audio/pixabay-optimized/`
- PWA files such as `sw.js`, `site.webmanifest`, and `assets/icons/`

Recommended publish flow:

1. Initialize git if needed.
2. Create a new GitHub repository.
3. Push the project to the `main` branch.
4. In GitHub, enable Pages with `GitHub Actions` as the source.
5. The workflow in `.github/workflows/deploy-pages.yml` will publish the site automatically on push.
