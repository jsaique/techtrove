import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={twMerge(
          "text-2xl text-charcoalText hover:text-darkGoldHover font-bold uppercase cursor-pointer hoverEffect relative group overflow-hidden"
        )}
      >
        TechTrove
        <span className="absolute left-0 bottom-0 w-full h-px bg-darkGoldHover -translate-x-[105%] group-hover:translate-x-0 hoverEffect" />
        <span className="absolute left-0 bottom-0 w-full h-px bg-darkGoldHover translate-x-[105%] group-hover:translate-x-0 hoverEffect" />
      </h2>
    </Link>
  );
};

export default Logo;
