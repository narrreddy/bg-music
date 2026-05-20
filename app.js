const TRACKS = [
  {
    id: "rain",
    label: "Rain",
    description: "Soft rainfall for steady concentration and texture.",
    src: "./assets/audio/pixabay-optimized/rain-pixabay.m4a",
    defaultVolume: 0.38,
    icon: "rain",
  },
  {
    id: "waves",
    label: "Waves",
    description: "Gentle ocean wash with slow breathing-like swells.",
    src: "./assets/audio/pixabay-optimized/waves-pixabay.m4a",
    defaultVolume: 0.37,
    icon: "waves",
  },
  {
    id: "jungle",
    label: "Jungle",
    description: "Calm tropical ambience with distant life and air.",
    src: "./assets/audio/pixabay-optimized/jungle-pixabay.m4a",
    defaultVolume: 0.34,
    icon: "jungle",
  },
  {
    id: "wind",
    label: "Wind",
    description: "Airy movement that blends well under brighter tracks.",
    src: "./assets/audio/pixabay-optimized/wind-pixabay.m4a",
    defaultVolume: 0.4,
    icon: "wind",
  },
  {
    id: "stream",
    label: "Stream",
    description: "Clear moving water for relaxed but alert attention.",
    src: "./assets/audio/pixabay-optimized/stream-pixabay.m4a",
    defaultVolume: 0.35,
    icon: "stream",
  },
  {
    id: "crickets",
    label: "Crickets",
    description: "Light nighttime detail for writing and reflective work.",
    src: "./assets/audio/pixabay-optimized/crickets-pixabay.m4a",
    defaultVolume: 0.32,
    icon: "crickets",
  },
  {
    id: "brown-noise",
    label: "Brown Noise",
    description: "Low, warm masking noise to reduce distraction fatigue.",
    src: "./assets/audio/pixabay-optimized/brown-noise-pixabay.m4a",
    defaultVolume: 0.3,
    icon: "noise",
  },
  {
    id: "campfire",
    label: "Campfire",
    description: "Soft ember crackle to add warmth without harshness.",
    src: "./assets/audio/pixabay-optimized/campfire-pixabay.m4a",
    defaultVolume: 0.31,
    icon: "campfire",
  },
];

const ICON_SVGS = {
  rain: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 12c8 10 14 15 14 24a14 14 0 1 1-28 0c0-9 6-14 14-24Z" />
      <path d="M22 47l-4 8M32 47l-4 8M42 47l-4 8" />
    </svg>
  `,
  waves: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 24c5 0 5 4 10 4s5-4 10-4 5 4 10 4 5-4 10-4 5 4 8 4" />
      <path d="M8 34c5 0 5 4 10 4s5-4 10-4 5 4 10 4 5-4 10-4 5 4 8 4" />
      <path d="M8 44c5 0 5 4 10 4s5-4 10-4 5 4 10 4 5-4 10-4 5 4 8 4" />
    </svg>
  `,
  jungle: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 10 18 28h8l-9 14h11l-5 12 18-22h-9l7-10h-8Z" />
      <path d="M32 42v12" />
    </svg>
  `,
  wind: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 24h28c5 0 8-3 8-7s-3-7-7-7-7 3-7 7" />
      <path d="M10 34h38c5 0 8 3 8 7s-3 7-7 7-7-3-7-7" />
      <path d="M10 44h22" />
    </svg>
  `,
  stream: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 12c0 10 8 10 8 20s-8 10-8 20" />
      <path d="M32 12c0 10 8 10 8 20s-8 10-8 20" />
      <path d="M44 12c0 10 8 10 8 20s-8 10-8 20" />
    </svg>
  `,
  crickets: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M23 38c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14Z" />
      <path d="M23 29 14 21M41 29l9-8M22 42 12 47M42 42l10 5M28 22l-3-8M36 22l3-8" />
    </svg>
  `,
  noise: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 37c4 0 4-10 8-10s4 10 8 10 4-10 8-10 4 10 8 10 4-10 8-10 4 10 8 10" />
      <path d="M8 27c4 0 4 10 8 10s4-10 8-10 4 10 8 10 4-10 8-10 4 10 8 10 4-10 8-10" />
    </svg>
  `,
  campfire: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 14c5 7 9 11 9 18a9 9 0 1 1-18 0c0-7 4-11 9-18Z" />
      <path d="M26 33c2 3 6 4 6 9a6 6 0 0 1-12 0c0-3 1-6 6-9Z" />
      <path d="M18 50h28M22 46l20 8M42 46 22 54" />
    </svg>
  `,
};

