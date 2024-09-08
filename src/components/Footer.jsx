import React, { useEffect } from "react";
import Typical from "react-typical";

import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.to("#Footer", {
      y: 0, // Adjust if needed
      scrollTrigger: {
        trigger: ".about",
        start: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <footer
      id="Footer"
      className="bg-zinc-500 text-white py-10 px-4 sm:px-8 lg:px-20 mt-auto"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
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
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="web text-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Dev Works</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Currency Converter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Typing Game
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Savings Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Countdown App
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    AIWA (Content Generator)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Blog App
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    Image Generator
                  </a>
                </li>
              </ul>
            </div>
            <div className="app text-lg">
              <h3 className="text-2xl font-semibold mb-4">App Dev Works</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    MyResidency
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/login"
                    className="hover:underline"
                  >
                    More projects coming soon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            <Typical
              steps={["Contact ", 1000, "Contact Details 💸", 1000]}
              loop={Infinity}
              wrapper="b"
            />
          </h1>
          <div className="text-lg">
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mail.google.com/mail/u/0/"
                  className="hover:underline"
                >
                  Email 📧
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/login"
                  className="flex items-center gap-2 hover:underline"
                >
                  Github <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/login"
                  className="flex items-center gap-2 hover:underline"
                >
                  LinkedIn <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  className="flex items-center gap-2 hover:underline"
                >
                  Instagram <FaInstagramSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
