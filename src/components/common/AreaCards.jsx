import React from "react";
import Icons2 from "./Icons2";

const AreaCards = ({ subjecticons, text }) => {
  return (
    <div className="w-50 rounded-3xl h-40.5 p-6 bg-[#26282F] border border-[#FEFEFE14] text-center flex flex-col items-center justify-center">
      <p className="w-10 h-10 ">
        <Icons2 icon={subjecticons} />
      </p>
      <h3 className="mt-4 font-normal text-2xl leading-[120%] text-[#FEFEFE]">
        {text}
      </h3>
    </div>
  );
};

export default AreaCards;
