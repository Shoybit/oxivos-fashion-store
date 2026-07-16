"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import Container from "@/layout/Container";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white py-16">
      <Container>
       
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            Our Collection
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-base">
            Discover the perfect blend of modern design and premium craftsmanship.
          </p>
        </div>

    
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 uppercase ${
                selectedCategory === category
                  ? "bg-[#C8A96A] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-950">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"} in{" "}
            <span className="font-semibold text-[#C8A96A]">{selectedCategory}</span>
          </p>
        </div>

    
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">No products found in this category.</p>
          </div>
        )}
      </Container>
    </main>
  );
}