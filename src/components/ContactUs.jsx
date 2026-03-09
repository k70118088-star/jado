import React from "react";
import Form from "./common/Form";
import Icons2 from "./common/Icons2";


const ContactUs = () => {
  return (
    <div
      className="flex relative items-center justify-center m-auto w-full lg:h-197 px-4 md:px-6"
      style={{
        backgroundImage: "url('/assets/Heroimg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scaleY(-1)",
      }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-285 scale-y-[-1] gap-12 lg:gap-0 py-16 lg:py-0">
        <div className="w-full lg:max-w-107.5">
          <p className="text-[#EF7D00] text-base leading-[100%] font-semibold flex items-center gap-2 ">
            <Icons2 icon={"dot"} />
            Contact Us
          </p>

          <h1 className="font-normal text-[36px] md:text-[48px]  leading-[120%] text-[#1D1F26] mt-4 max-w-107.5">
            Let's Start Your Translation Project
          </h1>

          <p className="font-normal text-sm md:text-base leading-[150%] text-[#4C4C4C] mt-4 max-w-106.5">
            Get a free quote within hours. Tell us about your project and our
            team will get back to you with a tailored solution.
          </p>

          <div className="my-8 lg:my-10 border border-[#1D1F26]/12"></div>

          <p className="font-normal text-sm md:text-base text-[#4C4C4C] leading-[150%]">
            Email
          </p>
          <h3 className="font-semibold text-xl md:text-2xl leading-[150%] text-[#1D1F26]">
            info@jado.com
          </h3>

          <p className="font-normal text-sm md:text-base text-[#4C4C4C] leading-[150%] mt-3">
            Phone
          </p>
          <h3 className="font-semibold text-xl md:text-2xl leading-[150%] text-[#1D1F26]">
            +1 (555) 123-4567
          </h3>
        </div>

        <div className="w-full lg:max-w-129">
          <Form
            formCss={"w-full"}
            inputCss={"px-4 py-3 rounded-[12px] bg-[#f9f9f9] w-full"}
            titleCss={"text-base font-semibold"}
            textareaCss={
              "h-[131px] px-4 py-3 bg-[#f9f9f9] resize-none rounded-[12px] w-full"
            }
            fields={[
              {
                type: "text",
                placeholder: "John Doe",
                label: "Full Name",
                name: "username",
              },
              {
                type: "email",
                placeholder: "john123@gamil.com",
                label: "Email Address",
                name: "useremail",
              },
              {
                type: "text",
                placeholder: "John Technologies Limited",
                label: "Company",
                name: "usercompony",
              },
              {
                type: "textarea",
                placeholder:
                  "We want to get our server reports translated from...",
                label: "Message",
                name: "usermessage",
              },
            ]}
            buttonText={"Submit"}
            btcss={
              "bg-[#EF7D00] hover:bg-white hover:text-[#ef7d00] border border-transparent hover:border-[#ef7d00] py-[13.5px] w-full rounded-[12px] text-white"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
