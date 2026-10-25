import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { alts, media } from "@/data/media";
import { toast } from "sonner";

const Gifting = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Your gifting enquiry has been received. We will write privately.");
    event.currentTarget.reset();
  };

  return (
    <Layout>
      <Seo
        title="Gifting"
        description="Presentation boxes, engraving and corporate gifting, arranged with discretion."
        path="/gifting"
      />
      <PageHero
        image={media.giftingBanner}
        alt={alts.giftingBanner}
        title="Gifting"
        subtitle="For the moments that should not be loud."
      />
      <section className="site-container grid gap-8 py-20 md:grid-cols-3">
        {[
          ["Gift boxes", "Black board, gold foil, tissue. The bottle is the ornament."],
          ["Engraving", "A date, a name, a line. Never more than needed."],
          ["Corporate", "Allocations for houses and boards, packed and documented."],
        ].map(([title, copy]) => (
          <Card key={title} className="border-border bg-card p-8">
            <h2 className="mb-3 text-2xl text-primary">{title}</h2>
            <p className="text-muted-foreground">{copy}</p>
          </Card>
        ))}
      </section>
      <section className="bg-card px-8 py-20">
        <form onSubmit={onSubmit} className="site-container max-w-2xl space-y-6">
          <h2 className="text-3xl text-primary">Corporate gifting enquiry</h2>
          <div className="space-y-2">
            <Label htmlFor="house">House or company</Label>
            <Input id="house" required className="border-border bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required className="border-border bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">Occasion and quantity</Label>
            <Textarea id="note" required rows={5} className="border-border bg-input" />
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground hover-glow-gold">
            Send enquiry
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default Gifting;
