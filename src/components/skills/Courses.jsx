import React from "react";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-6">
      <div className="bgCustomGradient customShadow rounded-xl px-4 py-6 border-y border-primaryLight2 hover:scale-105 ease-in duration-100">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Complete Web Development</h2>
          <h6 className="font-semibold">Programming hero</h6>
        </div>
        <p className="mt-8">
          I completed successfully my Web development Courses from Programming
          hero. And I completed Many projects with React and MERN.
        </p>
      </div>
      <div className="bgCustomGradient customShadow rounded-xl px-4 py-6 border-y border-primaryLight2 hover:scale-105 ease-in duration-100">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">
            Advanced WordPress Development
          </h2>
          <h6 className="font-semibold">SoftTech-IT Institute</h6>
        </div>
        <p className="mt-8">
          I completed successfully my wordpress development Courses from
          SoftTech-IT Institute. And I completed some projects with wordpress
          and element customization.
        </p>
      </div>
    </div>
  );
};

export default Courses;
