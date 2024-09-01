"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "react-intersection-observer";
import axiosInstance from "@/app/_api/axiosinterceptors";
import ContentFrame from "@/app/_components/layout/ContentFrame";
import MusicList from "@/app/_components/music/MusicList";

export default function Page() {
  const { data, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery({
    queryKey: ["library"],
    queryFn: () => axiosInstance.get("/library/musics"),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.result.totalPage > lastPage.result.lastPage
        ? lastPage.result.lastPage + 1
        : undefined;
    },
  });

  const handleInfiniteScroll = (inView: boolean) => {
    if (!inView) return;

    fetchNextPage();
  };

  const musicList = data?.pages.flatMap((page) => page.result.musics) ?? [];

  return (
    <>
      <ContentFrame title="내가 만든 음악">
        <MusicList musicList={musicList} />
        {isSuccess && hasNextPage ? (
          <InView onChange={(inView) => handleInfiniteScroll(inView)} />
        ) : null}
      </ContentFrame>
    </>
  );
}
