import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types";
import { Calendar, ArrowRight } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

export const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <article className="card-white overflow-hidden group flex flex-col h-full hover:-translate-y-2">
      {/* Image Area */}
      <Link href={`/tin-tuc/${item.slug}`} className="relative aspect-[16/10] block overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <PlaceholderImage text={item.category} aspectRatio="h-full w-full" />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-brand-green text-white text-[10px] font-black px-3 py-1.5 uppercase tracking-[0.2em] shadow-lg">
            {item.category}
          </span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="flex items-center gap-2 text-brand-muted text-[11px] font-bold uppercase tracking-widest mb-4 opacity-60">
          <Calendar size={14} className="text-brand-green" />
          {item.date}
        </div>
        
        {/* Title */}
        <Link href={`/tin-tuc/${item.slug}`} className="block mb-6">
          <h3 className="text-lg font-black text-brand-dark leading-tight group-hover:text-brand-green transition-colors line-clamp-2 uppercase tracking-tight">
            {item.title}
          </h3>
        </Link>
        
        {/* Read More */}
        <div className="mt-auto pt-6 border-t border-gray-50">
          <Link 
            href={`/tin-tuc/${item.slug}`} 
            className="inline-flex items-center gap-2 text-[11px] font-black text-brand-green uppercase tracking-[0.2em] group/link"
          >
            Xem thêm 
            <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
};
