import { NavLink, Product, Project, Reason, Stat, Step, NewsItem, Partner } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "/gioi-thieu" },
  {
    label: "Sản Phẩm",
    href: "/san-pham",
    children: [
      { label: "Vách Lùa Slim", href: "/san-pham/vach-lua-slim" },
      { label: "Cửa Thông Phòng", href: "/san-pham/cua-thong-phong" },
      { label: "Tủ Full Kính", href: "/san-pham/tu-full-kinh" },
      { label: "Cánh Kính Tủ Áo", href: "/san-pham/canh-kinh-tu-ao" },
      { label: "Đợt Kính & Tủ Rượu", href: "/san-pham/dot-kinh-tu-ruou" },
      { label: "Phụ Kiện", href: "/san-pham/phu-kien" },
    ],
  },
  { label: "Công Trình", href: "/cong-trinh" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Tin Tức", href: "/tin-tuc" },
  { label: "Liên Hệ", href: "/lien-he" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Vách Lùa Slim",
    subtitle: "Không ray dưới",
    image: "",
    slug: "vach-lua-slim",
    features: [
      "Không ray dưới - Di chuyển êm ái",
      "Nhôm Anode nhập khẩu cao cấp",
      "Kính cường lực 8mm - An toàn, bền bỉ",
      "Thiết kế tối giản - Sang trọng - Hiện đại",
      "Thi công nhanh chóng - Bảo hành dài hạn",
    ],
    specs: [
      { label: "Độ dày khung", value: "16mm x 44mm" },
      { label: "Kích thước cửa", value: "700mm ≤ W ≤ 1200mm; 1000mm ≤ H ≤ 3000mm" },
      { label: "Độ dày kính", value: "8mm (Kính cường lực)" },
      { label: "Chất liệu nhôm", value: "Nhôm Anode nhập khẩu" },
      { label: "Màu sắc", value: "Đen mờ, Xám ghi, Vàng Champagne, Trắng sứ" },
      { label: "Phụ kiện", value: "Ray treo trên, bộ giảm chấn, tay nắm, gioăng kính cao cấp" },
      { label: "Ứng dụng", value: "Phòng khách, phòng bếp, văn phòng, showroom, biệt thự, căn hộ cao cấp" },
      { label: "Bảo hành", value: "5 năm" },
    ],
    description: "Hệ vách trượt 4 cánh liên kết không ray dưới HQHome là giải pháp tối ưu cho các không gian hiện đại như phòng khách, phòng bếp, văn phòng hay showroom. Sản phẩm sử dụng nhôm Anode cao cấp kết hợp kính cường lực, mang đến sự sang trọng, bền bỉ, an toàn và khả năng vận hành êm ái vượt trội.",
  },
  {
    id: "2",
    name: "Cửa Thông Phòng",
    subtitle: "Hệ cửa Slim cao cấp",
    image: "",
    slug: "cua-thong-phong",
  },
  {
    id: "3",
    name: "Tủ Full Kính",
    subtitle: "Sang trọng – Hiện đại",
    image: "",
    slug: "tu-full-kinh",
  },
  {
    id: "4",
    name: "Cánh Kính Tủ Áo",
    subtitle: "Tinh tế – Đẳng cấp",
    image: "",
    slug: "canh-kinh-tu-ao",
  },
  {
    id: "5",
    name: "Đợt Kính & Tủ Rượu",
    subtitle: "Tích hợp đèn LED",
    image: "",
    slug: "dot-kinh-tu-ruou",
  },
  {
    id: "6",
    name: "Phụ Kiện",
    subtitle: "Chính hãng cao cấp",
    image: "",
    slug: "phu-kien",
  },
];

export const reasons: Reason[] = [
  { id: 1, title: "Xưởng Sản Xuất Trực Tiếp", description: "Chủ động chất lượng & tiến độ", icon: "Factory" },
  { id: 2, title: "Nhôm Anode Nhập Khẩu", description: "Bền đẹp, chống oxy hóa cao cấp", icon: "Shield" },
  { id: 3, title: "Kính Cường Lực Cao Cấp", description: "An toàn - Bền bỉ, cách âm, cách nhiệt", icon: "Layers" },
  { id: 4, title: "Thi Công Chuyên Nghiệp", description: "Đội ngũ giàu kinh nghiệm toàn quốc", icon: "HardHat" },
  { id: 5, title: "Bảo Hành Dài Hạn", description: "Bảo hành chính hãng lên đến 5 năm", icon: "Clock" },
  { id: 6, title: "Giá Cả Cạnh Tranh", description: "Tối ưu chi phí cho khách hàng", icon: "Tag" },
];

