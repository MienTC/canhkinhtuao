import React from "react";
import Link from "next/link";
import { navLinks, products } from "@/lib/data";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, Send, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-10 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
         <span className="text-[400px] font-black italic italic tracking-tighter">HQ</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Col 1: Brand Info (3 columns) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 bg-brand-green flex items-center justify-center rounded-sm shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-black text-2xl italic">HQ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black text-white tracking-tighter leading-none">HQ HOME</span>
                <span className="text-[11px] text-brand-green font-bold tracking-[0.3em] uppercase mt-0.5">Viet Nam</span>
              </div>
            </Link>
            <p className="text-white/50 text-[15px] leading-relaxed mb-10 max-w-sm">
              HQHome Vietnam tự hào là đơn vị cung cấp giải pháp nội thất cao cấp hàng đầu. Chúng tôi kiến tạo không gian sống hiện đại, đẳng cấp và tinh tế cho mọi ngôi nhà Việt.
            </p>
            <div className="flex gap-4">
              {[Facebook, Youtube, Instagram, Send].map((Icon, i) => (
                <Link key={i} href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/30 transition-all duration-300">
                  <Icon size={18} strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2: Categories (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-black uppercase tracking-[0.2em] mb-10 relative inline-block">
              DANH MỤC
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-brand-green" />
            </h4>
            <ul className="flex flex-col gap-5">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/san-pham/${p.slug}`} className="text-white/40 hover:text-brand-green transition-colors text-sm font-bold uppercase tracking-wider flex items-center gap-3 group">
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[15px] font-black uppercase tracking-[0.2em] mb-10 relative inline-block">
              LIÊN HỆ
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-brand-green" />
            </h4>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                   <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Hotline</p>
                  <p className="text-[14px] font-black group-hover:text-brand-green transition-colors">038 892 3333</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                   <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Email</p>
                  <p className="text-[14px] font-black group-hover:text-brand-green transition-colors">info@hqhome.com</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                   <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Địa chỉ</p>
                  <p className="text-[14px] font-black leading-relaxed group-hover:text-brand-green transition-colors">LK13, KĐT Tân Tây Đô, Hà Nội</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Map (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[15px] font-black uppercase tracking-[0.2em] mb-10 relative inline-block">
              BẢN ĐỒ
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-brand-green" />
            </h4>
            <div className="w-full h-48 rounded-sm overflow-hidden bg-white/5 border border-white/10 group shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6358327931326!2d105.7001!3d21.047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzQ5LjIiTiAxMDXCsDQyJzAwLjQiRQ!5e0!3m2!1svi!2s!4v1715560000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/30 font-bold uppercase tracking-widest">
            © 2024 HQHome Vietnam. Design by HQ Team.
          </p>
          <div className="flex gap-8">
            {["Chính sách bảo mật", "Điều khoản dịch vụ"].map((text, i) => (
              <Link key={i} href="#" className="text-[11px] text-white/30 font-bold uppercase tracking-widest hover:text-brand-green transition-colors">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
