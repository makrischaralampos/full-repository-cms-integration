import { sanityClient } from '@/../lib/sanity.client'
import { getProjectsQuery } from '@/../lib/queries'
import { urlFor } from '@/../lib/sanity.image'
import Image from 'next/image'
import PageWrapper from '@/app/components/PageWrapper'

export default async function ProjectsPage() {
  const projects = await sanityClient.fetch(getProjectsQuery)

  return (
    <PageWrapper>
      <section className="space-y-10">
        <h1 className="text-4xl font-bold">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <div key={project._id} className="p-6 border rounded-xl dark:border-gray-700">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
              {project.image?.asset && (
                <Image
                  src={urlFor(project.image).width(600).url()}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
