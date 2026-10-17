"use client";

import React from "react";
import Image from "next/image";
import { foundationDetails } from "@/data/foundation";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber = foundationDetails.contactWhatsApp,
  message = foundationDetails.defaultWhatsAppMessage,
  className = "",
}: WhatsAppButtonProps) {
  // Strip non-digits from phone number for the wa.me link
  const cleanNumber = (phoneNumber || "+919876543210").replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(
    message || "Hello Shri Sushil Sharda Foundation, I would like to inquire about free ACCA coaching."
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shri Sushil Sharda Foundation on WhatsApp"
        title="Chat on WhatsApp"
        className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer ${className}`}
      >
        {/* Soft pulsing halo ring for subtle visibility without clutter */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:opacity-60"
        />

        {/* WhatsApp Icon from official Wikimedia Commons File:WhatsApp.svg */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
          <Image
            src="/images/whatsapp.svg"
            alt=""
            width={36}
            height={36}
            className="w-full h-full object-contain filter drop-shadow-xs"
            priority={false}
          />
        </div>
      </a>
    </aside>
  );
}
