"use client";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import * as LucideIcons from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const WorkProcess = () => {
  return (
    <section className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          title="QUY TRÌNH LÀM VIỆC" 
          subtitle="Chuyên nghiệp – Minh bạch – Tận tâm trong từng công đoạn"
        />
        
        <div className="relative mt-20">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-7 left-0 w-full h-0.5 bg-brand-green/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.HelpCircle;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-14 h-14 bg-white border-2 border-brand-green rounded-full flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shadow-md">
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-green text-white text-[10px] font-black rounded-full flex items-center justify-center border-4 border-brand-bg">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-[15px] font-black text-brand-dark mb-3 uppercase tracking-widest group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed opacity-80 px-4">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
