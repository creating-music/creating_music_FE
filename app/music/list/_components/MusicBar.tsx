"use client";

import Image from "next/image";
import type { Music } from "@/app/music/list/types";
import Icon from "@/app/_components/Icon";
import { Button } from "@mui/base";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
interface Props {
  music: Music;
}

export default function MusicBar({ music }: Props) {
  const musicRef = useRef<HTMLMediaElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const musicSrc =
    "https://pl.streamingvideoprovider.com/mp3-playlist/playlist.m3u8";

  useEffect(() => {
    if (!Hls.isSupported() || !musicRef.current) return;
    hlsRef.current = new Hls({
      autoStartLoad: false,
    });
    hlsRef.current.loadSource(musicSrc);
    hlsRef.current.attachMedia(musicRef.current);
  }, [musicSrc]);

  const handleClickPlay = () => {
    if (!musicRef.current || !hlsRef.current) return;
    hlsRef.current.startLoad();
    if (musicRef.current.paused) musicRef.current.play();
    else musicRef.current.pause();
  };

  return (
    <div className="bg-ugray-500 flex h-[7.5rem] w-[75rem] px-[1.5rem] py-[1.25rem]">
      <audio ref={musicRef} />
      <div className="flex h-[5rem] w-[5rem] items-center justify-center text-[1.125rem]">
        {music.rank}
      </div>
      <Button className="h-[5rem] w-[5rem] overflow-hidden rounded-[0.25rem]">
        {music.thumbnail ? (
          <Image alt="" src={music.thumbnail} fill />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-u-gray-300">
            <Icon name="music" />
          </div>
        )}
      </Button>
      <div className="flex h-[5rem] w-[15rem] flex-col justify-center px-[2rem] text-center">
        <Link href="">
          <h3 className="line-clamp-1 w-full overflow-ellipsis">
            {music.title}
          </h3>
        </Link>
        <Link href="">
          <small className="line-clamp-1 overflow-ellipsis text-u-gray-300">
            {music.author}
          </small>
        </Link>
      </div>
      <div className="line-clamp-1 flex h-[5rem] w-[5rem] items-center justify-center overflow-ellipsis text-u-gray-200">
        <Link href="">{music.genre}</Link>
      </div>
      <div className="flex h-[5rem] w-[5rem] items-center justify-center">
        <Button onClick={handleClickPlay}>
          <Icon name="play" />
        </Button>
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
