import { motion } from "motion/react"

import { littleThings, type LittleThingItem } from "@/dummy/little-things"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

interface LittleThingCardProps {
  item: LittleThingItem
  index: number
}

function LittleThingCard({ item, index }: LittleThingCardProps) {
  const prefersReduced = useReducedMotion()

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
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-3 dark:bg-zinc-900",
        "border border-gray-200/90 dark:border-zinc-800",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)]",
        "transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      )}
    >
      {/* Top Image Preview Area */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-orange-50 dark:bg-zinc-800 mb-3">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Quality Material Badge */}
        <div className="absolute top-2 left-2 z-10 rounded-full bg-white/90 px-2.5 py-0.5 backdrop-blur-[2px] shadow-sm dark:bg-zinc-900/90">
          <span className="text-xs font-semibold tracking-wide text-amber-600 dark:text-amber-400 font-jakarta leading-4">
            {item.badge}
          </span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="flex flex-1 flex-col justify-between gap-1 px-1 pb-1">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-xl font-semibold leading-7 text-gray-900 transition-colors group-hover:text-amber-600 dark:text-zinc-100 dark:group-hover:text-amber-400 font-jakarta">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-xs font-normal leading-5 text-gray-600 dark:text-zinc-400 font-inter">
            {item.desc}
          </p>
        </div>

        <div className="pt-2">
          <span className="text-xs font-semibold leading-4 text-gray-900 dark:text-zinc-100 font-jakarta">
            From ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function LittleThings() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-labelledby="little-things-heading"
      className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-12 sm:gap-16 select-none"
    >
      {/* Section Header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
      >
        {/* Title and Eyebrow */}
        <div className="flex flex-col justify-start items-start gap-1.5 pt-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 bg-amber-600 dark:bg-amber-500 rounded-full animate-pulse" />
            <span className="text-amber-600 dark:text-amber-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              FOR THE ONES YOU LOVE
            </span>
          </div>

          <h2
            id="little-things-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Little Things. Big Feelings.
          </h2>
        </div>

        {/* Header Right Subtitle */}
        <div className="max-w-md lg:pr-3.5">
          <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-relaxed sm:leading-6">
            Handcrafted personalized items made with sentimental materials to
            commemorate life&apos;s most meaningful milestones.
          </p>
        </div>
      </motion.div>

      {/* Dynamic Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {littleThings.map((item, idx) => (
          <LittleThingCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  )
}
