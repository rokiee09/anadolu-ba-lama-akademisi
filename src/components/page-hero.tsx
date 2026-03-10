type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(215,168,74,0.15),transparent_65%)]">
      <div className="section-shell py-20">
        <p className="section-kicker">{kicker}</p>
        <h1 className="section-title mt-4 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">{description}</p>
      </div>
    </section>
  );
}
