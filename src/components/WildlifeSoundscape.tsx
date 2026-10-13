'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WildlifeSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const windGainRef = useRef<GainNode | null>(null);

  const startJungleSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // 1. Soft Forest Wind Breeze (Filtered Noise)
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 400;

      const windGain = ctx.createGain();
      windGain.gain.setValueAtTime(0.06, ctx.currentTime);
      windGainRef.current = windGain;

      whiteNoise.connect(filter);
      filter.connect(windGain);
      windGain.connect(ctx.destination);
      whiteNoise.start(0);

      // 2. Periodic Jungle Bird Call Synthesizer
      const playBirdChirp = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Frequency sweep mimicking Indian peafowl or jungle babbler
        const baseFreq = 2200 + Math.random() * 1200;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(baseFreq - 300, now + 0.16);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      };

      // Play bird chirps at natural random intervals (every 2.5 to 5 seconds)
      const scheduleBirds = () => {
        playBirdChirp();
        const nextTime = Math.random() * 2500 + 2000;
        intervalRef.current = window.setTimeout(scheduleBirds, nextTime);
      };

      scheduleBirds();
      setIsPlaying(true);
    } catch (e) {
      console.warn('AudioContext not supported or blocked', e);
    }
  };

  const stopJungleSound = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopJungleSound();
    } else {
      startJungleSound();
    }
  };

  useEffect(() => {
    return () => {
      stopJungleSound();
    };
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40 hidden sm:block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleSound}
        type="button"
        className={`px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md flex items-center gap-2.5 transition duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-emerald-800 text-white border-emerald-500 ring-2 ring-emerald-400/40'
            : 'bg-white/95 text-[#082318] border-[#c4dcce] hover:border-emerald-600 hover:bg-emerald-50'
        }`}
        title={isPlaying ? 'Mute Jungle Ambience' : 'Play Jungle Forest Ambience'}
        aria-label="Toggle Forest Ambience"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-1">
              <span className="w-1 h-3.5 bg-emerald-300 rounded-full animate-pulse" />
              <span className="w-1 h-4.5 bg-emerald-200 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-2.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <Volume2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="text-[11px] font-bold tracking-wide">Forest Sound: Live</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#047857] shrink-0" />
            <span className="text-[11px] font-bold text-[#082318] tracking-wide flex items-center gap-1">
              <span>Jungle Ambience</span>
              <Sparkles className="w-3 h-3 text-[#d97706]" />
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}
