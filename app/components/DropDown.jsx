"use client";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function DropDown({ title }) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="md:w-48 w-2/3 max-w-3xl text-sm font-semibold bg-white relative dark:bg-[#2b3945]">
      <span className="w-full text-sm flex items-center justify-between h-10 px-3 mt-7 rounded-sm shadow-md">
        {title}
        <IoIosArrowDown
          className="cursor-pointer"
          onClick={() => setShowDropDown(!showDropDown)}
        />
      </span>
      {showDropDown && (
        <ul className="w-full my-2 py-2 bg-white rounded-sm shadow-md absolute z-50 select-none dark:bg-[#2b3945]">
          <Link
            href="/region/Africa"
            className="bg-white py-1 px-3 w-full block hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-[#2b3945]"
          >
            Africa
          </Link>
          <Link
            href="/region/America"
            className="bg-white py-1 px-3 w-full block hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-[#2b3945]"
          >
            America
          </Link>
          <Link
            href="/region/Asia"
            className="bg-white py-1 px-3 w-full block hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-[#2b3945]"
          >
            Asia
          </Link>
          <Link
            href="/region/Europe"
            className="bg-white py-1 px-3 w-full block hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-[#2b3945]"
          >
            Europe
          </Link>
          <Link
            href="/region/Oceania"
            className="bg-white py-1 px-3 w-full block hover:bg-slate-100 dark:hover:bg-slate-700 dark:bg-[#2b3945]"
          >
            Oceania
          </Link>
        </ul>
      )}
    </div>
  );
}
