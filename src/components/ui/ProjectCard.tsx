"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { cn } from "@/lib/utils";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-xl border border-gray-100/10"
    >
      {/* Image / Placeholder Area */}
      <div className="absolute inset-0 bg-brand-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
             <PlaceholderImage text="" aspectRatio="h-full w-full" className="bg-transparent border-none opacity-20" />
             <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none flex items-center justify-center">
                <span className="text-6xl font-black italic rotate-[-15deg]">HQHOME</span>
             </div>
          </div>
        )}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      
      {/* Content at Bottom */}
      <div className="absolute inset-x-0 bottom-0 p-8 z-10">
        <div className="transition-transform duration-500 transform translate-y-12 group-hover:translate-y-0">
          {/* Category Tag */}
          <div className="mb-3">
             <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em] border-b border-[#d4af37]/50 pb-1">
               {project.category}
             </span>
          </div>
          
          {/* Title */}
          <h4 className="text-white text-xl md:text-2xl font-heading font-black mb-4 group-hover:text-brand-green transition-colors duration-300 tracking-tight leading-tight uppercase">
            {project.title}
          </h4>
          
          {/* Description (Subtitle) - Hidden initially, appears on hover */}
          <div className={cn(
            "transition-all duration-500 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden"
          )}>
            <p className="text-white/60 text-[13px] font-medium italic leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.subtitle}
            </p>
          </div>
          
          {/* Action Line */}
          <div className="h-0.5 w-0 bg-brand-green mt-6 group-hover:w-full transition-all duration-700 delay-200" />
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 border-0 group-hover:border-[1px] border-brand-green/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};
