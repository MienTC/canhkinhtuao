"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { PlaceholderImage } from "./PlaceholderImage";
import { MoveRight, Package } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/san-pham/${product.slug}`} className="group h-full">
      <div className="card-white flex flex-col h-full overflow-hidden group-hover:border-brand-green group-hover:-translate-y-2 transition-all duration-500">
        {/* Image Area (Updated to aspect-[4/5] for a taller, larger and more premium look) */}
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-bg">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          ) : (
            <PlaceholderImage text={product.name} aspectRatio="h-full w-full" />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col items-center text-center flex-grow relative">
          <div className="w-12 h-12 bg-brand-green/5 text-brand-green rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
            <Package size={24} strokeWidth={1.5} />
          </div>

          {/* Product Name (Fully visible and vertically centered with a min-height wrapper to keep cards aligned) */}
          <div className="min-h-[44px] flex items-center justify-center w-full mb-2">
            <h3 className="text-[13px] md:text-[14px] font-black text-brand-dark uppercase tracking-wider group-hover:text-brand-green transition-colors line-clamp-2 text-center leading-snug">
              {product.name}
            </h3>
          </div>
          
          <p className="text-[13px] text-brand-muted italic opacity-80 mb-4 flex-grow">
            {product.subtitle}
          </p>

          <div className="pt-4 border-t border-gray-50 w-full mt-auto flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[11px] font-bold text-brand-green flex items-center gap-2 uppercase tracking-widest">
              Xem chi tiết <MoveRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
