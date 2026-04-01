import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const navLinks = [
  { href: "/#divisions", label: "Divisions" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-gray-50 border-t border-gray-200">
      <div className="px-6 sm:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.jpg"
              alt="Zenki Group"
              width={120}
              height={40}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Manufacturing, distribution and trading. Aerosol products, auto
              care, truck parts and mirrors. Karachi, Pakistan.
            </p>
            <p className="text-gray-600 text-sm">
              For wholesale, distribution, and manufacturing inquiries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-brand-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <a
              href="mailto:info@zenki-pk.com"
              className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand-blue-500 transition-colors mb-3"
            >
              <Mail size={16} />
              info@zenki-pk.com
            </a>
            <p className="text-gray-600 text-sm mb-4">
              No. 36/4A, Opposite Zoological Garden,<br />
              Murad Khan Rd, Karachi 74400, Pakistan
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/zenkiproducts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-blue-500 transition-colors"
                aria-label="Zenki on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/zenkiproducts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-blue-500 transition-colors"
                aria-label="Zenki on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-gray-500 text-xs flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Zenki Group. All rights reserved.</span>
          <span>Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
