import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { alts, media } from "@/data/media";
import { products, type Region } from "@/data/products";
import { Link } from "react-router-dom";

const regions: Region[] = ["Highland", "Speyside", "Islay", "Lowland"];

const Collection = () => (
  <Layout>
    <Seo
      title="The Collection"
      description="The West Ford principal collection: named single malts and casks, with colour, nose and palate."
      path="/collection"
    />
    <PageHero
      image={media.collectionBanner}
      alt={alts.collectionBanner}
      title="The Collection"
      subtitle="From our core expressions to rare casks — each with a story of wood and spirit."
    />
    <section className="site-container space-y-24 py-16 md:py-24">
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        A catalog, not a shop. To discuss an allocation,{" "}
        <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
          write to the house
        </Link>
        .
      </p>
      {regions.map((region) => {
        const items = products.filter((item) => item.region === region);
        if (items.length === 0) return null;
        return (
          <div key={region}>
            <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-primary">Region</p>
            <h2 className="mb-10 text-3xl text-foreground md:text-4xl">{region}</h2>
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
