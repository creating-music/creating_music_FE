"use client";

import Icon from "@/app/_components/Icon";
import ClientIcon from "@/app/_components/icon/ClientIcon";
import { Input } from "@mui/base/Input";
import { KeyboardEventHandler, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const onSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      console.log("search", searchText);
      // 검색 API 호출
    }
  };
  return (
    <Input
      type="text"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onKeyUp={onSearch}
      className="mr-[2rem] flex min-w-[0rem] max-w-[35rem] items-center rounded-[1.25rem] bg-u-gray-500 px-[1rem]"
      startAdornment={
        <ClientIcon iconUrl="https://creating-music.s3.ap-northeast-2.amazonaws.com/icons/search.svg" />
      }
      slotProps={{
        input: {
          className:
            "text-u-gray-200 text-[1.25rem] h-[2rem] w-[32rem] bg-u-gray-500 border-none focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
        },
      }}
    />
  );
};
export default Search;
