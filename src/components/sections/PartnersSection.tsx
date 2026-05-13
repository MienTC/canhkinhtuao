"use client";
import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/lib/data";

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-brand-bg overflow-hidden">
      <div className="container-custom">
        <SectionHeading title="ĐỐI TÁC & KHÁCH HÀNG" className="mb-12" />
        
        <div className="relative flex items-center">
          {/* Duplicate for seamless loop */}
          <div className="flex animate-scroll hover:pause">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-40 md:w-52 h-20 mx-8 relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-sm"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-gray-400 font-bold text-sm uppercase">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
