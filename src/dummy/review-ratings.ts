import rating1Img from "@/assets/ratings/rating1.png"
import rating2Img from "@/assets/ratings/rating2.png"
import rating3Img from "@/assets/ratings/rating3.png"

export interface CommunityReviewItem {
  id: string
  handle: string
  rating: number
  quote: string
  author: string
  role: string
  imageUrl: string
}

export const communityReviews: CommunityReviewItem[] = [
  {
    id: "rev-1",
    handle: "@roast_and_co",
    rating: 5,
    quote:
      "The print consistency on our recurring coffee pouch runs has been flawless. Customer comments on our matte pouches doubled after switching.",
    author: "Marcus Vance",
    role: "Founder, Roast & Co.",
    imageUrl: rating1Img,
  },
  {
    id: "rev-2",
    handle: "@atelier_goods",
    rating: 5,
    quote:
      "We dropped a 500-unit limited hoodie release. Zero misprints, rich pigment density, and delivered a day ahead of schedule.",
    author: "Clara Lin",
    role: "Creative Director",
    imageUrl: rating2Img,
  },
  {
    id: "rev-3",
    handle: "@elena_designs",
    rating: 5,
    quote:
      "The cotton deckled paper and gold foil registration is second to none. My wedding stationery clients are continually mesmerized.",
    author: "Elena Rostova",
    role: "Calligrapher",
    imageUrl: rating3Img,
  },
]
