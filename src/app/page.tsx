import { getAllPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-[720px] px-8 pt-10 pb-6">
      <h2
        className="mb-9 text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-ink-2"
        style={{ textWrap: "pretty" }}
      >
        Product engineer building software end to end. Writing about what I learn along the way.
      </h2>
      {posts.length === 0 ? (
        <p className="text-ink-3">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-3.5">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
