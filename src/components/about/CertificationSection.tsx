import { ShieldCheck } from "lucide-react";

export function CertificationSection() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-blue-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Certified Quality
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              PCSIR Certified
            </h2>
            <div className="w-16 h-0.5 bg-brand-blue-500 mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              The Pakistan Council of Scientific &amp; Industrial Research (PCSIR)
              is Pakistan&apos;s national testing and certification body for
              industrial products. Certification requires independent laboratory
              testing against defined standards for composition, safety, and
              performance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zenki&apos;s auto care products carry PCSIR certification.
              The full Zenki Auto Care range has been independently tested and
              verified against Pakistani and international standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For wholesale buyers, contract manufacturing clients, and
              distribution partners, PCSIR certification provides an auditable
              quality baseline.
            </p>
          </div>

          {/* Cert details */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-md bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={28} className="text-brand-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">PCSIR</h3>
                <p className="text-gray-600 text-sm">
                  Pakistan Council of Scientific &amp; Industrial Research
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              {[
                { label: "Issuing body", value: "Government of Pakistan" },
                { label: "Scope", value: "Chemical composition & safety" },
                { label: "Testing", value: "Independent laboratory" },
              ].map((row) => (
                <div key={row.label} className="flex gap-3 border-t border-gray-100 pt-4">
                  <span className="font-semibold text-gray-900 w-28 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-700">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
