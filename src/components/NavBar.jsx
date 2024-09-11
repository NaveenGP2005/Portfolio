import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  useEffect(() => {
    gsap.to(".logo", {
      x: 10,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
  });
  return (
    <div className="fixed z-50 w-full px-10 py-5 flex justify-between items-center bg-black/30 backdrop-blur-lg border-b border-zinc-600">
      <div className="logo font-bold text-2xl text-white opacity-0">Naveen</div>
      <div className="links flex gap-5">
        <a
          href="#Landing"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </a>
        <a
          href="#Works"
          className="text-white hover:text-gray-300 transition-colors"
        >
          My Work
        </a>
        <a
          href="#About"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Skills
        </a>
        <a
          href="#Footer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
