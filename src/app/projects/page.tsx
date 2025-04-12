import PageWrapper from '@/app/components/PageWrapper'

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="space-y-10">
        <div>
          <h1 className="text-4xl font-extrabold">Projects</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            A collection of personal and client projects showcasing my work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg bg-white/5">
            <h3 className="font-semibold text-xl mb-1">Portfolio Website</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A responsive personal site built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
