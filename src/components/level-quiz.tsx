"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    id: "played_before",
    question: "Daha once baglama caldiniz mi?",
    options: [
      { label: "Hayir, ilk kez baslayacagim", score: 0 },
      { label: "Biraz denedim ama duzenli degil", score: 1 },
      { label: "Evet, belirli bir temelim var", score: 2 },
    ],
  },
  {
    id: "notation",
    question: "Nota veya ritim bilgisi seviyeniz nasil?",
    options: [
      { label: "Hic bilmiyorum", score: 0 },
      { label: "Temel seviyede biliyorum", score: 1 },
      { label: "Rahat okuyabiliyorum", score: 2 },
    ],
  },
  {
    id: "goal",
    question: "Hedefiniz hangisine daha yakin?",
    options: [
      { label: "Temel eserler calmayi ogrenmek", score: 0 },
      { label: "Repertuvarimi gelistirmek", score: 1 },
      { label: "Teknik ve sahne hakimiyetimi artirmak", score: 2 },
    ],
  },
] as const;

const results = [
  {
    title: "Baslangic seviyesindesiniz",
    description:
      "Temel tutus, ritim ve ilk turkulerle ilerleyen program sizin icin en dogru baslangic olur.",
  },
  {
    title: "Orta seviyeye yakin gorunuyorsunuz",
    description:
      "Ritim, eser calisma ve sag-sol el koordinasyonunu guclendiren grup sizin icin uygun.",
  },
  {
    title: "Ileri seviyeye hazirsiniz",
    description:
      "Performans, tezene hakimiyeti ve repertuvar derinligi odakli sinif size daha cok hitap eder.",
  },
] as const;

export function LevelQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const answeredCount = Object.keys(answers).length;

  const result = useMemo(() => {
    if (answeredCount !== questions.length) {
      return null;
    }

    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);

    if (totalScore <= 2) {
      return results[0];
    }

    if (totalScore <= 4) {
      return results[1];
    }

    return results[2];
  }, [answers, answeredCount]);

  return (
    <div className="card-surface p-8">
      <p className="section-kicker">Baglama seviyeni ogren</p>
      <h2 className="mt-4 text-3xl font-semibold text-white">
        3 soruda size en uygun baslangic seviyesini bulalim
      </h2>

      <div className="mt-8 space-y-6">
        {questions.map((item, index) => (
          <div key={item.id} className="rounded-[2rem] border border-white/10 bg-black/15 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
              Soru {index + 1}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{item.question}</h3>
            <div className="mt-4 grid gap-3">
              {item.options.map((option) => {
                const isSelected = answers[item.id] === option.score;

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() =>
                      setAnswers((current) => ({ ...current, [item.id]: option.score }))
                    }
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? "border-[#C8A24C] bg-[#C8A24C]/15 text-white"
                        : "border-white/10 bg-white/5 text-stone-200 hover:border-[#C8A24C]/40 hover:bg-white/8"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: result ? 1 : 0,
          height: result ? "auto" : 0,
          marginTop: result ? 24 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="overflow-hidden"
      >
        {result ? (
          <div className="rounded-[2rem] border border-[#C8A24C]/35 bg-[#2B1B12] p-6">
            <p className="section-kicker">Sonuc</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{result.title}</h3>
            <p className="mt-3 leading-7 text-stone-300">{result.description}</p>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
