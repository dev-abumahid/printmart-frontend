import {
  PackageCheck,
  HandHeart,
  Sparkles,
  Gem,
  type LucideIcon,
} from "lucide-react"

export interface VisionReasonItem {
  icon: LucideIcon
  title: string
  description: string
}

export const visionReasons: VisionReasonItem[] = [
  {
    icon: PackageCheck,
    title: "Fast, reliable delivery",
    description:
      "Get your print essentials delivered quickly with dependable production and shipping.",
  },
  {
    icon: HandHeart,
    title: "The PrintMart promise",
    description:
      "We care about the final result and work to make sure your order feels right.",
  },
  {
    icon: Sparkles,
    title: "Business perks",
    description:
      "Enjoy better value, helpful support and print solutions built for growing brands.",
  },
  {
    icon: Gem,
    title: "Premium papers & finishes",
    description:
      "Choose from quality materials and finishes that make every printed piece feel special.",
  },
]
