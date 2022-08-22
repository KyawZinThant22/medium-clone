import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const GetStarted = () => {
  return (
    <>
      <div className="w-full bg-yellow py-3 h-[40rem] md:h-[38rem]  px-3 ">
        <Navbar />
        <div className="border border-t-[0px]"></div> {/* line break*/}
        <div className="container mx-auto px-3">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
