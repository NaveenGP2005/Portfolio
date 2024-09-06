import React from "react";
import { motion } from "framer-motion";

function Marker() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full  py-10 bg-green-900"
    >
      <div className="flex text overflow-hidden whitespace-nowrap border-t-2  border-b-2 w-full ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[10vw] leading-none font-bold uppercase pr-20"
        >
          Are you Ready? Scroll down⬇️.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="text-[10vw] leading-none font-bold uppercase pr-20 "
        >
          Are you Ready? Scroll down⬇️.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marker;