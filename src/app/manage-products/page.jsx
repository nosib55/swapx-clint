"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../loading";

// Toastify
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  const auth = getAuth();

  // Detect Firebase User
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsub();
  }, []);

  // Load backend products
  useEffect(() => {
    if (!userEmail) return;

    async function loadMyProducts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products?email=${userEmail}`
        );

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.log("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    }

    loadMyProducts();
  }, [userEmail]);

  // Delete product with Toastify
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));

        Toastify({
          text: "Product deleted successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          close: true,
          backgroundColor: "#dc2626", // red
        }).showToast();
      } else {
        throw new Error();
      }
    } catch (err) {
      Toastify({
        text: "Failed to delete product!",
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        backgroundColor: "#f87171", // light red
      }).showToast();
    }
  };

  return (
    <ProtectedRoute>
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Manage My Products</h1>

        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <p className="text-center py-10 text-gray-500">
            No products found.
          </p>
        ) : (
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
                {products.map((product) => (
                  <tr key={product._id} className="border-b">
                    <td className="px-4 py-3">
                      <img
                        src={product.imageUrl}
                        className="w-16 h-16 rounded-lg object-cover"
                        alt={product.title}
                      />
                    </td>

                    <td className="px-4 py-3">{product.title}</td>
                    <td className="px-4 py-3">{product.price} TK</td>

                    <td className="px-4 py-3 flex gap-3">
                      <Link
                        href={`/products/${product._id}`}
                        className="px-3 py-1 bg-green-600 text-white rounded"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
