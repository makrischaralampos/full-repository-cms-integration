import PageWrapper from '@/app/components/PageWrapper'

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="space-y-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-7">
          I'm a software engineer focused on building clean and user-friendly frontend experiences.
          I enjoy working with React, TypeScript, Tailwind CSS, and exploring modern CMS tools like
          Sanity.io.
        </p>
      </section>
    </PageWrapper>
  )
}
