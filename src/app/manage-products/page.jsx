"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Load products from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setProducts(stored);
  }, []);

  // Delete item (supports id or _id)
  const handleDelete = (id) => {
    const updated = products.filter(
      (p) => (p.id || p._id) !== id
    );

    setProducts(updated);
    localStorage.setItem("cartProducts", JSON.stringify(updated));
  };

  return (
    <ProtectedRoute>
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Manage Products</h1>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border rounded-xl shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => {
                const key = product.id || product._id || `${product.title}-${index}`;
                const viewId = product.id || product._id;

                return (
                  <tr key={key} className="border-b">

                    {/* Image */}
                    <td className="px-4 py-3">
                      <img
                        src={product.imageUrl || product.image}
                        className="w-16 h-16 rounded-lg object-cover"
                        alt={product.title}
                      />
                    </td>

                    {/* Title */}
                    <td className="px-4 py-3">{product.title}</td>

                    {/* Price */}
                    <td className="px-4 py-3">{product.price} TK</td>

                    {/* Actions */}
                    <td className="px-4 py-3 flex gap-3">

                      {/* View Button */}
                      <Link
                        href={`/products/${viewId}`}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        View
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(viewId)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>

          {products.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
