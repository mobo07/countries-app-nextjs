"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 bg-white w-full h-14 px-3 flex justify-between items-center shadow-md dark:bg-[#2b3945]">
      <Link href="/">
        <h1 className="font-bold">Where in the world?</h1>
      </Link>
      <ThemeSwitcher />
      {/* <div className="text-sm font-semibold flex items-center gap-2 cursor-pointer">
        <BsMoon />
        <span className="text-sm">Dark Mode</span>
      </div> */}
    </nav>
  );
}
