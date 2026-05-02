import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
  n: string
}

function pad(i: number): string {
  return String(i + 1).padStart(3, "0")
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))
  const parsed = files.map((file) => {
    const slug = file.replace(".mdx", "")
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8")
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      content,
    }
  })
  return parsed
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((p, i) => ({ ...p, n: pad(i) }))
}

export function getPost(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) ?? null
}
