"use client";
import { ExperienceType } from "@/types/types";

type ExperienceCardType = {
  experienceData: ExperienceType;
};

const ExperienceCard = ({ experienceData }: ExperienceCardType) => {
  const { position, subtitle, startDate, endDate, companyLogo, bullets } =
    experienceData;

  console.log(experienceData);

  return <div>{position}</div>;
};

export default ExperienceCard;
