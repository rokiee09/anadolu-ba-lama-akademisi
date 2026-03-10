import Image from "next/image";
import { AuthForms } from "@/components/auth-form";
import { PageHero } from "@/components/page-hero";
import { assetPath } from "@/lib/asset-path";

export default function GirisPage() {
  return (
    <main>
      <PageHero
        kicker="Ogrenci Girisi"
        title="Portal icin giris ve hesap olusturma altyapisi hazir"
        description="GitHub Pages uyumlu demo modda ogrenci girisini bu tarayici uzerinden hemen test edebilirsiniz."
      />

      <section className="section-shell py-16">
        <div className="card-surface mb-6 p-6">
          <p className="section-kicker">Demo modu aktif</p>
          <p className="mt-4 leading-7 text-stone-300">
            Bu alan GitHub Pages icin tarayici tabanli demo oturum kullaniyor.
            Gecerli bir e-posta ve en az 6 karakterli sifre ile portal akisini test edebilirsiniz.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="dark-panel motif-overlay overflow-hidden rounded-3xl border border-white/10 p-6">
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-full border border-white/10 bg-black/30 p-1">
                <Image
                  src={assetPath("/logo.png")}
                  alt="Anadolu Baglama Akademisi logo"
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">Anadolu Baglama Akademisi</p>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                  Ogrenci giris alani
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.8rem] border border-white/10">
              <Image
                src={assetPath("/hero-banner.png")}
                alt="Anadolu Baglama Akademisi giris banner"
                width={1024}
                height={683}
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="mt-6 space-y-4 text-stone-200">
              <p className="text-xl font-semibold text-white">
                Video dersler, portal ve odev takibi tek hesapta
              </p>
              <p className="leading-7">
                Giris yaptiktan sonra portal icinde ders kutuphanesi, materyaller,
                egzersizler ve ilerleme takibi tek ekranda sunulur.
              </p>
            </div>
          </div>

          <AuthForms />
        </div>
      </section>
    </main>
  );
}