const DEFAULT_RECIPES = [
  {
    id: "deep-focus",
    label: "Deep Focus",
    subtitle: "Rain + Brown Noise + Stream",
    mix: {
      rain: 0.38,
      "brown-noise": 0.26,
      stream: 0.33,
    },
  },
  {
    id: "ocean-calm",
    label: "Ocean Calm",
    subtitle: "Waves + Wind + Campfire",
    mix: {
      waves: 0.37,
      wind: 0.35,
      campfire: 0.24,
    },
  },
  {
    id: "night",
    label: "Night",
    subtitle: "Jungle + Crickets + Rain",
    mix: {
      jungle: 0.32,
      crickets: 0.24,
      rain: 0.26,
    },
  },
];

const THEME_STORAGE_KEY = "stillwave-theme";
const PRESET_STORAGE_KEY = "stillwave-presets-v1";

const state = {
  AudioContextCtor: window.AudioContext || window.webkitAudioContext || null,
  context: null,
  masterGain: null,
  masterVolume: 0.8,
  tracks: new Map(),
  initPromise: null,
  prefetchPromise: null,
  prefetchedAudio: new Map(),
  activeRecipeId: null,
  theme: "dark",
  recipes: [],
  editorOpen: false,
  editingRecipeId: null,
  lastPausedTrackIds: [],
};

const ui = {
  trackList: document.querySelector("#track-list"),
  recipeList: document.querySelector("#recipe-list"),
  presetEditor: document.querySelector("#preset-editor"),
  presetEditorToggle: document.querySelector("#preset-editor-toggle"),
  presetQuickSave: document.querySelector("#preset-quick-save"),
  presetSelect: document.querySelector("#preset-select"),
  presetName: document.querySelector("#preset-name"),
  presetTrackList: document.querySelector("#preset-track-list"),
  presetNew: document.querySelector("#preset-new"),
  presetLoadCurrent: document.querySelector("#preset-load-current"),
  presetReset: document.querySelector("#preset-reset"),
  presetSave: document.querySelector("#preset-save"),
  presetDelete: document.querySelector("#preset-delete"),
  status: document.querySelector("#status"),
  themeToggle: document.querySelector("#theme-toggle"),
  floatingPlayback: document.querySelector("#floating-playback"),
  masterVolume: document.querySelector("#master-volume"),
  masterVolumeValue: document.querySelector("#master-volume-value"),
};

function createTrackState(config) {
  return {
    ...config,
    buffer: null,
    gainNode: null,
    sourceNode: null,
    isPlaying: false,
    isMuted: false,
    offset: 0,
    startedAt: 0,
    loopStart: 0,
    loopEnd: 0,
    loopLength: 0,
    volume: config.defaultVolume,
    elements: {},
  };
}

function setStatus(message) {
  ui.status.textContent = message;
}

async function fetchTrackArrayBuffer(trackConfig) {
  const cached = state.prefetchedAudio.get(trackConfig.id);
  if (cached) {
    return cached.slice(0);
  }

  const response = await fetch(trackConfig.src, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(`Failed to load ${trackConfig.label}.`);
  }

  const arrayBuffer = await response.arrayBuffer();
  state.prefetchedAudio.set(trackConfig.id, arrayBuffer);
  return arrayBuffer.slice(0);
}

async function preloadAudioAssets() {
  if (state.prefetchedAudio.size === TRACKS.length) {
    return state.prefetchedAudio;
  }

  if (!state.prefetchPromise) {
    state.prefetchPromise = Promise.all(
      TRACKS.map(async (trackConfig) => {
        await fetchTrackArrayBuffer(trackConfig);
      })
    )
      .then(() => state.prefetchedAudio)
      .catch((error) => {
        state.prefetchPromise = null;
        throw error;
      });
  }

  return state.prefetchPromise;
}

function scheduleAudioWarmup() {
  const warm = () => {
    void preloadAudioAssets().catch(() => {
      // If background prefetch fails, the normal interaction path will retry.
    });
  };

  const schedule = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warm, { timeout: 1500 });
      return;
    }

    window.setTimeout(warm, 250);
  };

  if (document.readyState === "complete") {
    schedule();
    return;
  }

  window.addEventListener("load", schedule, { once: true });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Non-fatal: the app still works without offline caching.
    });
  });
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function cloneMix(mix) {
  return Object.fromEntries(
    Object.entries(mix).map(([trackId, volume]) => [trackId, volume])
  );
}

function buildSubtitleFromMix(mix) {
  return Object.keys(mix)
    .map((trackId) => TRACKS.find((track) => track.id === trackId)?.label)
    .filter(Boolean)
    .join(" + ");
}

function createRecipeCopy(recipe) {
  return {
    id: recipe.id,
    label: recipe.label,
    subtitle: recipe.subtitle,
    mix: cloneMix(recipe.mix),
    builtIn: recipe.builtIn ?? true,
  };
}

function getDefaultRecipeById(recipeId) {
  const defaultRecipe = DEFAULT_RECIPES.find((recipe) => recipe.id === recipeId);
  return defaultRecipe ? createRecipeCopy({ ...defaultRecipe, builtIn: true }) : null;
}

