import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Wine, Award, Clock, MapPin } from "lucide-react";

const SpiritsCollection = () => {
  const spirits = {
    scotch: [
      {
        name: "Chivas Regal 12 YO",
        brand: "Chivas Regal",
        description: "Rich, fruity, rounded and creamy with ripe honey-sweetened apples, vanilla, hazelnut and caramel tones",
        abv: "40%",
        age: "12 Years",
        origin: "Scotland",
        notes: ["Honey", "Apple", "Vanilla", "Hazelnut"],
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Chivas Regal 18 YO",
        brand: "Chivas Regal",
        description: "Premium blend with velvet dark chocolate taste, elegant floral tones and sweet soft smoky tinge. 85 flavour traces",
        abv: "40%",
        age: "18 Years",
        origin: "Scotland",
        notes: ["Dark Chocolate", "Floral", "Smoke", "Sweet"],
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Royal Salute 21 YO",
        brand: "Royal Salute",
        description: "Exceptional blend of rare whiskies with candied-fruit, clove and caramel aroma. Rich, smooth taste with chocolate and sweet smoke",
        abv: "40%",
        age: "21 Years",
        origin: "Scotland",
        notes: ["Candied Fruit", "Clove", "Caramel", "Chocolate"],
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Ballantine's Finest",
        brand: "Ballantine's",
        description: "Heather honey aroma with hints of spice. Delicious, smoky, slightly sweet flavour suiting modern style",
        abv: "40%",
        age: "N/A",
        origin: "Scotland",
        notes: ["Heather Honey", "Spice", "Smoke", "Sweet"],
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Ballantine's 17 YO",
        brand: "Ballantine's",
        description: "Creamy, harmonious and oak sweet. Full vibrant honey sweetness with creamy vanilla taste",
        abv: "40%",
        age: "17 Years",
        origin: "Scotland",
        notes: ["Honey", "Vanilla", "Oak", "Cream"],
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    singleMalt: [
      {
        name: "The Glenlivet Founder's Reserve",
        brand: "The Glenlivet",
        description: "Delicate fruity-cream finish with orange zest and pear tones. Aged in American first-fill oak casks",
        abv: "40%",
        age: "N/A",
        origin: "Speyside, Scotland",
        cask: "American First-Fill Oak",
        notes: ["Orange Zest", "Pear", "Cream", "Fruity"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "The Glenlivet 12 YO",
        brand: "The Glenlivet",
        description: "Smooth and mellow with balanced fruity tones. Classic Speyside style with vanilla and honey notes",
        abv: "40%",
        age: "12 Years",
        origin: "Speyside, Scotland",
        cask: "American Oak & European Oak",
        notes: ["Vanilla", "Honey", "Fruit", "Oak"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "The Glenlivet 18 YO",
        brand: "The Glenlivet",
        description: "Perfectly balances fruity maturity and oak dryness. Caramel and spicy orange with delicate oak undertones",
        abv: "43%",
        age: "18 Years",
        origin: "Speyside, Scotland",
        cask: "Sherry & Bourbon Casks",
        notes: ["Caramel", "Orange", "Oak", "Spice"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Aberlour 12 YO",
        brand: "Aberlour",
        description: "Rich, spicy and enticingly sweet. Matured in bourbon and Oloroso sherry casks with fruity deep flavour",
        abv: "40%",
        age: "12 Years",
        origin: "Speyside, Scotland",
        cask: "Bourbon & Oloroso Sherry",
        notes: ["Sherry", "Spice", "Fruit", "Sweet"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Longmorn 16 YO",
        brand: "Longmorn",
        description: "Sweet taste with cinnamon, nutmeg, honey and mango. Cedar tones with hints of mint leaf. Not chill-filtered",
        abv: "48%",
        age: "16 Years",
        origin: "Speyside, Scotland",
        cask: "Ex-Bourbon & Sherry Casks",
        notes: ["Cinnamon", "Honey", "Mango", "Cedar"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Strathisla 12 YO",
        brand: "Strathisla",
        description: "Fruity oak malt with subtle honey taste, sherry hints, vanilla finish and orange zest aroma",
        abv: "43%",
        age: "12 Years",
        origin: "Speyside, Scotland",
        cask: "Oak & Sherry Casks",
        notes: ["Honey", "Sherry", "Vanilla", "Orange"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Scapa Skiren",
        brand: "Scapa",
        description: "Smooth island malt with heather honey sweetness. Light maritime influence with citrus notes",
        abv: "40%",
        age: "N/A",
        origin: "Orkney, Scotland",
        cask: "First-Fill American Oak",
        notes: ["Honey", "Citrus", "Maritime", "Heather"],
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    irishWhiskey: [
      {
        name: "Jameson Original",
        brand: "Jameson",
        description: "Triple-distilled with exceptionally floral aroma. Perfect balance of spicy, nutty and vanilla tones with sweet sherry",
        abv: "40%",
        age: "N/A",
        origin: "Ireland",
        distillation: "Triple Distilled",
        notes: ["Floral", "Vanilla", "Sherry", "Nutty"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Jameson Black Barrel",
        brand: "Jameson",
        description: "Matured in burgundy-burned barrels with distinct wooden and spicy tones, softened by cherry wood aging",
        abv: "40%",
        age: "N/A",
        origin: "Ireland",
        distillation: "Triple Distilled",
        notes: ["Wood", "Spice", "Cherry", "Char"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Jameson 18 YO",
        brand: "Jameson",
        description: "Deep golden honey color with aroma of sherry, aromatic oils, wood, spices and caramel. Complex and intense",
        abv: "40%",
        age: "18 Years",
        origin: "Ireland",
        distillation: "Triple Distilled",
        notes: ["Sherry", "Caramel", "Wood", "Spice"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Powers Gold Label",
        brand: "Powers",
        description: "Matured only in oak bourbon barrels. Honey and spice reminiscent taste with full complex character",
        abv: "43.2%",
        age: "N/A",
        origin: "Ireland",
        distillation: "Triple Distilled",
        notes: ["Honey", "Spice", "Oak", "Bourbon"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Redbreast 12 YO",
        brand: "Redbreast",
        description: "Honey-sweet spicy whiskey with complex fruity aroma. Fruity, creamy taste with pleasant hints of wood",
        abv: "40%",
        age: "12 Years",
        origin: "Ireland",
        distillation: "Pot Still",
        notes: ["Honey", "Fruit", "Spice", "Wood"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Midleton Very Rare",
        brand: "Midleton",
        description: "Ultra-premium Irish whiskey. Exceptional blend of mature grain and pot still whiskeys",
        abv: "40%",
        age: "N/A",
        origin: "Ireland",
        distillation: "Pot Still & Grain",
        notes: ["Vanilla", "Fruit", "Toast", "Spice"],
        image: "https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    bourbon: [
      {
        name: "Four Roses Yellow Label",
        brand: "Four Roses",
        description: "Lightest and finest American bourbon. Blend of 10 recipes aged 5-12 years. Fruity to honey-like aroma",
        abv: "40%",
        age: "N/A",
        origin: "Kentucky, USA",
        mashbill: "Corn, Rye, Malted Barley",
        notes: ["Honey", "Fruit", "Caramel", "Oak"],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Four Roses Single Barrel",
        brand: "Four Roses",
        description: "Premium bourbon from one barrel. Spicy with flower blossom, caramel and vanilla. Plums and cherries with maple syrup",
        abv: "50%",
        age: "N/A",
        origin: "Kentucky, USA",
        mashbill: "Corn, Rye, Malted Barley",
        notes: ["Caramel", "Vanilla", "Cherry", "Maple"],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Four Roses Small Batch",
        brand: "Four Roses",
        description: "Hand-crafted bourbon. Four original bourbons at peak maturity. Very spicy with sweet fruity aroma",
        abv: "45%",
        age: "N/A",
        origin: "Kentucky, USA",
        mashbill: "Corn, Rye, Malted Barley",
        notes: ["Spice", "Fruit", "Honey", "Oak"],
        image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    rum: [
      {
        name: "Havana Club Añejo 3 Años",
        brand: "Havana Club",
        description: "Prestigious white Cuban rum aged 3 years. Caramelised pears and bananas with hints of smoked oak",
        abv: "40%",
        age: "3 Years",
        origin: "Cuba",
        type: "White Rum",
        notes: ["Pear", "Banana", "Oak", "Caramel"],
        image: "https://images.pexels.com/photos/1170598/pexels-photo-1170598.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Havana Club Añejo 7 Años",
        brand: "Havana Club",
        description: "Original Cuban sipping rum. Takes 14 years to create. Exceptional and delicious like quality wine",
        abv: "40%",
        age: "7 Years",
        origin: "Cuba",
        type: "Dark Rum",
        notes: ["Vanilla", "Tobacco", "Dried Fruit", "Oak"],
        image: "https://images.pexels.com/photos/1170598/pexels-photo-1170598.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Havana Club Selección de Maestros",
        brand: "Havana Club",
        description: "Triple barrel-aged rum with warm amber hue. Complex taste with coconut, coffee, tobacco and spices",
        abv: "45%",
        age: "N/A",
        origin: "Cuba",
        type: "Premium Rum",
        notes: ["Coconut", "Coffee", "Tobacco", "Spice"],
        image: "https://images.pexels.com/photos/1170598/pexels-photo-1170598.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Havana Club 15 Años Gran Reserva",
        brand: "Havana Club",
        description: "Rare rum from best aged Cuban rums. No alcohol taste, fine tannins and distinctly fruity aroma",
        abv: "40%",
        age: "15 Years",
        origin: "Cuba",
        type: "Ultra Premium",
        notes: ["Dried Fruit", "Oak", "Tannin", "Smooth"],
        image: "https://images.pexels.com/photos/1170598/pexels-photo-1170598.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    cognac: [
      {
        name: "Martell VS",
        brand: "Martell",
        description: "Fine and elegant cognac with fruity and woody notes. Perfect for cocktails and mixed drinks",
        abv: "40%",
        age: "Very Special",
        origin: "Cognac, France",
        grape: "Ugni Blanc",
        notes: ["Fruit", "Wood", "Vanilla", "Almond"],
        image: "https://images.pexels.com/photos/5531075/pexels-photo-5531075.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Martell VSOP",
        brand: "Martell",
        description: "Smooth and mellow with refined taste. Aged in French oak barrels for exceptional character",
        abv: "40%",
        age: "Very Superior Old Pale",
        origin: "Cognac, France",
        grape: "Ugni Blanc",
        notes: ["Oak", "Fruit", "Spice", "Smooth"],
        image: "https://images.pexels.com/photos/5531075/pexels-photo-5531075.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Martell XO",
        brand: "Martell",
        description: "Extra Old cognac with exceptional depth and complexity. Rich and luxurious with dried fruit notes",
        abv: "40%",
        age: "Extra Old",
        origin: "Cognac, France",
        grape: "Ugni Blanc",
        notes: ["Dried Fruit", "Spice", "Oak", "Fig"],
        image: "https://images.pexels.com/photos/5531075/pexels-photo-5531075.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    gin: [
      {
        name: "Beefeater London Dry Gin",
        brand: "Beefeater",
        description: "Classic London Dry Gin with bold juniper character and citrus notes. Perfect for gin & tonic",
        abv: "40%",
        botanicals: "9",
        origin: "London, England",
        style: "London Dry",
        notes: ["Juniper", "Citrus", "Coriander", "Angelica"],
        image: "https://images.pexels.com/photos/5602432/pexels-photo-5602432.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Plymouth Gin",
        brand: "Plymouth",
        description: "Smooth and aromatic with earthy juniper notes. Slightly sweeter than London Dry style",
        abv: "41.2%",
        botanicals: "7",
        origin: "Plymouth, England",
        style: "Plymouth",
        notes: ["Juniper", "Citrus", "Cardamom", "Sweet"],
        image: "https://images.pexels.com/photos/5602432/pexels-photo-5602432.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Monkey 47 Schwarzwald Dry Gin",
        brand: "Monkey 47",
        description: "Complex German gin with 47 botanicals. Exceptionally balanced with pine and citrus notes",
        abv: "47%",
        botanicals: "47",
        origin: "Black Forest, Germany",
        style: "Schwarzwald Dry",
        notes: ["Pine", "Citrus", "Floral", "Spice"],
        image: "https://images.pexels.com/photos/5602432/pexels-photo-5602432.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    vodka: [
      {
        name: "Absolut Vodka",
        brand: "Absolut",
        description: "Rich, full-bodied and complex Swedish vodka. Smooth with subtle grain character",
        abv: "40%",
        distillation: "Continuous Distillation",
        origin: "Åhus, Sweden",
        base: "Winter Wheat",
        notes: ["Grain", "Clean", "Smooth", "Subtle"],
        image: "https://images.pexels.com/photos/5531084/pexels-photo-5531084.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Absolut Elyx",
        brand: "Absolut",
        description: "Luxury vodka made with single estate wheat. Manually distilled in vintage copper column still from 1921",
        abv: "42.3%",
        distillation: "Manual Vintage Copper",
        origin: "Åhus, Sweden",
        base: "Single Estate Wheat",
        notes: ["Silk", "Macadamia", "White Chocolate", "Smooth"],
        image: "https://images.pexels.com/photos/5531084/pexels-photo-5531084.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  };

  const categoryInfo = {
    scotch: {
      title: "Blended Scotch Whisky",
      description: "The art of blending combines grain and malt whiskies from different distilleries to create harmonious, complex expressions. Master blenders carefully select aged whiskies to achieve consistent excellence.",
      heritage: "Blended Scotch whisky accounts for over 90% of Scotch whisky sales worldwide, representing the pinnacle of the blender's craft."
    },
    singleMalt: {
      title: "Single Malt Scotch Whisky",
      description: "Single malt Scotch whisky is produced at one distillery from malted barley, distilled in pot stills. Each distillery's unique character comes from its water source, barley, peat levels, distillation, and cask selection.",
      heritage: "The tradition of single malt production dates back centuries, with each distillery developing its own distinctive house style."
    },
    irishWhiskey: {
      title: "Irish Whiskey",
      description: "Irish whiskey is renowned for its smooth, approachable character. Typically triple-distilled for exceptional purity, it combines pot still and grain whiskeys to create balanced, refined spirits.",
      heritage: "Ireland's whiskey tradition is one of the oldest in the world, with distilling dating back to the 12th century."
    },
    bourbon: {
      title: "American Bourbon",
      description: "Bourbon must be made from at least 51% corn and aged in new charred oak barrels. The climate of Kentucky creates dramatic temperature swings that drive the spirit deep into the wood, extracting rich vanilla, caramel, and oak flavors.",
      heritage: "Born in Kentucky in the late 18th century, bourbon is America's native spirit and a protected designation."
    },
    rum: {
      title: "Cuban Rum",
      description: "Cuban rum represents the pinnacle of Caribbean rum-making tradition. Aged in oak barrels under tropical conditions, these rums develop complex flavors of vanilla, tobacco, coffee, and tropical fruits.",
      heritage: "Cuba's rum tradition spans over 150 years, with methods passed down through generations of master blenders."
    },
    cognac: {
      title: "Cognac",
      description: "Cognac is double-distilled wine from the Cognac region of France, aged in French oak barrels. The aging process and terroir create elegant, complex brandies with notes of fruit, spice, and oak.",
      heritage: "Protected by Appellation d'Origine Contrôlée, cognac production follows strict rules established over centuries."
    },
    gin: {
      title: "Premium Gin",
      description: "Gin is defined by its juniper character, with botanicals carefully selected and balanced. From classic London Dry to modern interpretations, each gin reflects its creator's vision and botanical choices.",
      heritage: "Gin's history spans from 17th century Dutch medicine to the sophisticated spirit culture of today."
    },
    vodka: {
      title: "Premium Vodka",
      description: "Premium vodka emphasizes purity and smoothness through multiple distillations and filtration. The base ingredient and water source significantly influence the final character.",
      heritage: "Vodka's origins trace to Eastern Europe, where distillers perfected the art of creating exceptionally pure spirits."
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Prestige Selection
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Pernod Ricard Catalogue 2018/2019
          </p>
          <p className="text-lg text-white/80">
            Where Heritage Flows Into Every Bottle
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="scotch" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-card/50 p-2 rounded-lg mb-12">
              <TabsTrigger value="scotch" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Blended Scotch
              </TabsTrigger>
              <TabsTrigger value="singleMalt" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Single Malt
              </TabsTrigger>
              <TabsTrigger value="irishWhiskey" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Irish Whiskey
              </TabsTrigger>
              <TabsTrigger value="bourbon" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Bourbon
              </TabsTrigger>
              <TabsTrigger value="rum" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Cuban Rum
              </TabsTrigger>
              <TabsTrigger value="cognac" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Cognac
              </TabsTrigger>
              <TabsTrigger value="gin" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Gin
              </TabsTrigger>
              <TabsTrigger value="vodka" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Vodka
              </TabsTrigger>
            </TabsList>

            {Object.entries(spirits).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="mb-12 p-8 bg-card rounded-lg border border-border">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {categoryInfo[category as keyof typeof categoryInfo].title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {categoryInfo[category as keyof typeof categoryInfo].description}
                  </p>
                  <p className="text-sm text-accent italic">
                    {categoryInfo[category as keyof typeof categoryInfo].heritage}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((spirit, index) => (
                    <Card
                      key={index}
                      className="relative bg-card border-border overflow-hidden hover-glow-gold cursor-pointer group transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={spirit.image}
                          alt={spirit.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                          {spirit.abv} ABV
                        </Badge>
                        {spirit.age && (
                          <Badge className="absolute top-4 left-4 bg-accent/90 text-background">
                            {spirit.age}
                          </Badge>
                        )}
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <p className="text-sm text-accent font-semibold mb-1">{spirit.brand}</p>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {spirit.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{spirit.origin}</span>
                          </div>
                          {(spirit as any).cask && (
                            <div className="flex items-center gap-1">
                              <Wine className="w-4 h-4" />
                              <span className="text-xs">{(spirit as any).cask}</span>
                            </div>
                          )}
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {spirit.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {spirit.notes.map((note, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs border-primary/30 text-foreground/80"
                            >
                              {note}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Premium Brands
            </h2>
            <p className="text-lg text-muted-foreground">
              Representing the world's finest distilleries and houses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Chivas Regal", category: "Scotch Whisky" },
              { name: "Royal Salute", category: "Premium Blend" },
              { name: "Ballantine's", category: "Scotch Whisky" },
              { name: "The Glenlivet", category: "Single Malt" },
              { name: "Aberlour", category: "Single Malt" },
              { name: "Jameson", category: "Irish Whiskey" },
              { name: "Powers", category: "Irish Whiskey" },
              { name: "Redbreast", category: "Irish Whiskey" },
              { name: "Four Roses", category: "Bourbon" },
              { name: "Havana Club", category: "Cuban Rum" },
              { name: "Martell", category: "Cognac" },
              { name: "Beefeater", category: "London Dry Gin" },
              { name: "Plymouth", category: "Plymouth Gin" },
              { name: "Absolut", category: "Swedish Vodka" }
            ].map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border border-border hover-glow-gold cursor-pointer transition-all duration-300"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <p className="text-lg font-semibold text-foreground text-center mb-1">{brand.name}</p>
                <p className="text-xs text-muted-foreground text-center">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Each spirit in our Prestige Selection represents generations of craftsmanship, tradition, and
            dedication to quality. From Scotland's misty highlands to Cuba's tropical distilleries, from
            Kentucky's bourbon country to France's cognac region, we bring together the world's finest spirits.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our portfolio showcases the diversity and depth of Pernod Ricard's expertise in creating and
            nurturing exceptional spirit brands that have stood the test of time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritsCollection;
