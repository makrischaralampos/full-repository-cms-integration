import PageWrapper from '@/app/components/PageWrapper'

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="space-y-10">
        <div>
          <h1 className="text-4xl font-extrabold">Blog</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Articles, tutorials, and thoughts about frontend development and career growth.
          </p>
        </div>

        <div className="space-y-6">
          <article className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl transition hover:shadow-lg hover:bg-white/5">
            <h2 className="text-2xl font-semibold text-foreground">Getting Started with Next.js</h2>
            <p className="text-sm text-gray-500">April 2025 · 3 min read</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A beginner-friendly guide to setting up a modern web app with Next.js and Tailwind.
            </p>
          </article>
        </div>
      </section>
    </PageWrapper>
  )
}
