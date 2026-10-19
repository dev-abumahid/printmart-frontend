import { motion } from "motion/react"
import { Shapes, Box, Truck, type LucideIcon } from "lucide-react"

import step1Img from "@/assets/steps/1.png"
import step2Img from "@/assets/steps/2.png"
import step3Img from "@/assets/steps/3.png"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

interface StepItem {
  step: string
  title: string
  desc: string
  image: string
  icon: LucideIcon
  iconClass: string
}

const steps: StepItem[] = [
  {
    step: "01",
    title: "Choose Your Canvas",
    desc: "Browse hundreds of sustainably sourced garments, heavy cardstocks, and custom packaging boxes.",
    image: step1Img,
    icon: Shapes,
    iconClass:
      "text-gray-400 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  },
  {
    step: "02",
    title: "Make It Yours",
    desc: "Upload vector files or use our browser 3D Design Studio with instant live mockup lighting and rotation.",
    image: step2Img,
    icon: Box,
    iconClass:
      "text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200",
  },
  {
    step: "03",
    title: "We Print & Deliver",
    desc: "Crafted with industrial precision, inspected by master colorists, and shipped with tracking right to your door.",
    image: step3Img,
    icon: Truck,
    iconClass:
      "text-gray-400 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  },
]

export default function CustomizeStep() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      aria-labelledby="customize-steps-heading"
      className="w-full max-w-360 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-center gap-12 sm:gap-16 select-none"
    >
      {/* Section Header */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-2xl pt-1.5 flex flex-col justify-start items-center gap-2 text-center"
      >
        {/* Eyebrow */}
        <div className="inline-flex justify-center items-center gap-2">
          <span className="size-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-center text-indigo-600 dark:text-indigo-400 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
            SEAMLESS PROCESS
          </span>
        </div>

        {/* Display Heading */}
        <h2
          id="customize-steps-heading"
          className="text-center text-gray-900 dark:text-zinc-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-14 tracking-tight"
        >
          Create It. Customize It. Love
          <br className="hidden sm:inline" /> It.
        </h2>

        {/* Supporting Subtitle */}
        <p className="pt-1 text-center text-gray-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-inter leading-relaxed sm:leading-7">
          From digital sketch to physical delivery in three transparent stages.
        </p>
      </motion.div>

      {/* 3 Step Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, idx) => {
          const Icon = item.icon
          return (
            <motion.article
              key={item.step}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: prefersReduced ? 0 : idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              tabIndex={0}
              role="article"
              aria-label={`Step ${item.step}: ${item.title}`}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl bg-white p-8 sm:p-10 dark:bg-zinc-900",
                "border border-gray-200/90 dark:border-zinc-800",
                "shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-xl dark:hover:shadow-[0px_10px_30px_rgba(0,0,0,0.6)]",
                "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              )}
            >
              {/* Card Top & Text Content */}
              <div className="flex flex-col gap-2 pb-6">
                {/* Header: Step Number & Icon */}
                <div className="flex items-center justify-between w-full">
                  <div className="size-12 rounded-2xl bg-violet-100 dark:bg-indigo-950/60 flex items-center justify-center shrink-0">
                    <span className="text-center text-indigo-600 dark:text-indigo-400 text-3xl font-extrabold font-jakarta leading-9">
                      {item.step}
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <Icon className={cn("size-6 transition-all duration-200", item.iconClass)} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="pt-4 text-xl font-semibold leading-7 text-gray-900 dark:text-zinc-100 font-jakarta group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-base font-normal leading-6 text-gray-600 dark:text-zinc-400 font-inter">
                  {item.desc}
                </p>
              </div>

              {/* Card Bottom: Step Illustration Media */}
              <div className="w-full h-36 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-800/80">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
