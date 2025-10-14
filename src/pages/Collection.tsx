import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import barrelWarehouse from "@/assets/barrel-warehouse.jpg";
import oakBarrel from "@/assets/oak-barrel-closeup.jpg";
import highlandDistillery from "@/assets/highland-distillery.jpg";
import speysideStills from "@/assets/speyside-stills.jpg";
import islayCoastal from "@/assets/islay-coastal.jpg";
import lowlandCountryside from "@/assets/lowland-countryside.jpg";

const Collection = () => {
  // Distilleries data extracted from PDF, organized by region
const distilleries = [
  // Highland
  { name: "Aberfeldy", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "Highland spirit refined in oak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Aberfeldy12.png/500px-Aberfeldy12.png" },
  { name: "Ben Nevis", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "Mountain heritage in every drop", image: "https://img.thewhiskyexchange.com/380/bnvob.non2.jpg?v=202407241" },
  { name: "Blair Athol", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "Timeless Highland character", image: "https://www.fieldandfawcett.co.uk/cdn/shop/files/BlairAthol12YearOldFloraandFaunaSeries.png?v=1752833546&width=1946" },
  { name: "Clynelish", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "Coastal elegance from the North", image: "https://www.highlandcoasthotels.com/assets/images/Brora/_1920xAUTO_crop_center-center_none/15882/DSC8898HiRes.webp" },
  { name: "Dalmore", region: "Highland", cask: "First Fill Oloroso Sherry", tagline: "Royal heritage in liquid form", image: "https://www.thedalmore.com/media/kc0gm4cq/thedalmore_newbrandworld_d12_lifestyle_fl03_image_a0.jpg?rxy=0.6359541895569863,0.39930774071743236&width=960&height=1200&v=1dade9039755a60&format=webp" },
  { name: "Glen Garioch", region: "Highland", cask: "Refill Bourbon Barrel", tagline: "One of Scotland's oldest distilleries", image: "https://i0.wp.com/malt-review.com/wp-content/uploads/2022/12/Garioch-Founders-Reserve.png?w=720&ssl=1" },
  { name: "Glengoyne", region: "Highland", cask: "First Fill Oloroso Sherry", tagline: "Unhurried excellence since 1833", image: "https://www.thewhiskyworld.com/images/glengoyne-28-year-old-first-fill-oloroso-sherry-p7604-13061_image.jpg" },
  { name: "Old Pulteney", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "Maritime spirit of the North", image: "https://www.thewhiskyexchange.com/media/rtwe/uploads/featurecore/panels/44_6864384c12c848df86f1acad2b0350b5.jpg?v=637722567308730000" },
  { name: "Royal Brackla", region: "Highland", cask: "Refill Bourbon Hogshead", tagline: "By Royal Warrant since 1835", image: "https://i0.wp.com/www.scotchology.com/wp-content/uploads/2020/05/Royal-Brackla-12B.jpg?w=476&ssl=1" },
  { name: "Tullibardine", region: "Highland", cask: "First Fill Oloroso Sherry", tagline: "Highland elegance redefined", image: "https://m.media-amazon.com/images/I/81bIry-4eSL._AC_SY741_.jpg" },
  
  // Speyside
{ name: "Auchroisk", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Hidden gem of Speyside", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIU43hEHIsbyY9wn2p-NyHKoacDUxxcvy3Lg&s" },
{ name: "Aultmore", region: "Speyside", cask: "Refill Bourbon Barrel", tagline: "The mist-kissed malt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRX4lg_5naDaNhhnXxO01tl7OUyWkwLxS0w&s" },
{ name: "Balmenach", region: "Speyside", cask: "Second Fill Barrel", tagline: "Traditional Speyside character", image: "https://www.whiskyfun.com/Material79/Tormore-12-yo-2010-Dram-Fool-Middle-Cut.jpg" },
{ name: "BenRiach", region: "Speyside", cask: "First Fill Oloroso Sherry Barrique", tagline: "Innovative spirit, classic soul", image: "https://whic-sw-prod.b-cdn.net/media/aa/9b/ac/1751986420/cf765edded3a4ca1280f9f4b03565f1b.jpg?width=3000" },
{ name: "Braeval", region: "Speyside", cask: "First Fill Oloroso Hogshead", tagline: "High altitude excellence", image: "https://www.whisky.de/shop/out/pictures/generated/product/1/650_650_75/image_BRAES00SI_1.jpg?1713958266" },
{ name: "Dailuaine", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Bold Speyside character", image: "https://www.whiskyfun.com/Material73/Daftmill.jpg" },
{ name: "Dalmunach", region: "Speyside", cask: "Refill Bourbon Barrel", tagline: "New chapter, timeless quality", image: "https://img.thewhiskyexchange.com/540/gfcob.53yo.jpg" },
{ name: "Glenfarclas", region: "Speyside", cask: "First Fill Oloroso Sherry", tagline: "Family crafted since 1836", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT6NtmCBFCeF-BSyeG0OwE_gLBXwE0mz0OA&s" },
{ name: "Glenfiddich", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "World's most awarded single malt", image: "https://www.whiskyfun.com/MaterialBest/Glenlossie.jpg" },
{ name: "Glen Grant", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Elegance and complexity", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22gRcTatjSAhk9fsRPMNiFpJ24Zg7t7X-Fw&s" },
{ name: "Glenlivet", region: "Speyside", cask: "First Fill Bourbon Barrel", tagline: "The single malt that started it all", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtDvMcLn3zJiZThBj0OvNQ4DormzIhuyt_A&s" },
{ name: "Glenlossie", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Floral and delicate", image: "https://www.whiskyfun.com/Material83/Linkwood-12-yo-1959-43-OB-for-Samaroli-Silvano-2-litres-1971.jpg" },
{ name: "Glen Moray", region: "Speyside", cask: "Refill Bourbon Barrel", tagline: "Speyside approachability", image: "https://img.thewhiskyexchange.com/540/lgmadl1992v6.jpg" },
{ name: "Glenrothes", region: "Speyside", cask: "First Fill Oloroso Sherry", tagline: "Vintage excellence", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuoHPLlFu1gUQQrK3mEl_FM2-OkCX7I3ylQ&s" },
{ name: "Linkwood", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Fragrant and complex", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzm2FuVIi3k43WV6Wo3X80q2QFlLLf4xzRkQ&s" },
{ name: "Longmorn", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Connoisseur's choice", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAd5JaYyisa3DMGrO2LnLuJQ_cxlhDp1I9g&s" },
{ name: "Macallan", region: "Speyside", cask: "First Fill Oloroso Sherry", tagline: "The single malt of single malts", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKvCQ-3CFoA8yc3dQ4atingbXFh8UsO8gcg&s" },
{ name: "Mannochmore", region: "Speyside", cask: "Refill Bourbon Barrel", tagline: "Smooth and elegant", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GyCiRBE9nJfJ7fS0P-VosUluHGTskGZbOw&s" },
{ name: "Miltonduff", region: "Speyside", cask: "Refill Bourbon Hogshead", tagline: "Rich Speyside heritage", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83-GZk1aMeovbb_Ww7L-qo3wswsBulDRqmA&s" },
{ name: "Mortlach", region: "Speyside", cask: "First Fill Oloroso Sherry", tagline: "The Beast of Dufftown", image: "https://images.squarespace-cdn.com/content/v1/53ffc0fbe4b0e9e8825f8b00/1668116822274-6K5VQVFZ6R8VO8CH895F/359_DH_STRATHMILL_BW_E1250.jpg?format=1000w" },
{ name: "Speyburn", region: "Speyside", cask: "Refill Bourbon Barrel", tagline: "Golden expression of Speyside", image: "https://img.thewhiskyexchange.com/540/tamob.non14.jpg" },
{ name: "Strathisla", region: "Speyside", cask: "First Fill Oloroso Sherry", tagline: "The oldest distillery in the Highlands", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVFY1hGQ6zWZLFeiE8d7oi-urAVcHc-qJ4Q&s" },

  // Islay
 {
    name: "Ballygrant",
    region: "Islay",
    cask: "First Fill Tempranillo Red Wine Barrique",
    tagline: "Bold character shaped by the sea",
    image: "https://images.openai.com/static-rsc-1/u4ZQnDT5ABgQdz3EoSVtX3NXvlx9zkSezZaZjoDCNArOpc8KvDK1dAwwN1aLYIlo8aFt3h970wWJ6OpTT5Sm7e-q8yhTrS5FQlmG4Z4srNW8_hcujfzZ5wbIvVu3RsMEeC7D819sAWwXvR8IZeVFPg"
  },
  {
    name: "Bowmore",
    region: "Islay",
    cask: "First Fill Bourbon Barrel",
    tagline: "Islay's oldest distillery",
    image: "https://cdn11.bigcommerce.com/s-a04d0/images/stencil/1280x1280/products/1879/2273/bowmore-12-year-old-islay-single-malt-scotch__42718.1744466558.jpg?c=2"
  },
  {
    name: "Bruichladdich",
    region: "Islay",
    cask: "Refill Bourbon Hogshead",
    tagline: "Progressive Hebridean distillers",
    image: "https://cdn11.bigcommerce.com/s-e8559/images/stencil/800x800/products/12177/12410/bruichladdich-the-classic-laddie-islay-single-malt-scotch__67500.1743598233.jpg?c=2"
  },
  {
    name: "Buchanan's Reserve",
    region: "Islay",
    cask: "12 Year Old Blended Scotch",
    tagline: "Smooth and rich",
    image: "https://www.picclickimg.com/3fQAAeSwDB5o4Vsx/Buchanans-Reserve-12-Year-Old-%A2-blended-Scotch.webp"
  },
  {
    name: "Caol Ila",
    region: "Islay",
    cask: "12 Year Old",
    tagline: "Islay's hidden distillery",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Caol_Ila_12_years_old_whisky.jpg/1200px-Caol_Ila_12_years_old_whisky.jpg?20150904141003"
  },
  {
    name: "Lagavulin",
    region: "Islay",
    cask: "16 Year Old",
    tagline: "Legendary Islay power",
    image: "https://c7.alamy.com/comp/2Y99CHK/germany-baden-wrttemberg-march-02-2024-bottle-of-lagavulin-16-years-with-added-cardboard-packaging-2Y99CHK.jpg"
  },
  {
    name: "Laphroaig",
    region: "Islay",
    cask: "10 Year Old",
    tagline: "Medicinal and distinctive",
    image: "https://delhidutyfree.co.in/media/catalog/product/cache/c3073cf0652b87af145d4aff9d92466d/2/0/2000180.webp"
  },

  // Lowland
   {
    name: "Bonnington",
    region: "Lowland",
    cask: "First Fill Bourbon Barrel",
    tagline: "Elegant lowland sophistication",
    image: "https://www.dnfinewine.co.nz/wp-content/uploads/whiskyCellarHeader.png"
  },
  {
    name: "Dalrymple (Ailsa Bay)",
    region: "Lowland",
    cask: "Refill Bourbon Hogshead",
    tagline: "Modern innovation, classic taste",
    image: "https://www.royalmilewhiskies.com/media/catalog/product/cache/10e6905b752ea4a438fa289a54c3891d/s/b/sb8042_5060825690997.jpg"
  },
  {
    name: "Deanston",
    region: "Lowland",
    cask: "First Fill Oloroso Sherry",
    tagline: "Highland in spirit, Lowland by birth",
    image: "https://www.royalmilewhiskies.com/media/catalog/product/cache/10e6905b752ea4a438fa289a54c3891d/s/b/sb8176_5060797401737.jpg"
  },
  {
    name: "Glenkinchie",
    region: "Lowland",
    cask: "Refill Bourbon Hogshead",
    tagline: "Edinburgh's malt",
    image: "https://img.thewhiskyexchange.com/1400/gkcob.12yov1.jpg?v=202407241"
  },
  {
    name: "Kingsbarns",
    region: "Lowland",
    cask: "First Fill Bourbon Barrel",
    tagline: "Fife's finest newcomer",
    image: "https://i0.wp.com/www.scotchology.com/wp-content/uploads/2024/08/Kingsbarn-Doocot-7.jpg?w=475&ssl=1"
  },
  {
    name: "Rosebank",
    region: "Lowland",
    cask: "Refill Bourbon Hogshead",
    tagline: "Reborn lowland legend",
    image: "https://www.whiskimen.com/wp-content/uploads/2022/11/Rosebank-1990-30-Year-Old-Lowland-Single-Malt-Scotch-Whisky-Release-1.jpeg"
  }];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner */}
<section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-fixed"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 text-center px-6 max-w-3xl">
    <h1 className="text-5xl md:text-7xl font-extrabold text-[#f5c76b] drop-shadow-lg animate-fade-in-up tracking-wide">
      Our Collection
    </h1>
    <p className="text-lg md:text-2xl text-gray-200 mt-4 mb-8 animate-fade-in delay-200">
      Discover the heritage and craftsmanship behind every exceptional cask.
    </p>
   
  </div>

  {/* Subtle Motion Overlay */}
  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(255,215,0,0.1),transparent_70%)] animate-pulse-slow" />
</section>

      {/* Collection Grid */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
           
          </div>

          {/* Highland */}
        <div className="mb-16">
  <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
    <span className="w-12 h-0.5 bg-accent"></span>
    Highland
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {distilleries
      .filter((d) => d.region === "Highland")
      .map((distillery, index) => (
        <Card
          key={index}
          className="relative bg-[#111] border border-border/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-gold transition-all duration-500 group"
        >
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={distillery.image}
              alt={distillery.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Subtle overlay for luxury tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="p-5">
            <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {distillery.name}
            </h4>
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-accent font-semibold">{distillery.region}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{distillery.cask}</span>
            </div>
            <p className="text-muted-foreground italic text-sm">
              {distillery.tagline}
            </p>
          </div>

          {/* Subtle hover border glow */}
          <div className="absolute inset-0 border border-transparent group-hover:border-accent/40 rounded-2xl transition-all duration-500"></div>
        </Card>
      ))}
  </div>
</div>


          {/* Speyside */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-accent"></span>
              Speyside
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distilleries.filter(d => d.region === "Speyside").map((distillery, index) => (
                <Card 
                  key={index} 
                  className="bg-background border-border hover-glow-gold cursor-pointer group overflow-hidden"
                >
                  <div className="hover-zoom">
                    <img 
                      src={distillery.image} 
                      alt={distillery.name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {distillery.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent font-semibold">{distillery.region}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-xs">{distillery.cask}</span>
                    </div>
                    <p className="text-muted-foreground italic text-sm pt-1">{distillery.tagline}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Islay */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-accent"></span>
              Islay
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distilleries.filter(d => d.region === "Islay").map((distillery, index) => (
                <Card 
                  key={index} 
                  className="bg-background border-border hover-glow-gold cursor-pointer group overflow-hidden"
                >
                  <div className="hover-zoom">
                    <img 
                      src={distillery.image} 
                      alt={distillery.name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {distillery.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent font-semibold">{distillery.region}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-xs">{distillery.cask}</span>
                    </div>
                    <p className="text-muted-foreground italic text-sm pt-1">{distillery.tagline}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Lowland */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
              <span className="w-12 h-0.5 bg-accent"></span>
              Lowland
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distilleries.filter(d => d.region === "Lowland").map((distillery, index) => (
                <Card 
                  key={index} 
                  className="bg-background border-border hover-glow-gold cursor-pointer group overflow-hidden"
                >
                  <div className="hover-zoom">
                    <img 
                      src={distillery.image} 
                      alt={distillery.name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {distillery.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-accent font-semibold">{distillery.region}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-xs">{distillery.cask}</span>
                    </div>
                    <p className="text-muted-foreground italic text-sm pt-1">{distillery.tagline}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
