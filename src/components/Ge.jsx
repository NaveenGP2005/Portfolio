import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Ge() {
  useEffect(() => {
    gsap.to("#page h1", {
      x: "-150%",
      duration: 1,
      scrollTrigger: {
        trigger: "#page",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
        scroller: "body",
        // Ensure the scroll container is correctly set if using LocomotiveScroll
        // scroller: ".smooth-scroll",
      },
    });
  }, []);

  return (
    <div id="page" className="page-container w-full h-500">
      <div className="box">
        <h1 className="title">Experience</h1>
      </div>
    </div>
  );
}

export default Ge;
