# Lessons Learned

## Facts

- Static audio apps can still feel slow if the first user action triggers both fetch and decode.
- Original source files are often larger than necessary for browser runtime use.
- Mobile layout pain showed up most in scene-management controls, not in the core track grid.
- Users benefited more from live-preview scene editing than from extra form controls.

## Strong inferences

- Shipping faster next time means choosing the runtime asset format earlier, before UI polish.
- A single global transport should exist in one place only; duplicate transport buttons create UX confusion.
- Responsive design for control-dense areas should be handled as a first-class workflow, not as a cleanup pass.

## Hypotheses to validate later

- A PWA install flow would increase repeat use on phone.
- A service worker cache would noticeably improve repeat-visit startup on mobile.
- Additional scene tags or categories could improve discoverability without cluttering the UI.

## What helped

- Keeping the app static and no-build reduced complexity
- Using one `AudioContext` kept the audio engine simpler and more stable
- Separating original assets from optimized runtime assets made deployment safer
- Keeping sourcing notes in a dedicated shortlist prevented rework later

## What slowed us down

- Replacing fallback audio late in the process
- Handling mobile Scene Studio ergonomics after desktop polish
- First-play latency due to large source assets
- Theme-state conflicts from overlapping CSS overrides

## Faster next time

1. Decide the runtime asset format on day one.
2. Keep source downloads and deployed assets in separate folders immediately.
3. Add a changelog and onboarding guide at the start instead of near the end.
4. Design the dense control panel for mobile before finalizing desktop spacing.
5. Add a single global playback pattern early and avoid duplicate transport controls.
6. Measure total deployed asset size before polishing advanced UI behavior.
