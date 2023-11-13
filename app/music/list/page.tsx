import Frame from "@/app/_components/Frame";
import ContentFrame from "./_components/ContentFrame";
import MusicBar from "./_components/MusicBar";
import { Button } from "@mui/base";

export default function Page() {
  const musicMock = {
    id: 0,
    rank: 1,
    thumbnail: "",
    title: "Music Name Music Name",
    author: "writer writer",
    genre: "New Age",
    time: "02:55",
  };

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
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
          </ol>
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
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
          </ol>
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
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
            <li className="">
              <MusicBar music={musicMock} />
            </li>
          </ol>
        </ContentFrame>
      </Frame>
    </>
  );
}
