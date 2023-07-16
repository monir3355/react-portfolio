import React from "react";
import Header from "../components/header/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
