import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      {/* Placeholder image */}
      <div className="aspect-square bg-brand-gray-50 flex items-center justify-center mb-4 overflow-hidden rounded-md">
        <div className="text-center p-6">
          <div className="w-14 h-14 rounded-md bg-brand-blue-100 mx-auto mb-3 flex items-center justify-center">
            <span className="text-brand-blue-500 text-xl font-bold">Z</span>
          </div>
          <p className="text-gray-600 text-xs font-medium text-center leading-tight">
            {product.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <Badge className="mb-2">{product.category}</Badge>
        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 group-hover:text-brand-blue-500 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs line-clamp-2">{product.tagline}</p>
      </div>
    </Link>
  );
}
