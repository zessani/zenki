import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="bg-white min-h-screen">
      <div className="px-6 sm:px-12 lg:px-20 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-brand-blue-500 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/products"
            className="hover:text-brand-blue-500 transition-colors"
          >
            Products
          </Link>
          <ChevronRight size={14} />
          <span className="text-brand-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product image placeholder */}
          <div className="aspect-square bg-brand-blue-50 rounded-md flex items-center justify-center lg:sticky lg:top-24">
            <div className="text-center p-12">
              <div className="w-24 h-24 rounded-md bg-brand-blue-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-brand-blue-500 text-4xl font-bold">Z</span>
              </div>
              <p className="text-brand-blue-600 font-semibold text-lg">
                {product.name}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Image coming soon
              </p>
            </div>
          </div>

          {/* Details */}
          <div>
            <Badge className="mb-4">{product.category}</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue-900 mb-2 leading-tight">
              {product.name}
            </h1>
            <div className="w-12 h-0.5 bg-brand-blue-500 mb-4" />
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {product.tagline}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-brand-gray-900 uppercase tracking-wide mb-3">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <span
                      key={v}
                      className="border border-brand-blue-200 text-brand-blue-600 px-4 py-1.5 rounded-md text-sm font-medium"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-brand-blue-900 mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-brand-blue-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="border-t border-gray-100 pt-8 mb-8">
              <p className="text-brand-blue-900 font-semibold mb-1">
                Interested in this product?
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Contact us for pricing, availability, and bulk orders.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 bg-brand-blue-900 text-white px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded font-semibold hover:bg-brand-blue-600 transition-colors duration-200"
              >
                Enquire About This Product
              </Link>
            </div>

            {/* Usage */}
            <div>
              <h3 className="text-lg font-bold text-brand-blue-900 mb-4">
                How to Use
              </h3>
              <ol className="space-y-3">
                {product.usage.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-md bg-brand-blue-500 text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
