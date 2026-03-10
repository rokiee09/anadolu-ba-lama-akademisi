import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/content";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero
        kicker={`Blog • ${post.category}`}
        title={post.title}
        description={`${post.readTime} okuma suresi • SEO odakli blog icerik yapisinin ornek detay sayfasi`}
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.35fr]">
          <article className="card-surface p-8">
            <p className="text-lg leading-8 text-[#5D4538]">{post.excerpt}</p>
            <div className="mt-8 space-y-6">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="leading-8 text-[#6B584D]">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="card-surface p-8">
            <p className="section-kicker">Yonlendirme</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#2B1B12]">Sonraki adim</h2>
            <p className="mt-4 leading-7 text-[#6B584D]">
              Icerikten gelen ziyaretciyi deneme dersi formuna veya online derslere yonlendirin.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/iletisim"
                className="rounded-full bg-amber-400 px-5 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                Deneme dersi al
              </Link>
              <Link
                href="/online-dersler"
                className="rounded-full border border-[#6B3E26]/15 px-5 py-3 text-center font-semibold text-[#2B1B12] transition hover:border-amber-300 hover:text-[#6B3E26]"
              >
                Online dersleri incele
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
