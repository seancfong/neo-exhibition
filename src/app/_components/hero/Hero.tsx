import HeroLinks from "@/components/hero/HeroLinks";
import { HeroSectionLink } from "@/types/types";
import Image from "next/image";
import React from "react";

type HeroProps = {
  heroLinks: Array<HeroSectionLink>;
};

const Hero = ({ heroLinks }: HeroProps) => {
  return (
    <section className="component-section h-[500px] min-h-screen py-5">
      {/* Hero container */}
      <div className="relative flex h-full justify-center overflow-y-hidden">
        {/* Background Image container */}
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            src="/images/hero-waves.jpg"
            alt="hero gradient"
            fill
            className="opacity-9 rounded-lg object-cover"
          />
          <Image
            src="/images/hero-gradient.jpg"
            alt="hero gradient"
            fill
            className="rounded-lg object-cover opacity-75"
          />
        </div>
        {/* Content Container Mobile*/}
        <div className="relative flex h-full w-full flex-col justify-center text-light lg:hidden">
          {/* Top */}
          <div className="px-[10%]">
            <h2 className="relative top-3 text-xl font-light tracking-wide">
              this website is about
            </h2>
            <h1 className="text-8xl leading-[0.9] tracking-wide">sean fong</h1>
          </div>
          {/* Line */}
          <div className="relative my-7 pl-[30%] pr-[10%]">
            <Image
              src="/icons/hero/hero_x.svg"
              alt="cross icon"
              width={16}
              height={16}
              className="absolute -top-6 right-[10%]"
            />
            <hr className="h-0.5 rounded-full border-none bg-light" />
          </div>
          {/* Bottom */}
          <div className="flex justify-center gap-6 sm:justify-end sm:pr-[15%]">
            {/* Icon container */}
            <Image
              src="/icons/hero/hero_icon.svg"
              alt="hero decoration"
              width={96}
              height={96}
              className="self-start"
            />
            {/* Links */}
            <HeroLinks links={heroLinks} />
          </div>
        </div>
        {/* Content Container Desktop */}
        <div className="relative top-[10vh] hidden h-full w-full max-w-6xl flex-col justify-center text-light lg:flex">
          {/* Top */}
          <div className="px-[12%]">
            <h2 className="relative top-3 text-2xl font-light tracking-wider">
              this website is about
            </h2>
            <h1 className="text-9xl leading-[0.9] tracking-wide">sean fong</h1>
          </div>
          {/* Line */}
          <div className="relative mb-4 mt-7 w-3/4 self-end pr-[10%]">
            <Image
              src="/icons/hero/hero_icon.svg"
              alt="hero decoration"
              width={160}
              height={160}
              className="absolute bottom-6 right-[15%] xl:right-[20%]"
            />
            <hr className="h-0.5 rounded-full border-none bg-light" />
            <Image
              src="/icons/hero/hero_x.svg"
              alt="hero icon"
              width={24}
              height={24}
              className="absolute top-4"
            />
          </div>
          {/* Bottom */}
          <div className="flex justify-end gap-6 pr-[5%] md:pr-[10%]">
            {/* Links */}
            <HeroLinks links={heroLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
