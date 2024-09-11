import React, { useEffect } from "react";
import gsap from "gsap";

function Loader({ onComplete }) {
  useEffect(() => {
    const tl = gsap.timeline();

    // Timeline for the loader animations
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
      .to(".svg-container", {
        opacity: 1,
        duration: 1.25,
        delay: -1,
        ease: "expo.inOut",
      })
      .eventCallback("onComplete", () => {
        if (onComplete) onComplete();
      });
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
        {/* Loader */}
        <div className="loader"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center svg-container opacity-0">
        <svg viewBox="0 0 800 200" className="text-body">
          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            className="text-body"
          >
            Naveen's Portfolio .
          </text>
        </svg>
        <style jsx>{`
          svg {
            width: 100%;
            max-width: 800px;
            height: auto;
            padding: 20px; /* Optional: Adds padding around the SVG */
          }
          svg text {
            font-size: 5rem; /* Adjust font size */
            stroke-width: 2;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
              sans-serif;
            stroke: white;
            animation: 3s infinite alternate animate;
          }

          @keyframes animate {
            0% {
              fill: transparent;
              stroke: white;
              stroke-width: 3;
              stroke-dashoffset: 25%;
              stroke-dasharray: 0 32%;
            }
            50% {
              fill: transparent;
              stroke: white;
              stroke-width: 3;
            }
            80%,
            100% {
              fill: white;
              stroke: transparent;
              stroke-width: 0;
              stroke-dashoffset: -25%;
              stroke-dasharray: 32% 0;
            }
          }

          .loader {
            border: 8px solid #f3f3f3; /* Light grey */
            border-top: 8px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Loader;
