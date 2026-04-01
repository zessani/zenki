import { Suspense } from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import { products, categories } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export const metadata = {
  title: "Products",
  description:
    "Browse Zenki Pakistan's full auto care product catalog: engine care, exterior detailing, lubricants, and more. PCSIR certified.",
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const selected = category || "All";
  const filtered =
    selected === "All"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-8 sm:py-20">
        <div className="px-6 sm:px-12 lg:px-20">
          <SectionHeader
            title="Our Products"
            subtitle="Engine care, detailing, lubricants, and more. Made in Karachi."
          />
        </div>
      </div>

      {/* Division context banner */}
      <div className="bg-brand-blue-50 border-b border-brand-blue-100">
        <div className="px-6 sm:px-12 lg:px-20 py-3 flex items-center gap-2 text-sm text-brand-blue-900">
          <span>This catalogue covers the Zenki Auto Care division.</span>
          <Link
            href="/#divisions"
            className="font-semibold underline hover:text-brand-blue-600 transition-colors"
          >
            View all divisions
          </Link>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-10">
        {/* Download catalog + filter row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <a
            href="/zenki-catalog.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-brand-blue-500 text-brand-blue-500 px-5 py-2.5 rounded font-semibold text-sm hover:bg-brand-blue-500 hover:text-white transition-colors duration-200 self-start"
          >
            <Download size={16} />
            Download Product Catalog
          </a>
          <p className="text-sm text-gray-500">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {selected !== "All" ? ` in ${selected}` : ""}
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-8">
          <Suspense fallback={null}>
            <CategoryFilter categories={categories} selected={selected} />
          </Suspense>
        </div>

        {/* Grid */}
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
