import Link from "next/link"
import type { BlogPost } from "@/lib/blog"
import { formatDate } from "@/lib/format"
import { Tag } from "@/components/tag"
import { Prose } from "@/components/prose"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group">
        <Link href={`/blog/${post.slug}`} className="block space-y-2">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          {post.description && (
            <Prose>
              <p>{post.description}</p>
            </Prose>
          )}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </Link>
      </article>
    )
  }

  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block py-3 -mx-3 px-3 rounded-md hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="group-hover:text-primary transition-colors">
            {post.title}
          </span>
          <time
            dateTime={post.date}
            className="text-sm text-muted-foreground shrink-0 tabular-nums"
          >
            {formatDate(post.date)}
          </time>
        </div>
        {post.tags.length > 0 && (
          <div className="flex gap-2 mt-1">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </Link>
    </article>
  )
}
