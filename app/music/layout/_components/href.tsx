"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";

const Href = () => {
  const pathname = usePathname();

  return (
    <Fragment>
      <Link href={"/music/create"}>
        <p
          className={
            "w-[9rem] text-center " +
            (pathname.endsWith("/music/create")
              ? "text-white"
              : "text-u-gray-300")
          }
        >
          AI 음악 만들기
        </p>
      </Link>
      <Link href={"/music/list"}>
        <p
          className={
            "w-[9rem] text-center " +
            (pathname.endsWith("/music/list")
              ? "text-white"
              : "text-u-gray-300")
          }
        >
          음악 라이브러리
        </p>
      </Link>
    </Fragment>
  );
};
export default Href;
