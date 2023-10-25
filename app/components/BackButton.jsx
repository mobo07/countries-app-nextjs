"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      className="w-20 mb-5 px-3 py-1 text-xs flex items-center justify-center rounded-sm shadow-md"
      onClick={handleClick}
    >
      <AiOutlineArrowLeft className="mr-3" />
      Back
    </button>
  );
}
