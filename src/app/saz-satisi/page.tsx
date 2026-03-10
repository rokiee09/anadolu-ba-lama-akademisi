import { PageHero } from "@/components/page-hero";
import { products } from "@/lib/content";

export default function SazSatisiPage() {
  return (
    <main>
      <PageHero
        kicker="Saz Satisi"
        title="Kurs disi ek gelir icin urun ve aksesuar alani"
        description="Baslangicta tanitim amacli kullanilabilir; ileride e-ticaret altyapisina gecis yapilabilir."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="card-surface p-8">
              <h2 className="text-2xl font-semibold text-[#2B1B12]">{product.name}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-amber-300">{product.price}</p>
              <p className="mt-4 leading-7 text-[#6B584D]">{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
