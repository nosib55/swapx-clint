"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import ProtectedRoute from "../components/ProtectedRoute";
import { auth } from "../../firebase/config";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [details, setDetails] = useState("");
  const [sellerNumber, setSellerNumber] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("Medium");

  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (!user) {
      Swal.fire("Error", "Please login first!", "error");
      return;
    }

    const newProduct = {
      title,
      price: Number(price),
      imageUrl: image,
      shortDescription,
      fullDescription: details,
      sellerNumber,
      location,
      priority,
      date,
      email: user.email, // ⭐ Fireabse user email add
    };

    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Failed to add product");

      Swal.fire({
        title: "Success!",
        text: "Product added successfully.",
        icon: "success",
      });

      // Reset form
      setTitle("");
      setPrice("");
      setImage("");
      setShortDescription("");
      setDetails("");
      setSellerNumber("");
      setLocation("");
      setPriority("Medium");
      setDate(today);

    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "Failed to add product.",
        icon: "error",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Add New Product</h1>
        <p className="text-gray-600 text-center mt-2">
          Create a new listing on SWAP-X
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">

          {/* PRODUCT TITLE */}
          <div>
            <label className="font-semibold">Product Title</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: Used Camera"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="font-semibold">Price (TK)</label>
            <input
              type="number"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: 1500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="font-semibold">Image URL</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: https://example.com/product.jpg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          {/* SELLER NUMBER */}
          <div>
            <label className="font-semibold">Seller Phone Number</label>
            <input
              type="tel"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: 017XXXXXXXX"
              value={sellerNumber}
              onChange={(e) => setSellerNumber(e.target.value)}
              required
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="font-semibold">Location</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: Dhaka"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* PRIORITY */}
          <div>
            <label className="font-semibold">Priority</label>
            <div className="mt-2 flex gap-6">
              {["High", "Medium", "Low"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    checked={priority === level}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="font-semibold">Date</label>
            <input
              type="date"
              className="w-full mt-2 p-3 border rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* SHORT DESCRIPTION */}
          <div>
            <label className="font-semibold">Short Description</label>
            <textarea
              className="w-full mt-2 p-3 border rounded-lg"
              rows="3"
              placeholder="Short overview..."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* FULL DESCRIPTION */}
          <div>
            <label className="font-semibold">Full Description</label>
            <textarea
              className="w-full mt-2 p-3 border rounded-lg"
              rows="5"
              placeholder="Write full details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white transition
              ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
