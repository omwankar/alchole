import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { alts, media } from "@/data/media";

const serves = [
  {
    name: "Old Fashioned",
    method: "Stir 50ml Highland malt, 5ml demerara, two dashes aromatic bitters over ice. Strain over one large cube. Express orange peel.",
    pairing: "Aged cheddar, dark chocolate, a quiet room.",
  },
  {
    name: "Rob Roy",
    method: "Stir 50ml Speyside malt with 20ml sweet vermouth and a dash of bitters. Strain into a chilled coupe. Cherry, if you must.",
    pairing: "Roast game, walnuts, late evening.",
  },
  {
    name: "Whisky Highball",
    method: "Build 40ml Lowland or light Speyside over ice in a tall glass. Top with very cold soda. One strip of lemon zest.",
    pairing: "Oysters, grilled fish, afternoon light.",
  },
];

const Cocktails = () => (
  <Layout>
    <Seo
      title="Cocktails"
      description="Three serves, written with restraint. West Ford whisky in the glass, not on the stage."
      path="/cocktails"
    />
    <PageHero
      image={media.cocktailBanner}
      alt={alts.cocktailBanner}
      title="Cocktails"
      subtitle="The spirit should remain the point."
    />
    <section className="site-container grid gap-8 py-20 md:grid-cols-3 md:py-28">
      {serves.map((serve) => (
        <Card key={serve.name} className="border-border bg-card p-8">
          <h2 className="mb-4 text-2xl text-primary">{serve.name}</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">{serve.method}</p>
          <p className="text-sm italic text-foreground/80">Pairing: {serve.pairing}</p>
        </Card>
      ))}
    </section>
  </Layout>
);

export default Cocktails;
