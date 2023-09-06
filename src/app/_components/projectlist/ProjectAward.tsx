import Image from "next/image";
import React from "react";

type AwardProps = {
  description: string;
  organization: string;
};

const ProjectAward = ({ description, organization }: AwardProps) => {
  return (
    <>
      <div className="relative grid max-w-xs grid-cols-[auto_1fr] justify-start px-2 sm:w-fit sm:min-w-[350px] sm:max-w-none sm:px-5 lg:hidden">
        {/* Content */}
        <div className="relative col-start-1 row-span-3 row-start-1 ml-2 mr-2 self-center sm:ml-6 sm:mr-4">
          <Image src="icons/project/trophy.svg" alt="" height={64} width={64} />
        </div>
        <div className="col-span-2 col-start-1 row-start-2 h-full rounded-md bg-gradient-to-r from-[rgba(193,147,197,0.40)] to-[rgba(123,198,204,0.40)]" />
        <div className="relative col-start-2 row-start-2 flex flex-col justify-center sm:pr-10">
          <p className="text-sm font-normal uppercase tracking-wider sm:text-base">
            {organization}
          </p>
          <p className="text-xs font-extralight tracking-wide">{description}</p>
        </div>
        {/* Gutters */}
        <div className="col-span-2 row-start-1 h-2" />
        <div className="col-span-2 row-start-3 h-2" />
      </div>
    </>
  );
};

export default ProjectAward;
