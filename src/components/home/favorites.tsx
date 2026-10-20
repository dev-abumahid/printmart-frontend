import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { products } from "@/dummy/product";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Favorites() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-labelledby="favorites-heading"
      className="section-container py-10 sm:py-14 lg:py-16 select-none"
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
            id="favorites-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Customer Favorites
          </h2>
        </div>
        <a
          href="#curated-essentials-heading"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold font-jakarta text-gray-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 shrink-0"
        >
          Shop the collection
          <ArrowRight className="size-4" />
        </a>
      </motion.div>

      {/* Horizontal Image Cards */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView="auto"
        spaceBetween={24}
        loop
        speed={700}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "favorites-pagination-bullet",
          bulletActiveClass: "favorites-pagination-bullet-active",
        }}
        className="favorites-swiper w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!w-auto">
            <article
              tabIndex={0}
              role="article"
              aria-label={product.name}
              className="group w-64 sm:w-72 lg:w-80 shrink-0 cursor-pointer focus-visible:outline-none"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-zinc-100 font-jakarta leading-6 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                {product.name}
              </h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
