import { motion } from "motion/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { categories, type CategoryItem } from "@/dummy/category";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CategoryCardProps {
  category: CategoryItem;
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: prefersReduced ? 0 : index * 0.06,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={prefersReduced ? undefined : { scale: 1.05, y: -6 }}
      tabIndex={0}
      role="region"
      aria-label={category.name}
      className="group relative snap-start shrink-0 w-48 h-56 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)] hover:z-20 transition-shadow duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
    >
      <img
        src={category.imageUrl}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 pointer-events-none bg-linear-to-t from-gray-950/70 via-gray-950/15 via-50% to-black/0 group-hover:from-gray-950/95 group-hover:via-gray-950/50 transition-all duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <span className="text-gray-200 dark:text-zinc-300 text-[11px] font-bold font-jakarta uppercase tracking-wider mb-1 leading-4 opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          {category.categoryTag}
        </span>

        <div className="flex items-end justify-between gap-3">
          <h3 className="text-white text-xl sm:text-2xl font-bold font-jakarta leading-7 tracking-tight">
            {category.name}
          </h3>
        </div>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-2 text-gray-200 dark:text-zinc-300 text-xs font-normal font-inter leading-relaxed">
              {category.desc}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-3">
              {category.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2.5 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-gray-900 dark:text-zinc-100 text-[11px] font-semibold font-jakarta leading-4 tracking-wide"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Category() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-labelledby="category-showcase-heading"
      className="section-container section-gradient py-14 sm:py-20 lg:py-24 select-none"
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
              What You Can Create
            </span>
          </div>
          <h2
            id="category-showcase-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Explore Categories
          </h2>
        </div>
      </motion.div>

      {/* Horizontal Scrolling Categories */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={8}
        loop
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="category-swiper"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={cat.id} className="w-auto! px-2 py-5">
            <CategoryCard category={cat} index={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
