"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import { loginWithEmail, googleLogin } from "@/firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Email + Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginWithEmail(email, password);
      router.push("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push("/");
    } catch (error) {
      setError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-100">
      <div className="hidden md:block relative">
        <Image src="/auth.png" fill alt="Login Image" className="object-cover" />
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

          {error && <p className="text-red-600 mt-3 text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded mt-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mt-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg mt-5 hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border p-3 rounded-lg mt-4 hover:bg-gray-50"
          >
            <FcGoogle size={26} /> Continue with Google
          </button>

          <p className="text-center mt-4">
            Don&apos;t have an account?
            <a href="/signup" className="text-blue-600 underline"> Create Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
