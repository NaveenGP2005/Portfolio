import React, { useState } from "react";
import { motion } from "framer-motion";
import image2 from "./6.png";
import image1 from "./1.png";
import Typical from "react-typical";

function Works() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="works w-full py-10 bg-blue-600">
      <div className="w-full px-20 border-b-[1px] border-zinc-900">
        <h1 className="uppercase text-4xl tracking-light pl-20 pt-50 ">
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
        <div className="cards flex gap-10">
          {/* Left Image */}
          <div
            onMouseEnter={() => setHoveredImage("left")}
            onMouseLeave={() => setHoveredImage(null)}
            className="cardc relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex z-[9] -mb-20 leading-none  text-5xl text-red-500 tracking-tight left-full -translate-x-1/2 top-1/2">
              {"AI-IG".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    hoveredImage === "left"
                      ? { opacity: 1, y: "0%" }
                      : { opacity: 0, y: "100%" }
                  }
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block bg-zinc-500"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-900 rounded-xl">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src="https://d35v9chtr4gec.cloudfront.net/inovotekacademy/pages/images/37/1714333101277576532.jpeg"
                alt="Aiwa"
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            onMouseEnter={() => setHoveredImage("right")}
            onMouseLeave={() => setHoveredImage(null)}
            className="cardc relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute z-[9] -mb-20 leading-none text-5xl text-red-500 tracking-tight right-full translate-x-1/2 top-1/2">
              {"MyResidency".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={
                    hoveredImage === "right"
                      ? { opacity: 1, y: "0%" }
                      : { opacity: 0, y: "100%" }
                  }
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="items-center bg-zinc-500 justify-center uppercase"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full flex bg-green-900 rounded-xl">
              <img
                className="w-1/2 h-full bg-cover  rounded-xl"
                src={image1}
                alt="My Residency"
              />
              <img
                className="w-1/2 h-full bg-cover  rounded-xl"
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
