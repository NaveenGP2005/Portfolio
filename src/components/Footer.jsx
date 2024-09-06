import React, { useEffect } from "react";

import Typical from "react-typical";
import "./Foooter.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.to("#Footer", {
      y: -500,
      scrollTrigger: {
        trigger: ".about",
        start: "bottom bottom",
        scrub: true,
      },
    });
  }, []);
  return (
    <div id="Footer" className=" flex gap-20  w-full h-screen bg-zinc-500">
      <div id="yo" className="w-1/2  uppercase text-4xl pt-20 pl-20 ">
        <h1>
          <Typical
            steps={[
              "More of ",
              1000,
              "More of my ",
              1000,
              "More of my works🔥",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <div className="f1 flex pt-10">
          <div className="web text-2xl">
            <h3 className="text-3xl pb-5">Web Dev Works</h3>
            <ol>
              <li>
                <a href="https://github.com/login">Currency Converter</a>
              </li>
              <li>
                <a href="https://github.com/login">Typing Game</a>
              </li>
              <li>
                <a href="https://github.com/login">Savings Calculator</a>
              </li>
              <li>
                <a href="https://github.com/login">Countdown App</a>
              </li>
              <li>
                <a href="https://github.com/login">AIWA(Content Generator)</a>
              </li>
              <li>
                <a href="https://github.com/login">Blog App</a>
              </li>
              <li>
                <a href="https://github.com/login">Image Generator</a>
              </li>
            </ol>
          </div>
          <div className="app text-2xl">
            <h3 className="text-3xl pb-5">App Dev Works</h3>
            <ul>
              <li>
                <a href="https://github.com/login">MyResidency</a>
              </li>
              <li>
                <a href="https://github.com/login">More projects coming soon</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2 uppercase text-4xl pt-20 pl-60">
        <h1>
          <Typical
            steps={["Contact ", 1000, "Contact Details 💸", 1000]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <div className="f2 text-2xl pt-20">
          <ul>
            <li>
              <a href="https://mail.google.com/mail/u/0/">Email📧</a>
            </li>

            <li>
              <a href="https://github.com/login">
                Github <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/login">
                LinkedIn
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/">
                Instagram <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
