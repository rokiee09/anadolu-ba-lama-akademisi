type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
};

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[#6B3E26]/10 bg-[linear-gradient(180deg,rgba(200,162,76,0.18),rgba(255,255,255,0)_68%)]">
      <div className="section-shell py-16 sm:py-20">
        <p className="section-kicker">{kicker}</p>
        <h1 className="section-title mt-4 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[#6B584D] sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
