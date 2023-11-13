import Image from "next/image";

interface Props {
  music: {
    id: number;
    rank: number;
    thumbnail: string;
    title: string;
    author: string;
    genre: string;
    time: string;
  };
}

export default function MusicBar({ music }: Props) {
  return (
    <div className="bg-ugray-500 flex h-[7.5rem] w-[75rem] px-[1.5rem] py-[1.25rem]">
      <div className="flex h-[5rem] w-[5rem] items-center justify-center text-[1.125rem]">
        {music.rank}
      </div>
      <div className="flex h-[5rem] w-[5rem] items-center justify-center">
        {music.thumbnail ? (
          <Image alt="" src={music.thumbnail} fill />
        ) : (
          <span>music</span>
        )}
      </div>
      <div className="flex h-[5rem] w-[15rem] flex-col justify-center px-[2rem] text-center">
        <h3 className="line-clamp-1 w-full overflow-ellipsis">{music.title}</h3>
        <small className="line-clamp-1 overflow-ellipsis text-u-gray-300">
          {music.author}
        </small>
      </div>
      <div className="line-clamp-1 flex h-[5rem] w-[5rem] items-center justify-center overflow-ellipsis text-u-gray-200">
        {music.genre}
      </div>
      <div className="flex h-[5rem] w-[5rem] items-center justify-center">
        play
      </div>
      <div className="flex h-[5rem] w-[5rem] items-center justify-center text-u-gray-200">
        {music.time}
      </div>
      <div className="flex h-[5rem] w-[17.5rem] items-center justify-center text-u-gray-200">
        progress bar
      </div>
      <div className="flex h-[5rem] w-[13rem] items-center justify-center gap-[2rem] text-u-gray-200">
        <span className="h-[1.5rem] w-[1.5rem]">1</span>
        <span className="h-[1.5rem] w-[1.5rem]">2</span>
        <span className="h-[1.5rem] w-[1.5rem]">3</span>
        <span className="h-[1.5rem] w-[1.5rem]">4</span>
      </div>
    </div>
  );
}
