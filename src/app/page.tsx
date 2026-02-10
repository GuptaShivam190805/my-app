import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="mb-6 text-4xl font-bold">Welcome to StackIt</h1>

        <p className="mb-10 text-lg opacity-80">
          A community where developers ask questions, share knowledge, and grow together.
        </p>

        <div className="flex gap-4">
          <Link
            href="/questions"
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-80 dark:bg-white dark:text-black"
          >
            Browse Questions
          </Link>

          <Link
            href="/questions/ask"
            className="rounded-lg border px-6 py-3 transition hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </main>
  );
}