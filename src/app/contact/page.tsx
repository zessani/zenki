import { Suspense } from "react";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zenki Group for wholesale, contract manufacturing, truck parts, import sourcing, or general enquiries. Email: info@zenki-pk.com",
};

async function ContactFormWrapper({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return <ContactForm productName={product} />;
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8 sm:py-20">
        <div className="px-6 sm:px-12 lg:px-20">
          <SectionHeader
            title="Contact Us"
            subtitle="Wholesale, contract manufacturing, truck parts, sourcing, or any other enquiry."
            light
          />
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Contact info sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-brand-blue-900 mb-4">
                Get in Touch
              </h3>
              <a
                href="mailto:info@zenki-pk.com"
                className="flex items-center gap-3 text-gray-700 hover:text-brand-blue-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
                  <Mail size={18} className="text-brand-blue-500" />
                </div>
                <span className="text-sm font-medium">info@zenki-pk.com</span>
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brand-blue-900 mb-4">
                Follow Us
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.facebook.com/zenkiproducts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-blue-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-md bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-brand-blue-500">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">@zenkiproducts</span>
                </a>
                <a
                  href="https://www.instagram.com/zenkiproducts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-blue-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-md bg-brand-blue-50 flex items-center justify-center group-hover:bg-brand-blue-100 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue-500">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">@zenkiproducts</span>
                </a>
              </div>
            </div>

            <div className="bg-brand-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-semibold text-brand-blue-900 text-sm mb-2">
                Business Enquiries
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                We work with distributors, retailers, fleet operators, body
                builders, and contract manufacturing clients. Use the form to
                describe your requirement and we will respond by email.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-brand-blue-900 mb-6">
              Send us a Message
            </h3>
            <Suspense fallback={null}>
              <ContactFormWrapper searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
