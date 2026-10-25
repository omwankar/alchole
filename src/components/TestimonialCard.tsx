import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  place: string;
}

export const TestimonialCard = ({ quote, name, place }: TestimonialCardProps) => (
  <Card className="cursor-default border-border bg-card p-8 hover-glow-gold">
    <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={18} fill="hsl(var(--primary))" className="text-primary" />
      ))}
    </div>
    <p className="mb-6 text-lg italic leading-relaxed text-muted-foreground">“{quote}”</p>
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
        <span className="text-lg font-bold text-primary">{name.charAt(0)}</span>
      </div>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{place}</p>
      </div>
    </div>
  </Card>
);
