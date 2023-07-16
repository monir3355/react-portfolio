import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showDetails, setShowDetails] = useState("");

  const projectCategories = [
    {
      text: "All",
      filterValue: "all",
      isSelected: selectedFilter === "all",
    },
    {
      text: "Front-end (React)",
      filterValue: "Front-end (React)",
      isSelected: selectedFilter === "Front-end (React)",
    },
    {
      text: "E-commerce",
      filterValue: "e-commerce",
      isSelected: selectedFilter === "e-commerce",
    },
    {
      text: "MERN Stack",
      filterValue: "MERN Stack",
      isSelected: selectedFilter === "MERN Stack",
    },
  ];

  const projects = [
    {
      id: 1,
      image: "https://i.ibb.co/MVDTK2Y/magic-dance-arts-web-app.png",
      name: "Magic Dance Arts School",
      desc_points: [
        "User can registration and login. Also login with social media",
        "Use Admin dashboard, Instructors Dashboard, Student Dashboard.",
        "Admin dashboard: Admin can Make User to Admin, User to Instructor, Instructor to Admin and Also Make Admin to Instructor. Also Admin Can approve deny, and feedback classes.",
        "Instructor dashboard: Add classes, Update Classes, delete classes and also see admin feedback and how many student enrolled his/her classes.",
        "Student dashboard: Student can select classes, see his/her all selected classes, student can payment his/her selected classes, and also see how many class payment. And also see payment history.",
      ],
      technologies: [
        "HTML5",
        "TailwindCSS",
        "Daisy UI",
        "ReactJS",
        "Firebase Authentication",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
      ],
      category: "MERN Stack",
    },
    {
      id: 2,
      image: "https://i.ibb.co/MVDTK2Y/magic-dance-arts-web-app.png",
      name: "Magic Dance Arts School",
      desc_points: [
        "User can registration and login. Also login with social media",
        "Use Admin dashboard, Instructors Dashboard, Student Dashboard.",
        "Admin dashboard: Admin can Make User to Admin, User to Instructor, Instructor to Admin and Also Make Admin to Instructor. Also Admin Can approve deny, and feedback classes.",
        "Instructor dashboard: Add classes, Update Classes, delete classes and also see admin feedback and how many student enrolled his/her classes.",
        "Student dashboard: Student can select classes, see his/her all selected classes, student can payment his/her selected classes, and also see how many class payment. And also see payment history.",
      ],
      technologies: [
        "HTML5",
        "TailwindCSS",
        "Daisy UI",
        "ReactJS",
        "Firebase Authentication",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
      ],
      category: "MERN Stack",
    },
    {
      id: 3,
      image: "https://i.ibb.co/MVDTK2Y/magic-dance-arts-web-app.png",
      name: "Magic Dance Arts School",
      desc_points: [
        "User can registration and login. Also login with social media",
        "Use Admin dashboard, Instructors Dashboard, Student Dashboard.",
        "Admin dashboard: Admin can Make User to Admin, User to Instructor, Instructor to Admin and Also Make Admin to Instructor. Also Admin Can approve deny, and feedback classes.",
        "Instructor dashboard: Add classes, Update Classes, delete classes and also see admin feedback and how many student enrolled his/her classes.",
        "Student dashboard: Student can select classes, see his/her all selected classes, student can payment his/her selected classes, and also see how many class payment. And also see payment history.",
      ],
      technologies: [
        "HTML5",
        "TailwindCSS",
        "Daisy UI",
        "ReactJS",
        "Firebase Authentication",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
      ],
      category: "MERN Stack",
    },
    {
      id: 4,
      image: "https://i.ibb.co/MVDTK2Y/magic-dance-arts-web-app.png",
      name: "Magic Dance Arts School",
      desc_points: [
        "User can registration and login. Also login with social media",
        "Use Admin dashboard, Instructors Dashboard, Student Dashboard.",
        "Admin dashboard: Admin can Make User to Admin, User to Instructor, Instructor to Admin and Also Make Admin to Instructor. Also Admin Can approve deny, and feedback classes.",
        "Instructor dashboard: Add classes, Update Classes, delete classes and also see admin feedback and how many student enrolled his/her classes.",
        "Student dashboard: Student can select classes, see his/her all selected classes, student can payment his/her selected classes, and also see how many class payment. And also see payment history.",
      ],
      technologies: [
        "HTML5",
        "TailwindCSS",
        "Daisy UI",
        "ReactJS",
        "Firebase Authentication",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
      ],
      category: "Front-end (React)",
    },
  ];

  const filterProjects = (category) => {
    setSelectedFilter(category);
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const handleImageHover = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const handleImageLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  const handleShowDetails = (id) => {
    console.log(id);
    if (id === showDetails) {
      setShowDetails("");
    } else {
      setShowDetails(id);
    }
  };

  return (
    <div
      name="projects"
      className="bg-[#0a192f] py-24 text-gray-300 px-8 md:px-0"
    >
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-16">
        Projects
      </h2>
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-wrap gap-2 justify-center items-center mb-8">
          {projectCategories?.map((button, index) => (
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
          ))}
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:w-10/12 mx-auto">
        {filteredProjects?.map((project) => (
          <div key={project.id} className="relative overflow-hidden">
            <div className="h-64 group rounded overflow-hidden relative">
              <button
                onClick={() => handleShowDetails(project.id)}
                className="inline-block bg-primaryLight hover:bg-primaryLight2 duration-300 px-2 py-1 rounded text-sm absolute right-0 top-0 z-10"
              >
                View Details
              </button>
              <div
                className="portfolioImageContainer relative overflow-hidden"
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
