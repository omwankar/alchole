import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import londonNight from "@/assets/london-night.jpg";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import img from "@/assets/ChatGP.png";


const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
 <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
  {/* Background Image */}
<div className="absolute inset-0">
 
  <img
    src={img}
    alt="Whiskey glass with bottles"
    className="w-full h-full object-cover object-center"
    />
  {/* Rich overlay for premium feel */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
</div>


  {/* Foreground content */}
 
  {/* Subtle radial lighting overlay */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.1),transparent_70%)] animate-pulse-slow" />
</section>


      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Send Us A Message</h2>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    required
                    className="bg-input border-border text-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    className="bg-input border-border text-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+44 20 1234 5678"
                    className="bg-input border-border text-foreground focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your interest..." 
                    required
                    rows={6}
                    className="bg-input border-border text-foreground focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-gold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels
                </p>
              </div>

              {/* London Image */}
              <div className="rounded-lg overflow-hidden hover-zoom">
                <img 
                  src={londonNight} 
                  alt="London headquarters" 
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <a 
                  href="tel:02081261760"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+44 (0) 808 280 0089</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@west-ford.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@west-ford.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">35 Firs Avenue London, England, N11 3NE</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover-glow-aqua"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
