import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soya Manufacturing Process — Mechanical Cold-Press Extraction | SVF Soya",
  description:
    "SVF Soya's 180 TPD mechanical soya processing line: cleaning, grinding, extrusion, cold-press oil extraction, cooling, lab testing and packaging — no solvents, no chemicals.",
  keywords: [
    "soya manufacturing process India",
    "mechanical soya extraction process",
    "cold press soybean oil extraction",
    "soya meal manufacturing Karnataka",
    "chemical-free soya processing plant",
    "soya expeller process India",
    "soybean processing plant Karnataka",
  ],
  alternates: { canonical: "https://www.svfsoya.com/manufacturing-process" },
  openGraph: {
    title: "SVF Soya Manufacturing — Cold-Press, Solvent-Free, 180 TPD",
    description:
      "Mechanical extraction process — zero hexane, zero chemical residue. 180 TPD capacity in Karnataka with automated handling and in-house dispatch control.",
    url: "https://www.svfsoya.com/manufacturing-process",
  },
};

const advantages = [
  {
    title: "Higher Energy Content",
    text: "The oil left in the soybean meal after extraction gives it more energy content. This makes the meal better as a high-energy feed choice for farm animals.",
  },
  {
    title: "Better Protein Quality",
    text: "Heat treatment during extrusion has an impact on the soybean meal's protein digestibility and nutritional value. This makes it work better as a feed ingredient.",
  },
  {
    title: "Pleasant Smell and Feel",
    text: "Extrusion gives the soybean meal a nutty roasted smell and a rougher texture. This makes it less dusty than regular soybean meal. As a result, it's more appealing and easier to handle.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Cleaning",
    text: "We begin by cleaning the soybeans to get rid of stones, dirt, and other foreign materials. This step makes sure that pure top-quality beans continue to the next stage of the process.",
    image: "/cleaning.png",
  },
  {
    step: "02",
    title: "Conditioning",
    text: "We adjust the amount of water in the cleaned soybeans to prepare them for extrusion. This step makes sure they're in great condition for the next part of the process.",
    image: "/cleaning.png",
  },
  {
    step: "03",
    title: "Extruder Feeding",
    text: "The conditioned soybeans are fed into the extruder. A barrel with a screw that rotates within it makes up the extruder.",
    image: "/Extruder Feeding.png",
  },
  {
    step: "04",
    title: "High-Pressure & High-Temperature Processing",
    text: "Soybeans go through the extruder where they face high pressure and heat. This cooking turns the beans into swollen bits called collets getting them ready to extract oil.",
    image: "/Extruder Feeding.png",
  },
  {
    step: "05",
    title: "Soya Oil Extraction",
    text: "The heat and pressure in the extruder make the soybeans release their oil. The machine then squeezes out the oil leaving soya meal with about 6% fat left in it.",
    image: "/Soya Oil Extraction.png",
  },
  {
    step: "06",
    title: "Cooling & Drying",
    text: "The extruded meal cools down to keep it stable. After cooling, the meal goes through a drying process to lower its moisture to a safe level, preventing spoilage and ensuring the product stays stable.",
    image: "/Cooling.png",
  },
  {
    step: "07",
    title: "Grinding",
    text: "The meal is ground to a preferred size after it has been cooled and dried, ensuring that it meets the required specifications for subsequent use.",
    image: "/Grinding.png",
  },
  {
    step: "08",
    title: "Crude Oil Collection",
    text: "The extracted oil goes into collection and might go through more processing to get rid of impurities. This leads to crude soybean oil, which then sits in tanks for later use or more refining.",
    image: "/Soya Oil Extraction.png",
  },
  {
    step: "09",
    title: "Packaging",
    text: "The end product is carefully packed for distribution and usage in animal nutrition or other purposes so that it satisfies all necessary quality criteria.",
    image: "/Packaging.png",
  },
];

