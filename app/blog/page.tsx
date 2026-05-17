import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Market Insights — Soya Commodity & Industry Updates",
  description:
    "SVF Soya's market insights blog covering soya meal prices, commodity trends, poultry feed industry updates, export market analysis, and non-GMO soya news in India.",
  keywords: [
    "soya meal for poultry feed",
    "soybean meal for cattle feed",
    "soya meal for goat feed",
    "soybean meal for horse feed",
    "soya meal for pig feed",
    "soya meal for aqua feed",
    "soya meal for broiler",
    "non GMO soya meal manufacturer India",
    "crude soybean oil manufacturer Karnataka",
    "soya meal exporter India",
    "mechanical soya extraction",
    "soya meal blog India",
    "soybean meal nutrition guide",
  ],
  alternates: { canonical: "https://www.svfsoya.com/blog" },
  openGraph: {
    title: "SVF Soya Market Insights — Commodity & Industry Updates",
    description:
      "Soya meal prices, commodity trends, export market analysis, and non-GMO soya news from SVF Soya's Karnataka processing facility.",
    url: "https://www.svfsoya.com/blog",
  },
};

const posts = [
  { slug: "soya-meal-for-poultry-feed", image: "/soya meal for poultry.png", title: "Soya Meal for Poultry Feed — Complete Guide for Farmers and Manufacturers", description: "Everything poultry farmers and feed manufacturers need to know about soya meal: protein specs, urease activity, broiler vs layer vs breeder diets, and why non-GMO mechanical extraction matters.", category: "Feed Industry", date: "May 10, 2026", readTime: "9 min read" },
  { slug: "soya-meal-for-animal-feed", image: "/soya meal for animal feed.png", title: "Soya Meal in Animal Feed — Nutrition Guide for Goat, Horse, Pig, Swine and Cattle", description: "A comprehensive guide to using soya meal in livestock diets — covering ruminants (goats, cattle), monogastrics (pigs, swine), and horses. Nutritional parameters, digestibility, and bulk supply from SVF Soya.", category: "Feed Industry", date: "May 8, 2026", readTime: "8 min read" },
  { slug: "soya-meal-for-aqua-feed", image: "/soya meal for aqua feed.png", title: "Soya Meal for Aqua Feed — The Sustainable Fish Meal Alternative", description: "How soya meal is replacing fish meal in aquaculture diets for fish and shrimp. Nutritional specs, anti-nutritional factor management, and why non-GMO soya meal from India is the aqua feed industry's best bet.", category: "Feed Industry", date: "May 6, 2026", readTime: "8 min read" },
  { slug: "non-gmo-soya-meal-manufacturer-india", image: "/non-gmo soya meal manufacture in india.png", title: "Non-GMO Soya Meal Manufacturer in India — Why It Matters for Your Supply Chain", description: "What non-GMO soya meal certification means, why India is uniquely positioned as a non-GMO soya producer, and how SVF Soya documents its non-GMO status for domestic and export buyers.", category: "Quality & Testing", date: "May 5, 2026", readTime: "7 min read" },
  { slug: "crude-soybean-oil-manufacturer-karnataka", image: "/Cride soya oil manufacture in karnataka.png", title: "Crude Soybean Oil Manufacturer in Karnataka — Mechanical Extraction Process Explained", description: "How SVF Soya's cold-press mechanical extraction produces high-quality crude soybean oil in Karnataka. Quality parameters, FFA, HS codes for export, and comparison with solvent extraction.", category: "Processing", date: "May 3, 2026", readTime: "8 min read" },
  { slug: "soya-meal-exporter-india", image: "/soya meal exporter from India.png", title: "Soya Meal Exporter from India — Export Process, Certifications and Markets", description: "How SVF Soya exports non-GMO soya meal from Karnataka. Export markets, required certifications (APEDA, FSSAI), packaging, logistics, and how to partner with an established Indian soya meal exporter.", category: "Export", date: "May 1, 2026", readTime: "8 min read" },
  { slug: "mechanical-vs-solvent-soya-extraction", image: "/mechanical vs slovent soya extraction.png", title: "Mechanical vs Solvent Soya Extraction — Why Chemical-Free Processing Wins", description: "A deep comparison of mechanical expeller pressing vs solvent (hexane) extraction for soya processing. Residual solvent risk, protein quality, PDI, and why premium feed buyers prefer mechanical extraction.", category: "Processing", date: "April 28, 2026", readTime: "9 min read" },
  { slug: "non-gmo-soybean-supplier-india", image: "/non-gmo soya meal manufacture in india.png", title: "Non-GMO Soybean Supplier in India — Sourcing Clean Raw Soybeans for Processing", description: "Where India's non-GMO soybeans are grown, quality parameters for raw soybean supply, SVF Soya's procurement and QC process, moisture-controlled warehousing, and bulk dispatch logistics.", category: "Quality & Testing", date: "April 25, 2026", readTime: "7 min read" },
  { slug: "soya-meal-for-goat-feed", image: "/soya bean meal for goat feed.png", title: "Soya Meal for Goat Feed — Nutrition Guide for Goat Farmers", description: "Soya meal is the premium protein ingredient for goat feed — supporting muscle growth, milk production and overall health. Learn why non-GMO mechanically processed soya meal from SVF Soya is the right choice for goat farmers.", category: "Feed Industry", date: "March 10, 2025", readTime: "6 min read" },
  { slug: "soybean-meal-for-horse-feed", image: "/soyabean meal for horse feed.png", title: "Soybean Meal for Horse Feed — Protein, Energy and Performance", description: "High-quality soybean meal is an excellent protein supplement for horses — supporting muscle development, coat health and athletic performance. SVF Soya supplies non-GMO mechanically extracted soybean meal for equine nutrition.", category: "Feed Industry", date: "March 5, 2025", readTime: "6 min read" },
  { slug: "soybean-meal-for-cattle-feed", image: "/soya bean meal for cattle feed.png", title: "Soybean Meal for Cattle Feed — Boosting Milk Production and Growth", description: "Soybean meal is a cornerstone protein ingredient in cattle feed, proven to boost milk output in dairy cows and accelerate weight gain in beef cattle. Learn how SVF Soya's non-GMO mechanically processed soybean meal supports cattle nutrition.", category: "Feed Industry", date: "February 28, 2025", readTime: "7 min read" },
  { slug: "soybean-meal-for-white-layer-birds", image: "/soya meal for white layer birds.png", title: "Soybean Meal for White Layer Birds — Maximising Egg Production", description: "White layer birds (white egg-laying hens) require precise nutrition to sustain peak egg production. Mechanically pressed non-GMO soybean meal from SVF Soya provides the protein, amino acids and energy layer birds need.", category: "Feed Industry", date: "February 20, 2025", readTime: "6 min read" },
  { slug: "soya-meal-for-broiler-breeder", image: "/soya meal for briler breeder feed.png", title: "Soya Meal for Broiler Breeder Feed — Supporting Reproductive Performance", description: "Broiler breeders demand the highest quality nutrition to maintain reproductive health and chick quality. SVF Soya's mechanically pressed non-GMO soya meal provides the right protein and amino acid balance for breeder diets.", category: "Feed Industry", date: "February 15, 2025", readTime: "6 min read" },
  { slug: "soya-meal-oil-cake-for-broiler", image: "/soya meal soya oila cake for broiler.png", title: "Soya Meal / Soy Oil Cake for Broiler — Growth Performance Guide", description: "Broiler chickens convert feed to meat most efficiently with the right protein source. Mechanically extracted soya meal (soy oil cake) from SVF Soya delivers high protein, controlled urease, and no solvent residue — the ideal broiler feed ingredient.", category: "Feed Industry", date: "February 10, 2025", readTime: "6 min read" },
  { slug: "soya-meal-for-pig-swine-feed", image: "/Soya meal for pig and swine feed.png", title: "Soya Meal for Pig and Swine Feed — Digestibility and Growth Guide", description: "Soya meal is the preferred protein supplement in pig and swine diets worldwide. SVF Soya supplies non-GMO, chemical-free soya meal with consistent protein ≥48% for pig feed manufacturers and swine farms across India.", category: "Feed Industry", date: "February 5, 2025", readTime: "7 min read" },
];

