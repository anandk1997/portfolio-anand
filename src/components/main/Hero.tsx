"use client";
import React, { useEffect, useState } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Only render video after client-side mount */}
      {hasMounted && (
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}

      <HeroContent />
    </div>
  );
};

export default Hero;
