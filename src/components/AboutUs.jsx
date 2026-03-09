import React, { useState } from "react";
import Button from "./common/Button";
import Circle from "./common/Circle";
import Icons2 from "./common/Icons2";



const AboutUs = () => {
  const [language] = useState(60);
  const [translators] = useState(250);
  const [experience] = useState(15);

  return (
    <div className=" flex items-center justify-center m-auto bg-[#F9F9F9] px-4 md:px-6">
      <div className="max-w-285 w-full flex flex-col lg:flex-row items-center justify-between my-16 lg:my-25 gap-12 lg:gap-0">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-[#EF7D00] text-base leading-[100%] w-fit font-semibold flex items-center gap-2 ">
            <Icons2 icon={"dot"} />
            About Us
          </p>

          <h2 className="mt-4 max-w-110.25 font-normal text-3xl md:text-4xl lg:text-5xl leading-[120%] text-[#1D1F26]">
            Your Trusted Partner in Communication
          </h2>

          <p className="mt-4 max-w-115.25 text-[#4C4C4C] text-sm md:text-base font-normal leading-[150%]">
            For over 15 years, JADO has been bridging language barriers for
            businesse and individuals worldwide. Our team of 250+ certified
            translators covers 60+ languages, ensuring your message resonates
            authentically across cultures.
          </p>

          <Button
            text={"Learn More"}
            className="mt-8 border border-[#1D1F26] hover:bg-[#1D1F26] hover:text-white rounded-xl py-[13.5px] px-5 text-[#1D1F26] text-base font-semibold leading-[100%]"
          />
        </div>

        <div className="relative mt-4 w-75 h-75 sm:w-90 sm:h-90 lg:w-105 lg:h-105 lg:right-10">
          <Circle
            number={language}
            text={"Languages"}
            className="absolute top-7 -left-2 h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          />

          <Circle
            number={translators}
            text={"Expert Translators"}
            className="absolute -top-10 -right-2 sm:-top-16 sm:-right-10 lg:-top-13 lg:-right-13 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
          />

          <Circle
            number={experience}
            text={"Years of Experience"}
            className="absolute -bottom-5 left-2 sm:left-1 h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
          />

          <Circle
            support={"24/7"}
            text={"Support"}
            className="absolute bottom-6 right-2 sm:right-4 lg:bottom-6 lg:right-8 h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
