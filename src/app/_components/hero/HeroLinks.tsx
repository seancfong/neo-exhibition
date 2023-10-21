import { HeroSectionLink } from "@/types/types";
import Link from "next/link";
import React from "react";

type HeroLinkProps = {
  links: Array<HeroSectionLink>;
};

const HeroLinks = ({ links }: HeroLinkProps) => {
  return (
    <>
      {/* Mobile Links */}
      <ul className="flex flex-col gap-1 lg:hidden">
        {links.map((link: HeroSectionLink, i) => (
          <li key={link?.key ?? i} className="w-fit">
            <Link
              href={link?.linkURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit rounded-lg bg-[#222222] bg-opacity-20 py-1 pl-[4vw] pr-[10vw] text-2xl font-light lowercase tracking-wider text-light md:text-3xl"
            >
              {link?.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Desktop Links */}
      <ul className="hidden gap-2 rounded-lg bg-[#222222] bg-opacity-20 lg:flex">
        {links.map((link: HeroSectionLink, i) => (
          <React.Fragment key={link?.key}>
            <li className="w-fit font-light lowercase tracking-wider text-light">
              <Link
                href={link?.linkURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit px-8 py-2 text-3xl"
              >
                {link?.name}
              </Link>
            </li>
            <li aria-hidden={true} className="self-center text-gray-300">
              {i !== links.length - 1 && <span>&#8226;</span>}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default HeroLinks;
