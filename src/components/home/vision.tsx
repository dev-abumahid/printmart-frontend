import { motion } from "motion/react"
import { BadgeCheck } from "lucide-react"

import { visionReasons } from "@/dummy/vision"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export default function Vision() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-label="Why Choose PrintMart"
      className="section-gradient w-full py-12 sm:py-16 lg:py-20 border-t border-gray-100 dark:border-zinc-800 select-none"
    >
      <div className="section-container">
        {/* TRUST STRIP */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 sm:mb-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs sm:text-sm text-gray-700 dark:text-zinc-300"
        >
          <span className="font-semibold text-gray-900 dark:text-zinc-100 font-jakarta">
            Excellent
          </span>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className="flex size-5 items-center justify-center rounded-[3px] bg-emerald-500 text-[11px] font-bold text-white shadow-xs"
              >
                ★
              </span>
            ))}
          </div>

          <span className="text-gray-500 dark:text-zinc-400 font-inter">
            Trusted by thousands of customers
          </span>

          <span className="inline-flex items-center gap-1 font-semibold text-gray-900 dark:text-zinc-100 font-jakarta">
            <span className="text-emerald-500">★</span>
            PrintMart
          </span>
        </motion.div>

        {/* REASONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {visionReasons.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: prefersReduced ? 0 : index * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex h-full flex-col items-center text-center cursor-default"
              >
                {/* Icon Container */}
                <div className="flex size-18 sm:size-20 items-center justify-center text-emerald-500 dark:text-emerald-400 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="size-14" strokeWidth={1.2} />
                </div>

                {/* Reason Title */}
                <h3 className="mt-3 text-base sm:text-lg font-semibold font-jakarta tracking-tight text-gray-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                {/* Reason Description */}
                <p className="mt-2 max-w-[280px] text-xs sm:text-sm font-normal font-inter leading-relaxed text-gray-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>

        {/* BOTTOM CONFIDENCE LINE */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 border-t border-gray-100 dark:border-zinc-800 pt-6 text-center text-xs text-gray-500 dark:text-zinc-400 font-inter">
          <BadgeCheck className="size-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
          <span>
            Thoughtful service, quality materials and dependable results.
          </span>
        </div>
      </div>
    </section>
  )
}
