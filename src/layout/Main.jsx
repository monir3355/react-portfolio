import React from "react";
import Header from "../components/header/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#0a192f]">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
