import { EUserRole } from "@/lib/db/schema/user"
import { PropertyManagerLayout } from "./property-manager-layout"
import { ServiceProviderLayout } from "./service-provider-layout"
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

interface RoleBasedLayoutProps {
  children: React.ReactNode
}

export async function RoleBasedLayout({ children }: RoleBasedLayoutProps) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return null;
  }

  switch (session.user.role) {
    case EUserRole.PropertyManager:
      return <PropertyManagerLayout>{children}</PropertyManagerLayout>
    case EUserRole.ServiceProvider:
      return <ServiceProviderLayout>{children}</ServiceProviderLayout>
    default:
      return <div>Invalid user role</div>
  }
}