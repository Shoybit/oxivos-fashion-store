/* eslint-disable @next/next/no-img-element */
import Container from "@/layout/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-20 md:py-32">
      <div className="absolute top-0 right-0 -z-10 h-125 w-125 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#C8A96A]">
              New Collection 2026
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:leading-[1.15]">
              Elevate Your <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent">
                Everyday Style
              </span>
            </h1>
            <p className="mx-auto max-w-md text-base text-gray-600 sm:text-lg lg:mx-0">
              Discover the latest trends in modern fashion. Crafted for those who appreciate premium quality and timeless elegance.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/products"
                className="w-full rounded-md bg-black px-8 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-gray-900 sm:w-auto"
              >
                Shop Collection
              </Link>
              <Link
                href="/products"
                className="group relative overflow-hidden rounded-md border border-gray-300 px-8 py-3.5 text-center text-sm font-semibold text-gray-700 shadow-sm w-full sm:w-auto hover:border-[#C8A96A]"
              >
                <span className="absolute inset-0 bg-[#C8A96A] transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
                <span className="relative group-hover:text-white transition-colors duration-300">Learn More</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 text-left border-t border-gray-200/60 max-w-sm mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-gray-900">12k+</p>
                <p className="text-xs text-gray-500">Premium Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">99%</p>
                <p className="text-xs text-gray-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-xs text-gray-500">Fast Support</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Premium Gold Accent Frame */}
            <div className="absolute -top-3 -right-3 -z-10 h-full w-full rounded-xl border-2 border-[#C8A96A]/30" />
            <div className="absolute -bottom-3 -left-3 -z-10 h-full w-full rounded-xl border-2 border-[#C8A96A]/20" />
            
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-2xl aspect-4/5">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
                alt="Velora Fashion Store Hero Image"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
            
            <div className="absolute -right-4 bottom-10 hidden rounded-lg bg-white/95 backdrop-blur-sm p-3 shadow-xl sm:flex items-center gap-3 border border-[#C8A96A]/20">
              <div className="rounded-full bg-[#C8A96A]/10 p-1.5 text-[#C8A96A]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 tracking-wide">Premium Quality</p>
                <p className="text-[10px] text-gray-500">Curated Selection</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}