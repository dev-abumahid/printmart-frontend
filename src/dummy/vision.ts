import { ShieldCheck, Trees, Gauge, Headset, type LucideIcon } from "lucide-react"

export interface VisionCommitmentItem {
  id: string
  title: string
  desc: string
  icon: LucideIcon
  badgeBg: string
  iconColor: string
}

export const visionCommitments: VisionCommitmentItem[] = [
  {
    id: "vc-1",
    title: "100% Quality Promise",
    desc: "If your print isn’t flawless, we’ll reprint it immediately or refund your entire order.",
    icon: ShieldCheck,
    badgeBg: "bg-violet-100 dark:bg-indigo-950/60",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "vc-2",
    title: "Eco-Conscious Pulp",
    desc: "FSC-certified papers, water-based nontoxic inks, and plastic-free packaging materials.",
    icon: Trees,
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/60",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "vc-3",
    title: "Fast & Climate-Neutral",
    desc: "Expedited 48-hour print cycles paired with carbon-offset global courier delivery.",
    icon: Gauge,
    badgeBg: "bg-blue-50 dark:bg-blue-950/60",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "vc-4",
    title: "Master Print Support",
    desc: "Real graphic print technicians review your files and answer queries 7 days a week.",
    icon: Headset,
    badgeBg: "bg-amber-50 dark:bg-amber-950/60",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
]
