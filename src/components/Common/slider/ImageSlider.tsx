import React, { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const slides = images;
  const [current, setCurrent] = useState<number>(0);

  //--------------- Next Slide ----------------
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  //--------------- Previous Slide ----------------
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  //--------------- Auto Slide ----------------
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!slides || slides.length === 0)
    return (
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
        <p className="text-gray-600">No Images Available</p>
      </div>
    );

  return (
    <div className="relative w-full mx-auto h-[260px] md:h-[380px] lg:h-[480px] overflow-hidden shadow-xl bg-black/80 select-none">

      {/*---------- Slides -------------------*/}
      <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0.0,0.2,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }} >
        {slides.map((src: string, index: number) => (
          <div key={index} className="min-w-full h-full">
            <img src={src} className="w-full h-full object-cover" alt={`slide-${index}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/*---------- Overlay -------------------*/}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>

      {/*---------- Left Arrow -------------------*/}
      <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 p-2 md:p-3 rounded-full 
        bg-white/20 backdrop-blur-md hover:bg-white/30 transition active:scale-90" >
        <ChevronLeft className="text-white" size={28} />
      </button>

      {/*---------- Right Arrow -------------------*/}
      <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 p-2 md:p-3 rounded-full 
        bg-white/20 backdrop-blur-md hover:bg-white/30 transition active:scale-90" >
        <ChevronRight className="text-white" size={28} />
      </button>

      {/*---------- Dots -------------------*/}
      <div className="absolute bottom-4 flex justify-center w-full gap-2 md:gap-3">
        {slides.map((_, index: number) => (
          <button key={index} onClick={() => setCurrent(index)} className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index? "bg-white scale-125 shadow-xl" : "bg-gray-400/60 hover:bg-gray-300"
            }`}  />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
