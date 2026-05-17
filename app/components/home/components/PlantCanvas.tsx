"use client";

import dynamic from "next/dynamic";

const PlantViewer = dynamic(() => import("./PlantViewer"), {
  ssr: false,
});

export default function PlantCanvas() {
  return (
    <div className="absolute inset-0">
      <PlantViewer />
    </div>
  );
}