import { useRef, useEffect } from "react"
import { motion } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Sparkles,
  ArrowRight,
  BadgeCheck,
  Box,
  Truck,
  Recycle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/useReducedMotion"

import designedImg from "@/assets/hero/designed.png"
import goldfoilImg from "@/assets/hero/goldfoil.png"
import laseretchedImg from "@/assets/hero/laseretched.png"
import packagingImg from "@/assets/hero/packaging.png"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsStageRef = useRef<HTMLDivElement>(null)
  const cardToteRef = useRef<HTMLDivElement>(null)
  const cardFoilRef = useRef<HTMLDivElement>(null)
  const cardMugRef = useRef<HTMLDivElement>(null)
  const cardPackRef = useRef<HTMLDivElement>(null)
  const badgeDispatchRef = useRef<HTMLDivElement>(null)
  const badgeStickersRef = useRef<HTMLDivElement>(null)
  const bgGlowRef = useRef<HTMLDivElement>(null)

  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    // Desktop-only lightweight 1:1 parallax synced directly with Lenis smooth scroll
    const isDesktop = window.innerWidth >= 1024
    if (!isDesktop) return

    const ctx = gsap.context(() => {
      const createParallax = (target: HTMLElement | null, yOffset: number) => {
        if (!target) return
        gsap.to(target, {
          y: yOffset,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true, // 1:1 synchronization with Lenis; no double-smoothing lag
            invalidateOnRefresh: true,
          },
        })
      }

      createParallax(cardFoilRef.current, -26)
      createParallax(cardMugRef.current, -18)
      createParallax(cardToteRef.current, -10)
      createParallax(cardPackRef.current, 18)
      createParallax(badgeDispatchRef.current, -12)
      createParallax(badgeStickersRef.current, 14)
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReduced])

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-360 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 lg:pb-28 overflow-hidden select-none"
      aria-label="Hero - Print Your Imagination"
    >
      {/* Ambient Gradient Glow (Optimized for both Light & Dark modes) */}
      <div
        ref={bgGlowRef}
        className="w-150 sm:w-187.5 lg:w-230 h-95 sm:h-120 lg:h-140 -right-30 sm:-right-15 lg:left-55 top-7.5 lg:top-12 absolute bg-linear-to-tr from-indigo-600/10 via-orange-200/25 to-transparent dark:from-indigo-500/20 dark:via-orange-500/15 dark:to-transparent rounded-full blur-[48px] lg:blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Grid: 2-column layout on Desktop, 1-column on Mobile/Tablet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start items-start z-10">
          {/* Top Pill Badge */}
          <div className="px-3.5 py-1.5 bg-white dark:bg-zinc-900/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-zinc-800 inline-flex justify-start items-center gap-2">
            <span className="size-2 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse" />
            <span className="text-gray-900 dark:text-zinc-100 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
              PRINT YOUR IMAGINATION
            </span>
          </div>

          {/* Main Headline */}
          <div className="pt-5 sm:pt-6">
            <h1 className="text-gray-900 dark:text-zinc-50 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-extrabold font-jakarta leading-[1.12] sm:leading-[1.15] lg:leading-20 tracking-tight">
              <span className="block">Your Ideas.</span>
              <span className="inline-block relative">
                <span className="text-indigo-500 dark:text-indigo-400">Beautifully</span>
                {/* Hand-drawn Orange Curved Underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
                  viewBox="0 0 270 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 8.5 C 70 14.5, 185 14.5, 266 5"
                    stroke="#FDBA74"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="stroke-[#FDBA74] dark:stroke-amber-400"
                  />
                </svg>
              </span>
              <span> Printed.</span>
            </h1>
          </div>

          {/* Subtitle / Description */}
          <div className="pt-5 sm:pt-6 max-w-xl">
            <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg font-normal font-inter leading-relaxed sm:leading-7">
              Create custom products that bring your ideas to life. From business
              essentials to personalized gifts, make every detail yours with
              museum-grade craftsmanship and real-time 3D precision.
            </p>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-6 sm:pt-7">
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <Button
                size="lg"
                className="h-12 px-7 rounded-full bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold font-jakarta text-base shadow-[0px_4px_14px_rgba(99,102,241,0.35)] dark:shadow-[0px_4px_20px_rgba(99,102,241,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 border-0"
              >
                <Sparkles className="size-4 text-white" />
                <span>Start Creating</span>
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 rounded-full bg-white dark:bg-zinc-900/90 hover:bg-gray-50 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-zinc-100 font-semibold font-jakarta text-base shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="size-3.5 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 sm:pt-7">
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3.5 sm:gap-x-4 text-xs font-semibold font-jakarta text-gray-900 dark:text-zinc-200">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-amber-500 fill-amber-500/20" />
                <span>Premium Quality</span>
              </div>
              <span className="text-gray-300 dark:text-zinc-700 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Box className="size-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Easy Customization</span>
              </div>
              <span className="text-gray-300 dark:text-zinc-700 select-none">•</span>
              <div className="flex items-center gap-1.5">
                <Truck className="size-4 text-emerald-500 dark:text-emerald-400" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Composition: Floating Cards Stage */}
        <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center items-center py-4 lg:py-0 overflow-visible">
          {/* Responsive Viewport Wrapper */}
          <div className="relative w-85 h-92.5 sm:w-115 sm:h-120 md:w-135 md:h-137.5 lg:w-130 lg:h-135 xl:w-147.5 xl:h-140">
            {/* Scaled Stage preserving exact Figma proportions and pixel placements */}
            <div
              ref={cardsStageRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-146.25 h-135 origin-top lg:origin-top-right xl:origin-center scale-[0.56] sm:scale-[0.76] md:scale-[0.88] lg:scale-[0.86] xl:scale-100"
            >
              {/* 1. Gold Foil Card (Top Left) */}
              <div
                ref={cardFoilRef}
                className="w-56 h-36 p-2.5 left-[32.14px] top-[-15.31px] absolute origin-top-left rotate-6 z-10 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, 5, 0],
                          transition: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.04, y: -4, transition: { duration: 0.25 } }}
                  className="w-full h-full bg-white dark:bg-zinc-900/95 rounded-xl border border-gray-200/90 dark:border-zinc-800 shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.6)] p-2.5 flex flex-col justify-center items-start cursor-pointer group"
                >
                  <div className="self-stretch flex-1 relative bg-violet-100 dark:bg-zinc-800 rounded-lg flex flex-col justify-center items-start overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={goldfoilImg}
                      alt="Gold Foil Business Cards"
                      loading="eager"
                    />
                    <div className="px-2.5 py-0.5 right-2.5 top-2.5 absolute bg-gray-900 dark:bg-black rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-transparent dark:border-white/10 flex flex-col justify-start items-start">
                      <span className="text-white text-xs font-bold font-jakarta leading-4 tracking-wide">
                        Gold Foil
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 2. Laser Etched Mug Card (Top Right) */}
              <div
                ref={cardMugRef}
                className="w-44 h-48 p-2.5 left-[409.14px] top-[27.53px] absolute origin-top-left rotate-3 z-10 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, -5, 0],
                          transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.04, y: -4, transition: { duration: 0.25 } }}
                  className="w-full h-full bg-white dark:bg-zinc-900/95 rounded-2xl border border-gray-200/90 dark:border-zinc-800 shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.6)] p-2.5 flex flex-col justify-center items-start cursor-pointer group"
                >
                  <div className="self-stretch flex-1 relative bg-gray-100 dark:bg-zinc-800 rounded-xl flex flex-col justify-center items-start overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={laseretchedImg}
                      alt="Laser Etched Ceramic Coffee Mug"
                      loading="eager"
                    />
                    <div className="px-2.5 py-0.5 left-[8.41px] bottom-2.5 absolute bg-white/95 dark:bg-zinc-900/90 backdrop-blur-xs rounded-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-transparent dark:border-zinc-700/80 flex flex-col justify-start items-start">
                      <span className="text-gray-900 dark:text-zinc-100 text-xs font-bold font-jakarta leading-4 tracking-wide">
                        Laser Etched
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 3. Branded Tote Card (Centerpiece) */}
              <div
                ref={cardToteRef}
                className="w-64 h-80 p-3 left-[161.80px] top-[116.92px] absolute origin-top-left -rotate-3 z-15 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, -6, 0],
                          transition: { duration: 6.2, repeat: Infinity, ease: "easeInOut" },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.03, y: -5, transition: { duration: 0.25 } }}
                  className="w-full h-full bg-white dark:bg-zinc-900/95 rounded-2xl border border-gray-200/90 dark:border-zinc-800 shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.7)] p-3 flex flex-col justify-center items-start cursor-pointer group"
                >
                  <div className="self-stretch flex-1 relative bg-gray-100 dark:bg-zinc-800 rounded-xl flex flex-col justify-center items-start overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={designedImg}
                      alt="Designed Crafted Curated Branded Tote"
                      loading="eager"
                    />
                    {/* Bottom Overlay Label */}
                    <div className="inset-x-2.5 bottom-2.5 absolute p-2.5 bg-white/90 dark:bg-zinc-900/90 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_2px_8px_rgba(0,0,0,0.6)] backdrop-blur-[6px] inline-flex justify-between items-center border border-white/40 dark:border-zinc-700/60">
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-gray-400 dark:text-zinc-400 text-[10px] font-bold font-jakarta uppercase leading-tight tracking-tight">
                          CANVAS GOODS
                        </span>
                        <span className="text-gray-900 dark:text-zinc-100 text-xs font-semibold font-jakarta leading-4">
                          Branded Tote
                        </span>
                      </div>
                      <div className="px-2.5 py-1 bg-violet-100 dark:bg-indigo-950/70 rounded-sm inline-flex flex-col justify-start items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold font-jakarta leading-4 tracking-wide">
                          From $14
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 4. Packaging Card (Bottom Right) */}
              <div
                ref={cardPackRef}
                className="w-61.25 h-44 p-2.5 left-[315.46px] top-[393.03px] absolute origin-top-left -rotate-6 z-20 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, 6, 0],
                          transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.04, y: -4, transition: { duration: 0.25 } }}
                  className="w-full h-full bg-white dark:bg-zinc-900/95 rounded-2xl border border-gray-200/90 dark:border-zinc-800 shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.7)] p-2.5 flex flex-col justify-center items-start cursor-pointer group"
                >
                  <div className="self-stretch flex-1 relative bg-gray-100 dark:bg-zinc-800 rounded-xl flex flex-col justify-center items-start overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={packagingImg}
                      alt="Eco-friendly Packaging Box"
                      loading="eager"
                    />
                    {/* Bottom Overlay Badge */}
                    <div className="inset-x-2 bottom-2 absolute px-2.5 py-1.5 bg-white/90 dark:bg-zinc-900/90 rounded-lg backdrop-blur-[3px] inline-flex justify-between items-center shadow-xs dark:shadow-sm border border-white/40 dark:border-zinc-700/60">
                      <span className="text-gray-900 dark:text-zinc-100 text-xs font-semibold font-jakarta tracking-wide">
                        Packaging
                      </span>
                      <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <Recycle className="size-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-bold font-jakarta tracking-wide whitespace-nowrap">
                          100% Recycled
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 5. 48h Dispatch Ready Floating Pill Badge */}
              <div
                ref={badgeDispatchRef}
                className="h-7 px-3 py-1.5 -left-4 top-63.75 absolute z-25 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, -4, 0],
                          transition: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-zinc-900/95 rounded-full border border-gray-200 dark:border-zinc-800 shadow-[0px_4px_12px_-2px_rgba(0,0,0,0.12)] dark:shadow-[0px_4px_16px_-2px_rgba(0,0,0,0.6)] inline-flex justify-start items-center gap-1.5 px-3 py-1.5 backdrop-blur-xs cursor-default"
                >
                  <span className="size-2 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-gray-900 dark:text-zinc-100 text-xs font-semibold font-jakarta leading-4 tracking-wide whitespace-nowrap">
                    48h Dispatch Ready
                  </span>
                </motion.div>
              </div>

              {/* 6. Custom Stickers Floating Badge Card */}
              <div
                ref={badgeStickersRef}
                className="left-4 top-109.5 absolute z-25 transform-gpu will-change-transform"
              >
                <motion.div
                  animate={
                    prefersReduced
                      ? undefined
                      : {
                          y: [0, 4, 0],
                          transition: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.04, y: -2, transition: { duration: 0.2 } }}
                  className="p-3 bg-white dark:bg-zinc-900/95 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.14)] dark:shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.6)] inline-flex justify-start items-center gap-3 backdrop-blur-xs cursor-pointer group"
                >
                  <div className="size-11 bg-linear-to-br from-pink-400 via-indigo-300 to-amber-200 dark:from-pink-500 dark:via-indigo-500 dark:to-amber-300 rounded-xl shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] flex justify-center items-center transition-transform duration-300 group-hover:rotate-6">
                    <Sparkles className="size-5 text-white" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-gray-400 dark:text-zinc-400 text-[10px] font-bold font-jakarta uppercase leading-tight tracking-wider">
                      VINYL &amp; FOIL
                    </span>
                    <span className="text-gray-900 dark:text-zinc-100 text-lg font-bold font-jakarta leading-tight mt-0.5 whitespace-nowrap">
                      Custom Stickers
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
