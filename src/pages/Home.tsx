import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Award, Globe2, TrendingUp, Sparkles, Star, Users, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import barrelWarehouse from "@/assets/barrel-warehouse.jpg";
import oakBarrel from "@/assets/oak-barrel-closeup.jpg";
import highlandDistillery from "@/assets/highland-distillery.jpg";
import speysideStills from "@/assets/speyside-stills.jpg";
import islayCoastal from "@/assets/islay-coastal.jpg";
import premiumBottles from "@/assets/premium-bottles.jpg";
import whiskeyPourGlass from "@/assets/whiskey-pour-glass.jpg";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import img1 from "@/assets/wine.png";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for joining our journey!");
  };

  const values = [
    {
      icon: Award,
      title: "Authenticity",
      description: "Every cask tells a story of genuine craftsmanship and heritage",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Connected to the finest distilleries across Scotland and beyond",
    },
    {
      icon: TrendingUp,
      title: "Expert Trading",
      description: "Decades of experience in premium spirits sourcing and trading",
    },
    {
      icon: Sparkles,
      title: "Tradition + Innovation",
      description: "Honoring time-tested methods while embracing modern opportunities",
    },
  ];

  const featuredDistilleries = [
    {
      image: highlandDistillery,
      name: "Highland Heritage",
      region: "Highland",
      cask: "Refill Bourbon Hogshead",
      tagline: "Refined over time in Highland mists",
    },
    {
      image: speysideStills,
      name: "Speyside Elegance",
      region: "Speyside",
      cask: "First Fill Oloroso Sherry",
      tagline: "Where tradition meets exceptional flavor",
    },
    {
      image: islayCoastal,
      name: "Islay Coastal",
      region: "Islay",
      cask: "First Fill Tempranillo",
      tagline: "Bold character shaped by the sea",
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Spiritfilled Ltd has provided us with exceptional access to some of the finest casks in Scotland. Their expertise and dedication to quality is unmatched.",
      name: "James Morrison",
      role: "Private Collector",
      rating: 5,
    },
    {
      id: 2,
      text: "The team's knowledge of distilleries and their heritage is remarkable. They've helped us build a collection that truly represents Scotland's finest.",
      name: "Sarah Chen",
      role: "Investment Portfolio Manager",
      rating: 5,
    },
    {
      id: 3,
      text: "Working with Spiritfilled has been a privilege. Their network and relationships with top distilleries are second to none.",
      name: "Michael Roberts",
      role: "Spirits Connoisseur",
      rating: 5,
    },
  ];

  const craftSteps = [
    {
      number: "01",
      title: "Selection",
      description: "Only the finest grains, water sources, and ingredients are chosen. Quality begins at the source with meticulous selection.",
    },
    {
      number: "02",
      title: "Distillation",
      description: "Master distillers control every aspect through copper stills, extracting the perfect balance of flavors and character.",
    },
    {
      number: "03",
      title: "Maturation",
      description: "Spirits age in carefully selected oak barrels, developing complex flavors and smooth character over years or decades.",
    },
    {
      number: "04",
      title: "Excellence",
      description: "Each cask represents the culmination of patience, expertise, and an unwavering commitment to perfection.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Video */}
  {/* Hero Section with Video + Placeholder */}
<section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img
      src="src\assets\hero.png"
      alt="Whiskey barrels background"
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Hero Text */}
  <div className="relative z-10 text-center px-4 animate-fade-in-up">
    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-glow-gold">
      West<span className="text-primary">Ford</span>
    </h1>
    <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
      Where Heritage Flows Into Every Bottle
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/collection">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow-gold"
        >
          Explore Our Collection
        </Button>
      </Link>
      <Link to="/about">
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10"
        >
          About Our Legacy
        </Button>
      </Link>
    </div>
  </div>
</section>




      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hover-zoom rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Copper whiskey stills in distillery"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Spiritfilled Ltd, we are passionate about connecting discerning collectors 
                and investors with the world's finest cask spirits. Our deep-rooted relationships 
                with prestigious distilleries ensure access to exceptional, heritage-rich inventory.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every cask we offer represents generations of craftsmanship, tradition, and 
                the timeless pursuit of excellence. We don't just trade spirits—we preserve 
                and share liquid history.
              </p>
              <Link to="/about">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
<section className="py-20 px-4 bg-card relative overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Whiskey barrels background"
      className="w-full h-full object-cover opacity-10"
    />
  </div>

  {/* Content */}
  <div className="container mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Why Choose Us
      </h2>
      <p className="text-lg text-muted-foreground">
        Excellence in every aspect of premium spirits trading
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <Card
          key={index}
          className="p-6 bg-background border-border hover-glow-gold cursor-pointer group"
        >
          <value.icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors" />
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {value.title}
          </h3>
          <p className="text-muted-foreground">{value.description}</p>
        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Featured Distilleries */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Whiskey barrels background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Featured Distilleries</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into our exceptional collection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDistilleries.map((distillery, index) => (
              <Card 
                key={index} 
                className="bg-card border-border overflow-hidden hover-glow-gold cursor-pointer group"
              >
                <div className="hover-zoom">
                  <img 
                    src={distillery.image} 
                    alt={distillery.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {distillery.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent font-semibold">{distillery.region}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{distillery.cask}</span>
                  </div>
                  <p className="text-muted-foreground italic pt-2">{distillery.tagline}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/collection">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View Full Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Process Section */}
      <section className="py-20 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Copper stills background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">The Art of Distillation</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Centuries of tradition and craftsmanship in every cask
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftSteps.map((step, index) => (
              <div 
                key={index} 
                className="p-6 bg-background rounded-lg border border-border hover-glow-gold cursor-pointer group"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-accent transition-colors">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence in Every Drop - Parallax Section */}
<section
  className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `url('src/assets/premium-bottles.jpg')`,
  }}
>
  {/* Dark gradient overlay for contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

  {/* Subtle gold radial glow overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />

  {/* Centered content */}
  <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg text-glow-gold">
      Excellence in Every Drop
    </h2>
    <p className="text-xl md:text-2xl text-white/90 font-light">
      From barrel to bottle, crafting liquid perfection
    </p>

    {/* Gold divider */}
    <div className="mt-8 mx-auto h-[2px] w-24 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full opacity-70" />
  </div>

  {/* Soft vignette border */}
  <div className="absolute inset-0 bg-black/20 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]" />
</section>



      {/* Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">30+</div>
              <div className="text-lg text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">60+</div>
              <div className="text-lg text-muted-foreground">Partner Distilleries</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-muted-foreground">Premium Casks</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">25+</div>
              <div className="text-lg text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-4 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Whiskey barrels background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hover-zoom rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Whiskey glass on table"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Discover the Finest</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Premium spirits represent centuries of tradition and craftsmanship. Explore our portfolio 
                to discover casks that define excellence in every category.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">Heritage & Authenticity</h4>
                    <p className="text-muted-foreground">Discover the stories behind legendary distilleries</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">Craft Excellence</h4>
                    <p className="text-muted-foreground">Explore casks defined by exceptional craftsmanship</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">Global Recognition</h4>
                    <p className="text-muted-foreground">Featuring award-winning and internationally acclaimed casks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Whiskey barrels background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Trusted by Connoisseurs Worldwide
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16">
            What our collectors and partners say about us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="p-8 bg-card border-border hover-glow-gold cursor-pointer"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="hsl(var(--primary))" className="text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
};

export default Home;
