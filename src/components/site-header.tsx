"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { assetPath } from "@/lib/asset-path";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#6B3E26]/10 bg-[rgba(247,243,237,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="min-w-0 flex items-center gap-2 rounded-full border border-[#6B3E26]/10 bg-white/75 px-2 py-2 pr-3 text-[#2B1B12] shadow-[0_14px_40px_rgba(43,27,18,0.08)] transition hover:border-[#C8A24C]/30 sm:gap-3 sm:pr-4"
        >
          <div className="overflow-hidden rounded-full border border-[#6B3E26]/10 bg-[#2B1B12] p-1 shadow-sm">
            <Image
              src={assetPath("/logo.png")}
              alt="Anadolu Baglama Akademisi logo"
              width={44}
              height={44}
              className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold tracking-wide text-[#2B1B12] sm:text-sm xl:text-base">
              Anadolu Baglama Akademisi
            </p>
            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-[#9C7B51] lg:block xl:text-[11px]">
              Baglamanin ustalari burada yetisir
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#6B3E26]/10 bg-white/72 p-2 shadow-[0_18px_48px_rgba(43,27,18,0.08)] xl:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#2B1B12] text-[#F7F3ED] shadow-[0_8px_24px_rgba(43,27,18,0.22)]"
                    : "text-[#5D4538] hover:bg-[#6B3E26]/6 hover:text-[#2B1B12]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="shrink-0 flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#6B3E26]/15 bg-white/70 text-[#2B1B12] shadow-[0_10px_24px_rgba(43,27,18,0.08)] transition hover:border-[#C8A24C] hover:text-[#6B3E26] xl:hidden"
            aria-label="Mobil menuyu ac"
            aria-expanded={isMenuOpen}
          >
            <span className="text-lg">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
          <Link
            href="/giris"
            className="hidden items-center gap-2 rounded-full border border-[#6B3E26]/15 bg-white/72 px-4 py-2 text-sm font-semibold text-[#2B1B12] shadow-[0_14px_40px_rgba(43,27,18,0.08)] transition hover:-translate-y-0.5 hover:border-[#C8A24C] hover:text-[#6B3E26] md:inline-flex"
          >
            <span className="text-base leading-none">◌</span>
            Ogrenci Girisi
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,#d6b868_0%,#c8a24c_100%)] px-3 py-2 text-xs font-semibold text-[#2B1B12] shadow-[0_16px_36px_rgba(200,162,76,0.32)] transition hover:-translate-y-0.5 hover:brightness-105 sm:px-4 sm:text-sm"
          >
            <span className="text-base leading-none">✦</span>
            <span className="hidden sm:inline">Ucretsiz Deneme</span>
            <span className="sm:hidden">Deneme</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-[#6B3E26]/8 xl:hidden">
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={`${item.href}-mobile-strip`}
                href={item.href}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-[#2B1B12] bg-[#2B1B12] text-[#F7F3ED]"
                    : "border-[#6B3E26]/12 bg-white/70 text-[#5D4538]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="drawer-backdrop fixed inset-0 z-50 lg:hidden"
          >
            <button
              type="button"
              aria-label="Mobil menuyu kapat"
              className="absolute inset-0"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="drawer-panel absolute right-0 top-0 flex h-full w-[86vw] max-w-sm flex-col border-l border-[#6B3E26]/10"
            >
              <div className="flex items-center justify-between border-b border-[#6B3E26]/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full border border-[#6B3E26]/10 bg-[#2B1B12] p-1 shadow-sm">
                    <Image
                      src={assetPath("/logo.png")}
                      alt="Anadolu Baglama Akademisi logo"
                      width={38}
                      height={38}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2B1B12]">
                      Anadolu Baglama Akademisi
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#9C7B51]">
                      Mobil menu
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6B3E26]/15 text-[#2B1B12] transition hover:border-[#C8A24C] hover:text-[#6B3E26]"
                  aria-label="Mobil menuyu kapat"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#6B3E26]/10">
                  <Image
                    src={assetPath("/hero-banner.png")}
                    alt="Mobil menu banner"
                    width={1024}
                    height={683}
                    className="h-36 w-full object-cover"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-[#C8A24C]/12 text-[#6B3E26]"
                            : "text-[#5D4538] hover:bg-[#6B3E26]/5 hover:text-[#2B1B12]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-[#6B3E26]/10 px-5 py-5">
                <div className="grid gap-2">
                  <Link
                    href="/giris"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-full border border-[#6B3E26]/15 px-4 py-3 text-center text-sm font-semibold text-[#2B1B12] transition hover:border-[#C8A24C] hover:text-[#6B3E26]"
                  >
                    Ogrenci Girisi
                  </Link>
                  <Link
                    href="/iletisim"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-full bg-[#C8A24C] px-4 py-3 text-center text-sm font-semibold text-[#2B1B12] transition hover:brightness-105"
                  >
                    Ucretsiz Deneme
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
