import { useRef, useState, useEffect, useCallback } from "react"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

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
        delay: prefersReduced ? 0 : Math.min(index * 0.08, 0.4),
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
        "transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
        "w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start"
      )}
    >
      {/* Top Image Preview Area */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-orange-50 dark:bg-zinc-800 mb-3">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Drag-to-scroll state
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftStartRef = useRef(0)
  const hasMovedRef = useRef(false)

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth

    setCanScrollLeft(scrollLeft > 6)
    setCanScrollRight(scrollLeft < maxScroll - 6)
  }, [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  // Autoplay: automatically advances cards horizontally, pauses on hover or interaction
  useEffect(() => {
    if (prefersReduced || isPaused) return

    const interval = setInterval(() => {
      const el = scrollContainerRef.current
      if (!el) return

      const cardWidth = el.firstElementChild?.clientWidth || 340
      const scrollStep = cardWidth + 24
      const maxScroll = el.scrollWidth - el.clientWidth

      // When reaching or near the end, wrap smoothly back to the beginning
      if (el.scrollLeft >= maxScroll - 16) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: scrollStep, behavior: "smooth" })
      }
    }, 3800)

    return () => clearInterval(interval)
  }, [prefersReduced, isPaused])

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return
    const cardWidth =
      scrollContainerRef.current.firstElementChild?.clientWidth || 340
    scrollContainerRef.current.scrollBy({
      left: -(cardWidth + 24),
      behavior: "smooth",
    })
  }

  const scrollNext = () => {
    if (!scrollContainerRef.current) return
    const cardWidth =
      scrollContainerRef.current.firstElementChild?.clientWidth || 340
    scrollContainerRef.current.scrollBy({
      left: cardWidth + 24,
      behavior: "smooth",
    })
  }

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current
    if (!el) return

    setIsPaused(true)
    isDraggingRef.current = true
    hasMovedRef.current = false
    startXRef.current = e.pageX - el.offsetLeft
    scrollLeftStartRef.current = el.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current
    if (!isDraggingRef.current || !el) return

    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startXRef.current) * 1.4

    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true
    }

    el.scrollLeft = scrollLeftStartRef.current - walk
  }

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false
    setIsPaused(false)
  }

  return (
    <section
      aria-labelledby="little-things-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-8 sm:gap-10 select-none overflow-hidden"
    >
      {/* Section Header with Navigation Controls */}
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

        {/* Header Right: Subtitle & Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center lg:items-end gap-5 lg:gap-8">
          <p className="max-w-md text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-relaxed sm:leading-6">
            Handcrafted personalized items made with sentimental materials to
            commemorate life&apos;s most meaningful milestones.
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous items"
              className={cn(
                "size-10 rounded-full border border-gray-200 dark:border-zinc-800",
                "bg-white dark:bg-zinc-900 text-gray-800 dark:text-zinc-200 shadow-xs",
                "flex items-center justify-center transition-all duration-200",
                canScrollLeft
                  ? "hover:bg-gray-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 cursor-pointer opacity-100"
                  : "opacity-40 cursor-not-allowed"
              )}
            >
              <ArrowLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Scroll to next items"
              className={cn(
                "size-10 rounded-full border border-gray-200 dark:border-zinc-800",
                "bg-white dark:bg-zinc-900 text-gray-800 dark:text-zinc-200 shadow-xs",
                "flex items-center justify-center transition-all duration-200",
                canScrollRight
                  ? "hover:bg-gray-50 dark:hover:bg-zinc-800 hover:scale-105 active:scale-95 cursor-pointer opacity-100"
                  : "opacity-40 cursor-not-allowed"
              )}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Horizontal Scrolling Cards Track */}
      <div
        ref={scrollContainerRef}
        data-lenis-prevent
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className={cn(
          "w-full flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "cursor-grab active:cursor-grabbing select-none"
        )}
      >
        {littleThings.map((item, idx) => (
          <LittleThingCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  )
}
