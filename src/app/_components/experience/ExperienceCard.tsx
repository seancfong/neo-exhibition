"use client";
import { urlFor } from "@/lib/sanity/client";
import { ExperienceType } from "@/types/types";
import Image from "next/image";
type ExperienceCardType = {
  experienceData: ExperienceType;
};

const ExperienceCard = ({ experienceData }: ExperienceCardType) => {
  const {
    position,
    subtitle,
    startDate,
    endDate,
    companyLogo,
    bullets,
    featuredImage,
    skills,
  } = experienceData;

  console.log(experienceData);

  return (
    <>
      {/* Mobile Card */}
      <div className="relative z-10 grid max-h-[80vh] min-w-[330px] max-w-[90vw] flex-1 grid-cols-5 grid-rows-[auto_auto_1fr]">
        {/* Start & End Date (r1, c1) */}
        <div className="col-start-1 row-start-1 flex h-fit w-fit justify-end gap-2 justify-self-end overflow-x-visible pb-3 pr-2 pt-10">
          {/* Date Container */}
          <div className="relative h-fit whitespace-nowrap pt-5 text-right text-sm text-dim">
            <p>{startDate}</p>
            <p className="pr-1">|</p>
            <p>{endDate}</p>
          </div>
          {/* Decoration */}
          <div className="h-auto w-0.5 rounded-full bg-cyellow opacity-50" />
        </div>
        {/* Content Card (r1, c2) */}
        <div className="relative col-start-2 col-end-6 row-start-1 row-end-3 flex flex-col gap-3 p-5">
          {/* Logo */}
          <Image
            src={urlFor(companyLogo)?.url() ?? "/images/bg-waves.webp"}
            alt=""
            width={64}
            height={64}
            className="rounded-md"
          />
          {/* Background */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full">
            <Image
              src={urlFor(featuredImage)?.url() ?? "/images/bg-waves.webp"}
              alt=""
              fill
              className="-z-20 rounded-lg rounded-br-none object-cover"
            />
            <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg rounded-br-none bg-gradient-to-r from-[rgba(41,41,41,0.6)] to-[rgba(91,84,84,0.3)]" />
          </div>
          <p className="text-3xl lowercase leading-8 tracking-wide">
            {position}
          </p>
          <p className="text-sm tracking-wide">{subtitle}</p>
        </div>
        {/* White panel (r2, c1) */}
        <div className="row-span-2 row-start-2 w-5 justify-self-end rounded-l-lg bg-panel-light" />
        {/* Bullets & Skills (r3, c2) */}
        <div className="col-start-2 col-end-6 row-start-3 overflow-y-auto rounded-lg rounded-tl-none rounded-tr-3xl bg-panel-darkest p-5 pt-3">
          <ul className="list-inside list-disc font-light tracking-wider">
            {bullets.map((bullet) => {
              const { _key, content } = bullet;
              return (
                <li key={_key} className="pb-4">
                  {content}
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-light uppercase tracking-widest text-dim">
            {skills?.map((skill, i) => {
              const { _id, name } = skill;
              return (
                <>
                  <li key={_id}>{name}</li>
                  <li aria-hidden={true}>
                    {i !== skills.length - 1 && <span>&#8226;</span>}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
