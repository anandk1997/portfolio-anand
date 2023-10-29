"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Tooltip className="z-[66666]" id={index.toString() + name}>
        <span className="text-white">{name}</span>
      </Tooltip>

      <Image
        src={src}
        className="cursor-pointer"
        data-tooltip-id={index.toString() + name}
        width={width}
        height={height}
        alt="skill image"
      />
    </motion.div>
  );
};

export default SkillDataProvider;