function loadRecipes() {
  const saved = window.localStorage.getItem(PRESET_STORAGE_KEY);

  if (!saved) {
    state.recipes = DEFAULT_RECIPES.map((recipe) =>
      createRecipeCopy({ ...recipe, builtIn: true })
    );
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("Invalid preset storage.");
    }

    state.recipes = parsed.map((recipe) =>
      createRecipeCopy({
        ...recipe,
        builtIn: recipe.builtIn ?? DEFAULT_RECIPES.some((entry) => entry.id === recipe.id),
      })
    );
  } catch (_error) {
    state.recipes = DEFAULT_RECIPES.map((recipe) =>
      createRecipeCopy({ ...recipe, builtIn: true })
    );
  }
}

function saveRecipes() {
  window.localStorage.setItem(
    PRESET_STORAGE_KEY,
    JSON.stringify(
      state.recipes.map((recipe) => ({
        id: recipe.id,
        label: recipe.label,
        subtitle: recipe.subtitle,
        mix: recipe.mix,
        builtIn: recipe.builtIn ?? true,
      }))
    )
  );
}

function sanitizeRecipeName(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 32);
}

function createDefaultSceneName() {
  const customSceneCount = state.recipes.filter((recipe) => !recipe.builtIn).length + 1;
  return `Custom Scene ${customSceneCount}`;
}

