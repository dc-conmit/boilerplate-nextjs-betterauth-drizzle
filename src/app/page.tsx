import { auth } from '@/lib/auth/auth';
import { signOut } from '@/lib/auth/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Home Tracker</h1>
        
        {session?.user ? (
          <div className="space-y-4">
            <p>Logged in as: {session.user.email}</p>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <p>Please sign in to continue.</p>
        )}
      </div>
    </main>
  );
}
