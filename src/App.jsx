// App.js
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Marker from "./components/Marker";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Works from "./components/Works";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Ge from "./components/Ge";
import Cursor from "./components/Cursor";
import "./components/loco.css";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      return () => locoScroll.destroy(); // Cleanup on component unmount
    }
  }, [isLoading]);

  return (
    <div
      className="w-full relative h-screen bg-zinc-900 text-white"
      data-scroll-container
    >
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <NavBar />
          <span id="Landing">
            <Landing />
          </span>
          <span id="Marker">
            <Marker />
          </span>
          <span id="Ge">
            <Ge />
          </span>
          <span id="Eyes">
            <Eyes />
          </span>
          <span id="Works">
            <Works />
          </span>
          <span id="About">
            <About />
          </span>
          <Footer />
          <Cursor />
        </>
      )}
    </div>
  );
}

export default App;
