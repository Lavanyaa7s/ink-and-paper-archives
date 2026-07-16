"use client";

/**
 * Synthesizes a realistic mechanical camera shutter click using native Web Audio API.
 * Never fails due to missing asset files or network lag!
 */
export function playShutterSound() {
  if (typeof window === "undefined") return;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();

    // 1. Initial mechanical click (high-frequency burst)
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = "triangle";
    clickOsc.frequency.setValueAtTime(1800, ctx.currentTime);
    clickOsc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.03);

    clickGain.gain.setValueAtTime(0.7, ctx.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.03);

    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickOsc.start();
    clickOsc.stop(ctx.currentTime + 0.03);

    // 2. Shutter curtain sweep (noise burst)
    const bufferSize = ctx.sampleRate * 0.06;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.Q.setValueAtTime(3, ctx.currentTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(ctx.currentTime + 0.005);

    // 3. Shutter close click (low thump at 60ms)
    setTimeout(() => {
      if (ctx.state === "closed") return;
      const closeOsc = ctx.createOscillator();
      const closeGain = ctx.createGain();
      closeOsc.type = "sine";
      closeOsc.frequency.setValueAtTime(320, ctx.currentTime);
      closeOsc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.025);

      closeGain.gain.setValueAtTime(0.6, ctx.currentTime);
      closeGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.025);

      closeOsc.connect(closeGain);
      closeGain.connect(ctx.destination);
      closeOsc.start();
      closeOsc.stop(ctx.currentTime + 0.025);
    }, 60);
  } catch {
    // Audio synthesis blocked by browser autoplay policy before interaction
  }
}