export const stats: Stat[] = [
  { id: 1, value: "5+", label: "Năm Kinh Nghiệm" },
  { id: 2, value: "500+", label: "Công Trình" },
  { id: 3, value: "1000+", label: "Khách Hàng" },
  { id: 4, value: "100%", label: "Khách Hàng Hài Lòng" },
];

export const projects: Project[] = [
  { id: "p1", title: "Penthouse Hà Nội", subtitle: "Vách lùa Slim 4 cánh", image: "", category: "Penthouse" },
  { id: "p2", title: "Biệt thự Vinhomes", subtitle: "Tủ Full kính & Cánh kính tủ áo", image: "", category: "Biệt Thự" },
  { id: "p3", title: "Showroom Luxury", subtitle: "Vách ngăn & Cửa Slim", image: "", category: "Showroom" },
  { id: "p4", title: "Căn hộ cao cấp", subtitle: "Cửa thông phòng Slim", image: "", category: "Chung Cư" },
  { id: "p5", title: "Nhà phố hiện đại", subtitle: "Vách lùa Slim không ray", image: "", category: "Nhà Phố" },
];

export const processSteps: Step[] = [
  { number: "01", title: "TIẾP NHẬN", description: "Tiếp nhận yêu cầu từ khách hàng", icon: "MessageSquare" },
  { number: "02", title: "KHẢO SÁT", description: "Khảo sát hiện trạng, tư vấn giải pháp", icon: "Search" },
  { number: "03", title: "THIẾT KẾ", description: "Thiết kế 2D/3D, duyệt phương án", icon: "PenTool" },
  { number: "04", title: "SẢN XUẤT", description: "Sản xuất tại xưởng, đảm bảo chất lượng", icon: "Settings" },
  { number: "05", title: "THI CÔNG", description: "Thi công chuyên nghiệp, đúng tiến độ", icon: "Hammer" },
  { number: "06", title: "BẢO HÀNH", description: "Bảo hành – Bảo trì dài hạn", icon: "CheckCircle" },
];

export const newsItems: NewsItem[] = [
  { id: "n1", category: "Xu Hướng", date: "30/05/2024", title: "Xu hướng vách kính Slim 2024 được ưa chuộng nhất", slug: "xu-huong-vach-kinh-slim-2024", image: "" },
  { id: "n2", category: "Kiến Thức", date: "18/05/2024", title: "Vách lùa Slim không ray dưới có thực sự bền không?", slug: "vach-lua-slim-khong-ray-duoi-ben-khong", image: "" },
  { id: "n3", category: "So Sánh", date: "11/05/2024", title: "So sánh cửa Slim và cửa nhôm truyền thống", slug: "so-sanh-cua-slim-va-cua-nhom-truyen-thong", image: "" },
  { id: "n4", category: "Kinh Nghiệm", date: "10/05/2024", title: "Kinh nghiệm chọn kính tủ áo đẹp và bền", slug: "kinh-nghiem-chon-kinh-tu-ao", image: "" },
];

export const partners: Partner[] = [
  { id: "pt1", name: "Vinhomes", logo: "" },
  { id: "pt2", name: "Sun Group", logo: "" },
  { id: "pt3", name: "Ecopark", logo: "" },
  { id: "pt4", name: "VinGroup", logo: "" },
  { id: "pt5", name: "Hoàng Huy", logo: "" },
  { id: "pt6", name: "Delta", logo: "" },
  { id: "pt7", name: "Taisei Oncho", logo: "" },
  { id: "pt8", name: "Unicons", logo: "" },
];

export const factoryPoints = [
  "Máy móc hiện đại, công nghệ tiên tiến",
  "Sản phẩm đạt tiêu chuẩn chất lượng cao",
  "Chủ động tiến độ – Giá thành tối ưu",
  "Đáp ứng mọi đơn hàng số lượng lớn",
];
