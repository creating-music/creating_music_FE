"use client";

import axiosInstance from "@/app/_api/axiosinterceptors";
import ContentFrame from "@/app/_components/layout/ContentFrame";
import MusicList from "@/app/_components/music/MusicList";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["library"],
    queryFn: () => axiosInstance.get("/library/musics"),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage?.result.totalPage > lastPage?.result.lastPage
        ? lastPage?.result.lastPage + 1
        : undefined,
  });

  const musicList = data?.pages.flatMap((page) => page.result.musics) ?? [];

  return (
    <>
      <ContentFrame title="최근 나온 음악">
        <MusicList musicList={musicList} />
      </ContentFrame>
    </>
  );
}
