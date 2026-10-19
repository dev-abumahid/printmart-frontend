import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import {
  CreditCard,
  CircleDollarSign,
  Wallet,
  WalletCards,
  BadgeDollarSign,
  Send,
  X,
  Check,
} from "lucide-react";

import logoImg from "@/assets/logo.png";

const footerSections = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "DTF Transfers", href: "/products/dtf-transfer" },
      { label: "UV DTF Transfers", href: "/products/uv-dtf-transfer" },
      { label: "Best Sellers", href: "/products/best-sellers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Track Order", href: "/track-order" },
      { label: "Shipping Info", href: "/shipping" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

const paymentMethods = [
  { name: "Visa", icon: CreditCard },
  { name: "Mastercard", icon: CreditCard },
  { name: "American Express", icon: CreditCard },
  { name: "Discover", icon: CreditCard },
  { name: "PayPal", icon: CircleDollarSign },
  { name: "Apple Pay", icon: Wallet },
  { name: "Google Pay", icon: WalletCards },
  { name: "Stripe", icon: BadgeDollarSign },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3500);
  };

  return (
    <footer className="bg-[#0b2949] text-white select-none">
      <div className="mx-auto w-full max-w-[1920px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 xl:px-10 2xl:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.75fr_1.4fr] lg:gap-10 xl:gap-14">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logoImg}
                alt="Pryntmart"
                width={300}
                height={50}
                className="h-auto w-48 object-contain sm:w-52"
              />
            </Link>
            <p className="mt-4 max-w-75 text-[14px] leading-6 text-white/80 xl:text-[15px]">
              Your Ideas. A Brighter World.
            </p>
          </div>

          {/* Navigation Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[14px] font-semibold text-white xl:text-[15px]">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-[12px] text-white/75 transition-colors duration-200 hover:text-white xl:text-[13px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter & Socials */}
          <div>
            <h3 className="text-[14px] font-semibold text-white xl:text-[15px]">
              Stay in Touch
            </h3>
            <p className="mt-2 max-w-82.5 text-[12px] leading-5 text-white/70 xl:text-[13px]">
              Subscribe for updates, offers and inspiration.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex max-w-90 overflow-hidden rounded-xl border border-white/20 bg-white"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Your email address"
                className="min-w-0 flex-1 px-3 py-2.5 text-[11px] text-[#0b2949] outline-none placeholder:text-[#9aa4af] xl:text-[12px]"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="flex items-center gap-1 bg-white px-3 text-[10px] font-medium text-[#0b2949] transition-colors hover:bg-[#f3f6f9] active:scale-95 cursor-pointer xl:text-[11px]"
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    Sent <Check size={12} />
                  </span>
                ) : (
                  <>
                    Send <Send size={12} />
                  </>
                )}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <X size={14} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 text-white"
              >
                <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.057.238-.19.289-.438.174-1.637-.762-2.66-3.153-2.66-5.076 0-4.135 3.004-7.935 8.672-7.935 4.552 0 8.092 3.244 8.092 7.581 0 4.522-2.851 8.163-6.81 8.163-1.33 0-2.58-.691-3.007-1.507l-.818 3.118c-.296 1.134-1.096 2.556-1.632 3.428 1.223.376 2.524.582 3.873.582 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Accepted Payment Methods */}
        <div className="mt-10 border-t border-white/12 pt-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Accepted payments
              </p>
              <p className="mt-1 text-[10px] text-white/45">
                Major cards and popular digital payment methods.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <span
                    key={method.name}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm border border-white/10 shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <Icon size={14} className="text-white/80 shrink-0" />
                    <span>{method.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-between gap-2 px-4 py-4 text-[10px] text-white/55 sm:flex-row sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <p>© 2026 Pryntmart. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
