"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../loading";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // Search + Filter
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Sorting
  const [sortOrder, setSortOrder] = useState("");

  // Image Preview
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    loadProducts();
  }, []);

  // UNIQUE LOCATIONS
  const locations = [...new Set(products.map((p) => p.location))];

  // FILTER + SORT LOGIC
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesLocation = locationFilter
        ? product.location === locationFilter
        : true;

      return matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      if (sortOrder === "LOW") return a.price - b.price;
      if (sortOrder === "HIGH") return b.price - a.price;
      return 0;
    });

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center">All Products</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore all available second-hand products on SWAP-X
      </p>

      {/* Search + Location + Sort */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="border p-3 rounded-lg w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Location Filter */}
        <select
          className="border p-3 rounded-lg w-full"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border p-3 rounded-lg w-full"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="LOW">Price: Low to High</option>
          <option value="HIGH">Price: High to Low</option>
        </select>
      </div>

      {/* Loader */}
      {products.length === 0 && <Loading />}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {filteredProducts.map((product) => (
          <div
            key={product._id || product.id}
            className="bg-white rounded-xl border hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* IMAGE (FULL – no cropping) */}
            <div
              className="w-full bg-gray-100 cursor-pointer overflow-hidden"
              onClick={() => setPreviewImage(product.imageUrl)}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-auto object-contain hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 leading-tight">
                {product.title}
              </h3>

              <p className="text-orange-600 font-bold text-xl mt-2">
                ৳{product.price}
              </p>

              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {product.shortDescription}
              </p>

              <Link href={`/products/${product._id || product.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE LIGHTBOX */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
