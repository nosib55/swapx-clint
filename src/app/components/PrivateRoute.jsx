"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function PrivateRoute({ children }) {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) redirect("/login");

  return children;
}
