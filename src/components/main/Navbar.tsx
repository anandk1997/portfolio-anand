"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { Fragment } from "react";
import { Tooltip } from "react-tooltip";
import { handleSocial } from "@/components/main/Footer";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10 z-[70]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto pr-[12px] sm:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/Profile.jpeg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Anand Kumar
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3 md:gap-5">
          {Socials.map((social, i) => (
            <Fragment key={social.name}>
              <Tooltip id={i.toString()}>
                <span className="text-white">{social.name}</span>
              </Tooltip>

              <Image
                className={"z-50 cursor-pointer"}
                data-tooltip-id={i.toString()}
                onClick={() => handleSocial(social.action)}
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