export default function ManufacturingProcessPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-14 pt-28 md:px-10 md:pb-18 md:pt-36">
        <div className="section-inner mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
              Manufacturing Process
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-6xl">
              Soybean Oil &amp; Meal Manufacturing Process
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Our up-to-date manufacturing plant aims to produce premium soybean meal and crude
              soybean oil. We strive for excellence in every phase making sure our products match
              the best quality benchmarks.
            </p>
          </div>

          <div className="panel-dark reveal-up relative min-h-[17rem] overflow-hidden rounded-[1.4rem]">
            <Image
              src="/process.png"
              alt="Soybean process visual"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/50" />
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">
              Soybean Oil &amp; Meal Manufacturing Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
              Our up-to-date manufacturing plant aims to produce premium soybean meal and crude
              soybean oil. We strive for excellence in every phase making sure our products match
              the best quality benchmarks.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
              Making soybean oil and meal involves essential steps such as Cleaning, Cracking,
              Extrusion, Oil Extraction, Cooling and Drying, Grinding, and Packaging. This
              streamlined process results in high-grade soybean meal and crude oil perfect to use
              in animal feed, dietary supplements, and human food.
            </p>
          </div>

          <div className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-7" style={{ animationDelay: "120ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
              Benefits of the Extruder Process
            </p>
            <div className="mt-4 space-y-3">
              {advantages.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-[var(--line)] bg-white/5 p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {String(index + 1).padStart(2, "0")} · {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-16 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-3xl font-semibold uppercase tracking-[0.05em] text-[var(--foreground)] md:text-5xl">
            Soybean Oil &amp; Meal Manufacturing Process Steps
          </h2>
          <div className="relative mx-auto mt-10 max-w-6xl">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--line)]" />
            <div className="grid gap-8">
              {workflow.map((item, index) => (
                <div
                  key={item.step}
                  className="reveal-up grid grid-cols-[1fr_44px_1fr] items-center gap-3 md:grid-cols-[1fr_36px_1fr] md:gap-4"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {index % 2 === 0 ? (
                    <article className="panel-dark overflow-hidden rounded-[1.1rem] md:rounded-[1.2rem]">
                      <div className="relative h-56 w-full bg-black/30 md:h-64">
                        <Image src={item.image} alt={item.title} fill className="object-contain rounded-[1rem] p-2" />
                      </div>
                      <div className="p-3 md:p-5">
                        <div className="mb-2 inline-flex rounded-full border border-[var(--line)] bg-white/8 px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                          Step {item.step}
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)] md:text-lg">{item.title}</h3>
                        <p className="mt-1 text-xs leading-6 text-[var(--muted)] md:mt-2 md:text-sm md:leading-7">{item.text}</p>
                      </div>
                    </article>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center justify-center">
                    <span className="h-9 w-9 rounded-lg border border-[var(--line)] bg-white/8 text-center text-[11px] font-semibold leading-9 text-[var(--foreground)] md:h-10 md:w-10 md:text-xs md:leading-10">
                      {item.step}
                    </span>
                  </div>

                  {index % 2 === 1 ? (
                    <article className="panel-dark overflow-hidden rounded-[1.1rem] md:rounded-[1.2rem]">
                      <div className="relative h-56 w-full bg-black/30 md:h-64">
                        <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
                      </div>
                      <div className="p-3 md:p-5">
                        <div className="mb-2 inline-flex rounded-full border border-[var(--line)] bg-white/8 px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                          Step {item.step}
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)] md:text-lg">{item.title}</h3>
                        <p className="mt-1 text-xs leading-6 text-[var(--muted)] md:mt-2 md:text-sm md:leading-7">{item.text}</p>
                      </div>
                    </article>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-16 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-dark reveal-up grid gap-5 rounded-[1.4rem] p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
                Scale Your Production with Integrity.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                Talk to our team for detailed process sheets, quality validation standards, and
                commercial dispatch planning.
              </p>
            </div>
            <Link href="#contact" className="gold-button inline-flex rounded-full px-6 py-3 text-sm font-semibold">
              Request Process Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
