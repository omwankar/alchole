import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Globe2, TrendingUp } from "lucide-react";
import copperStills from "@/assets/copper-stills-heritage.jpg";
import barrelCellar from "@/assets/barrel-cellar.jpg";
import masterDistiller from "@/assets/master-distiller.jpg";
import distilleryLandscape from "@/assets/distillery-landscape.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Heritage",
      description: "Generations of distilling tradition and time-honored techniques passed down through centuries.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Master distillers and sommeliers with decades of experience in premium spirits.",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Partnerships with prestigious distilleries across Scotland and beyond.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Unwavering commitment to quality and authenticity in every cask we offer.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
  <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-fixed"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
    <h1 className="text-5xl md:text-7xl font-extrabold text-[#f5c76b] drop-shadow-lg tracking-wide">
      About <span className="text-white/90">Spiritfilled</span> <span className="text-[#f5c76b]">Ltd</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-200 mt-6 font-light leading-relaxed">
      Connecting the world’s finest distilleries with discerning collectors —
      <br className="hidden md:block" />
      celebrating craftsmanship, heritage, and the spirit of excellence since our founding.
    </p>

    <div className="flex justify-center space-x-4 mt-10 animate-fade-in delay-300">
      <button className="px-6 py-3 bg-[#f5c76b] text-black font-semibold rounded-full shadow-lg hover:bg-[#e3b85f] transition duration-300">
        Learn Our Story
      </button>
      <button className="px-6 py-3 border border-[#f5c76b] text-[#f5c76b] font-semibold rounded-full hover:bg-[#f5c76b]/10 transition duration-300">
        Meet the Team
      </button>
    </div>
  </div>

  {/* Ambient Glow Overlay */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.1),transparent_70%)] animate-pulse-slow" />
</section>


      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spiritfilled Ltd was founded on a simple yet profound principle: to connect the world's 
                most discerning collectors and investors with Scotland's finest distilleries. Our journey 
                began with a deep respect for tradition and an unwavering commitment to quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From humble beginnings, we've grown into a trusted bridge between legendary distilleries 
                and those who appreciate the artistry of fine spirits. Our founders recognized that behind 
                every exceptional cask lies a story of craftsmanship, patience, and the timeless pursuit 
                of perfection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we proudly represent an extensive portfolio spanning Highland peaks to Islay shores, 
                each cask telling its own story of tradition and excellence. We don't just trade spirits—we 
                curate experiences and preserve liquid history for generations to come.
              </p>
            </div>
            <div className="hover-zoom rounded-lg overflow-hidden">
              <img 
                src={copperStills} 
                alt="Traditional copper stills" 
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="relative py-16 px-8 rounded-lg gradient-overlay mb-20">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${barrelCellar})` }}
            />
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-glow-gold">
                Our Mission
              </h3>
              <p className="text-xl text-foreground/90 leading-relaxed">
                To preserve and share the heritage of Scotland's finest distilleries, connecting exceptional 
                casks with collectors who understand their true value. Every bottle represents not just a spirit, 
                but a piece of living history, crafted with dedication and aged to perfection.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card border-border hover-glow-gold cursor-pointer group"
                >
                  <value.icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Heritage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on generations of distilling tradition and deep-rooted relationships with Scotland's most prestigious distilleries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="hover-zoom rounded-lg overflow-hidden order-2 md:order-1">
              <img 
                src={masterDistiller} 
                alt="Master distiller craft" 
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-3xl font-bold text-primary">Craftsmanship & Tradition</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The art of distillation is a centuries-old tradition that combines time-honored techniques 
                with meticulous craftsmanship. From the copper stills of Scottish Highlands to the aging 
                cellars where patience transforms spirit into excellence, every step is guided by expertise 
                passed down through generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master distillers dedicate their lives to perfecting their craft, understanding that great 
                spirits cannot be rushed. They select the finest ingredients, control every nuance of the 
                distillation process, and carefully monitor the maturation of each cask, knowing that time 
                itself is a crucial ingredient.
              </p>
            </div>
          </div>

          {/* Heritage Timeline */}
          <div className="p-8 bg-background rounded-lg border border-border">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Our Journey</h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-accent font-bold text-2xl">Founded</div>
                <div className="flex-1 border-l-2 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">The Beginning</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Established with a vision to bridge the gap between legendary distilleries and passionate 
                    collectors worldwide. Our founders recognized the need for a trusted partner who understood 
                    both the heritage of fine spirits and the desires of discerning collectors.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-accent font-bold text-2xl">Growth</div>
                <div className="flex-1 border-l-2 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Expansion</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Expanded our network across Scotland's whisky regions, forming lasting partnerships with 
                    prestigious distilleries. Through dedication and integrity, we earned the trust of both 
                    producers and collectors, becoming a respected name in the industry.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-32 text-accent font-bold text-2xl">Today</div>
                <div className="flex-1 border-l-2 border-accent pl-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Excellence</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A trusted name in premium cask trading, offering unparalleled access to Scotland's finest 
                    spirits heritage. We continue to uphold our founding principles while embracing new 
                    opportunities to serve collectors and preserve the art of exceptional spirit-making.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Global Reach</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Our partnerships span the legendary whisky regions of Scotland, from the rugged Highlands where 
              mountain streams feed the distilleries, to the peaty shores of Islay where maritime influences 
              shape the character of each dram. The elegant Lowlands and the honeyed heart of Speyside complete 
              our diverse portfolio, each region bringing its own distinct character and heritage.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through these relationships, we offer collectors access to some of the world's most sought-after 
              casks, each representing the pinnacle of distilling excellence and the unique terroir of its origin.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
