import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

        {/* Logo */}
        <img
          src="../../assets/images/logo-pioneer.png"
          alt="logo"
          className="w-8 h-8"
        />

        {/* ✅ Desktop Menu (Large Screen Only) */}
        <ul className="hidden md:flex flex-row gap-8 text-[15px] font-medium">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>

        {/* ✅ Mobile Hamburger Button (Small Screen Only) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden bg-slate-800 px-6 py-4 space-y-4 text-[15px] shadow-md">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
