import { PageHero } from "@/components/page-hero";
import { instructors } from "@/lib/content";

export default function EgitmenlerPage() {
  const instructor = instructors[0];

  return (
    <main>
      <PageHero
        kicker="Egitmenler"
        title="Guveni artiran ogretmen hikayesi ve uzmanlik konumlandirmasi"
        description="Deneyim, egitim gecmisi ve ogrenci basarilari bu sayfada markayi guclendirir."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card-surface min-h-80 p-8">
            <p className="section-kicker">Profil alani</p>
            <p className="mt-4 text-3xl font-semibold text-white">{instructor.name}</p>
            <p className="mt-2 text-amber-300">{instructor.title}</p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6 text-stone-300">
              {instructor.summary}
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Neden guven veriyor?</h2>
            <ul className="mt-6 space-y-4 text-stone-200">
              {instructor.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
