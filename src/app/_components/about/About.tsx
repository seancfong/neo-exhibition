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
    <section className="component-section mt-10 flex h-fit w-full items-center justify-center">
      {/* Content Container Mobile */}
      <div className="flex h-full w-full max-w-md flex-col items-center lg:hidden">
        <div className="relative h-0 w-3/4 rounded-lg rounded-bl-none bg-[#636363] bg-opacity-40 pt-[75%] sm:w-3/5 sm:pt-[60%]">
          {/* Image container */}
          <div className="absolute left-10 top-6 h-full w-full">
            <Image
              src="/images/sean2021.webp"
              alt="image of Sean"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="relative w-full rounded-2xl bg-[#222222] bg-opacity-40 p-5 backdrop-blur-sm md:py-10">
          {/* Decor container */}
          <Image
            src="/icons/about/about_decor.svg"
            alt="about decoration"
            width={124}
            height={20}
            className="absolute -top-10 rounded-lg object-cover"
          />
          <h2 className="mb-5 w-fit bg-gradient-to-r from-cpink to-cblue bg-clip-text text-6xl font-light lowercase tracking-wide text-transparent">
            Hello
          </h2>
          <p className="text-xl font-light leading-8 tracking-wide text-[#A0A0A0] sm:text-2xl sm:leading-9">
            I am a third-year student at <H>UC Irvine</H> majoring in{" "}
            <H>Computer Science</H> with a minor in <H>Informatics</H>. I enjoy
            creating innovative and practical <H>applications</H> people can{" "}
            <H>interact</H> with, and I sometimes write about them too!
          </p>
        </div>
      </div>
      {/* Content Container Desktop */}
      <div className="hidden w-full max-w-6xl grid-cols-[1fr_2fr] py-16 lg:grid">
        {/* White Panel (r1, c1)*/}
        <div className="relative bottom-[15%] z-0 col-start-1 col-end-2 row-start-1 row-end-5 h-[110%] w-8/12 justify-self-end rounded-lg bg-panel-light" />
        {/* Top Left Image container (r2, c1)*/}
        <div className="relative z-20 col-start-1 col-end-2 row-start-2 row-end-4 p-10">
          {/* Square container */}
          <div className="relative h-full w-full p-5 pt-[100%]">
            <Image
              src="/images/sean2021.webp"
              alt="image of Sean"
              fill
              className="rounded-lg object-cover"
            />
            {/* Decor container */}
            <Image
              src="/icons/about/about_decor_desktop.svg"
              alt="about decoration"
              width={124}
              height={20}
              className="absolute -bottom-16 right-0 rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Top Right Title (r2, c2)*/}
        <div className="row-start-2 w-fit self-end pl-5">
          <h2 className="text-3xl font-light lowercase leading-10 tracking-wide text-dim">
            Hello, my name is
          </h2>
          <h1 className="bg-gradient-to-r from-cpink to-cblue bg-clip-text pb-4 text-8xl font-light lowercase tracking-wide text-transparent">
            Sean Fong
          </h1>
        </div>
        {/* Bottom Left Image Background (r3, c1)*/}
        <div className="z-10 col-start-1 col-end-2 row-start-3 row-end-4 rounded-2xl rounded-br-none rounded-tr-none bg-panel-darkest" />
        {/* Bottom Right Paragraph container (r3, c2)*/}
        <p className="row-start-3 rounded-2xl rounded-bl-none rounded-tl-none bg-panel-darkest pb-9 pl-5 pr-20 pt-5 text-3xl font-light leading-10 tracking-wide text-dim">
          I am a third-year student at <H>UC Irvine</H> majoring in{" "}
          <H>Computer Science</H> with a minor in <H>Informatics</H>. I enjoy
          creating innovative and practical <H>applications</H> people can{" "}
          <H>interact</H> with, and I sometimes write about them too!
        </p>
        {/* Bottom Right Hero Links (r4, c2)*/}
        <div className="col-start-2 row-start-4 flex justify-end pt-6">
          <AboutLinks links={links} />
        </div>
      </div>
    </section>
  );
};

export default About;
