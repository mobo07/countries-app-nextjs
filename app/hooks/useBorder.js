"use client";

import { useContext, useEffect } from "react";
import { BorderContext } from "../context/BorderContext";

export default function useBorder(countries) {
  const { setBorders } = useContext(BorderContext);

  useEffect(() => {
    if (countries.length)
      setBorders(
        countries.map((country) => ({
          countryName: country.name.common,
          cca3: country.cca3,
        }))
      );
  }, [countries, setBorders]);
}
