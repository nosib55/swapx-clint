"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);

  // ⭐ Active link style
  const isActive = (path) =>
    pathname === path
      ? "bg-blue-600 text-white px-3 py-1 rounded-md"
      : "text-gray-700 hover:bg-blue-100 px-3 py-1 rounded-md";

  return (
    <nav className="w-full sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <img src="/logo.png" alt="logo" className="w-40" />
        </Link>

        {/* ⭐ Desktop Navigation (shows only on large screens) */}
        <div className="hidden lg:flex gap-6 text-base font-medium">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/products" className={isActive("/products")}>Products</Link>
          <Link href="/add-product" className={isActive("/add-product")}>Add Product</Link>
          <Link href="/manage-products" className={isActive("/manage-products")}>Manage</Link>
          <Link href="/login" className={isActive("/login")}>Login</Link>
        </div>

        {/* ⭐ Mobile + Tablet Hamburger */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpenMobile(!openMobile)}
        >
          ☰
        </div>
      </div>

      {/* ⭐ Mobile + Tablet Dropdown Menu */}
      {openMobile && (
        <div className="lg:hidden bg-white border-t shadow-md flex flex-col px-6 py-4 space-y-4 text-base">

          <Link href="/" className={isActive("/")}>Home</Link>

          <Link href="/products" className={isActive("/products")}>Products</Link>

          <Link href="/add-product" className={isActive("/add-product")}>Add Product</Link>

          <Link href="/manage-products" className={isActive("/manage-products")}>Manage</Link>

          <Link href="/login" className={isActive("/login")}>Login</Link>
          
        </div>
      )}
    </nav>
  );
}
