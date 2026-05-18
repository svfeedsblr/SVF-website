import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Leaf,
  Heart,
  Globe,
  TrendingUp,
  Users,
  ShieldCheck,
  Sparkles,
  Droplets,
  CheckCircle2,
  Handshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SVF Soya — Non-GMO Soya Processing Company in Karnataka",
  description:
    "Learn about SVF Soya Pvt. Ltd. — founded in 2021, 180 TPD mechanical soya processing plant in Karnataka. Meet our leadership team and our mission to deliver chemical-free, non-GMO soya products.",
  keywords: [
    "SVF Soya about us",
    "soya manufacturer Karnataka story",
    "non GMO soya company India",
    "mechanical soya processing company",
    "soya meal manufacturer founded 2023",
    "soya processing plant Bangalore",
  ],
  alternates: { canonical: "https://www.svfsoya.com/about-us" },
  openGraph: {
    title: "About SVF Soya — Built on Purity, Driven by Quality",
    description:
      "Founded in 2021 in Karnataka. 180 TPD mechanical processing, 22,000 sqm facility, 80+ B2B clients. Chemical-free, non-GMO soya products for domestic and export markets.",
    url: "https://www.svfsoya.com/about-us",
  },
};

const stats = [
  { value: "180 MT", label: "Daily Processing Capacity" },
  { value: "100%", label: "Chemical-Free Extraction" },
  { value: "22,000 sqm", label: "Integrated Facility" },
  { value: "80+", label: "B2B Supply Partners" },
];

const missionItems = [
  {
    icon: Target,
    title: "Quality Excellence",
    text: "Providing products that meet the highest standards of quality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Implementing eco-friendly and sustainable practices in our operations to minimize our environmental impact.",
  },
  {
    icon: Heart,
    title: "Satisfaction",
    text: "Building strong relationships with our customers by understanding and fulfilling their needs with reliability and integrity.",
  },
];

const visionItems = [
  {
    icon: Globe,
    title: "Global Reach",
    text: "Expand our market presence and establish SVF Soya as a globally recognized brand.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    text: "Achieve sustainable growth by investing in advanced technologies and environmentally friendly practices.",
  },
  {
    icon: Users,
    title: "Community Impact",
    text: "Contribute positively to the communities we operate in by supporting local economies and promoting sustainable agricultural practices.",
  },
];

