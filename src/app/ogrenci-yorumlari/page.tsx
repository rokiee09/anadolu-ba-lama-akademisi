import { PageHero } from "@/components/page-hero";
import { testimonials } from "@/lib/content";

export default function OgrenciYorumlariPage() {
  return (
    <main>
      <PageHero
        kicker="Ogrenci Yorumlari"
        title="Sosyal kanitla kayit kararini hizlandiran guven alani"
        description="Bu sayfa yazi, video ve puanlama yorumlariyla yeni ziyaretcinin cekincesini azaltir."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="card-surface p-8">
              <p className="text-2xl text-amber-300">★★★★★</p>
              <h2 className="mt-4 text-xl font-semibold text-white">{item.name}</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-stone-400">{item.level}</p>
              <p className="mt-4 leading-7 text-stone-200">{item.quote}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
