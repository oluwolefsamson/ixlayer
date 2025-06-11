import React from "react";
import phone from "../assets/phone.png";

const CTA = () => {
  return (
    <section className="relative w-full pt-[1500px] px-4 lg:pt-[200px] h-auto lg:h-[580px] py-20 lg:py-44 bg-gradient-to-br from-[#0a1834] via-[#11294d] to-[#0a1834] ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex-1 z-10">
          <span className="inline-block mb-4 mt-0 lg:mt-0 px-4 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/20">
            Why ixlayer works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Health testing within <span className="text-blue-300"> reach.</span>
          </h2>
          <p className="text-base md:text-lg text-blue-100 max-w-md">
            Get ahead of today’s health challenges in a rapidly evolving
            industry with ixlayer health testing
          </p>
        </div>
        {/* Right Images */}
        <div className="flex-1 relative flex justify-center">
          <img
            src={phone}
            alt="Phone"
            className="h-[400px] md:h-[400px] lg:h-[700px] z-20 drop-shadow-2xl relative lg:absolute lg:right-[10%] lg:top-[-300px]"
          />
        </div>
      </div>
      {/* Optional: background radial effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10% top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTA;
