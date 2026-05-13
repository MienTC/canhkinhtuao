import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HQHome Vietnam | Vách Kính & Hệ Nhôm Nội Thất Cao Cấp",
  description: "HQHome Vietnam - Đơn vị sản xuất và thi công vách kính Slim, cửa nhôm nội thất cao cấp cho Penthouse, Villa và dự án sang trọng.",
  keywords: "vách kính slim, cửa nhôm nội thất, hqhome, nội thất cao cấp, vách kính không ray",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${playfair.variable} ${beVietnam.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
