import { useState } from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import { cn } from "@/lib/utils"

export default function Cta() {
  const prefersReduced = useReducedMotion()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 4000)
  }

  return (
    <section
      aria-labelledby="cta-newsletter-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 select-none"
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative w-full rounded-3xl bg-indigo-600 px-6 py-14 sm:py-16 md:py-20 lg:px-20 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center"
      >
        {/* Ambient Glow Orbs */}
        <div
          className="absolute -left-24 -top-24 size-80 rounded-full bg-white/10 blur-[30px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 -bottom-20 size-80 rounded-full bg-indigo-500/50 blur-[40px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[768px] flex flex-col items-center gap-4">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center justify-center rounded-full bg-white/20 px-3.5 py-1 backdrop-blur-sm border border-white/20 shadow-sm">
            <span className="text-center text-xs font-bold font-jakarta uppercase tracking-wide text-white leading-4">
              ATELIER JOURNAL &amp; PERKS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-newsletter-heading"
            className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta leading-tight sm:leading-[1.15] lg:leading-[56px] tracking-tight max-w-2xl"
          >
            Good Ideas Deserve Great Prints.
          </h2>

          {/* Subtitle Description */}
          <p className="max-w-xl text-center text-white/90 text-base sm:text-lg font-normal font-inter leading-relaxed">
            Get weekly craft inspiration, tactile material guides, and a $20 voucher for your very
            first customized batch.
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg pt-2 flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address..."
                aria-label="Work email address"
                required
                className="w-full h-12 px-4 rounded-xl bg-white text-gray-900 text-sm font-inter placeholder:text-gray-400 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-transparent focus:outline-none focus:ring-2 focus:ring-white/80 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={cn(
                "h-12 px-6 rounded-xl text-white text-xs sm:text-sm font-semibold font-jakarta shadow-md transition-all duration-200 shrink-0 cursor-pointer flex items-center justify-center whitespace-nowrap active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                isSubmitted
                  ? "bg-emerald-700"
                  : "bg-gray-900 hover:bg-black"
              )}
            >
              {isSubmitted ? (
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-emerald-300" />
                  <span>Voucher Sent!</span>
                </span>
              ) : (
                <span>Get $20 Off First Order</span>
              )}
            </button>
          </form>

          {/* Trust Disclaimer */}
          <p className="max-w-lg pt-1 text-center text-white/75 text-xs font-normal font-inter leading-5">
            Zero spam. Unsubscribe anytime with a single click. Free sample kit included for
            verified domain handles.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
