"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type TuningTarget = {
  label: string;
  note: string;
  frequency: number;
};

const tuningTargets: TuningTarget[] = [
  { label: "Alt tel", note: "La", frequency: 220 },
  { label: "Orta tel", note: "Re", frequency: 293.66 },
  { label: "Ust tel", note: "Sol", frequency: 392 },
];

function autoCorrelate(buffer: Float32Array, sampleRate: number) {
  let rms = 0;

  for (let i = 0; i < buffer.length; i += 1) {
    const value = buffer[i];
    rms += value * value;
  }

  rms = Math.sqrt(rms / buffer.length);

  if (rms < 0.01) {
    return null;
  }

  let bestOffset = -1;
  let bestCorrelation = 0;

  for (let offset = 8; offset < buffer.length / 2; offset += 1) {
    let correlation = 0;

    for (let index = 0; index < buffer.length / 2; index += 1) {
      correlation += Math.abs(buffer[index] - buffer[index + offset]);
    }

    correlation = 1 - correlation / (buffer.length / 2);

    if (correlation > bestCorrelation) {
      bestCorrelation = correlation;
      bestOffset = offset;
    }
  }

  if (bestCorrelation < 0.9 || bestOffset === -1) {
    return null;
  }

  return sampleRate / bestOffset;
}

export function BaglamaTuner() {
  const [isListening, setIsListening] = useState(false);
  const [frequency, setFrequency] = useState<number | null>(null);
  const [error, setError] = useState("");

  const animationFrameRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const closestTarget = useMemo(() => {
    if (!frequency) {
      return null;
    }

    return tuningTargets.reduce((nearest, current) => {
      const currentDiff = Math.abs(current.frequency - frequency);
      const nearestDiff = Math.abs(nearest.frequency - frequency);
      return currentDiff < nearestDiff ? current : nearest;
    });
  }, [frequency]);

  const centDifference = useMemo(() => {
    if (!frequency || !closestTarget) {
      return null;
    }

    return Math.round(1200 * Math.log2(frequency / closestTarget.frequency));
  }, [closestTarget, frequency]);

  const stopListening = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    streamRef.current?.getTracks().forEach((track) => track.stop());
    analyserRef.current?.disconnect();
    void audioContextRef.current?.close();

    streamRef.current = null;
    analyserRef.current = null;
    audioContextRef.current = null;
    setIsListening(false);
  }, []);

  const startListening = useCallback(async () => {
    try {
      setError("");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new window.AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      streamRef.current = stream;
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      setIsListening(true);

      const buffer = new Float32Array(analyser.fftSize);

      const detectPitch = () => {
        if (!analyserRef.current || !audioContextRef.current) {
          return;
        }

        analyserRef.current.getFloatTimeDomainData(buffer);
        const nextFrequency = autoCorrelate(buffer, audioContextRef.current.sampleRate);
        setFrequency(nextFrequency);
        animationFrameRef.current = requestAnimationFrame(detectPitch);
      };

      detectPitch();
    } catch {
      setError("Mikrofon erisimi acilmadi. Tarayici iznini kontrol edin.");
      stopListening();
    }
  }, [stopListening]);

  useEffect(() => stopListening, [stopListening]);

  return (
    <div className="card-surface p-8">
      <p className="section-kicker">Online akort araci</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">
        Mikrofonla sesi algila, hedef tele gore akortunu kontrol et
      </h2>
      <p className="mt-4 leading-7 text-stone-300">
        Bu demo arac, baglama tellerini `La - Re - Sol` referansi uzerinden
        izler. Tarayicida mikrofon izni vererek calmanizi test edebilirsiniz.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tuningTargets.map((target) => {
          const active = closestTarget?.note === target.note;

          return (
            <div
              key={target.note}
              className={`rounded-[2rem] border p-5 transition ${
                active
                  ? "border-[#C8A24C]/50 bg-[#C8A24C]/12"
                  : "border-white/10 bg-black/15"
              }`}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                {target.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{target.note}</p>
              <p className="mt-2 text-stone-400">{target.frequency.toFixed(2)} Hz</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/20 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
              Algilanan ses
            </p>
            <p className="mt-3 text-4xl font-semibold text-white">
              {frequency ? `${frequency.toFixed(2)} Hz` : "--"}
            </p>
            <p className="mt-2 text-stone-300">
              {closestTarget
                ? `${closestTarget.label} icin en yakin nota: ${closestTarget.note}`
                : "Sazi calmaya baslayin, frekans algilansin."}
            </p>
            <p className="mt-1 text-sm text-stone-400">
              {centDifference !== null
                ? centDifference === 0
                  ? "Akort tam ortada."
                  : centDifference > 0
                    ? `${centDifference} cent tiz`
                    : `${Math.abs(centDifference)} cent pes`
                : "Akort sapmasi henuz olculmedi."}
            </p>
          </div>

          <button
            type="button"
            onClick={isListening ? stopListening : startListening}
            className="rounded-full bg-[#C8A24C] px-6 py-4 font-semibold text-[#2B1B12] transition hover:brightness-105"
          >
            {isListening ? "Dinlemeyi Durdur" : "Mikrofondan Akort Et"}
          </button>
        </div>

        {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
      </div>
    </div>
  );
}
