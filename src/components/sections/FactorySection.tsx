import React from "react";
import { Button } from "@/components/ui/Button";
import { Check, ChevronRight } from "lucide-react";
import { factoryPoints } from "@/lib/data";
import { PlaceholderImage } from "../ui/PlaceholderImage";

export const FactorySection = () => {
  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-brand-dark to-brand-dark" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="text-white order-2 lg:order-1">
            <div className="mb-4 flex items-center gap-3">
               <div className="h-0.5 w-8 bg-brand-green" />
               <span className="text-brand-green font-bold tracking-widest text-xs uppercase">Sản xuất trực tiếp</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-10 leading-tight uppercase tracking-tighter">
              CHẤT LƯỢNG <br />
              <span className="text-brand-green">TẠO NIỀM TIN</span>
            </h2>
            
            <ul className="grid gap-6 mb-12">
              {factoryPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[17px] text-white/80 font-medium leading-relaxed group-hover:text-white transition-colors">{point}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/lien-he" className="h-14 px-10 group shadow-xl shadow-brand-green/10">
              THAM QUAN XƯỞNG <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl border-4 border-white/5 z-10 group">
              <PlaceholderImage text="Xưởng sản xuất HQHOME" aspectRatio="h-full w-full" />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:opacity-0 transition-opacity duration-700" />
            </div>
            
            {/* Decorative background frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-brand-green opacity-20 z-0 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
