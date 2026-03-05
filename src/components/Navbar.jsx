import React, { useState } from "react";
import { Logo } from "../utils/icons";
import Button from "./common/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="max-w-360 m-auto py-5 lg:px-0 px-2">
        <div className="max-w-285 m-auto flex items-center justify-between">

          <div>
            <Logo />
          </div>

          <div className="hidden md:flex gap-12 items-center">
            <p className="font-normal text-base text-[#4C4C4C]">About us</p>
            <p className="font-normal text-base text-[#4C4C4C]">Services</p>
            <p className="font-normal text-base text-[#4C4C4C]">Subject Areas</p>
            <p className="font-normal text-base text-[#4C4C4C]">Contact us</p>

            <Button
              text={"Get A Quote"}
              className="py-3.25 px-5 cursor-pointer font-semibold text-base text-[#1D1F26] border border-[#1D1F26] rounded-xl"
            />
          </div>


          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-lg absolute w-full left-0 top-full">
          <p className="text-[#4C4C4C]">About us</p>
          <p className="text-[#4C4C4C]">Services</p>
          <p className="text-[#4C4C4C]">Subject Areas</p>
          <p className="text-[#4C4C4C]">Contact us</p>

          <Button
            text={"Get A Quote"}
            className="py-3 px-5 cursor-pointer font-semibold text-base text-[#1D1F26] border border-[#1D1F26] rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
