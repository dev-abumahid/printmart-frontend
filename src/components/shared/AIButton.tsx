import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

type AIButtonProps = {
  variant?: "default" | "nav";
};

export default function AIButton({ variant = "default" }: AIButtonProps) {
  if (variant === "nav") {
    return (
      <>
        <Link
          to="/editor"
          className="ai-nav-button group"
          aria-label="Try our AI design experience"
        >
          <span className="ai-nav-button__shine" aria-hidden="true" />
          <span
            className="ai-nav-button__spark ai-nav-button__spark--one"
            aria-hidden="true"
          />
          <span
            className="ai-nav-button__spark ai-nav-button__spark--two"
            aria-hidden="true"
          />
          <Sparkles size={15} className="relative z-10 ai-nav-sparkle" />
          <span className="relative z-10 whitespace-nowrap">Try our AI</span>
        </Link>

        <style>{`
          .ai-nav-button {
            position: relative;
            display: inline-flex;
            height: 40px;
            align-items: center;
            justify-content: center;
            gap: 7px;
            overflow: hidden;
            border-radius: 999px;
            border: 1px solid rgba(189, 45, 99, 0.2);
            padding: 0 15px;
            background: linear-gradient(
              110deg,
              #8f168d 0%,
              #bd2d63 48%,
              #d86f34 100%
            );
            color: white;
            font-size: 12px;
            font-weight: 700;
            box-shadow:
              0 8px 20px rgba(189, 45, 99, 0.18),
              inset 0 1px rgba(255, 255, 255, 0.2);
            transition:
              transform 220ms ease,
              box-shadow 220ms ease;
          }

          .ai-nav-button:hover {
            transform: translateY(-1px);
            box-shadow:
              0 12px 26px rgba(189, 45, 99, 0.24),
              inset 0 1px rgba(255, 255, 255, 0.24);
          }

          .ai-nav-button__shine {
            position: absolute;
            inset: -2px auto -2px -38%;
            width: 36%;
            transform: skewX(-18deg);
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.52),
              transparent
            );
            animation: ai-nav-shine 2.8s ease-in-out infinite;
          }

          .ai-nav-button__spark {
            position: absolute;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: white;
            box-shadow: 0 0 9px rgba(255, 255, 255, 0.95);
            animation: ai-nav-twinkle 1.9s ease-in-out infinite;
          }

          .ai-nav-button__spark--one {
            right: 11px;
            top: 7px;
          }

          .ai-nav-button__spark--two {
            left: 11px;
            bottom: 7px;
            animation-delay: 0.8s;
          }

          .ai-nav-sparkle {
            animation: ai-nav-icon 2.4s ease-in-out infinite;
          }

          .ai-mobile-dot {
            display: inline-flex;
            height: 40px;
            width: 40px;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            background: linear-gradient(135deg, #9b168b, #bd2d63 58%, #e07b36);
            color: white;
            box-shadow: 0 8px 18px rgba(189, 45, 99, 0.18);
          }

          .ai-mobile-dot__spark {
            font-size: 17px;
            line-height: 1;
            animation: ai-nav-icon 2s ease-in-out infinite;
          }

          @keyframes ai-nav-shine {
            0%,
            58% {
              transform: translateX(0) skewX(-18deg);
              opacity: 0;
            }
            66% {
              opacity: 1;
            }
            100% {
              transform: translateX(420%) skewX(-18deg);
              opacity: 0;
            }
          }

          @keyframes ai-nav-twinkle {
            0%,
            100% {
              transform: scale(0.45);
              opacity: 0.25;
            }
            50% {
              transform: scale(1.45);
              opacity: 1;
            }
          }

          @keyframes ai-nav-icon {
            0%,
            100% {
              transform: scale(1) rotate(0deg);
              filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0));
            }
            50% {
              transform: scale(1.13) rotate(8deg);
              filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.85));
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .ai-nav-button__shine,
            .ai-nav-button__spark,
            .ai-nav-sparkle,
            .ai-mobile-dot__spark {
              animation: none !important;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <Link
      to="/editor"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-pink-500/20 bg-gradient-to-r from-[#8f168d] via-[#bd2d63] to-[#d86f34] px-4 py-2 text-white shadow-lg shadow-pink-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      aria-label="Try our AI design experience"
    >
      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
        <Sparkles size={16} />
      </span>
      <span className="relative z-10">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
          New creative tool
        </span>
        <span className="flex items-center gap-2 text-[13px] font-semibold text-white sm:text-sm">
          Try our AI
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </span>
    </Link>
  );
}
