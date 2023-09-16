"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

type AnimatedImageProps = {
  src: string;
  alt: string;
  fill: boolean;
  sizes?: string;
  className: string;
  useView?: boolean;
};

const AnimatedImage = ({
  src,
  alt,
  fill,
  sizes,
  className,
}: AnimatedImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      ref={ref}
      objectFit="cover"
      style={{
        scale: isInView ? 1 : 1.08,
        transition: "all",
        transitionDuration: "1800ms",
        transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
      }}
    />
  );
};

export default AnimatedImage;
