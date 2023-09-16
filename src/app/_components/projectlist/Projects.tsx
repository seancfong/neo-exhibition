"use client";
import { ProjectType } from "@/types/types";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import DynamicIcon from "@/components/icons/DynamicIcon";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { projectComponents } from "@/components/projectlist/projectComponents";
import ProjectAward from "@/components/projectlist/ProjectAward";
import NavbarRegion from "@/app/_context/NavbarRegion";
import ProjectLinks from "@/components/projectlist/ProjectLinks";
import AnimatedLetters from "@/components/custom/AnimatedLetters";
import AnimatedImage from "@/components/custom/AnimatedImage";
import AnimatedBar from "@/components/custom/AnimatedBar";

type ProjectsProps = {
  projects: Array<ProjectType>;
};

const Projects = ({ projects }: ProjectsProps) => {
  // console.log(projects);

  return (
    <section
      className="component-section relative flex h-fit w-full flex-col items-center overflow-hidden pb-32"
      id="projects"
    >
      <NavbarRegion curSection={2} />
      <h2 className="w-fit bg-gradient-to-r from-cpink to-cblue bg-clip-text py-2 text-[12vw] font-light lowercase leading-[12vw] tracking-wide text-transparent sm:text-7xl sm:leading-[5rem] lg:pb-10 lg:text-7xl 2xl:text-8xl">
        Projects
      </h2>
      {/* Projects List */}
      <div className="flex flex-col gap-20">
        {projects.map((project, i) => {
          return (
            <div
              key={project?._id ?? i}
              className="grid max-w-xl grid-cols-[auto_repeat(6,1fr)] lg:max-w-3xl lg:grid-cols-[auto_repeat(9,1fr)_auto] 2xl:max-w-4xl"
            >
              {/* Desktop Decoration (r1, c1) */}
              <div className="col-start-1 row-span-3 row-start-1 hidden w-4 rounded-l-lg bg-panel-darkest lg:block" />
              {/* Date (r1, c1) */}
              <div className="lg:px-l col-span-6 row-start-1 flex items-center gap-3 rounded-t-lg bg-panel-darkest px-5 py-2 lg:col-span-9 lg:col-start-2 lg:rounded-tl-none lg:pb-3 lg:pl-2">
                <span className="whitespace-nowrap text-dim">
                  {project?.date}
                </span>
                <AnimatedBar />
              </div>
              {/* Count (r1, c5) */}
              <div className="col-start-7 row-start-1 self-center justify-self-center font-light text-[rgba(226,226,226,0.3)] lg:col-start-11 lg:px-4 lg:pb-1">
                <span className="pr-0.5 text-3xl sm:text-4xl lg:text-5xl">
                  {i + 1}
                </span>
                <span className="pr-0.5 sm:text-xl lg:text-2xl">/</span>
                <span className="sm:text-xl lg:text-2xl">
                  {projects?.length ?? 0}
                </span>
              </div>
              {/* Image and Title  (r2, c1)*/}
              <div className="relative col-span-7 row-start-2 flex aspect-video h-full w-full flex-col justify-end overflow-hidden rounded-lg rounded-bl-none bg-panel-light px-5 text-light sm:px-8 lg:col-span-10 lg:col-start-2 lg:bg-panel-darkest lg:px-10 lg:pt-44">
                <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden rounded-lg">
                  <AnimatedImage
                    src={
                      urlFor(project?.featuredImage)?.url() ??
                      "/images/bg-waves.webp"
                    }
                    alt=""
                    fill
                    sizes="100vw"
                    className="-z-20 object-cover"
                  />
                  <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-[rgba(105,105,105,0)] to-[rgba(64,64,64,0.7)] lg:rounded-bl-lg" />
                </div>
                <div className="relative z-10 flex flex-col justify-end">
                  <AnimatedLetters
                    tag="h4"
                    pb={4}
                    className="hyphens-auto text-[10vw] font-light lowercase leading-[10vw] tracking-wider sm:text-5xl sm:leading-10 lg:text-6xl 2xl:text-7xl"
                  >
                    {project?.title}
                  </AnimatedLetters>
                  <AnimatedLetters
                    tag="p"
                    stagger={0.01}
                    className="pb-3 text-sm font-light tracking-wide lg:pb-5 lg:text-lg lg:font-extralight xl:pb-8 2xl:text-xl"
                  >
                    {project?.subtitle}
                  </AnimatedLetters>
                </div>
              </div>
              {/* Desktop Links Decoration (r3, c11) */}
              <div className="col-start-11 row-start-2 hidden h-10 self-end bg-panel-light lg:block" />
              {/* Links (r3, c1) */}
              <ProjectLinks links={project?.links} />
              {/* Description (r3, c2) */}
              <div className="col-span-6 col-start-2 row-start-3 flex flex-col gap-3 rounded-r-lg bg-panel-darkest pb-8 pt-6 text-light lg:col-span-9">
                {project?.award && (
                  <ProjectAward
                    description={project.award?.[0]?.awardDescription}
                    organization={project.award?.[0]?.organization}
                  />
                )}
                <div className="px-3 font-extralight leading-6 tracking-wider sm:px-5 lg:px-10 lg:text-xl lg:leading-8 2xl:text-2xl 2xl:leading-9">
                  <PortableText
                    value={project?.description}
                    components={projectComponents}
                  />
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 px-3 text-xs font-light uppercase tracking-widest text-dim sm:px-5 sm:text-sm lg:pl-10 lg:text-base">
                  {project?.techStack?.map((skill, i) => {
                    const { _id, name } = skill;
                    return (
                      <li key={_id}>
                        <span>{name}</span>
                        <span aria-hidden={true} className="pl-3">
                          {i !== project?.techStack?.length - 1 && (
                            <span>&#8226;</span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
