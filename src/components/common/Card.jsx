import React from "react";
import Icons2 from "./Icons2";

const Card = ({ icon, title, tag1, tag2, tag3, description }) => {
  return (
    <div className="max-w-91 group bg-white rounded-2xl p-6 border border-[#1D1F26]/12 hover:border-transparent hover:shadow-[-10px_0px_50px_0px_#0000000F]">
      <div className="text-orange-500 text-3xl mb-4">
        <Icons2 icon={icon} pathClass={"group-hover:fill-red-500"} />
      </div>

      <h3 className="text-2xl leading-[150%]  font-semibold mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2 mb-5">
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

      <p className="text-[#4C4C4C] mt-12 font-normal text-base leading-[150%] max-w-79">
        {description}
      </p>
    </div>
  );
};

export default Card;
