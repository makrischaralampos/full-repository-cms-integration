interface BlogPostPageProps {
  readonly params: {
    readonly slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">Blog Post: {params.slug}</h1>
      <p className="text-gray-600 dark:text-gray-400">This is a blog post content placeholder.</p>
    </article>
  )
}
