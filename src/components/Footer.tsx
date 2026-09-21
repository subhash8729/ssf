import React from "react";
import Link from "next/link";
import FoundationLogo from "./FoundationLogo";
import { foundationDetails, donationDetails } from "@/data/foundation";
import { MapPin, Building, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Why ACCA", href: "/about#why-acca" },
    { label: "Who Can Apply", href: "/#eligibility" },
    { label: "Donate", href: "/donate" },
    { label: "Apply for Support", href: "/apply" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-4 border-[#AA331D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <FoundationLogo variant="footer" />

            <p className="text-sm text-stone-400 leading-relaxed max-w-md pt-2">
              Committed to promoting empowerment through education. Assisting students from underprivileged backgrounds in attaining global Chartered Accountancy qualifications through free tuition.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#AA331D]" />
                <span>Headquarters: {foundationDetails.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#AA331D]" />
                <span>{foundationDetails.organizationType}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={foundationDetails.academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#F5D5CE] hover:text-white transition-colors"
              >
                <span>Associated with {foundationDetails.associatedAcademy}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white border-l-2 border-[#AA331D] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Banking & Support Note */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white border-l-2 border-[#AA331D] pl-2.5">
              Direct Contribution
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Supporters can contribute directly to our official bank account to sponsor exam registration and book expenses for deserving candidates:
            </p>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs space-y-1 font-mono">
              <div className="text-stone-300 font-sans font-semibold text-xs">
                {donationDetails.bankName}
              </div>
              <div>A/C: <span className="text-white font-bold">{donationDetails.accountNumber}</span></div>
              <div>IFSC: <span className="text-[#F5D5CE] font-bold">{donationDetails.ifsc}</span></div>
            </div>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5D5CE] hover:text-white transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-[#AA331D]" />
              <span>View full donation & banking guide →</span>
            </Link>
          </div>
        </div>

        {/* Statutory Disclaimer & Legal Links */}
        <div className="pt-8 space-y-4 text-xs text-stone-400">
          <div className="bg-stone-800/40 p-3.5 rounded-lg border border-stone-800 text-[11px] leading-relaxed">
            <strong className="text-stone-300">Disclaimer: </strong>
            Shri Sushil Sharda Foundation is an Indian private limited company established on 30th May 2025, operating in education as a non-governmental and private organization. The foundation provides free ACCA coaching and does not charge tuition fees from eligible students. Professional examination fees, books, and annual subscription charges payable directly to the ACCA body remain external obligations unless specifically sponsored.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} {foundationDetails.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-stone-200 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-stone-200 transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-stone-200 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
