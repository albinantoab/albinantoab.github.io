import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

export default function Home() {
  const posts = getAllPosts()
  const [latest, ...rest] = posts

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 md:px-6 py-16">
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 md:px-6 py-16">
      {latest && (
        <section aria-label="Latest post">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
            Latest
          </h2>
          <BlogCard post={latest} featured />
        </section>
      )}

      {rest.length > 0 && (
        <section aria-label="All posts" className="mt-8 border-t border-border pt-8">
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
            All Posts
          </h2>
          <div className="divide-y divide-border mt-2">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
