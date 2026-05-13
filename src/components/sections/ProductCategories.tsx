import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export const ProductCategories = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <SectionHeading 
          title="DANH MỤC SẢN PHẨM" 
          subtitle="Giải pháp toàn diện cho không gian sống hiện đại và sang trọng"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
