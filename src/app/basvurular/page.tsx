import { LeadsListClient } from "@/components/leads-list-client";
import { PageHero } from "@/components/page-hero";

export default function BasvurularPage() {
  return (
    <main>
      <PageHero
        kicker="Basvurular"
        title="Demo modunda toplanan basvurular"
        description="GitHub Pages uzerinde iletisim formu kayitlari bu tarayicidaki yerel demo verisi uzerinden listelenir."
      />

      <section className="section-shell py-16">
        <div className="card-surface p-8">
          <p className="section-kicker">Durum</p>
          <p className="mt-4 leading-7 text-stone-300">
            GitHub Pages uyumlu surumde yeni basvurular tarayici local storage alanina
            kaydediliyor. Baska cihaz veya baska tarayicida gorunmez.
          </p>
        </div>

        <LeadsListClient />
      </section>
    </main>
  );
}
