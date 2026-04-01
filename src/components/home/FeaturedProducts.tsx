import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="px-6 sm:px-12 lg:px-20">
        <SectionHeader
          title="From Our Auto Care Range"
          subtitle="A selection from the Zenki product line."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-brand-blue-500 text-brand-blue-500 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded font-semibold hover:bg-brand-blue-500 hover:text-white transition-colors duration-200"
          >
            View All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
