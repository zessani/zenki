import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

const divisions = [
  {
    title: "Aerosol Manufacturing",
    description:
      "Aerosol filling and manufacturing in Karachi. Own-brand production, contract filling, and private label.",
    pills: ["Own Brand", "Contract Filling", "Private Label"],
  },
  {
    title: "Zenki Auto Care",
    description:
      "Engine care, exterior and interior detailing, lubricants, brake fluid, coolant. PCSIR certified.",
    pills: [
      "Z-4D Multi-Purpose",
      "Carburetor Cleaner",
      "Brake Fluid",
      "Coolant",
      "Dashboard Wax",
    ],
  },
  {
    title: "Truck Parts and Mirrors",
    description:
      "Truck mirror manufacturing and parts supply for body builders, fleet operators, and distributors.",
    pills: ["Mirror Manufacturing", "Truck Parts", "Body Builders", "Fleet Supply"],
  },
  {
    title: "Import and Sourcing",
    description:
      "Direct procurement from China for raw materials and finished goods.",
    pills: ["China Direct", "Raw Materials", "Parts Sourcing"],
  },
];

export function DivisionsSection() {
  return (
    <section id="divisions" className="py-10 sm:py-20 bg-brand-gray-50">
      <div className="px-6 sm:px-12 lg:px-20">
        <SectionHeader
          title="Our Divisions"
          subtitle="Integrated business operations under one group."
        />
        <div className="divide-y divide-gray-200">
          {divisions.map((d) => (
            <div key={d.title} className="py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
              <div className="sm:w-56 flex-shrink-0">
                <h3 className="font-bold text-gray-900 text-base">
                  {d.title}
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {d.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.pills.map((pill) => (
                    <Badge key={pill}>{pill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
