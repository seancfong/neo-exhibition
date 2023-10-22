import React from "react";
import Image from "next/image";
import "@/app/styles/loading.css";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="gradient-home flex h-screen w-screen flex-col items-center justify-center">
      <Image
        src="/images/bg-waves.webp"
        alt=""
        fill
        className="object-cover opacity-[15%]"
        priority
      />
      <div className="flex flex-col">
        <div className="lds-ellipsis ellipsis-top">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="lds-ellipsis ellipsis-middle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="lds-ellipsis ellipsis-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
