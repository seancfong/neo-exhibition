import DynamicIcon from "@/components/icons/DynamicIcon";
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
      <ul className="flex gap-3 text-3xl lg:hidden">
        {links.map((link: HeroSectionLink, i) => (
          <li
            key={link?.key ?? i}
            className="rounded-lg bg-gradient-to-r from-cta-left to-cta-right"
          >
            <Link
              href={link?.linkURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit rounded-lg bg-[#222222] bg-opacity-20 p-4 font-light lowercase tracking-wider text-light"
            >
              <DynamicIcon
                library={link?.reactIcon?.library}
                icon={link?.reactIcon?.name}
              />
            </Link>
          </li>
        ))}
      </ul>
      {/* Desktop Links */}
      <ul className="hidden gap-2 rounded-lg bg-opacity-20 bg-gradient-to-r from-cta-left to-cta-right lg:flex">
        {links.map((link: HeroSectionLink, i) => (
          <>
            <li
              key={link?.key ?? i}
              className="w-fit font-light lowercase tracking-wider text-light"
            >
              <Link
                href={link?.linkURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit px-8 py-2 text-3xl"
              >
                {link?.name}
              </Link>
            </li>
            <li
              key={`bullet-${i}`}
              aria-hidden={true}
              className="self-center text-gray-300"
            >
              {/* Bullet Point */}
              {i !== links.length - 1 && <span>&#8226;</span>}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default HeroLinks;
