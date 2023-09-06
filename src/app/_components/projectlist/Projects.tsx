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

type ProjectsProps = {
  projects: Array<ProjectType>;
};

const Projects = ({ projects }: ProjectsProps) => {
  console.log(projects);

  return (
    <section className="component-section flex h-fit w-full flex-col items-center overflow-x-hidden">
      <h2 className="w-fit bg-gradient-to-r from-cpink to-cblue bg-clip-text py-2 text-[12vw] font-light lowercase leading-[12vw] tracking-wide text-transparent sm:text-7xl sm:leading-[5rem] lg:text-8xl">
        Projects
      </h2>
      {/* Mobile Projects List */}
      <div className="flex flex-col gap-20 lg:hidden">
        {projects.map((project, i) => {
          return (
            <div
              key={project?._id ?? i}
              className="grid max-w-xl grid-cols-[auto_repeat(6,1fr)]"
            >
              {/* Date (r1, c1) */}
              <div className="col-span-6 row-start-1 flex items-center gap-3 rounded-t-lg bg-panel-darkest px-5 py-2">
                <span className="whitespace-nowrap text-dim">
                  {project?.date}
                </span>
                <div className="h-0.5 w-full flex-grow rounded-full bg-cyellow opacity-50" />
              </div>
              {/* Count (r1, c5) */}
              <div className="col-start-7 row-start-1 self-center justify-self-center font-light text-[rgba(226,226,226,0.3)]">
                <span className="pr-0.5 text-3xl sm:text-4xl">{i + 1}</span>
                <span className="pr-0.5 sm:text-xl">/</span>
                <span className="sm:text-xl">{projects?.length ?? 0}</span>
              </div>
              {/* Image and Title  (r2, c1)*/}
              <div className="relative col-span-7 row-start-2 h-full w-full rounded-lg rounded-bl-none bg-panel-light p-5 pt-32 text-light sm:px-8">
                <div className="absolute left-0 top-0 z-0 h-full w-full">
                  <Image
                    src={
                      urlFor(project?.featuredImage)?.url() ??
                      "/images/bg-waves.webp"
                    }
                    alt=""
                    fill
                    className="-z-20 rounded-lg object-cover"
                  />
                  <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gradient-to-b from-[rgba(105,105,105,0)] to-[rgba(64,64,64,0.7)]" />
                </div>
                <div className="relative z-10 flex flex-col justify-end">
                  <h4 className="hyphens-auto text-[10vw] font-light lowercase leading-[10vw] tracking-wider sm:pb-3 sm:text-5xl sm:leading-10">
                    {project?.title}
                  </h4>
                  <p className="text-sm font-light tracking-wide">
                    {project?.subtitle}
                  </p>
                </div>
              </div>
              {/* Links (r3, c1) */}
              <div className="col-span-1 row-start-3 flex flex-col items-center gap-5 rounded-bl-lg bg-panel-light px-2 pt-10">
                {project?.links?.map((link, li) => {
                  const { linkURL, reactIcon } = link;
                  return (
                    <Link href={linkURL} key={linkURL}>
                      <DynamicIcon
                        icon={reactIcon?.name}
                        library={reactIcon?.library}
                        className="text-3xl text-[#9E9E9E] sm:text-4xl"
                      />
                    </Link>
                  );
                })}
              </div>
              {/* Description (r3, c2) */}
              <div className="col-span-6 col-start-2 row-start-3 flex flex-col gap-3 rounded-r-lg bg-panel-darkest pb-8 pt-6 text-light">
                {project?.award && (
                  <ProjectAward
                    description={project.award?.[0]?.awardDescription}
                    organization={project.award?.[0]?.organization}
                  />
                )}
                <div className="px-3 font-extralight leading-6 tracking-wider sm:px-5">
                  <PortableText
                    value={project?.description}
                    components={projectComponents}
                  />
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 px-3 text-xs font-light uppercase tracking-widest text-dim sm:px-5 sm:text-sm">
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
