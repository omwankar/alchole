import { media } from "@/data/media";

export type SpiritType = "Single Malt" | "Cask" | "Blended" | "Limited Release";
export type Region = "Highland" | "Speyside" | "Islay" | "Lowland";

export interface Product {
  slug: string;
  name: string;
  distillery: string;
  region: Region;
  age: number | null;
  abv: number;
  price: number;
  type: SpiritType;
  caskType: string;
  soldOut: boolean;
  image: string;
  summary: string;
  colour: string;
  nose: string;
  palate: string;
  finish: string;
  provenance: string;
}

export const products: Product[] = [
  {
    slug: "highland-reserve-18",
    name: "Highland Reserve 18",
    distillery: "Glen of Mists",
    region: "Highland",
    age: 18,
    abv: 46.0,
    price: 285,
    type: "Single Malt",
    caskType: "Refill bourbon hogshead",
    soldOut: false,
    image: media.bottlePortrait,
    summary: "A patient Highland malt, shaped by cold air and long years in oak.",
    colour: "Deep antique gold",
    nose: "Heather honey, beeswax, orchard pear and a thread of peat smoke.",
    palate: "Silky malt, baked apple, toasted oak and a quiet mineral note.",
    finish: "Long, warm, and dry, with lingering gold leaf and leather.",
    provenance: "Single cask, bottled under West Ford supervision. Certificate of origin included.",
  },
  {
    slug: "speyside-elegance-12",
    name: "Speyside Elegance 12",
    distillery: "Strath of Honey",
    region: "Speyside",
    age: 12,
    abv: 43.0,
    price: 96,
    type: "Single Malt",
    caskType: "First-fill oloroso sherry",
    soldOut: false,
    image: media.premiumBottles,
    summary: "Fruit-forward and composed — the still house in its most gracious mood.",
    colour: "Polished mahogany",
    nose: "Dried fig, orange peel, toasted almond and polished wood.",
    palate: "Raisin cake, dark chocolate and a soft spice of nutmeg.",
    finish: "Warm sherry sweetness, then a clean, nutty close.",
    provenance: "Distillery-selected casks, fully traceable to warehouse number and fill date.",
  },
  {
    slug: "islay-coastal-10",
    name: "Islay Coastal 10",
    distillery: "Shoreline",
    region: "Islay",
    age: 10,
    abv: 55.2,
    price: 142,
    type: "Single Malt",
    caskType: "First-fill bourbon barrel",
    soldOut: false,
    image: media.bottlePortrait,
    summary: "Sea air, peat and restraint — Islay without theatre.",
    colour: "Burnished amber",
    nose: "Bonfire on wet stone, lemon oil, iodine and vanilla pod.",
    palate: "Peat smoke, salted caramel, green apple and pepper.",
    finish: "Long maritime close, ash and citrus pith.",
    provenance: "Cask strength, non-chill filtered. Warehouse ledger extract on request.",
  },
  {
    slug: "lowland-quiet-15",
    name: "Lowland Quiet 15",
    distillery: "Meadowbank",
    region: "Lowland",
    age: 15,
    abv: 46.3,
    price: 168,
    type: "Single Malt",
    caskType: "Refill hogshead",
    soldOut: false,
    image: media.premiumBottles,
    summary: "A Lowland malt of unusual stillness — grass, citrus and pale oak.",
    colour: "Pale barley gold",
    nose: "Cut meadow, lemon posset, white pepper and linen.",
    palate: "Light malt, green tea, barley sugar and a cool mineral line.",
    finish: "Precise and dry, with a last note of chamomile.",
    provenance: "Single warehouse parcel, bottled for West Ford’s Reserve List.",
  },
  {
    slug: "cask-of-the-house-1998",
    name: "Cask of the House 1998",
    distillery: "Glen of Mists",
    region: "Highland",
    age: 26,
    abv: 51.8,
    price: 2400,
    type: "Cask",
    caskType: "First-fill sherry butt",
    soldOut: false,
    image: media.stepCask,
    summary: "Spirit drawn from a 1998 sherry butt, still held in bond.",
    colour: "Dark conker",
    nose: "Christmas cake, polished mahogany, clove and old library.",
    palate: "Dense fruit, espresso oak and a slow unfurling of spice.",
    finish: "Endless, dry, and quietly powerful.",
    provenance: "Held under bond. Distillery, fill date and warehouse are recorded.",
  },
  {
    slug: "midnight-release",
    name: "Midnight Release",
    distillery: "House blend",
    region: "Speyside",
    age: null,
    abv: 43.0,
    price: 78,
    type: "Blended",
    caskType: "Mixed malt and grain",
    soldOut: true,
    image: media.bottlePortrait,
    summary: "A private blend composed for evening rooms. This allocation is complete.",
    colour: "Warm copper",
    nose: "Orange oil, light smoke, malt biscuit and cedar.",
    palate: "Soft grain sweetness, then a Highland spine of oak.",
    finish: "Short, polite, and warming.",
    provenance: "West Ford house recipe. Allocation closed; join the Reserve List.",
  },
  {
    slug: "islay-cask-share",
    name: "Islay Cask Share",
    distillery: "Shoreline",
    region: "Islay",
    age: 8,
    abv: 62.1,
    price: 980,
    type: "Cask",
    caskType: "First-fill tempranillo barrique",
    soldOut: false,
    image: media.stepCask,
    summary: "A young Islay spirit in wine oak — for those who prefer the long view.",
    colour: "Garnet amber",
    nose: "Red fruit over peat, tar and sea spray.",
    palate: "Dense smoke, black cherry and toasted oak.",
    finish: "Ash, salt and a lingering tannin.",
    provenance: "Warehouse records available on request.",
  },
  {
    slug: "speyside-private-21",
    name: "Speyside Private 21",
    distillery: "Strath of Honey",
    region: "Speyside",
    age: 21,
    abv: 48.6,
    price: 420,
    type: "Limited Release",
    caskType: "First-fill oloroso hogshead",
    soldOut: false,
    image: media.premiumBottles,
    summary: "Two hundred and twelve bottles. No further casks will be drawn.",
    colour: "Burnished sherry",
    nose: "Marmalade, walnut oil, old roses and beeswax.",
    palate: "Silk and spice, dark honey, and a thread of tobacco leaf.",
    finish: "Measured, drying, and complete.",
    provenance: "Numbered bottles. Each includes a signed provenance card.",
  },
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);

export const relatedProducts = (slug: string, region: Region) =>
  products.filter((item) => item.slug !== slug && item.region === region).slice(0, 3);
