import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site-data";

export default function IletisimPage() {
  return (
    <main>
      <PageHero
        kicker="Iletisim"
        title="Deneme dersi ve kayit icin hizli basvuru noktasi"
        description="Form artik dogrulama ve Supabase kayit mantigi ile hazir. Ortam degiskenleri tanimlandiginda basvurular veritabanina yazilabilir."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Hizli iletisim</h2>
            <div className="mt-6 space-y-4 text-stone-200">
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
              <p>{contact.address}</p>
            </div>
            <Link
              href={contact.whatsapp}
              className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              WhatsApp ile bilgi al
            </Link>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Akademi konumu"
                src={contact.mapEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-white">Deneme dersi formu</h2>
            <p className="mt-4 leading-7 text-stone-300">
              Form gonderimleri `course_leads` tablosuna yazilacak sekilde hazirlandi.
              Asagidaki alanlari doldurarak basvuru akisini test edebilirsiniz.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
