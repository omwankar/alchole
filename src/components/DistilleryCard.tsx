import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface DistilleryCardProps {
  image: string;
  alt: string;
  name: string;
  region: string;
  tagline: string;
  href?: string;
}

export const DistilleryCard = ({ image, alt, name, region, tagline, href = "/collection" }: DistilleryCardProps) => (
  <Link to={href} className="block focus-visible:outline-none">
    <Card className="group cursor-pointer overflow-hidden border-border bg-card hover-glow-gold">
      <div className="hover-zoom">
        <img src={image} alt={alt} className="h-64 w-full object-cover" loading="lazy" />
      </div>
      <div className="space-y-2 p-6">
        <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">{name}</h3>
        <p className="text-sm font-semibold text-accent">{region}</p>
        <p className="pt-1 italic text-muted-foreground">{tagline}</p>
      </div>
    </Card>
  </Link>
);
