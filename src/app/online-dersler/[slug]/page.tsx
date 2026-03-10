import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { lessonModules } from "@/lib/content";

type LessonDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessonModules.map((module) => ({ slug: module.slug }));
}

export default async function LessonDetailPage({
  params,
}: LessonDetailPageProps) {
  const { slug } = await params;
  const lesson = lessonModules.find((item) => item.slug === slug);

  if (!lesson) {
    notFound();
  }

  return (
    <main>
      <PageHero
        kicker="Online Ders Detayi"
        title={lesson.title}
        description={`${lesson.duration} • Video, materyal ve calisma plani iceren modul detayi`}
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
          <article className="card-surface p-8">
            <div className="aspect-video rounded-[2rem] border border-[#6B3E26]/10 bg-[linear-gradient(135deg,rgba(215,168,74,0.24),rgba(107,62,38,0.04))]" />
            <p className="mt-6 text-lg leading-8 text-[#6B584D]">{lesson.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {lesson.assets.map((asset) => (
                <span
                  key={asset}
                  className="rounded-full border border-[#6B3E26]/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-[#7A665A]"
                >
                  {asset}
                </span>
              ))}
            </div>
          </article>

          <aside className="card-surface p-8">
            <p className="section-kicker">Aksiyon</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#2B1B12]">Portalde gor</h2>
            <p className="mt-4 leading-7 text-[#6B584D]">
              Bu modul, ogrenci portali icinde ilerleme takibi ve materyal erisimi ile sunulabilir.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/portal"
                className="rounded-full bg-amber-400 px-5 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-300"
              >
                Portali ac
              </Link>
              <Link
                href="/iletisim"
                className="rounded-full border border-[#6B3E26]/15 px-5 py-3 text-center font-semibold text-[#2B1B12] transition hover:border-amber-300 hover:text-[#6B3E26]"
              >
                Satin alma sor
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
