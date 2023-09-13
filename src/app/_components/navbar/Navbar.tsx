"use client";
import React from "react";
import Link from "next/link";
import NavProgressbar from "@/components/navbar/NavProgressbar";

type Props = {};
type sectionLink = {
  title: string;
  id: string;
};

const Navbar = (props: Props) => {
  const sections: Array<sectionLink> = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Experience",
      id: "experience",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Skills",
      id: "skills",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="pointer-events-none fixed bottom-6 z-50 hidden w-full items-center justify-center text-light lg:flex">
        <div className="pointer-events-auto flex rounded-lg bg-[rgba(99,99,99,0.5)] shadow-md backdrop-blur-sm">
          {/* Title and Name */}
          <div className="py-2 pl-8 pr-10 lowercase">
            <h4 className="text-3xl leading-7 tracking-wide">The Showcase</h4>
            <p className="font-light leading-5 tracking-wide text-[#ccc]">
              by Sean Fong
            </p>
          </div>
          {/* Sections */}
          <div className="grid grid-cols-4 grid-rows-[1fr_min-content]">
            <div className="col-span-4 grid grid-cols-[repeat(4,auto)] place-items-center rounded-b-md bg-panel-darkest px-6 lowercase">
              {sections.map((section, i) => {
                return (
                  <Link
                    key={`nav-section-${i}`}
                    className="col-span-1 px-6 text-xl text-[#ccc]"
                    href={`#${section.id}`}
                  >
                    {section.title}
                  </Link>
                );
              })}
            </div>
            {/* Progress bar */}
            <NavProgressbar />
          </div>
          {/* Padding Right */}
          <div className="w-5" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
