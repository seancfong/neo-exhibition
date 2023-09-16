"use client";
import DynamicIcon from "@/components/icons/DynamicIcon";
import { ProjectLink } from "@/types/types";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import cn from "classnames";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

type Props = {
  links: Array<ProjectLink>;
};

const tooltipVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};

const ProjectLinks = ({ links }: Props) => {
  const [isSectionHovered, setIsSectionHovered] = useState<boolean>(false);

  return (
    <div
      className="relative col-span-1 row-start-3 flex flex-col items-center gap-5 rounded-bl-lg bg-panel-light px-2 pb-5 pt-10 lg:col-start-11 lg:gap-6 lg:rounded-bl-none lg:rounded-br-lg"
      onMouseEnter={() => {
        setIsSectionHovered(true);
      }}
      onMouseLeave={() => {
        setIsSectionHovered(false);
      }}
    >
      <AnimatePresence>
        {isSectionHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute right-full top-0 h-full w-80 bg-gradient-to-r from-transparent to-[rgba(20,20,20,0.5)]"
          />
        )}
      </AnimatePresence>
      {links?.map((link, li) => (
        <LinkItem
          link={link}
          li={li}
          key={link?.linkURL}
          isSectionHovered={isSectionHovered}
        />
      ))}
    </div>
  );
};

type LinkItemProps = {
  li: number;
  link: ProjectLink;
  isSectionHovered: boolean;
};

const LinkItem = ({ link, li, isSectionHovered }: LinkItemProps) => {
  const { linkURL, reactIcon, linkTooltip } = link;
  const [isLinkHovered, setIsLinkHovered] = useState<boolean>(false);

  return (
    <span className="relative">
      <Link
        href={linkURL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10"
        onMouseEnter={() => {
          setIsLinkHovered(true);
        }}
        onMouseLeave={() => {
          setIsLinkHovered(false);
        }}
      >
        {isLinkHovered ? (
          <HiArrowTopRightOnSquare className="text-3xl text-neutral-300 transition-colors duration-200 sm:text-4xl" />
        ) : (
          <DynamicIcon
            icon={reactIcon?.name}
            library={reactIcon?.library}
            className={cn(
              "text-3xl transition-colors duration-200 sm:text-4xl",
              isSectionHovered ? "text-neutral-300" : "text-neutral-400",
            )}
          />
        )}
      </Link>
      <AnimatePresence>
        {isSectionHovered && (
          <motion.div
            className={cn(
              "pointer-events-none absolute bottom-1 right-12 hidden h-3/4 rounded-md  pl-8 pr-4 backdrop-blur-sm lg:block",
              isLinkHovered
                ? "bg-[rgba(123,198,204,0.30)]"
                : "bg-[rgba(141,141,141,0.6)]",
            )}
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={li}
          >
            <span className="whitespace-nowrap align-middle font-light tracking-wider text-light">
              {linkTooltip}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default ProjectLinks;
