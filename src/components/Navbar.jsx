import React, { useState, useEffect } from "react";
import Button from "./common/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import Icons2 from "./common/Icons2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About us"},
    { name: "Services" },
    { name: "Subject Areas" },
    { name: "Contact us" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      <div className="max-w-360 m-auto py-5 lg:px-6 px-4">
        <div className="max-w-285 m-auto flex items-center justify-between">
          <div>
            <a href="">
              <Icons2 icon="logo" />
            </a>
          </div>

          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href=""
                className="font-normal hover:underline text-base text-[#4C4C4C]"
              >
                {item.name}
              </a>
            ))}

            <Button
              text={"Get A Quote"}
              className="py-3.25 px-5 cursor-pointer font-semibold text-base text-[#1D1F26] border border-[#1D1F26] hover:bg-[#1D1F26] hover:text-white rounded-xl"
            />
          </div>

          <div
            className="md:hidden text-2xl cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full z-41 bg-white shadow-lg flex flex-col items-center gap-6 py-20 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-[#4C4C4C]"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <Button
          text={"Get A Quote"}
          className="py-[13.5px] px-5 cursor-pointer font-semibold text-base text-[#1D1F26] border border-[#1D1F26] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Navbar;
