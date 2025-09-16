import { BaseLayout } from "./shared/base-layout";

interface UserLayoutProps {
  children: React.ReactNode
}

export function UserLayout({ children }: UserLayoutProps) {
  return (
    <BaseLayout title="User Portal">
      {children}
    </BaseLayout>
  );
}
