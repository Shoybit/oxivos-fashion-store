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
  { 
    id: 1, 
    name: "Casual Hoodie", 
    category: "Hoodie", 
    price: 1100, 
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600", 
    rating: 4.1, 
    colors: ["Grey"], 
    sizes: ["S", "M"], 
    inStock: true, 
    description: "Stay cozy and stylish with this premium fleece hoodie. Designed with a modern relaxed fit, a soft brushed interior, and durable ribbed cuffs—perfect for everyday streetwear comfort." 
  },
  { 
    id: 2, 
    name: "Slim Fit Shirt", 
    category: "Shirt", 
    price: 1250, 
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600", 
    rating: 4.0, 
    colors: ["Blue"], 
    sizes: ["S", "M"], 
    inStock: true, 
    description: "A timeless wardrobe essential. Crafted from 100% breathable cotton, this slim-fit button-down offers a sharp silhouette, lightweight structure, and versatility for both office hours and weekend outings." 
  },
  { 
    id: 3, 
    name: "Premium Denim", 
    category: "Jeans", 
    price: 1850, 
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600", 
    rating: 4.8, 
    colors: ["Blue"], 
    sizes: ["32", "34"], 
    inStock: true, 
    description: "Engineered with high-quality authentic denim and a hint of stretch for ultimate flexibility. Featuring a classic straight-tapered cut, subtle washed detailing, and reinforced stitching for lasting durability." 
  },
  { 
    id: 4, 
    name: "Embroidered Kabli", 
    category: "Kabli", 
    price: 2490, 
    image: "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=600", 
    rating: 5.0, 
    colors: ["Olive"], 
    sizes: ["L", "XL"], 
    inStock: false, 
    description: "Celebrate festive elegance with this meticulously embroidered Kabli set. Made from a premium linen blend, it features intricate collar and placket details designed to deliver unmatched cultural style and comfort." 
  },
  { 
    id: 5, 
    name: "Summer T-Shirt", 
    category: "T-Shirt", 
    price: 590, 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600", 
    rating: 4.2, 
    colors: ["White"], 
    sizes: ["M", "L"], 
    inStock: true, 
    description: "Beat the heat with this ultra-lightweight, combed cotton crewneck t-shirt. Specially pre-shrunk for the perfect fit, it offers maximum breathability and a smooth feel against the skin all day long." 
  },
  { 
    id: 6, 
    name: "Chino Pants", 
    category: "Pants", 
    price: 1650, 
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600",
    rating: 4.3, 
    colors: ["Khaki"], 
    sizes: ["30", "32"], 
    inStock: true, 
    description: "The ideal bridge between smart and casual. These flat-front chinos are tailored from fine stretch twill, featuring secure pockets and an optimized tapered fit that transitions seamlessly from noon to night." 
  },
  { 
    id: 7, 
    name: "Formal Blazer", 
    category: "Blazer", 
    price: 4500, 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600", 
    rating: 4.7, 
    colors: ["Black"], 
    sizes: ["L"], 
    inStock: true, 
    description: "Command attention in any boardroom or formal event. Expertly structured with premium lining, sleek lapels, and a crisp regular fit, this blazer guarantees a sophisticated and executive appearance." 
  },
  { 
    id: 8, 
    name: "Leather Shoes", 
    category: "Footwear", 
    price: 3200, 
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600", 
    rating: 4.6, 
    colors: ["Brown"], 
    sizes: ["40", "41"], 
    inStock: true, 
    description: "Handcrafted from genuine top-grain leather. Equipped with a cushioned orthotic insole and a slip-resistant rubber outsole, these shoes seamlessly blend timeless luxury with modern ergonomic comfort." 
  },
  { 
    id: 9, 
    name: "Winter Jacket", 
    category: "Jacket", 
    price: 2990, 
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600", 
    rating: 4.4, 
    colors: ["Navy"], 
    sizes: ["M", "XL"], 
    inStock: true, 
    description: "Engineered to withstand the cold winds. This windproof outer layer features thick insulated padding, a sturdy heavy-duty zipper closure, and deep pockets to keep your hands warm and essentials safe." 
  },
  { 
    id: 10, 
    name: "Silk Sari", 
    category: "sari", 
    price: 3500, 
   image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
    rating: 4.9, 
    colors: ["Gold"], 
    sizes: ["M", "L"], 
    inStock: true, 
    description: "Indulge in pure luxury with this magnificent semi-silk Panjabi. Adorned with premium artisan-grade finishings, its subtle golden sheen makes it the absolute finest choice for weddings, Eid, and grand celebrations." 
  },
  { 
    id: 11, 
    name: "Running Sneakers", 
    category: "Footwear", 
    price: 2200, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600", 
    rating: 4.5, 
    colors: ["Red"], 
    sizes: ["42"], 
    inStock: true, 
    description: "Accelerate your performance with these reactive running sneakers. Designed with a flexible mesh upper for superior airflow and an ultra-responsive foam sole that absorbs high impacts effortlessly." 
  },
];