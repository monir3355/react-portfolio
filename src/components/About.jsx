import React from "react";
import monirImg from "../assets/monir-3.png";

const About = () => {
  return (
    <div name="about" className="bg-[#0a192f] py-24 text-gray-300">
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-16">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-12 px-8 md:w-10/12 mx-auto">
        <div className="lg:w-1/2">
          <img className="h-[400px] mx-auto" src={monirImg} alt="" />
        </div>
        <div className="lg:w-1/2">
          <p>
            Hello, My name is Md Monirul Islam, I'm MERN stack developer. My
            home district is Sirajganj. And I currently lived in Mirpur-1,
            Dhaka. I completed my graduation from Bangladesh University of
            Business and Technology (BUBT) department of CSE. I learning and
            work new technologies. which technologies I learned likes, html,
            css, bootsrap, tailwindcss, JS, ReactJS, NodeJS, ExpressJS, Mongodb,
            JWT Token and also firebase authentication. I created many projects
            in mern stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
