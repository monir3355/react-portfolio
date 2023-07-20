import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Educations from "./Educations";
import Courses from "./Courses";

const Skills = () => {
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
        <Tabs>
          <TabList className="flex justify-center gap-2">
            <Tab className="border-0 py-2 px-4 cursor-pointer">
              Technologies
            </Tab>
            <Tab className="border-0 py-2 px-4 cursor-pointer">Educations</Tab>
            <Tab className="border-0 py-2 px-4 cursor-pointer">Experience</Tab>
            <Tab className="border-0 py-2 px-4 cursor-pointer">Courses</Tab>
          </TabList>

          <TabPanel className="mt-10">
            <Technologies />
          </TabPanel>
          <TabPanel>
            <Educations />
          </TabPanel>
          <TabPanel>
            <Experience />
          </TabPanel>
          <TabPanel>
            <Courses />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
