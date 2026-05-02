import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { getAllPosts, getPost } from "@/lib/blog"
import { Tag } from "@/components/tag"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Not Found" }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-[720px] px-8 pt-14 pb-10">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 py-1.5 font-mono text-[11.5px] tracking-[0.02em] text-ink-3 transition-colors hover:text-foreground"
      >
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5"
        >
          ←
        </span>
        back
      </Link>

      <header className="mt-6">
        <h1
          className="mb-4 text-[38px] font-medium leading-[1.15] tracking-[-0.02em]"
          style={{ textWrap: "pretty" }}
        >
          {post.title}
        </h1>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </header>

      <div className="prose mt-9 max-w-none text-[19px] leading-[1.65] text-ink-2 [&_p]:mb-[1.2em] [&_p]:text-wrap-pretty">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: { light: "github-light", dark: "github-dark" },
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  )
}
