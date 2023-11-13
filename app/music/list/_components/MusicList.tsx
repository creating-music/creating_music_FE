import MusicBar from "@/app/music/list/_components/MusicBar";
import { Music } from "../types";

interface Props {
  musicList: Music[];
}

export default function MusicList({ musicList }: Props) {
  return (
    <div>
      <div className="flex items-center border-y-2 border-u-gray-300 px-[1.5rem] text-u-gray-300">
        <span className="w-[5rem] text-center">순위</span>
        <span className="w-[5rem] text-center" />
        <span className="w-[15rem] text-center">곡 정보</span>
        <span className="w-[5rem] text-center">장르</span>
        <span className="w-[5rem] text-center">듣기</span>
        <span className="w-[5rem] text-center" />
        <span className="w-[17.5rem] text-center" />
        <span className="w-[13rem] text-center">그 외</span>
      </div>
      <ol className="overflow-scroll-gradient flex h-[37.5rem] flex-col overflow-y-scroll overscroll-auto scroll-smooth scrollbar-hide">
        {musicList.map((music) => (
          <li key={music.id}>
            <MusicBar music={music} />
          </li>
        ))}
      </ol>
    </div>
  );
}
