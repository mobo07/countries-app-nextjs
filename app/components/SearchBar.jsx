"use client";

import { BiSearchAlt2 } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SearchBar({ countries }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    if (searchVal)
      setSuggestions(
        countries.filter((country) =>
          country.toLowerCase().startsWith(searchVal.toLowerCase())
        )
      );
    else setSuggestions([]);
  }, [searchVal, countries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/countries/${searchVal}`);
  };

  return (
    <div className="md:w-80 w-full bg-white relative dark:bg-[#2b3945]">
      <form
        className="w-full flex items-center h-10 bg-inherit px-3 mt-5 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <BiSearchAlt2 className="mr-3" />
        <input
          className="border-none w-full outline-none placeholder:text-xs dark:bg-[#2b3945]"
          type="text"
          placeholder="Search for a country..."
          onChange={handleInput}
          value={searchVal}
        />
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestion-box my-3 w-full h-max max-h-44 bg-white py-1 absolute z-10 overflow-y-scroll rounded-md shadow-md dark:bg-[#2b3945]">
          {suggestions.map((suggestion, idx) => (
            <Link href={`countries/${suggestion}`} key={idx}>
              <li className="w-full px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                {suggestion}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
