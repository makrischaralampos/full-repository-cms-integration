export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400">
        A collection of personal and client projects showcasing my work.
      </p>

      {/* Placeholder cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 transition-shadow hover:shadow-md bg-white/5">
          <h3 className="font-semibold text-xl mb-1">Portfolio Website</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A responsive personal site built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
