"use client";

import Link from "next/link";
import Container from "./Container"; 
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-[#111827] text-gray-400">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
          
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-wide text-white">
              VEL<span className="text-[#C8A96A]">ORA</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Experience the perfect blend of modern luxury and timeless premium craftsmanship. Elevate your lifestyle with Velora.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-[#C8A96A] transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A96A] transition-colors">All Products</Link></li>
              <li><Link href="/cart" className="hover:text-[#C8A96A] transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Customer Care</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#C8A96A] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[#C8A96A] transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#C8A96A] transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#C8A96A] mt-0.5 shrink-0" />
                <span>Dhaka,Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#C8A96A] shrink-0" />
                <a href="tel:+880123456789" className="hover:text-[#C8A96A] transition-colors">+880 1234-567890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C8A96A] shrink-0" />
                <a href="mailto:info@velora.com" className="hover:text-[#C8A96A] transition-colors">support@velora.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center text-xs">
          <p>© {currentYear} <span className="text-white font-medium">VELORA</span>. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}