import { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    // {style.container}
    <div className="flex flex-row justify-between px-5 py-5 bg-black sm:h-12 sm:bg-black sm:text-white sm:flex sm:items-center sm:justify-between sm:text-lg sm:px-12 sm:py-24 sm:relative sm:overflow-hidden lg:px-12">
      <Link href="/">
        <a>
          <h1 className="text-white font-bold text-2xl sm:font-bold sm:text-2xl sm:pl-6">
            Buzzwired
          </h1>
        </a>
      </Link>

      {/* {style.list} */}
      <ul className="h-8 mb-1">
        {/* {style.listItem} */}
        <li className="hidden sm:inline-block sm:mr-7 sm:text-sm sm:text-white sm:cursor-pointer hover:text-gray-500 hover:animate-bounce">
          <Link href="/">HOME</Link>
        </li>
        <li className="hidden sm:inline-block sm:mr-7 sm:text-sm sm:text-white sm:cursor-pointer hover:text-gray-500 hover:animate-bounce">
          <Link href="/news">NEWS</Link>
        </li>
        <li className="hidden sm:inline-block sm:mr-7 sm:text-sm sm:text-white sm:cursor-pointer hover:text-gray-500 hover:animate-bounce">
          <Link href="/litepaper">LITEPAPER</Link>
        </li>
        <li className="hidden sm:inline-block sm:mr-7 sm:text-sm sm:text-white sm:cursor-pointer hover:text-gray-500 hover:animate-bounce">
          <Link href="/donate">DONATE</Link>
        </li>
      </ul>

      {/* {style.hamburger} - 3 lines */}
      <div
        className="flex flex-col justify-between w-6 h-5 cursor-pointer sm:hidden "
        onClick={() => setOpen(!open)}
      >
        {/* {style.line} */}
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
      </div>

      {/* <h1 className="font-bold text-2xl items-end text-white sm:hidden">
        Buzzwired
      </h1> */}

      {/*  {style.menu}-  */}
      <ul
        onClick={() => setOpen(false)}
        className="flex flex-col items-center justify-around fixed w-2/4 h-4/5 bg-black hover:bg-zinc-900 top-16 z-50 m-0 p-0 font-bold text-white list-none transition-all ease duration-200 sm:hidden"
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className="hover:text-white">
          <Link href="/">HOME</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/news">NEWS</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/litepaper">LITEPAPER</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/donate">DONATE</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
