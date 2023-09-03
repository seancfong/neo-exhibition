import ExperienceCard from "@/components/experience/ExperienceCard";
import { ExperienceType } from "@/types/types";
import React from "react";

type ExperienceProps = {
  experiences: Array<ExperienceType>;
};

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section
      className="component-section relative w-full px-0"
      style={{ height: `${experiences?.length * 80}vh` }}
    >
      {/* Title Container Mobile */}
      <div className="block pl-6 lg:hidden">
        <h2 className="mb-5 w-fit hyphens-auto bg-gradient-to-r from-cpink to-cblue bg-clip-text text-6xl font-light lowercase tracking-wide text-transparent">
          experience
        </h2>
      </div>
      {/* Track Mobile */}
      <div className="sticky top-0 flex h-screen items-center gap-10 overflow-hidden text-light lg:hidden">
        {experiences?.map((exp, i) => (
          <ExperienceCard experienceData={exp} key={exp?._id ?? i} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
