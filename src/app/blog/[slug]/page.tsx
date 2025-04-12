import PageWrapper from '@/app/components/PageWrapper'

interface BlogPostPageProps {
  readonly params: {
    readonly slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <PageWrapper>
      <article className="max-w-2xl space-y-6">
        <h1 className="text-3xl font-extrabold">Blog Post: {params.slug}</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          This is a blog post content placeholder.
        </p>
      </article>
    </PageWrapper>
  )
}
