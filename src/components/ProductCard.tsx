import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const ageLabel = product.age ? `${product.age} Years Old` : "No Age Statement";

  return (
    <Card className="overflow-hidden border-border bg-card hover-glow-gold">
      <div className="hover-zoom bg-background">
        <img
          src={product.image}
          alt={`${product.name}, a ${product.region} ${product.type.toLowerCase()}`}
          className="h-72 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
          {product.region} · {product.type}
        </p>
        <h3 className="font-display text-2xl text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {ageLabel} · {product.abv}% ABV
        </p>
        <p className="text-sm italic text-foreground/80">{product.caskType}</p>
        <dl className="space-y-1 border-t border-border pt-3 text-sm">
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 uppercase tracking-wider text-primary/70">Colour</dt>
            <dd className="text-muted-foreground">{product.colour}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 uppercase tracking-wider text-primary/70">Nose</dt>
            <dd className="text-muted-foreground">{product.nose}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 uppercase tracking-wider text-primary/70">Palate</dt>
            <dd className="text-muted-foreground">{product.palate}</dd>
          </div>
        </dl>
      </div>
    </Card>
  );
};
