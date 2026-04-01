import { ShieldCheck, Package, Factory, Truck } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    value: "PCSIR",
    label: "Certified auto care products",
  },
  {
    icon: Factory,
    value: "In-House",
    label: "Manufacturing",
  },
  {
    icon: Package,
    value: "50+",
    label: "Products and parts",
  },
  {
    icon: Truck,
    value: "Nationwide",
    label: "Reach",
  },
];

export function TrustSignals() {
  return (
    <section className="py-10 sm:py-20 bg-brand-gray-50">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="mb-12">
          <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            The Group at a Glance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Scale and Capability
          </h2>
          <div className="w-16 h-0.5 bg-brand-blue-500" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {signals.map((s) => (
            <div key={s.value}>
              <s.icon size={22} className="text-brand-blue-500 mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {s.value}
              </div>
              <p className="text-gray-600 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
