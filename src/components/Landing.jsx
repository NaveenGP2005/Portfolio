// Landing.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "./loco.css";
import image from "./main.webp";
import Typical from "react-typical";

export default function Landing() {
  useEffect(() => {
    // GSAP animation
    gsap.to(".box1", {
      x: 1100,
      duration: 2,
      delay: 1,
      rotate: 720,
      repeat: -1,
      yoyo: true,
    });

    const tl = gsap.timeline();
    tl.to(".textStructure h1", {
      x: 20,
      duration: 1,
    }).to(".textStructure p", {
      opacity: 1,
      duration: 1,
    }).to(".textStructure h2", {
      opacity: 1,
      duration: 1,
      delay: -1,
    });;

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // Cleanup Locomotive Scroll on component unmount
    return () => locoScroll.destroy();
  }, []);

  return (
    <div
      data-scroll-container
      data-scroll
      data-scroll-speed="-0.4"
      className="h-screen w-full bg-zinc-900 pt-20 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20">
        {/* Text Section */}
        <div className="textStructure flex-1 p-6 md:p-20 text-white">
          <h1 className="uppercase text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hello and Welcome!
          </h1>
          <p className="uppercase text-lg md:text-2xl mb-6 leading-relaxed opacity-0">
          <Typical
              steps={[
                "I ",
                1000,
                "I am ",
                1000,
                "I am Naveen ",
                2000,
              ]}
              loop={Infinity}
              wrapper="b"
            />  a 2nd-year Computer Science Engineering student specializing in
            Artificial Intelligence and Machine Learning at MS Ramaiah Institute
            of Technology (MSRIT).
          </p>
          
          <h2 className="uppercase text-xl md:text-3xl font-semibold pt-10 mb-6 opacity-0">
            Explore My Projects and Learn More About My Work
          </h2>
          <p className="text-md md:text-lg mb-6 leading-relaxed opacity-0">
            I am actively working on various projects related to AI and ML,
            including data analysis, machine learning models, and intelligent
            systems. Feel free to check out my work and get in touch if you want
            to collaborate or learn more!
          </p>
          <div className="box1 w-16 h-16 bg-red-600"></div>
        </div>

        {/* Profile Photo */}
        <div className="myPhoto flex items-center justify-center mt-10 md:mt-0">
          <img
            className="w-64 h-64 object-cover border-4 border-white"
            src={image}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
