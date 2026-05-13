export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  slug: string;
  icon?: string;
  features?: string[];
  specs?: SpecRow[];
  description?: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  slug: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}
