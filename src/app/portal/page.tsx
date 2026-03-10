import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { lessonModules, portalSections } from "@/lib/content";
import { SignOutButton } from "@/components/sign-out-button";
import { getSupabaseEnv } from "@/lib/supabase-config";
import { getCurrentUser } from "@/lib/supabase-server";

export default async function PortalPage() {
  const { authConfigured } = getSupabaseEnv();
  const user = await getCurrentUser();
  const demoMode = !authConfigured;

  return (
    <main>
      <PageHero
        kicker="Ogrenci Portali"
        title="Ders, kutuphane ve odev takibini tek ekranda toplayan portal"
        description="Portal artik hem Supabase auth hem de sifir kurulumlu demo moduyla kullanilabilir."
      />

      <section className="section-shell py-16">
        {demoMode && !user ? (
          <div className="card-surface mb-6 p-8">
            <p className="section-kicker">Demo girisi gerekli</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Portal kutuphanesini gormek icin demo oturumu acin
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-300">
              Supabase olmasa bile portal akisini test edebilirsiniz. Giris ekraninda
              herhangi bir gecerli e-posta ve en az 6 karakterli sifre ile demo
              oturumu acilir.
            </p>
            <Link
              href="/giris"
              className="mt-6 inline-block rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              Demo girisi ac
            </Link>
          </div>
        ) : null}

        {authConfigured && !user ? (
          <div className="card-surface mb-6 p-8">
            <p className="section-kicker">Oturum gerekli</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Ders kutuphanesini gormek icin giris yapin
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-300">
              Supabase auth aktif. Simdi ogrenci hesabi ile giris yapip portal
              deneyimini oturumlu sekilde kullanabilirsiniz.
            </p>
            <Link
              href="/giris"
              className="mt-6 inline-block rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              Ogrenci girisine git
            </Link>
          </div>
        ) : null}

        {user ? (
          <div className="card-surface mb-6 flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-kicker">Hos geldiniz</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {user.email}
              </h2>
              <p className="mt-3 text-stone-300">
                {user.source === "demo"
                  ? "Demo ogrenci paneli aktif. Artik portal deneyimini, ders kartlarini ve cikis akislarini test edebilirsiniz."
                  : "Ogrenci paneli aktif. Dersler, materyaller ve ilerleme alanlari hesap bazli sunulabilir."}
              </p>
            </div>
            <SignOutButton />
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-3">
          {portalSections.map((section) => (
            <article key={section.title} className="card-surface p-8">
              <p className="section-kicker">{section.title}</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">{section.value}</h2>
              <p className="mt-4 leading-7 text-stone-300">{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Video kutuphanesi</h2>
            <div className="mt-6 grid gap-4">
              {lessonModules.map((module, index) => (
                <Link
                  key={module.slug}
                  href={`/online-dersler/${module.slug}`}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:border-amber-300/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                        Ders {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{module.title}</h3>
                    </div>
                    <span className="text-sm text-stone-400">{module.duration}</span>
                  </div>
                  <p className="mt-3 text-stone-300">{module.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Portal yol haritasi</h2>
            <ul className="mt-6 space-y-4 text-stone-200">
              <li>Supabase Auth ile ogrenci girisi</li>
              <li>Ders bazli icerik kilitleme</li>
              <li>PDF, nota ve egzersiz arsivi</li>
              <li>Odev gonderme ve egitmen geri bildirimi</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
