import Link from "next/link"
import type { BlogPost } from "@/lib/blog"
import { Tag } from "@/components/tag"

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative transition-transform duration-[250ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <span className="pointer-events-none absolute -top-[7px] left-[22px] z-10 bg-background px-1.5 font-mono text-[10px] tracking-[0.04em] text-ink-4 tabular-nums">
        {post.n}
      </span>
      <Link
        href={`/blog/${post.slug}`}
        className="block rounded-[10px] border border-border bg-card px-[26px] py-[22px] transition-[border-color,box-shadow] duration-200 ease-out group-hover:border-ink-4 group-hover:shadow-[0_6px_24px_-16px_rgba(0,0,0,0.25)]"
      >
        <div className="flex min-w-0 flex-col gap-2">
          <h3
            className="m-0 text-[21px] font-medium leading-[1.25] tracking-[-0.015em] transition-colors duration-200 group-hover:text-primary"
            style={{ textWrap: "pretty" }}
          >
            {post.title}
          </h3>
          {post.description && (
            <p
              className="m-0 text-[15px] leading-[1.55] text-ink-3"
              style={{ textWrap: "pretty" }}
            >
              {post.description}
            </p>
          )}
          {post.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
