import React, { useMemo, useState } from "react";
import ImageCarousel from "../../../components/Common/Card/ImageCarousel";
import Card from "../../../components/Common/Card/Card";
import ImageSlider from "../../../components/Common/slider/ImageSlider";

import sliderImages from "../../../utils/Data/sliderImages";
import carouselImages from "../../../utils/Data/carouselImages";
import Cards from "../../../utils/Data/Card";
import KidsCourses from "../Courses/KidsCourses";
import { ClassSelector } from "../ClassSelector/ClassSelector";
import { CLASSES } from "../../../utils/Data/classData";

const Home = () => {

  //-------------------- use for class data action ---------------------------
  const initialClassId = useMemo(() => 
  CLASSES.find(c => c.label === 'Class 9')?.id ||CLASSES[0]?.id || '', []);
  const [activeClassId, setActiveClassId] = useState<string>(initialClassId);
  const handleClassSelection = (classId: string) => {
    setActiveClassId(classId);
  };
  // Find the currently selected class label for display below the selector (optional)
  const currentClassLabel = useMemo(() => 
    CLASSES.find(c => c.id === activeClassId)?.label, [activeClassId]
  );
  //-----------------------------------------------------------------------

  return (
    <>
      <ImageSlider images={sliderImages} />

      <div className="font-[sans] mx-auto flex flex-col justify-center pt-8 lg:px-48 sm:px-10">
        <h1 className="text-[#001033] text-5xl font-bold">
          Become the Coach <span className="text-[#2c3986]">You Wish You Had</span>
        </h1>
        <p className="text-[#434f58] text-lg leading-relaxed">
          We are all architects of change. Uncover the power in you to foster meaningful transformation with our comprehensive library of resources, events, and professional development opportunities.
        </p>
      </div>

      <ImageCarousel images={carouselImages} />

      <KidsCourses/>

      {/* <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 py-8">
        <section className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {Cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </section>
      </div> */}

      <ClassSelector
        classes={CLASSES}
        activeClassId={activeClassId}
        onSelectClass={handleClassSelection} 
      />
    </>
  );
};

export default Home;
