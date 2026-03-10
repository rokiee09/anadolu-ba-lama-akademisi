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
          <h2 className="mt-4 text-2xl font-semibold text-[#2B1B12]">
            Portal kutuphanesini gormek icin demo oturumu acin
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#6B584D]">
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
            <h2 className="mt-4 text-2xl font-semibold break-all text-[#2B1B12]">{email}</h2>
            <p className="mt-3 text-[#6B584D]">
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
            className="rounded-full border border-[#6B3E26]/15 px-5 py-3 text-sm font-semibold text-[#2B1B12] transition hover:border-amber-300 hover:text-[#6B3E26]"
          >
            Cikis Yap
          </button>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        {portalSections.map((section) => (
          <article key={section.title} className="card-surface p-8">
            <p className="section-kicker">{section.title}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2B1B12]">{section.value}</h2>
            <p className="mt-4 leading-7 text-[#6B584D]">{section.description}</p>
          </article>
        ))}
      </div>

      <section className="section-shell pb-24 pt-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-[#2B1B12]">Video kutuphanesi</h2>
            <div className="mt-6 grid gap-4">
              {lessonModules.map((module, index) => (
                <Link
                  key={module.slug}
                  href={`/online-dersler/${module.slug}`}
                  className="rounded-3xl border border-[#6B3E26]/10 bg-[#6B3E26]/[0.04] p-5 transition hover:border-amber-300/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                        Ders {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-[#2B1B12]">{module.title}</h3>
                    </div>
                    <span className="text-sm text-[#7A665A]">{module.duration}</span>
                  </div>
                  <p className="mt-3 text-[#6B584D]">{module.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-[#2B1B12]">Portal yol haritasi</h2>
            <ul className="mt-6 space-y-4 text-[#5D4538]">
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
