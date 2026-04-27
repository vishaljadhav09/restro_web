import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ya Basa – Premium Seafood Restaurant | Kharadi, Baner & Magarpatta, Pune",
  description: "Experience the finest coastal seafood at Ya Basa – authentic Malvani curries, tandoor platters, fresh prawns & signature specials in Pune.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="warm-bg min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
