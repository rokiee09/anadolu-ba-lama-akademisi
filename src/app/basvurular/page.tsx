import { PageHero } from "@/components/page-hero";
import { listDemoLeads } from "@/lib/demo-store";
import { getSupabaseEnv } from "@/lib/supabase-config";

export default async function BasvurularPage() {
  const { serviceConfigured } = getSupabaseEnv();
  const leads = await listDemoLeads();

  return (
    <main>
      <PageHero
        kicker="Basvurular"
        title="Demo modunda toplanan basvurular"
        description="Supabase bagli degilse iletisim formundaki kayitlar yerel olarak burada listelenir."
      />

      <section className="section-shell py-16">
        <div className="card-surface p-8">
          <p className="section-kicker">Durum</p>
          <p className="mt-4 leading-7 text-stone-300">
            {serviceConfigured
              ? "Supabase service anahtari tanimli. Yeni basvurular veritabanina gidecek."
              : "Supabase service anahtari tanimli degil. Yeni basvurular yerel demo dosyasina kaydediliyor."}
          </p>
        </div>

        <div className="mt-6 grid gap-4">
          {leads.length === 0 ? (
            <div className="card-surface p-8">
              <p className="text-stone-300">Henuz kaydedilmis demo basvuru yok.</p>
            </div>
          ) : (
            leads.map((lead) => (
              <article key={lead.id} className="card-surface p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{lead.full_name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-amber-300">
                      {lead.level} • {lead.interest}
                    </p>
                  </div>
                  <p className="text-sm text-stone-400">
                    {new Date(lead.created_at).toLocaleString("tr-TR")}
                  </p>
                </div>

                <div className="mt-6 grid gap-2 text-stone-300">
                  <p>{lead.phone}</p>
                  <p>{lead.email}</p>
                  <p>{lead.message}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
