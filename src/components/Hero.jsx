import React from "react";

import Form from "./common/Form";
import Button from "./common/Button";

import Icons2 from "./common/Icons2";

const Hero = () => {
  return (
    <div
      className="flex relative items-center justify-center m-auto w-full  lg:h-180 px-4 md:px-6"
      style={{
        backgroundImage: "url('/assets/Heroimg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute  right-0 bottom-0 z-0 flex max-w-360 m-auto items-end justify-end">
        <Icons2 icon={"world"}/>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-285 gap-10 lg:gap-0 py-16 lg:py-0">
        <div className="w-full lg:max-w-120.25">
          <div className="flex max-w-fit items-center gap-2 bg-[#EF7D0014] px-4 py-2 rounded-full">
            <Icons2 icon={"star"} />
            <p className="font-semibold leading-[100%] text-[14px] md:text-[16px] text-[#EF7D00]">
              Professional Translation Services
            </p>
          </div>

          <h1 className="font-normal text-[36px] md:text-[48px] lg:text-[64px] leading-[120%] text-[#010101] mt-4">
            Breaking Language Barriers Across the Whole World
          </h1>

          <p className="font-normal text-sm md:text-base leading-[150%] text-[#4C4C4C] mt-4 max-w-120.25">
            Breaking language barriers with precision, expertise, and
            cutting-edge technology. We deliver accurate translations across
            100+ languages, tailored to your industry needs.
          </p>

          <Button
            className="mt-8 py-[12.5px] px-5 bg-[#1D1F26] font-semibold text-base leading-[100%] text-white hover:text-[#1D1F26] hover:bg-white border border-transparent hover:border-[#1d1f26] rounded-xl"
            text="Get Started Free"
          />
        </div>

        <div className="w-full lg:max-w-103">
          <Form
            formCss={"w-full"}
            title={"Let’s talk! 👋"}
            inputCss={"px-4 py-3 rounded-[12px] bg-[#f9f9f9] w-full"}
            titleCss={"text-base leading-[100%] font-semibold"}
            textareaCss={
              "h-[131px] px-4 py-3 bg-[#f9f9f9] rounded-[12px] w-full"
            }
            fields={[
              { type: "text", placeholder: "Your Name", name: "username" },
              { type: "email", placeholder: "Your Email", name: "useremail" },
              {
                type: "textarea",
                placeholder: "I’m looking for...",
                name: "usermassege",
              },
            ]}
            buttonText={"Send message"}
            btcss={"bg-[#EF7D00] hover:bg-white hover:text-[#ef7d00] border font-semibold text-base leading-[100%] border-transparent hover:border-[#ef7d00] py-[13.5px] w-full rounded-[12px] text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
