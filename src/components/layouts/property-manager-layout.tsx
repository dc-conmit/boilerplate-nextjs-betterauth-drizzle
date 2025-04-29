import { BaseLayout } from "./shared/base-layout";

interface PropertyManagerLayoutProps {
  children: React.ReactNode
}

export function PropertyManagerLayout({ children }: PropertyManagerLayoutProps) {
  return (
    <BaseLayout title="Property Manager Portal">
      {children}
    </BaseLayout>
  );
}
