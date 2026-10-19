import {
  ChevronDown,
  Globe2,
  Heart,
  HelpCircle,
  Menu,
  PackageCheck,
  Search,
  ShoppingCart,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

import logoImg from "@/assets/logo.png";
import AIButton from "../AIButton";
import { navItems } from "./navigation-data";

export const Navbar = () => {
  const navigate = useNavigate();
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = false;

  const activeNav = navItems.find((item) => item.label === activeMenu);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const submitSearch = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const query = searchQuery.trim();

    if (!query) {
      desktopSearchRef.current?.focus();
      return;
    }

    navigate(`/products?search=${encodeURIComponent(query)}`);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="relative z-70 w-full overflow-visible bg-white text-[#0b2b4c] shadow-[0_1px_0_rgba(21,47,73,0.08)]">
        {/* PROMO BAR */}
        <div className="bg-[#0b2949] text-white">
          <div className="mx-auto flex h-9 w-full max-w-360 items-center justify-between px-4 text-[10px] sm:px-6 sm:text-[11px] lg:px-8">
            <Link
              to="/products"
              className="truncate font-semibold tracking-[0.01em] transition-colors hover:text-[#79d9d3]"
            >
              20% OFF your first order | Use code NEW20 | See details →
            </Link>

            <div className="hidden items-center gap-3 text-white/82 md:flex">
              <Link to="#" className="transition-colors hover:text-white">
                Business Solutions
              </Link>
              <span className="h-4 w-px bg-white/20" />
              <Link
                to="#"
                className="inline-flex items-center gap-1 transition-colors hover:text-white"
              >
                Help <HelpCircle size={13} />
              </Link>
              <span className="h-4 w-px bg-white/20" />
              <span className="inline-flex items-center gap-1.5">
                <Globe2 size={13} /> United States (USD){" "}
                <ChevronDown size={12} />
              </span>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="border-b border-[#e4eaf0] bg-white">
          <div className="mx-auto flex h-20.5 w-full max-w-360 items-center gap-5 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="shrink-0">
              <img
                src={logoImg}
                alt="Pryntmart"
                width={180}
                height={54}
                className="h-auto w-33 object-contain sm:w-37.5"
              />
            </Link>

            <form
              onSubmit={submitSearch}
              className="hidden h-12 min-w-0 flex-1 overflow-hidden rounded-[14px] border border-[#e5e9ef] bg-[#f4f6f9] transition-all focus-within:border-[#9fc8d2] focus-within:bg-white focus-within:shadow-[0_8px_24px_rgba(18,55,86,0.08)] lg:flex"
            >
              <input
                ref={desktopSearchRef}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products, templates or ideas..."
                className="min-w-0 flex-1 bg-transparent px-5 text-[14px] text-[#173653] outline-none placeholder:text-[#98a5b3]"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex w-14 shrink-0 items-center justify-center bg-[#0b2949] text-white transition-colors hover:bg-[#123b61]"
              >
                <Search size={22} strokeWidth={1.8} />
              </button>
            </form>

            <div className="ml-auto hidden shrink-0 items-center gap-1.5 lg:flex">
              <AIButton variant="nav" />

              <Link
                to={
                  isAuthenticated
                    ? "/account/orders"
                    : "/signin?next=/account/orders"
                }
                className="flex h-11 items-center gap-2 px-3 text-[12px] font-semibold text-[#173653] transition-colors hover:text-[#bd2d63]"
              >
                <PackageCheck size={17} /> Orders
              </Link>

              <Link
                to={
                  isAuthenticated
                    ? "/account/favorites"
                    : "/signin?next=/account/favorites"
                }
                className="flex h-11 items-center gap-2 px-3 text-[12px] font-semibold text-[#173653] transition-colors hover:text-[#bd2d63]"
              >
                <Heart size={17} strokeWidth={1.8} /> Favorites
              </Link>

              <Link
                to={isAuthenticated ? "/account" : "/signin"}
                className="flex h-11 items-center gap-2 rounded-lg bg-[#55c2bb] px-4 text-[12px] font-semibold text-white transition-all hover:bg-[#45b2ab]"
              >
                <UserRound size={17} />
                {isAuthenticated ? "Account" : "Sign In"}
              </Link>

              <Link
                to="/cart"
                aria-label="Cart"
                className="relative ml-1 flex h-11 w-11 items-center justify-center rounded-full text-[#173653] transition-colors hover:bg-[#f5f7f9]"
              >
                <ShoppingCart size={22} strokeWidth={1.8} />
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ef334e] px-1 text-[9px] font-bold text-white">
                  0
                </span>
              </Link>
            </div>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Search products"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec]"
              >
                <Search size={18} />
              </button>
              <Link
                to="/editor"
                aria-label="Try our AI"
                className="ai-mobile-dot"
              >
                <span className="ai-mobile-dot__spark">✦</span>
              </Link>
              <Link
                to="/cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec]"
              >
                <ShoppingCart size={18} />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#bd2d63] px-1 text-[9px] font-semibold text-white">
                  0
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec]"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* CATEGORY NAV */}
        <div className="hidden border-b border-[#e4eaf0] bg-white xl:block">
          <div className="mx-auto flex h-14.5 w-full max-w-360 items-stretch px-4 sm:px-6 lg:px-8">
            <nav className="flex min-w-0 flex-1 items-stretch justify-between">
              {navItems.map((item) => {
                const isActive = activeMenu === item.label;

                return (
                  <div
                    key={item.label}
                    className="flex items-stretch"
                    onMouseEnter={() => setActiveMenu(item.label)}
                  >
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-1.5 px-2 text-[12px] text-nowrap font-medium transition-colors 2xl:px-3 2xl:text-[13px] ${
                        isActive
                          ? "text-[#bd2d63]"
                          : "text-[#173653] hover:text-[#bd2d63]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-0.5 bg-[#bd2d63] transition-transform duration-200 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </div>
                );
              })}
            </nav>

            <Link
              to="/deals"
              onMouseEnter={() => setActiveMenu(null)}
              className="ml-4 flex shrink-0 items-center gap-2 border-l border-[#e4eaf0] px-5 text-[13px] font-semibold text-[#173653] transition-colors hover:text-[#bd2d63]"
            >
              Deals
              <span className="h-4 w-4 rounded-full bg-linear-to-br from-[#ff6b78] to-[#d9233f] shadow-[0_3px_8px_rgba(217,35,63,0.25)]" />
            </Link>
          </div>
        </div>

        {/* MEGA PANEL */}
        {activeNav ? (
          <div
            className="absolute left-0 right-0 top-full z-80 hidden xl:block"
            onMouseEnter={() => setActiveMenu(activeNav.label)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="border-t border-white/[0.07] bg-[#081f38] text-white shadow-[0_28px_70px_rgba(4,21,38,0.34)]">
              <div className="mx-auto grid w-full max-w-360 grid-cols-[minmax(0,1fr)_310px] gap-8 px-8 py-8 2xl:gap-12">
                <div className="grid min-w-0 grid-cols-3 gap-x-8 gap-y-7">
                  {activeNav.groups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-[18px] border border-white/0 p-3 transition-all duration-200 hover:border-white/[0.07] hover:bg-white/[0.035]"
                    >
                      <p className="text-[13px] font-semibold text-white">
                        {group.title}
                      </p>
                      <div className="mt-4 space-y-2.5">
                        {group.items.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setActiveMenu(null)}
                            className="block text-[12px] text-white/58 transition-all duration-200 hover:translate-x-1 hover:text-[#71d7d0]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={activeNav.featured.href}
                  onClick={() => setActiveMenu(null)}
                  className="group relative self-stretch overflow-hidden rounded-[22px] border border-white/9 bg-[linear-gradient(145deg,#153c5d_0%,#0c2a47_58%,#112943_100%)] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.14)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#55c2bb]/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-[#bd2d63]/20 blur-3xl" />

                  <div className="relative z-10 flex h-full flex-col">
                    <p className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#69d5ce]/20 bg-[#55c2bb]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7ae0d9]">
                      <Sparkles size={10} /> {activeNav.featured.eyebrow}
                    </p>

                    <h3 className="mt-5 max-w-62.5 text-[21px] font-semibold leading-[1.28] tracking-tight text-white">
                      {activeNav.featured.title}
                    </h3>

                    <p className="mt-3 max-w-62.5 text-[12px] leading-5 text-white/52">
                      {activeNav.featured.description}
                    </p>

                    <p className="mt-auto pt-6 text-[12px] font-semibold text-[#73dcd5] transition-transform duration-200 group-hover:translate-x-1">
                      {activeNav.featured.cta} →
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* MOBILE DRAWER */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-90 bg-[#07192b]/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-100 h-dvh w-[88%] max-w-97.5 overflow-y-auto bg-white shadow-[-20px_0_60px_rgba(8,27,49,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e5ebf0] bg-white/95 px-5 py-4 backdrop-blur-xl">
          <img
            src={logoImg}
            alt="Pryntmart"
            width={130}
            height={40}
            className="h-auto w-31.25"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f6f9]"
          >
            <X size={19} />
          </button>
        </div>

        <div className="p-5">
          <div className="mb-5">
            <AIButton variant="nav" />
          </div>

          <form
            onSubmit={submitSearch}
            className="mb-5 flex h-11 overflow-hidden rounded-xl border border-[#dce5ed] bg-[#f7f9fb]"
          >
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products, templates or ideas..."
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
            />
            <button
              type="submit"
              className="w-12 bg-[#0b2949] text-white"
              aria-label="Search"
            >
              <Search size={18} className="mx-auto" />
            </button>
          </form>

          <div className="space-y-1.5">
            {navItems.map((item) => {
              const opened = mobileCategory === item.label;

              return (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-xl border border-[#e8edf2]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setMobileCategory(opened ? null : item.label)
                    }
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-[#173653]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${opened ? "rotate-180" : ""}`}
                    />
                  </button>

                  {opened ? (
                    <div className="border-t border-[#edf1f4] bg-[#f9fbfd] px-4 py-4">
                      {item.groups.map((group) => (
                        <div key={group.title} className="mb-4 last:mb-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#bd2d63]">
                            {group.title}
                          </p>
                          <div className="mt-2 space-y-2">
                            {group.items.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-[13px] text-[#50677c]"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <Link
              to={
                isAuthenticated
                  ? "/account/favorites"
                  : "/signin?next=/account/favorites"
              }
              onClick={() => setMobileOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dce5ed] text-sm font-semibold text-[#173653]"
            >
              <Heart size={16} /> Favorites
            </Link>
            <Link
              to={isAuthenticated ? "/account" : "/signin"}
              onClick={() => setMobileOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0b2949] text-sm font-semibold text-white"
            >
              <UserRound size={16} />
              {isAuthenticated ? "Account" : "Sign in"}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
