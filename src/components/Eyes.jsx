import React, { useState, useEffect } from "react";

function Eyes() {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyeElements = document.querySelectorAll(".eye");
      eyeElements.forEach((eyeElement) => {
        const { left, top, width, height } = eyeElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        // Clamp pupil movement within the eye
        const maxPupilMovement = (width - 16) / 2; // 16 is the pupil size
        const distance = Math.min(maxPupilMovement, Math.hypot(deltaX, deltaY));
        const x = (deltaX / Math.hypot(deltaX, deltaY)) * distance;
        const y = (deltaY / Math.hypot(deltaX, deltaY)) * distance;

        setPupilPosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden bg-zinc-900 flex items-center justify-center">
      <div data-scroll data-scroll-speed="-.3" className="sep flex">
        <div className="uppercase relative pt-10 pr-20 text-4xl">Play here</div>
        <div className="relative flex space-x-12">
          {/* Eye 1 */}
          <div className="eye w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center relative">
            <div
              className="pupil w-12 h-12 bg-black rounded-full flex items-center justify-center"
              style={{
                transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="inner-pupil w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          {/* Eye 2 */}
          <div className="eye w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center relative">
            <div
              className="pupil w-12 h-12 bg-black rounded-full flex items-center justify-center"
              style={{
                transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="inner-pupil w-6 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
