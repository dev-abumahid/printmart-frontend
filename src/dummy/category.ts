import businessCardsImg from "@/assets/category/businesscard.png"
import customPackagingImg from "@/assets/category/custom.png"
import apparelImg from "@/assets/category/tshirt.png"
import stickersImg from "@/assets/category/stickers.png"
import mugsImg from "@/assets/category/mug.png"
import signsImg from "@/assets/category/signs.png"
import marketingImg from "@/assets/category/marketing.png"
import giftsImg from "@/assets/category/personal.png"

export interface CategoryItem {
  id: string
  name: string
  slug: string
  categoryTag?: string
  desc: string
  features: string[]
  imageUrl: string
  size?: "large" | "medium" | "compact"
}

export const categories: CategoryItem[] = [
  // Row 1: Featured Flagship Categories
  {
    id: "cat-1",
    name: "Business Cards",
    slug: "corporate-identity",
    categoryTag: "CORPORATE & IDENTITY",
    desc: "Foil stamped, painted-edge, and ultra-thick archival card finishes engineered to make an impression.",
    features: ["Featured", "Luxe Cotton Stock"],
    imageUrl: businessCardsImg,
    size: "large",
  },
  {
    id: "cat-2",
    name: "Custom Packaging",
    slug: "boxes-and-mailers",
    categoryTag: "BOXES & MAILERS",
    desc: "Transform deliveries into unforgettable customer rituals with bespoke structural packaging.",
    features: ["100% Recycled"],
    imageUrl: customPackagingImg,
    size: "large",
  },

  // Row 2: Popular Essentials
  {
    id: "cat-3",
    name: "T-Shirts & Apparel",
    slug: "t-shirts-apparel",
    desc: "Retail-ready hoodies, hats, and organic tees.",
    features: ["Embroidery & Print"],
    imageUrl: apparelImg,
    size: "medium",
  },
  {
    id: "cat-4",
    name: "Stickers & Labels",
    slug: "stickers-labels",
    desc: "Die-cut vinyl, roll labels, and holographic foils.",
    features: ["Waterproof Vinyl"],
    imageUrl: stickersImg,
    size: "medium",
  },
  {
    id: "cat-5",
    name: "Mugs & Drinkware",
    slug: "mugs-drinkware",
    desc: "Thermal tumblers, diner mugs, and water bottles.",
    features: ["Ceramic & Steel"],
    imageUrl: mugsImg,
    size: "medium",
  },

  // Row 3: Marketing & Gifts
  {
    id: "cat-6",
    name: "Signs & Banners",
    slug: "signs-banners",
    desc: "Vinyl banners, foam boards, and retractable stands.",
    features: ["Large Format"],
    imageUrl: signsImg,
    size: "compact",
  },
  {
    id: "cat-7",
    name: "Marketing Materials",
    slug: "marketing-materials",
    desc: "Tri-fold brochures, sales sheets, and lookbooks.",
    features: ["High Density"],
    imageUrl: marketingImg,
    size: "compact",
  },
  {
    id: "cat-8",
    name: "Personalized Gifts",
    slug: "personalized-gifts",
    desc: "Leather goods, photo blankets, and engraved tokens.",
    features: ["Sentimental"],
    imageUrl: giftsImg,
    size: "compact",
  },
]
