import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <Card className="group cursor-default border-border bg-background p-6 hover-glow-gold">
    <Icon className="mb-4 h-12 w-12 text-primary transition-colors group-hover:text-primary/70" aria-hidden />
    <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
    <p className="leading-relaxed text-muted-foreground">{description}</p>
  </Card>
);
