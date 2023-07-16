import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <ul>
      <Link to="https://www.linkedin.com/in/monirul80/">
        <li className="flex justify-between items-center w-[160px] bg-[#0a66c2] px-2 py-2 ml-[-110px] hover:ml-0 duration-300 cursor-pointer">
          <span className="text-xl">Linkedin</span>
          <FaLinkedin className="w-6 h-6" />
        </li>
      </Link>
      <Link to="https://github.com/monir3355">
        <li className="flex justify-between items-center w-[160px] bg-[#333333] px-2 py-2 ml-[-110px] hover:ml-0 duration-300 cursor-pointer">
          <span className="text-xl">GitHub</span>
          <FaGithub className="w-6 h-6" />
        </li>
      </Link>
      <Link to="https://www.facebook.com/monirul80/">
        <li className="flex justify-between items-center w-[160px] bg-[#0a80ec] px-2 py-2 ml-[-110px] hover:ml-0 duration-300 cursor-pointer">
          <span className="text-xl">Facebook</span>
          <FaFacebook className="w-6 h-6" />
        </li>
      </Link>
      <li
        name="contact"
        className="flex justify-between items-center w-[160px] bg-[#6fc2b0] px-2 py-2 ml-[-110px] hover:ml-0 duration-300 cursor-pointer"
      >
        <span className="text-xl">Email</span>
        <HiOutlineMail className="w-6 h-6" />
      </li>
      <Link to="https://drive.google.com/file/d/1vOMflUYKOVK1EIHnb_Sy65xcTL1MYlmE/view?usp=drive_link">
        <li className="flex justify-between items-center w-[160px] bg-[#565f69] px-2 py-2 ml-[-110px] hover:ml-0 duration-300 cursor-pointer">
          <span className="text-xl">Resume</span>
          <BsFillPersonLinesFill className="w-6 h-6" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialMedia;
