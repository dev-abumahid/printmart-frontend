import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import { categories, type CategoryItem } from "@/dummy/category"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  category: CategoryItem
  className?: string
  isLarge?: boolean
  index: number
}

function CategoryCard({ category, className, isLarge = false, index }: CategoryCardProps) {
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
      role="region"
      aria-label={category.name}
      className={cn(
        "group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none",
        className
      )}
    >
      {/* Background Image with Gentle Scale on Hover */}
      <img
        src={category.imageUrl}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Cinematic Dark Gradient Vignette for Crisp Text Contrast */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-300",
          isLarge
            ? "bg-linear-to-t from-gray-950/60 via-gray-950/30 via-50% to-gray-950/0 group-hover:from-gray-950/95"
            : "bg-linear-to-t from-gray-950/50 via-gray-950/20 via-55% to-black/0 group-hover:from-gray-950/90"
        )}
        aria-hidden="true"
      />

      {/* Top Header inside Card */}
      <div className="relative z-10 flex items-start justify-between gap-3 p-5 sm:p-7 lg:p-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {category.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.08)] border border-white/20 dark:border-white/10 text-gray-900 dark:text-zinc-100 text-xs font-semibold font-jakarta leading-4 tracking-wide"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Circular Action Button */}
        <div
          aria-label={`Explore ${category.name}`}
          className={cn(
            "rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center text-gray-900 dark:text-zinc-100 group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:scale-105 transition-all duration-300 shrink-0",
            isLarge ? "size-10" : "size-9"
          )}
        >
          <ArrowUpRight className="size-4 text-gray-900 dark:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>
      </div>

      {/* Bottom Content inside Card */}
      <div className="relative z-10 p-5 sm:p-7 lg:p-8 flex flex-col justify-end">
        {category.categoryTag && (
          <span className="text-gray-200 dark:text-zinc-300 text-xs font-bold font-jakarta uppercase tracking-wider mb-1 leading-4">
            {category.categoryTag}
          </span>
        )}

        <h3
          className={cn(
            "text-white font-bold font-jakarta tracking-tight",
            isLarge
              ? "text-3xl sm:text-4xl leading-tight sm:leading-10 mb-2"
              : "text-xl sm:text-2xl leading-7 mb-1.5"
          )}
        >
          {category.name}
        </h3>

        <p
          className={cn(
            "text-gray-200 dark:text-zinc-300 font-normal font-inter leading-relaxed",
            isLarge ? "text-xs sm:text-[13px] max-w-[512px]" : "text-xs max-w-sm"
          )}
        >
          {category.desc}
        </p>
      </div>
    </motion.article>
  )
}

export default function Category() {
  const prefersReduced = useReducedMotion()

  const row1 = categories.slice(0, 2)
  const row2 = categories.slice(2, 5)
  const row3 = categories.slice(5, 8)

  return (
    <section
      aria-labelledby="category-showcase-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 select-none"
    >
      {/* Section Header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-12 lg:mb-16"
      >
        <div className="flex flex-col items-start gap-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              CATEGORY SHOWCASE
            </span>
          </div>
          <h2
            id="category-showcase-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-[56px] tracking-tight"
          >
            Explore What You Can Create
          </h2>
        </div>

        <div className="max-w-md lg:pr-4">
          <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-relaxed sm:leading-6">
            Discover endless possibilities for your business, brand, and everyday moments.
          </p>
        </div>
      </motion.div>

      {/* Categories Grid Architecture */}
      <div className="flex flex-col gap-6">
        {/* Row 1: 2 Flagship Categories (7 cols + 5 cols on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {row1[0] && (
            <CategoryCard
              category={row1[0]}
              className="lg:col-span-7 h-80 sm:h-96"
              isLarge
              index={0}
            />
          )}
          {row1[1] && (
            <CategoryCard
              category={row1[1]}
              className="lg:col-span-5 h-80 sm:h-96"
              isLarge
              index={1}
            />
          )}
        </div>

        {/* Row 2: 3 Popular Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {row2.map((cat, idx) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              className="h-64 sm:h-72"
              index={idx + 2}
            />
          ))}
        </div>

        {/* Row 3: 3 Essential & Gift Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {row3.map((cat, idx) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              className="h-56 sm:h-60"
              index={idx + 5}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
