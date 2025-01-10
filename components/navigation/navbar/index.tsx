import Link from "next/link";
import Image from "next/image";
import React from "react";
import Theme from "./Theme";
import { MobileNavigation } from "./MobileNavigation";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="StackOverflowAi Logo"
        />
        <p className="h2-bold font-space-grotesk  text-dark-100 dark:text-light-900 max-sm hidden sm:block">
          Stackoverflow<span className="text-primary-500">AI</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
}

export default Navbar;
