"use client";

import Link from "next/link";
import Frame from "../_components/Frame";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const pathname = usePathname();

  return (
    <Frame className="mx-auto flex w-full max-w-[1200px] flex-col">
      <nav className="mx-auto flex h-[104px] w-full max-w-[1000px] items-center justify-center gap-[48px]">
        <Link
          href="/library/recent"
          className={navLinkStyle(pathname === "/library/recent")}
        >
          <span className="text-current [&>svg]:stroke-current">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 18V5L21.5 3V16"
                stroke="inherit"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 21C8.15685 21 9.5 19.6569 9.5 18C9.5 16.3431 8.15685 15 6.5 15C4.84315 15 3.5 16.3431 3.5 18C3.5 19.6569 4.84315 21 6.5 21Z"
                fill="inherit"
                stroke="inherit"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 19C20.1569 19 21.5 17.6569 21.5 16C21.5 14.3431 20.1569 13 18.5 13C16.8431 13 15.5 14.3431 15.5 16C15.5 17.6569 16.8431 19 18.5 19Z"
                fill="inherit"
                stroke="inherit"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          최근 나온 음악
        </Link>
        <Link
          href="/library/my"
          className={navLinkStyle(pathname === "/library/my")}
        >
          <span className="text-current [&>svg]:stroke-current">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="inherit"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="inherit"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          내가 만든 음악
        </Link>
      </nav>
      {children}
    </Frame>
  );
}

const navLinkStyle = (active: boolean) =>
  twMerge(
    clsx({
      "flex h-[48px] items-center gap-[10px] px-[15px] text-[1.5rem] font-semibold text-[#52525b]":
        true,
      "text-white": active,
    }),
  );

export default Layout;
