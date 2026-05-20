# Metrics And Logging

## Objective

Clarify what this repo currently tracks, what it does not track, and what should be added next if we want better operational visibility.

## Current state

Facts:

- There is no backend.
- There is no external analytics integration.
- There is no persistent runtime logging pipeline.
- There is no automated performance dashboard.
- We do have project documentation, asset rationale, and a local git history foundation.

## What is currently documented

- sourcing decisions in `ASSET_SHORTLIST.md`
- project and deployment process in `README.md`
- change history in `CHANGELOG.md`
- onboarding flow in `ONBOARDING.md`
- project lessons in `LESSONS_LEARNED.md`

## What is not currently measured

- first-contentful paint
- time to first playable scene
- audio decode duration
- scene usage frequency
- device or browser breakdown
- error rate in the browser console

## Recommended next metrics

If we want lightweight observability without adding much complexity, track:

1. `time_to_audio_ready_ms`
   - time from page load to bundled audio ready
2. `first_scene_play_ms`
   - time from first user interaction to audible playback
3. `scene_play_count`
   - which presets people use most
4. `track_toggle_count`
   - which ambient layers matter most
5. `theme_preference`
   - light vs dark usage
6. `mobile_vs_desktop_sessions`
   - to guide future responsive work

## Recommended next logging events

- `audio_prefetch_started`
- `audio_prefetch_completed`
- `audio_decode_completed`
- `scene_preview_started`
- `scene_saved`
- `scene_reset`
- `floating_resume_used`
- `audio_load_failed`

## Lowest-complexity implementation path

For a future iteration:

1. Add a tiny client-side metrics module in `app.js`
2. Store recent timing data in `localStorage` for debugging
3. Optionally print a compact dev-only metrics table to the console
4. Only add external analytics if the project becomes public and actively used

## Important constraint

Because this is currently a static personal project, adding full analytics now would likely be premature. The better move is to keep docs strong and add small, intentional measurements only when they answer a real question.
