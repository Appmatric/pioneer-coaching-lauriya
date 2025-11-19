import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-6 mt-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Pioneer Coaching. All Rights Reserved.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
