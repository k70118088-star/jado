import React from "react";
import Card from "./common/Card";
import { Services } from "../utils/Data";

const OurServices = () => {
  return (
    <div className="max-w-360 flex items-center justify-center m-auto mt-20 lg:mt-37.5 px-4 md:px-6">
      <div className="max-w-285 w-full">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-285">
          <h2 className="max-w-100.5 font-normal text-3xl md:text-4xl lg:text-5xl leading-[120%] text-[#1D1F26]">
            Translation Solutions for Every Need
          </h2>

          <li className="font-semibold leading-[100%] text-base text-[#EF7D00] ">
            Our Services
          </li>
        </div>

        <div className="opacity-12 max-w-285 border border-[#1D1F26] my-10 lg:my-15"></div>

        <div className="max-w-285 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 mb-20 lg:mb-37.5">
          {Services.map((Service, index) => (
            <Card
              key={index}
              icon={Service.icon}
              title={Service.title}
              tag1={Service.tag1}
              tag2={Service.tag2}
              tag3={Service.tag3}
              description={Service.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurServices;
