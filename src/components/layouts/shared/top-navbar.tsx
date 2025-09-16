"use client"

import { Bell, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { authClient } from "@/lib/auth/auth-client"

export function TopNavbar() {
  return (
    <div className="hidden sm:block h-16 bg-background border-b z-40">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <h1 className="text-2xl font-bold">Home Tracker</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <Link href="/settings" className="p-2 rounded-full hover:bg-muted">
            <Settings className="h-5 w-5" />
          </Link>
          <button
            className="p-2 rounded-full hover:bg-muted"
            onClick={() => authClient.signOut()}
            title="Sign out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}