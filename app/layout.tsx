import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageEffects from "./components/page-effects";
import GlobalRouteLoader from "./components/global-route-loader";
import "./globals.css";

const BASE_URL = "https://www.svfsoya.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "SVF Soya Pvt. Ltd. — Leading Soya Meal Manufacturer in Karnataka",
    template: "%s | SVF Soya Pvt. Ltd.",
  },

  description:
    "SVF Soya Pvt. Ltd. is a leading manufacturer and exporter of chemical-free, non-GMO Soya Meal, Full Fat Soya, Crude Soybean Oil and Raw Soybeans in Karnataka, India. 180 TPD capacity. FSSAI, APEDA certified. Pan-India & export ready.",

  keywords: [
    // ── GROUP 1: Soya Oil Cake ──
    "Soya Oil Cake Manufacturer","Soya Oil Cake Manufacturer in India","Soya Oil Cake Manufacturer from India","Soya Oil Cake Manufacturer in Karnataka","Soya Oil Cake Manufacturer in Bengaluru","Soya Oil Cake Manufacturer in Bangalore",
    "Soya Oil Cake Exporter","Soya Oil Cake Exporter in India","Soya Oil Cake Exporter from India","Soya Oil Cake Exporter in Karnataka","Soya Oil Cake Exporter in Bengaluru","Soya Oil Cake Exporter in Bangalore",
    "Soya Oil Cake Supplier","Soya Oil Cake Supplier in India","Soya Oil Cake Supplier from India","Soya Oil Cake Supplier in Karnataka","Soya Oil Cake Supplier in Bengaluru","Soya Oil Cake Supplier in Bangalore",
    "Non GMO Soya Oil Cake Manufacturer","Non GMO Soya Oil Cake Manufacturer in India","Non GMO Soya Oil Cake Manufacturer from India","Non GMO Soya Oil Cake Manufacturer in Karnataka","Non GMO Soya Oil Cake Manufacturer in Bengaluru","Non GMO Soya Oil Cake Manufacturer in Bangalore",
    "Non GMO Soya Oil Cake Exporter","Non GMO Soya Oil Cake Exporter in India","Non GMO Soya Oil Cake Exporter from India","Non GMO Soya Oil Cake Exporter in Karnataka","Non GMO Soya Oil Cake Exporter in Bengaluru","Non GMO Soya Oil Cake Exporter in Bangalore",
    "Non GMO Soya Oil Cake Supplier","Non GMO Soya Oil Cake Supplier in India","Non GMO Soya Oil Cake Supplier from India","Non GMO Soya Oil Cake Supplier in Karnataka","Non GMO Soya Oil Cake Supplier in Bengaluru","Non GMO Soya Oil Cake Supplier in Bangalore",
    // ── Soy Oil Cake ──
    "Soy Oil Cake Manufacturer","Soy Oil Cake Manufacturer in India","Soy Oil Cake Manufacturer from India","Soy Oil Cake Manufacturer in Karnataka","Soy Oil Cake Manufacturer in Bengaluru","Soy Oil Cake Manufacturer in Bangalore",
    "Soy Oil Cake Exporter","Soy Oil Cake Exporter in India","Soy Oil Cake Exporter from India","Soy Oil Cake Exporter in Karnataka","Soy Oil Cake Exporter in Bengaluru","Soy Oil Cake Exporter in Bangalore",
    "Soy Oil Cake Supplier","Soy Oil Cake Supplier in India","Soy Oil Cake Supplier from India","Soy Oil Cake Supplier in Karnataka","Soy Oil Cake Supplier in Bengaluru","Soy Oil Cake Supplier in Bangalore",
    "Non GMO Soy Oil Cake Manufacturer","Non GMO Soy Oil Cake Manufacturer in India","Non GMO Soy Oil Cake Manufacturer from India","Non GMO Soy Oil Cake Manufacturer in Karnataka","Non GMO Soy Oil Cake Manufacturer in Bengaluru","Non GMO Soy Oil Cake Manufacturer in Bangalore",
    "Non GMO Soy Oil Cake Exporter","Non GMO Soy Oil Cake Exporter in India","Non GMO Soy Oil Cake Exporter from India","Non GMO Soy Oil Cake Exporter in Karnataka","Non GMO Soy Oil Cake Exporter in Bengaluru","Non GMO Soy Oil Cake Exporter in Bangalore",
    "Non GMO Soy Oil Cake Supplier","Non GMO Soy Oil Cake Supplier in India","Non GMO Soy Oil Cake Supplier from India","Non GMO Soy Oil Cake Supplier in Karnataka","Non GMO Soy Oil Cake Supplier in Bengaluru","Non GMO Soy Oil Cake Supplier in Bangalore",
    // ── Soya Meal ──
    "Soya Meal Manufacturer","Soya Meal Manufacturer in India","Soya Meal Manufacturer from India","Soya Meal Manufacturer in Karnataka","Soya Meal Manufacturer in Bengaluru","Soya Meal Manufacturer in Bangalore",
    "Soya Meal Exporter","Soya Meal Exporter in India","Soya Meal Exporter from India","Soya Meal Exporter in Karnataka","Soya Meal Exporter in Bengaluru","Soya Meal Exporter in Bangalore",
    "Soya Meal Supplier","Soya Meal Supplier in India","Soya Meal Supplier from India","Soya Meal Supplier in Karnataka","Soya Meal Supplier in Bengaluru","Soya Meal Supplier in Bangalore",
    "Non GMO Soya Meal Manufacturer","Non GMO Soya Meal Manufacturer in India","Non GMO Soya Meal Manufacturer from India","Non GMO Soya Meal Manufacturer in Karnataka","Non GMO Soya Meal Manufacturer in Bengaluru","Non GMO Soya Meal Manufacturer in Bangalore",
    "Non GMO Soya Meal Exporter","Non GMO Soya Meal Exporter in India","Non GMO Soya Meal Exporter from India","Non GMO Soya Meal Exporter in Karnataka","Non GMO Soya Meal Exporter in Bengaluru","Non GMO Soya Meal Exporter in Bangalore",
    "Non GMO Soya Meal Supplier","Non GMO Soya Meal Supplier in India","Non GMO Soya Meal Supplier from India","Non GMO Soya Meal Supplier in Karnataka","Non GMO Soya Meal Supplier in Bengaluru","Non GMO Soya Meal Supplier in Bangalore",
    // ── Soy Meal ──
    "Soy Meal Manufacturer","Soy Meal Manufacturer in India","Soy Meal Manufacturer from India","Soy Meal Manufacturer in Karnataka","Soy Meal Manufacturer in Bengaluru","Soy Meal Manufacturer in Bangalore",
    "Soy Meal Exporter","Soy Meal Exporter in India","Soy Meal Exporter from India","Soy Meal Exporter in Karnataka","Soy Meal Exporter in Bengaluru","Soy Meal Exporter in Bangalore",
    "Soy Meal Supplier","Soy Meal Supplier in India","Soy Meal Supplier from India","Soy Meal Supplier in Karnataka","Soy Meal Supplier in Bengaluru","Soy Meal Supplier in Bangalore",
    "Non GMO Soy Meal Manufacturer","Non GMO Soy Meal Manufacturer in India","Non GMO Soy Meal Manufacturer from India","Non GMO Soy Meal Manufacturer in Karnataka","Non GMO Soy Meal Manufacturer in Bengaluru","Non GMO Soy Meal Manufacturer in Bangalore",
    "Non GMO Soy Meal Exporter","Non GMO Soy Meal Exporter in India","Non GMO Soy Meal Exporter from India","Non GMO Soy Meal Exporter in Karnataka","Non GMO Soy Meal Exporter in Bengaluru","Non GMO Soy Meal Exporter in Bangalore",
    "Non GMO Soy Meal Supplier","Non GMO Soy Meal Supplier in India","Non GMO Soy Meal Supplier from India","Non GMO Soy Meal Supplier in Karnataka","Non GMO Soy Meal Supplier in Bengaluru","Non GMO Soy Meal Supplier in Bangalore",
    // ── Soya DOC ──
    "Soya DOC Manufacturer","Soya DOC Manufacturer in India","Soya DOC Manufacturer from India","Soya DOC Manufacturer in Karnataka","Soya DOC Manufacturer in Bengaluru","Soya DOC Manufacturer in Bangalore",
    "Soya DOC Exporter","Soya DOC Exporter in India","Soya DOC Exporter from India","Soya DOC Exporter in Karnataka","Soya DOC Exporter in Bengaluru","Soya DOC Exporter in Bangalore",
    "Soya DOC Supplier","Soya DOC Supplier in India","Soya DOC Supplier from India","Soya DOC Supplier in Karnataka","Soya DOC Supplier in Bengaluru","Soya DOC Supplier in Bangalore",
    "Non GMO Soya DOC Manufacturer","Non GMO Soya DOC Manufacturer in India","Non GMO Soya DOC Manufacturer from India","Non GMO Soya DOC Manufacturer in Karnataka","Non GMO Soya DOC Manufacturer in Bengaluru","Non GMO Soya DOC Manufacturer in Bangalore",
    "Non GMO Soya DOC Exporter","Non GMO Soya DOC Exporter in India","Non GMO Soya DOC Exporter from India","Non GMO Soya DOC Exporter in Karnataka","Non GMO Soya DOC Exporter in Bengaluru","Non GMO Soya DOC Exporter in Bangalore",
    "Non GMO Soya DOC Supplier","Non GMO Soya DOC Supplier in India","Non GMO Soya DOC Supplier from India","Non GMO Soya DOC Supplier in Karnataka","Non GMO Soya DOC Supplier in Bengaluru","Non GMO Soya DOC Supplier in Bangalore",
    // ── Soy DOC ──
    "Soy DOC Manufacturer","Soy DOC Manufacturer in India","Soy DOC Manufacturer from India","Soy DOC Manufacturer in Karnataka","Soy DOC Manufacturer in Bengaluru","Soy DOC Manufacturer in Bangalore",
    "Soy DOC Exporter","Soy DOC Exporter in India","Soy DOC Exporter from India","Soy DOC Exporter in Karnataka","Soy DOC Exporter in Bengaluru","Soy DOC Exporter in Bangalore",
    "Soy DOC Supplier","Soy DOC Supplier in India","Soy DOC Supplier from India","Soy DOC Supplier in Karnataka","Soy DOC Supplier in Bengaluru","Soy DOC Supplier in Bangalore",
    "Non GMO Soy DOC Manufacturer","Non GMO Soy DOC Manufacturer in India","Non GMO Soy DOC Manufacturer from India","Non GMO Soy DOC Manufacturer in Karnataka","Non GMO Soy DOC Manufacturer in Bengaluru","Non GMO Soy DOC Manufacturer in Bangalore",
    "Non GMO Soy DOC Exporter","Non GMO Soy DOC Exporter in India","Non GMO Soy DOC Exporter from India","Non GMO Soy DOC Exporter in Karnataka","Non GMO Soy DOC Exporter in Bengaluru","Non GMO Soy DOC Exporter in Bangalore",
    "Non GMO Soy DOC Supplier","Non GMO Soy DOC Supplier in India","Non GMO Soy DOC Supplier from India","Non GMO Soy DOC Supplier in Karnataka","Non GMO Soy DOC Supplier in Bengaluru","Non GMO Soy DOC Supplier in Bangalore",
    // ── Soyabean Oil Cake ──
    "Soyabean Oil Cake Manufacturer","Soyabean Oil Cake Manufacturer in India","Soyabean Oil Cake Manufacturer from India","Soyabean Oil Cake Manufacturer in Karnataka","Soyabean Oil Cake Manufacturer in Bengaluru","Soyabean Oil Cake Manufacturer in Bangalore",
    "Soyabean Oil Cake Exporter","Soyabean Oil Cake Exporter in India","Soyabean Oil Cake Exporter from India","Soyabean Oil Cake Exporter in Karnataka","Soyabean Oil Cake Exporter in Bengaluru","Soyabean Oil Cake Exporter in Bangalore",
    "Soyabean Oil Cake Supplier","Soyabean Oil Cake Supplier in India","Soyabean Oil Cake Supplier from India","Soyabean Oil Cake Supplier in Karnataka","Soyabean Oil Cake Supplier in Bengaluru","Soyabean Oil Cake Supplier in Bangalore",
    "Non GMO Soyabean Oil Cake Manufacturer","Non GMO Soyabean Oil Cake Manufacturer in India","Non GMO Soyabean Oil Cake Manufacturer from India","Non GMO Soyabean Oil Cake Manufacturer in Karnataka","Non GMO Soyabean Oil Cake Manufacturer in Bengaluru","Non GMO Soyabean Oil Cake Manufacturer in Bangalore",
    "Non GMO Soyabean Oil Cake Exporter","Non GMO Soyabean Oil Cake Exporter in India","Non GMO Soyabean Oil Cake Exporter from India","Non GMO Soyabean Oil Cake Exporter in Karnataka","Non GMO Soyabean Oil Cake Exporter in Bengaluru","Non GMO Soyabean Oil Cake Exporter in Bangalore",
    "Non GMO Soyabean Oil Cake Supplier","Non GMO Soyabean Oil Cake Supplier in India","Non GMO Soyabean Oil Cake Supplier from India","Non GMO Soyabean Oil Cake Supplier in Karnataka","Non GMO Soyabean Oil Cake Supplier in Bengaluru","Non GMO Soyabean Oil Cake Supplier in Bangalore",
    // ── Soybean Oil Cake ──
    "Soybean Oil Cake Manufacturer","Soybean Oil Cake Manufacturer in India","Soybean Oil Cake Manufacturer from India","Soybean Oil Cake Manufacturer in Karnataka","Soybean Oil Cake Manufacturer in Bengaluru","Soybean Oil Cake Manufacturer in Bangalore",
    "Soybean Oil Cake Exporter","Soybean Oil Cake Exporter in India","Soybean Oil Cake Exporter from India","Soybean Oil Cake Exporter in Karnataka","Soybean Oil Cake Exporter in Bengaluru","Soybean Oil Cake Exporter in Bangalore",
    "Soybean Oil Cake Supplier","Soybean Oil Cake Supplier in India","Soybean Oil Cake Supplier from India","Soybean Oil Cake Supplier in Karnataka","Soybean Oil Cake Supplier in Bengaluru","Soybean Oil Cake Supplier in Bangalore",
    "Non GMO Soybean Oil Cake Manufacturer","Non GMO Soybean Oil Cake Manufacturer in India","Non GMO Soybean Oil Cake Manufacturer from India","Non GMO Soybean Oil Cake Manufacturer in Karnataka","Non GMO Soybean Oil Cake Manufacturer in Bengaluru","Non GMO Soybean Oil Cake Manufacturer in Bangalore",
    "Non GMO Soybean Oil Cake Exporter","Non GMO Soybean Oil Cake Exporter in India","Non GMO Soybean Oil Cake Exporter from India","Non GMO Soybean Oil Cake Exporter in Karnataka","Non GMO Soybean Oil Cake Exporter in Bengaluru","Non GMO Soybean Oil Cake Exporter in Bangalore",
    "Non GMO Soybean Oil Cake Supplier","Non GMO Soybean Oil Cake Supplier in India","Non GMO Soybean Oil Cake Supplier from India","Non GMO Soybean Oil Cake Supplier in Karnataka","Non GMO Soybean Oil Cake Supplier in Bengaluru","Non GMO Soybean Oil Cake Supplier in Bangalore",
    // ── Soyabean Meal ──
    "Soyabean Meal Manufacturer","Soyabean Meal Manufacturer in India","Soyabean Meal Manufacturer from India","Soyabean Meal Manufacturer in Karnataka","Soyabean Meal Manufacturer in Bengaluru","Soyabean Meal Manufacturer in Bangalore",
    "Soyabean Meal Exporter","Soyabean Meal Exporter in India","Soyabean Meal Exporter from India","Soyabean Meal Exporter in Karnataka","Soyabean Meal Exporter in Bengaluru","Soyabean Meal Exporter in Bangalore",
    "Soyabean Meal Supplier","Soyabean Meal Supplier in India","Soyabean Meal Supplier from India","Soyabean Meal Supplier in Karnataka","Soyabean Meal Supplier in Bengaluru","Soyabean Meal Supplier in Bangalore",
    "Non GMO Soyabean Meal Manufacturer","Non GMO Soyabean Meal Manufacturer in India","Non GMO Soyabean Meal Manufacturer from India","Non GMO Soyabean Meal Manufacturer in Karnataka","Non GMO Soyabean Meal Manufacturer in Bengaluru","Non GMO Soyabean Meal Manufacturer in Bangalore",
    "Non GMO Soyabean Meal Exporter","Non GMO Soyabean Meal Exporter in India","Non GMO Soyabean Meal Exporter from India","Non GMO Soyabean Meal Exporter in Karnataka","Non GMO Soyabean Meal Exporter in Bengaluru","Non GMO Soyabean Meal Exporter in Bangalore",
    "Non GMO Soyabean Meal Supplier","Non GMO Soyabean Meal Supplier in India","Non GMO Soyabean Meal Supplier from India","Non GMO Soyabean Meal Supplier in Karnataka","Non GMO Soyabean Meal Supplier in Bengaluru","Non GMO Soyabean Meal Supplier in Bangalore",
    // ── Soybean Meal ──
    "Soybean Meal Manufacturer","Soybean Meal Manufacturer in India","Soybean Meal Manufacturer from India","Soybean Meal Manufacturer in Karnataka","Soybean Meal Manufacturer in Bengaluru","Soybean Meal Manufacturer in Bangalore",
    "Soybean Meal Exporter","Soybean Meal Exporter in India","Soybean Meal Exporter from India","Soybean Meal Exporter in Karnataka","Soybean Meal Exporter in Bengaluru","Soybean Meal Exporter in Bangalore",
    "Soybean Meal Supplier","Soybean Meal Supplier in India","Soybean Meal Supplier from India","Soybean Meal Supplier in Karnataka","Soybean Meal Supplier in Bengaluru","Soybean Meal Supplier in Bangalore",
    "Non GMO Soybean Meal Manufacturer","Non GMO Soybean Meal Manufacturer in India","Non GMO Soybean Meal Manufacturer from India","Non GMO Soybean Meal Manufacturer in Karnataka","Non GMO Soybean Meal Manufacturer in Bengaluru","Non GMO Soybean Meal Manufacturer in Bangalore",
    "Non GMO Soybean Meal Exporter","Non GMO Soybean Meal Exporter in India","Non GMO Soybean Meal Exporter from India","Non GMO Soybean Meal Exporter in Karnataka","Non GMO Soybean Meal Exporter in Bengaluru","Non GMO Soybean Meal Exporter in Bangalore",
    "Non GMO Soybean Meal Supplier","Non GMO Soybean Meal Supplier in India","Non GMO Soybean Meal Supplier from India","Non GMO Soybean Meal Supplier in Karnataka","Non GMO Soybean Meal Supplier in Bengaluru","Non GMO Soybean Meal Supplier in Bangalore",
    // ── Soybean DOC ──
    "Soybean DOC Manufacturer","Soybean DOC Manufacturer in India","Soybean DOC Manufacturer from India","Soybean DOC Manufacturer in Karnataka","Soybean DOC Manufacturer in Bengaluru","Soybean DOC Manufacturer in Bangalore",
    "Soybean DOC Exporter","Soybean DOC Exporter in India","Soybean DOC Exporter from India","Soybean DOC Exporter in Karnataka","Soybean DOC Exporter in Bengaluru","Soybean DOC Exporter in Bangalore",
    "Soybean DOC Supplier","Soybean DOC Supplier in India","Soybean DOC Supplier from India","Soybean DOC Supplier in Karnataka","Soybean DOC Supplier in Bengaluru","Soybean DOC Supplier in Bangalore",
    "Non GMO Soybean DOC Manufacturer","Non GMO Soybean DOC Manufacturer in India","Non GMO Soybean DOC Manufacturer from India","Non GMO Soybean DOC Manufacturer in Karnataka","Non GMO Soybean DOC Manufacturer in Bengaluru","Non GMO Soybean DOC Manufacturer in Bangalore",
    "Non GMO Soybean DOC Exporter","Non GMO Soybean DOC Exporter in India","Non GMO Soybean DOC Exporter from India","Non GMO Soybean DOC Exporter in Karnataka","Non GMO Soybean DOC Exporter in Bengaluru","Non GMO Soybean DOC Exporter in Bangalore",
    "Non GMO Soybean DOC Supplier","Non GMO Soybean DOC Supplier in India","Non GMO Soybean DOC Supplier from India","Non GMO Soybean DOC Supplier in Karnataka","Non GMO Soybean DOC Supplier in Bengaluru","Non GMO Soybean DOC Supplier in Bangalore",
    // ── Soyabean DOC ──
    "Soyabean DOC Manufacturer","Soyabean DOC Manufacturer in India","Soyabean DOC Manufacturer from India","Soyabean DOC Manufacturer in Karnataka","Soyabean DOC Manufacturer in Bengaluru","Soyabean DOC Manufacturer in Bangalore",
    "Soyabean DOC Exporter","Soyabean DOC Exporter in India","Soyabean DOC Exporter from India","Soyabean DOC Exporter in Karnataka","Soyabean DOC Exporter in Bengaluru","Soyabean DOC Exporter in Bangalore",
    "Soyabean DOC Supplier","Soyabean DOC Supplier in India","Soyabean DOC Supplier from India","Soyabean DOC Supplier in Karnataka","Soyabean DOC Supplier in Bengaluru","Soyabean DOC Supplier in Bangalore",
    "Non GMO Soyabean DOC Manufacturer","Non GMO Soyabean DOC Manufacturer in India","Non GMO Soyabean DOC Manufacturer from India","Non GMO Soyabean DOC Manufacturer in Karnataka","Non GMO Soyabean DOC Manufacturer in Bengaluru","Non GMO Soyabean DOC Manufacturer in Bangalore",
    "Non GMO Soyabean DOC Exporter","Non GMO Soyabean DOC Exporter in India","Non GMO Soyabean DOC Exporter from India","Non GMO Soyabean DOC Exporter in Karnataka","Non GMO Soyabean DOC Exporter in Bengaluru","Non GMO Soyabean DOC Exporter in Bangalore",
    "Non GMO Soyabean DOC Supplier","Non GMO Soyabean DOC Supplier in India","Non GMO Soyabean DOC Supplier from India","Non GMO Soyabean DOC Supplier in Karnataka","Non GMO Soyabean DOC Supplier in Bengaluru","Non GMO Soyabean DOC Supplier in Bangalore",
    // ── GROUP 2: Soya Oil ──
    "Soya Oil Manufacturer","Soya Oil Manufacturer in India","Soya Oil Manufacturer from India","Soya Oil Manufacturer in Karnataka","Soya Oil Manufacturer in Bengaluru","Soya Oil Manufacturer in Bangalore",
    "Soya Oil Exporter","Soya Oil Exporter in India","Soya Oil Exporter from India","Soya Oil Exporter in Karnataka","Soya Oil Exporter in Bengaluru","Soya Oil Exporter in Bangalore",
    "Soya Oil Supplier","Soya Oil Supplier in India","Soya Oil Supplier from India","Soya Oil Supplier in Karnataka","Soya Oil Supplier in Bengaluru","Soya Oil Supplier in Bangalore",
    "Non GMO Soya Oil Manufacturer","Non GMO Soya Oil Manufacturer in India","Non GMO Soya Oil Manufacturer from India","Non GMO Soya Oil Manufacturer in Karnataka","Non GMO Soya Oil Manufacturer in Bengaluru","Non GMO Soya Oil Manufacturer in Bangalore",
    "Non GMO Soya Oil Exporter","Non GMO Soya Oil Exporter in India","Non GMO Soya Oil Exporter from India","Non GMO Soya Oil Exporter in Karnataka","Non GMO Soya Oil Exporter in Bengaluru","Non GMO Soya Oil Exporter in Bangalore",
    "Non GMO Soya Oil Supplier","Non GMO Soya Oil Supplier in India","Non GMO Soya Oil Supplier from India","Non GMO Soya Oil Supplier in Karnataka","Non GMO Soya Oil Supplier in Bengaluru","Non GMO Soya Oil Supplier in Bangalore",
    // ── Soybean Oil ──
    "Soybean Oil Manufacturer","Soybean Oil Manufacturer in India","Soybean Oil Manufacturer from India","Soybean Oil Manufacturer in Karnataka","Soybean Oil Manufacturer in Bengaluru","Soybean Oil Manufacturer in Bangalore",
    "Soybean Oil Exporter","Soybean Oil Exporter in India","Soybean Oil Exporter from India","Soybean Oil Exporter in Karnataka","Soybean Oil Exporter in Bengaluru","Soybean Oil Exporter in Bangalore",
    "Soybean Oil Supplier","Soybean Oil Supplier in India","Soybean Oil Supplier from India","Soybean Oil Supplier in Karnataka","Soybean Oil Supplier in Bengaluru","Soybean Oil Supplier in Bangalore",
    "Non GMO Soybean Oil Manufacturer","Non GMO Soybean Oil Manufacturer in India","Non GMO Soybean Oil Manufacturer from India","Non GMO Soybean Oil Manufacturer in Karnataka","Non GMO Soybean Oil Manufacturer in Bengaluru","Non GMO Soybean Oil Manufacturer in Bangalore",
    "Non GMO Soybean Oil Exporter","Non GMO Soybean Oil Exporter in India","Non GMO Soybean Oil Exporter from India","Non GMO Soybean Oil Exporter in Karnataka","Non GMO Soybean Oil Exporter in Bengaluru","Non GMO Soybean Oil Exporter in Bangalore",
    "Non GMO Soybean Oil Supplier","Non GMO Soybean Oil Supplier in India","Non GMO Soybean Oil Supplier from India","Non GMO Soybean Oil Supplier in Karnataka","Non GMO Soybean Oil Supplier in Bengaluru","Non GMO Soybean Oil Supplier in Bangalore",
    // ── Soyabean Oil ──
    "Soyabean Oil Manufacturer","Soyabean Oil Manufacturer in India","Soyabean Oil Manufacturer from India","Soyabean Oil Manufacturer in Karnataka","Soyabean Oil Manufacturer in Bengaluru","Soyabean Oil Manufacturer in Bangalore",
    "Soyabean Oil Exporter","Soyabean Oil Exporter in India","Soyabean Oil Exporter from India","Soyabean Oil Exporter in Karnataka","Soyabean Oil Exporter in Bengaluru","Soyabean Oil Exporter in Bangalore",
    "Soyabean Oil Supplier","Soyabean Oil Supplier in India","Soyabean Oil Supplier from India","Soyabean Oil Supplier in Karnataka","Soyabean Oil Supplier in Bengaluru","Soyabean Oil Supplier in Bangalore",
    "Non GMO Soyabean Oil Manufacturer","Non GMO Soyabean Oil Manufacturer in India","Non GMO Soyabean Oil Manufacturer from India","Non GMO Soyabean Oil Manufacturer in Karnataka","Non GMO Soyabean Oil Manufacturer in Bengaluru","Non GMO Soyabean Oil Manufacturer in Bangalore",
    "Non GMO Soyabean Oil Exporter","Non GMO Soyabean Oil Exporter in India","Non GMO Soyabean Oil Exporter from India","Non GMO Soyabean Oil Exporter in Karnataka","Non GMO Soyabean Oil Exporter in Bengaluru","Non GMO Soyabean Oil Exporter in Bangalore",
    "Non GMO Soyabean Oil Supplier","Non GMO Soyabean Oil Supplier in India","Non GMO Soyabean Oil Supplier from India","Non GMO Soyabean Oil Supplier in Karnataka","Non GMO Soyabean Oil Supplier in Bengaluru","Non GMO Soyabean Oil Supplier in Bangalore",
    // ── Crude Soya Oil ──
    "Crude Soya Oil Manufacturer","Crude Soya Oil Manufacturer in India","Crude Soya Oil Manufacturer from India","Crude Soya Oil Manufacturer in Karnataka","Crude Soya Oil Manufacturer in Bengaluru","Crude Soya Oil Manufacturer in Bangalore",
    "Crude Soya Oil Exporter","Crude Soya Oil Exporter in India","Crude Soya Oil Exporter from India","Crude Soya Oil Exporter in Karnataka","Crude Soya Oil Exporter in Bengaluru","Crude Soya Oil Exporter in Bangalore",
    "Crude Soya Oil Supplier","Crude Soya Oil Supplier in India","Crude Soya Oil Supplier from India","Crude Soya Oil Supplier in Karnataka","Crude Soya Oil Supplier in Bengaluru","Crude Soya Oil Supplier in Bangalore",
    "Non GMO Crude Soya Oil Manufacturer","Non GMO Crude Soya Oil Manufacturer in India","Non GMO Crude Soya Oil Manufacturer from India","Non GMO Crude Soya Oil Manufacturer in Karnataka","Non GMO Crude Soya Oil Manufacturer in Bengaluru","Non GMO Crude Soya Oil Manufacturer in Bangalore",
    "Non GMO Crude Soya Oil Exporter","Non GMO Crude Soya Oil Exporter in India","Non GMO Crude Soya Oil Exporter from India","Non GMO Crude Soya Oil Exporter in Karnataka","Non GMO Crude Soya Oil Exporter in Bengaluru","Non GMO Crude Soya Oil Exporter in Bangalore",
    "Non GMO Crude Soya Oil Supplier","Non GMO Crude Soya Oil Supplier in India","Non GMO Crude Soya Oil Supplier from India","Non GMO Crude Soya Oil Supplier in Karnataka","Non GMO Crude Soya Oil Supplier in Bengaluru","Non GMO Crude Soya Oil Supplier in Bangalore",
    // ── Crude Soybean Oil ──
    "Crude Soybean Oil Manufacturer","Crude Soybean Oil Manufacturer in India","Crude Soybean Oil Manufacturer from India","Crude Soybean Oil Manufacturer in Karnataka","Crude Soybean Oil Manufacturer in Bengaluru","Crude Soybean Oil Manufacturer in Bangalore",
    "Crude Soybean Oil Exporter","Crude Soybean Oil Exporter in India","Crude Soybean Oil Exporter from India","Crude Soybean Oil Exporter in Karnataka","Crude Soybean Oil Exporter in Bengaluru","Crude Soybean Oil Exporter in Bangalore",
    "Crude Soybean Oil Supplier","Crude Soybean Oil Supplier in India","Crude Soybean Oil Supplier from India","Crude Soybean Oil Supplier in Karnataka","Crude Soybean Oil Supplier in Bengaluru","Crude Soybean Oil Supplier in Bangalore",
    "Non GMO Crude Soybean Oil Manufacturer","Non GMO Crude Soybean Oil Manufacturer in India","Non GMO Crude Soybean Oil Manufacturer from India","Non GMO Crude Soybean Oil Manufacturer in Karnataka","Non GMO Crude Soybean Oil Manufacturer in Bengaluru","Non GMO Crude Soybean Oil Manufacturer in Bangalore",
    "Non GMO Crude Soybean Oil Exporter","Non GMO Crude Soybean Oil Exporter in India","Non GMO Crude Soybean Oil Exporter from India","Non GMO Crude Soybean Oil Exporter in Karnataka","Non GMO Crude Soybean Oil Exporter in Bengaluru","Non GMO Crude Soybean Oil Exporter in Bangalore",
    "Non GMO Crude Soybean Oil Supplier","Non GMO Crude Soybean Oil Supplier in India","Non GMO Crude Soybean Oil Supplier from India","Non GMO Crude Soybean Oil Supplier in Karnataka","Non GMO Crude Soybean Oil Supplier in Bengaluru","Non GMO Crude Soybean Oil Supplier in Bangalore",
    // ── Crude Soyabean Oil ──
    "Crude Soyabean Oil Manufacturer","Crude Soyabean Oil Manufacturer in India","Crude Soyabean Oil Manufacturer from India","Crude Soyabean Oil Manufacturer in Karnataka","Crude Soyabean Oil Manufacturer in Bengaluru","Crude Soyabean Oil Manufacturer in Bangalore",
    "Crude Soyabean Oil Exporter","Crude Soyabean Oil Exporter in India","Crude Soyabean Oil Exporter from India","Crude Soyabean Oil Exporter in Karnataka","Crude Soyabean Oil Exporter in Bengaluru","Crude Soyabean Oil Exporter in Bangalore",
    "Crude Soyabean Oil Supplier","Crude Soyabean Oil Supplier in India","Crude Soyabean Oil Supplier from India","Crude Soyabean Oil Supplier in Karnataka","Crude Soyabean Oil Supplier in Bengaluru","Crude Soyabean Oil Supplier in Bangalore",
    "Non GMO Crude Soyabean Oil Manufacturer","Non GMO Crude Soyabean Oil Manufacturer in India","Non GMO Crude Soyabean Oil Manufacturer from India","Non GMO Crude Soyabean Oil Manufacturer in Karnataka","Non GMO Crude Soyabean Oil Manufacturer in Bengaluru","Non GMO Crude Soyabean Oil Manufacturer in Bangalore",
    "Non GMO Crude Soyabean Oil Exporter","Non GMO Crude Soyabean Oil Exporter in India","Non GMO Crude Soyabean Oil Exporter from India","Non GMO Crude Soyabean Oil Exporter in Karnataka","Non GMO Crude Soyabean Oil Exporter in Bengaluru","Non GMO Crude Soyabean Oil Exporter in Bangalore",
    "Non GMO Crude Soyabean Oil Supplier","Non GMO Crude Soyabean Oil Supplier in India","Non GMO Crude Soyabean Oil Supplier from India","Non GMO Crude Soyabean Oil Supplier in Karnataka","Non GMO Crude Soyabean Oil Supplier in Bengaluru","Non GMO Crude Soyabean Oil Supplier in Bangalore",
    // ── Cold Press Crude Soybean Oil ──
    "Cold Press Crude Soybean Oil Manufacturer","Cold Press Crude Soybean Oil Manufacturer in India","Cold Press Crude Soybean Oil Manufacturer from India","Cold Press Crude Soybean Oil Manufacturer in Karnataka","Cold Press Crude Soybean Oil Manufacturer in Bengaluru","Cold Press Crude Soybean Oil Manufacturer in Bangalore",
    "Cold Press Crude Soybean Oil Exporter","Cold Press Crude Soybean Oil Exporter in India","Cold Press Crude Soybean Oil Exporter from India","Cold Press Crude Soybean Oil Exporter in Karnataka","Cold Press Crude Soybean Oil Exporter in Bengaluru","Cold Press Crude Soybean Oil Exporter in Bangalore",
    "Cold Press Crude Soybean Oil Supplier","Cold Press Crude Soybean Oil Supplier in India","Cold Press Crude Soybean Oil Supplier from India","Cold Press Crude Soybean Oil Supplier in Karnataka","Cold Press Crude Soybean Oil Supplier in Bengaluru","Cold Press Crude Soybean Oil Supplier in Bangalore",
    "Non GMO Cold Press Crude Soybean Oil Manufacturer","Non GMO Cold Press Crude Soybean Oil Manufacturer in India","Non GMO Cold Press Crude Soybean Oil Manufacturer from India","Non GMO Cold Press Crude Soybean Oil Manufacturer in Karnataka","Non GMO Cold Press Crude Soybean Oil Manufacturer in Bengaluru","Non GMO Cold Press Crude Soybean Oil Manufacturer in Bangalore",
    "Non GMO Cold Press Crude Soybean Oil Exporter","Non GMO Cold Press Crude Soybean Oil Exporter in India","Non GMO Cold Press Crude Soybean Oil Exporter from India","Non GMO Cold Press Crude Soybean Oil Exporter in Karnataka","Non GMO Cold Press Crude Soybean Oil Exporter in Bengaluru","Non GMO Cold Press Crude Soybean Oil Exporter in Bangalore",
    "Non GMO Cold Press Crude Soybean Oil Supplier","Non GMO Cold Press Crude Soybean Oil Supplier in India","Non GMO Cold Press Crude Soybean Oil Supplier from India","Non GMO Cold Press Crude Soybean Oil Supplier in Karnataka","Non GMO Cold Press Crude Soybean Oil Supplier in Bengaluru","Non GMO Cold Press Crude Soybean Oil Supplier in Bangalore",
    // ── GROUP 3: Soyabean (Raw) ──
    "Soyabean Supplier","Soyabean Supplier in India","Soyabean Supplier from India","Soyabean Supplier in Karnataka","Soyabean Supplier in Bengaluru","Soyabean Supplier in Bangalore",
    "Soyabean Exporter","Soyabean Exporter in India","Soyabean Exporter from India","Soyabean Exporter in Karnataka","Soyabean Exporter in Bengaluru","Soyabean Exporter in Bangalore",
    "Non GMO Soyabean Supplier","Non GMO Soyabean Supplier in India","Non GMO Soyabean Supplier from India","Non GMO Soyabean Supplier in Karnataka","Non GMO Soyabean Supplier in Bengaluru","Non GMO Soyabean Supplier in Bangalore",
    "Non GMO Soyabean Exporter","Non GMO Soyabean Exporter in India","Non GMO Soyabean Exporter from India","Non GMO Soyabean Exporter in Karnataka","Non GMO Soyabean Exporter in Bengaluru","Non GMO Soyabean Exporter in Bangalore",
    // ── Soybean (Raw) ──
    "Soybean Supplier","Soybean Supplier in India","Soybean Supplier from India","Soybean Supplier in Karnataka","Soybean Supplier in Bengaluru","Soybean Supplier in Bangalore",
    "Soybean Exporter","Soybean Exporter in India","Soybean Exporter from India","Soybean Exporter in Karnataka","Soybean Exporter in Bengaluru","Soybean Exporter in Bangalore",
    "Non GMO Soybean Supplier","Non GMO Soybean Supplier in India","Non GMO Soybean Supplier from India","Non GMO Soybean Supplier in Karnataka","Non GMO Soybean Supplier in Bengaluru","Non GMO Soybean Supplier in Bangalore",
    "Non GMO Soybean Exporter","Non GMO Soybean Exporter in India","Non GMO Soybean Exporter from India","Non GMO Soybean Exporter in Karnataka","Non GMO Soybean Exporter in Bengaluru","Non GMO Soybean Exporter in Bangalore",
    // ── Soya bean (Raw) ──
    "Soya bean Supplier","Soya bean Supplier in India","Soya bean Supplier from India","Soya bean Supplier in Karnataka","Soya bean Supplier in Bengaluru","Soya bean Supplier in Bangalore",
    "Soya bean Exporter","Soya bean Exporter in India","Soya bean Exporter from India","Soya bean Exporter in Karnataka","Soya bean Exporter in Bengaluru","Soya bean Exporter in Bangalore",
    "Non GMO Soya bean Supplier","Non GMO Soya bean Supplier in India","Non GMO Soya bean Supplier from India","Non GMO Soya bean Supplier in Karnataka","Non GMO Soya bean Supplier in Bengaluru","Non GMO Soya bean Supplier in Bangalore",
    "Non GMO Soya bean Exporter","Non GMO Soya bean Exporter in India","Non GMO Soya bean Exporter from India","Non GMO Soya bean Exporter in Karnataka","Non GMO Soya bean Exporter in Bengaluru","Non GMO Soya bean Exporter in Bangalore",
    // ── Soy bean (Raw) ──
    "Soy bean Supplier","Soy bean Supplier in India","Soy bean Supplier from India","Soy bean Supplier in Karnataka","Soy bean Supplier in Bengaluru","Soy bean Supplier in Bangalore",
    "Soy bean Exporter","Soy bean Exporter in India","Soy bean Exporter from India","Soy bean Exporter in Karnataka","Soy bean Exporter in Bengaluru","Soy bean Exporter in Bangalore",
    "Non GMO Soy bean Supplier","Non GMO Soy bean Supplier in India","Non GMO Soy bean Supplier from India","Non GMO Soy bean Supplier in Karnataka","Non GMO Soy bean Supplier in Bengaluru","Non GMO Soy bean Supplier in Bangalore",
    "Non GMO Soy bean Exporter","Non GMO Soy bean Exporter in India","Non GMO Soy bean Exporter from India","Non GMO Soy bean Exporter in Karnataka","Non GMO Soy bean Exporter in Bengaluru","Non GMO Soy bean Exporter in Bangalore",
    // ── GROUP 4: for Poultry Feed ──
    "Soya Meal for Poultry Feed","Soybean Meal for Poultry Feed","Soyabean Meal for Poultry Feed","Soy Meal for Poultry Feed","Soya Oil Cake for Poultry Feed","Soybean Oil Cake for Poultry Feed","Soyabean Oil Cake for Poultry Feed","Soy Oil Cake for Poultry Feed",
    "Non GMO Soya Meal for Poultry Feed","Non GMO Soybean Meal for Poultry Feed","Non GMO Soyabean Meal for Poultry Feed","Non GMO Soy Meal for Poultry Feed","Non GMO Soya Oil Cake for Poultry Feed","Non GMO Soybean Oil Cake for Poultry Feed","Non GMO Soyabean Oil Cake for Poultry Feed","Non GMO Soy Oil Cake for Poultry Feed",
    "Soya Meal Manufacturer for Poultry Feed","Soybean Meal Manufacturer for Poultry Feed","Soyabean Meal Manufacturer for Poultry Feed","Soy Meal Manufacturer for Poultry Feed","Soya Oil Cake Manufacturer for Poultry Feed","Soybean Oil Cake Manufacturer for Poultry Feed","Soyabean Oil Cake Manufacturer for Poultry Feed","Soy Oil Cake Manufacturer for Poultry Feed",
    "Non GMO Soya Meal Manufacturer for Poultry Feed","Non GMO Soybean Meal Manufacturer for Poultry Feed","Non GMO Soyabean Meal Manufacturer for Poultry Feed","Non GMO Soy Meal Manufacturer for Poultry Feed","Non GMO Soya Oil Cake Manufacturer for Poultry Feed","Non GMO Soybean Oil Cake Manufacturer for Poultry Feed","Non GMO Soyabean Oil Cake Manufacturer for Poultry Feed","Non GMO Soy Oil Cake Manufacturer for Poultry Feed",
    "Soya Meal Exporter for Poultry Feed","Soybean Meal Exporter for Poultry Feed","Soyabean Meal Exporter for Poultry Feed","Soy Meal Exporter for Poultry Feed","Soya Oil Cake Exporter for Poultry Feed","Soybean Oil Cake Exporter for Poultry Feed","Soyabean Oil Cake Exporter for Poultry Feed","Soy Oil Cake Exporter for Poultry Feed",
    "Non GMO Soya Meal Exporter for Poultry Feed","Non GMO Soybean Meal Exporter for Poultry Feed","Non GMO Soyabean Meal Exporter for Poultry Feed","Non GMO Soy Meal Exporter for Poultry Feed","Non GMO Soya Oil Cake Exporter for Poultry Feed","Non GMO Soybean Oil Cake Exporter for Poultry Feed","Non GMO Soyabean Oil Cake Exporter for Poultry Feed","Non GMO Soy Oil Cake Exporter for Poultry Feed",
    "Soya Meal Supplier for Poultry Feed","Soybean Meal Supplier for Poultry Feed","Soyabean Meal Supplier for Poultry Feed","Soy Meal Supplier for Poultry Feed","Soya Oil Cake Supplier for Poultry Feed","Soybean Oil Cake Supplier for Poultry Feed","Soyabean Oil Cake Supplier for Poultry Feed","Soy Oil Cake Supplier for Poultry Feed",
    "Non GMO Soya Meal Supplier for Poultry Feed","Non GMO Soybean Meal Supplier for Poultry Feed","Non GMO Soyabean Meal Supplier for Poultry Feed","Non GMO Soy Meal Supplier for Poultry Feed","Non GMO Soya Oil Cake Supplier for Poultry Feed","Non GMO Soybean Oil Cake Supplier for Poultry Feed","Non GMO Soyabean Oil Cake Supplier for Poultry Feed","Non GMO Soy Oil Cake Supplier for Poultry Feed",
    // ── GROUP 5: for Broiler ──
    "Soya Meal for Broiler","Soybean Meal for Broiler","Soyabean Meal for Broiler","Soy Meal for Broiler","Soya Oil Cake for Broiler","Soybean Oil Cake for Broiler","Soyabean Oil Cake for Broiler","Soy Oil Cake for Broiler",
    "Non GMO Soya Meal for Broiler","Non GMO Soybean Meal for Broiler","Non GMO Soyabean Meal for Broiler","Non GMO Soy Meal for Broiler","Non GMO Soya Oil Cake for Broiler","Non GMO Soybean Oil Cake for Broiler","Non GMO Soyabean Oil Cake for Broiler","Non GMO Soy Oil Cake for Broiler",
    "Soya Meal Manufacturer for Broiler","Soybean Meal Manufacturer for Broiler","Soyabean Meal Manufacturer for Broiler","Soy Meal Manufacturer for Broiler","Soya Oil Cake Manufacturer for Broiler","Soybean Oil Cake Manufacturer for Broiler","Soyabean Oil Cake Manufacturer for Broiler","Soy Oil Cake Manufacturer for Broiler",
    "Non GMO Soya Meal Manufacturer for Broiler","Non GMO Soybean Meal Manufacturer for Broiler","Non GMO Soyabean Meal Manufacturer for Broiler","Non GMO Soy Meal Manufacturer for Broiler","Non GMO Soya Oil Cake Manufacturer for Broiler","Non GMO Soybean Oil Cake Manufacturer for Broiler","Non GMO Soyabean Oil Cake Manufacturer for Broiler","Non GMO Soy Oil Cake Manufacturer for Broiler",
    "Soya Meal Exporter for Broiler","Soybean Meal Exporter for Broiler","Soyabean Meal Exporter for Broiler","Soy Meal Exporter for Broiler","Soya Oil Cake Exporter for Broiler","Soybean Oil Cake Exporter for Broiler","Soyabean Oil Cake Exporter for Broiler","Soy Oil Cake Exporter for Broiler",
    "Non GMO Soya Meal Exporter for Broiler","Non GMO Soybean Meal Exporter for Broiler","Non GMO Soyabean Meal Exporter for Broiler","Non GMO Soy Meal Exporter for Broiler","Non GMO Soya Oil Cake Exporter for Broiler","Non GMO Soybean Oil Cake Exporter for Broiler","Non GMO Soyabean Oil Cake Exporter for Broiler","Non GMO Soy Oil Cake Exporter for Broiler",
    "Soya Meal Supplier for Broiler","Soybean Meal Supplier for Broiler","Soyabean Meal Supplier for Broiler","Soy Meal Supplier for Broiler","Soya Oil Cake Supplier for Broiler","Soybean Oil Cake Supplier for Broiler","Soyabean Oil Cake Supplier for Broiler","Soy Oil Cake Supplier for Broiler",
    "Non GMO Soya Meal Supplier for Broiler","Non GMO Soybean Meal Supplier for Broiler","Non GMO Soyabean Meal Supplier for Broiler","Non GMO Soy Meal Supplier for Broiler","Non GMO Soya Oil Cake Supplier for Broiler","Non GMO Soybean Oil Cake Supplier for Broiler","Non GMO Soyabean Oil Cake Supplier for Broiler","Non GMO Soy Oil Cake Supplier for Broiler",
    // ── GROUP 6: for Broiler Breeder ──
    "Soya Meal for Broiler Breeder","Soybean Meal for Broiler Breeder","Soyabean Meal for Broiler Breeder","Soy Meal for Broiler Breeder","Soya Oil Cake for Broiler Breeder","Soybean Oil Cake for Broiler Breeder","Soyabean Oil Cake for Broiler Breeder","Soy Oil Cake for Broiler Breeder",
    "Non GMO Soya Meal for Broiler Breeder","Non GMO Soybean Meal for Broiler Breeder","Non GMO Soyabean Meal for Broiler Breeder","Non GMO Soy Meal for Broiler Breeder","Non GMO Soya Oil Cake for Broiler Breeder","Non GMO Soybean Oil Cake for Broiler Breeder","Non GMO Soyabean Oil Cake for Broiler Breeder","Non GMO Soy Oil Cake for Broiler Breeder",
    "Soya Meal Manufacturer for Broiler Breeder","Soybean Meal Manufacturer for Broiler Breeder","Soyabean Meal Manufacturer for Broiler Breeder","Soy Meal Manufacturer for Broiler Breeder","Soya Oil Cake Manufacturer for Broiler Breeder","Soybean Oil Cake Manufacturer for Broiler Breeder","Soyabean Oil Cake Manufacturer for Broiler Breeder","Soy Oil Cake Manufacturer for Broiler Breeder",
    "Non GMO Soya Meal Manufacturer for Broiler Breeder","Non GMO Soybean Meal Manufacturer for Broiler Breeder","Non GMO Soyabean Meal Manufacturer for Broiler Breeder","Non GMO Soy Meal Manufacturer for Broiler Breeder","Non GMO Soya Oil Cake Manufacturer for Broiler Breeder","Non GMO Soybean Oil Cake Manufacturer for Broiler Breeder","Non GMO Soyabean Oil Cake Manufacturer for Broiler Breeder","Non GMO Soy Oil Cake Manufacturer for Broiler Breeder",
    "Soya Meal Exporter for Broiler Breeder","Soybean Meal Exporter for Broiler Breeder","Soyabean Meal Exporter for Broiler Breeder","Soy Meal Exporter for Broiler Breeder","Soya Oil Cake Exporter for Broiler Breeder","Soybean Oil Cake Exporter for Broiler Breeder","Soyabean Oil Cake Exporter for Broiler Breeder","Soy Oil Cake Exporter for Broiler Breeder",
    "Non GMO Soya Meal Exporter for Broiler Breeder","Non GMO Soybean Meal Exporter for Broiler Breeder","Non GMO Soyabean Meal Exporter for Broiler Breeder","Non GMO Soy Meal Exporter for Broiler Breeder","Non GMO Soya Oil Cake Exporter for Broiler Breeder","Non GMO Soybean Oil Cake Exporter for Broiler Breeder","Non GMO Soyabean Oil Cake Exporter for Broiler Breeder","Non GMO Soy Oil Cake Exporter for Broiler Breeder",
    "Soya Meal Supplier for Broiler Breeder","Soybean Meal Supplier for Broiler Breeder","Soyabean Meal Supplier for Broiler Breeder","Soy Meal Supplier for Broiler Breeder","Soya Oil Cake Supplier for Broiler Breeder","Soybean Oil Cake Supplier for Broiler Breeder","Soyabean Oil Cake Supplier for Broiler Breeder","Soy Oil Cake Supplier for Broiler Breeder",
    "Non GMO Soya Meal Supplier for Broiler Breeder","Non GMO Soybean Meal Supplier for Broiler Breeder","Non GMO Soyabean Meal Supplier for Broiler Breeder","Non GMO Soy Meal Supplier for Broiler Breeder","Non GMO Soya Oil Cake Supplier for Broiler Breeder","Non GMO Soybean Oil Cake Supplier for Broiler Breeder","Non GMO Soyabean Oil Cake Supplier for Broiler Breeder","Non GMO Soy Oil Cake Supplier for Broiler Breeder",
    // ── GROUP 7: for Weight Layer Birds ──
    "Soya Meal for Weight Layer Birds","Soybean Meal for Weight Layer Birds","Soyabean Meal for Weight Layer Birds","Soy Meal for Weight Layer Birds","Soya Oil Cake for Weight Layer Birds","Soybean Oil Cake for Weight Layer Birds","Soyabean Oil Cake for Weight Layer Birds","Soy Oil Cake for Weight Layer Birds",
    "Non GMO Soya Meal for Weight Layer Birds","Non GMO Soybean Meal for Weight Layer Birds","Non GMO Soyabean Meal for Weight Layer Birds","Non GMO Soy Meal for Weight Layer Birds","Non GMO Soya Oil Cake for Weight Layer Birds","Non GMO Soybean Oil Cake for Weight Layer Birds","Non GMO Soyabean Oil Cake for Weight Layer Birds","Non GMO Soy Oil Cake for Weight Layer Birds",
    "Soya Meal Manufacturer for Weight Layer Birds","Soybean Meal Manufacturer for Weight Layer Birds","Soyabean Meal Manufacturer for Weight Layer Birds","Soy Meal Manufacturer for Weight Layer Birds","Soya Oil Cake Manufacturer for Weight Layer Birds","Soybean Oil Cake Manufacturer for Weight Layer Birds","Soyabean Oil Cake Manufacturer for Weight Layer Birds","Soy Oil Cake Manufacturer for Weight Layer Birds",
    "Non GMO Soya Meal Manufacturer for Weight Layer Birds","Non GMO Soybean Meal Manufacturer for Weight Layer Birds","Non GMO Soyabean Meal Manufacturer for Weight Layer Birds","Non GMO Soy Meal Manufacturer for Weight Layer Birds","Non GMO Soya Oil Cake Manufacturer for Weight Layer Birds","Non GMO Soybean Oil Cake Manufacturer for Weight Layer Birds","Non GMO Soyabean Oil Cake Manufacturer for Weight Layer Birds","Non GMO Soy Oil Cake Manufacturer for Weight Layer Birds",
    "Soya Meal Exporter for Weight Layer Birds","Soybean Meal Exporter for Weight Layer Birds","Soyabean Meal Exporter for Weight Layer Birds","Soy Meal Exporter for Weight Layer Birds","Soya Oil Cake Exporter for Weight Layer Birds","Soybean Oil Cake Exporter for Weight Layer Birds","Soyabean Oil Cake Exporter for Weight Layer Birds","Soy Oil Cake Exporter for Weight Layer Birds",
    "Non GMO Soya Meal Exporter for Weight Layer Birds","Non GMO Soybean Meal Exporter for Weight Layer Birds","Non GMO Soyabean Meal Exporter for Weight Layer Birds","Non GMO Soy Meal Exporter for Weight Layer Birds","Non GMO Soya Oil Cake Exporter for Weight Layer Birds","Non GMO Soybean Oil Cake Exporter for Weight Layer Birds","Non GMO Soyabean Oil Cake Exporter for Weight Layer Birds","Non GMO Soy Oil Cake Exporter for Weight Layer Birds",
    "Soya Meal Supplier for Weight Layer Birds","Soybean Meal Supplier for Weight Layer Birds","Soyabean Meal Supplier for Weight Layer Birds","Soy Meal Supplier for Weight Layer Birds","Soya Oil Cake Supplier for Weight Layer Birds","Soybean Oil Cake Supplier for Weight Layer Birds","Soyabean Oil Cake Supplier for Weight Layer Birds","Soy Oil Cake Supplier for Weight Layer Birds",
    "Non GMO Soya Meal Supplier for Weight Layer Birds","Non GMO Soybean Meal Supplier for Weight Layer Birds","Non GMO Soyabean Meal Supplier for Weight Layer Birds","Non GMO Soy Meal Supplier for Weight Layer Birds","Non GMO Soya Oil Cake Supplier for Weight Layer Birds","Non GMO Soybean Oil Cake Supplier for Weight Layer Birds","Non GMO Soyabean Oil Cake Supplier for Weight Layer Birds","Non GMO Soy Oil Cake Supplier for Weight Layer Birds",
    // ── GROUP 8: for Animal Feed ──
    "Soya Meal for Animal Feed","Soybean Meal for Animal Feed","Soyabean Meal for Animal Feed","Soy Meal for Animal Feed","Soya Oil Cake for Animal Feed","Soybean Oil Cake for Animal Feed","Soyabean Oil Cake for Animal Feed","Soy Oil Cake for Animal Feed",
    "Non GMO Soya Meal for Animal Feed","Non GMO Soybean Meal for Animal Feed","Non GMO Soyabean Meal for Animal Feed","Non GMO Soy Meal for Animal Feed","Non GMO Soya Oil Cake for Animal Feed","Non GMO Soybean Oil Cake for Animal Feed","Non GMO Soyabean Oil Cake for Animal Feed","Non GMO Soy Oil Cake for Animal Feed",
    "Soya Meal Manufacturer for Animal Feed","Soybean Meal Manufacturer for Animal Feed","Soyabean Meal Manufacturer for Animal Feed","Soy Meal Manufacturer for Animal Feed","Soya Oil Cake Manufacturer for Animal Feed","Soybean Oil Cake Manufacturer for Animal Feed","Soyabean Oil Cake Manufacturer for Animal Feed","Soy Oil Cake Manufacturer for Animal Feed",
    "Non GMO Soya Meal Manufacturer for Animal Feed","Non GMO Soybean Meal Manufacturer for Animal Feed","Non GMO Soyabean Meal Manufacturer for Animal Feed","Non GMO Soy Meal Manufacturer for Animal Feed","Non GMO Soya Oil Cake Manufacturer for Animal Feed","Non GMO Soybean Oil Cake Manufacturer for Animal Feed","Non GMO Soyabean Oil Cake Manufacturer for Animal Feed","Non GMO Soy Oil Cake Manufacturer for Animal Feed",
    "Soya Meal Exporter for Animal Feed","Soybean Meal Exporter for Animal Feed","Soyabean Meal Exporter for Animal Feed","Soy Meal Exporter for Animal Feed","Soya Oil Cake Exporter for Animal Feed","Soybean Oil Cake Exporter for Animal Feed","Soyabean Oil Cake Exporter for Animal Feed","Soy Oil Cake Exporter for Animal Feed",
    "Non GMO Soya Meal Exporter for Animal Feed","Non GMO Soybean Meal Exporter for Animal Feed","Non GMO Soyabean Meal Exporter for Animal Feed","Non GMO Soy Meal Exporter for Animal Feed","Non GMO Soya Oil Cake Exporter for Animal Feed","Non GMO Soybean Oil Cake Exporter for Animal Feed","Non GMO Soyabean Oil Cake Exporter for Animal Feed","Non GMO Soy Oil Cake Exporter for Animal Feed",
    "Soya Meal Supplier for Animal Feed","Soybean Meal Supplier for Animal Feed","Soyabean Meal Supplier for Animal Feed","Soy Meal Supplier for Animal Feed","Soya Oil Cake Supplier for Animal Feed","Soybean Oil Cake Supplier for Animal Feed","Soyabean Oil Cake Supplier for Animal Feed","Soy Oil Cake Supplier for Animal Feed",
    "Non GMO Soya Meal Supplier for Animal Feed","Non GMO Soybean Meal Supplier for Animal Feed","Non GMO Soyabean Meal Supplier for Animal Feed","Non GMO Soy Meal Supplier for Animal Feed","Non GMO Soya Oil Cake Supplier for Animal Feed","Non GMO Soybean Oil Cake Supplier for Animal Feed","Non GMO Soyabean Oil Cake Supplier for Animal Feed","Non GMO Soy Oil Cake Supplier for Animal Feed",
    // ── GROUP 9: for Horse Feed ──
    "Soya Meal for Horse Feed","Soybean Meal for Horse Feed","Soyabean Meal for Horse Feed","Soy Meal for Horse Feed","Soya Oil Cake for Horse Feed","Soybean Oil Cake for Horse Feed","Soyabean Oil Cake for Horse Feed","Soy Oil Cake for Horse Feed",
    "Non GMO Soya Meal for Horse Feed","Non GMO Soybean Meal for Horse Feed","Non GMO Soyabean Meal for Horse Feed","Non GMO Soy Meal for Horse Feed","Non GMO Soya Oil Cake for Horse Feed","Non GMO Soybean Oil Cake for Horse Feed","Non GMO Soyabean Oil Cake for Horse Feed","Non GMO Soy Oil Cake for Horse Feed",
    "Soya Meal Manufacturer for Horse Feed","Soybean Meal Manufacturer for Horse Feed","Soyabean Meal Manufacturer for Horse Feed","Soy Meal Manufacturer for Horse Feed","Soya Oil Cake Manufacturer for Horse Feed","Soybean Oil Cake Manufacturer for Horse Feed","Soyabean Oil Cake Manufacturer for Horse Feed","Soy Oil Cake Manufacturer for Horse Feed",
    "Non GMO Soya Meal Manufacturer for Horse Feed","Non GMO Soybean Meal Manufacturer for Horse Feed","Non GMO Soyabean Meal Manufacturer for Horse Feed","Non GMO Soy Meal Manufacturer for Horse Feed","Non GMO Soya Oil Cake Manufacturer for Horse Feed","Non GMO Soybean Oil Cake Manufacturer for Horse Feed","Non GMO Soyabean Oil Cake Manufacturer for Horse Feed","Non GMO Soy Oil Cake Manufacturer for Horse Feed",
    "Soya Meal Exporter for Horse Feed","Soybean Meal Exporter for Horse Feed","Soyabean Meal Exporter for Horse Feed","Soy Meal Exporter for Horse Feed","Soya Oil Cake Exporter for Horse Feed","Soybean Oil Cake Exporter for Horse Feed","Soyabean Oil Cake Exporter for Horse Feed","Soy Oil Cake Exporter for Horse Feed",
    "Non GMO Soya Meal Exporter for Horse Feed","Non GMO Soybean Meal Exporter for Horse Feed","Non GMO Soyabean Meal Exporter for Horse Feed","Non GMO Soy Meal Exporter for Horse Feed","Non GMO Soya Oil Cake Exporter for Horse Feed","Non GMO Soybean Oil Cake Exporter for Horse Feed","Non GMO Soyabean Oil Cake Exporter for Horse Feed","Non GMO Soy Oil Cake Exporter for Horse Feed",
    "Soya Meal Supplier for Horse Feed","Soybean Meal Supplier for Horse Feed","Soyabean Meal Supplier for Horse Feed","Soy Meal Supplier for Horse Feed","Soya Oil Cake Supplier for Horse Feed","Soybean Oil Cake Supplier for Horse Feed","Soyabean Oil Cake Supplier for Horse Feed","Soy Oil Cake Supplier for Horse Feed",
    "Non GMO Soya Meal Supplier for Horse Feed","Non GMO Soybean Meal Supplier for Horse Feed","Non GMO Soyabean Meal Supplier for Horse Feed","Non GMO Soy Meal Supplier for Horse Feed","Non GMO Soya Oil Cake Supplier for Horse Feed","Non GMO Soybean Oil Cake Supplier for Horse Feed","Non GMO Soyabean Oil Cake Supplier for Horse Feed","Non GMO Soy Oil Cake Supplier for Horse Feed",
    // ── GROUP 10: for Pig Feed ──
    "Soya Meal for Pig Feed","Soybean Meal for Pig Feed","Soyabean Meal for Pig Feed","Soy Meal for Pig Feed","Soya Oil Cake for Pig Feed","Soybean Oil Cake for Pig Feed","Soyabean Oil Cake for Pig Feed","Soy Oil Cake for Pig Feed",
    "Non GMO Soya Meal for Pig Feed","Non GMO Soybean Meal for Pig Feed","Non GMO Soyabean Meal for Pig Feed","Non GMO Soy Meal for Pig Feed","Non GMO Soya Oil Cake for Pig Feed","Non GMO Soybean Oil Cake for Pig Feed","Non GMO Soyabean Oil Cake for Pig Feed","Non GMO Soy Oil Cake for Pig Feed",
    "Soya Meal Manufacturer for Pig Feed","Soybean Meal Manufacturer for Pig Feed","Soyabean Meal Manufacturer for Pig Feed","Soy Meal Manufacturer for Pig Feed","Soya Oil Cake Manufacturer for Pig Feed","Soybean Oil Cake Manufacturer for Pig Feed","Soyabean Oil Cake Manufacturer for Pig Feed","Soy Oil Cake Manufacturer for Pig Feed",
    "Non GMO Soya Meal Manufacturer for Pig Feed","Non GMO Soybean Meal Manufacturer for Pig Feed","Non GMO Soyabean Meal Manufacturer for Pig Feed","Non GMO Soy Meal Manufacturer for Pig Feed","Non GMO Soya Oil Cake Manufacturer for Pig Feed","Non GMO Soybean Oil Cake Manufacturer for Pig Feed","Non GMO Soyabean Oil Cake Manufacturer for Pig Feed","Non GMO Soy Oil Cake Manufacturer for Pig Feed",
    "Soya Meal Exporter for Pig Feed","Soybean Meal Exporter for Pig Feed","Soyabean Meal Exporter for Pig Feed","Soy Meal Exporter for Pig Feed","Soya Oil Cake Exporter for Pig Feed","Soybean Oil Cake Exporter for Pig Feed","Soyabean Oil Cake Exporter for Pig Feed","Soy Oil Cake Exporter for Pig Feed",
    "Non GMO Soya Meal Exporter for Pig Feed","Non GMO Soybean Meal Exporter for Pig Feed","Non GMO Soyabean Meal Exporter for Pig Feed","Non GMO Soy Meal Exporter for Pig Feed","Non GMO Soya Oil Cake Exporter for Pig Feed","Non GMO Soybean Oil Cake Exporter for Pig Feed","Non GMO Soyabean Oil Cake Exporter for Pig Feed","Non GMO Soy Oil Cake Exporter for Pig Feed",
    "Soya Meal Supplier for Pig Feed","Soybean Meal Supplier for Pig Feed","Soyabean Meal Supplier for Pig Feed","Soy Meal Supplier for Pig Feed","Soya Oil Cake Supplier for Pig Feed","Soybean Oil Cake Supplier for Pig Feed","Soyabean Oil Cake Supplier for Pig Feed","Soy Oil Cake Supplier for Pig Feed",
    "Non GMO Soya Meal Supplier for Pig Feed","Non GMO Soybean Meal Supplier for Pig Feed","Non GMO Soyabean Meal Supplier for Pig Feed","Non GMO Soy Meal Supplier for Pig Feed","Non GMO Soya Oil Cake Supplier for Pig Feed","Non GMO Soybean Oil Cake Supplier for Pig Feed","Non GMO Soyabean Oil Cake Supplier for Pig Feed","Non GMO Soy Oil Cake Supplier for Pig Feed",
    // ── GROUP 11: for Swine Feed ──
    "Soya Meal for Swine Feed","Soybean Meal for Swine Feed","Soyabean Meal for Swine Feed","Soy Meal for Swine Feed","Soya Oil Cake for Swine Feed","Soybean Oil Cake for Swine Feed","Soyabean Oil Cake for Swine Feed","Soy Oil Cake for Swine Feed",
    "Non GMO Soya Meal for Swine Feed","Non GMO Soybean Meal for Swine Feed","Non GMO Soyabean Meal for Swine Feed","Non GMO Soy Meal for Swine Feed","Non GMO Soya Oil Cake for Swine Feed","Non GMO Soybean Oil Cake for Swine Feed","Non GMO Soyabean Oil Cake for Swine Feed","Non GMO Soy Oil Cake for Swine Feed",
    "Soya Meal Manufacturer for Swine Feed","Soybean Meal Manufacturer for Swine Feed","Soyabean Meal Manufacturer for Swine Feed","Soy Meal Manufacturer for Swine Feed","Soya Oil Cake Manufacturer for Swine Feed","Soybean Oil Cake Manufacturer for Swine Feed","Soyabean Oil Cake Manufacturer for Swine Feed","Soy Oil Cake Manufacturer for Swine Feed",
    "Non GMO Soya Meal Manufacturer for Swine Feed","Non GMO Soybean Meal Manufacturer for Swine Feed","Non GMO Soyabean Meal Manufacturer for Swine Feed","Non GMO Soy Meal Manufacturer for Swine Feed","Non GMO Soya Oil Cake Manufacturer for Swine Feed","Non GMO Soybean Oil Cake Manufacturer for Swine Feed","Non GMO Soyabean Oil Cake Manufacturer for Swine Feed","Non GMO Soy Oil Cake Manufacturer for Swine Feed",
    "Soya Meal Exporter for Swine Feed","Soybean Meal Exporter for Swine Feed","Soyabean Meal Exporter for Swine Feed","Soy Meal Exporter for Swine Feed","Soya Oil Cake Exporter for Swine Feed","Soybean Oil Cake Exporter for Swine Feed","Soyabean Oil Cake Exporter for Swine Feed","Soy Oil Cake Exporter for Swine Feed",
    "Non GMO Soya Meal Exporter for Swine Feed","Non GMO Soybean Meal Exporter for Swine Feed","Non GMO Soyabean Meal Exporter for Swine Feed","Non GMO Soy Meal Exporter for Swine Feed","Non GMO Soya Oil Cake Exporter for Swine Feed","Non GMO Soybean Oil Cake Exporter for Swine Feed","Non GMO Soyabean Oil Cake Exporter for Swine Feed","Non GMO Soy Oil Cake Exporter for Swine Feed",
    "Soya Meal Supplier for Swine Feed","Soybean Meal Supplier for Swine Feed","Soyabean Meal Supplier for Swine Feed","Soy Meal Supplier for Swine Feed","Soya Oil Cake Supplier for Swine Feed","Soybean Oil Cake Supplier for Swine Feed","Soyabean Oil Cake Supplier for Swine Feed","Soy Oil Cake Supplier for Swine Feed",
    "Non GMO Soya Meal Supplier for Swine Feed","Non GMO Soybean Meal Supplier for Swine Feed","Non GMO Soyabean Meal Supplier for Swine Feed","Non GMO Soy Meal Supplier for Swine Feed","Non GMO Soya Oil Cake Supplier for Swine Feed","Non GMO Soybean Oil Cake Supplier for Swine Feed","Non GMO Soyabean Oil Cake Supplier for Swine Feed","Non GMO Soy Oil Cake Supplier for Swine Feed",
    // ── GROUP 12: for Goat Feed ──
    "Soya Meal for Goat Feed","Soybean Meal for Goat Feed","Soyabean Meal for Goat Feed","Soy Meal for Goat Feed","Soya Oil Cake for Goat Feed","Soybean Oil Cake for Goat Feed","Soyabean Oil Cake for Goat Feed","Soy Oil Cake for Goat Feed",
    "Non GMO Soya Meal for Goat Feed","Non GMO Soybean Meal for Goat Feed","Non GMO Soyabean Meal for Goat Feed","Non GMO Soy Meal for Goat Feed","Non GMO Soya Oil Cake for Goat Feed","Non GMO Soybean Oil Cake for Goat Feed","Non GMO Soyabean Oil Cake for Goat Feed","Non GMO Soy Oil Cake for Goat Feed",
    "Soya Meal Manufacturer for Goat Feed","Soybean Meal Manufacturer for Goat Feed","Soyabean Meal Manufacturer for Goat Feed","Soy Meal Manufacturer for Goat Feed","Soya Oil Cake Manufacturer for Goat Feed","Soybean Oil Cake Manufacturer for Goat Feed","Soyabean Oil Cake Manufacturer for Goat Feed","Soy Oil Cake Manufacturer for Goat Feed",
    "Non GMO Soya Meal Manufacturer for Goat Feed","Non GMO Soybean Meal Manufacturer for Goat Feed","Non GMO Soyabean Meal Manufacturer for Goat Feed","Non GMO Soy Meal Manufacturer for Goat Feed","Non GMO Soya Oil Cake Manufacturer for Goat Feed","Non GMO Soybean Oil Cake Manufacturer for Goat Feed","Non GMO Soyabean Oil Cake Manufacturer for Goat Feed","Non GMO Soy Oil Cake Manufacturer for Goat Feed",
    "Soya Meal Exporter for Goat Feed","Soybean Meal Exporter for Goat Feed","Soyabean Meal Exporter for Goat Feed","Soy Meal Exporter for Goat Feed","Soya Oil Cake Exporter for Goat Feed","Soybean Oil Cake Exporter for Goat Feed","Soyabean Oil Cake Exporter for Goat Feed","Soy Oil Cake Exporter for Goat Feed",
    "Non GMO Soya Meal Exporter for Goat Feed","Non GMO Soybean Meal Exporter for Goat Feed","Non GMO Soyabean Meal Exporter for Goat Feed","Non GMO Soy Meal Exporter for Goat Feed","Non GMO Soya Oil Cake Exporter for Goat Feed","Non GMO Soybean Oil Cake Exporter for Goat Feed","Non GMO Soyabean Oil Cake Exporter for Goat Feed","Non GMO Soy Oil Cake Exporter for Goat Feed",
    "Soya Meal Supplier for Goat Feed","Soybean Meal Supplier for Goat Feed","Soyabean Meal Supplier for Goat Feed","Soy Meal Supplier for Goat Feed","Soya Oil Cake Supplier for Goat Feed","Soybean Oil Cake Supplier for Goat Feed","Soyabean Oil Cake Supplier for Goat Feed","Soy Oil Cake Supplier for Goat Feed",
    "Non GMO Soya Meal Supplier for Goat Feed","Non GMO Soybean Meal Supplier for Goat Feed","Non GMO Soyabean Meal Supplier for Goat Feed","Non GMO Soy Meal Supplier for Goat Feed","Non GMO Soya Oil Cake Supplier for Goat Feed","Non GMO Soybean Oil Cake Supplier for Goat Feed","Non GMO Soyabean Oil Cake Supplier for Goat Feed","Non GMO Soy Oil Cake Supplier for Goat Feed",
    // ── GROUP 13: for Aqua Feed ──
    "Soya Meal for Aqua Feed","Soybean Meal for Aqua Feed","Soyabean Meal for Aqua Feed","Soy Meal for Aqua Feed","Soya Oil Cake for Aqua Feed","Soybean Oil Cake for Aqua Feed","Soyabean Oil Cake for Aqua Feed","Soy Oil Cake for Aqua Feed",
    "Non GMO Soya Meal for Aqua Feed","Non GMO Soybean Meal for Aqua Feed","Non GMO Soyabean Meal for Aqua Feed","Non GMO Soy Meal for Aqua Feed","Non GMO Soya Oil Cake for Aqua Feed","Non GMO Soybean Oil Cake for Aqua Feed","Non GMO Soyabean Oil Cake for Aqua Feed","Non GMO Soy Oil Cake for Aqua Feed",
    "Soya Meal Manufacturer for Aqua Feed","Soybean Meal Manufacturer for Aqua Feed","Soyabean Meal Manufacturer for Aqua Feed","Soy Meal Manufacturer for Aqua Feed","Soya Oil Cake Manufacturer for Aqua Feed","Soybean Oil Cake Manufacturer for Aqua Feed","Soyabean Oil Cake Manufacturer for Aqua Feed","Soy Oil Cake Manufacturer for Aqua Feed",
    "Non GMO Soya Meal Manufacturer for Aqua Feed","Non GMO Soybean Meal Manufacturer for Aqua Feed","Non GMO Soyabean Meal Manufacturer for Aqua Feed","Non GMO Soy Meal Manufacturer for Aqua Feed","Non GMO Soya Oil Cake Manufacturer for Aqua Feed","Non GMO Soybean Oil Cake Manufacturer for Aqua Feed","Non GMO Soyabean Oil Cake Manufacturer for Aqua Feed","Non GMO Soy Oil Cake Manufacturer for Aqua Feed",
    "Soya Meal Exporter for Aqua Feed","Soybean Meal Exporter for Aqua Feed","Soyabean Meal Exporter for Aqua Feed","Soy Meal Exporter for Aqua Feed","Soya Oil Cake Exporter for Aqua Feed","Soybean Oil Cake Exporter for Aqua Feed","Soyabean Oil Cake Exporter for Aqua Feed","Soy Oil Cake Exporter for Aqua Feed",
    "Non GMO Soya Meal Exporter for Aqua Feed","Non GMO Soybean Meal Exporter for Aqua Feed","Non GMO Soyabean Meal Exporter for Aqua Feed","Non GMO Soy Meal Exporter for Aqua Feed","Non GMO Soya Oil Cake Exporter for Aqua Feed","Non GMO Soybean Oil Cake Exporter for Aqua Feed","Non GMO Soyabean Oil Cake Exporter for Aqua Feed","Non GMO Soy Oil Cake Exporter for Aqua Feed",
    "Soya Meal Supplier for Aqua Feed","Soybean Meal Supplier for Aqua Feed","Soyabean Meal Supplier for Aqua Feed","Soy Meal Supplier for Aqua Feed","Soya Oil Cake Supplier for Aqua Feed","Soybean Oil Cake Supplier for Aqua Feed","Soyabean Oil Cake Supplier for Aqua Feed","Soy Oil Cake Supplier for Aqua Feed",
    "Non GMO Soya Meal Supplier for Aqua Feed","Non GMO Soybean Meal Supplier for Aqua Feed","Non GMO Soyabean Meal Supplier for Aqua Feed","Non GMO Soy Meal Supplier for Aqua Feed","Non GMO Soya Oil Cake Supplier for Aqua Feed","Non GMO Soybean Oil Cake Supplier for Aqua Feed","Non GMO Soyabean Oil Cake Supplier for Aqua Feed","Non GMO Soy Oil Cake Supplier for Aqua Feed",
    // ── Brand / General ──
    "SVF Soya","SVF Soya Pvt Ltd","chemical-free soya meal","mechanical soya processing","FSSAI certified soya manufacturer",
    "APEDA registered soya exporter","soya processing plant Karnataka","Bangalore soya manufacturer",
    "non-GMO soya processing India","48% protein soya meal","full fat soya meal","full fat soya supplier India",
    "full fat soya manufacturer India","full fat soya exporter India","quality policy soya meal",
    "soya meal lab tested India","urease activity soya meal",
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
