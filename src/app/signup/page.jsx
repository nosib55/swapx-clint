"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ⭐ Register user using YOUR backend API
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const newUser = {
      name,
      email,
      password,
      photo,
    };

    try {
      const res = await fetch("https://swapx-server.onrender.com/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      // After signup → automatically login
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
      
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  const googleSignup = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">

      {/* LEFT IMAGE */}
      <div className="hidden md:block relative">
        <Image src="/auth.png" fill alt="Signup Image" className="object-cover" />
      </div>

      {/* RIGHT FORM */}
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
            onClick={googleSignup}
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
