import {
  LayoutTemplate,
  Sparkles,
  BadgeCheck,
  Box,
  Truck,
  type LucideIcon,
} from "lucide-react"

import banner2Img from "@/assets/hero/banner2.png"
import banner3Img from "@/assets/hero/banner3.png"

export interface DynamicHeroSlideItem {
  id: string
  eyebrow: string
  titleA: string
  titleB: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  image: string
  overlayTag?: {
    icon: LucideIcon
    iconColor?: string
    iconBg?: string
    eyebrow: string
    title: string
    badge: string
    badgeBg?: string
    badgeColor?: string
  }
  socialProof?: {
    avatars: string[]
    rating: number
    text: string
  }
  trustHighlights?: Array<{
    icon: LucideIcon
    text: string
    iconColor?: string
  }>
}

export const dynamicHeroSlides: DynamicHeroSlideItem[] = [
  {
    id: "slide-2",
    eyebrow: "DESIGN. CUSTOMIZE. SELL.",
    titleA: "Build Products",
    titleB: "People Remember",
    description:
      "Create business cards, apparel, packaging and promotional products with a premium look and a smooth design workflow.",
    primaryCta: {
      label: "Create Now",
      href: "/editor",
    },
    secondaryCta: {
      label: "Browse Catalog",
      href: "/products",
    },
    image: banner2Img,
    overlayTag: {
      icon: LayoutTemplate,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-50 dark:bg-indigo-950/60",
      eyebrow: "CATALOG READY",
      title: "500+ Curated Templates",
      badge: "Instant Setup",
      badgeBg: "bg-emerald-50 dark:bg-emerald-950/50",
      badgeColor: "text-emerald-600 dark:text-emerald-400",
    },
    socialProof: {
      avatars: ["E", "M", "A", "S"],
      rating: 5,
      text: "Trusted by 10,000+ creators & brands",
    },
  },
  {
    id: "slide-3",
    eyebrow: "PRINT MORE. DO MORE.",
    titleA: "Create Your Brand",
    titleB: "Across Everything",
    description:
      "From mugs and bags to T-shirts and labels, turn your brand identity into polished real-world products customers love.",
    primaryCta: {
      label: "Start Branding",
      href: "/editor",
    },
    secondaryCta: {
      label: "View Templates",
      href: "/products",
    },
    image: banner3Img,
    overlayTag: {
      icon: Sparkles,
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-950/60",
      eyebrow: "UNLIMITED MERCH",
      title: "Custom Bags, Mugs & Apparel",
      badge: "High Res Print",
      badgeBg: "bg-indigo-50 dark:bg-indigo-950/50",
      badgeColor: "text-indigo-600 dark:text-indigo-400",
    },
    trustHighlights: [
      {
        icon: BadgeCheck,
        text: "Enterprise Quality",
        iconColor: "text-indigo-500",
      },
      {
        icon: Box,
        text: "Zero Minimums",
        iconColor: "text-indigo-600 dark:text-indigo-400",
      },
      {
        icon: Truck,
        text: "Global Express",
        iconColor: "text-emerald-500 dark:text-emerald-400",
      },
    ],
  },
]
