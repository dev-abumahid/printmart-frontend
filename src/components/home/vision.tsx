import { motion } from "motion/react"

import { visionCommitments, type VisionCommitmentItem } from "@/dummy/vision"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

interface VisionCardProps {
  item: VisionCommitmentItem
  index: number
}

function VisionCard({ item, index }: VisionCardProps) {
  const prefersReduced = useReducedMotion()
  const Icon = item.icon

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: prefersReduced ? 0 : index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={prefersReduced ? undefined : { y: -4 }}
      tabIndex={0}
      role="article"
      aria-label={item.title}
      className="group flex flex-col items-center text-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl p-2 transition-all duration-300"
    >
      {/* Icon Badge */}
      <div
        className={cn(
          "size-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm shrink-0",
          item.badgeBg
        )}
      >
        <Icon className={cn("size-6 transition-colors duration-200", item.iconColor)} />
      </div>

      {/* Commitment Title */}
      <h3 className="pt-1 text-xl font-semibold leading-7 text-gray-900 dark:text-zinc-100 font-jakarta group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
        {item.title}
      </h3>

      {/* Commitment Description */}
      <p className="max-w-65 text-xs font-normal leading-5 text-gray-600 dark:text-zinc-400 font-inter">
        {item.desc}
      </p>
    </motion.article>
  )
}

export default function Vision() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-labelledby="vision-heading"
      className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 select-none"
    >
      {/* Outer White Card Container */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full rounded-3xl bg-white dark:bg-zinc-900 p-8 sm:p-12 lg:p-16 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-gray-200/90 dark:border-zinc-800 flex flex-col justify-start items-center gap-12 sm:gap-16"
      >
        {/* Section Header */}
        <div className="w-full max-w-xl flex flex-col justify-start items-center gap-2 text-center">
          <h2
            id="vision-heading"
            className="text-center text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Beautifully Made.
            <br className="hidden sm:inline" /> Thoughtfully Delivered.
          </h2>

          <p className="text-center text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-6 pt-1">
            Our four commitments to every creator, agency, and brand we print for.
          </p>
        </div>

        {/* 4 Commitments Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {visionCommitments.map((item, idx) => (
            <VisionCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
