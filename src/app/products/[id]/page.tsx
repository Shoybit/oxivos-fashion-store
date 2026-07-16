/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, use } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { Star, StarHalf, ArrowLeft, Check, AlertTriangle, ShoppingBag } from "lucide-react";
import Container from "@/layout/Container";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900">Product not found!</h2>
          <Link href="/products" className="mt-4 inline-flex items-center gap-2 text-[#C8A96A] hover:underline">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </Container>
      </div>
    );
  }

  if (!selectedColor && product.colors.length > 0) setSelectedColor(product.colors[0]);
  if (!selectedSize && product.sizes.length > 0) setSelectedSize(product.sizes[0]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={16} className="fill-[#C8A96A] text-[#C8A96A]" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} size={16} className="fill-[#C8A96A] text-[#C8A96A]" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-200" />);
      }
    }
    return stars;
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <Container>
        <Link
          href="/products"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {!product.inStock && (
              <div className="absolute top-4 right-4 rounded-full bg-red-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Sold Out
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-block rounded-full bg-[#C8A96A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C8A96A]">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
            </div>

            <div className="border-y border-gray-100 py-3">
              <span className="text-3xl font-extrabold text-[#111827]">
                ৳{product.price}
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Description</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {product.description || "Premium quality product designed for comfort and elegance. Perfect for festive occasions."}
              </p>
            </div>

            {product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                        selectedColor === color
                          ? "border-[#C8A96A] bg-[#C8A96A] text-white shadow-sm"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-bold transition-all ${
                        selectedSize === size
                          ? "border-black bg-black text-white shadow-sm"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              {product.inStock ? (
                <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600">
                  <Check size={16} strokeWidth={2.5} /> ✓ In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-sm font-bold text-red-500">
                  <AlertTriangle size={16} /> Out of Stock
                </span>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex w-full items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 md:w-[320px] ${
                  !product.inStock
                    ? "cursor-not-allowed bg-gray-100 text-gray-400 border border-gray-200"
                    : isAdded
                    ? "bg-emerald-600 text-white shadow-md scale-95"
                    : "bg-[#C8A96A] text-white hover:bg-black shadow-lg hover:shadow-xl"
                }`}
              >
                <ShoppingBag size={18} />
                {isAdded ? "Added To Cart!" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}