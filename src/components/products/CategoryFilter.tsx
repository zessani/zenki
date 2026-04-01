"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProductCategory } from "@/types/product";

interface CategoryFilterProps {
  categories: ProductCategory[];
  selected: string;
}

export function CategoryFilter({ categories, selected }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSelect(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  const allOptions = ["All", ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
      {allOptions.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={cn(
            "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 whitespace-nowrap",
            selected === cat || (cat === "All" && selected === "All")
              ? "bg-brand-blue-500 text-white border-brand-blue-500"
              : "bg-white text-brand-gray-900 border-gray-300 hover:border-brand-blue-500 hover:text-brand-blue-500"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
