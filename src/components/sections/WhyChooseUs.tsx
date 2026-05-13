"use client";
import React from "react";
import { motion } from "framer-motion";
import { reasons, stats } from "@/lib/data";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export const WhyChooseUs = () => {
  return (
    <section className="pt-20 bg-white relative overflow-hidden border-b border-gray-50">
      {/* Background Decorative Text */}
      <div className="absolute top-20 -right-20 opacity-[0.02] select-none pointer-events-none hidden lg:block">
         <span className="text-[120px] font-black italic uppercase">Quality</span>
      </div>

      <div className="container-custom mb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
               <div className="h-[2px] w-8 bg-brand-green" />
               <span className="text-brand-green font-black tracking-widest text-[11px] uppercase">HQHOME Vietnam</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-8 leading-tight tracking-tighter uppercase">
              VÌ SAO CHỌN <br />
              <span className="text-brand-green">HQHOME?</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-10 opacity-80 font-medium">
              HQHome không chỉ cung cấp sản phẩm mà còn mang đến giải pháp tối ưu cho không gian của bạn. Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực cánh kính nội thất cao cấp.
            </p>
            <button className="btn-primary group h-14 px-10">
              TÌM HIỂU THÊM 
              <LucideIcons.ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Column: Reasons Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {reasons.map((reason, index) => {
              const IconComponent = (LucideIcons as any)[reason.icon] || LucideIcons.HelpCircle;
              return (
                <motion.div 
                  key={reason.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-green/5 rounded-sm flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-black text-brand-dark mb-2 uppercase tracking-wider group-hover:text-brand-green transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-brand-muted text-[14px] leading-relaxed opacity-80">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Row - Full Width Background */}
      <div className="bg-brand-green py-12 md:py-16 relative z-10 shadow-2xl shadow-brand-green/20 w-full">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center group border-r last:border-r-0 border-white/10 md:px-4">
                <div className="text-4xl md:text-6xl font-heading font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] font-black text-white/60 uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
