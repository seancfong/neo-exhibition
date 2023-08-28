import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="component-section h-[500px] min-h-screen py-5">
      {/* Hero container */}
      <div className="relative col-span-5 h-full w-[5fr]">
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
        <div className="relative flex h-full w-full flex-col justify-center text-light md:hidden">
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
              alt="hero gradient"
              width={16}
              height={16}
              className="absolute -top-6 right-[10%]"
            />
            <hr className="h-0.5 rounded-full border-none bg-light" />
          </div>
          {/* Bottom */}
          <div className="flex justify-center">
            {/* Icon container */}
            <Image
              src="/icons/hero/hero_icon.svg"
              alt="hero gradient"
              width={96}
              height={96}
            />
            {/* Links */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
