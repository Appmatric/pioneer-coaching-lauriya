import React from "react";
import kidsCourses from "../../../utils/Data/kidsCourses";
import KidsImage from "../../../../public/images/super-kid.png";
import { KidsCourse } from "../../../components/type/course";

const KidsCourses: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#001033] mb-10">
        Courses for <span className="text-orange-500 relative">
          kids
          <span className="absolute left-0 bottom-[-4px] w-full h-[6px] bg-yellow-300 rounded-lg"></span>
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">

        {/* LEFT: Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kidsCourses.map((item: KidsCourse, index: number) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-6 shadow-sm`}
            >
              {/* Badge */}
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              )}

              {/* Icon */}
              <img src={item.icon} alt={item.title} className="w-12 mt-4 mb-4" />

              <p className="text-orange-500 font-semibold text-sm">
                {item.classRange}
              </p>

              <h2 className="text-lg font-bold text-[#001033]">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-1">{item.description}</p>

              <button className="mt-4 bg-[#002b45] text-white px-5 py-2 rounded-lg">
                Explore
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: Kids Image */}
        <div className="flex justify-center items-center">
          <img
            src={KidsImage}
            alt="Kids"
            className="w-[90%] lg:w-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default KidsCourses;
