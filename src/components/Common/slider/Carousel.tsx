import React, { useState, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CommonCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, handlers: { next: () => void; prev: () => void }) => ReactNode;
  bgColor?: string;
  width?: string;
  height?: string;
  showArrows?: boolean;
  className?: string;
}

const Carousel = <T,>({
  items,
  renderItem,
  bgColor = "bg-transparent",
  width = "w-full",
  height = "h-auto",
  showArrows = true,
  className = "",
}: CommonCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-500 
      ${bgColor} ${width} ${height} ${className} flex flex-col justify-center group`}
    >
      {/* --- Main Content Section --- */}
      <div className="w-full h-full flex items-center justify-center p-6 transition-opacity duration-300">
        {renderItem(items[currentIndex], currentIndex, { next: nextSlide, prev: prevSlide })}
      </div>

      {/* --- Optional Navigation Arrows --- */}
      {showArrows && items.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            type="button"
            onClick={prevSlide}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md shadow-lg transition-all active:scale-90 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            type="button"
            onClick={nextSlide}
            className="pointer-events-auto p-3 rounded-full bg-white/40 hover:bg-white/90 backdrop-blur-md shadow-lg transition-all active:scale-90 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      )}

      {/* --- Pagination Dots --- */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              i === currentIndex ? "w-8 bg-gray-800" : "w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;