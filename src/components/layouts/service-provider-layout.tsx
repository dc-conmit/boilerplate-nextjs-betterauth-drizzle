import { BaseLayout } from "./shared/base-layout";

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
