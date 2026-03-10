import { PageHero } from "@/components/page-hero";
import { weeklySchedule } from "@/lib/content";

export default function DersProgramiPage() {
  return (
    <main>
      <PageHero
        kicker="Ders Programi"
        title="Takvim mantigiyla duzenlenmis net haftalik ders akisi"
        description="Bu alan ileride admin paneline baglanabilecek sekilde kurgulandi; simdilik manuel ama profesyonel bir sunum sagliyor."
      />

      <section className="section-shell py-16">
        <div className="grid gap-4">
          {weeklySchedule.map((item) => (
            <article
              key={`${item.day}-${item.group}`}
              className="card-surface grid gap-4 p-6 md:grid-cols-[0.8fr_1.2fr_0.8fr_0.4fr] md:items-center"
            >
              <p className="text-xl font-semibold text-white">{item.day}</p>
              <p className="text-stone-200">{item.group}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{item.time}</p>
              <p className="text-right text-sm text-stone-400">{item.mode}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
