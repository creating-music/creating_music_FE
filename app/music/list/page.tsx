import Frame from "@/app/_components/Frame";
import ContentFrame from "./_components/ContentFrame";
import { Button } from "@mui/base";
import MusicList from "@/app/music/list/_components/MusicList";

export default function Page() {
  const musicMock = [
    {
      id: 0,
      rank: 1,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
    {
      id: 1,
      rank: 2,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
    {
      id: 2,
      rank: 3,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
    {
      id: 3,
      rank: 4,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
    {
      id: 4,
      rank: 5,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
    {
      id: 5,
      rank: 6,
      thumbnail: "",
      title: "Music Name Music Name",
      author: "writer writer",
      genre: "New Age",
      time: "02:55",
    },
  ];

  return (
    <>
      <Frame className="mx-auto flex w-[79rem] flex-col gap-[3rem] px-[2rem] py-[3rem]">
        <ContentFrame
          title="인기차트"
          addon={
            <Button
              slotProps={{
                root: {
                  className: "text-u-gray-200 text-[1.125rem]",
                },
              }}
            >
              더보기
            </Button>
          }
        >
          <MusicList musicList={musicMock} />
        </ContentFrame>
        <ContentFrame
          title="인기차트"
          addon={
            <Button
              slotProps={{
                root: {
                  className: "text-u-gray-200 text-[1.125rem]",
                },
              }}
            >
              더보기
            </Button>
          }
        >
          <MusicList musicList={musicMock} />
        </ContentFrame>
        <ContentFrame
          title="인기차트"
          addon={
            <Button
              slotProps={{
                root: {
                  className: "text-u-gray-200 text-[1.125rem]",
                },
              }}
            >
              더보기
            </Button>
          }
        >
          <MusicList musicList={musicMock} />
        </ContentFrame>
      </Frame>
    </>
  );
}
