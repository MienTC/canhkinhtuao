"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import { Check, ChevronRight, MessageCircle, ShoppingCart, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  // Sample gallery
  const gallery = [
    product.image || "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-muted overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
            <Link href="/" className="hover:text-brand-green transition-colors">Trang chủ</Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/san-pham" className="hover:text-brand-green transition-colors">Sản phẩm</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-brand-dark">{product.name}</span>
          </nav>
          
          <div className="flex items-center gap-4">
             <Link href="/san-pham" className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 text-brand-muted hover:text-brand-green transition-colors">
               <ArrowLeft size={14} /> Quay lại
             </Link>
             <button className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 text-brand-muted hover:text-brand-green transition-colors">
               <Share2 size={14} /> Chia sẻ
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Left: Gallery (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden bg-brand-bg shadow-2xl border border-gray-100 group">
              {gallery[activeImage] ? (
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ) : (
                <PlaceholderImage text={product.name} aspectRatio="h-full w-full" />
              )}
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6 z-10">
                 <div className="bg-brand-green text-white text-[10px] font-black px-4 py-2 uppercase tracking-[0.3em] shadow-2xl">
                   HQHOME PREMIMUM
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-4">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300",
                    activeImage === i 
                      ? "border-brand-green shadow-lg scale-105 z-10" 
                      : "border-gray-100 opacity-60 hover:opacity-100 hover:border-brand-green/30"
                  )}
                >
                  {img ? (
                    <Image src={img} alt={`${product.name} ${i}`} fill className="object-cover" sizes="15vw" />
                  ) : (
                    <div className="w-full h-full bg-brand-bg flex items-center justify-center">
                       <span className="text-xs text-brand-muted font-black opacity-30">{i + 1}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info (5 columns) */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex items-center gap-3">
               <div className="h-0.5 w-8 bg-brand-green" />
               <span className="text-brand-green font-bold tracking-widest text-xs uppercase">{product.subtitle}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-4 leading-[1.1] uppercase tracking-tighter">
              HỆ VÁCH TRƯỢT 4 CÁNH LIÊN KẾT <br />
              <span className="text-brand-green">KHÔNG RAY DƯỚI</span>
            </h1>
            
            <p className="text-brand-muted text-lg mb-10 leading-relaxed opacity-80 italic">
              {product.description || "Giải pháp vách ngăn không gian hiện đại, sang trọng, vận hành êm ái. Không ray dưới, tối ưu thẩm mỹ và an toàn."}
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-dark flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Ưu điểm vượt trội
              </h3>
              <ul className="grid gap-4">
                {product.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-brand-dark font-bold text-[15px] group">
                    <div className="flex-shrink-0 w-6 h-6 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mt-0.5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
              <Button className="h-16 px-12 gap-3 flex-grow shadow-xl shadow-brand-green/20">
                <ShoppingCart size={20} /> MUA NGAY
              </Button>
              <Button variant="outline" className="h-16 px-12 gap-3 flex-grow border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500">
                <MessageCircle size={20} /> LIÊN HỆ ZALO
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Specs & Details */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
           {/* Technical Specs (5 columns) */}
           <div className="lg:col-span-5">
              <h3 className="text-2xl font-heading font-black text-brand-dark mb-10 uppercase tracking-tight flex items-center gap-4">
                THÔNG SỐ KỸ THUẬT
                <div className="h-1 flex-grow bg-brand-bg relative">
                   <div className="absolute left-0 top-0 h-full w-12 bg-brand-green" />
                </div>
              </h3>
              <div className="overflow-hidden rounded-sm border border-gray-100 shadow-sm">
                <table className="w-full text-left">
                  <tbody>
                    {product.specs?.map((spec, i) => (
                      <tr key={i} className={cn("transition-colors hover:bg-brand-green/5", i % 2 === 0 ? "bg-white" : "bg-brand-bg/30")}>
                        <td className="py-5 px-8 font-black text-brand-dark text-xs uppercase tracking-widest border-b border-gray-50 w-1/2">
                          {spec.label}
                        </td>
                        <td className="py-5 px-8 text-brand-muted text-[14px] border-b border-gray-50">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>

           {/* Content Details (7 columns) */}
           <div className="lg:col-span-7">
              <h3 className="text-2xl font-heading font-black text-brand-dark mb-10 uppercase tracking-tight flex items-center gap-4">
                CHI TIẾT SẢN PHẨM
                <div className="h-1 flex-grow bg-brand-bg relative">
                   <div className="absolute left-0 top-0 h-full w-12 bg-brand-green" />
                </div>
              </h3>
              <div className="prose prose-lg max-w-none text-brand-muted leading-loose font-medium opacity-80">
                <p className="mb-8">
                  Hệ vách trượt 4 cánh liên kết không ray dưới HQHome là giải pháp tối ưu cho các không gian hiện đại như phòng khách, phòng bếp, văn phòng hay showroom. Sản phẩm sử dụng nhôm Anode cao cấp kết hợp kính cường lực, mang đến sự sang trọng, bền bỉ, an toàn và khả năng vận hành êm ái vượt trội.
                </p>
                <div className="relative aspect-video my-12 rounded-sm overflow-hidden shadow-2xl group">
                   <PlaceholderImage text="Hình ảnh thực tế thi công vách kính Slim" aspectRatio="h-full w-full" />
                   <div className="absolute inset-0 bg-brand-dark/20 group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                <p className="mb-8">
                  Thiết kế không ray dưới giúp không gian liền mạch, dễ dàng vệ sinh, phù hợp với mọi phong cách nội thất từ tối giản đến cao cấp. Với công nghệ giảm chấn hiện đại, việc đóng mở trở nên nhẹ nhàng, không gây tiếng ồn, đảm bảo tuổi thọ lâu dài cho sản phẩm.
                </p>
                <p>
                  Tại HQHome, mỗi sản phẩm đều được kiểm định khắt khe trước khi xuất xưởng. Chúng tôi cam kết sử dụng phụ kiện chính hãng, bảo hành lên tới 5 năm cho phần khung nhôm và cơ cấu chuyển động.
                </p>
              </div>
           </div>
        </div>

        {/* CTA Banner Section */}
        <div className="relative rounded-sm overflow-hidden bg-brand-dark p-12 md:p-20 text-center shadow-2xl">
           {/* Background Overlay */}
           <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-brand-dark to-brand-dark" />
           </div>
           
           <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-6 px-4 py-1.5 border border-brand-green/30 rounded-full"
              >
                 <span className="text-brand-green font-black text-[10px] uppercase tracking-[0.4em]">Hotline: 038 892 3333</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                CẦN TƯ VẤN <br />
                <span className="text-brand-green">GIẢI PHÁP PHÙ HỢP?</span>
              </h2>
              
              <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                Đội ngũ kỹ thuật của HQHome luôn sẵn sàng hỗ trợ bạn lựa chọn giải pháp nội thất tối ưu nhất, phù hợp với mọi phong cách kiến trúc.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="h-16 px-12 group">
                   GỌI NGAY: 038 892 3333 <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white hover:text-brand-dark transition-all duration-500">
                   CHAT ZALO NGAY
                </Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
