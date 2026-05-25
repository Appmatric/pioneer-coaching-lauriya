import FeatureCard from "../../../components/Common/Card/FeatureCard";
import React, { useState, useCallback, useMemo } from "react";

export interface ClassItem {
  id: string;
  label: string;
}

interface ClassSelectorProps {
  classes: ClassItem[];
  activeClassId: string;
  onSelectClass: (classId: string) => void;
}

export const ClassSelector: React.FC<ClassSelectorProps> = ({
  classes,
  activeClassId,
  onSelectClass,
}) => {
  const classItems = useMemo(() => classes, [classes]);
  const handleSelect = useCallback(
    (classId: string) => {
      onSelectClass(classId);
    },
    [onSelectClass],
  );

  const cardData = [
  { id: 1, title: "NCERT Solutions", desc: "Class 6 to 12 solutions", img: "/img1.png", color: "bg-[#FFF8E1]" },
  { id: 2, title: "Reference Books", desc: "Extra practice materials", img: "/img2.png", color: "bg-[#E3F2FD]" },
  { id: 3, title: "Sample Papers", desc: "Latest board patterns", img: "/img3.png", color: "bg-[#F1F8E9]" },
  { id: 4, title: "Online Tests", desc: "Chapter-wise mock tests", img: "/img4.png", color: "bg-[#FCE4EC]" },
  { id: 5, title: "Video Lectures", desc: "Expert teacher insights", img: "/img5.png", color: "bg-[#F3E5F5]" },
  { id: 6, title: "Notes PDF", desc: "Quick revision notes", img: "/img6.png", color: "bg-[#EFEBE9]" },
];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Heading ===== */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a202c] mb-8 relative inline-block">
          all our <span className="text-[#ff8c42]">offerings</span>
          <div className="absolute left-0 bottom-0 transform translate-y-3">
            <svg width="140" height="8" viewBox="0 0 140 8" fill="none">
              <path
                d="M5 4C40 1 80 1 135 4"
                stroke="#ffdd59"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </h2>

        {/* ===== Buttons ===== */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {classItems.map((item) => {
            const isActive = item.id === activeClassId;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`
              flex-shrink-0 px-6 py-3 font-semibold rounded-xl border-2
              transition-all duration-200 whitespace-nowrap
              ${
                isActive
                  ? "bg-[#1a202c] text-white shadow-lg"
                  : "bg-white text-[#1a202c] border-[#e2e8f0] hover:bg-[#f7fafc]"
              }
            `}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* ===== Selected Button Content ===== */}
        {activeClassId && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-[#1a202c]">
              Study Materials
            </h2>
          </div>
        )}
      </div>
      <div className="p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item) => (
            <FeatureCard 
              key={item.id}
              heading={item.title} 
              paragraph={item.desc}
              image={item.img}
              bgColor={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
