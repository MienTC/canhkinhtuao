"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-100" 
          : "bg-white py-4"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 bg-brand-green flex items-center justify-center rounded-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-md shadow-brand-green/20">
               <span className="text-white font-black text-2xl italic tracking-tighter">HQ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black text-brand-dark tracking-tighter leading-none group-hover:text-brand-green transition-colors">HQ HOME</span>
              <span className="text-[11px] text-brand-green font-bold tracking-[0.3em] uppercase mt-0.5 opacity-80">Viet Nam</span>
            </div>
          </Link>

          {/* Desktop Nav Section - Center */}
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-nowrap flex-grow justify-center px-2">
            {navLinks.map((link) => (
              <li 
                key={link.label} 
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 py-4 px-1.5 xl:px-2.5 text-[11px] xl:text-[13px] font-extrabold uppercase tracking-tighter xl:tracking-widest transition-all duration-300 relative whitespace-nowrap",
                    pathname === link.href 
                      ? "text-brand-green" 
                      : "text-brand-dark hover:text-brand-green"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className={cn("transition-transform duration-300", activeDropdown === link.label && "rotate-180")} />}

                  {/* Underline effect */}
                  <span className={cn(
                    "absolute bottom-2 left-3 right-3 h-0.5 bg-brand-green transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                    pathname === link.href && "scale-x-100"
                  )} />
                </Link>

                {/* Dropdown Menu */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 min-w-[280px] bg-white shadow-2xl rounded-sm border-t-2 border-brand-green p-4 z-50"
                      >
                        <div className="grid gap-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center justify-between p-3 rounded-sm hover:bg-brand-bg transition-all group/item"
                            >
                              <span className="text-[13px] font-bold text-brand-dark group-hover/item:text-brand-green uppercase tracking-wider">
                                {child.label}
                              </span>
                              <ChevronRight size={16} className="text-gray-300 group-hover/item:text-brand-green transition-transform group-hover/item:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Contact & CTA Section - Right */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-shrink-0">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-brand-green/5 rounded-full flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-inner">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-muted font-bold uppercase tracking-widest opacity-60">Hotline 24/7</span>
                <span className="text-[15px] font-black text-brand-dark group-hover:text-brand-green transition-colors tracking-tight">038 892 3333</span>
              </div>
            </div>
            <Button href="/lien-he" className="text-[11px] px-6 py-3 shadow-md shadow-brand-green/20 hover:shadow-lg hover:shadow-brand-green/30">
              NHẬN BÁO GIÁ
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-brand-dark hover:bg-brand-bg rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-12">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-sm">
                      <span className="text-white font-black text-xl italic">HQ</span>
                    </div>
                    <span className="font-heading font-black text-2xl text-brand-dark tracking-tighter">HQ HOME</span>
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-brand-bg rounded-full transition-colors">
                    <X size={28} />
                  </button>
                </div>

                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.label} className="border-b border-gray-50 pb-2 mb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className={cn(
                            "text-lg font-black uppercase tracking-widest py-2 block",
                            pathname === link.href ? "text-brand-green" : "text-brand-dark"
                          )}
                        >
                          {link.label}
                        </Link>
                        {link.children && (
                           <button 
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                            className="p-3 text-brand-muted hover:text-brand-green transition-colors"
                          >
                            <ChevronDown className={cn("transition-transform duration-300", activeDropdown === link.label && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      
                      {link.children && activeDropdown === link.label && (
                        <motion.ul 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-2 ml-4 flex flex-col gap-3 border-l-2 border-brand-green/20 pl-6 py-2 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="text-[14px] font-bold text-brand-muted hover:text-brand-green transition-colors uppercase tracking-wider"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col gap-8">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center">
                       <Phone size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-xs text-brand-muted font-bold uppercase tracking-widest opacity-60">Liên hệ ngay</span>
                       <span className="text-xl font-black text-brand-dark tracking-tight">038 892 3333</span>
                    </div>
                  </div>
                  <Button href="/lien-he" className="w-full h-14 text-[13px]">NHẬN BÁO GIÁ MIỄN PHÍ</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
