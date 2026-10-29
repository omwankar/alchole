import { Link } from "react-router-dom";
import { Award, ChevronDown, Globe2, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { HeroMedia } from "@/components/HeroMedia";
import { alts, media } from "@/data/media";
import { products } from "@/data/products";

const Home = () => {
  const onNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("You are on the Reserve List. We write rarely, and only when it matters.");
    event.currentTarget.reset();
  };

  return (
    <Layout>
      <Seo
        title="Rare Spirits"
        description="West Ford presents Jackton Distillery and the RAER range — Lowland whisky, gin and vodka, chosen for character, not volume."
        path="/"
      />

      <section className="relative mt-20 h-[calc(100vh-5rem)] min-h-[600px] w-full overflow-hidden bg-background">
        <HeroMedia />

        <div className="hero-fade-left pointer-events-none absolute inset-0 hidden md:block" />
        <div className="pointer-events-none absolute inset-0 bg-black/60 md:hidden" />
        <div className="hero-fade-top pointer-events-none absolute inset-0" />
        <div className="hero-fade-bottom pointer-events-none absolute inset-0" />
        <div className="hero-fade-vignette pointer-events-none absolute inset-0" />

        <div className="container relative z-10 mx-auto flex h-full items-center justify-center md:justify-start">
          <div className="max-w-xl text-center md:text-left">
            <p className="animate-fade-in-up mb-5 text-xs uppercase tracking-[0.3em] text-primary">
              The house of rare spirits
            </p>
            <h1 className="animate-fade-in-up font-display text-6xl font-bold leading-[0.95] text-foreground md:text-8xl" style={{ animationDelay: "150ms" }}>
              West <span className="text-glow-gold text-primary">Ford</span>
            </h1>
            <p className="animate-fade-in-up mx-auto mt-6 max-w-md text-lg font-light leading-relaxed text-foreground/80 md:mx-0 md:text-xl" style={{ animationDelay: "300ms" }}>
              Mastery of wood and spirit. Collections chosen for character, not volume.
            </p>
            <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start" style={{ animationDelay: "450ms" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90">
                <Link to="/collection">The Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/10">
                <Link to="/about">The House</Link>
              </Button>
            </div>
          </div>
        </div>

        <a
          href="#mission"
          className="scroll-chevron absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary"
          aria-label="Scroll to our mission"
        >
          <ChevronDown size={32} />
        </a>
      </section>

      <section className="border-y border-border bg-card px-8 py-20 md:py-28">
        <div className="site-container">
          <SectionHeading
            title="The Principal Collection"
            description="RAER, Jackton Distillery and the houses West Ford carries — as listed in the book."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products
              .filter((item) =>
                ["raer-inaugural-release", "jackton-gin", "grangestone-12-sherry"].includes(item.slug),
              )
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/collection">Explore the full collection</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-background">
        <div className="grid min-h-[70vh] items-stretch md:grid-cols-2">
          <div className="hover-zoom relative min-h-[420px] overflow-hidden">
            <img
              src={media.missionStills}
              alt={alts.missionStills}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24 lg:px-20">
            <h2 className="max-w-xl text-4xl font-bold text-primary md:text-5xl">
              Crafted Slowly. Poured Rarely.
            </h2>
            <div className="mt-6 h-px w-6 bg-primary/80" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              West Ford brings together a selection of whisky and premium spirit brands. We work with Jackton Distillery
              and its RAER range, presenting distinctive Scotch expressions — and the gins, vodka and wines that sit
              beside them — chosen for character, not volume.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90">
                <Link to="/about">Discover More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-card px-8 py-20 md:py-28">
        <img
          src={media.barrelsBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="site-container relative z-10">
          <SectionHeading
            title="The Four Pillars"
            description="Place, wood, time and record — the only measures that matter."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Globe2}
              title="Place"
              description="Jackton sits in the Scottish Lowlands, on family land near Glasgow. Place is not decoration. It is the work."
            />
            <FeatureCard
              icon={Award}
              title="Wood"
              description="Oak does most of the talking. We choose casks for how they will shape colour, aroma and finish."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Time"
              description="Nothing is hurried. Spirit sits until it is ready to leave the warehouse, and not a season sooner."
            />
            <FeatureCard
              icon={Sparkles}
              title="Provenance"
              description="Distillery, fill date and warehouse are written down. If we cannot prove it, we will not show it."
            />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="grid min-h-[70vh] items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24 lg:px-20">
            <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-primary">Jackton Distillery</p>
            <h2 className="max-w-xl text-4xl font-bold text-primary md:text-5xl">A Lowland house, still being written</h2>
            <div className="mt-6 h-px w-6 bg-primary/80" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Jackton grew from the Kean family farm near East Kilbride into a working distillery: production,
              maturation and bottling on the same land. On 12 February 2020 the first cask was filled. In 2026 RAER
              Single Malt — The Inaugural Release — left those warehouses: six thousand hand-numbered bottles, distilled,
              matured and bottled at Jackton.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              It is independent, family-run, and close to the process. Barley from Scottish fields, water of the
              Lowlands, and oak chosen with care — bourbon, Pedro Ximénez, Amontillado and Oloroso. Grain to glass is
              the direction of travel, not a finished boast. West Ford presents that spirit, and the gins, vodka and
              RAER Alliance wines that share the same roof.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90">
                <Link to="/about">The House and the still</Link>
              </Button>
            </div>
          </div>
          <div className="hover-zoom relative min-h-[420px] overflow-hidden">
            <img
              src={media.barrelsBg}
              alt={alts.barrelsBg}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-card px-8 py-20 md:py-28">
        <img
          src={media.distillationBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-5"
          loading="lazy"
        />
        <div className="site-container relative z-10">
          <SectionHeading
            title="The Art of Distillation"
            description="Four movements. Nothing hurried."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Malt", d: "Select barley is steeped, germinated and dried.", img: media.stepMalt, alt: alts.stepMalt },
              { n: "02", t: "Mash and Ferment", d: "Hot water and yeast turn grain into a rich wash.", img: media.stepMash, alt: alts.stepMash },
              { n: "03", t: "Distill", d: "Copper stills refine the spirit, drop by drop.", img: media.stepDistill, alt: alts.stepDistill },
              { n: "04", t: "Mature", d: "Oak casks give years of colour, depth and flavour.", img: media.stepCask, alt: alts.stepCask },
            ].map((step) => (
              <div key={step.n} className="group overflow-hidden rounded-lg border border-border bg-background hover-glow-gold">
                <div className="hover-zoom h-40">
                  <img src={step.img} alt={step.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="mb-3 text-4xl font-bold text-primary/25 transition-colors group-hover:text-accent">
                    {step.n}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-foreground">{step.t}</h3>
                  <p className="text-muted-foreground">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="parallax-band relative flex h-screen items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${media.premiumBottles})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,48,0.14)_0%,transparent_70%)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />
        <div className="relative z-10 max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-extrabold tracking-wide text-white text-glow-gold drop-shadow-lg md:text-7xl">
            Excellence in Every Drop
          </h2>
          <p className="text-xl font-light text-white/90 md:text-2xl">
            Some things cannot be hurried. They can only be waited for.
          </p>
          <div className="gold-divider mt-8 w-6" />
        </div>
      </section>

      <section className="bg-card">
        <div className="grid min-h-[60vh] items-stretch md:grid-cols-2">
          <div className="hover-zoom relative min-h-[420px] overflow-hidden">
            <img
              src={media.lifestylePour}
              alt={alts.lifestylePour}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">A Collection for Connoisseurs</h2>
            <div className="mt-6 h-px w-6 bg-primary/80" />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Users className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h4 className="mb-1 text-xl font-semibold text-foreground">Heritage</h4>
                  <p className="text-muted-foreground">Stories from legendary still houses, told without hurry.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h4 className="mb-1 text-xl font-semibold text-foreground">Craft</h4>
                  <p className="text-muted-foreground">Casks chosen for character, then left to become themselves.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h4 className="mb-1 text-xl font-semibold text-foreground">Jackton</h4>
                  <p className="text-muted-foreground">
                    A family still house in South Lanarkshire — RAER whisky, Jackton gin and vodka, made to be shared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 md:py-28">
        <div className="site-container">
          <SectionHeading title="Trusted Quietly" description="Words from those we serve. Placeholders pending permission." />
          {/* Placeholder testimonials pending client approval */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <TestimonialCard
              quote="The finest single malt selection I've found outside Scotland."
              name="James R."
              place="London"
            />
            <TestimonialCard
              quote="Packaging, provenance and service were flawless."
              name="Priya M."
              place="Dubai"
            />
            <TestimonialCard
              quote="Jackton’s inaugural malt, presented without noise. That is how it should be done."
              name="Daniel K."
              place="Edinburgh"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-8 py-16">
        <div className="site-container max-w-3xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-primary">The West Ford Circle</p>
          <h2 className="mb-4 text-3xl text-primary md:text-4xl">Be first to hear</h2>
          <p className="mb-8 text-muted-foreground">
            Occasional notes on limited releases and private tastings. Never noise.
          </p>
          <form onSubmit={onNewsletter} className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="Your email"
              aria-label="Email address"
              className="border-border bg-input text-foreground"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90">
              Request access
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
