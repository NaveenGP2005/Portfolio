import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image2 from "./6.webp";
import image1 from "./1.webp";
import Typical from "react-typical";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Works() {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    gsap.set(".leftc", {
      xPercent: -100,
      opacity: 0,
    });
    gsap.set(".rightc", {
      xPercent: 100,
      opacity: 0,
    });

    gsap.to(".leftc", {
      scrollTrigger: {
        trigger: ".works",
        start: "top bottom",
        end: "bottom 90%",
        scrub: true,
      },
      xPercent: 0,
      opacity: 1,
    });

    gsap.to(".rightc", {
      scrollTrigger: {
        trigger: ".works",
        start: "top bottom",
        end: "bottom 90%",
        scrub: true,
      },
      xPercent: 0,
      opacity: 1,
    });
  }, []);

  return (
    <div className="works w-full overflow-hidden py-10 bg-blue-600 relative">
      <div className="w-full px-20 border-b border-zinc-900">
        <h1 className="uppercase text-4xl tracking-tight pl-20 pt-12 font-playfair text-white">
          <Typical
            steps={[
              "Featured ",
              1000,
              "Featured Projects ",
              1000,
              "Featured Projects🧑‍💼",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <div className="flex gap-10 mt-10">
          {/* Left Image */}
          <div
            onMouseEnter={() => setHoveredImage("left")}
            onMouseLeave={() => setHoveredImage(null)}
            className="leftc relative w-1/2 h-[80vh] overflow-hidden"
          >
            <h1 className="absolute z-10 text-5xl font-montserrat text-red-500 leading-none left-1/2 transform -translate-x-1/2 top-1/2 flex">
              {"AI-IG".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    hoveredImage === "left"
                      ? { opacity: 1, y: "0%" }
                      : { opacity: 0, y: "100%" }
                  }
                  transition={{ ease: "easeOut", delay: index * 0.06 }}
                  className="bg-zinc-500 inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-900 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="https://d35v9chtr4gec.cloudfront.net/inovotekacademy/pages/images/37/1714333101277576532.jpeg"
                alt="Aiwa"
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            onMouseEnter={() => setHoveredImage("right")}
            onMouseLeave={() => setHoveredImage(null)}
            className="rightc relative w-1/2 h-[80vh] overflow-hidden"
          >
            <h1 className="absolute z-10 text-5xl font-montserrat text-red-500 leading-none right-1/2 transform translate-x-1/2 top-1/2 flex">
              {"MyResidency".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    hoveredImage === "right"
                      ? { opacity: 1, y: "0%" }
                      : { opacity: 0, y: "100%" }
                  }
                  transition={{ ease: "easeOut", delay: index * 0.06 }}
                  className="bg-zinc-500 inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex w-full h-full bg-green-900 rounded-xl overflow-hidden">
              <img
                className="w-1/2 h-full object-cover rounded-xl"
                src={image1}
                alt="My Residency"
              />
              <img
                className="w-1/2 h-full object-cover rounded-xl"
                src={image2}
                alt="My Residency"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
