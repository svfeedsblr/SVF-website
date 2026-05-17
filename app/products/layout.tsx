import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products — Soya Meal, Oil, Full Fat Soya & Raw Soybeans",
  description:
    "Explore SVF Soya's product range: high-protein Soya Meal (48%+ protein), Full Fat Soya Meal, Crude Soybean Oil, and Raw Soybeans. Chemical-free, non-GMO, FSSAI certified.",
  keywords: [
    "soya meal 48% protein",
    "full fat soya meal India",
    "crude soybean oil manufacturer",
    "raw soybeans supplier India",
    "non-GMO soya products",
    "soya meal for poultry",
    "soya meal for aquaculture",
  ],
  alternates: { canonical: "https://www.svfsoya.com/products" },
  openGraph: {
    title: "SVF Soya Products — Soya Meal, Oil, Full Fat Soya & Soybeans",
    description:
      "High-protein Soya Meal, Full Fat Soya, Crude Soybean Oil, and Raw Soybeans. Mechanically processed, chemical-free, FSSAI & APEDA certified.",
    url: "https://www.svfsoya.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
