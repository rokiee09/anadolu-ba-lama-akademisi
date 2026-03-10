import Image from "next/image";
import Link from "next/link";
import {
  academy,
  blogPosts,
  courseLevels,
  designAccents,
  featuredSongs,
  instructors,
  homeSections,
  lessonModules,
  portalSections,
  testimonials,
  videoFeature,
  weeklySchedule,
} from "@/lib/content";
import { AnimatedReveal } from "@/components/animated-reveal";
import { BaglamaTuner } from "@/components/baglama-tuner";
import { LevelQuiz } from "@/components/level-quiz";

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 2);
  const featuredLessons = lessonModules.slice(0, 4);
  const instructor = instructors[0];

  return (
    <main>
      <section className="dark-panel motif-overlay grain-overlay relative overflow-hidden border-b border-white/10">
        <div className="section-shell relative grid min-h-[calc(100vh-82px)] items-center gap-12 py-20 lg:grid-cols-[1.12fr_0.88fr]">
          <AnimatedReveal className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {designAccents.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-stone-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <p className="section-kicker">Anadolu Baglama Akademisi</p>
              <h1 className="max-w-4xl font-[var(--font-playfair)] text-5xl font-semibold leading-tight text-[#F7F3ED] md:text-7xl">
                {academy.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-200 md:text-xl">
                {academy.heroDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/saz-kursu" className="primary-button">
                Dersleri Incele
              </Link>
              <Link
                href="/iletisim"
                className="rounded-full border border-white/20 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#C8A24C] hover:text-[#F7F3ED]"
              >
                Ucretsiz Deneme Dersi
              </Link>
            </div>

            <div className="grid gap-4 text-sm text-stone-300 sm:grid-cols-2 xl:grid-cols-4">
              {academy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/8"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-stone-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12}>
            <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(20,13,9,0.96),rgba(62,40,27,0.92))]">
                <Image
                  src="/hero-banner.png"
                  alt="Anadolu Baglama Akademisi banner"
                  width={1024}
                  height={683}
                  className="hero-image-animate h-auto w-full object-cover"
                  priority
                />
                <div className="hero-vignette absolute inset-0" />
                <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(20,13,9,0.42),transparent)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(20,13,9,0.56),transparent)]" />

                <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(20,13,9,0.58)] px-4 py-2 backdrop-blur-sm">
                  <div className="overflow-hidden rounded-full border border-white/10 bg-black/30 p-1">
                    <Image
                      src="/logo.png"
                      alt="Anadolu Baglama Akademisi logo"
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Anadolu Baglama Akademisi</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-300">
                      Premium hero banner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <AnimatedReveal>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="section-kicker">Tanitim</p>
              <h2 className="section-title">Sicak, modern ve kulturle bag kuran ana akis</h2>
            </div>
            <p className="text-lg leading-8 text-[#5D4538]">
              Ziyaretci siteye girdigi anda burada baglama ogrenebilecegini anlamali.
              Bu nedenle buyuk CTA alanlari, temiz menu, tek kolon mobil akisi ve
              premium kart sistemini bir araya getirdik.
            </p>
          </div>
        </AnimatedReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {courseLevels.map((level, index) => (
            <AnimatedReveal key={level.slug} delay={index * 0.08}>
              <article className="card-surface card-hover h-full p-8">
                <span className="text-3xl text-[#C8A24C]">
                  {index === 0 ? "🎸" : index === 1 ? "🎵" : "🪕"}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-[#2B1B12]">{level.title}</h3>
                <p className="mt-3 leading-7 text-[#6A574B]">{level.subtitle}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#C8A24C]">
                  {level.duration} • {level.lessonFormat}
                </p>
                <ul className="mt-6 space-y-3 text-[#4D3A30]">
                  {level.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="dark-panel motif-overlay border-y border-white/10 py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedReveal className="space-y-4">
            <p className="section-kicker">Video bolumu</p>
            <h2 className="font-[var(--font-playfair)] text-4xl font-semibold text-white md:text-5xl">
              {videoFeature.title}
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-stone-200">
              {videoFeature.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {videoFeature.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-white/10 bg-white/8 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12}>
            <div className="rounded-[2.2rem] border border-white/10 bg-black/15 p-5">
              <div className="aspect-video rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.3rem] border border-white/10 bg-black/20 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
                      YouTube vitrin alani
                    </span>
                    <span className="text-sm text-stone-200">Baglama Nasil Ogrenilir?</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A24C] text-2xl text-[#2B1B12]">
                      ▶
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">
                        YouTube videosu, blog ve deneme dersi ayni akisa bagli
                      </p>
                      <p className="mt-2 text-stone-300">
                        Gercek video baglandiginda bu alan direkt vitrin icerigi olarak calisir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedReveal className="card-surface p-8">
            <p className="section-kicker">Egitmen</p>
            <div className="mt-6 grid gap-6 md:grid-cols-[0.78fr_1.22fr]">
              <div className="rounded-[2rem] bg-[linear-gradient(180deg,#6B3E26,#2B1B12)] p-6 text-white">
                <div className="flex h-full min-h-72 flex-col justify-end rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_30%)] p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                    Fotograf alani
                  </p>
                  <p className="mt-3 text-2xl font-semibold">{instructor.name}</p>
                  <p className="mt-2 text-stone-200">{instructor.title}</p>
                </div>
              </div>

              <div className="min-w-0">
                <h2 className="max-w-[14ch] text-3xl font-semibold leading-tight text-[#2B1B12] lg:max-w-[16ch] xl:max-w-none">
                  20 yillik baglama deneyimi, konservatuvar temeli ve ogrenci odakli anlatim
                </h2>
                <p className="mt-4 leading-8 text-[#5D4538]">{instructor.summary}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-[1.6rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-4">
                    <p className="text-2xl font-semibold text-[#2B1B12]">20 yil</p>
                    <p className="mt-2 text-sm text-[#6A574B]">Baglama deneyimi</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-4">
                    <p className="text-2xl font-semibold text-[#2B1B12]">300+</p>
                    <p className="mt-2 text-sm text-[#6A574B]">Yetisen ogrenci</p>
                  </div>
                  <div className="rounded-[1.6rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-4 sm:col-span-2 xl:col-span-1">
                    <p className="text-2xl font-semibold text-[#2B1B12]">Akademik</p>
                    <p className="mt-2 text-sm text-[#6A574B]">Konservatuvar yaklasimi</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="card-surface p-8">
            <p className="section-kicker">Ders programi</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2B1B12]">
              Tek kolon mobil akista da net gorunen haftalik sistem
            </h2>
            <div className="mt-8 grid gap-4">
              {weeklySchedule.map((item) => (
                <div
                  key={`${item.day}-${item.group}`}
                  className="rounded-[1.8rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8A24C]/40"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-lg font-semibold text-[#2B1B12]">
                        {item.day} - {item.group}
                      </p>
                      <p className="mt-2 text-[#6A574B]">{item.time}</p>
                    </div>
                    <span className="rounded-full border border-[#C8A24C]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24C]">
                      {item.mode}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <AnimatedReveal className="card-surface p-8">
            <p className="section-kicker">Online dersler</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2B1B12]">
              Modern kart sistemi ve muzik temali modul deneyimi
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {featuredLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/online-dersler/${lesson.slug}`}
                  className="rounded-[1.8rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8A24C]/40"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#C8A24C]">
                    {lesson.duration}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#2B1B12]">{lesson.title}</h3>
                  <p className="mt-3 text-[#6A574B]">{lesson.description}</p>
                </Link>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="card-surface p-8">
            <p className="section-kicker">Ogrenci portali</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#2B1B12]">
              Ders, PDF ve odev akislarini panel mantiginda toplayin
            </h2>
            <div className="mt-8 grid gap-4">
              {portalSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[1.8rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-[#2B1B12]">{section.title}</h3>
                    <span className="text-sm font-semibold text-[#C8A24C]">{section.value}</span>
                  </div>
                  <p className="mt-3 text-[#6A574B]">{section.description}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="dark-panel motif-overlay border-y border-white/10 py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <AnimatedReveal>
            <LevelQuiz />
          </AnimatedReveal>
          <AnimatedReveal delay={0.08}>
            <BaglamaTuner />
          </AnimatedReveal>
        </div>
      </section>

      <section className="section-shell py-20">
        <AnimatedReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="section-kicker">Turku bolumu</p>
              <h2 className="section-title">Video ve nota ile desteklenen eser kartlari</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5D4538]">
              Turkuler, ogrencinin siteyle duygusal bag kurmasini saglar. Her kartta video,
              nota ve seviye bilgisi birlikte sunulur.
            </p>
          </div>
        </AnimatedReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredSongs.map((song, index) => (
            <AnimatedReveal key={song.title} delay={index * 0.08}>
              <article className="card-surface card-hover h-full p-8">
                <p className="text-3xl text-[#C8A24C]">🎶</p>
                <h3 className="mt-5 text-2xl font-semibold text-[#2B1B12]">{song.title}</h3>
                <p className="mt-3 text-[#6A574B]">{song.level}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {song.assets.map((asset) => (
                    <span
                      key={asset}
                      className="rounded-full border border-[#6B3E26]/10 bg-[#6B3E26]/4 px-4 py-2 text-sm text-[#4D3A30]"
                    >
                      {asset}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <AnimatedReveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="section-kicker">Ogrenci yorumlari</p>
              <h2 className="section-title">Guvenden donusume giden en guclu alan</h2>
              <p className="text-lg leading-8 text-[#5D4538]">
                Yorum kartlari, hem mobilde hem masaustunde okunmasi kolay olacak sekilde
                premium kart sistemine yerlestirildi.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedReveal key={testimonial.name} delay={index * 0.08}>
                  <article className="card-surface card-hover h-full p-8">
                    <p className="text-2xl text-[#C8A24C]">★★★★★</p>
                    <h3 className="mt-4 text-xl font-semibold text-[#2B1B12]">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#9C7B51]">
                      {testimonial.level}
                    </p>
                    <p className="mt-4 leading-7 text-[#5D4538]">{testimonial.quote}</p>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </AnimatedReveal>
      </section>

      <section className="section-shell pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <AnimatedReveal className="card-surface overflow-hidden p-10">
            <div className="space-y-4">
              <p className="section-kicker">Blog ve YouTube akisi</p>
              <h2 className="section-title">Google trafigi cekecek icerik motoru</h2>
              <p className="max-w-2xl text-lg leading-8 text-[#5D4538]">
                Saz kursu, akort, ilk eserler ve ekipman secimi gibi aramalarda
                gorunurluk kazanmak icin icerik altyapisi premium kartlarla sunuluyor.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-[1.8rem] border border-[#6B3E26]/10 bg-[#6B3E26]/4 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C8A24C]/40"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#C8A24C]">
                    {post.category} • {post.readTime}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#2B1B12]">{post.title}</h3>
                  <p className="mt-3 text-[#5D4538]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="dark-panel motif-overlay overflow-hidden rounded-3xl border border-white/10 p-10">
            <div className="space-y-4">
              <p className="section-kicker">Kapanis cagrisi</p>
              <h2 className="font-[var(--font-playfair)] text-4xl font-semibold text-white">
                Dersleri incele, deneme dersi al, baglamayla bag kur.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-stone-200">
                Smooth kart gecisleri, motifli zemin, akort araci, seviye testi ve
                portal akisi ile site artik hem premium hem de islevsel bir deneyim sunuyor.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {homeSections.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-stone-100"
                >
                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/iletisim" className="primary-button">
                Bilgi ve Kayit Al
              </Link>
              <Link
                href="/portal"
                className="rounded-full border border-white/20 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:border-[#C8A24C] hover:text-white"
              >
                Ogrenci Portali
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
