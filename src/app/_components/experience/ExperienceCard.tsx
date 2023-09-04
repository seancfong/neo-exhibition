"use client";
import { ExperienceType } from "@/types/types";

type ExperienceCardType = {
  experienceData: ExperienceType;
};

const ExperienceCard = ({ experienceData }: ExperienceCardType) => {
  const { position, subtitle, startDate, endDate, companyLogo, bullets } =
    experienceData;

  console.log(experienceData);

  return <div className="w-[600px]">{position}</div>;
};

export default ExperienceCard;
