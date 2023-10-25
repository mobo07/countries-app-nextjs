"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollToTop({ children }) {
  const pathname = usePathname();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
