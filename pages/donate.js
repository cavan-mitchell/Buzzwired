import React from "react";
import Link from "next/link";
import Connectwallet from "../components/Connectwallet";
import Body from "../components/Body";

function donate() {
  return (
    <>
      <Connectwallet />
      <div className="relative flex flex-col justify-center items-center ">
        <video
          src="./media/video (7).mp4"
          className="w-fit"
          alt=""
          autoPlay
          loop
          muted
        />

        {/* Flexible item */}
        <div className="absolute">
          <div className="text-3xl font-bold text-white mb-4 drop-shadow-xl hover:animate-ping">
            <br></br> Donations enabled in Beta 2.0
          </div>
        </div>
      </div>
      <Body />
    </>
  );
}

export default donate;
