import PageWrapper from '@/app/components/PageWrapper'

export default function Home() {
  return (
    <PageWrapper>
      <section className="text-center py-28 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-500 dark:text-blue-400">
          Hello, I'm Charalampos <span className="animate-wave inline-block">👋</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A frontend developer passionate about building fast, accessible, and modern web
          experiences.
        </p>
      </section>
    </PageWrapper>
  )
}
