import { useEffect, useRef } from "react"
import { Link } from "react-router"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import printVideo from "@/assets/video/print.mp4"
import posterImg from "@/assets/hero/banner1.png"

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) {
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: "80px 0px" }
    )

    const onVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
      } else {
        const rect = video.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          void video.play().catch(() => {})
        }
      }
    }

    const observerTarget = video.closest("section") ?? video
    observer.observe(observerTarget)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      video.pause()
    }
  }, [])

  return (
    <section
      aria-label="Brand Video Showcase"
      className="section-gradient relative w-full overflow-hidden bg-black select-none"
    >
      <div className="relative h-[46vh] min-h-[360px] w-full overflow-hidden sm:h-[50vh] sm:min-h-[400px] lg:h-[56vh] lg:min-h-[480px] 2xl:h-[60vh]">
        {/* Background Video with Subtle Parallax Bleed */}
        <div className="absolute -inset-y-[10%] inset-x-0">
          <video
            ref={videoRef}
            className="h-full w-full scale-[1.06] object-cover object-center"
            poster={posterImg}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={printVideo} type="video/mp4" />
          </video>
        </div>

        {/* Clean Cinematic Shading and Radial Vignette */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/35"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-indigo-950/35 via-transparent to-amber-950/35"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.25)_48%,rgba(0,0,0,0.55)_100%)]"
          aria-hidden="true"
        />

        {/* Content Overlay Styled with Category Section Header Language */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 22 }}
            whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-[880px] text-center flex flex-col items-center"
          >
            {/* Eyebrow Badge aligned with Category Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 dark:bg-black/40 backdrop-blur-md border border-white/20 shadow-xs">
              <span className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-white text-xs font-bold font-jakarta uppercase leading-4 tracking-wider">
                MADE TO BE REMEMBERED
              </span>
            </div>

            {/* Main Headline aligned with Category Typography */}
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta leading-tight sm:leading-[1.12] lg:leading-[1.15] tracking-tight text-white">
              Bring Your Ideas to Life
            </h2>

            {/* Subtitle aligned with Category Section Header Style */}
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base lg:text-lg font-normal font-inter leading-relaxed sm:leading-7 text-white/85">
              Custom products for a brighter tomorrow. From screen-printed
              textiles to custom packaging, make every detail unforgettable.
            </p>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 rounded-full bg-white hover:bg-zinc-100 text-gray-950 font-semibold font-jakarta text-sm sm:text-base shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 border-0 group"
              >
                <Link to="/editor">
                  <span>Start Designing</span>
                  <ArrowRight className="size-4 text-indigo-600 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
