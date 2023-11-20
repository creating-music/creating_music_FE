import Image from "next/image";
import { Music } from "@/app/music/list/types";
import Icon from "@/app/_components/Icon";
import { Button } from "@mui/base";

interface Props {
  music: Music;
}

export default function MusicBar({ music }: Props) {
  return (
    <div className="bg-ugray-500 flex h-[7.5rem] w-[75rem] px-[1.5rem] py-[1.25rem]">
      <div className="flex h-[5rem] w-[5rem] items-center justify-center text-[1.125rem]">
        {music.rank}
      </div>
      <div className="h-[5rem] w-[5rem] overflow-hidden rounded-[0.25rem]">
        {music.thumbnail ? (
          <Image alt="" src={music.thumbnail} fill />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-u-gray-300">
            <Icon name="music" />
          </div>
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
        <Icon name="play" />
      </div>
      <div className="flex h-[5rem] w-[5rem] items-center justify-center text-u-gray-200">
        {music.time}
      </div>
      <div className="flex h-[5rem] w-[17.5rem] items-center justify-center text-u-gray-200">
        <Icon name="equalizer2" />
      </div>
      <div className="flex h-[5rem] w-[13rem] items-center justify-center gap-[2rem] text-u-gray-200">
        <Button>
          <Icon name="heart" />
        </Button>
        <Button>
          <Icon name="download" />
        </Button>
        <Button>
          <Icon name="share" />
        </Button>
        <Button>
          <Icon name="airplay" />
        </Button>
      </div>
    </div>
  );
}
