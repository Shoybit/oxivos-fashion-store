import { CartProvider } from "@/context/CartContext";
import "@/app/globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export const metadata = {
  title: "Velora",
  description: "E-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-black antialiased">
        <CartProvider>
          <Navbar />
          
          <div className="flex-1">
            {children}
          </div>
          
          <Footer></Footer>

        </CartProvider>
      </body>
    </html>
  );
}