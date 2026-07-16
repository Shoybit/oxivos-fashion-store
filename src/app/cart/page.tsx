/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Container from "@/layout/Container";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50/50 py-16">
      <Container>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#111827] mb-8">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center shadow-sm">
            <div className="rounded-full bg-[#C8A96A]/10 p-4 text-[#C8A96A] mb-4">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Your cart is empty!</h2>
            <p className="mt-2 text-sm text-gray-500 max-w-sm">
              Looks like you haven&apos;t added anything yet. Explore our latest collections.
            </p>
            <Link
              href="/products"
              className="mt-6 rounded-lg bg-[#C8A96A] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-950 text-sm sm:text-base line-clamp-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{item.product.category}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                          Color: {item.selectedColor}
                        </span>
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                          Size: {item.selectedSize}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-3 sm:pt-0">
                    
                    <div className="flex items-center rounded-md border border-gray-200 bg-white overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                        className="p-2 text-gray-500 hover:bg-gray-50 hover:text-black transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-bold text-gray-900 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                        className="p-2 text-gray-500 hover:bg-gray-50 hover:text-black transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span className="text-base font-bold text-gray-950 min-w-20 text-right">
                      ৳{item.product.price * item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        removeFromCart(item.product.id, item.selectedColor, item.selectedSize)
                      }
                      className="text-gray-400 hover:text-red-500 p-1.5 transition"
                      title="Remove Item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-2">
                <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C8A96A] hover:underline">
                  <ArrowLeft size={16} /> Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-xs font-semibold text-red-500 hover:underline"
                >
                  Clear Entire Cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-950 border-b pb-3">Order Summary</h3>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-950">৳{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery Charge</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>

                <div className="border-t pt-3 flex justify-between font-bold text-gray-950 text-base">
                  <span>Total Amount</span>
                  <span className="text-[#C8A96A]">৳{totalPrice}</span>
                </div>

                <button
                  onClick={() => alert("Checkout system is ready dynamically on frontend!")}
                  className="w-full mt-2 rounded-lg bg-black py-4 text-center text-sm font-bold uppercase tracking-wider text-white hover:bg-gray-900 transition-colors shadow-md"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>

          </div>
        )}
      </Container>
    </main>
  );
}