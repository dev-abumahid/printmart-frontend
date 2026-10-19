import { useRef, useState, useEffect, useCallback } from "react"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

import {
  communityReviews,
  type CommunityReviewItem,
} from "@/dummy/review-ratings"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

interface ReviewCardProps {
  review: CommunityReviewItem
  index: number
}

function ReviewCard({ review, index }: ReviewCardProps) {
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
      aria-label={`Review by ${review.author}`}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-white p-4 dark:bg-zinc-900",
        "border border-gray-200/90 dark:border-zinc-800",
        "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)]",
        "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 overflow-hidden",
        "w-[290px] sm:w-[340px] md:w-[380px] shrink-0 snap-start cursor-pointer"
      )}
    >
      <div className="flex flex-col gap-2">
        {/* Media Preview with Creator Handle Badge */}
        <div className="relative h-60 sm:h-64 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
          <img
            src={review.imageUrl}
            alt={`${review.author}'s customized project`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
          />

          {/* Social Handle Tag */}
          <div className="absolute bottom-3 left-3 z-10 rounded-sm bg-white/90 px-2.5 py-1 backdrop-blur-[6px] shadow-sm dark:bg-zinc-900/90">
            <span className="text-xs font-bold tracking-wide text-gray-900 dark:text-zinc-100 font-jakarta leading-4">
              {review.handle}
            </span>
          </div>
        </div>

        {/* 5-Star Rating Row */}
        <div className="flex items-center gap-1 pt-2">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="text-sm sm:text-base font-normal leading-6 text-gray-600 dark:text-zinc-400 font-inter">
          &quot;{review.quote}&quot;
        </p>
      </div>

      {/* Author and Role Attribution */}
      <div className="pt-4 mt-auto">
        <span className="text-xs font-semibold leading-4 text-gray-900 dark:text-zinc-100 font-jakarta">
          {review.author} — {review.role}
        </span>
      </div>
    </motion.article>
  )
}

export default function ReviewRatings() {
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

  // Autoplay functionality: advances cards horizontally and pauses on interaction
  useEffect(() => {
    if (prefersReduced || isPaused) return

    const interval = setInterval(() => {
      const el = scrollContainerRef.current
      if (!el) return

      const cardWidth = el.firstElementChild?.clientWidth || 360
      const scrollStep = cardWidth + 24
      const maxScroll = el.scrollWidth - el.clientWidth

      // Loop back smoothly to start when reaching or near the end
      if (el.scrollLeft >= maxScroll - 16) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: scrollStep, behavior: "smooth" })
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [prefersReduced, isPaused])

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return
    const cardWidth =
      scrollContainerRef.current.firstElementChild?.clientWidth || 360
    scrollContainerRef.current.scrollBy({
      left: -(cardWidth + 24),
      behavior: "smooth",
    })
  }

  const scrollNext = () => {
    if (!scrollContainerRef.current) return
    const cardWidth =
      scrollContainerRef.current.firstElementChild?.clientWidth || 360
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
      aria-labelledby="community-showcase-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-8 sm:gap-10 select-none overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        {/* Title and Eyebrow */}
        <div className="flex flex-col justify-start items-start gap-1.5 pt-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="size-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              COMMUNITY SHOWCASE
            </span>
          </div>

          <h2
            id="community-showcase-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Made by People Like You
          </h2>
        </div>

        {/* Action Link & Arrow Navigation Controls */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0 sm:pb-1">
          <button
            type="button"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold font-jakarta text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
          >
            <span>View Atelier Gallery</span>
            <ArrowRight className="size-3.5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous reviews"
              className={cn(
                "size-9 sm:size-10 rounded-full border border-gray-200 dark:border-zinc-800",
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
              aria-label="Scroll to next reviews"
              className={cn(
                "size-9 sm:size-10 rounded-full border border-gray-200 dark:border-zinc-800",
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

      {/* Horizontal Sliding Cards Track */}
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
        {communityReviews.map((review, idx) => (
          <ReviewCard key={review.id} review={review} index={idx} />
        ))}
      </div>
    </section>
  )
}