const tags = ["Market Prices", "Feed Industry", "Quality & Testing", "Processing", "Export"];

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-16 pt-28 md:px-10 md:pb-18 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          {/* ── Header ──────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="reveal-up max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--harvest-gold)]">
                Editorial
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                Soya Market Insights
              </h1>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">
                Technical depth, price transparency, and nutrition guides for modern soya supply
                chains. Written for feed manufacturers, livestock farmers, and commodity buyers.
              </p>
            </div>
            <div className="reveal-up flex flex-wrap gap-2" style={{ animationDelay: "90ms" }}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-xs font-semibold text-[var(--muted)]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* ── All Posts Grid ───────────────────────────────────────────── */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="panel-dark reveal-up overflow-hidden rounded-[1.4rem] p-4 flex flex-col"
                style={{ animationDelay: `${(index % 6) * 60}ms` }}
              >
                {/* Image */}
                {post.image ? (
                  <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-[1rem]">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                ) : (
                  <div
                    className="h-44 w-full rounded-[1rem] flex-shrink-0"
                    style={{ background: "color-mix(in oklab, var(--brand-green) 8%, var(--ring-soft) 92%)", border: "1px solid color-mix(in oklab, var(--brand-green) 14%, transparent 86%)" }}
                  />
                )}

                {/* Card content */}
                <div className="mt-4 flex flex-1 flex-col">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                    {post.category}
                  </p>
                  <h2 className="mt-2 text-base font-semibold leading-snug text-[var(--foreground)]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)] line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                    <span>{post.date} &middot; {post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-semibold text-[var(--brand-green)] hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Newsletter CTA ───────────────────────────────────────────── */}
          <div
            className="panel-dark reveal-up mt-12 rounded-[1.6rem] p-8 text-center md:p-10"
            style={{ animationDelay: "160ms" }}
          >
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
              Require Specific Technical Data or a Volume Quote?
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="gold-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                Start Enquiry
              </Link>
              <Link
                href="/faqs"
                className="outline-button rounded-full px-6 py-3 text-sm font-semibold"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
