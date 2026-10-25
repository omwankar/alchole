import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { alts, media } from "@/data/media";

const pillars = [
  {
    title: "Place",
    copy: "We work with still houses in Highland, Speyside, Islay and the Lowlands. Landscape shapes spirit long before it meets oak.",
  },
  {
    title: "Wood",
    copy: "Colour, aroma and finish are largely the gift of cask. Bourbon, sherry and wine oak are chosen, never improvised.",
  },
  {
    title: "Time",
    copy: "Years in warehouse cannot be hurried. We wait until the spirit is ready, then we bottle — or we wait longer.",
  },
  {
    title: "Record",
    copy: "Every expression can be traced to distillery, fill date and warehouse. Provenance is a ledger, not a slogan.",
  },
];

const About = () => (
  <Layout>
    <Seo
      title="The House"
      description="West Ford stands between legendary still houses and those who collect with care. Place, wood, time and record."
      path="/about"
    />
    <PageHero
      image={media.aboutBanner}
      alt={alts.aboutBanner}
      title="The House"
      subtitle="Nestled in London. Working in Scotland’s warehouses."
    />
    <section className="site-container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
      <div className="space-y-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-primary">Since the beginning</p>
        <h2 className="text-4xl text-primary">A house of wood and spirit</h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          West Ford was founded to stand between legendary still houses and those who collect with care. We do not
          chase volume. We wait for casks that justify the years they have already spent in oak: the quiet mastery of
          wood and spirit.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Our rooms are in London. Our work is in warehouses, ledgers and quiet tastings. Selectors look for balance,
          honesty of cask, and a finish that does not hurry.
        </p>
      </div>
      <div className="overflow-hidden">
        <img src={media.missionStills} alt={alts.missionStills} className="h-[480px] w-full object-cover" loading="lazy" />
      </div>
    </section>
    <section className="bg-card px-8 py-20 md:py-28">
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
