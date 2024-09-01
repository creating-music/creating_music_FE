"use client";

import { Input } from "@mui/base/Input";
import Image from "next/image";
import { KeyboardEventHandler, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const onSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      // 검색 API 호출
    }
  };
  return (
    <Input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyUp={onSearch}
      startAdornment={
        <Image
          src={`${process.env.NEXT_PUBLIC_ICON}/${"search.svg"}`}
          alt=""
          width={24}
          height={24}
        />
      }
      slotProps={{
        root: {
          className:
            "inline-flex items-center rounded-[1.25rem] bg-u-gray-500 px-[16px] w-full max-w-[400px]",
        },
        input: {
          className:
            "text-u-gray-200 text-[1.25rem] h-[32px] w-full bg-transparent border-none focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
        },
      }}
    />
  );
};
export default Search;
