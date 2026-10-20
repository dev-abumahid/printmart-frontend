import { motion } from "motion/react"

import { useReducedMotion } from "@/hooks/useReducedMotion"

const sampleImage =
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80"

export default function OfferBanner() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-labelledby="offer-banner-heading"
      className="section-container py-10 sm:py-14 lg:py-16 select-none"
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-2xl bg-[#eef7ff] dark:bg-zinc-900 border border-black/5 dark:border-zinc-800"
      >
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-14 lg:py-16">
            <span className="text-gray-900 dark:text-zinc-100 text-sm font-normal font-inter leading-5">
              Free Sampling
            </span>

            <h2
              id="offer-banner-heading"
              className="mt-3 max-w-xl text-gray-900 dark:text-zinc-50 text-2xl sm:text-3xl lg:text-4xl font-bold font-jakarta leading-tight tracking-tight"
            >
              Interested in a promotional product? Try us out.
            </h2>

            <p className="mt-4 max-w-lg text-gray-600 dark:text-zinc-400 text-sm sm:text-base font-normal font-inter leading-relaxed">
              Request free samples of select promotional products and make your
              decision with confidence.
            </p>

            <button
              type="button"
              className="mt-6 sm:mt-8 w-fit rounded-md bg-[#0b2b4c] px-5 py-2.5 text-sm font-semibold font-jakarta leading-5 text-white transition-all duration-200 hover:bg-[#174a77] active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef7ff] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-emerald-300"
            >
              Explore samples
            </button>
          </div>

          {/* Image */}
          <div className="relative min-h-64 sm:min-h-80 lg:min-h-[26rem]">
            <img
              src={sampleImage}
              alt="Custom printed promotional apparel sample"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
