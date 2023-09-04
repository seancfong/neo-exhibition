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
    offset: ["10vh", `${experiences?.length * 40}vh`],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"], {
    ease: easeInOut,
  });

  return (
    <section
      className="component-section relative w-full px-0"
      style={{ height: `${experiences?.length * 100}vh` }}
      ref={targetRef}
    >
      {/* Title Container Mobile */}
      <div className="block pl-6 lg:hidden"></div>
      {/* Track Mobile */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden text-light lg:hidden">
        <h2 className="my-5 w-fit hyphens-auto bg-gradient-to-r from-cpink to-cblue bg-clip-text text-6xl font-light lowercase tracking-wide text-transparent">
          experience
        </h2>
        <motion.div className="flex h-full gap-10" style={{ x }}>
          {experiences?.map((exp, i) => (
            <ExperienceCard experienceData={exp} key={exp?._id ?? i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
