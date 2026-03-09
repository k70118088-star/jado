import React from "react";
import Icons2 from "./Icons2";

const Card = ({ icon, title, tag1, tag2, tag3, description }) => {
  return (
    <div className="max-w-91  bg-white rounded-3xl p-6 border border-[#1D1F26]/12 hover:border-transparent hover:shadow-[-10px_0px_50px_0px_#0000000F]">
      <div className="text-orange-500 text-3xl mb-3">
        <Icons2 icon={icon}  />
      </div>

      <h3 className="text-2xl leading-[150%]  font-semibold mb-5">{title}</h3>

      <div className="flex flex-wrap gap-2 ">
        <span className="border border-[#1D1F26]/12 text-[12px] leading-[100%] px-4 py-2 rounded-full">
          {tag1}
        </span>
        <span className="border border-[#1D1F26]/12 text-[12px] leading-[100%] px-4 py-2 rounded-full">
          {tag2}
        </span>
        <span className="border border-[#1D1F26]/12 text-[12px] leading-[100%] px-4 py-2 rounded-full">
          {tag3}
        </span>
      </div>

      <p className="text-[#4C4C4C] mt-6 sm:mt-12 font-normal text-sm sm:text-base leading-[150%] max-w-79">
        {description}
      </p>
    </div>
  );
};

export default Card;
