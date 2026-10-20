import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { littleThings, type LittleThingItem } from "@/dummy/little-things";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface LittleThingCardProps {
  item: LittleThingItem;
  index: number;
}

function LittleThingCard({ item, index }: LittleThingCardProps) {
  const prefersReduced = useReducedMotion();

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
        "transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500",
        "w-56 sm:w-60 md:w-64 shrink-0 snap-start",
      )}
    >
      {/* Top Image Preview Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-rose-50 dark:bg-zinc-800 mb-2.5">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none"
        />

        {/* Quality Material Badge */}
        <div className="absolute top-2 left-2 z-10 rounded-full bg-white/90 px-2.5 py-0.5 backdrop-blur-[2px] shadow-sm dark:bg-zinc-900/90">
          <span className="text-xs font-semibold tracking-wide text-rose-600 dark:text-rose-400 font-jakarta leading-4">
            {item.badge}
          </span>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="flex flex-1 flex-col justify-between gap-1 px-1 pb-1">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-gray-900 transition-colors group-hover:text-rose-600 dark:text-zinc-100 dark:group-hover:text-rose-400 font-jakarta">
            {item.title}
          </h3>
        </div>

        <div className="pt-2">
          <span className="text-xs font-semibold leading-4 text-gray-900 dark:text-zinc-100 font-jakarta">
            From ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function LittleThings() {
  const prefersReduced = useReducedMotion();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  // Drag-to-scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Autoplay: automatically advances cards horizontally, pauses on hover or interaction
  useEffect(() => {
    if (prefersReduced || isPaused) return;

    const interval = setInterval(() => {
      const el = scrollContainerRef.current;
      if (!el) return;

      const cardWidth = el.firstElementChild?.clientWidth || 340;
      const scrollStep = cardWidth + 24;
      const maxScroll = el.scrollWidth - el.clientWidth;

      // When reaching or near the end, wrap smoothly back to the beginning
      if (el.scrollLeft >= maxScroll - 16) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [prefersReduced, isPaused]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setIsPaused(true);
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!isDraggingRef.current || !el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;

    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }

    el.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
    setIsPaused(false);
  };

  const getChildScrollLeft = (el: HTMLDivElement, child: HTMLElement) =>
    child.getBoundingClientRect().left -
    el.getBoundingClientRect().left +
    el.scrollLeft;

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    let nextActive = 0;

    children.forEach((child, index) => {
      if (el.scrollLeft >= getChildScrollLeft(el, child) - 12) {
        nextActive = index;
      }
    });

    setActiveDot(nextActive);
  };

  const scrollToSlide = (index: number) => {
    const el = scrollContainerRef.current;
    const child = el?.children[index] as HTMLElement | undefined;
    if (!el || !child) return;

    el.scrollTo({
      left: getChildScrollLeft(el, child),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="little-things-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="section-container py-10 sm:py-14 lg:py-16 flex flex-col justify-start items-start gap-8 sm:gap-10 select-none overflow-hidden"
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
            <span className="size-1.5 bg-rose-600 dark:bg-rose-500 rounded-full animate-pulse" />
            <span className="text-rose-600 dark:text-rose-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              Little Things. Big Feelings.
            </span>
          </div>

          <h2
            id="little-things-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Holiday essentials
          </h2>
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
        onScroll={handleScroll}
        className={cn(
          "w-full flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-1",
          "scrollbar-none [&::-webkit-scrollbar]:hidden",
          "cursor-grab active:cursor-grabbing select-none",
        )}
      >
        {littleThings.map((item, idx) => (
          <LittleThingCard key={item.id} item={item} index={idx} />
        ))}
      </div>

      {/* Mobile Pagination Dots */}
      <div
        className="flex w-full items-center justify-center gap-1.5 md:hidden"
        role="tablist"
        aria-label="Holiday essentials slides"
      >
        {littleThings.map((item, index) => {
          const isActive = activeDot === index;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to ${item.title}`}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                isActive
                  ? "w-5 bg-indigo-600 dark:bg-indigo-400"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400 dark:bg-zinc-700 dark:hover:bg-zinc-600",
              )}
            />
          );
        })}
      </div>
    </section>
  );
}
