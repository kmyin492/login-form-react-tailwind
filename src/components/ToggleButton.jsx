import React, { useState } from "react";

const AnimatedHamburger = () => {
  const [open, setOpen] = useState(true);

  return (
    <span
      onClick={() => setOpen(!open)}
      className="relative w-8 h-8 flex items-center justify-center group"
    >
      {/* Top Line */}
      <span
        className={`absolute h-0.5 w-6 bg-white rounded transition-transform duration-700 ease-in-out
          ${open ? "rotate-45 translate-y-0" : "-translate-y-2.5"}
        `}
      ></span>

      {/* Middle Line */}
      <span
        className={`absolute h-0.5 w-6 bg-white rounded transition-opacity duration-200 ease-in-out
          ${open ? "opacity-0" : "opacity-100"}
        `}
      ></span>

      {/* Bottom Line */}
      <span
        className={`absolute h-0.5 w-6 bg-white rounded transition-transform duration-700 ease-in-out
          ${open ? "-rotate-45 translate-y-0" : "translate-y-2.5"}
        `}
      ></span>
    </span>
  );
};

export default AnimatedHamburger;
