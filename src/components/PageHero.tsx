interface PageHeroProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export const PageHero = ({ image, alt, title, subtitle }: PageHeroProps) => (
  <section className="relative mt-16 flex h-[52vh] min-h-[360px] items-center justify-center overflow-hidden md:h-[60vh]">
    <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
    <div className="relative z-10 max-w-3xl px-6 text-center animate-fade-in-up">
      <h1 className="text-4xl font-bold text-white text-glow-gold md:text-6xl">{title}</h1>
      {subtitle ? <p className="mt-5 text-lg font-light text-white/85 md:text-xl">{subtitle}</p> : null}
      <div className="gold-divider mt-8" />
    </div>
  </section>
);
