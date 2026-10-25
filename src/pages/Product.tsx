import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProduct, relatedProducts } from "@/data/products";
import { toast } from "sonner";
import NotFound from "@/pages/NotFound";

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) return <NotFound />;

  const related = relatedProducts(product.slug, product.category);

  return (
    <Layout>
      <Seo
        title={product.name}
        description={product.summary}
        path={`/product/${product.slug}`}
      />
      <section className="site-container grid gap-12 pb-24 pt-32 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <img
            src={product.image}
            alt={`${product.name} bottle`}
            className="h-full max-h-[640px] w-full bg-black object-contain"
          />
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{product.category}</p>
          <h1 className="text-4xl text-primary md:text-5xl">{product.name}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{product.summary}</p>
          <div className="gold-divider mx-0" />
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Age</dt>
              <dd className="text-foreground">{product.age ? `${product.age} years` : "No age statement"}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">ABV</dt>
              <dd className="text-foreground">{product.abv != null ? `${product.abv}%` : product.volume}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Cask</dt>
              <dd className="text-foreground">{product.caskType}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Type</dt>
              <dd className="text-foreground">{product.type}</dd>
            </div>
          </dl>
          <p className="text-lg text-muted-foreground">{product.volume}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {product.soldOut ? (
              <Button
                variant="outline"
                className="border-primary text-primary"
                onClick={() => toast.success("We will write when this allocation returns.")}
              >
                Notify me
              </Button>
            ) : (
              <Button
                className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90"
                onClick={() => toast.success(`${product.name} has been reserved in your enquiry.`)}
              >
                Add to cart
              </Button>
            )}
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/contact">Enquire</Link>
            </Button>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{product.provenance}</p>
        </div>
      </section>

      <section className="bg-card px-8 py-20">
        <div className="site-container grid gap-10 md:grid-cols-3">
          {[
            ["Nose", product.nose],
            ["Palate", product.palate],
            ["Finish", product.finish],
          ].map(([label, copy]) => (
            <div key={label}>
              <h2 className="mb-3 text-2xl text-primary">{label}</h2>
              <p className="leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="site-container py-20">
          <h2 className="mb-10 text-3xl text-primary">From the same region</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </Layout>
  );
};

export default Product;
