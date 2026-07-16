/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
      <div className="relative aspect-3/4 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs text-gray-400 uppercase">{product.category}</span>
        <h3 className="text-sm font-semibold text-gray-900 mt-1">{product.name}</h3>
        <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className={i < Math.floor(product.rating) ? "fill-[#C8A96A] text-[#C8A96A]" : "text-gray-200"} />
            ))}
        </div>
        <div className="mt-4 flex justify-between items-center border-t pt-3">
          <span className="font-bold text-black">৳{product.price}</span>
          <Link href={`/products/${product.id}`} className="text-xs border px-2 py-1 rounded bg-[#C8A96A] text-white transition">View</Link>
        </div>
      </div>
    </div>
  );
}