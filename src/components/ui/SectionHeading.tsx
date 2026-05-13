import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        centered ? "text-center flex flex-col items-center" : "text-left",
        className
      )}
    >
      <div className={cn(
        "flex items-center gap-3 mb-4",
        centered && "justify-center"
      )}>
        <div className="h-[2px] w-8 bg-brand-green" />
        <span className={cn("font-black tracking-[0.3em] text-[10px] uppercase", light ? "text-brand-green" : "text-brand-green")}>
          HQHOME PREMIMUM
        </span>
        <div className="h-[2px] w-8 bg-brand-green" />
      </div>
      
      <h2 className={cn(
        "text-3xl md:text-5xl font-heading font-black uppercase leading-tight tracking-tighter",
        light ? "text-white" : "text-brand-dark"
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "mt-5 text-base md:text-lg max-w-2xl font-medium opacity-60 leading-relaxed italic",
          light ? "text-white/70" : "text-brand-muted"
        )}>
          {subtitle}
        </p>
      )}
      
      <div className={cn(
        "h-1.5 w-20 bg-brand-green mt-8 rounded-full opacity-10",
        centered && "mx-auto",
        !centered && "ml-0"
      )} />
    </div>
  );
};
