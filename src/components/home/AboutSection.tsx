import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Aerosol Manufacturing",
    description: "Own-brand and contract aerosol production.",
  },
  {
    title: "Mirror Production",
    description: "Truck and commercial vehicle mirrors.",
  },
  {
    title: "Nationwide Distribution",
    description: "Workshops, retailers, and distributors across Pakistan.",
  },
  {
    title: "Contract Manufacturing",
    description: "Open to contract filling and private label.",
  },
];

export function AboutSection() {
  return (
    <section className="py-10 sm:py-20 bg-brand-gray-50">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
              About the Group
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              A Group Built on Manufacturing and Distribution
            </h2>
            <div className="w-16 h-0.5 bg-brand-blue-500 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Zenki is a Karachi-based group operating across aerosol
              manufacturing, auto care, truck parts and mirrors, and import
              sourcing from China.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In-house manufacturing capabilities in Karachi cover aerosol
              production and mirror manufacturing. Distribution reaches the
              full country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We serve workshops, body builders, fleet operators, and
              distributors across Pakistan.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-brand-blue-500 font-semibold hover:text-brand-blue-600 transition-colors text-sm"
            >
              About the Group
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Features with blue bar accents */}
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-brand-blue-500 pl-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
