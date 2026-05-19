"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "/img1.jpg",
    label: "GIẢI PHÁP",
    h1: "CÁNH KÍNH & HỆ NHÔM",
    h2: "NỘI THẤT CAO CẤP",
    sub: "Kiến tạo không gian hiện đại – Sang trọng – Tinh tế / Từ xưởng sản xuất trực tiếp",
  },
  {
    id: 2,
    image: "/img6.jpg",
    label: "CHẤT LƯỢNG",
    h1: "HỆ VÁCH TRƯỢT SLIM",
    h2: "KHÔNG RAY DƯỚI",
    sub: "Tối ưu diện tích - Vận hành êm ái - Thẩm mỹ vượt trội",
  },
  {
    id: 3,
    image: "/img4.jpg",
    label: "THIẾT KẾ",
    h1: "TỦ FULL KÍNH LUXURY",
    h2: "ĐẲNG CẤP THƯỢNG LƯU",
    sub: "Giải pháp hoàn hảo cho biệt thự, Penthouse và Showroom",
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Preload all slide images to prevent stuttering/lag during transitions
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.image) {
        const img = new Image();
        img.src = slide.image;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative min-h-[850px] lg:h-[80vh] xl:h-[85vh] overflow-hidden bg-brand-dark flex items-center py-16 lg:py-0">
      {/* Luxury Background with Grid and Glowing Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />

        {/* Ambient background colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#060a07] via-[#0b120d] to-[#060a07]" />

        {/* Soft radial highlights */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-green/10 blur-[120px] opacity-60 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-green/5 blur-[120px] opacity-40" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Content Column */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="h-[2px] bg-brand-green"
                  />
                  <span className="text-brand-green font-black tracking-[0.4em] text-[12px] uppercase">
                    {slides[current].label}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white leading-[1.1] mb-2 tracking-tight">
                  {slides[current].h1}
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-black text-brand-green leading-[1.1] mb-8 tracking-tight">
                  {slides[current].h2}
                </h2>

                <div className="mb-10 border-l-2 border-brand-green/30 pl-6">
                  <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed italic font-medium">
                    {slides[current].sub}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button href="/san-pham" className="h-14 px-8 group font-bold tracking-wider">
                    KHÁM PHÁ SẢN PHẨM <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="/cong-trinh" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all font-bold tracking-wider">
                    XEM CÔNG TRÌNH
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Premium Showcase Card */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center gap-8">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">

              {/* Soft ambient blur behind the card (uses current slide image with smooth cross-fade) */}
              <div className="absolute -inset-4 select-none pointer-events-none scale-105 overflow-hidden rounded-3xl">
                <AnimatePresence>
                  {slides[current].image && (
                    <motion.img
                      key={slides[current].image}
                      src={slides[current].image}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.25 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover blur-3xl"
                      decoding="async"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Stable Glassmorphic Frame */}
              <div className="relative w-full h-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
                  <AnimatePresence>
                    {slides[current].image ? (
                      /* High-resolution aspect-locked image with cross-fade */
                      <motion.img
                        key={slides[current].image}
                        src={slides[current].image}
                        alt={slides[current].h1}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                        decoding="async"
                        whileHover={{ scale: 1.05 }}
                      />
                    ) : (
                      /* Minimal luxury dynamic fallback when there is no image */
                      <motion.div
                        key="fallback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0c140f] to-[#040605] flex flex-col justify-between p-8 border border-brand-green/10"
                      >
                        {/* Abstract technical architecture grid line-art */}
                        <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <line x1="20" y1="0" x2="20" y2="100" stroke="#10b981" strokeWidth="0.15" />
                            <line x1="50" y1="0" x2="50" y2="100" stroke="#10b981" strokeWidth="0.15" />
                            <line x1="80" y1="0" x2="80" y2="100" stroke="#10b981" strokeWidth="0.15" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#10b981" strokeWidth="0.15" />
                            <line x1="0" y1="70" x2="100" y2="70" stroke="#10b981" strokeWidth="0.15" />
                            <circle cx="50" cy="50" r="30" stroke="#10b981" strokeWidth="0.25" fill="none" strokeDasharray="3,3" />
                          </svg>
                        </div>

                        <div className="flex justify-between items-start z-10">
                          <span className="text-[10px] font-black tracking-[0.3em] text-brand-green/80 uppercase">LUXURY SPACE</span>
                          <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        </div>

                        <div className="my-auto text-center z-10 select-none">
                          <motion.h3
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="text-4xl md:text-5xl font-heading font-black italic tracking-tighter text-white/10"
                          >
                            HQHOME
                          </motion.h3>
                          <p className="text-[9px] tracking-[0.5em] text-white/30 uppercase mt-2">DESIGN & BUILD</p>
                        </div>

                        <div className="flex justify-between items-end z-10 text-[9px] text-white/40 tracking-wider">
                          <span>EST. 2024</span>
                          <span>SYSTEM ACTIVE</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>

            {/* Premium Page Indicators - Placed exactly underneath the image card, centered on all screens */}
            <div className="flex gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className="group relative py-2 px-1 focus:outline-none"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={cn(
                    "h-[3px] transition-all duration-500 rounded-full",
                    current === index
                      ? "w-10 bg-brand-green shadow-[0_0_8px_#10b981]"
                      : "w-5 bg-white/20 group-hover:bg-white/40"
                  )} />
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Large back watermark */}
        <div className="hidden xl:block absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.015] select-none pointer-events-none rotate-90 origin-center">
          <span className="text-[220px] font-black italic tracking-tighter text-white">HQ</span>
        </div>
      </div>
    </section>
  );
};
