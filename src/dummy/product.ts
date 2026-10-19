import businessCardsImg from "@/assets/category/businesscard.png"
import apparelImg from "@/assets/category/tshirt.png"
import mugsImg from "@/assets/category/mug.png"
import stickersImg from "@/assets/category/stickers.png"
import packagingImg from "@/assets/hero/packaging.png"
import marketingImg from "@/assets/category/marketing.png"

export interface ProductItem {
  id: string
  name: string
  desc: string
  startingPrice: number
  unit?: string
  rating: number
  reviews: string
  imageUrl: string
  badges: string[]
  filterCategories: string[]
}

export interface ProductTab {
  id: string
  label: string
}

export const productTabs: ProductTab[] = [
  { id: "all", label: "All Products" },
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "business-essentials", label: "Business Essentials" },
  { id: "personalized-gifts", label: "Personalized Gifts" },
]

export const products: ProductItem[] = [
  {
    id: "prod-1",
    name: "Premium Business Cards",
    desc: "450gsm velvety lamination with razor crisp edges and foil accents.",
    startingPrice: 19.0,
    unit: "/100pk",
    rating: 4.9,
    reviews: "1.2k reviews",
    imageUrl: businessCardsImg,
    badges: ["Spot UV", "Gold Foil"],
    filterCategories: ["all", "best-sellers", "business-essentials"],
  },
  {
    id: "prod-2",
    name: "Custom Cotton T-Shirts",
    desc: "Heavyweight breathable cotton with durable direct-to-garment prints.",
    startingPrice: 22.0,
    rating: 4.8,
    reviews: "850 reviews",
    imageUrl: apparelImg,
    badges: ["100% Combed Cotton"],
    filterCategories: ["all", "best-sellers"],
  },
  {
    id: "prod-3",
    name: "Personalized Coffee Mugs",
    desc: "Ceramic stoneware and thermal tumblers built for everyday warmth.",
    startingPrice: 16.5,
    rating: 4.9,
    reviews: "640 reviews",
    imageUrl: mugsImg,
    badges: ["Laser Engraved"],
    filterCategories: ["all", "best-sellers", "personalized-gifts"],
  },
  {
    id: "prod-4",
    name: "Custom Stickers",
    desc: "UV-cured scratch resistant barrier with crisp die cut edges.",
    startingPrice: 12.0,
    unit: "/50pk",
    rating: 5.0,
    reviews: "3.1k reviews",
    imageUrl: stickersImg,
    badges: ["Waterproof Vinyl"],
    filterCategories: ["all", "best-sellers"],
  },
  {
    id: "prod-5",
    name: "Branded Tote Bags",
    desc: "12oz reinforced handles with bottom gusset volume and screenprint.",
    startingPrice: 14.0,
    rating: 4.8,
    reviews: "520 reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    badges: ["Water-based Inks"],
    filterCategories: ["all", "new-arrivals"],
  },
  {
    id: "prod-6",
    name: "Custom Packaging Boxes",
    desc: "Sturdy corrugated mailers designed for e-commerce and retail unboxing.",
    startingPrice: 24.0,
    unit: "/25pk",
    rating: 4.9,
    reviews: "410 reviews",
    imageUrl: packagingImg,
    badges: ["Full Color"],
    filterCategories: ["all", "business-essentials"],
  },
  {
    id: "prod-7",
    name: "Personalized Notebooks",
    desc: "192 pages of bleed-resistant 100gsm acid-free paper with monogram cover.",
    startingPrice: 18.0,
    rating: 4.9,
    reviews: "330 reviews",
    imageUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    badges: ["Foil Stamped"],
    filterCategories: ["all", "new-arrivals", "personalized-gifts"],
  },
  {
    id: "prod-8",
    name: "Promotional Merchandise",
    desc: "Archival cotton rag prints, brochures, and branded giveaway accessories.",
    startingPrice: 15.0,
    rating: 5.0,
    reviews: "780 reviews",
    imageUrl: marketingImg,
    badges: ["Archival Grade"],
    filterCategories: ["all", "new-arrivals", "business-essentials"],
  },
]
