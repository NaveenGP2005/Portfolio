import React from "react";
import Typical from "react-typical";

function About() {
  return (
    <div className="about w-full leading-[3.5vw] tracking-tight h-screen bg-yellow-500 flex flex-col items-center justify-center text-center">
      <h1 className="uppercase text-4xl tracking-tight mb-10">
        <Typical
          steps={["About ", 1000, "About me ", 1000, "About ME🚀", 2000]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>
      <div className="container flex flex-wrap justify-center gap-6 p-6 max-w-5xl mx-auto">
        <div
          className="elem w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-cover bg-center rounded-lg overflow-hidden relative text-white flex flex-col items-center justify-center p-4"
          style={{
            backgroundImage:
              'url("https://tse2.mm.bing.net/th?id=OIP.PMBiSa-JBIhSrPqckRRxyQHaEK&pid=Api&P=0&h=180")',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
            <h1 className="text-xl mb-2">Web dev</h1>
            <div className="pt-2">I am a MERN stack developer.</div>
            <div className="pt-2">🎓By Udemy</div>
          </div>
        </div>
        <div
          className="elem w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-cover bg-center rounded-lg overflow-hidden relative text-white flex flex-col items-center justify-center p-4"
          style={{
            backgroundImage:
              'url("https://tse1.mm.bing.net/th?id=OIP.nOiqIEoh5pcWAY_uRysELAHaDt&pid=Api&P=0&h=180")',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
            <h1 className="text-xl mb-2">App dev</h1>
            <div className="pt-2">I am a frontend App developer.</div>
            <div className="pt-2">🎓By Msrit</div>
          </div>
        </div>
        <div
          className="elem w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-cover bg-center rounded-lg overflow-hidden relative text-white flex flex-col items-center justify-center p-4"
          style={{
            backgroundImage:
              'url("https://hocarm.org/content/images/2020/04/c-cplus-1.jpg")',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
            <h1 className="text-xl mb-2">C and C++</h1>
            <div className="pt-2">I am well versed in these languages.</div>
            <div className="pt-2">🎓By Msrit</div>
          </div>
        </div>
        <div
          className="elem w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-cover bg-center rounded-lg overflow-hidden relative text-white flex flex-col items-center justify-center p-4"
          style={{
            backgroundImage:
              'url("https://tse4.mm.bing.net/th?id=OIP.I5PWZjo9BoMTAT6p-rOrcgHaDt&pid=Api&P=0&h=180")',
          }}
        >
          <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center">
            <h1 className="text-xl mb-2">DSA with C++</h1>
            <div className="pt-2">I am well versed in DSA.</div>
            <div className="pt-2">🎓By Apna College</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
