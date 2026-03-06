import React from "react";
import AreaCards from "./common/AreaCards";
import { Industries } from "../utils/Data";

const SubjectAreas = () => {
  return (
    <div className="bg-[#1D1F26]  flex items-center justify-center m-auto px-4 md:px-6">
      <div className="max-w-285 m-auto mt-16 md:mt-20 lg:mt-25 mb-20 lg:mb-30 w-full">
        
        <div className="flex flex-col items-center justify-center">
          <li className="text-[#EF7D00] font-semibold text-sm md:text-base leading-[100%] ">
            Subject Areas
          </li>

          <h2 className="font-normal text-center text-3xl md:text-4xl lg:text-5xl leading-[120%] mt-4 max-w-180.25 text-white">
            Industry Expertise That Sets Us Apart
          </h2>

          <p className="text-[#CCCCCC] text-sm md:text-base text-center font-normal leading-[150%] max-w-180.25 mt-4">
            Our translators are specialists in their fields, ensuring
            terminological accuracy and industry-appropriate language for every
            project.
          </p>
        </div>
         <div className="m-auto flex items-center justify-center">
        <div className="mt-10 md:mt-12 lg:mt-15 grid grid-cols-1 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Industries.map((item, index) => (
            <AreaCards
              key={index}
              subjecticons={item.icon}
              text={item.title}
            />
          ))}
        </div>
</div>
      </div>
    </div>
  );
};

export default SubjectAreas;
