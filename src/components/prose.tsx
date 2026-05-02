import { cn } from "@/lib/utils"

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "text-base leading-[1.55] md:text-[19px] md:leading-[1.65] text-ink-2",
        className
      )}
    >
      {children}
    </div>
  )
}
