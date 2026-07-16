"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, color: string, size: string) => void;
  removeFromCart: (productId: number, color: string, size: string) => void;
  updateQuantity: (productId: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const savedCart = localStorage.getItem("velora_cart");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error("Error parsing cart data", e);
        }
      }
    }
  }, [isMounted]);

  const saveCartToStorage = (items: CartItem[]) => {
    setCartItems(items);
    if (typeof window !== "undefined") {
      localStorage.setItem("velora_cart", JSON.stringify(items));
    }
  };

  const addToCart = (product: Product, quantity: number, color: string, size: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedColor === color &&
        item.selectedSize === size
    );

    const updatedCart = [...cartItems];

    if (existingItemIndex > -1) {
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + quantity,
      };
    } else {
      updatedCart.push({ product, quantity, selectedColor: color, selectedSize: size });
    }

    saveCartToStorage(updatedCart);
  };

  const removeFromCart = (productId: number, color: string, size: string) => {
    const updatedCart = cartItems.filter(
      (item) =>
        !(
          item.product.id === productId &&
          item.selectedColor === color &&
          item.selectedSize === size
        )
    );
    saveCartToStorage(updatedCart);
  };

  const updateQuantity = (productId: number, color: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    const updatedCart = cartItems.map((item) =>
      item.product.id === productId &&
      item.selectedColor === color &&
      item.selectedSize === size
        ? { ...item, quantity }
        : item
    );
    saveCartToStorage(updatedCart);
  };

  const clearCart = () => {
    saveCartToStorage([]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (!isMounted) {
    return (
      <CartContext.Provider
        value={{
          cartItems: [],
          addToCart,
          removeFromCart,
          updateQuantity,
          clearCart,
          totalItemsCount: 0,
          totalPrice: 0,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}