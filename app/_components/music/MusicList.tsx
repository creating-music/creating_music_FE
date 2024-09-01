"use client";

import MusicBar from "@/app/_components/music/MusicBar";
import type { Music } from "../../_types/music";

interface Props {
  musicList: Music[];
}

export default function MusicList({ musicList }: Props) {
  return (
    <div>
      <div className="flex items-center border-y-2 border-u-gray-300 px-[1.5rem] text-u-gray-300">
        <div className="w-[80px] flex-shrink-0 text-center" />
        <div className="w-[80px] flex-shrink-0 text-center" />
        <div className="w-[240px] text-center">곡 정보</div>
        <div className="w-[80px] text-center">장르</div>
        <div className="w-[80px] text-center">듣기</div>
        <div className="w-[80px] text-center" />
        <div className="w-[280px] text-center" />
      </div>
      <ol className="overflow-scroll-gradient flex h-[37.5rem] flex-col overflow-y-scroll overscroll-auto scroll-smooth pb-[3.5rem] scrollbar-hide">
        {musicList.map((music, i) => (
          <li key={music.music_id}>
            <MusicBar music={music} order={i + 1} />
          </li>
        ))}
      </ol>
    </div>
  );
}
