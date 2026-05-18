import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/company-profile", destination: "/about-us", permanent: true },
      { source: "/company-profile/", destination: "/about-us", permanent: true },
      { source: "/soya-meal", destination: "/products/soya-meal", permanent: true },
      { source: "/soya-meal/", destination: "/products/soya-meal", permanent: true },
      { source: "/crude-soybean-oil", destination: "/products/crude-soybean-oil", permanent: true },
      { source: "/crude-soybean-oil/", destination: "/products/crude-soybean-oil", permanent: true },
      { source: "/soybean", destination: "/products/raw-soybeans", permanent: true },
      { source: "/soybean/", destination: "/products/raw-soybeans", permanent: true },
    ];
  },
};

export default nextConfig;
