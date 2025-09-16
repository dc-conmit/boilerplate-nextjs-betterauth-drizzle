import { headers } from 'next/headers'
import Dashboard from './dashboard/page'
import { auth } from '@/lib/auth/auth'
import SignIn from './auth/sign-in/page'

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  
  if (!session) {
    return (
      <main className="min-h-screen">
        <SignIn />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Dashboard />
    </main>
  )
}
