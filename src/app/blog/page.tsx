export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Articles, tutorials, and thoughts about frontend development and career growth.
      </p>

      {/* Placeholder blog list */}
      <div className="space-y-4">
        <article className="border-b pb-6 dark:border-gray-700 hover:brightness-105 transition">
          <h2 className="text-2xl font-semibold text-foreground">Getting Started with Next.js</h2>
          <p className="text-sm text-gray-500">April 2025 · 3 min read</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            A beginner-friendly guide to setting up a modern web app with Next.js and Tailwind.
          </p>
        </article>
      </div>
    </section>
  )
}
