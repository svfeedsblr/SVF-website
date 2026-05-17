import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageEffects from "./components/page-effects";
import GlobalRouteLoader from "./components/global-route-loader";
import "./globals.css";

const BASE_URL = "https://svf-soya.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "SVF Soya Pvt. Ltd. — Leading Soya Meal Manufacturer in Karnataka",
    template: "%s | SVF Soya Pvt. Ltd.",
  },

  description:
    "SVF Soya Pvt. Ltd. is a leading manufacturer and exporter of chemical-free, non-GMO Soya Meal, Full Fat Soya, Crude Soybean Oil and Raw Soybeans in Karnataka, India. 180 TPD capacity. FSSAI, APEDA certified. Pan-India & export ready.",

  keywords: [
    "soya meal manufacturer Karnataka",
    "soya meal manufacturer India",
    "non-GMO soya processing",
    "chemical-free soya meal",
    "full fat soya meal supplier",
    "crude soybean oil manufacturer",
    "soybean oil supplier India",
    "soya meal for poultry feed",
    "soya meal exporter India",
    "SVF Soya",
    "soya processing plant Karnataka",
    "APEDA registered soya exporter",
    "FSSAI certified soya manufacturer",
    "raw soybeans supplier India",
    "mechanical soya processing",
    "Bangalore soya manufacturer",
  ],

  authors: [{ name: "SVF Soya Pvt. Ltd.", url: BASE_URL }],
  creator: "SVF Soya Pvt. Ltd.",
  publisher: "SVF Soya Pvt. Ltd.",

  category: "Food Manufacturing",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "SVF Soya Pvt. Ltd.",
    title: "SVF Soya Pvt. Ltd. — Leading Soya Meal Manufacturer in Karnataka",
    description:
      "Chemical-free, non-GMO Soya Meal, Full Fat Soya, Crude Soybean Oil. 180 TPD plant in Karnataka. FSSAI & APEDA certified. Pan-India & export delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SVF Soya — India's Purest Non-GMO Soya Processing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SVF Soya Pvt. Ltd. — Soya Meal Manufacturer Karnataka",
    description:
      "Chemical-free, non-GMO soya processing. 180 TPD plant in Karnataka. FSSAI & APEDA certified.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // Add your Google Search Console verification code here after verifying
    // google: "your-google-verification-code",
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "SVF Soya Pvt. Ltd.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 128,
    height: 40,
  },
  description:
    "SVF Soya Pvt. Ltd. is a leading manufacturer, exporter and supplier of chemical-free, non-GMO Soya Meal, Full Fat Soya, Crude Soybean Oil and Raw Soybeans in Karnataka, India.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 4/4, Bande Bommasandra, Beside Anjaneya Swamy Temple, Dodda Gubbi",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560077",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-90195-21992",
      contactType: "sales",
      areaServed: ["IN", "AE", "SG", "US"],
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-99899-11154",
      contactType: "customer support",
      areaServed: "IN",
    },
  ],
  email: "support@svfsoya.com",
  sameAs: [
    "https://www.linkedin.com",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "SVF Soya Pvt. Ltd.",
  image: `${BASE_URL}/hero-banner-soya-field.png`,
  url: BASE_URL,
  telephone: "+91-90195-21992",
  email: "support@svfsoya.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 4/4, Bande Bommasandra, Dodda Gubbi",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560077",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0428,
    longitude: 77.6091,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  hasMap: "https://maps.google.com/maps?ll=13.080804,77.682941&z=20&t=h&hl=en&gl=IN&mapclient=embed&cid=2362954893093776042",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "SVF Soya Pvt. Ltd.",
  description: "Chemical-free, non-GMO soya processing — Karnataka, India",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/products?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-full w-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <GlobalRouteLoader />
        <PageEffects />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
