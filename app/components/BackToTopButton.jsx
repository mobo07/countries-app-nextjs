"use client";

import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) setVisible(true);
    else if (scrolled <= 500) setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  return (
    <button
      className="fixed bottom-3 right-3 bg-white h-11 w-11 rounded-full shadow-md items-center justify-center z-10 dark:bg-[#202c37]"
      style={{ display: visible ? "flex" : "none" }}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </button>
  );
};

export default BackToTopButton;
