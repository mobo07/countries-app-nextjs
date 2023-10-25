"use client";

import CountryCard from "./CountryCard";
import useBorder from "../hooks/useBorder";

export default function CountriesContainer({ countries }) {
  useBorder(countries);

  return (
    <div className="my-5 flex flex-wrap items-center justify-center gap-4 md:gap-9 md:justify-around dark:bg-[#202c37]">
      {countries.map((country, idx) => (
        <CountryCard key={idx} country={country} />
      ))}
    </div>
  );
}
