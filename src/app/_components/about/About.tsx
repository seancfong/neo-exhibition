import NavbarRegion from "@/app/_context/NavbarRegion";
import AboutLinks from "@/components/about/AboutLinks";
import { HeroSectionLink } from "@/types/types";
import Image from "next/image";

type AboutProps = {
  links: Array<HeroSectionLink>;
};

const H = ({ children }: { children: string }): JSX.Element => (
  <span className="text-white">{children}</span>
);

const About = ({ links }: AboutProps) => {
  return (
    <section
      className="component-section relative flex h-fit w-full items-center justify-center overflow-hidden"
      id="about"
    >
      <NavbarRegion curSection={0} />
      {/* Content Container Mobile */}
      <div className="grid h-full w-full max-w-md grid-cols-[repeat(2,1fr)] flex-col items-center pt-10 lg:hidden">
        {/* White Panel (r1, c1) */}
        <div className="relative -right-6 -top-6 z-0 col-start-1 col-end-2 row-start-1 row-end-6 h-full w-4/5 justify-self-end rounded-lg bg-panel-light" />
        {/* Subtitle (r2, c2) */}
        <h2 className="relative z-10 col-span-2 col-start-1 row-start-2 justify-self-end pr-[8vw] text-2xl font-light leading-8 tracking-wide text-dim sm:pr-5 sm:text-3xl">
          hello, my name is
        </h2>
        {/* Image (r3, c1) */}
        <div className="col-start-1 row-start-3 h-full w-full py-3 pl-[8vw] pr-1 sm:pl-5">
          <div className="relative h-full w-full justify-self-end rounded-lg pt-[100%] sm:h-0">
            <Image
              src="/images/sean2021.webp"
              alt="image of Sean"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Title (r3, c2) */}
        <div className="relative z-10 col-start-2 row-start-3 w-fit place-self-start pb-2 pr-[8vw] sm:pr-5">
          <h1 className="bg-gradient-to-r from-cpink to-cblue bg-clip-text pb-5 text-right text-[12vw] font-light lowercase leading-[12vw] tracking-wide text-transparent sm:text-7xl sm:leading-[5rem]">
            Sean Fong
          </h1>
          <Image
            src="/icons/about/about_decor.svg"
            alt="about decoration"
            width={90}
            height={20}
            className="ml-auto mr-0"
          />
        </div>
        {/* Paragraph Container (r4, c1) */}
        <div className="relative col-span-2 col-start-1 row-start-4 w-full rounded-2xl bg-[#222222] bg-opacity-40 p-5 backdrop-blur-sm sm:px-10">
          <p className="text-xl font-light leading-8 tracking-wide text-[#A0A0A0] sm:text-2xl sm:leading-9">
            <AboutText />
          </p>
        </div>
        {/* Bottom Right Hero Links (r5, c1)*/}
        <div className="relative z-10 col-span-2 col-start-1 row-start-5 pl-5 pt-6 sm:pl-10">
          <AboutLinks links={links} />
        </div>
      </div>

      {/* Content Container Desktop */}
      <div className="hidden w-full max-w-6xl grid-cols-[1fr_2fr] py-16 lg:grid">
        {/* White Panel (r1, c1)*/}
        <div className="relative bottom-[15%] z-0 col-start-1 col-end-2 row-start-1 row-end-5 h-[110%] w-8/12 justify-self-end rounded-lg bg-panel-light" />
        {/* Top Left Image container (r2, c1)*/}
        <div className="relative z-20 col-start-1 col-end-2 row-start-2 row-end-4 p-10">
          {/* Square container */}
          <div className="relative h-0 w-full p-5 pt-[100%]">
            <Image
              src="/images/sean2021.webp"
              alt="image of Sean"
              fill
              className="rounded-lg object-cover"
            />
            {/* Decor container */}
            <Image
              src="/icons/about/about_decor_desktop.svg"
              alt=""
              width={124}
              height={20}
              className="absolute -bottom-16 right-0 rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Top Right Title (r2, c2)*/}
        <div className="row-start-2 w-fit self-end pl-5">
          <h2 className="text-2xl font-light lowercase leading-10 tracking-wide text-dim 2xl:text-3xl">
            Hello, my name is
          </h2>
          <h1 className="bg-gradient-to-r from-cpink to-cblue bg-clip-text pb-4 text-8xl font-light lowercase tracking-wide text-transparent">
            Sean Fong
          </h1>
        </div>
        {/* Bottom Left Image Background (r3, c1)*/}
        <div className="z-10 col-start-1 col-end-2 row-start-3 row-end-4 rounded-2xl rounded-br-none rounded-tr-none bg-panel-darkest" />
        {/* Bottom Right Paragraph container (r3, c2)*/}
        <p className="row-start-3 rounded-2xl rounded-bl-none rounded-tl-none bg-panel-darkest pb-3 pl-5 pr-20 pt-5 text-2xl font-light leading-9 tracking-wide text-dim 2xl:pb-9 2xl:text-3xl 2xl:leading-10">
          <AboutText />
        </p>
        {/* Bottom Right Hero Links (r4, c2)*/}
        <div className="col-start-2 row-start-4 flex justify-end pt-6">
          <AboutLinks links={links} />
        </div>
      </div>
    </section>
  );
};

const AboutText = () => {
  return (
    <>
      I am a third-year student at <H>UC Irvine</H> majoring in{" "}
      <H>Computer Science</H> with a minor in <H>Informatics</H>. I enjoy
      creating innovative and practical <H>applications</H> people can{" "}
      <H>interact</H> with, and I sometimes write about them too!
    </>
  );
};

export default About;
