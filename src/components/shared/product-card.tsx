import { useState } from "react"
import { motion } from "motion/react"
import { Heart, Star } from "lucide-react"

import type { ProductItem } from "@/dummy/product"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

export interface ProductCardProps {
  product: ProductItem
  index?: number
  className?: string
  onQuickCustomize?: (product: ProductItem) => void
}

export default function ProductCard({
  product,
  index = 0,
  className,
  onQuickCustomize,
}: ProductCardProps) {
  const prefersReduced = useReducedMotion()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsWishlisted((prev) => !prev)
  }

  const handleQuickCustomize = (e: React.MouseEvent) => {
    e.stopPropagation()
    onQuickCustomize?.(product)
  }

  return (
    <motion.article
      layout
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.45,
        delay: prefersReduced ? 0 : (index % 4) * 0.06,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={prefersReduced ? undefined : { y: -4 }}
      tabIndex={0}
      role="article"
      aria-label={product.name}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-3 dark:bg-zinc-900",
        "border border-gray-200/90 dark:border-zinc-800",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)]",
        "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        {/* Product Media Area */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleWishlistToggle}
            aria-label={
              isWishlisted
                ? `Remove ${product.name} from wishlist`
                : `Save ${product.name} to wishlist`
            }
            className={cn(
              "absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full",
              "bg-white/90 backdrop-blur-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]",
              "border border-black/5 dark:border-white/10 dark:bg-zinc-900/90",
              "transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            )}
          >
            <Heart
              className={cn(
                "size-3.5 transition-colors duration-200",
                isWishlisted
                  ? "fill-rose-500 text-rose-500"
                  : "text-gray-400 hover:text-rose-500 dark:text-zinc-400 dark:hover:text-rose-400"
              )}
            />
          </button>

          {/* Feature Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute bottom-3 left-3 z-10 flex flex-wrap items-center gap-1">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-sm bg-white/90 px-2 py-0.5 text-xs font-semibold tracking-wide text-gray-900 backdrop-blur-[2px] shadow-sm dark:bg-zinc-900/90 dark:text-zinc-100 font-jakarta leading-4"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-1.5 pt-3">
          <Star className="size-3.5 fill-amber-500 text-amber-500 shrink-0" />
          <span className="text-xs font-bold tracking-wide text-gray-900 dark:text-zinc-100 font-jakarta leading-4">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs font-normal text-gray-400 dark:text-zinc-500 font-inter leading-5">
            ({product.reviews})
          </span>
        </div>

        {/* Product Title */}
        <h3 className="line-clamp-1 text-xl font-semibold leading-7 text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400 font-jakarta">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="line-clamp-2 text-xs font-normal leading-5 text-gray-600 dark:text-zinc-400 font-inter">
          {product.desc}
        </p>
      </div>

      {/* Product Footer */}
      <div className="pt-4">
        <div className="flex items-center justify-between border-t border-gray-200/50 pt-4 dark:border-zinc-800">
          {/* Price */}
          <div className="flex items-baseline gap-1 text-xs">
            <span className="font-normal text-gray-400 dark:text-zinc-500 font-inter leading-5">
              From
            </span>
            <span className="text-base font-bold leading-5 text-gray-900 dark:text-zinc-100 font-jakarta">
              ${product.startingPrice.toFixed(2)}
            </span>
            {product.unit && (
              <span className="font-normal text-gray-400 dark:text-zinc-500 font-inter leading-5">
                {product.unit}
              </span>
            )}
          </div>

          {/* Quick Customize Action */}
          <button
            type="button"
            onClick={handleQuickCustomize}
            className={cn(
              "rounded-lg bg-gray-100 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gray-900",
              "hover:bg-gray-900 hover:text-white active:scale-95",
              "dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900",
              "transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 font-jakarta leading-4"
            )}
          >
            Quick Customize
          </button>
        </div>
      </div>
    </motion.article>
  )
}
