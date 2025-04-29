import { BaseLayout } from "./base-layout";

interface ServiceProviderLayoutProps {
  children: React.ReactNode
}

export function ServiceProviderLayout({ children }: ServiceProviderLayoutProps) {
  return (
    <BaseLayout title="Service Provider Portal">
      {children}
    </BaseLayout>
  );
}
