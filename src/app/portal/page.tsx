import { PageHero } from "@/components/page-hero";
import { PortalClient } from "@/components/portal-client";

export default function PortalPage() {
  return (
    <main>
      <PageHero
        kicker="Ogrenci Portali"
        title="Ders, kutuphane ve odev takibini tek ekranda toplayan portal"
        description="Portal GitHub Pages uyumlu demo modla tarayici icinde calisir ve ogrenci deneyimini statik olarak sunar."
      />

      <section className="section-shell py-16">
        <PortalClient />
      </section>
    </main>
  );
}
