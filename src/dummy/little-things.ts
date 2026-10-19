import photoCeramicsImg from "@/assets/little_things/customphotoceramics.png"
import embossedLeatherImg from "@/assets/little_things/embossedleather.png"
import wovenJacquardImg from "@/assets/little_things/wovenjacquard.png"
import bespokeImg from "@/assets/little_things/bespoke.png"

export interface LittleThingItem {
  id: string
  title: string
  desc: string
  badge: string
  price: number
  imageUrl: string
}

export const littleThings: LittleThingItem[] = [
  {
    id: "lt-1",
    title: "Custom Photo Ceramics",
    desc: "Vibrant dishwasher-safe archival pigments.",
    badge: "Heirloom Quality",
    price: 18.0,
    imageUrl: photoCeramicsImg,
  },
  {
    id: "lt-2",
    title: "Embossed Leather Keepsakes",
    desc: "Full-grain leather with blind heat deboss.",
    badge: "Italian Leather",
    price: 24.0,
    imageUrl: embossedLeatherImg,
  },
  {
    id: "lt-3",
    title: "Woven Jacquard Blankets",
    desc: "Intricately woven threads, not printed.",
    badge: "100% Cotton",
    price: 68.0,
    imageUrl: wovenJacquardImg,
  },
  {
    id: "lt-4",
    title: "Bespoke Letterpress Sets",
    desc: "Deep impression letterpress with wax seal kit.",
    badge: "Hand Lined",
    price: 32.0,
    imageUrl: bespokeImg,
  },
]
