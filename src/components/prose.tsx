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
        // Mobile: 16px font, 1.5 line-height
        "text-base leading-normal",
        // Desktop: 18px font, 1.6 line-height
        "md:text-lg md:leading-[1.6]",
        className
      )}
    >
      {children}
    </div>
  )
}
