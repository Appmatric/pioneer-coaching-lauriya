import React, { useRef, MouseEvent } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonBgColor = '#007bff'; 
  const buttonHoverColor = '#1e90ff'; 

  const scroll = (direction: 'left' | 'right') => { 
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.image-card-item') as HTMLElement;
      if (!firstCard) {
        console.warn("Could not find '.image-card-item' for scroll calculation.");
        return; 
      }
      const cardWidth = firstCard.offsetWidth; 
      const gapWidth = 32; 
      const scrollAmount = (cardWidth * 2) + gapWidth; 
      
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth' 
        });
      } else { 
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = e.currentTarget.style.getPropertyValue('--hover-bg-color');
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = buttonBgColor;
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white"> 
      {/*--------------- Navigation Arrows Container --------------------*/}
      <div className="w-full max-w-7xl flex justify-end mb-8 pr-4">
        
        {/*------------------- Left Arrow Button -----------------------*/}
        <button className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200"
          style={{ 
            backgroundColor: buttonBgColor, 
            '--hover-bg-color': buttonHoverColor 
          } as React.CSSProperties} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => scroll('left')} 
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/*------------------- Right Arrow Button -----------------------*/}
        <button className="flex items-center justify-center w-12 h-12 rounded-full text-white shadow-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors duration-200"
          style={{ 
            backgroundColor: buttonBgColor,
            '--hover-bg-color': buttonHoverColor 
          } as React.CSSProperties} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => scroll('right')} 
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/*-------------- Scrollable Image Container---------------- */}
      <div ref={scrollContainerRef} className="max-w-7xl w-full overflow-hidden scroll-smooth" >
        <div className="flex space-x-8 pb-4 px-4 sm:px-0"> 
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[calc(50%-16px)] md:w-[calc(50%-16px)] bg-white rounded-2xl transform transition-transform duration-300 hover:scale-[1.01] image-card-item"  >
              <img src={image.src} alt={image.alt} className="w-full h-[400px] object-cover rounded-t-2xl" />

              {image.title && (
                <div className="p-4 pt-2"> 
                  <p className="text-gray-700 text-[24px] font-bold leading-relaxed">
                    {image.title}
                  </p>
                </div>
              )}

              {image.description && (
                <div className="p-4 pt-0"> 
                  <p className="text-[#434f58] text-base text-[18px] leading-relaxed">
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;