import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from "lucide-react"

import { products, productTabs } from "@/dummy/product"
import ProductCard from "@/components/shared/product-card"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

export default function Product() {
  const prefersReduced = useReducedMotion()
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") {
      return products
    }
    return products.filter((item) => item.filterCategories.includes(activeTab))
  }, [activeTab])

  return (
    <section
      aria-labelledby="curated-essentials-heading"
      className="w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-10 select-none"
    >
      {/* Section Header & Category Filter Tabs */}
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
            <span className="size-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              CURATED ESSENTIALS
            </span>
          </div>

          <h2
            id="curated-essentials-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Made for Your Next Big
            <br className="hidden sm:inline" /> Idea
          </h2>

          <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-6">
            Discover our most-loved customizable products.
          </p>
        </div>

        {/* Filter Navigation Tabs Bar */}
        <div
          role="tablist"
          aria-label="Filter products by collection"
          className="relative max-w-full overflow-x-auto no-scrollbar rounded-xl bg-white p-1 border border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center shrink-0"
        >
          {productTabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative shrink-0 rounded-lg px-4 py-2 text-xs font-semibold font-jakarta leading-4 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  isActive
                    ? "text-white dark:text-zinc-900"
                    : "text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProductFilter"
                    className="absolute inset-0 bg-gray-900 dark:bg-zinc-100 rounded-lg shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Product Cards Responsive Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 16 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full pt-6 flex flex-col items-center justify-center"
      >
        <button
          type="button"
          aria-label="Explore all products in catalog"
          className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white dark:bg-zinc-900 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-500 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="text-gray-900 dark:text-zinc-100 text-base font-semibold font-jakarta leading-5">
            Explore All Products
          </span>
          <ArrowRight className="size-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </motion.div>
    </section>
  )
}
