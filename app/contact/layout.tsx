import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote",
  description:
    "Contact SVF Soya Pvt. Ltd. for bulk soya meal quotes, sample requests, and export enquiries. Response within 24 hours. Call +91 90195 21992 or email support@svfsoya.com.",
  keywords: [
    "contact SVF Soya",
    "soya meal quote India",
    "bulk soya meal enquiry",
    "soybean oil supplier contact",
    "soya exporter contact Karnataka",
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
