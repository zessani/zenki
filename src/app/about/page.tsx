import { CompanyStory } from "@/components/about/CompanyStory";
import { FacilitySection } from "@/components/about/FacilitySection";
import { CertificationSection } from "@/components/about/CertificationSection";
import { TrustSignals } from "@/components/about/TrustSignals";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "About",
  description:
    "Zenki Group is a Karachi-based manufacturing, distribution and trading group. Two manufacturing facilities, four business divisions, PCSIR-certified products.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-white border-b border-gray-100 py-8 sm:py-20">
        <div className="px-6 sm:px-12 lg:px-20">
          <SectionHeader
            title="About Zenki Group"
            subtitle="Manufacturing, distribution and trading from Karachi."
          />
        </div>
      </div>

      <CompanyStory />
      <FacilitySection />
      <CertificationSection />
      <TrustSignals />
    </div>
  );
}
