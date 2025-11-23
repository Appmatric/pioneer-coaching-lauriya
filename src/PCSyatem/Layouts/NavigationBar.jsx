import React, { useState } from "react";
import logo from "../../../public/images/logo-pioneer.png";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="relative w-full flex items-center justify-between px-6 py-3">

        <img src={logo} alt="logo" className="w-[150px] h-[80px] py-[4px]" />

        {/*---------- Desktop Menu - Perfect Center ----------------*/}
        <ul className="hidden md:flex flex-row gap-8 text-[16px] font-medium absolute left-1/2 -translate-x-1/2">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/*-------------- Mobile Menu Icon - Right side ------------------------*/}
        <div className="md:hidden ml-auto">
          {open ? (
            <X size={30} className="cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <Menu size={30} className="cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/*-------------- Mobile Dropdown ------------------------*/}
      {open && (
        <ul className="md:hidden flex flex-col bg-slate-800 py-4 px-6 gap-4 text-[18px] font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>

  );
};

export default NavigationBar;
