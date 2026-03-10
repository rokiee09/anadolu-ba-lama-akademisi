import { PageHero } from "@/components/page-hero";
import { courseLevels } from "@/lib/content";

export default function SazKursuPage() {
  return (
    <main>
      <PageHero
        kicker="Saz Kursu"
        title="Baslangictan ileri seviyeye planli baglama egitimi"
        description="Her seviyede ogrencinin teknik gelisimini, repertuvar ilerlemesini ve performans hedeflerini olculebilir bir programa baglayan kurs yapisi."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {courseLevels.map((item) => (
            <article key={item.title} className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-[#2B1B12]">{item.title}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-amber-300">
                {item.duration} • {item.lessonFormat} • {item.price}
              </p>
              <p className="mt-4 leading-7 text-[#6B584D]">{item.subtitle}</p>
              <ul className="mt-6 space-y-3 text-[#5D4538]">
                {item.items.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
