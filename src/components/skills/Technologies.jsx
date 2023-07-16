import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiBootstrap,
  SiMongodb,
  SiFigma,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiGithub,
  SiVercel,
  SiAdobexd,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiJavascript,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  { icon: <SiHtml5 />, name: "HTML5", brandColor: "#e65100" },
  { icon: <SiCss3 />, name: "CSS3", brandColor: "#0277bd" },
  { icon: <SiBootstrap />, name: "Bootstrap 5", brandColor: "#7952B3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", brandColor: "#38B2AC" },
  { icon: <SiDaisyui />, name: "Daisy UI", brandColor: "#A161FF" },
  { icon: <SiJavascript />, name: "Javascript", brandColor: "#FFD600" },
  { icon: <SiReact />, name: "React.js", brandColor: "#61DBFB" },
  { icon: <TbBrandNextjs />, name: "Next.js", brandColor: "#0070F3" },
  { icon: <SiNodedotjs />, name: "Node.js", brandColor: "#339933" },
  { icon: <SiExpress />, name: "Express.js", brandColor: "#61DAFB" },
  { icon: <SiMongodb />, name: "MongoDB", brandColor: "#47A248" },
  { icon: <SiJsonwebtokens />, name: "Json Web Tokens", brandColor: "#F6015A" },
  { icon: <SiWordpress />, name: "WordPress", brandColor: "#207196" },
  { icon: <SiFirebase />, name: "Firebase", brandColor: "#FFCA28" },
  { icon: <SiVercel />, name: "Vercel", brandColor: "#010409" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiFigma />, name: "Figma", brandColor: "#F24E1E" },
  { icon: <SiAdobexd />, name: "Adobe XD", brandColor: "#FF61F6" },
];

const Technologies = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-6 border-t border-primaryLight2 hover:scale-110 ease-in duration-100"
          >
            <div
              style={{ color: skill?.brandColor || "#fff" }}
              className="text-5xl mb-4"
            >
              {skill?.icon}
            </div>
            <p className="text-white text-lg font-medium">{skill?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
