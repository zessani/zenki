import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { top: "In-House", bottom: "Manufacturing" },
  { top: "Vertically", bottom: "Integrated" },
  { top: "50+", bottom: "Products" },
  { top: "PCSIR", bottom: "Certified" },
];

export function Hero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="px-6 sm:px-12 lg:px-20 py-12 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-widest mb-6">
            Zenki Group
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-3">
            Manufacturing.{" "}
            <br className="hidden sm:block" />
            Distribution.{" "}
            <br className="hidden sm:block" />
            Trading.
          </h1>
          <p className="text-lg font-light text-gray-600 mb-8">
            Vertically integrated operations from Karachi
          </p>
          <div className="w-16 h-0.5 bg-brand-blue-500 mb-10" />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#divisions"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue-900 text-white px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base rounded-md font-semibold hover:bg-brand-blue-600 transition-colors duration-200"
            >
              Our Divisions
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base rounded-md font-semibold hover:border-brand-blue-500 hover:text-brand-blue-500 transition-colors duration-200"
            >
              Partner with Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.bottom}>
                <div className="text-2xl font-bold text-gray-900">
                  {s.top}
                </div>
                <div className="text-sm text-gray-600 mt-0.5">{s.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
