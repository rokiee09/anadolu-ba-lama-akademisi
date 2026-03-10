import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { contact, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="dark-panel motif-overlay border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
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
                Baglamanin ustalari burada yetisir
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/15">
            <Image
              src={assetPath("/hero-banner.png")}
              alt="Anadolu Baglama Akademisi footer banner"
              width={1024}
              height={683}
              className="h-36 w-full object-cover opacity-90"
            />
          </div>

          <p className="max-w-sm text-sm leading-6 text-stone-200">
            Baglama egitimi, online dersler ve sahici Anadolu muzigi deneyimi icin
            donusum odakli bir akademi platformu.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Hizli Erisim
          </p>
          <div className="grid gap-2 text-sm text-stone-200">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-stone-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Iletisim
          </p>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <p>{contact.address}</p>
          <Link href={contact.whatsapp} className="inline-block text-amber-300 hover:text-amber-200">
            WhatsApp ile bilgi al
          </Link>
        </div>
      </div>
    </footer>
  );
}
