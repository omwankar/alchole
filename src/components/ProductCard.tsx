import { Card } from "@/components/ui/card";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const meta = [
    product.age ? `${product.age} Years Old` : product.volume,
    product.abv != null ? `${product.abv}% ABV` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Card className="overflow-hidden border-border bg-card hover-glow-gold">
      <div className="hover-zoom bg-black">
        <img
          src={product.image}
          alt={`${product.name}, ${product.type} from ${product.region}`}
          className="h-80 w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
          {product.region} · {product.type}
        </p>
        <h3 className="font-display text-2xl text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{meta}</p>
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
