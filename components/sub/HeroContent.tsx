"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
// import styles from './SlidePanel.module.scss'

const HeroContent = () => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            MERN STACK Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          {/* <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" the best "}
            </span>
            project exprience
          </span> */}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" Anand Kumar "}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a MERN Stack Software Engineer with 3+ Years of experience in Modern Tech
          Stack, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={() => setShow(!show)}
        >
          Learn More!
        </motion.a>

        <SlidePanel show={show}>
          <span className="text-lg text-gray-400 my-5 max-w-[600px]">
            kjbmhjhgjhgjhgv
          </span>
        </SlidePanel>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

function SlidePanel({
  children,
  show,
}: {
  children: ReactNode;
  show: boolean;
}) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ height: "0" }}
          animate={{ height: "auto" }}
          exit={{ height: "0" }}
          transition={{
            delay: 0,
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
