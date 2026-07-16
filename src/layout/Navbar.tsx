"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
        
          <Link href="/" className="text-2xl font-bold tracking-wide">
            <span className="text-gray-900">VEL</span>
            <span className="text-[#C8A96A]">ORA</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-[#C8A96A]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
            <span className="rounded-full bg-[#c8a96a] px-2 py-0.5 text-xs font-semibold text-black">
              0
            </span>
          </div>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black transition-colors duration-200 hover:text-gray-600"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 transition hover:text-[#C8A96A]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}