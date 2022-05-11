import React from "react";
import Link from "next/link";

function Body() {
  return (
    <div className="flex flex-col h-auto px-10 py-28">
      <div className="flex items-center justify-evenly pb-10">
        <img
          className="pr-6"
          src="./media/hand-print.svg"
          width={250}
          height={100}
        />
        <div>
          <h1 className="text-green-500 font-mono text-xl font-bold pb-4 sm:text-3xl sm:font-bold pl-6 max-w-2xl">
            Stop Scammers in their Track
          </h1>
          <h2 className="font-mono text-lg font-bold sm:text-xl sm:font-bold pl-6 max-w-2xl">
            We aim to prevent fraud in the crypto space through education and
            awareness.
          </h2>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-row justify-center py-10">
        <div className="flex bg-yellow-500 drop-shadow-xl shadow-black rounded-full px-2 py-2 w-36 justify-center hover:bg-yellow-300">
          <Link href="/donate">
            <a className="font-bold font-mono ">Submit a Case</a>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <div>
          <h1 className="text-green-500 font-mono text-xl font-bold pb-4 sm:text-3xl sm:font-bold max-w-2xl">
            Community Support to the Rescue
          </h1>
          <h2 className="font-mono max-w-xl text-xl font-bold sm:text-3xl sm:font-bold">
            Submit your case to allow community members to help via our DAO.
          </h2>
        </div>
        <img className="" src="./media/man.svg" width={250} height={100} />
      </div>

      <div className="flex items-center justify-evenly py-16">
        <img
          className="pr-6"
          src="./media/BitcoinCash.svg"
          width={250}
          height={100}
        />
        <div>
          <h1 className="text-green-500 font-mono text-xl font-bold pb-4 sm:text-3xl sm:font-bold pl-6 max-w-2xl">
            Support Victims via $HERO Token
          </h1>
          <h2 className="font-mono text-lg font-bold sm:text-xl sm:font-bold pl-6 max-w-2xl">
            Our proprietary token to support victims of Crypto Related Scams
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
