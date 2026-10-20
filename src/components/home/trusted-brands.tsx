import type { FC, SVGProps } from "react"

interface BrandItem {
  name: string
  mark: string
  logo: FC<SVGProps<SVGSVGElement>>
}

// 1. Northstar: 4-point faceted compass star
function NorthstarLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1L14.4 9.6L23 12L14.4 14.4L12 23L9.6 14.4L1 12L9.6 9.6L12 1Z" />
      <circle cx="12" cy="12" r="1.6" className="fill-white dark:fill-zinc-900" />
    </svg>
  )
}

// 2. MFG Studio: Interlocking geometric hexagon monogram
function MfgLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
      <polyline points="3 7 12 12 21 7" />
      <line x1="12" y1="12" x2="12" y2="22" />
    </svg>
  )
}

// 3. Metaform: Dimensional faceted cube
function MetaformLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2ZM12 4.4L18.7 8.2L12 12L5.3 8.2L12 4.4ZM5 9.8L11 13.2V20L5 16.6V9.8ZM13 20V13.2L19 9.8V16.6L13 20Z" />
    </svg>
  )
}

// 4. Stride: Dynamic aerodynamic forward S ribbon
function StrideLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 5.5C19 3.5 17 2 14.5 2C10.5 2 8 5.5 8 8C8 12.5 16 11.5 16 16C16 18.5 14 20 11.5 20C8.5 20 6.5 18 5 16.5L3.5 18.5C5.5 20.5 8 22 11.5 22C16 22 18.5 19 18.5 15.5C18.5 10.5 10.5 11.8 10.5 7.8C10.5 6 12 4.2 14.5 4.2C16.5 4.2 18 5.2 19 6.8L19 5.5Z" />
    </svg>
  )
}

// 5. Nova: 8-point celestial starburst
function NovaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0L13.8 8.2L22 6.5L15.8 12L22 17.5L13.8 15.8L12 24L10.2 15.8L2 17.5L8.2 12L2 6.5L10.2 8.2L12 0Z" />
    </svg>
  )
}

// 6. Carbone: Italian-American heritage crest medallion
function CarboneLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9.5" />
      <path
        d="M15.5 8.5C14.5 7.5 13.2 7 11.8 7C9.1 7 7 9.2 7 12C7 14.8 9.1 17 11.8 17C13.2 17 14.5 16.5 15.5 15.5"
        strokeWidth="2.2"
      />
      <path d="M12 2.5V1M12 23V21.5M2.5 12H1M23 12H21.5" strokeWidth="1.5" />
    </svg>
  )
}

// 7. Banza: Iconic smiling chickpea / bean
function BanzaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.8 2 3.5 5.8 3.5 10.5C3.5 16.2 7.2 22 12.5 22C17.5 22 20.5 17.8 20.5 13C20.5 7.2 16.8 2 12 2ZM8.5 9.5C9.3 9.5 10 10.2 10 11C10 11.8 9.3 12.5 8.5 12.5C7.7 12.5 7 11.8 7 11C7 10.2 7.7 9.5 8.5 9.5ZM14.8 16.2C13.2 17.5 10.8 17.5 9.2 16.2C8.8 15.8 8.8 15.2 9.2 14.8C9.6 14.4 10.2 14.4 10.6 14.8C11.4 15.5 12.6 15.5 13.4 14.8C13.8 14.4 14.4 14.4 14.8 14.8C15.2 15.2 15.2 15.8 14.8 16.2ZM15.5 12.5C14.7 12.5 14 11.8 14 11C14 10.2 14.7 9.5 15.5 9.5C16.3 9.5 17 10.2 17 11C17 11.8 16.3 12.5 15.5 12.5Z" />
    </svg>
  )
}

// 8. High Society: Twin peak freeride mountain with crown crest
function HighSocietyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 20L10 6L14 14L17 10L21 20H3Z" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M12 2L13.5 4.5L16 4.5L14 6.5L15 9L12 7.5L9 9L10 6.5L8 4.5L10.5 4.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

// 9. Vita: Organic vitality droplet badge
function VitaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C12 2 4 8 4 15C4 18.9 7.1 22 11 22C11.3 22 11.7 22 12 21.9C12.3 22 12.7 22 13 22C16.9 22 20 18.9 20 15C20 8 12 2 12 2ZM12 19.5C9.5 19.5 7.5 17.5 7.5 15C7.5 11.5 10.8 7.2 12 5.8C13.2 7.2 16.5 11.5 16.5 15C16.5 17.5 14.5 19.5 12 19.5Z" />
    </svg>
  )
}

// 10. Milk: Milk bottle & drop minimalist silhouette
function MilkLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 2H15V4H9V2ZM16 5H8C6.9 5 6 5.9 6 7V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V7C18 5.9 17.1 5 16 5ZM12 18C10.3 18 9 16.7 9 15C9 13.3 12 10 12 10C12 10 15 13.3 15 15C15 16.7 13.7 18 12 18Z" />
    </svg>
  )
}

