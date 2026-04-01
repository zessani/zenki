export type ProductCategory =
  | "Engine Care"
  | "Cooling System"
  | "Fuel System"
  | "Exterior Care"
  | "Interior Care"
  | "Tire & Wheel"
  | "Lubricants"
  | "Air Care";

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  usage: string[];
  category: ProductCategory;
  image: string;
  featured: boolean;
  benefits: string[];
  variants?: string[];
}
