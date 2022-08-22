import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchArticle = () => {
  return (
    <div className="w-full relative">
      <div className="flex items-center">
        <div className="absolute left-5 ">
          <BsSearch size={20} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border border-solid p-3 pl-14 px-6 w-full rounded-full text-xl"
        />
      </div>
    </div>
  );
};

export default SearchArticle;
