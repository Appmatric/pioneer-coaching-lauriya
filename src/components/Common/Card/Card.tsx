import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-gray-400 border-[1px] border-gray-500 rounded-xl overflow-hidden shadow-2xl w-full max-w-sm md:max-w-md backdrop-blur-sm mb-8 hover:scale-[1.03] z-20">
      
      <div className="h-68 w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} aria-label={imageAlt} >
      </div>

      <div className="p-6">
        <h3 className="text-xl text-blue-900 font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-800 opacity-80 mb-6 font-Mulish">{description}</p>
        
        {/*----------- Arrow Button ----------------------*/}
        <div className="flex justify-start">
          <div className="w-8 h-8 rounded-full border border-blue-900 border-[1px] flex items-center justify-center cursor-pointer hover:bg-white/10 transition duration-300" role="button" aria-label={`View details for ${title}`}>
            <span className="text-lg text-blue-950 text-bold">→</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;