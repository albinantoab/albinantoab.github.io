export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center h-[22px] px-2 font-mono text-[10.5px] tracking-wider lowercase rounded bg-[var(--tag-bg)] text-[var(--tag-ink)]">
      {children}
    </span>
  )
}
