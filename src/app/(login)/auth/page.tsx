"use client"

import { usePathname } from "next/navigation";
import SignIn from "./sign-in/page";
import SignUp from "./sign-up/page";

export default function AuthPage() {
  const pathname = usePathname();

  return pathname === "/auth/sign-in" ? <SignIn /> : <SignUp />;
}
