import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathname, setPathname] = useState('/');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    // Membaca path awal
    setPathname(window.location.pathname);
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';

    // Memperbarui State ketika Astro ViewTransitions berpindah halaman secara soft!
    const onPageLoad = () => {
      setPathname(window.location.pathname);
    };
    document.addEventListener('astro:page-load', onPageLoad);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('astro:page-load', onPageLoad);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Sejarah', href: '/sejarah' },
    { name: 'Visi & Misi', href: '/visimisi' },
    { name: 'Struktur', href: '/struktur' },
    { name: 'Galeri', href: '/gallery' },
  ];

  return (
    <>
      {/* Floating Dock Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto flex items-center gap-3 p-2 rounded-full transition-all duration-500 w-full max-w-5xl",
            isScrolled
              ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-200"
              : "bg-white/95 border border-slate-100 shadow-xl"
          )}
        >
          {/* LOGO — Pure, no filters */}
          <a
            href="/"
            className="flex items-center gap-2.5 pl-3 pr-2 py-1 shrink-0 hover:opacity-80 transition-opacity"
          >
            <img src="/images/logo.svg" alt="Chip.Com" width={40} height={40} className="w-10 h-10 object-contain" />
            <span className="text-lg font-black tracking-tight text-slate-800 hidden sm:inline">
              Chip.Com
            </span>
          </a>

          {/* DESKTOP NAV LINKS */}
          <div
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className="relative px-4 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shrink-0"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={cn(
                    "relative z-20 transition-colors duration-200",
                    isActive ? "text-blue-700" : isHovered ? "text-blue-600" : "text-slate-500"
                  )}>
                    {link.name}
                  </span>

                  {/* Magnetic hover background */}
                  {isHovered && (
                    <motion.div
                      layoutId="fluid-hover"
                      className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA — Desktop */}
          <a
            href="https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors shrink-0 group"
          >
            <Sparkles className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
            <span className="whitespace-nowrap">Gabung WA</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden bg-slate-100 p-2.5 rounded-full text-slate-800 shrink-0 ml-auto active:scale-90 transition-transform"
            aria-label="Buka Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* MOBILE CENTER LOGO TEXT */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:hidden pointer-events-none">
            <span className="text-base font-black tracking-tighter text-slate-800">
              Chip.Com
            </span>
          </div>
        </nav>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 40px)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)", opacity: 1 }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 40px)", opacity: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 15, duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 mt-2">
              <span className="text-xl font-black text-slate-900 tracking-tight">Navigasi</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-slate-100 rounded-full text-slate-800 active:scale-90 active:rotate-90 transition-all"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 gap-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + (i * 0.05), type: "spring", stiffness: 100 }}
                    className="group relative flex items-center"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={cn(
                      "text-4xl md:text-5xl font-black tracking-tighter transition-colors duration-300",
                      isActive ? "text-blue-600" : "text-slate-300 hover:text-slate-800"
                    )}>
                      {link.name}
                    </span>
                    <div className="h-[3px] bg-blue-600 absolute left-0 bottom-1 w-0 group-hover:w-1/3 transition-all duration-300 ease-out" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-5 rounded-3xl font-bold text-lg shadow-lg shadow-blue-600/30 active:scale-95 transition-transform"
              >
                Gabung Group WhatsApp
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;