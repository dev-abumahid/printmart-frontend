import { ArrowRight, ChevronRight, Layers } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { services, type ServiceItem } from "@/dummy/services";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
}

function ServiceCard({ service }: ServiceCardProps) {
  if (service.featured) {
    return (
      <article
        tabIndex={0}
        role="article"
        aria-label={service.title}
        className="group w-64 sm:w-72 shrink-0 cursor-pointer focus-visible:outline-none"
      >
        <div className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-[#0b2b4c] px-6 text-white transition-transform duration-300 group-hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-emerald-400">
          <Layers
            className="size-16 sm:size-20 text-sky-400 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <h3 className="mt-auto text-xl sm:text-2xl font-semibold font-jakarta leading-7">
            {service.title}
          </h3>
        </div>
      </article>
    );
  }

  return (
    <article
      tabIndex={0}
      role="article"
      aria-label={service.title}
      className="group w-64 sm:w-72 shrink-0 cursor-pointer focus-visible:outline-none"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
        <img
          src={service.imageUrl}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-base font-semibold font-jakarta leading-6 text-gray-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
        {service.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm font-normal font-inter leading-5 text-gray-600 dark:text-zinc-400">
        {service.desc}
      </p>
    </article>
  );
}

export default function Services() {
  const prefersReduced = useReducedMotion();
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <section
      aria-labelledby="services-heading"
      className="section-container py-14 sm:py-20 lg:py-2 select-none"
    >
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
              expert support to build your business
            </span>
          </div>
          <h2
            id="category-showcase-heading"
            className="text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
          >
            Tools, services
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1.5 text-xs sm:text-sm font-semibold font-jakarta text-gray-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          See all services
          <ArrowRight className="size-4" />
        </button>
      </motion.div>

      {/* Horizontal Services Carousel */}
      <div className="relative">
        <Swiper
          modules={[]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          speed={650}
          onSwiper={setSwiper}
          className="services-swiper w-full"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="!w-auto">
              <ServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="Show next services"
          className={cn(
            "absolute right-2 sm:right-3 top-[calc(50%-2rem)] z-20 size-10 sm:size-11 -translate-y-1/2",
            "flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100",
            "border border-black/5 dark:border-white/10 shadow-lg",
            "transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
