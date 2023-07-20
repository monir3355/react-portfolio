import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import monirImg from "../assets/monirul.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] pt-[140px] pb-[100px]">
      {/* Container */}
      <div className="px-8 md:px-0 flex flex-col justify-center h-full">
        <div className="flex flex-col-reverse lg:flex-row gap-16 md:w-10/12 mx-auto">
          <div className="lg:w-2/3 space-y-3">
            <p className="text-primaryLight2">Hi, my name is</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
              Md. Monirul Islam
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-[#8892b0]">
              I'm a MERN Stack Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I am a professional Front-End Developer(ReactJS) and MERN Stack
              Developer. I can build a pixel-perfect responsive layout with
              single page application. I love to coding and enjoy to problem-
              solving. My ultimate goal is I want to explore new technology for
              longtime and create top projects.
            </p>
            <div className="flex gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="text-white group border-2 border-primaryLight2 px-6 py-3 my-2 flex items-center  hover:bg-primaryLight2 hover:border-primaryLight2">
                  View Projects
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1vOMflUYKOVK1EIHnb_Sy65xcTL1MYlmE/view?usp=drive_link"
                target="_blank"
              >
                <button className="text-white group border-2 border-primaryLight2 px-6 py-3 my-2 flex items-center  hover:bg-primaryLight2 hover:border-primaryLight2">
                  View Resume
                  <span>
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img
              className="h-[300px] w-[300px] rounded-full border-4 border-primaryLight2 mx-auto"
              src={monirImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
