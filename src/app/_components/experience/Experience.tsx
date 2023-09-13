"use client";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { ExperienceType } from "@/types/types";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import NavbarRegion from "@/app/_context/NavbarRegion";
import { BsChevronDoubleDown } from "react-icons/bs";

type ExperienceProps = {
  experiences: Array<ExperienceType>;
};

const Experience = ({ experiences }: ExperienceProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(experiences?.length * 100) / (experiences?.length + 1)}%`],
  );

  return (
    <section
      className="component-section relative w-full px-0"
      style={{ height: `${experiences?.length * 130}vh` }}
      ref={targetRef}
      id="experience"
    >
      <NavbarRegion curSection={1} />
      {/* Track Mobile */}
      <div className="sticky top-0 mx-auto flex h-screen max-w-[1440px] flex-col justify-center overflow-hidden text-light">
        <h2 className="w-fit bg-gradient-to-r from-cpink to-cblue bg-clip-text py-2 pl-6 text-[12vw] font-light lowercase leading-[12vw] tracking-wide text-transparent sm:text-7xl sm:leading-[5rem] lg:pb-3 lg:text-7xl 2xl:pb-5 2xl:text-8xl">
          Experiences
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
            <div key={`exp-${i}`}>
              <ExperienceCard experienceData={exp} />
            </div>
          ))}
        </motion.div>
        <div className="pointer-events-none -z-10 w-full text-center text-xs uppercase tracking-widest text-neutral-500 lg:text-sm">
          <span className="relative -top-1">Keep scrolling down</span>
          <BsChevronDoubleDown className="mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
