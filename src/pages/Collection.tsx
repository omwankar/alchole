import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { alts, media } from "@/data/media";
import { categories, products } from "@/data/products";
import { Link } from "react-router-dom";

const Collection = () => (
  <Layout>
    <Seo
      title="The Collection"
      description="The West Ford list: RAER whisky from Jackton Distillery, gin, vodka, Loire wines and partner Scotch."
      path="/collection"
    />
    <PageHero
      image={media.collectionBanner}
      alt={alts.collectionBanner}
      title="The Collection"
      subtitle="Every expression from the West Ford book — RAER, Jackton, and the houses we carry."
    />
    <section className="site-container space-y-24 py-16 md:py-24">
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        A catalog, not a shop. To discuss an allocation,{" "}
        <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
          write to the house
        </Link>
        .
      </p>
      {categories.map((category) => {
        const items = products.filter((item) => item.category === category);
        if (items.length === 0) return null;
        return (
          <div key={category}>
            <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-primary">Range</p>
            <h2 className="mb-10 text-3xl text-foreground md:text-4xl">{category}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  </Layout>
);

export default Collection;
