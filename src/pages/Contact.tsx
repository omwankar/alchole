import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { alts, media } from "@/data/media";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const faqs = [
  {
    q: "How do you ship?",
    a: "Bottles leave bonded storage in protective cases. We ship to addresses of legal age, with tracking and insurance. Some territories require additional documentation.",
  },
  {
    q: "How do you prove authenticity?",
    a: "Each bottle or cask share includes distillery, fill date and warehouse records. Certificates travel with the goods.",
  },
  {
    q: "What is your returns policy?",
    a: "Unopened bottles in original packing may be returned within fourteen days, subject to local law. Cask shares are contracts and are not returned as retail goods.",
  },
  {
    q: "How does cask investment work?",
    a: "You purchase a documented interest in a specific cask. We arrange storage and insurance. Exit is by bottling, private sale, or our next allocation window.",
  },
];

const Contact = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thank you. We will be in touch shortly.");
    event.currentTarget.reset();
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Write to West Ford. Enquiries are handled privately and without hurry."
        path="/contact"
      />
      <PageHero image={media.heroCellar} alt={alts.heroCellar} title="Get in Touch" subtitle="We answer in writing, and we answer properly." />
      <section className="site-container grid gap-16 py-20 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" required className="border-border bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required className="border-border bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={6} className="border-border bg-input" />
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground hover-glow-gold">
            Send message
          </Button>
        </form>
        <div className="space-y-8">
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center gap-3">
              <Phone className="text-primary" size={18} /> +44 (0) 808 280 0089
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />  info@west-ford.com
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-primary" size={18} /> 35 Firs Avenue, London N11 3NE
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <img src={media.londonNight} alt={alts.londonNight} className="h-56 w-full object-cover" loading="lazy" />
            <div className="bg-card p-4 text-sm text-muted-foreground">Map placeholder — London rooms.</div>
          </div>
        </div>
      </section>
      <section className="bg-card px-8 py-20">
        <div className="site-container max-w-3xl">
          <h2 className="mb-8 text-3xl text-primary">Questions we are asked</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
