import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { alts, media } from "@/data/media";

const stories = [
  {
    id: "highland",
    name: "Highland",
    region: "Scottish Highlands",
    image: media.highland,
    alt: alts.highland,
    copy: "The Highlands are a country of weather and waiting. Cold air, peat smoke and long winters give malts a full body and a grave sweetness. Our partners here work in stone still houses beside dark rivers. Nothing is forced. The spirit is left to take its time.",
  },
  {
    id: "speyside",
    name: "Speyside",
    region: "Moray",
    image: media.speyside,
    alt: alts.speyside,
    copy: "Speyside is the quiet heart of refined Scotch. Honey, orchard fruit and polished oak. Copper stills glow in still houses that have stood for generations. We come here for elegance — spirits that speak softly and last.",
  },
  {
    id: "islay",
    name: "Islay",
    region: "Hebrides",
    image: media.islay,
    alt: alts.islay,
    copy: "Islay is wind, salt and peat. Distilleries sit on the shore as if they were always meant to. The sea enters the cask without asking. We select Islay spirits for character, not volume — smoke with manners, iodine with fruit.",
  },
];

const Distilleries = () => {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
  <Layout>
    <Seo
      title="Distilleries"
      description="Highland, Speyside and Islay — the landscapes behind West Ford’s collection."
      path="/distilleries"
    />
    <PageHero
      image={media.highland}
      alt={alts.highland}
      title="Distilleries"
      subtitle="Place is not a marketing line. It is the work."
    />
    <div className="site-container space-y-28 py-20 md:py-28">
      {stories.map((story, index) => (
        <article
          id={story.id}
          key={story.id}
          className={`grid scroll-mt-28 items-center gap-12 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="hover-zoom overflow-hidden rounded-lg">
            <img src={story.image} alt={story.alt} className="h-[420px] w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-accent">{story.region}</p>
            <h2 className="mb-6 text-4xl text-primary">{story.name}</h2>
            <div className="gold-divider mx-0 mb-6" />
            <p className="text-lg leading-relaxed text-muted-foreground">{story.copy}</p>
          </div>
        </article>
      ))}
    </div>
  </Layout>
  );
};

export default Distilleries;