function createUniqueRecipeId(name, ignoreId = null) {
  const base =
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || `scene-${Date.now()}`;

  let candidate = base;
  let counter = 2;

  while (
    state.recipes.some(
      (recipe) => recipe.id === candidate && recipe.id !== ignoreId
    )
  ) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }

  return candidate;
}

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function syncThemeUi() {
  document.body.dataset.theme = state.theme;
  ui.themeToggle.textContent = state.theme === "dark" ? "◐" : "◑";
  ui.themeToggle.setAttribute(
    "aria-label",
    state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
  ui.themeToggle.title =
    state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

function setTheme(theme) {
  state.theme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  syncThemeUi();
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

function createIconMarkup(iconId) {
  const wrapper = document.createElement("span");
  wrapper.className = "track-icon-art";
  wrapper.innerHTML = ICON_SVGS[iconId];
  return wrapper;
}

function renderRecipes() {
  ui.recipeList.replaceChildren();
  const fragment = document.createDocumentFragment();

  state.recipes.forEach((recipe) => {
    const button = document.createElement("button");
    button.className = "recipe-button";
    button.type = "button";
    button.addEventListener("click", () => playRecipe(recipe.id));

    const top = document.createElement("div");
    top.className = "recipe-button-top";

    const title = document.createElement("strong");
    title.textContent = recipe.label;

    const badge = document.createElement("span");
    badge.className = "recipe-badge";
    badge.textContent = recipe.builtIn ? "Built in" : "Custom";

    const subtitle = document.createElement("span");
    subtitle.className = "recipe-subtitle";
    subtitle.textContent = recipe.subtitle;

    const foot = document.createElement("span");
    foot.className = "recipe-foot";
    foot.textContent = "Tap to play";

    top.append(title, badge);
    button.append(top, subtitle, foot);
    fragment.append(button);
    recipe.element = button;
  });

  ui.recipeList.append(fragment);
}

function getEditingRecipe() {
  return state.recipes.find((recipe) => recipe.id === state.editingRecipeId) ?? null;
}

function renderPresetTrackEditor(recipe) {
  ui.presetTrackList.replaceChildren();
  const fragment = document.createDocumentFragment();

  TRACKS.forEach((track) => {
    const row = document.createElement("div");
    row.className = "preset-track-row";
    row.classList.toggle("is-enabled", recipe.mix[track.id] !== undefined);

    const meta = document.createElement("div");
    meta.className = "preset-track-meta";

    const icon = createIconMarkup(track.icon);

    const text = document.createElement("div");
    text.className = "preset-track-text";

    const name = document.createElement("strong");
    name.textContent = track.label;

    const description = document.createElement("span");
    description.textContent = track.description;

    text.append(name, description);
    meta.append(icon, text);

    const toggleLabel = document.createElement("label");
    toggleLabel.className = "preset-track-toggle";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = recipe.mix[track.id] !== undefined;
    checkbox.dataset.trackId = track.id;

    const switchUi = document.createElement("span");
    switchUi.className = "preset-track-switch";

    const switchText = document.createElement("span");
    switchText.className = "preset-track-switch-label";
    switchText.textContent = checkbox.checked ? "On" : "Off";

    toggleLabel.append(checkbox, switchUi, switchText);

    const sliderWrap = document.createElement("label");
    sliderWrap.className = "preset-track-slider";

    const sliderTop = document.createElement("div");
    sliderTop.className = "preset-track-slider-top";

    const sliderValue = document.createElement("strong");
    const currentVolume = recipe.mix[track.id] ?? track.defaultVolume;
    sliderValue.textContent = formatPercent(currentVolume);

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.step = "1";
    slider.value = String(Math.round(currentVolume * 100));
    slider.dataset.trackId = track.id;
    slider.disabled = !checkbox.checked;

    slider.addEventListener("input", () => {
      sliderValue.textContent = `${slider.value}%`;
      void previewPresetEditorMix();
    });

    checkbox.addEventListener("change", () => {
      slider.disabled = !checkbox.checked;
      switchText.textContent = checkbox.checked ? "On" : "Off";
      row.classList.toggle("is-enabled", checkbox.checked);
      void previewPresetEditorMix();
    });

    sliderTop.append(sliderValue);
    sliderWrap.append(sliderTop, slider);
    row.append(meta, toggleLabel, sliderWrap);
    fragment.append(row);
  });

  ui.presetTrackList.append(fragment);
}

function readPresetEditorMix() {
  const mix = {};

  ui.presetTrackList.querySelectorAll(".preset-track-row").forEach((row) => {
    const checkbox = row.querySelector('input[type="checkbox"]');
    const slider = row.querySelector('input[type="range"]');

    if (checkbox?.checked && slider) {
      mix[checkbox.dataset.trackId] = Number(slider.value) / 100;
    }
  });

  return mix;
}

function syncPresetEditor() {
  const recipe = getEditingRecipe();
  if (!recipe) {
    return;
  }

  ui.presetSelect.replaceChildren();

  state.recipes.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = entry.label;
    ui.presetSelect.append(option);
  });

  ui.presetSelect.value = recipe.id;
  ui.presetName.value = recipe.label;
  ui.presetDelete.disabled = recipe.builtIn;
  ui.presetReset.disabled = false;
  ui.presetReset.textContent = recipe.builtIn ? "Reset to Default" : "Revert Changes";
  renderPresetTrackEditor(recipe);
}

function setEditorOpen(isOpen) {
  state.editorOpen = isOpen;
  ui.presetEditor.classList.toggle("is-hidden", !isOpen);
  ui.presetEditorToggle.classList.toggle("is-primary", isOpen);
  ui.presetEditorToggle.textContent = isOpen ? "Close Studio" : "Scene Studio";
  ui.presetEditorToggle.setAttribute(
    "aria-label",
    isOpen ? "Close scene studio" : "Open scene studio"
  );
}

function createRecipeFromCurrentMix({ playingOnly = false } = {}) {
  const mix = {};

  TRACKS.forEach((trackConfig) => {
    const track = state.tracks.get(trackConfig.id);
    if (!track || track.isMuted) {
      return;
    }

    const shouldInclude = playingOnly ? track.isPlaying : track.isPlaying || track.volume > 0;
    if (shouldInclude) {
      mix[track.id] = Number(track.volume.toFixed(2));
    }
  });

  if (playingOnly && Object.keys(mix).length === 0) {
    return createRecipeFromCurrentMix({ playingOnly: false });
  }

  return {
    id: `scene-${Date.now()}`,
    label: createDefaultSceneName(),
    subtitle: buildSubtitleFromMix(mix) || "Choose tracks",
    mix,
    builtIn: false,
  };
}

function getAnalysisChannel(buffer) {
  if (buffer.numberOfChannels === 1) {
    return buffer.getChannelData(0);
  }

  const mono = new Float32Array(buffer.length);

  for (let channelIndex = 0; channelIndex < buffer.numberOfChannels; channelIndex += 1) {
    const channel = buffer.getChannelData(channelIndex);
    for (let sampleIndex = 0; sampleIndex < buffer.length; sampleIndex += 1) {
      mono[sampleIndex] += channel[sampleIndex] / buffer.numberOfChannels;
    }
  }

  return mono;
}

function findBestLoopPoints(buffer) {
  const channel = getAnalysisChannel(buffer);
  const sampleRate = buffer.sampleRate;
  const totalSamples = channel.length;
  const minimumLoopSeconds = Math.min(12, Math.max(6, buffer.duration * 0.4));
  const minimumLoopSamples = Math.max(1, Math.floor(minimumLoopSeconds * sampleRate));
  const searchSeconds = Math.min(5, Math.max(1.25, buffer.duration * 0.12));
  const searchSamples = Math.floor(searchSeconds * sampleRate);
  const windowSamples = Math.max(512, Math.floor(Math.min(0.32, buffer.duration / 8) * sampleRate));
  const stepSamples = Math.max(512, Math.floor(sampleRate * 0.12));
  const compareStride = Math.max(8, Math.floor(windowSamples / 384));
  const maxStartSample = Math.max(0, Math.min(searchSamples, totalSamples - minimumLoopSamples - windowSamples));
  let bestScore = Number.POSITIVE_INFINITY;
  let bestStartSample = 0;
  let bestEndSample = totalSamples;

  for (let startSample = 0; startSample <= maxStartSample; startSample += stepSamples) {
    const earliestEndSample = Math.max(
      startSample + minimumLoopSamples,
      totalSamples - searchSamples
    );
    const latestEndSample = totalSamples - windowSamples;

    for (let endSample = earliestEndSample; endSample <= latestEndSample; endSample += stepSamples) {
      let difference = 0;

      for (
        let offsetSample = 0;
        offsetSample < windowSamples;
        offsetSample += compareStride
      ) {
        const delta = channel[startSample + offsetSample] - channel[endSample + offsetSample];
        difference += delta * delta;
      }

      const normalizedDifference = difference / Math.max(1, windowSamples / compareStride);
      const lengthBonus = 1 - (endSample - startSample) / totalSamples;
      const score = normalizedDifference + lengthBonus * 0.02;

      if (score < bestScore) {
        bestScore = score;
        bestStartSample = startSample;
        bestEndSample = endSample;
      }
    }
  }

  if (!Number.isFinite(bestScore) || bestEndSample <= bestStartSample) {
    return {
      loopStart: 0,
      loopEnd: buffer.duration,
      loopLength: buffer.duration,
    };
  }

  return {
    loopStart: bestStartSample / sampleRate,
    loopEnd: bestEndSample / sampleRate,
    loopLength: (bestEndSample - bestStartSample) / sampleRate,
  };
}

function renderTracks() {
  const fragment = document.createDocumentFragment();

  TRACKS.forEach((trackConfig) => {
    const track = createTrackState(trackConfig);
    state.tracks.set(track.id, track);

    const card = document.createElement("article");
    card.className = "track-card";

    const topline = document.createElement("div");
    topline.className = "track-topline";

    const title = document.createElement("h3");
    title.className = "track-name";
    title.textContent = track.label;

    const stateBadge = document.createElement("span");
    stateBadge.className = "track-state";
    stateBadge.textContent = "Paused";

    topline.append(title, stateBadge);

    const playButton = document.createElement("button");
    playButton.className = "track-icon-button";
    playButton.type = "button";
    playButton.title = `Play or pause ${track.label}`;
    playButton.setAttribute("aria-label", `Play or pause ${track.label}`);
    playButton.addEventListener("click", () => toggleTrackPlayback(track.id));

    const playGlyph = createIconMarkup(track.icon);
    playButton.append(playGlyph);

    const muteButton = document.createElement("button");
    muteButton.className = "track-mini-button";
    muteButton.type = "button";
    muteButton.textContent = "Mute";
    muteButton.addEventListener("click", () => toggleTrackMute(track.id));

    const footer = document.createElement("div");
    footer.className = "track-card-footer";

    const sliderWrap = document.createElement("label");
    sliderWrap.className = "track-slider-wrap";
    sliderWrap.setAttribute("for", `slider-${track.id}`);

    const sliderLabel = document.createElement("div");
    sliderLabel.className = "track-slider-label";

    const sliderName = document.createElement("span");
    sliderName.textContent = "Volume";

    const sliderValue = document.createElement("strong");
    sliderValue.textContent = formatPercent(track.volume);

    sliderLabel.append(sliderName, sliderValue);

    const slider = document.createElement("input");
    slider.id = `slider-${track.id}`;
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.step = "1";
    slider.value = String(Math.round(track.volume * 100));
    slider.addEventListener("input", (event) => {
      const nextVolume = Number(event.target.value) / 100;
      setTrackVolume(track.id, nextVolume);
    });

    sliderWrap.append(sliderLabel, slider);
    footer.append(muteButton, sliderWrap);
    card.append(topline, playButton, footer);
    fragment.append(card);

    track.elements = {
      stateBadge,
      playButton,
      playGlyph,
      muteButton,
      sliderValue,
    };
  });

  ui.trackList.append(fragment);
}

async function ensureAudioReady() {
  if (!state.AudioContextCtor) {
    throw new Error("This browser does not support the Web Audio API.");
  }

  if (!state.initPromise) {
    state.initPromise = initializeAudio().catch((error) => {
      state.initPromise = null;
      if (state.context) {
        state.context.close();
      }
      state.context = null;
      state.masterGain = null;
      throw error;
    });
  }

  await state.initPromise;

  if (state.context.state === "suspended") {
    await state.context.resume();
  }
}

async function initializeAudio() {
  setStatus("Loading bundled sound loops...");

  state.context = new state.AudioContextCtor();
  state.masterGain = state.context.createGain();
  state.masterGain.gain.value = state.masterVolume;
  state.masterGain.connect(state.context.destination);

  const prefetchedAudio = await preloadAudioAssets();
  const buffers = await Promise.all(
    TRACKS.map(async (trackConfig) => {
      const arrayBuffer =
        prefetchedAudio.get(trackConfig.id)?.slice(0) ??
        (await fetchTrackArrayBuffer(trackConfig));
      const buffer = await state.context.decodeAudioData(arrayBuffer);
      return [trackConfig.id, buffer];
    })
  );

  buffers.forEach(([trackId, buffer]) => {
    const track = state.tracks.get(trackId);
    track.buffer = buffer;
    Object.assign(track, findBestLoopPoints(buffer));
    track.gainNode = state.context.createGain();
    track.gainNode.connect(state.masterGain);
    updateTrackGain(track);
  });

  setStatus("Sound library loaded. Real ambient files are ready to blend.");
}

function createLoopingSource(track) {
  const source = state.context.createBufferSource();
  source.buffer = track.buffer;
  source.loop = true;
  source.loopStart = track.loopStart;
  source.loopEnd = track.loopEnd;
  source.connect(track.gainNode);

  source.onended = () => {
    if (track.sourceNode === source && !track.isPlaying) {
      track.sourceNode = null;
    }
  };

  return source;
}

function updateTrackGain(track) {
  if (!track.gainNode) {
    return;
  }

  const targetGain = track.isMuted ? 0 : track.volume;
  track.gainNode.gain.setTargetAtTime(targetGain, state.context.currentTime, 0.02);
}

function updateMasterGain() {
  if (!state.masterGain) {
    return;
  }

  state.masterGain.gain.setTargetAtTime(
    state.masterVolume,
    state.context.currentTime,
    0.02
  );
}

function hasAnyTrackPlaying() {
  return [...state.tracks.values()].some((track) => track.isPlaying);
}

function getPlayingTrackIds() {
  return [...state.tracks.values()]
    .filter((track) => track.isPlaying)
    .map((track) => track.id);
}

function syncFloatingPlaybackUi() {
  const isPlaying = hasAnyTrackPlaying();
  ui.floatingPlayback.classList.toggle("is-playing", isPlaying);
  ui.floatingPlayback.querySelector(".floating-playback-glyph").textContent = isPlaying
    ? "❚❚"
    : "▶";
  ui.floatingPlayback.setAttribute(
    "aria-label",
    isPlaying ? "Pause all sounds" : "Play all sounds"
  );
  ui.floatingPlayback.title = isPlaying ? "Pause all sounds" : "Play all sounds";
}

function syncTrackUi(track) {
  track.elements.playButton.classList.toggle("is-playing", track.isPlaying);
  track.elements.playButton.classList.toggle("is-muted", track.isMuted);
  track.elements.stateBadge.textContent = track.isPlaying ? "Playing" : "Paused";
  track.elements.muteButton.textContent = track.isMuted ? "Unmute" : "Mute";
  track.elements.muteButton.classList.toggle("is-muted", track.isMuted);
  track.elements.sliderValue.textContent = formatPercent(track.volume);
  syncFloatingPlaybackUi();
}

function syncRecipeUi() {
  state.recipes.forEach((recipe) => {
    recipe.element.classList.toggle("is-active", recipe.id === state.activeRecipeId);
  });
}

async function startTrack(trackId) {
  const track = state.tracks.get(trackId);
  if (!track || track.isPlaying) {
    return;
  }

  await ensureAudioReady();

  const source = createLoopingSource(track);
  track.startedAt = state.context.currentTime;
  track.sourceNode = source;
  source.start(0, track.offset);
  track.isPlaying = true;
  syncTrackUi(track);
}

function pauseTrack(trackId) {
  const track = state.tracks.get(trackId);
  if (!track || !track.isPlaying || !track.sourceNode) {
    return;
  }

  const elapsed = state.context.currentTime - track.startedAt;
  const loopStart = track.loopStart;
  const loopEnd = track.loopEnd || track.buffer.duration;
  const loopLength = track.loopLength || track.buffer.duration;
  const travelled = track.offset + elapsed;

  if (travelled < loopEnd) {
    track.offset = travelled;
  } else {
    const overflow = travelled - loopEnd;
    track.offset = loopStart + (overflow % loopLength);
  }

  track.isPlaying = false;

  const activeSource = track.sourceNode;
  track.sourceNode = null;
  activeSource.stop();
  syncTrackUi(track);
}

async function toggleTrackPlayback(trackId) {
  try {
    const track = state.tracks.get(trackId);
    if (!track) {
      return;
    }

    if (track.isPlaying) {
      pauseTrack(trackId);
      return;
    }

    await startTrack(trackId);
  } catch (error) {
    setStatus(error.message);
  }
}

function setTrackVolume(trackId, volume) {
  const track = state.tracks.get(trackId);
  if (!track) {
    return;
  }

  state.activeRecipeId = null;
  track.volume = volume;
  syncTrackUi(track);
  syncRecipeUi();

  if (state.context) {
    updateTrackGain(track);
  }
}

function toggleTrackMute(trackId) {
  const track = state.tracks.get(trackId);
  if (!track) {
    return;
  }

  state.activeRecipeId = null;
  track.isMuted = !track.isMuted;
  syncTrackUi(track);
  syncRecipeUi();

  if (state.context) {
    updateTrackGain(track);
  }
}

async function playAllTracks() {
  try {
    await ensureAudioReady();

    await Promise.all(
      [...state.tracks.values()].map((track) => {
        if (!track.isPlaying) {
          return startTrack(track.id);
        }

        return Promise.resolve();
      })
    );

    state.activeRecipeId = null;
    syncRecipeUi();
    setStatus("All tracks available. Blend the mix however you like.");
  } catch (error) {
    setStatus(error.message);
  }
}

function pauseAllTracks({ rememberCurrentMix = true } = {}) {
  if (rememberCurrentMix) {
    state.lastPausedTrackIds = getPlayingTrackIds();
  }

  [...state.tracks.values()].forEach((track) => pauseTrack(track.id));
  state.activeRecipeId = null;
  syncRecipeUi();
  setStatus("Playback paused.");
}

async function resumeLastPausedTracks() {
  const trackIdsToResume =
    state.lastPausedTrackIds.length > 0
      ? state.lastPausedTrackIds
      : getPlayingTrackIds();

  if (trackIdsToResume.length === 0) {
    await playAllTracks();
    return;
  }

  try {
    await ensureAudioReady();

    await Promise.all(
      trackIdsToResume.map((trackId) => startTrack(trackId))
    );

    state.activeRecipeId = null;
    syncRecipeUi();
    setStatus("Previous mix resumed.");
  } catch (error) {
    setStatus(error.message);
  }
}

async function playRecipe(recipeId) {
  const recipe = state.recipes.find((entry) => entry.id === recipeId);
  if (!recipe) {
    return;
  }

  try {
    await ensureAudioReady();

    pauseAllTracks({ rememberCurrentMix: false });

    TRACKS.forEach((trackConfig) => {
      const track = state.tracks.get(trackConfig.id);
      const recipeVolume = recipe.mix[track.id];
      track.volume = recipeVolume ?? track.defaultVolume;
      track.isMuted = false;
      track.offset = 0;
      syncTrackUi(track);

      if (state.context) {
        updateTrackGain(track);
      }
    });

    await Promise.all(
      Object.keys(recipe.mix).map((trackId) => startTrack(trackId))
    );

    state.activeRecipeId = recipe.id;
    syncRecipeUi();
    setStatus(`${recipe.label} is live.`);
  } catch (error) {
    setStatus(error.message);
  }
}

async function previewMix(mix, { recipeId = null, statusMessage = "Previewing scene changes." } = {}) {
  try {
    await ensureAudioReady();

    const activeTrackIds = new Set(Object.keys(mix));

    TRACKS.forEach((trackConfig) => {
      const track = state.tracks.get(trackConfig.id);
      if (!track) {
        return;
      }

      const previewVolume = mix[track.id];

      if (previewVolume === undefined) {
        if (track.isPlaying) {
          pauseTrack(track.id);
        }
        return;
      }

      track.volume = previewVolume;
      track.isMuted = false;
      syncTrackUi(track);

      if (state.context) {
        updateTrackGain(track);
      }
    });

    await Promise.all(
      [...activeTrackIds].map((trackId) => startTrack(trackId))
    );

    state.activeRecipeId = recipeId;
    syncRecipeUi();
    setStatus(statusMessage);
  } catch (error) {
    setStatus(error.message);
  }
}

async function previewPresetEditorMix() {
  const recipe = getEditingRecipe();
  if (!recipe) {
    return;
  }

  const draftMix = readPresetEditorMix();
  await previewMix(draftMix, {
    recipeId: null,
    statusMessage: `Previewing edits for ${recipe.label}.`,
  });
}

function bindGlobalControls() {
  ui.themeToggle.addEventListener("click", toggleTheme);
  ui.presetEditorToggle.addEventListener("click", () => {
    setEditorOpen(!state.editorOpen);
  });
  ui.presetSelect.addEventListener("change", (event) => {
    state.editingRecipeId = event.target.value;
    syncPresetEditor();
    const recipe = getEditingRecipe();
    if (recipe) {
      void previewMix(recipe.mix, {
        recipeId: recipe.id,
        statusMessage: `Previewing ${recipe.label}.`,
      });
    }
  });
  ui.presetNew.addEventListener("click", () => {
    const recipe = createRecipeFromCurrentMix();
    state.recipes.push(recipe);
    state.editingRecipeId = recipe.id;
    renderRecipes();
    syncRecipeUi();
    syncPresetEditor();
    setEditorOpen(true);
    setStatus("New custom scene ready to edit.");
  });
  ui.presetQuickSave.addEventListener("click", () => {
    const recipe = createRecipeFromCurrentMix({ playingOnly: true });
    recipe.label = sanitizeRecipeName(recipe.label) || createDefaultSceneName();
    state.recipes.push(recipe);
    state.editingRecipeId = recipe.id;
    saveRecipes();
    renderRecipes();
    syncRecipeUi();
    syncPresetEditor();
    setEditorOpen(true);
    setStatus("Current mix saved as a new scene.");
  });
  ui.presetLoadCurrent.addEventListener("click", () => {
    const recipe = getEditingRecipe();
    if (!recipe) {
      return;
    }

    const current = createRecipeFromCurrentMix({ playingOnly: true });
    recipe.mix = current.mix;
    recipe.subtitle = current.subtitle;
    syncPresetEditor();
    void previewMix(recipe.mix, {
      recipeId: recipe.id,
      statusMessage: `${recipe.label} updated from the current mix.`,
    });
    setStatus("Editor updated from the current mix.");
  });
  ui.presetReset.addEventListener("click", () => {
    const recipe = getEditingRecipe();
    if (!recipe) {
      return;
    }

    if (recipe.builtIn) {
      const defaultRecipe = getDefaultRecipeById(recipe.id);
      if (!defaultRecipe) {
        return;
      }

      recipe.label = defaultRecipe.label;
      recipe.subtitle = defaultRecipe.subtitle;
      recipe.mix = defaultRecipe.mix;
      saveRecipes();
      renderRecipes();
      syncRecipeUi();
      syncPresetEditor();
      void previewMix(recipe.mix, {
        recipeId: recipe.id,
        statusMessage: `${recipe.label} reset to its default mix.`,
      });
      setStatus(`${recipe.label} reset to its default mix.`);
      return;
    }

    syncPresetEditor();
    void previewMix(recipe.mix, {
      recipeId: recipe.id,
      statusMessage: `${recipe.label} reverted to its saved mix.`,
    });
    setStatus(`${recipe.label} reverted to its saved mix.`);
  });
  ui.presetSave.addEventListener("click", () => {
    const recipe = getEditingRecipe();
    if (!recipe) {
      return;
    }

    const nextName = sanitizeRecipeName(ui.presetName.value) || "Untitled Scene";
    const nextMix = {};

    ui.presetTrackList.querySelectorAll(".preset-track-row").forEach((row) => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      const slider = row.querySelector('input[type="range"]');
      if (checkbox.checked) {
        nextMix[checkbox.dataset.trackId] = Number(slider.value) / 100;
      }
    });

    const nextId = recipe.builtIn
      ? recipe.id
      : createUniqueRecipeId(nextName, recipe.id);

    recipe.id = nextId;
    recipe.label = nextName;
    recipe.mix = nextMix;
    recipe.subtitle = buildSubtitleFromMix(nextMix) || "Choose tracks";

    state.editingRecipeId = recipe.id;
    saveRecipes();
    renderRecipes();
    syncRecipeUi();
    syncPresetEditor();
    void previewMix(recipe.mix, {
      recipeId: recipe.id,
      statusMessage: `${recipe.label} saved and previewing live.`,
    });
    setStatus(`${recipe.label} saved.`);
  });
  ui.presetDelete.addEventListener("click", () => {
    const recipe = getEditingRecipe();
    if (!recipe || recipe.builtIn) {
      return;
    }

    state.recipes = state.recipes.filter((entry) => entry.id !== recipe.id);
    state.editingRecipeId = state.recipes[0]?.id ?? null;
    saveRecipes();
    renderRecipes();
    syncRecipeUi();
    syncPresetEditor();
    setStatus("Custom scene deleted.");
  });
  ui.floatingPlayback.addEventListener("click", () => {
    if (hasAnyTrackPlaying()) {
      pauseAllTracks();
      return;
    }

    resumeLastPausedTracks();
  });
  ui.masterVolume.addEventListener("input", (event) => {
    state.masterVolume = Number(event.target.value) / 100;
    ui.masterVolumeValue.textContent = formatPercent(state.masterVolume);

    if (state.context) {
      updateMasterGain();
    }
  });
}

loadRecipes();
setTheme(getPreferredTheme());
state.editingRecipeId = state.recipes[0]?.id ?? null;
renderRecipes();
renderTracks();
bindGlobalControls();
syncRecipeUi();
syncPresetEditor();
setEditorOpen(false);
syncFloatingPlaybackUi();
scheduleAudioWarmup();
registerServiceWorker();

if (window.location.protocol === "file:") {
  setStatus("Open this app through a local server so bundled audio files can load correctly.");
}
