import Link from "next/link";
import { Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="bg-white border-t border-gray-100 py-10 sm:py-20">
      <div className="px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to partner with us?
        </h2>
        <p className="text-gray-700 text-base max-w-xl mx-auto mb-8">
          Reach out for wholesale, contract manufacturing, truck parts, or
          sourcing enquiries.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-blue-900 text-white px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-base rounded-md font-bold hover:bg-brand-blue-600 transition-colors duration-200"
        >
          <Mail size={18} />
          Partner with Us
        </Link>
      </div>
    </section>
  );
}
