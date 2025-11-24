"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [openMobile, setOpenMobile] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  // Active link style
  const isActive = (path) =>
    pathname === path
      ? "bg-blue-600 text-white px-3 py-1 rounded-md"
      : "text-gray-700 hover:bg-blue-100 px-3 py-1 rounded-md";

  const avatar = session?.user?.image || "/default-avatar.png";

  return (
    <nav className="w-full sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-40" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 items-center text-base font-medium">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/about" className={isActive("/about")}>About</Link>
          <Link href="/products" className={isActive("/products")}>Products</Link>
          <Link href="/add-product" className={isActive("/add-product")}>Add Product</Link>
          <Link href="/manage-products" className={isActive("/manage-products")}>Manage</Link>

          {/* Not logged in → Login button goes to /login */}
          {!session && (
            <Link
              href="/login"
              className="text-gray-700 hover:bg-blue-100 px-3 py-1 rounded-md"
            >
              Login
            </Link>
          )}

          {/* Logged in → Show Avatar */}
          {session && (
            <div className="relative">
              <Image
                src={avatar}
                width={40}
                height={40}
                alt="user"
                className="rounded-full cursor-pointer border"
                onClick={() => setOpenUserMenu(!openUserMenu)}
              />

              {openUserMenu && (
                <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg border py-2">
                  <p className="px-4 py-2 text-gray-700 font-medium">
                    {session.user.name}
                  </p>

                  

                  <button
                    onClick={() => signOut()}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpenMobile(!openMobile)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="lg:hidden bg-white border-t shadow-md flex flex-col px-6 py-4 space-y-4 text-base">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/products" className={isActive("/products")}>Products</Link>
          <Link href="/add-product" className={isActive("/add-product")}>Add Product</Link>
          <Link href="/manage-products" className={isActive("/manage-products")}>Manage</Link>

          {/* MOBILE: Not logged in */}
          {!session && (
            <Link
              href="/login"
              className="text-gray-700 hover:bg-blue-100 px-3 py-1 rounded-md"
            >
              Login
            </Link>
          )}

          {/* MOBILE: Logged in */}
          {session && (
            <>
              <div className="flex items-center gap-3">
                <Image src={avatar} width={40} height={40} className="rounded-full" alt="user" />
                <p className="font-medium">{session.user.name}</p>
              </div>

              <button
                onClick={() => signOut()}
                className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
