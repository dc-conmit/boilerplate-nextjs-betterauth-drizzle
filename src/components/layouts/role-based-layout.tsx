import { EUserRole } from "@/lib/db/schema/user"
import { AdminLayout } from "./admin-layout"
import { UserLayout } from "./user-layout"
import { auth } from "@/lib/auth/auth"
import { headers } from "next/headers"

interface RoleBasedLayoutProps {
  children: React.ReactNode
}

export async function RoleBasedLayout({ children }: RoleBasedLayoutProps) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session?.user) {
    return <>{children}</>
  }

  switch (session.user.role) {
    case EUserRole.Admin:
      return <AdminLayout>{children}</AdminLayout>
    case EUserRole.User:
      return <UserLayout>{children}</UserLayout>
    default:
      return <>{children}</>
  }
}