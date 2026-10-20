import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import ProductCard from "@/components/shared/product-card";
import { products, productTabs } from "@/dummy/product";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function Product() {
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") {
      return products;
    }
    return products.filter((item) => item.filterCategories.includes(activeTab));
  }, [activeTab]);

  return (
    <section
      aria-labelledby="curated-essentials-heading"
      className="section-container py-14 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-10 select-none"
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
            Made Your Next Big Idea
          </h2>
        </div>

        {/* Filter Navigation Tabs Bar */}
        <div
          role="tablist"
          aria-label="Filter products by collection"
          className="relative max-w-full overflow-x-auto no-scrollbar rounded-xl bg-white p-1 border border-gray-200 dark:border-zinc-800 dark:bg-zinc-900 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center shrink-0"
        >
          {productTabs.map((tab) => {
            const isActive = activeTab === tab.id;
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
                    : "text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProductFilter"
                    className="absolute inset-0 bg-[#0b2b4c] dark:bg-emerald-400 rounded-lg shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Product Cards Horizontal Swiper */}
      <Swiper
        key={activeTab}
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={16}
        loop={filteredProducts.length > 3}
        speed={650}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="product-swiper w-full"
      >
        {filteredProducts.map((product, idx) => (
          <SwiperSlide key={product.id} className="!w-auto py-2">
            <ProductCard
              product={product}
              index={idx}
              className="h-full w-[260px] shrink-0 sm:w-[280px] lg:w-[300px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
