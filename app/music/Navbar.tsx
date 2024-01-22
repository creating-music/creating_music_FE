"use client";

import { Input } from "@mui/base";
import Image from "next/image";
import Link from "next/link";
import Icon from "../_components/Icon";
import { KeyboardEventHandler, useState } from "react";
import Button from "../_components/Button";

export default function Navbar() {
  const [searchText, setSearchText] = useState<string>("");
  const onSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      console.log("search", searchText);
      // 검색 API 호출
    }
  };

  // 임시, 민석님이 만드신 로그인 상태 머지 되면 수정할게요 ~
  const [login, setLogin] = useState<boolean>(false);
  const onClickSignUp = () => {};
  const onClickLogin = () => {};
  const onClickLogout = () => {};

  return (
    <nav>
      <div className="flex h-[3rem] items-center justify-between bg-u-gray-400 px-[16.25rem]">
        <div className="flex items-center">
          <Image
            alt={`로고`}
            src={
              "https://creating-music.s3.ap-northeast-2.amazonaws.com/statics/showpang_logo.png"
            }
            width={200}
            height={56}
          />
          <Input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={onSearch}
            className="mr-[2rem] flex w-[35rem] items-center rounded-[1.25rem] bg-u-gray-500 px-[1rem]"
            startAdornment={<Icon name="search" />}
            slotProps={{
              input: {
                className:
                  "text-u-gray-200 text-[1.25rem] h-[2rem] w-[32rem] bg-u-gray-500 border-none focus:border-none focus:box-shadow-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent",
              },
            }}
          />
          <Link href={"/music/create"}>
            <p className="w-[9rem] text-center text-u-gray-300">
              AI 음악 만들기
            </p>
          </Link>
          <Link href={"/music/list"}>
            <p className="w-[9rem] text-center text-u-gray-300">
              음악 라이브러리
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-[1rem]">
          {login ? (
            <Link href="/mypage">
              {/** 마이페이지 라우트 수정필요 */}
              <Icon name="avatar" />
            </Link>
          ) : (
            <Button
              label="회원가입"
              onClick={onClickSignUp}
              filled={false}
              size="sm"
            />
          )}
          <Button
            label={login ? "로그아웃" : "로그인"}
            onClick={login ? onClickLogout : onClickLogin}
            filled
            size="sm"
          />
        </div>
      </div>
    </nav>
  );
}
