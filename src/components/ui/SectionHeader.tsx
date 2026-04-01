import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold mb-3",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center mb-4">
        <div className="h-0.5 w-12 bg-brand-blue-500" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-base max-w-xl mx-auto",
            light ? "text-slate-300" : "text-gray-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
