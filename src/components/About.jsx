import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "./About.css";
import Typical from "react-typical";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="w-full h-screen bg-yellow-500 flex flex-col items-center justify-center text-center px-6 py-12">
          <h1 className="text-5xl font-bold text-white mb-12 uppercase leading-tight">
            <Typical
              steps={["My ", 1000, "My skills ", 1000, "My skills🚀", 2000]}
              loop={Infinity}
              wrapper="span"
            />
          </h1>
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper max-w-6xl mx-auto"
          >
            {/* Swiper slides */}
            <SwiperSlide>
              <div
                className="slide-content bg-cover bg-center rounded-xl overflow-hidden relative text-white flex flex-col items-center justify-center p-8 max-w-lg mx-auto"
                style={{
                  backgroundImage:
                    'url("https://tse2.mm.bing.net/th?id=OIP.PMBiSa-JBIhSrPqckRRxyQHaEK&pid=Api&P=0&h=180")',
                }}
              >
                <div className="bg-black bg-opacity-70 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    Web Development
                  </h2>
                  <p className="text-lg mb-4">
                    I am a skilled MERN stack developer with experience in
                    creating dynamic and responsive web applications.
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    🎓 Certified by Udemy
                  </p>
                  <p className="text-sm text-gray-300">
                    Tools & Technologies: React, Node.js, Express.js, MongoDB
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content bg-cover bg-center rounded-xl overflow-hidden relative text-white flex flex-col items-center justify-center p-8 max-w-lg mx-auto"
                style={{
                  backgroundImage:
                    'url("https://tse1.mm.bing.net/th?id=OIP.nOiqIEoh5pcWAY_uRysELAHaDt&pid=Api&P=0&h=180")',
                }}
              >
                <div className="bg-black bg-opacity-70 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    App Development
                  </h2>
                  <p className="text-lg mb-4">
                    Experienced in building intuitive and engaging front-end
                    applications for various platforms.
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    🎓 Completed courses at MSRIT
                  </p>
                  <p className="text-sm text-gray-300">Skills: Flutter, Dart</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content bg-cover bg-center rounded-xl overflow-hidden relative text-white flex flex-col items-center justify-center p-8 max-w-lg mx-auto"
                style={{
                  backgroundImage:
                    'url("https://hocarm.org/content/images/2020/04/c-cplus-1.jpg")',
                }}
              >
                <div className="bg-black bg-opacity-70 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-semibold mb-4">C and C++</h2>
                  <p className="text-lg mb-4">
                    Proficient in C and C++ programming with a strong
                    understanding of system-level and performance-oriented
                    programming.
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    🎓 Completed courses at MSRIT
                  </p>
                  <p className="text-sm text-gray-300">
                    Areas of Expertise: Data Structures, Algorithms,
                    Object-Oriented Programming
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide-content bg-cover bg-center rounded-xl overflow-hidden relative text-white flex flex-col items-center justify-center p-8 max-w-lg mx-auto"
                style={{
                  backgroundImage:
                    'url("https://tse4.mm.bing.net/th?id=OIP.I5PWZjo9BoMTAT6p-rOrcgHaDt&pid=Api&P=0&h=180")',
                }}
              >
                <div className="bg-black bg-opacity-70 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-semibold mb-4">DSA with C++</h2>
                  <p className="text-lg mb-4">
                    Deep understanding of Data Structures and Algorithms with
                    practical experience in problem-solving and competitive
                    programming.
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    🎓 Studied at Apna College
                  </p>
                  <p className="text-sm text-gray-300">
                    Focus Areas: Arrays, Linked Lists, Trees, Graphs, Sorting
                    Algorithms
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </div>
  );
}
