
import React, { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

import { buildWhatsAppLink } from "../data/businessData";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenOrderModal,
}) => {
  const [scrollLevel, setScrollLevel] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    {
      name: "Beranda",
      href: "#hero",
      id: "hero",
    },
    {
      name: "Produk",
      href: "#produk",
      id: "produk",
    },
    {
      name: "Galeri",
      href: "#galeri",
      id: "galeri",
    },
    {
      name: "Testimoni",
      href: "#testimoni",
      id: "testimoni",
    },
    {
      name: "FAQ",
      href: "#faq",
      id: "faq",
    },
    {
      name: "Lokasi",
      href: "#lokasi",
      id: "lokasi",
    },
  ];

  // =============================
  // SCROLL DETECTION
  // =============================

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Background Transition 3 Level
      if (scrollY < 40) {
        setScrollLevel(0);
      } else if (scrollY < 250) {
        setScrollLevel(1);
      } else {
        setScrollLevel(2);
      }

      // Active navigation section
      const scrollPosition = scrollY + 180;

      let currentSection = "hero";

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);

        if (!element) return;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =============================
  // SMOOTH SCROLL
  // =============================

  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    const navbarOffset = 90;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  // =============================
  // NAVBAR
  // =============================

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${
          scrollLevel === 0
            ? `
              py-5
              bg-white/20
              dark:bg-slate-900/20
              backdrop-blur-md
              border-b
              border-white/20
              dark:border-slate-800/20
            `
            : scrollLevel === 1
            ? `
              py-4
              bg-orange-50/80
              dark:bg-slate-900/80
              backdrop-blur-xl
              border-b
              border-orange-100/70
              dark:border-slate-700
              shadow-[0_6px_25px_rgba(249,115,22,0.06)]
            `
            : `
              py-3
              bg-white/95
              dark:bg-slate-900/95
              backdrop-blur-2xl
              border-b
              border-orange-200/80
              dark:border-slate-700
              shadow-[0_10px_40px_rgba(249,115,22,0.12)]
            `
        }
      `}
    >
      {/* ============================= */}
      {/* NAVBAR CONTAINER */}
      {/* ============================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* ============================= */}
          {/* LOGO */}
          {/* ============================= */}

          <a
            href="#hero"
            onClick={(e) => scrollTo(e, "#hero")}
            className="
              group
              flex
              items-center
              gap-3
              shrink-0
            "
          >
            <div
              className="
                relative
                w-11
                h-11
                rounded-2xl
                p-[2px]
                bg-gradient-to-br
                from-amber-400
                via-orange-500
                to-rose-400
                shadow-lg
                shadow-orange-500/10
                transition-all
                duration-300
                group-hover:scale-105
              "
            >
              <div
                className="
                  w-full
                  h-full
                  rounded-[14px]
                  bg-white
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="/logo.png"
                  alt="Pudding Buah Pontianak"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <div
                className="
                  text-base
                  sm:text-lg
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Pudding Buah
              </div>

              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-orange-500
                "
              >
                Pontianak
              </div>
            </div>
          </a>

          {/* ============================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ============================= */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-1
              p-1.5
              rounded-full
              bg-white/75
              dark:bg-slate-800/75
              backdrop-blur-xl
              border
              border-orange-100/80
              dark:border-slate-700
              shadow-sm
            "
          >
            {navLinks.map((link) => {
              const active =
                activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) =>
                    scrollTo(e, link.href)
                  }
                  className={`
                    relative
                    px-4
                    py-2.5
                    rounded-full
                    text-xs
                    xl:text-sm
                    font-bold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${
                      active
                        ? `
                          text-white
                          bg-gradient-to-r
                          from-amber-500
                          via-orange-500
                          to-orange-600
                          shadow-md
                          shadow-orange-500/20
                        `
                        : `
                          text-slate-600
                          dark:text-slate-300
                          hover:text-orange-600
                          dark:hover:text-orange-400
                          hover:bg-orange-50
                          dark:hover:bg-slate-700
                        `
                    }
                  `}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* ============================= */}
          {/* ACTIONS */}
          {/* ============================= */}

          <div
            className="
              flex
              items-center
              gap-2
              shrink-0
            "
          >
            {/* DARK MODE */}

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="
                w-10
                h-10
                rounded-full
                bg-white
                dark:bg-slate-800
                border
                border-orange-100
                dark:border-slate-700
                text-slate-600
                dark:text-slate-200
                flex
                items-center
                justify-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-orange-300
                hover:text-orange-500
              "
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* ORDER */}

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                sm:flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-gradient-to-r
                from-amber-500
                via-orange-500
                to-orange-600
                text-white
                text-xs
                font-bold
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              <PhoneCall className="w-4 h-4" />
              Pesan Sekarang
            </a>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Toggle menu"
              className="
                lg:hidden
                w-10
                h-10
                rounded-xl
                bg-white
                dark:bg-slate-800
                border
                border-orange-100
                dark:border-slate-700
                flex
                items-center
                justify-center
                text-slate-700
                dark:text-white
                shadow-sm
              "
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}

      <div
        className={`
          lg:hidden
          absolute
          top-full
          left-0
          right-0
          px-4
          transition-all
          duration-300
          ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            mt-2
            p-3
            rounded-3xl
            bg-white/95
            dark:bg-slate-900/95
            backdrop-blur-2xl
            border
            border-orange-100
            dark:border-slate-700
            shadow-2xl
          "
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active =
                activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) =>
                    scrollTo(e, link.href)
                  }
                  className={`
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    font-bold
                    transition-all
                    duration-300
                    ${
                      active
                        ? `
                          bg-gradient-to-r
                          from-amber-500
                          to-orange-500
                          text-white
                          shadow-md
                        `
                        : `
                          text-slate-700
                          dark:text-slate-200
                          hover:bg-orange-50
                          dark:hover:bg-slate-800
                          hover:text-orange-600
                        `
                    }
                  `}
                >
                  {link.name}

                  <ChevronRight
                    className={`
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      ${
                        active
                          ? "translate-x-1"
                          : ""
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* MOBILE ORDER */}

          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-2
              w-full
              py-3.5
              rounded-2xl
              bg-gradient-to-r
              from-amber-500
              via-orange-500
              to-orange-600
              text-white
              font-bold
              text-sm
              shadow-lg
            "
          >
            <PhoneCall className="w-4 h-4" />
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

