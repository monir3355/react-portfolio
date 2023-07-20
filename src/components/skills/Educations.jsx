import React from "react";

const Educations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-6">
      <div className="bgCustomGradient customShadow rounded-xl px-4 py-6 border-y border-primaryLight2 hover:scale-105 ease-in duration-100">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Bachelor of Science (B.Sc)</h2>
          <h6 className="font-semibold">Computer Science & Engineering</h6>
          <h6 className="font-semibold">
            Bangladesh University Of Business & Technology(BUBT))
          </h6>
          <h6 className="font-semibold">Year of completion: 2022</h6>
        </div>
        <p className="mt-8">
          I am Monirul Islam. I completed successfully my graduation from
          Bangladesh University of Business and Technology (BUBT) Department of
          Computer Science and Engineering in 2022. I completed some project
          when I study in my University. Now I am Full stack developer in MERN.
        </p>
      </div>
      <div className="bgCustomGradient customShadow rounded-xl px-4 py-6 border-y border-primaryLight2 hover:scale-105 ease-in duration-100">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">
            Higher Secondary School Certificate
          </h2>
          <h6 className="font-semibold">Science</h6>
          <h6 className="font-semibold">Rajab Ali Memorial Science College</h6>
          <h6 className="font-semibold">Rajshahi board</h6>
          <h6 className="font-semibold">Year of completion: 2016</h6>
        </div>
        <p className="mt-8">
          I completed successfully my College from Rajab Ali Memorial Science
          College Department of Science in 2016. I love playing cricket and
          football when I was in my college.
        </p>
      </div>
      <div className="bgCustomGradient customShadow rounded-xl px-4 py-6 border-y border-primaryLight2 hover:scale-105 ease-in duration-100">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">
            Secondary School Certificate
          </h2>
          <h6 className="font-semibold">Science</h6>
          <h6 className="font-semibold">Choirganti Bhadraghat High School</h6>
          <h6 className="font-semibold">Rajshahi board</h6>
          <h6 className="font-semibold">Year of completion: 2014</h6>
        </div>
        <p className="mt-8">
          I completed successfully my School from Choirganti Bhadraghat High
          School Department of Science in 2014. I also love playing cricket and
          football when I was in my college.
        </p>
      </div>
    </div>
  );
};

export default Educations;
