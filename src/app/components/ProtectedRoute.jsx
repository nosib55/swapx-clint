"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "./FirebaseAuthProvider";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // Redirect if user not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  // If not logged in, show nothing (or loading)
  if (!user) return null;

  return <>{children}</>;
}
