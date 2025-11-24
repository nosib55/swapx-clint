"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

// Firebase functions
import { registerWithEmail, googleLogin } from "@/firebase/auth";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Email Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Create user in Firebase
      const userCredential = await registerWithEmail(email, password);

      const user = userCredential.user;

      // Optional: Save additional fields to your backend
      await fetch("https://swapx-server.onrender.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          photo,
          uid: user.uid,
        }),
      });

      router.push("/login");
    } catch (err) {
      setError("Failed to sign up. Try again.");
      console.log(err);
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await googleLogin();
      const user = result.user;

      // Optional: save user to your backend
      await fetch("https://swapx-server.onrender.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        }),
      });

      router.push("/");
    } catch (err) {
      setError("Google signup failed.");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">

      {/* Left Image */}
      <div className="hidden md:block relative">
        <Image src="/auth.png" fill alt="Signup Image" className="object-cover" />
      </div>

      {/* Signup Form */}
      <div className="flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>

          {error && <p className="text-red-600 mt-3 text-center">{error}</p>}

          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded mt-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Photo URL"
              className="w-full p-3 border rounded mt-4"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded mt-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mt-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg mt-5 hover:bg-green-700"
            >
              Create Account
            </button>
          </form>

          <button
            onClick={handleGoogleSignup}
            className="w-full flex items-center justify-center gap-3 border p-3 rounded-lg mt-4 hover:bg-gray-50"
          >
            <FcGoogle size={26} /> Continue with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?
            <a href="/login" className="text-blue-600 underline"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
