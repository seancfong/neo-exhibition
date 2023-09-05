"use client";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { ExperienceType } from "@/types/types";
import { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";

type ExperienceProps = {
  experiences: Array<ExperienceType>;
};

const Experience = ({ experiences }: ExperienceProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["10vh", `${experiences?.length * 100}vh`],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      className="component-section relative w-full px-0"
      style={{ height: `${experiences?.length * 150}vh` }}
      ref={targetRef}
    >
      {/* Title Container Mobile */}
      <div className="block pl-6 lg:hidden"></div>
      {/* Track Mobile */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden text-light lg:hidden">
        <h2 className="bg-gradient-to-r from-cpink to-cblue bg-clip-text py-2 pl-6 text-[12vw] font-light lowercase leading-[12vw] tracking-wide text-transparent sm:text-7xl sm:leading-[5rem]">
          experiences
        </h2>
        {/* Decoration Track */}
        <div className="relative">
          <div className="absolute left-12 top-0 z-0 h-12 w-screen rounded-lg bg-panel-darkest" />
        </div>
        <motion.div
          className="flex h-fit w-max gap-10 pb-10 pl-6 pt-5"
          style={{ x }}
        >
          {experiences?.map((exp, i) => (
            <ExperienceCard experienceData={exp} key={exp?._id ?? i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
