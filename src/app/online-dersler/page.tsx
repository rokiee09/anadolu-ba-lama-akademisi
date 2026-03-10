import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { lessonModules, portalSections } from "@/lib/content";

export default function OnlineDerslerPage() {
  return (
    <main>
      <PageHero
        kicker="Online Dersler"
        title="Mini kurs platformu mantiginda satilabilir video ders paketi"
        description="Her ders videosu, PDF notu ve ses egzersiziyle desteklenen online baglama deneyimi."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Modul yapisi</h2>
            <div className="mt-6 grid gap-4 text-stone-200">
              {lessonModules.map((module) => (
                <Link
                  key={module.slug}
                  href={`/online-dersler/${module.slug}`}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:border-amber-300/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <span className="text-sm text-amber-300">{module.duration}</span>
                  </div>
                  <p className="mt-3 text-stone-300">{module.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-stone-400">
                    {module.assets.map((asset) => (
                      <span key={asset} className="rounded-full border border-white/10 px-3 py-1">
                        {asset}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Portal entegrasyonu</h2>
            <div className="mt-6 grid gap-4">
              {portalSections.map((section) => (
                <div key={section.title} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-lg font-semibold text-white">{section.title}</p>
                    <span className="text-sm font-semibold text-amber-300">{section.value}</span>
                  </div>
                  <p className="mt-3 leading-7 text-stone-300">{section.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/portal"
              className="mt-6 inline-block rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Portal demoyu ac
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
