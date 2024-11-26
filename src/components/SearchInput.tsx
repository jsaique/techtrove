"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="w-full hidden md:inline-flex flex-1 h-12 relative">
        <CiSearch className="absolute text-lg left-2.5 mt-3.5 text-midGrayText hover:text-darkGoldHover cursor-pointer" />
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search && (
          <IoMdClose
            onClick={() => setSearch("")}
            className=" absolute right-20 top-4 text-midGrayText hover hover:text-charcoalText hoverEffect"
          />
        )}
        <button className="absolute right-0 px-3.5 py-1.5 mr-1.5 top-2 text-sm bg-darkGold text-midGrayText hover:bg-darkGoldHover hover:text-accentWhite hoverEffect rounded-sm cursor-pointer">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
