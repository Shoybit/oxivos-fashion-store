export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  description: string;
}

export const products: Product[] = [
  { id: 1, name: "Casual Hoodie", category: "Hoodie", price: 1100, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600", rating: 4.1, colors: ["Grey"], sizes: ["S", "M"], inStock: true, description: "..." },
  { id: 2, name: "Slim Fit Shirt", category: "Shirt", price: 1250, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600", rating: 4.0, colors: ["Blue"], sizes: ["S", "M"], inStock: true, description: "..." },
  { id: 3, name: "Premium Denim", category: "Jeans", price: 1850, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600", rating: 4.8, colors: ["Blue"], sizes: ["32", "34"], inStock: true, description: "..." },
  { id: 4, name: "Embroidered Kabli", category: "Kabli", price: 2490, image: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600", rating: 5.0, colors: ["Olive"], sizes: ["L", "XL"], inStock: false, description: "..." },
  { id: 5, name: "Summer T-Shirt", category: "T-Shirt", price: 590, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600", rating: 4.2, colors: ["White"], sizes: ["M", "L"], inStock: true, description: "..." },
  { id: 6, name: "Chino Pants", category: "Pants", price: 1650, image: "https://images.unsplash.com/photo-1624378439575-d8705adc7865?q=80&w=600", rating: 4.3, colors: ["Khaki"], sizes: ["30", "32"], inStock: true, description: "..." },
  { id: 7, name: "Formal Blazer", category: "Blazer", price: 4500, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600", rating: 4.7, colors: ["Black"], sizes: ["L"], inStock: true, description: "..." },
  { id: 8, name: "Leather Shoes", category: "Footwear", price: 3200, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600", rating: 4.6, colors: ["Brown"], sizes: ["40", "41"], inStock: true, description: "..." },
  { id: 9, name: "Winter Jacket", category: "Jacket", price: 2990, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600", rating: 4.4, colors: ["Navy"], sizes: ["M", "XL"], inStock: true, description: "..." },
  { id: 10, name: "Silk Panjabi", category: "Panjabi", price: 3500, image: "https://images.unsplash.com/photo-1626214343132-237a8581e9f1?q=80&w=600", rating: 4.9, colors: ["Gold"], sizes: ["M", "L"], inStock: true, description: "..." },
  { id: 11, name: "Running Sneakers", category: "Footwear", price: 2200, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600", rating: 4.5, colors: ["Red"], sizes: ["42"], inStock: true, description: "..." },
];