// 11. Monarch: Geometric heraldic monarch butterfly wings
function MonarchLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 4C12 4 10 2 6 2C3 2 2 4.5 2 7C2 12 8 13.5 11.5 14C11.5 14 7 16 7 19C7 21 8.5 22 10.5 22C11.5 22 12 21.5 12 21.5C12 21.5 12.5 22 13.5 22C15.5 22 17 21 17 19C17 16 12.5 14 12.5 14C16 13.5 22 12 22 7C22 4.5 21 2 18 2C14 2 12 4 12 4Z" />
    </svg>
  )
}

// 12. Studio 84: Modernist creative studio aperture badge
function Studio84Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2L15 12H9L12 2Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}

const brands: BrandItem[] = [
  { name: "Northstar", mark: "NORTHSTAR", logo: NorthstarLogo },
  { name: "MFG Studio", mark: "MFG", logo: MfgLogo },
  { name: "Metaform", mark: "metaform", logo: MetaformLogo },
  { name: "Stride", mark: "STRIDE", logo: StrideLogo },
  { name: "Nova", mark: "NOVA", logo: NovaLogo },
  { name: "Carbone", mark: "CARBONE", logo: CarboneLogo },
  { name: "Banza", mark: "Banza", logo: BanzaLogo },
  { name: "High Society", mark: "HIGHSOCIETY", logo: HighSocietyLogo },
  { name: "Vita", mark: "VITA", logo: VitaLogo },
  { name: "Milk", mark: "milk", logo: MilkLogo },
  { name: "Monarch", mark: "MONARCH", logo: MonarchLogo },
  { name: "Studio 84", mark: "STUDIO84", logo: Studio84Logo },
]

export default function TrustedBrands() {
  const loop = [...brands, ...brands]

  return (
    <section
      aria-label="Trusted Clients and Brands"
      className="relative overflow-hidden border-y border-gray-200/90 dark:border-zinc-800/80 py-10 sm:py-12 lg:py-14 select-none"
    >
      {/* Top Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-32 w-[720px] -translate-x-1/2 rounded-full bg-indigo-500/[0.08] dark:bg-indigo-500/[0.12] blur-3xl"
        aria-hidden="true"
      />

      {/* Header Container */}
      <div className="relative section-container">
        <div className="mx-auto mb-7 max-w-[900px] text-center sm:mb-8 lg:mb-9">
          <div className="mx-auto mb-3 h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <p className="text-[14px] sm:text-[15px] font-extrabold font-jakarta uppercase tracking-[0.18em] text-gray-900 dark:text-zinc-100">
            Trusted By{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Our Loyal And Royal
            </span>{" "}
            Clients
          </p>
          <p className="mx-auto mt-2 max-w-[620px] text-[12px] sm:text-[13px] leading-5 font-inter text-gray-500 dark:text-zinc-400">
            Built for ambitious brands, creative teams and businesses that care
            about every printed detail.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Track with Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#eef7ff] dark:from-[#081522] via-[#eef7ff]/80 dark:via-[#081522]/80 to-transparent sm:w-32 lg:w-44"
          aria-hidden="true"
        />

        {/* Right Fade Mask */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#eef7ff] dark:from-[#081522] via-[#eef7ff]/80 dark:via-[#081522]/80 to-transparent sm:w-32 lg:w-44"
          aria-hidden="true"
        />

        {/* Marquee Row */}
        <div className="client-marquee flex w-max items-center gap-6 sm:gap-10 lg:gap-14 will-change-transform">
          {loop.map((brand, index) => {
            const BrandLogo = brand.logo
            return (
              <div
                key={`${brand.name}-${index}`}
                aria-hidden={index >= brands.length}
                className="group flex h-[74px] min-w-[160px] sm:min-w-[185px] lg:min-w-[215px] shrink-0 items-center justify-center gap-3 rounded-[18px] border border-transparent px-5 transition-all duration-300 hover:border-gray-200/90 dark:hover:border-zinc-800 hover:bg-white/85 dark:hover:bg-zinc-900/85 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_10px_28px_rgba(0,0,0,0.4)] cursor-pointer"
              >
                {/* Brand Logo Icon */}
                <div className="size-6 sm:size-7 shrink-0 text-gray-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 flex items-center justify-center">
                  <BrandLogo className="size-full" />
                </div>

                {/* Brand Text Mark */}
                <span
                  className={`select-none text-center text-[18px] sm:text-[21px] font-black font-jakarta tracking-[-0.04em] text-gray-700/60 dark:text-zinc-400/60 transition-all duration-300 group-hover:scale-[1.04] group-hover:text-gray-900 dark:group-hover:text-zinc-100 ${
                    brand.name === "Milk"
                      ? "font-serif italic lowercase text-[20px] sm:text-[23px]"
                      : ""
                  }`}
                >
                  {brand.mark}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Accent Divider */}
      <div className="relative mt-7 flex section-container items-center justify-center sm:mt-8 lg:mt-9">
        <span
          className="h-px w-full max-w-[760px] bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-800 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Pure CSS Keyframes for Seamless Hardware-Accelerated Marquee */}
      <style>{`
        .client-marquee {
          animation: client-marquee 30s linear infinite;
        }

        .client-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes client-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .client-marquee {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .client-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
