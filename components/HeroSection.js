import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* Container div */}
      <div className="flex flex-row justify-center items-center">
        {/* <img src="/img-home.jpg" className="w-fit" alt="" /> */}
        <video
          src="./media/pexels-rostislav-uzunov-7710243.mp4"
          className="w-fit"
          alt=""
          autoPlay
          loop
          muted
        />

        {/* Flexible item */}
        <div className="absolute shadow-black text-4xl font-bold text-white hover:text-black hover:animate-ping">
          ENTERING THE DAO
        </div>
      </div>
    </>
  );
}
