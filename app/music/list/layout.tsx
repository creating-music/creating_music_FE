import { ReactNode } from "react";
import Banner from "./_components/Banner";
import { MUSIC_LIST_PAGE } from "@/app/_constants/routes";
import Frame from "@/app/_components/Frame";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const banners = [
    {
      id: 0,
      link: MUSIC_LIST_PAGE,
      imgSrc:
        "https://creating-music.s3.ap-northeast-2.amazonaws.com/statics/%E1%84%89%E1%85%AD%E1%84%91%E1%85%A2%E1%86%BC%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5+2.jpg",
    },
  ];
  return (
    <>
      <Frame>
        <Banner banners={banners} />
      </Frame>
      <div className="bg-gradient-to-b from-[#202023] to-u-gray-500" />
      {children}
    </>
  );
}
