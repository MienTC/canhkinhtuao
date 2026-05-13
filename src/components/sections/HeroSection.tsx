"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "",
    label: "GIẢI PHÁP",
    h1: "CÁNH KÍNH & HỆ NHÔM",
    h2: "NỘI THẤT CAO CẤP",
    sub: "Kiến tạo không gian hiện đại – Sang trọng – Tinh tế / Từ xưởng sản xuất trực tiếp",
  },
  {
    id: 2,
    image: "",
    label: "CHẤT LƯỢNG",
    h1: "HỆ VÁCH TRƯỢT SLIM",
    h2: "KHÔNG RAY DƯỚI",
    sub: "Tối ưu diện tích - Vận hành êm ái - Thẩm mỹ vượt trội",
  },
  {
    id: 3,
    image: "",
    label: "THIẾT KẾ",
    h1: "TỦ FULL KÍNH LUXURY",
    h2: "ĐẲNG CẤP THƯỢNG LƯU",
    sub: "Giải pháp hoàn hảo cho biệt thự, Penthouse và Showroom",
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[600px] md:h-[70vh] lg:h-[80vh] overflow-hidden bg-brand-dark flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-ken-burns",
              !slides[current].image && "bg-gradient-to-br from-[#0a0f0b] via-[#121a14] to-[#0a0f0b]"
            )}
            style={{ backgroundImage: slides[current].image ? `url(${slides[current].image})` : "none" }}
          >
            {!slides[current].image && (
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
                <span className="text-[15vw] font-black italic tracking-tighter whitespace-nowrap">HQHOME</span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-10 bg-brand-green" />
              <span className="text-brand-green font-black tracking-[0.4em] text-[12px] uppercase">
                {slides[current].label}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-2">
              {slides[current].h1}
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-brand-green leading-[1.1] mb-8">
              {slides[current].h2}
            </h2>

            <div className="mb-12 border-l-2 border-brand-green/30 pl-6">
              <p className="text-base md:text-xl text-white/70 max-w-xl leading-relaxed italic font-medium">
                {slides[current].sub}
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Button href="/san-pham" className="h-14 px-8 group">
                KHÁM PHÁ SẢN PHẨM <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/cong-trinh" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all">
                XEM CÔNG TRÌNH
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Subtle Decorative Text */}
        <div className="hidden xl:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none rotate-90 origin-center">
          <span className="text-[200px] font-black italic tracking-tighter text-white">HQ</span>
        </div>
      </div>
    </section>
  );
};
