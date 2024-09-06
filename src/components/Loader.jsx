import React, { useEffect } from "react";
import gsap from "gsap";

function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".fs", {
      height: 0,
      duration: 2,
      ease: "expo.inOut",
    })
      .to(".element", {
        height: "100%",
        duration: 2,
        delay: -2,
        ease: "expo.inOut",
      })
      .to("#Landing", {
        height: "100%",
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
      })
      .eventCallback("onComplete", () => {
        if (onComplete) onComplete();
      });

    // GSAP animation for loading progress bar
    gsap.fromTo(
      ".loading-bar",
      { width: "0%" },
      {
        width: "100%",
        duration: 1,
        ease: "expo.inOut",
        delay: 1, // Adjust this delay if needed
      }
    );
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen bg-zinc-100">
      <div className="fs absolute w-full h-screen bg-zinc-700"></div>
      <div className="element absolute w-full bottom-0 h-0 bg-green-200"></div>
      <div
        id="Landing"
        className="absolute w-full bottom-0 h-0 bg-zinc-900"
      ></div>
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center z-10">
        <div className="w-full max-w-md h-4 bg-gray-300 rounded-full overflow-hidden">
          <div className="loading-bar h-full bg-blue-500"></div>
        </div>
        <div className="mt-2 text-bold text-5xl tracking-light uppercase text-gray-700">
          Loading...
        </div>
      </div>
    </div>
  );
}

export default Loader;
