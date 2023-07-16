import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className="bg-[#0a192f] text-gray-300 z-30">
      <nav className="fixed  text-white py-4 flex justify-between items-center container mx-auto border-b">
        <div>
          <Link
            className="cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            <img className="h-12 z-20" src={logo} alt="" />
          </Link>
        </div>
        <ul className="hidden md:flex gap-6">
          <li className="btnBorder relative cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="btnBorder relative cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="btnBorder relative cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="btnBorder relative cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="btnBorder relative cursor-pointer">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="btnBorder relative cursor-pointer">My Resume</li>
        </ul>

        <div onClick={handleNav} className="md:hidden z-20">
          {!nav ? (
            <FaBars className="w-6 h-6 cursor-pointer" />
          ) : (
            <FaTimes className="w-6 h-6 cursor-pointer" />
          )}
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col gap-6 justify-center items-center"
          }
        >
          <li className="text-2xl">Home</li>
          <li className="text-2xl">About</li>
          <li className="text-2xl">Skills</li>
          <li className="text-2xl">Projects</li>
          <li className="text-2xl">Contact</li>
          <li className="text-2xl">My Resume</li>
        </ul>
      </nav>
      {/* Social media */}
      <div className="hidden md:flex flex-col top-[30%] left-0 fixed z-30">
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
