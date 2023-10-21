import React from "react";
import Carousel from "./ui/carousel";

export default function Main() {
  return (
    <main className="flex-1">
      <div className="relative">
        {/* Banner Slide */}
        <Carousel />
      </div>
    </main>
  );
}
