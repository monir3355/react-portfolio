import React, { useEffect, useState } from "react";
import "./Projects.css";
import { list } from "postcss";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showDetails, setShowDetails] = useState([]);

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
      liveLinks: [
        "https://github.com/monir3355/magic-dance-school-client",
        "https://github.com/monir3355/magic-dance-school-server",
        "https://magic-dance-arts.web.app/",
      ],
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
        "JWT Token",
      ],
      category: "MERN Stack",
    },
    {
      id: 2,
      liveLinks: [
        "https://github.com/monir3355/bistro-boss-restaurant-client",
        "https://github.com/monir3355/bistro-boss-restaurant-server",
        "https://bistro-boss-restaurant-c3449.web.app/",
      ],
      image: "https://i.ibb.co/dpvf2Cg/bistro-boss.png",
      name: "Bistro Boss Restaurant Management System",
      desc_points: [
        "User can registration and login. Also login with social media",
        "Use Admin dashboard, User Dashboard.",
        "Use verify jwt token all users and admin",
        "Admin dashboard: Admin can make user to Admin and admin to user and also view all user and delete user. admin can manage all items like Add an Item, Update and delete Items.",
        "User dashboard: user can add items for buy it stored my carts from my cart user can payment using stripe payment gateways.",
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
        "JWT Token",
      ],
      category: "MERN Stack",
    },
    {
      id: 3,
      liveLinks: [
        "https://github.com/monir3355/agglo-toys-client",
        "https://github.com/monir3355/agglo-toys-server",
        "https://agglo-toys.web.app/",
      ],
      image: "https://i.ibb.co/Y7HYxV2/agglo-toys.png",
      name: "Agglo Toys",
      desc_points: [
        "This project You can see sub categories toys by clicked, you can added toys, delete toys, update toys, search toys by toy name. You can also filter toys by ascending and descending.",
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
    const findProject = projects.find((category) => category.id === id);
    setShowDetails(findProject);
  };

  return (
    <div
      name="projects"
      className="bg-[#0a192f] py-24 text-gray-300 px-8 md:px-0 z-0"
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

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:w-10/12 mx-auto z-0">
        {filteredProjects?.map((project) => (
          <div key={project.id} className="relative overflow-hidden">
            <div className="h-64 group rounded overflow-hidden relative">
              <span onClick={() => window.my_modal_3.showModal()}>
                <button
                  onClick={() => handleShowDetails(project.id)}
                  className="inline-block bg-primaryLight hover:bg-primaryLight2 duration-300 px-2 py-1 rounded text-sm absolute right-0 top-0 z-10"
                >
                  View Details
                </button>
              </span>
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
      {/* You can open the modal using ID.showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box bg-[#0a192f] lg:w-8/12 max-w-2xl"
        >
          <button className="btn btn-sm btn-circle btn-white absolute right-2 top-2">
            ✕
          </button>
          <div className="p-4 md:p-6">
            <div className="relative overflow-hidden">
              <div className="h-64 group rounded overflow-hidden relative">
                <div
                  className="portfolioImageContainer relative overflow-hidden"
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <img
                    src={showDetails.image}
                    alt={showDetails.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <a
                href={showDetails?.liveLinks?.[0]}
                target="_blank"
                className="py-1 px-2 bg-slate-400 text-white rounded-md"
              >
                Client Site GitHub
              </a>
              <a
                href={showDetails?.liveLinks?.[1]}
                target="_blank"
                className="py-1 px-2 bg-slate-400 text-white rounded-md"
              >
                Server Site GitHub
              </a>
              <a
                href={showDetails?.liveLinks?.[2]}
                target="_blank"
                className="py-1 px-2 bg-slate-400 text-white rounded-md"
              >
                Live Link
              </a>
            </div>
            <div className="mt-6 space-y-4">
              <h2 className="font-semibold text-2xl">
                <span className="font-bold">Project Name: </span>
                {showDetails.name}
              </h2>
              <div className="space-y-2">
                {showDetails.desc_points?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {showDetails.technologies?.map((tech, index) => (
                    <p
                      key={index}
                      className="py-1 px-2 bg-slate-400 text-white rounded-md"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Projects;
