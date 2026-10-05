import TodoList from '@/components/TodoList';

// This is a Server Component (no 'use client' here) — it renders on the
// server, then hands off to the client component below for interactivity.
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center gap-2 px-6 py-16">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Task List
        </h1>
        <p className="mb-8 max-w-md text-center text-sm text-zinc-600 dark:text-zinc-400">
          Final Assignment: a simple app built with{' '}
          <strong>React</strong>, <strong>Next.js</strong>, and{' '}
          <strong>TypeScript</strong>.
        </p>

        <TodoList />

        <footer className="mt-12 text-xs text-zinc-400">
          Submitted by Steven David
        </footer>
      </main>
    </div>
  );
}
