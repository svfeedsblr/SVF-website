import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SVF Soya — Get a Quote for Soya Meal and Soybean Oil",
  description:
    "Contact SVF Soya Pvt. Ltd. for quotes on Soya Meal, Crude Soybean Oil, Full Fat Soya and Raw Soybeans. WhatsApp, email or fill our enquiry form. Response within 24 hours.",
  keywords: [
    "contact soya meal manufacturer India",
    "get quote soya meal Karnataka",
    "soya meal enquiry India",
    "SVF Soya contact",
    "buy soya meal India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/contact" },
  openGraph: {
    title: "Contact SVF Soya — Get a Bulk Quote",
    description:
      "Request a quotation for Soya Meal, Full Fat Soya, Crude Soybean Oil or Raw Soybeans. Pan-India & export delivery. Response within 24 hours.",
    url: "https://www.svfsoya.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
