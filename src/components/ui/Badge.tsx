import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-brand-blue-100 text-brand-blue-900 uppercase tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
}
