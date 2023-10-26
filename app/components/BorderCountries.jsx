"use client";

import { useContext, useEffect, useState } from "react";
import { BorderContext } from "../context/BorderContext";
import Link from "next/link";

const BorderCountries = ({ borderCountries }) => {
  const { borders, setBorders } = useContext(BorderContext);
  const [borderError, setBorderError] = useState("");

  const getBorderName = (key) => {
    return borders.filter((border) => border.cca3 === key)[0].countryName;
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        setBorderError("");
        const res = await fetch("https://restcountries.com/v3.1/all");
        const countries = await res.json();
        setBorders(
          countries.map((country) => ({
            countryName: country.name.common,
            cca3: country.cca3,
          }))
        );
      } catch (error) {
        setBorderError("failed to fetch border countries");
      }
    };

    if (!borders.length) {
      getCountries();
    }
  }, []);

  return (
    <p className="text-sm font-semibold mb-2 w-[90%] flex flex-wrap">
      Border Countries:
      {borderError ? (
        <span className="font-normal text-red-500 ml-1">{borderError}</span>
      ) : borders.length ? (
        borderCountries?.map((b) => (
          <Link
            key={b}
            href={`/countries/${getBorderName(b)}`}
            className="mx-1 mb-2"
          >
            <span className="font-normal px-2 py-1 text-center rounded-sm shadow-md dark:bg-[#2b3945]">
              {getBorderName(b)}
            </span>
          </Link>
        ))
      ) : (
        <span className="font-normal ml-1">fetching border countries...</span>
      )}
    </p>
  );
};

export default BorderCountries;
