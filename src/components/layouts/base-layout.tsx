interface BaseLayoutProps {
  children: React.ReactNode,
  title: string,
}

export function BaseLayout({ children, title }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex">
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
