import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FeatureCardProps } from '../../type/FeatureCard';

const FeatureCard: React.FC<FeatureCardProps> = ({
  heading,
  paragraph,
  image,
  buttonText,
  onButtonClick,
  bgColor = "bg-[#FFF4D2]",
  imagePosition = "top",
  onLeftArrowClick,
  onRightArrowClick,
  className = "",
}) => {
  
  const isHorizontal = imagePosition === 'left' || imagePosition === 'right';
  const flexDir = imagePosition === 'right' ? 'flex-row-reverse' : imagePosition === 'left' ? 'flex-row' : 'flex-col';

  return (
    <div className={`relative group rounded-[2rem] p-8 transition-all duration-300 shadow-sm hover:shadow-md flex ${flexDir} items-center gap-6 ${bgColor} ${className}`}>
      
      {/*---------- Navigation: Left Arrow --------------*/}
      {onLeftArrowClick && (
        <button 
          onClick={onLeftArrowClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      )}

       {/*--------- Content Section ----------*/}
      <div className={`flex-1 ${imagePosition === 'top' ? 'text-center' : 'text-left'}`}>
        {heading && (
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-2">
            {heading}
          </h3>
        )}
        
        {paragraph && (
          <p className="text-slate-600 text-base md:text-lg mb-4">
            {paragraph}
          </p>
        )}

        {buttonText && (
          <button 
            onClick={onButtonClick}
            className="mt-2 px-8 py-2.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-transform active:scale-95"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/*------------- Image Section ----------*/}
      {image && (
        <div className={`flex-shrink-0 ${isHorizontal ? 'w-1/3' : 'w-full'} flex justify-center`}>
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center p-4 border-4 border-white shadow-inner">
            <img 
              src={image} 
              alt={heading || "feature"} 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/*---------- Navigation: Right Arrow -------------*/}
      {onRightArrowClick && (
        <button 
          onClick={onRightArrowClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      )}
    </div>
  );
};

export default FeatureCard;