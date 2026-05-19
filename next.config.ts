import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old flat product pages
      { source: "/company-profile", destination: "/about-us", permanent: true },
      { source: "/company-profile/", destination: "/about-us", permanent: true },
      { source: "/soya-meal", destination: "/products/soya-meal", permanent: true },
      { source: "/soya-meal/", destination: "/products/soya-meal", permanent: true },
      { source: "/crude-soybean-oil", destination: "/products/crude-soybean-oil", permanent: true },
      { source: "/crude-soybean-oil/", destination: "/products/crude-soybean-oil", permanent: true },
      { source: "/soybean", destination: "/products/raw-soybeans", permanent: true },
      { source: "/soybean/", destination: "/products/raw-soybeans", permanent: true },
      // Old about/company pages indexed by Google
      { source: "/about-founder", destination: "/about-us", permanent: true },
      { source: "/about-founder/", destination: "/about-us", permanent: true },
      { source: "/vision-mission", destination: "/about-us", permanent: true },
      { source: "/vision-mission/", destination: "/about-us", permanent: true },
      { source: "/testing-facilities", destination: "/quality-policy", permanent: true },
      { source: "/testing-facilities/", destination: "/quality-policy", permanent: true },
      // Old misc pages
      { source: "/career-opportunities", destination: "/careers", permanent: true },
      { source: "/career-opportunities/", destination: "/careers", permanent: true },
      { source: "/our-products", destination: "/products", permanent: true },
      { source: "/our-products/", destination: "/products", permanent: true },
      // Old blog-style soya meal pages — redirect to blog
      { source: "/soya-meal-for-pig-feed", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-pig-feed/", destination: "/blog", permanent: true },
      { source: "/soya-meal-pig-feed", destination: "/blog", permanent: true },
      { source: "/soya-meal-pig-feed/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-for-animal-feed", destination: "/blog", permanent: true },
      { source: "/soybean-meal-for-animal-feed/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-for-poultry-feed", destination: "/blog", permanent: true },
      { source: "/soybean-meal-for-poultry-feed/", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-aqua-feed", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-aqua-feed/", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-broiler", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-broiler/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-cattle-feed", destination: "/blog", permanent: true },
      { source: "/soybean-meal-cattle-feed/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-horsefeed", destination: "/blog", permanent: true },
      { source: "/soybean-meal-horsefeed/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-cattlefeed", destination: "/blog", permanent: true },
      { source: "/soybean-meal-cattlefeed/", destination: "/blog", permanent: true },
      { source: "/soybean-meal-weight-layer-birds", destination: "/blog", permanent: true },
      { source: "/soybean-meal-weight-layer-birds/", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-broiler-breeder", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-broiler-breeder/", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-goat-feed", destination: "/blog", permanent: true },
      { source: "/soya-meal-for-goat-feed/", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
