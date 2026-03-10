import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <main>
      <PageHero
        kicker="Blog"
        title="Google trafigi getirecek SEO odakli icerik merkezi"
        description="Blog yapisi, YouTube'dan gelen kullaniciyi destekler ve 'saz kursu' aramalarinda gorunurlugu artirir."
      />

      <section className="section-shell py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-surface p-8 transition hover:border-amber-300/40"
            >
              <p className="section-kicker">
                {post.category} • {post.readTime}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 leading-7 text-stone-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
