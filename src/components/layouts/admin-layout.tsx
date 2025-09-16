import { BaseLayout } from "./shared/base-layout"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <BaseLayout title="Admin Portal">
      {children}
    </BaseLayout>
  )
}
