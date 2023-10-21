"use client";
import * as React from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CarouselData = {
  slides: [
    {
      src: "/image_1.jpg",
      alt: "Image 1",
    },
    {
      src: "/image_2.jpg",
      alt: "Image 2",
    },
    {
      src: "/image_3.jpg",
      alt: "Image 3",
    },
  ],
};

const Carousel = () => {
  const [index, setIndex] = React.useState(0);
  const totalLength = () => CarouselData.slides.length;
  const setlength = totalLength;

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = index + 1;
      setIndex(newIndex >= setlength() ? 0 : newIndex);
    }, 3000);
    return () => clearInterval(interval);
  });

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? setlength() - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= setlength() ? 0 : newIndex);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[calc(100vh-65px)]">
      <Image
        src={CarouselData.slides[index].src}
        alt={CarouselData.slides[index].alt}
        width={1920}
        height={1080}
        className="w-full h-full object-center object-cover"
      />
      <button
        onClick={handlePrevious}
        className="absolute p-2 bg-[#008ce1] hover:bg-[#008ce1]/80 text-slate-200 hover:text-white rounded-full hover:cursor-pointer left-4"
      >
        <BsChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handlePrevious}
        className="absolute p-2 bg-[#008ce1] hover:bg-[#008ce1]/80 text-slate-200 hover:text-white rounded-full hover:cursor-pointer right-4"
      >
        <BsChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;
