import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { alts, media } from "@/data/media";

const pillars = [
  {
    title: "Place",
    copy: "Jackton Distillery stands on the Kean family farm in South Lanarkshire, a short way from Glasgow. Lowland air, estate fields and a working still house shape the spirit before it meets oak.",
  },
  {
    title: "Wood",
    copy: "Colour, aroma and finish are largely the gift of cask. Bourbon, Pedro Ximénez, Amontillado and Oloroso are chosen for the work they will do — never as decoration.",
  },
  {
    title: "Time",
    copy: "The first Jackton cask was filled on 12 February 2020. The Inaugural single malt did not leave until 2026. Years in warehouse cannot be hurried.",
  },
  {
    title: "Record",
    copy: "Distilled, matured and bottled at Jackton. Numbered bottles, named expressions, and a ledger we can stand behind. If we cannot prove it, we will not show it.",
  },
];

const About = () => (
  <Layout>
    <Seo
      title="The House"
      description="West Ford presents Jackton Distillery and the RAER range — Lowland whisky, gin and vodka, chosen with care."
      path="/about"
    />
    <PageHero
      image={media.aboutBanner}
      alt={alts.aboutBanner}
      title="The House"
      subtitle="West Ford in London. Jackton Distillery in the Scottish Lowlands."
    />
    <section className="site-container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
      <div className="space-y-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Connecting premium spirits</p>
        <h2 className="text-4xl text-primary">A house of wood and spirit</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          West Ford brings together a selection of whisky products and premium spirit brands. We work with Jackton
          Distillery and its RAER whisky range, presenting distinctive Scotch expressions to those who collect with
          care. We do not chase volume. We wait for spirit that justifies the years it has already spent in oak.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Our rooms are in London. The still is in Jackton, on Hayhill Road, Glasgow G74 5AN — an independent,
          family-run Lowland distillery where production, maturation and bottling meet on the same land.
        </p>
      </div>
      <div className="overflow-hidden">
        <img src={media.missionStills} alt={alts.missionStills} className="h-[480px] w-full object-cover" loading="lazy" />
      </div>
    </section>

    <section className="bg-card">
      <div className="grid min-h-[70vh] items-stretch md:grid-cols-2">
        <div className="hover-zoom relative min-h-[420px] overflow-hidden">
          <img
            src={media.barrelsBg}
            alt={alts.barrelsBg}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24 lg:px-20">
          <p className="mb-4 text-[11px] uppercase tracking-[0.35em] text-primary">Jackton Distillery</p>
          <h2 className="max-w-xl text-4xl text-primary">From family farm to Lowland whisky</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Jackton began as a family idea: build a distillery on their own land and let the place, the people and the
            patience show in the glass. The Kean family remains close to the work. It is young, female-led, and
            sleeves-up — not a museum, a working still house.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            On 12 February 2020 the team filled the first cask of what would become RAER Single Malt. In 2026 The
            Inaugural Release opened the next chapter: six thousand hand-numbered bottles at natural colour, non-chill
            filtered, matured across bourbon and sherry oak. The dream is more real when that spirit sits in someone
            else’s glass.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            While those casks slept, Jackton did not stand idle. RAER Original blend, the Amontillado, Pedro Ximénez
            and Oloroso expressions, Jackton Gin, Jackton Rosé Gin, Jackton Vodka and Something Blue — a wedding gin
            that left the family and found other celebrations — all come from the same roof. RAER Alliance carries the
            friendship with growers in the Loire.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Barley is malted in Scotland; their own grain grows in the fields of Jackton Estate. Water is recycled,
            spent grain returns as feed, bottles may come home. Grain to glass is the path, not a finished claim. West
            Ford’s part is simple: present that liquid, clearly, to those who will treat it properly.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-background px-8 py-20 md:py-28">
      <div className="site-container">
        <h2 className="mb-14 text-center text-4xl text-primary">The Four Pillars</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-primary/30 pt-6">
              <h3 className="mb-3 text-2xl text-foreground">{pillar.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
