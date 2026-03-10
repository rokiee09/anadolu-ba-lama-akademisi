"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#6B3E26]/10 bg-[rgba(247,243,237,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-[#2B1B12]">
          <div className="overflow-hidden rounded-full border border-[#6B3E26]/10 bg-[#2B1B12] p-1 shadow-sm">
            <Image
              src="/logo.png"
              alt="Anadolu Baglama Akademisi logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide text-[#2B1B12]">
              Anadolu Baglama Akademisi
            </p>
            <p className="hidden text-xs uppercase tracking-[0.2em] text-[#9C7B51] md:block">
              Baglamanin ustalari burada yetisir
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm transition ${
                  isActive ? "text-[#C8A24C]" : "text-[#5D4538] hover:text-[#2B1B12]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#6B3E26]/15 text-[#2B1B12] transition hover:border-[#C8A24C] hover:text-[#6B3E26] lg:hidden"
            aria-label="Mobil menuyu ac"
            aria-expanded={isMenuOpen}
          >
            <span className="text-lg">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
          <Link
            href="/giris"
            className="hidden rounded-full border border-[#6B3E26]/15 px-4 py-2 text-sm font-semibold text-[#2B1B12] transition hover:border-[#C8A24C] hover:text-[#6B3E26] md:inline-flex"
          >
            Ogrenci Girisi
          </Link>
          <Link
            href="/iletisim"
            className="rounded-full bg-[#C8A24C] px-4 py-2 text-sm font-semibold text-[#2B1B12] transition hover:brightness-105"
          >
            Ucretsiz Deneme
          </Link>
        </div>
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
                      src="/logo.png"
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
                    src="/hero-banner.png"
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
