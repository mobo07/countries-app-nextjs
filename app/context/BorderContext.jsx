"use client";

import { createContext, useState } from "react";

export const BorderContext = createContext([]);

export default function BorderContextProvider({ children }) {
  const [borders, setBorders] = useState([]);

  return (
    <BorderContext.Provider value={{ borders, setBorders }}>
      {children}
    </BorderContext.Provider>
  );
}
