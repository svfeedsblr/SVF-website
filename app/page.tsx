import type { Metadata } from "next";
import HeroSection from "./components/home/hero-section";
import TrustStripSection from "./components/home/trust-strip-section";
import WhySection from "./components/home/why-section";
import ProductsSection from "./components/home/products-section";
import ManufacturingSection from "./components/home/manufacturing-section";
import LabSection from "./components/home/lab-section";
import TestimonialsSection from "./components/home/testimonials-section";
import PartnerCtaSection from "./components/home/partner-cta-section";

export const metadata: Metadata = {
  title: "SVF Soya Pvt. Ltd. — Leading Manufacturer of Soybean Products",
  description:
    "SVF Soya Pvt. Ltd. has been a leading manufacturer, exporter and supplier of Soya Meal for Poultry and Crude Soyabean Oil since 2023. Chemical-free, non-GMO processing in Karnataka, India. 180 TPD capacity. FSSAI & APEDA certified.",
  alternates: { canonical: "https://www.svfsoya.com" },
  openGraph: {
    title: "SVF Soya — India's Purest Non-GMO Soya Manufacturer",
    description:
      "Leading manufacturer of Soya Meal (48%+ protein), Full Fat Soya, Crude Soybean Oil & Raw Soybeans. 180 TPD, Karnataka. Chemical-free, FSSAI & APEDA certified.",
    url: "https://www.svfsoya.com",
  },
};

// Product structured data for Google rich results
const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SVF Soya Products",
  url: "https://www.svfsoya.com/products",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Soya Meal",
        description: "High-protein soya meal with 48%+ crude protein. Chemical-free mechanical extraction. For poultry, aquaculture, and cattle feed.",
        url: "https://www.svfsoya.com/products/soya-meal",
        image: "https://www.svfsoya.com/soya-meal.png",
        brand: { "@type": "Brand", name: "SVF Soya" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@type": "Organization", name: "SVF Soya Pvt. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Full Fat Soya Meal",
        description: "Full fat soya meal with 38%+ protein and naturally retained oil for high energy feed formulations.",
        url: "https://www.svfsoya.com/products/full-fat-soya",
        image: "https://www.svfsoya.com/full-fat-soya.png",
        brand: { "@type": "Brand", name: "SVF Soya" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@type": "Organization", name: "SVF Soya Pvt. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Crude Soybean Oil",
        description: "Mechanically extracted crude soybean oil with low impurity and zero solvent residue for downstream refining.",
        url: "https://www.svfsoya.com/products/crude-soybean-oil",
        image: "https://www.svfsoya.com/cruid-oil.png",
        brand: { "@type": "Brand", name: "SVF Soya" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@type": "Organization", name: "SVF Soya Pvt. Ltd." },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Raw Soybeans",
        description: "Clean-sourced, non-GMO raw soybeans for processors and traders. Consistent lot quality with moisture-controlled storage.",
        url: "https://www.svfsoya.com/products/raw-soybeans",
        image: "https://www.svfsoya.com/full-soya.png",
        brand: { "@type": "Brand", name: "SVF Soya" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@type": "Organization", name: "SVF Soya Pvt. Ltd." },
        },
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <HeroSection />
      <TrustStripSection />
      <WhySection />
      <ProductsSection />
      <ManufacturingSection />
      <LabSection />
      <TestimonialsSection />
      <PartnerCtaSection />
    </main>
  );
}
