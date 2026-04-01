import { Factory, FlaskConical, Truck, Users } from "lucide-react";

const facts = [
  {
    icon: Factory,
    title: "Aerosol Production Plant",
    description:
      "Canister filling, valve assembly, labelling, and packing. Own-brand and contract production.",
  },
  {
    icon: FlaskConical,
    title: "Mirror Manufacturing Unit",
    description:
      "Truck and commercial vehicle mirrors. Component assembly to finished product.",
  },
  {
    icon: Truck,
    title: "Nationwide Distribution",
    description:
      "Products and parts reach workshops, retailers, fleet operators, and distributors across Pakistan.",
  },
  {
    icon: Users,
    title: "Contract Manufacturing",
    description:
      "Both facilities are available for contract and private label arrangements.",
  },
];

export function FacilitySection() {
  return (
    <section className="py-10 sm:py-20 bg-brand-gray-50">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="mb-12">
          <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Facilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Facilities
          </h2>
          <div className="w-16 h-0.5 bg-brand-blue-500 mb-4" />
          <p className="text-gray-700 max-w-xl">
            Our manufacturing facilities in Karachi cover aerosol production
            and mirror manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {facts.map((f) => (
            <div key={f.title} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mt-0.5">
                <f.icon size={22} className="text-brand-blue-500" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
