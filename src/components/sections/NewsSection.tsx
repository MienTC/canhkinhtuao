import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/ui/NewsCard";
import { newsItems } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export const NewsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            title="TIN TỨC & KIẾN THỨC" 
            centered={false}
            className="mb-0"
          />
          <Link href="/tin-tuc" className="hidden md:inline-flex items-center gap-1 text-brand-green font-bold hover:gap-2 transition-all">
            XEM TẤT CẢ <ChevronRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/tin-tuc" className="inline-flex items-center justify-center w-full gap-1 text-brand-green font-bold py-3 border border-brand-green rounded-sm">
            XEM TẤT CẢ <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