const principles = [
  {
    icon: Droplets,
    title: "Chemical-Free Processing",
    text: "Mechanical extraction keeps proteins and oils naturally aligned with feed-grade quality goals.",
  },
  {
    icon: Handshake,
    title: "Ethical Partnerships",
    text: "Long-term farmer and channel relationships drive stable sourcing and fair operational practices.",
  },
  {
    icon: CheckCircle2,
    title: "Operational Discipline",
    text: "Standardized checkpoints and final release validations support consistent commercial outcomes.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div className="mt-1 w-1 self-stretch rounded-full bg-[var(--brand-green)]" />
      <h2 className="text-3xl font-bold text-[var(--light-foreground)] md:text-4xl lg:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main className="page-shell">

      {/* ── Hero ── */}
      <section className="section-block section-dark px-6 pb-10 pt-28 md:px-10 md:pb-5 md:pt-36">
        <div className="section-inner mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-up">
            <p className="chip inline-flex px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              About SVF Soya
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] text-[var(--foreground)] md:text-6xl">
              Built on Purity.
              <span className="block text-[var(--brand-green)]">Driven by Quality.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              From a 2023 vision to a modern, chemical-free soya ecosystem engineered for scale and trust.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/products" className="gold-button rounded-full px-6 py-3 text-sm font-semibold">
                Explore Products
              </Link>
              <Link href="/contact" className="outline-button rounded-full px-6 py-3 text-sm font-semibold">
                Connect With Us
              </Link>
            </div>
          </div>
          <div className="panel-dark reveal-up relative min-h-[18rem] overflow-hidden rounded-[1.4rem] md:min-h-[27rem]">
            <Image
              src="/hero-banner-soya-farm.png"
              alt="SVF Soya facility and farms"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-block section-light px-6 py-10 md:px-10 md:py-12">
        <div className="section-inner mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className="panel-light reveal-up rounded-[1.1rem] p-5"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-3xl font-bold text-[var(--brand-green)]">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--light-muted)]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Company Profile ── */}
      <section className="section-block section-light px-6 py-12 md:px-10 md:py-16">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up">
            <SectionTitle>Company Profile</SectionTitle>
          </div>

          <div className="reveal-up space-y-5 text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[var(--light-foreground)] md:text-2xl">
                Welcome to SVF Soya Pvt. Ltd.
              </h3>
              <p className="mt-3">
                SVF Soya Pvt. Ltd. has risen to the top of the soybean industry since its start in 2021. Each year in
                business and every obstacle we overcame strengthened our company&apos;s culture—and its lasting effect.
                These experiences have molded a set of key principles and practices that support our achievements and
                the strong genuine relationships we create.
              </p>
            </div>

            <p>
              We manufacture, export, and supply top-notch Soya Meal for animals such as poultry, cattle, horses,
              pigs, goats, and fish, along with Crude Soybean Oil and Soybeans.
            </p>
            <p>
              Our goal is to become a top company known for excellent work and new ideas in the feed industry.
              We offer a wide range of products and aim to keep our customers happy. Our modern plant covers
              22,000 square meters and uses the latest equipment to maintain high quality and cleanliness
              standards. We can process up to 180 tons producing high-quality soybean meal, raw soybean oil,
              and non-GMO soybeans.
            </p>
            <p>
              Our success comes from our team of over 50 skilled employees who love their work. They make sure
              every product meets the highest standards. We have a strong commitment to environmental
              sustainability and opt for non-GMO soybeans to back healthier farming methods and safeguard the
              environment.
            </p>
            <p>
              With more than 80 happy partner organizations, we create solid, trust-based bonds by staying open
              and respectful. In the future, we aim to keep improving our products and services, setting new
              benchmarks in the soybean industry. We invite you to join us as we work towards a future where
              excellent quality, sustainability, and fresh ideas come together to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-block section-light px-6 py-12 md:px-10 md:py-16">
        <div className="section-inner mx-auto max-w-7xl space-y-14">

          {/* Founder */}
          <div className="reveal-up">
            <SectionTitle>About Founder</SectionTitle>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
              <p className="mb-1 text-lg font-bold text-[var(--light-foreground)]">Yamini R</p>
              <p className="mb-5 text-sm font-semibold text-[var(--brand-green)]">Founder (M. Tech in Mechanical)</p>
              <div className="space-y-4 text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
                <p>
                  Yamini R, Founder (M. Tech in Mechanical), is a dynamic and innovative entrepreneur who brings a
                  wealth of practical experience to the company. With five years of hands-on involvement in soya meal
                  and crude oil manufacturing, poultry breeding, and feed additive medicine production, she possesses
                  a deep understanding of the industry&apos;s intricacies.
                </p>
                <p>
                  Her focus is on enhancing production efficiency, ensuring stringent product quality, and integrating
                  sustainable practices throughout the company&apos;s operations.
                </p>
                <p>
                  Yamini&apos;s passion for the agricultural sector fuels her drive to explore advanced manufacturing
                  techniques, modern breeding methodologies, and cutting-edge feed additive solutions, ultimately
                  improving livestock health and productivity.
                </p>
                <p>
                  She plays a vital role in research and development, operational management, and strategic
                  expansion, ensuring the company remains at the forefront of a rapidly evolving industry.
                </p>
              </div>
            </div>
          </div>

          {/* CEO */}
          <div className="reveal-up">
            <SectionTitle>About CEO</SectionTitle>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
              <p className="mb-1 text-lg font-bold text-[var(--light-foreground)]">Manoj Kumar R</p>
              <p className="mb-5 text-sm font-semibold text-[var(--brand-green)]">Chief Executive Officer, SVF Soya Private Limited</p>
              <div className="space-y-4 text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
                <p>
                  Manoj Kumar R – CEO, SVF Soya Private Limited, a Commerce graduate and seasoned entrepreneur,
                  is the visionary force behind SVF Soya Private Limited—one of Bengaluru&apos;s fastest-growing organic
                  soya manufacturing firms. With robust expertise in financial planning, taxation, and risk management,
                  he centrally guides the company&apos;s financial strategy and long-term vision. Under his leadership, SVF
                  Soya has emerged as an industry trailblazer, adeptly addressing the rising demand for premium soya
                  protein and oil in both the feed and food sectors.
                </p>
                <p>
                  Before establishing SVF Soya, Manoj Kumar honed his skills in the poultry and feed industries, where
                  he was involved in breeding, feed supply, and direct-to-consumer distribution. Recognizing the vast
                  potential in the upstream soya landscape, he strategically transitioned into organic soya
                  manufacturing to tap into the burgeoning need for plant-based protein and sustainable agriculture.
                </p>
                <p>Today, his deep understanding of commodities, market trends, and the agricultural ecosystem drives SVF Soya&apos;s expansion along several key avenues:</p>
                <div className="space-y-2 pl-2">
                  {[
                    { label: "Solvent Industry Leadership", text: "Steering efforts to close India's trade gap by delivering high-quality soya protein and oil." },
                    { label: "Premium Feed & Nutrition Solutions", text: "Meeting the rigorous standards required for both livestock feed and human consumption." },
                    { label: "Strategic Market Positioning", text: "Capitalizing on the growing market for vegan and plant-based protein products." },
                    { label: "Sustainable Growth & Innovation", text: "Creating long-term value for clients and stakeholders while contributing to a sustainable agricultural future." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)]" />
                      <p><span className="font-semibold text-[var(--light-foreground)]">{item.label}:</span> {item.text}</p>
                    </div>
                  ))}
                </div>
                <p>
                  With a strong financial foundation and an innovation-driven mindset, Manoj Kumar is committed to
                  establishing SVF Soya as a trusted industry name—one that not only provides top-tier soya products
                  but also plays a pivotal role in shaping the future of sustainable agriculture.
                </p>
              </div>
            </div>
          </div>

          {/* Director */}
          <div className="reveal-up">
            <SectionTitle>About Director</SectionTitle>
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
              <p className="mb-1 text-lg font-bold text-[var(--light-foreground)]">Mr. Suresh Challagulla</p>
              <p className="mb-5 text-sm font-semibold text-[var(--brand-green)]">Director</p>
              <p className="text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
                Mr. Suresh Challagulla (Director), contributes significantly to SVF Soya&apos;s strategic decision-making
                processes. His expertise in business planning and market positioning has been crucial in positioning
                SVF Soya as a global leader in the soybean product sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-block section-light px-6 py-12 md:px-10 md:py-16">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up">
            <SectionTitle>Mission and Vision</SectionTitle>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <Target size={20} />
                </span>
                <div>
                  <p className="text-xl font-bold text-[var(--light-foreground)]">Mission</p>
                  <div className="mt-1 h-0.5 w-12 rounded-full bg-[var(--brand-green)]" />
                </div>
              </div>
              <p className="mb-6 text-sm leading-7 text-[var(--light-muted)]">
                Our mission is to deliver high-quality crude soybean oil and soya meal to our customers through
                sustainable and innovative practices. We are dedicated to:
              </p>
              <div className="space-y-4">
                {missionItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-xl border border-[var(--line)] p-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--brand-green)]">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--light-muted)]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vision */}
            <div className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8" style={{ animationDelay: "100ms" }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <Globe size={20} />
                </span>
                <div>
                  <p className="text-xl font-bold text-[var(--light-foreground)]">Vision</p>
                  <div className="mt-1 h-0.5 w-12 rounded-full bg-[var(--brand-green)]" />
                </div>
              </div>
              <p className="mb-6 text-sm leading-7 text-[var(--light-muted)]">
                Our vision is to be a leading and trusted provider of soybean products, recognized globally for
                our commitment to quality, sustainability and customer satisfaction. We aspire to:
              </p>
              <div className="space-y-4">
                {visionItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-xl border border-[var(--line)] p-4">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--brand-green)]">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--light-muted)]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSR & Child Labour ── */}
      <section className="section-block section-light px-6 py-12 md:px-10 md:py-16">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up">
            <SectionTitle>CSR &amp; Child Labour</SectionTitle>
          </div>

          <div className="reveal-up grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-[var(--light-foreground)]">
                  CSR (Corporate Social Responsibility)
                </h3>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-[var(--brand-green)]" />
              </div>
              <p className="text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
                Corporate Social Responsibility (CSR) is integral to our operations as a leading manufacturer of
                soybean oil and soybean meal. We are dedicated to sustainable practices that benefit both the
                environment and our communities. Our CSR efforts include investing in energy-efficient technologies,
                reducing our carbon footprint, and supporting local agriculture. We collaborate with community
                organizations to enhance education, health, and welfare in the regions where we operate. By
                prioritizing ethical practices and community engagement, we strive to make a positive impact and
                drive long-term value for all stakeholders.
              </p>
            </div>

            <div className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8" style={{ animationDelay: "100ms" }}>
              <div className="mb-3">
                <h3 className="text-xl font-bold text-[var(--light-foreground)]">Child Labour</h3>
                <div className="mt-2 h-0.5 w-10 rounded-full bg-[var(--brand-green)]" />
              </div>
              <p className="text-sm leading-8 text-[var(--light-muted)] md:text-base md:leading-8">
                Child Labour has no place in our operations or supply chain. As a responsible manufacturer, we are
                committed to eradicating child labour in all its forms. We enforce strict policies to ensure that no
                minors are employed within our facilities or by our suppliers. Our dedication extends to promoting fair
                labour practices and supporting educational initiatives for children. We actively work to ensure that
                every child has the opportunity to learn and grow in a safe and supportive environment, reinforcing
                our commitment to ethical and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Principles That Define Us
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="panel-dark reveal-up rounded-[1.2rem] p-5 md:p-6"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
