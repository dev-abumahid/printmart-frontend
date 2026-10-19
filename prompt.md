Inspect my:


code:
```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  ImagePlus,
  LayoutTemplate,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Type,
  Users,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    eyebrow: "CUSTOM PRINTING. MADE SIMPLE",
    titleA: "Turn Your Ideas",
    titleB: "Into Real Products",
    description:
      "Design, customize, and order premium printed products with ease. Upload your artwork, use our templates, and see a live preview before you buy.",
    primary: "Start Designing",
    secondary: "Explore Products",
    image: "/banner.png",
  },
  {
    id: 2,
    eyebrow: "DESIGN. CUSTOMIZE. SELL.",
    titleA: "Build Products",
    titleB: "People Remember",
    description:
      "Create business cards, apparel, packaging and promotional products with a premium look and a smooth design workflow.",
    primary: "Create Now",
    secondary: "Browse Catalog",
    image: "/banner2.png",
  },
  {
    id: 3,
    eyebrow: "PRINT MORE. DO MORE.",
    titleA: "Create Your Brand",
    titleB: "Across Everything",
    description:
      "From mugs and bags to T-shirts and labels, turn your brand identity into polished real-world products customers love.",
    primary: "Start Branding",
    secondary: "View Templates",
    image: "/banner3.png",
  },
];


export default function HeroSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f8ff]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={process.env.NODE_ENV === "development" ? 0 : 850}
        autoplay={
          process.env.NODE_ENV === "development"
            ? false
            : {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }
        }
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="hero-home-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_76%_16%,rgba(180,216,255,0.55),transparent_25%),radial-gradient(circle_at_20%_68%,rgba(246,218,242,0.52),transparent_26%),linear-gradient(180deg,#f7f9ff_0%,#f5f7fc_100%)]">
              <div className="mx-auto w-full max-w-[1920px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10 2xl:px-12">
                <div className="grid items-center gap-2 lg:min-h-[590px] lg:grid-cols-[0.82fr_1.18fr] xl:gap-2">
                  {/* LEFT CONTENT */}
                  <div className="relative z-20 max-w-[650px] lg:pl-4 xl:pl-8 2xl:pl-12">
                    <div className="inline-flex items-center rounded-full border border-[#dbe6f2] bg-white/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#5f82a3] shadow-sm sm:text-[10px]">
                      {slide.eyebrow}
                    </div>

                    <h1 className="mt-5 text-[38px] font-semibold leading-[0.97] tracking-[-0.055em] text-[#0b2b4c] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[72px]">
                      {slide.titleA}
                      <br />
                      <span className="bg-gradient-to-r from-[#4d68f2] via-[#8e43d7] to-[#de4e87] bg-clip-text text-transparent">
                        {slide.titleB}
                      </span>
                    </h1>

                    <p className="mt-5 max-w-[560px] text-[14px] leading-6 text-[#54697f] sm:text-[15px] lg:text-[16px] lg:leading-7">
                      {slide.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                      <Link
                        href="/editor"
                        className="group inline-flex h-12 items-center gap-3 rounded-full bg-[#0b2b4c] px-6 text-[13px] font-semibold text-white shadow-[0_14px_30px_rgba(11,43,76,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123760] sm:h-[52px] sm:px-7 sm:text-[14px]"
                      >
                        {slide.primary}
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                      <Link
                        href="/products"
                        className="inline-flex h-12 items-center gap-3 rounded-full border border-[#dce5ef] bg-white/92 px-6 text-[13px] font-semibold text-[#173653] shadow-[0_10px_24px_rgba(20,50,85,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c7d7e5] sm:h-[52px] sm:px-7 sm:text-[14px]"
                      >
                        <LayoutTemplate size={16} />
                        {slide.secondary}
                      </Link>
                    </div>

                    <div className="mt-6 hidden items-center gap-3 sm:flex lg:mt-7">
                      <div className="flex -space-x-2">
                        {["E", "M", "A", "S"].map((initial) => (
                          <div
                            key={initial}
                            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#dcecf8] to-[#eadcf0] text-[10px] font-bold text-[#0b2b4c] shadow-sm"
                          >
                            {initial}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="flex gap-0.5 text-[#f6b018]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-[14px] leading-none">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="mt-1 text-[11px] font-medium text-[#607386] sm:text-[12px]">
                          Trusted by 10,000+ customers
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DESKTOP VISUAL - ONE IMAGE ONLY */}
                  <div className="relative hidden min-h-[520px] items-center lg:flex">
                    <div className="absolute left-[4%] top-1/2 h-[78%] w-[84%] -translate-y-1/2 rounded-[42px] bg-white/42 shadow-[0_30px_90px_rgba(35,65,105,0.10)]" />

                    <div className="relative ml-0 h-[470px] w-[82%] overflow-hidden rounded-[34px] border border-white/85 bg-white shadow-[0_30px_80px_rgba(30,55,95,0.16)] xl:h-[500px] xl:w-[84%] 2xl:h-[520px]">
                      <Image
                        src={slide?.image}
                        alt="Custom printed products"
                        fill
                        priority={slide.id === 1}
                        className="object-cover object-center"
                        sizes="58vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2b4c]/8 via-transparent to-white/5" />
                    </div>

                   
                  </div>

                  {/* MOBILE/TABLET - SIMPLE */}
                  <div className="lg:hidden">
                    <div className="relative mx-auto aspect-[16/10] w-full max-w-[760px] overflow-hidden rounded-[22px] border border-white/90 bg-white shadow-[0_16px_42px_rgba(30,55,95,0.12)]">
                      <Image
                        src={slide?.image}
                        alt="Custom printed products"
                        fill
                        priority={slide.id === 1}
                        className="object-cover object-center"
                        sizes="100vw"
                      />
                    </div>

                    <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
                      {tools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <Link
                            key={tool.label}
                            href={tool.href}
                            aria-label={tool.label}
                            className="flex min-h-[48px] items-center justify-center rounded-xl border border-[#e8edf3] bg-white/90 text-[#173653] shadow-sm"
                          >
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-[10px] ${tool.tone}`}
                            >
                              <Icon size={15} />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* MOBILE SLIDE CONTROLS */}
                <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
                  <button
                    type="button"
                    onClick={() => swiper?.slidePrev()}
                    aria-label="Previous hero slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e1e8ef] bg-white text-[#0b2b4c]"
                  >
                    <ArrowLeft size={15} />
                  </button>
                  <span className="text-[11px] font-semibold tracking-[0.12em] text-[#8696a6]">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => swiper?.slideNext()}
                    aria-label="Next hero slide"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b2b4c] text-white"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
```

I have already a desing into my hero.tsx. Keep this desing into slid 1, and render the others sliders
- Don't coppy colors, try to align with my current project.
