import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  ChevronRight,
  Eye,
  ImagePlus,
  LayoutTemplate,
  Recycle,
  ShoppingBag,
  Sparkles,
  Truck,
  Type,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Button } from "@/components/ui/button";
import { dynamicHeroSlides } from "@/dummy/hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import designedImg from "@/assets/hero/designed.png";
import goldfoilImg from "@/assets/hero/goldfoil.png";
import laseretchedImg from "@/assets/hero/laseretched.png";
import packagingImg from "@/assets/hero/packaging.png";

gsap.registerPlugin(ScrollTrigger);

const quickTools = [
  {
    icon: Type,
    label: "Add Your Text",
    href: "/editor?tool=text",
    tone: "bg-[#edf5ff] text-[#2388d8]",
  },
  {
    icon: ImagePlus,
    label: "Upload Images",
    href: "/editor?tool=upload",
    tone: "bg-[#ecfbf4] text-[#16a56e]",
  },
  {
    icon: LayoutTemplate,
    label: "Choose Templates",
    href: "/editor?tool=templates",
    tone: "bg-[#f3efff] text-[#7758eb]",
  },
  {
    icon: ShoppingBag,
    label: "Pick Products",
    href: "/products",
    tone: "bg-[#fff0f6] text-[#df4a88]",
  },
  {
    icon: Eye,
    label: "Live Preview",
    href: "/editor?tool=preview",
    tone: "bg-[#fff5e8] text-[#ef8a28]",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const cardToteRef = useRef<HTMLDivElement>(null);
  const cardFoilRef = useRef<HTMLDivElement>(null);
  const cardMugRef = useRef<HTMLDivElement>(null);
  const cardPackRef = useRef<HTMLDivElement>(null);
  const badgeDispatchRef = useRef<HTMLDivElement>(null);
  const badgeStickersRef = useRef<HTMLDivElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    // Desktop-only lightweight 1:1 parallax synced directly with Lenis smooth scroll
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const createParallax = (target: HTMLElement | null, yOffset: number) => {
        if (!target) return;
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
        });
      };

      createParallax(cardFoilRef.current, -26);
      createParallax(cardMugRef.current, -18);
      createParallax(cardToteRef.current, -10);
      createParallax(cardPackRef.current, 18);
      createParallax(badgeDispatchRef.current, -12);
      createParallax(badgeStickersRef.current, 14);
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="section-container relative isolate pt-5 sm:pt-7 md:pt-9 pb-10 sm:pb-12 lg:pb-16 overflow-hidden select-none"
      aria-label="Hero - Print Your Imagination"
    >
      {/* Ambient Gradient Glow (Optimized for both Light & Dark modes) */}
      <div
        ref={bgGlowRef}
        className="w-150 sm:w-187.5 lg:w-230 h-95 sm:h-120 lg:h-140 -right-30 sm:-right-15 lg:left-55 top-7.5 lg:top-12 absolute bg-linear-to-tr from-indigo-600/10 via-emerald-200/25 to-transparent dark:from-indigo-500/20 dark:via-emerald-500/15 dark:to-transparent rounded-full blur-[48px] lg:blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={750}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="hero-home-swiper w-full overflow-visible!"
      >
        {/* =========================================================================
            SLIDE 1 (STATIC): Custom Hero Design (Foil, Mug, Tote, Box 3D Parallax)
            ========================================================================= */}
        <SwiperSlide key="slide-1-static" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[520px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start items-start z-10">
              {/* Top Pill Badge */}
              <div className="px-3.5 py-1.5 bg-white/90 dark:bg-zinc-900/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] border border-[#dbe6f2] dark:border-zinc-800 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
                <span className="size-2 bg-[#4d68f2] rounded-full animate-pulse" />
                <span className="text-[#5f82a3] dark:text-zinc-300 text-[10px] sm:text-[11px] font-bold font-jakarta uppercase leading-4 tracking-[0.18em]">
                  PRINT YOUR IMAGINATION
                </span>
              </div>

              {/* Main Headline */}
              <div className="pt-5 sm:pt-6">
                <h1 className="text-indigo-600 dark:text-zinc-50 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold font-jakarta leading-[1.08] sm:leading-[1.1] lg:leading-[1.08] tracking-[-0.04em]">
                  <span className="block">Your Ideas.</span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#4d68f2] via-[#8e43d7] to-[#de4e87] bg-clip-text text-transparent dark:from-[#8fb4ff] dark:via-[#c49aee] dark:to-[#f08fbb]">
                      Beautifully
                    </span>
                    <svg
                      className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
                      viewBox="0 0 270 14"
                      fill="none"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M 4 8.5 C 70 14.5, 185 14.5, 266 5"
                        stroke="#55c2bb"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="stroke-[#55c2bb] dark:stroke-emerald-300"
                      />
                    </svg>
                  </span>
                  <span className="text-[#0b2b4c] dark:text-zinc-50">
                    {" "}
                    Printed.
                  </span>
                </h1>
              </div>

              {/* Subtitle / Description */}
              <div className="pt-5 sm:pt-6 max-w-xl">
                <p className="text-[#54697f] dark:text-zinc-400 text-base sm:text-lg font-normal font-inter leading-relaxed sm:leading-7">
                  Create custom products that bring your ideas to life. From
                  business essentials to personalized gifts, make every detail
                  yours with museum-grade craftsmanship and real-time 3D
                  precision.
                </p>
              </div>

              {/* Action CTA Buttons */}
              <div className="pt-6 sm:pt-7">
                    <div className="pt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3 md:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 w-full sm:w-auto px-7 rounded-full bg-indigo-600 hover:bg-[#123760] dark:bg-emerald-400 dark:hover:bg-emerald-300 dark:text-[#04121c] text-white font-semibold font-jakarta text-base shadow-[0_14px_30px_rgba(11,43,76,0.18)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 border-0"
                  >
                    <Link to="/editor">
                      <Sparkles className="size-4" />
                      <span>Start Creating</span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 w-full sm:w-auto px-7 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 border border-[#dce5ef] dark:border-zinc-800 text-[#173653] dark:text-zinc-100 font-semibold font-jakarta text-base shadow-[0_10px_24px_rgba(20,50,85,0.06)] dark:shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7d7e5] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 group"
                  >
                    <Link to="/products">
                      <span>Explore Products</span>
                      <ArrowRight className="size-3.5 text-[#4f8fd0] dark:text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Trust Highlights */}
              <div className="pt-6 sm:pt-7">
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3.5 sm:gap-x-4 text-xs font-semibold font-jakarta text-[#173653] dark:text-zinc-200">
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck className="size-4 text-emerald-500 fill-emerald-500/20" />
                    <span>Premium Quality</span>
                  </div>
                  <span className="text-gray-300 dark:text-zinc-700 select-none">
                    •
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Box className="size-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Easy Customization</span>
                  </div>
                  <span className="text-gray-300 dark:text-zinc-700 select-none">
                    •
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Truck className="size-4 text-emerald-500 dark:text-emerald-400" />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Composition: Floating Cards Stage */}
            <div className="lg:col-span-6 xl:col-span-6  w-full hidden lg:flex flex-col justify-center items-center py-4 lg:py-0 overflow-visible">
              <div className="relative w-85 h-92.5 sm:w-115 sm:h-120 md:w-135 md:h-137.5 lg:w-130 lg:h-135 xl:w-147.5 xl:h-140">
                {/* Scaled Stage preserving exact Figma proportions and pixel placements */}
                <div
                  ref={cardsStageRef}
                  className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-146.25 h-135 origin-top lg:origin-top-right xl:origin-center scale-[0.56] sm:scale-[0.76] md:scale-[0.88] lg:scale-[0.86] xl:scale-100"
                >
                  {/* 1. Gold Foil Card (Top Left) */}
                  <div
                    ref={cardFoilRef}
                    className="w-96 h-56 p-2.5 -left-45 top-[-15.31px] absolute origin-top-left rotate-6 z-10 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, 5, 0],
                              transition: {
                                duration: 5.4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : {
                              scale: 1.04,
                              y: -4,
                              transition: { duration: 0.25 },
                            }
                      }
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
                    className="w-62 h-86 p-2.5 left-[450.14px] top-[27.53px] absolute origin-top-left rotate-3 z-10 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, -5, 0],
                              transition: {
                                duration: 5.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.6,
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : {
                              scale: 1.04,
                              y: -4,
                              transition: { duration: 0.25 },
                            }
                      }
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
                    className="w-89 h-110 p-3 left-27.5 top-[116.92px] absolute origin-top-left -rotate-3 z-15 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, -6, 0],
                              transition: {
                                duration: 6.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : {
                              scale: 1.03,
                              y: -5,
                              transition: { duration: 0.25 },
                            }
                      }
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
                    className="w-76 h-56 p-2.5 left-[315.46px] top-112.5 absolute origin-top-left -rotate-6 z-20 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, 6, 0],
                              transition: {
                                duration: 6.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.9,
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : {
                              scale: 1.04,
                              y: -4,
                              transition: { duration: 0.25 },
                            }
                      }
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
                    className="h-7 px-3 py-1.5 -left-20 top-80 absolute z-25 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, -4, 0],
                              transition: {
                                duration: 4.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.4,
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : { scale: 1.05, transition: { duration: 0.2 } }
                      }
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
                    className="-left-20 top-109.5 absolute z-25 transform-gpu will-change-transform"
                  >
                    <motion.div
                      animate={
                        prefersReduced
                          ? undefined
                          : {
                              y: [0, 4, 0],
                              transition: {
                                duration: 5.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.8,
                              },
                            }
                      }
                      whileHover={
                        prefersReduced
                          ? undefined
                          : {
                              scale: 1.04,
                              y: -2,
                              transition: { duration: 0.2 },
                            }
                      }
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

            <div className="flex w-full flex-col items-center justify-center overflow-visible py-4 lg:py-0">
              <div className="lg:hidden w-full max-w-xl mx-auto">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_16px_42px_rgba(30,55,95,0.12)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.5)]">
                  <img
                    src={designedImg}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
                  {quickTools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.label}
                        to={tool.href}
                        aria-label={tool.label}
                        className="flex min-h-12 items-center justify-center rounded-xl border border-[#e8edf3] dark:border-zinc-700/80 bg-white/90 dark:bg-zinc-900/90 text-[#173653] dark:text-zinc-100 shadow-sm"
                      >
                        <span
                          className={`flex size-8 items-center justify-center rounded-[10px] ${tool.tone}`}
                        >
                          <Icon className="size-[15px]" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* =========================================================================
            DYNAMIC SLIDES (SLIDES 2 TO N)
            ========================================================================= */}
        {dynamicHeroSlides.map((slide) => {
          const OverlayIcon = slide.overlayTag?.icon || Sparkles;

          return (
            <SwiperSlide key={slide.id} className="w-full">
              <div className="grid grid-cols-1 items-center gap-10 lg:min-h-[590px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-2 xl:gap-2">
                {/* Left Content Column */}
                <div className="relative z-10 flex max-w-[650px] flex-col items-start justify-start lg:pl-4 xl:pl-8 2xl:pl-12">
                  {/* Top Pill Badge */}
                  <div className="px-3.5 py-1.5 bg-white/90 dark:bg-zinc-900/90 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] dark:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.5)] border border-[#dbe6f2] dark:border-zinc-800 inline-flex justify-start items-center gap-2 backdrop-blur-sm">
                    <span className="size-2 bg-[#4d68f2] rounded-full animate-pulse" />
                    <span className="text-[#5f82a3] dark:text-zinc-300 text-[10px] sm:text-[11px] font-bold font-jakarta uppercase leading-4 tracking-[0.18em]">
                      {slide.eyebrow}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <div className="pt-5 sm:pt-6">
                    <h1 className="text-[#0b2b4c] dark:text-zinc-50 text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-bold font-jakarta leading-[1.08] sm:leading-[1.1] lg:leading-[1.08] tracking-[-0.04em]">
                      <span className="block">{slide.titleA}</span>
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-[#4d68f2] via-[#8e43d7] to-[#de4e87] bg-clip-text text-transparent dark:from-[#8fb4ff] dark:via-[#c49aee] dark:to-[#f08fbb]">
                          {slide.titleB}
                        </span>
                        <svg
                          className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 overflow-visible pointer-events-none"
                          viewBox="0 0 270 14"
                          fill="none"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M 4 8.5 C 70 14.5, 185 14.5, 266 5"
                            stroke="#55c2bb"
                            strokeWidth="4"
                            strokeLinecap="round"
                            className="stroke-[#55c2bb] dark:stroke-emerald-300"
                          />
                        </svg>
                      </span>
                    </h1>
                  </div>

                  {/* Subtitle / Description */}
                  <div className="pt-5 sm:pt-6 max-w-xl">
                    <p className="text-[#54697f] dark:text-zinc-400 text-base sm:text-lg font-normal font-inter leading-relaxed sm:leading-7">
                      {slide.description}
                    </p>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="pt-6 sm:pt-7">
                <div className="pt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3 md:gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="h-12 w-full sm:w-auto px-7 rounded-full bg-indigo-600 hover:bg-[#123760] dark:bg-emerald-400 dark:hover:bg-emerald-300 dark:text-[#04121c] text-white font-semibold font-jakarta text-base shadow-[0_14px_30px_rgba(11,43,76,0.18)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 border-0"
                      >
                        <Link to={slide.primaryCta.href}>
                          <Sparkles className="size-4" />
                          <span>{slide.primaryCta.label}</span>
                        </Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 w-full sm:w-auto px-7 rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 border border-[#dce5ef] dark:border-zinc-800 text-[#173653] dark:text-zinc-100 font-semibold font-jakarta text-base shadow-[0_10px_24px_rgba(20,50,85,0.06)] dark:shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7d7e5] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 group"
                      >
                        <Link to={slide.secondaryCta.href}>
                          <LayoutTemplate className="size-4 text-[#4f8fd0] dark:text-emerald-400" />
                          <span>{slide.secondaryCta.label}</span>
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Optional Social Proof Avatars & Ratings */}
                  {slide.socialProof && (
                    <div className="pt-6 sm:pt-7">
                      <div className="pt-2 flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {slide.socialProof.avatars.map((initial) => (
                            <div
                              key={initial}
                              className="flex size-8 sm:size-9 items-center justify-center rounded-full border-2 border-white dark:border-zinc-900 bg-gradient-to-br from-[#dcecf8] to-[#eadcf0] dark:from-zinc-800 dark:to-zinc-700 text-[10px] sm:text-xs font-bold text-[#0b2b4c] dark:text-indigo-200 shadow-xs"
                            >
                              {initial}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="flex gap-0.5 text-[#f6b018]">
                            {Array.from({
                              length: slide.socialProof.rating,
                            }).map((_, i) => (
                              <span key={i} className="text-sm leading-none">
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-[#607386] dark:text-zinc-400">
                            {slide.socialProof.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Optional Trust Highlights */}
                  {slide.trustHighlights && (
                    <div className="pt-6 sm:pt-7">
                      <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-3.5 sm:gap-x-4 text-xs font-semibold font-jakarta text-[#173653] dark:text-zinc-200">
                        {slide.trustHighlights.map((item, idx) => {
                          const ItemIcon = item.icon;
                          return (
                            <div
                              key={item.text}
                              className="flex items-center gap-1.5"
                            >
                              {idx > 0 && (
                                <span className="text-gray-300 dark:text-zinc-700 select-none mr-2">
                                  •
                                </span>
                              )}
                              <ItemIcon
                                className={`size-4 ${item.iconColor || "text-indigo-600 dark:text-indigo-400"}`}
                              />
                              <span>{item.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Showcase: Dynamic Banner Card */}
                <div className="flex w-full flex-col items-center justify-center overflow-visible py-4 lg:py-0">
                  {/* Desktop Visual Card */}
                  <div className="relative hidden min-h-[520px] w-full items-center justify-center lg:flex">
                    {/* Soft backdrop frame */}
                    <div className="absolute left-[4%] top-1/2 h-[78%] w-[84%] -translate-y-1/2 rounded-[42px] bg-white/42 dark:bg-white/5 shadow-[0_30px_90px_rgba(35,65,105,0.10)] dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)]" />

                    {/* Main Card Frame */}
                    <div className="relative h-[470px] w-[82%] overflow-hidden rounded-[34px] border border-white/85 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 shadow-[0_30px_80px_rgba(30,55,95,0.16)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] group xl:h-[500px] xl:w-[84%] 2xl:h-[520px]">
                      <img
                        src={slide.image}
                        alt={`${slide.titleA} ${slide.titleB}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4c]/8 via-transparent to-white/5 pointer-events-none" />

                      {/* Floating Overlay Feature Tag */}
                      {slide.overlayTag && (
                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-3 rounded-2xl bg-white/92 dark:bg-zinc-900/92 backdrop-blur-md border border-white/60 dark:border-zinc-700/60 shadow-lg">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`size-8 rounded-xl ${slide.overlayTag.iconBg || "bg-indigo-50 dark:bg-indigo-950/60"} flex items-center justify-center ${slide.overlayTag.iconColor || "text-indigo-600 dark:text-indigo-400"}`}
                            >
                              <OverlayIcon className="size-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold font-jakarta uppercase tracking-wider text-gray-400 dark:text-zinc-400">
                                {slide.overlayTag.eyebrow}
                              </p>
                              <p className="text-xs font-bold font-jakarta text-gray-900 dark:text-zinc-100">
                                {slide.overlayTag.title}
                              </p>
                            </div>
                          </div>
                          <div
                            className={`px-2.5 py-1 ${slide.overlayTag.badgeBg || "bg-emerald-50 dark:bg-emerald-950/50"} rounded-lg ${slide.overlayTag.badgeColor || "text-emerald-600 dark:text-emerald-400"} text-xs font-semibold font-jakarta`}
                          >
                            {slide.overlayTag.badge}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick design tools popup */}
                    <div className="absolute right-[1%] top-1/2 z-30 w-[275px] -translate-y-1/2 rounded-[26px] border border-white/85 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 p-3.5 shadow-[0_28px_70px_rgba(23,48,78,0.18)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl xl:w-[290px]">
                      <p className="px-2 pb-2 pt-1 text-[10px] font-bold font-jakarta uppercase tracking-[0.16em] text-[#8b99a9] dark:text-zinc-400">
                        Quick design tools
                      </p>

                      <div className="space-y-1.5">
                        {quickTools.map((tool) => {
                          const Icon = tool.icon;
                          return (
                            <Link
                              key={tool.label}
                              to={tool.href}
                              className="group flex min-h-[52px] items-center gap-3 rounded-[15px] px-2.5 py-2 transition-all duration-300 hover:bg-[#f6f8fb] dark:hover:bg-zinc-800/80"
                            >
                              <span
                                className={`flex size-9 shrink-0 items-center justify-center rounded-[11px] ${tool.tone}`}
                              >
                                <Icon
                                  className="size-[18px]"
                                  strokeWidth={1.9}
                                />
                              </span>
                              <span className="flex-1 text-[13px] font-semibold font-jakarta text-[#173653] dark:text-zinc-100">
                                {tool.label}
                              </span>
                              <ChevronRight className="size-4 text-[#4f8fd0] dark:text-zinc-400 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Mobile / Tablet Visual */}
                  <div className="lg:hidden w-full max-w-xl mx-auto">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_16px_42px_rgba(30,55,95,0.12)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.5)]">
                      <img
                        src={slide.image}
                        alt={`${slide.titleA} ${slide.titleB}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
                      {quickTools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <Link
                            key={tool.label}
                            to={tool.href}
                            aria-label={tool.label}
                            className="flex min-h-12 items-center justify-center rounded-xl border border-[#e8edf3] dark:border-zinc-700/80 bg-white/90 dark:bg-zinc-900/90 text-[#173653] dark:text-zinc-100 shadow-sm"
                          >
                            <span
                              className={`flex size-8 items-center justify-center rounded-[10px] ${tool.tone}`}
                            >
                              <Icon className="size-[15px]" />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
