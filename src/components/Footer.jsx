import React from "react";
import { Email, Facebook, Insta, Linkedin, PageLogo, Phone, X } from "../utils/icons";

const Footer = () => {
  return (
    <div className=" m-auto flex flex-col justify-center items-center bg-[#F9F9F9] px-4 md:px-6">
      
      <div className="max-w-285 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mt-16 lg:mt-25 gap-10 lg:gap-0">
        
        <div>
          <PageLogo />

          <div className="w-60.5 border border-[#1D1F26]/12 mt-4"></div>

          <p className="text-[#4C4C4C] text-base font-normal leading-[150%] mt-6">
            Follow on
          </p>

          <div className="flex items-center gap-3.5 mt-3.5">
            <Insta />
            <Facebook />
            <Linkedin />
            <X />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:flex lg:gap-20">
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
              Quick Links
            </h4>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              About us
            </p>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              Services
            </p>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              Subject Areas
            </p>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              Contact us
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
              Legal
            </h4>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              Terms & Conditions
            </p>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%]">
              Privacy Policy
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#1D1F26] text-base font-semibold leading-[100%]">
              Contact
            </h4>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%] flex items-center gap-1">
              
              <span>
               <Email />
              </span>
              info@jado.com
            </p>

            <p className="text-[#4C4C4C] text-base font-normal cursor-pointer leading-[150%] flex items-center gap-1">
             
              <span>
                <Phone />
              </span>
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#1D1F261F] mt-16 lg:mt-25 text-center w-full">
        <p className="text-[#4C4C4C] font-normal text-sm md:text-base leading-[150%] my-4">
          © JADO2025. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
