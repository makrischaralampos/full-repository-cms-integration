interface ProjectPageProps {
  readonly params: {
    readonly slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Project: {params.slug}</h1>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        Details about the project will go here. This page will eventually display screenshots,
        links, and tech stack info.
      </p>
    </section>
  )
}
