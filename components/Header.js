import {
  NewspaperIcon,
  BookOpenIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
  CashIcon,
  UserIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItems from "./HeaderItems";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row p-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/">
          <a>
            <HeaderItems src="/" title="HOME" Icon={HomeIcon} />
          </a>
        </Link>

        <Link href="/news">
          <a>
            <HeaderItems title="NEWS" Icon={NewspaperIcon} />
          </a>
        </Link>

        <Link href="/litepaper">
          <a>
            <HeaderItems title="LITEPAPER" Icon={BookOpenIcon} />
          </a>
        </Link>

        <Link href="/donate">
          <a>
            <HeaderItems title="DONATE" Icon={CashIcon} />
          </a>
        </Link>
      </div>

      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/favicon.ico"
            width={200}
            height={100}
          />
        </a>
      </Link>
    </header>
  );
}

export default Header;
