import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("/technologies");
  const projectCategories = [
    {
      text: "Technologies",
      filterValue: "/technologies",
      isSelected: selectedFilter === "/technologies",
    },
    {
      text: "Experience",
      filterValue: "/experience",
      isSelected: selectedFilter === "/experience",
    },
    {
      text: "Educations",
      filterValue: "/educations",
      isSelected: selectedFilter === "/educations",
    },
    {
      text: "Courses",
      filterValue: "/courses",
      isSelected: selectedFilter === "/courses",
    },
  ];

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };
  return (
    <section
      name="skills"
      className="bg-[#0a192f] py-24 text-gray-300 px-8 md:px-0 z-0"
    >
      <div className="md:w-10/12 mx-auto">
        <h2 className="font-bold text-4xl sm:text-5xl text-center mb-16">
          My Skills
        </h2>
      </div>
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
          {projectCategories?.map((button, index) => (
            <Link to={button.filterValue}>
              <button
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  button.isSelected
                    ? "bg-primaryLight text-white"
                    : "bg-white text-primaryLight2"
                }`}
                onClick={() => filterProjects(button.filterValue)}
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:w-10/12 mx-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default Skills;
