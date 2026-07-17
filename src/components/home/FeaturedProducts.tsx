/* eslint-disable @next/next/no-html-link-for-pages */
import { products } from "@/lib/products";
import ProductCard from "../../app/products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="py-25 bg-linear-to-b from-white to-[#faf8f5]">
      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#C8A96A]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C8A96A]">
              Curated Selection
            </span>
            <span className="h-px w-12 bg-[#C8A96A]" />
          </div>
          <h2 className="font-extrabold text-4xl tracking-tight text-gray-900 sm:text-5xl">
            Featured <span className="text-[#C8A96A]">Collections</span>
          </h2>
          <p className="max-w-md text-sm font-light text-gray-500">
            Discover our handpicked selection of premium pieces
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p, index) => (
            <div 
              key={p.id} 
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#C8A96A]/20 via-transparent to-[#C8A96A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white">
                <ProductCard product={p} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/products"
            className="group relative overflow-hidden border border-gray-200 px-10 py-3.5 text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#C8A96A]"
          >
            <span className="absolute inset-0 bg-[#C8A96A] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
            <span className="relative  text-gray-700 group-hover:text-white transition-colors duration-300">
              View All Collections
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}