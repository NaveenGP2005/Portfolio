import React from "react";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full px-10 py-5 flex justify-between items-center bg-black/30 backdrop-blur-lg border-b border-zinc-600">
      <div className="logo font-bold text-2xl text-white">Naveen</div>
      <div className="links flex gap-5">
        <a href="#Landing" className="text-white hover:text-gray-300 transition-colors">Home</a>
        <a href="#Works" className="text-white hover:text-gray-300 transition-colors">My Work</a>
        <a href="#About" className="text-white hover:text-gray-300 transition-colors">About</a>
        <a href="#Footer" className="text-white hover:text-gray-300 transition-colors">Contact</a>
      </div>
    </div>
  );
}
