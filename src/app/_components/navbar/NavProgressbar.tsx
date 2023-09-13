"use client";
import { useNavbarContext } from "@/app/_context/NavbarContext";
import React, { useEffect, useState } from "react";

type Props = {};

const NavProgressbar = (props: Props) => {
  const { sectionArray } = useNavbarContext();
  const [maxIndex, setMaxIndex] = useState<number>(0);

  useEffect(() => {
    let ind = 0;
    sectionArray.forEach((arrayBoolean, i) => {
      if (arrayBoolean) {
        ind = i;
      }
    });
    setMaxIndex(ind);
  }, [sectionArray]);

  return (
    <div
      className="col-span-4 mb-1.5 ml-1.5 h-0.5 rounded-full bg-cyellow opacity-50 transition-all duration-700 ease-in-out"
      style={{ width: `${12.5 + 26 * maxIndex}%` }}
    />
  );
};

export default NavProgressbar;
