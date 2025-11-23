"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SWAP-X
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/add-product" className="hover:text-blue-600 transition">Add Product</Link>
          <Link href="/manage-products" className="hover:text-blue-600 transition">Manage</Link>
          <Link href="/login" className="hover:text-blue-600 transition">Login</Link>
        </div>

        {/* Mobile hamburger button (optional) */}
        <div className="md:hidden text-3xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}
