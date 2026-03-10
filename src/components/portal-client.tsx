"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { clearBrowserDemoSession, getBrowserDemoSession } from "@/lib/browser-demo";
import { lessonModules, portalSections } from "@/lib/content";

export function PortalClient() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(getBrowserDemoSession());
  }, []);

  return (
    <>
      {!email ? (
        <div className="card-surface mb-6 p-8">
          <p className="section-kicker">Demo girisi gerekli</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Portal kutuphanesini gormek icin demo oturumu acin
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-300">
            GitHub Pages uzerinde portal deneyimi tarayici icindeki demo oturum ile
            calisir. Giris ekraninda herhangi bir gecerli e-posta ve en az 6 karakterli
            sifre ile oturum acabilirsiniz.
          </p>
          <Link
            href="/giris"
            className="mt-6 inline-block rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
          >
            Demo girisi ac
          </Link>
        </div>
      ) : (
        <div className="card-surface mb-6 flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-kicker">Hos geldiniz</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{email}</h2>
            <p className="mt-3 text-stone-300">
              Demo ogrenci paneli aktif. Ders kartlari, portal akislari ve cikis deneyimini
              test edebilirsiniz.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              clearBrowserDemoSession();
              setEmail(null);
            }}
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
          >
            Cikis Yap
          </button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {portalSections.map((section) => (
          <article key={section.title} className="card-surface p-8">
            <p className="section-kicker">{section.title}</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">{section.value}</h2>
            <p className="mt-4 leading-7 text-stone-300">{section.description}</p>
          </article>
        ))}
      </div>

      <section className="section-shell pb-24 pt-16">
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
              <li>Tarayici icinde demo ogrenci oturumu</li>
              <li>Ders bazli icerik kilitleme mantigi</li>
              <li>PDF, nota ve egzersiz arsivi kurgusu</li>
              <li>GitHub Pages uyumlu statik portal deneyimi</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
