import Frame from "@/app/_components/Frame";
import Banner from "@/app/music/list/_components/Banner";
import ContentFrame from "./_components/ContentFrame";

export default function Page() {
  const banners = [
    {
      imgSrc:
        "https://creating-music.s3.ap-northeast-2.amazonaws.com/statics/banner-unsplash.jpg",
      link: "",
    },
  ];

  return (
    <>
      <Frame className="h-max w-full">
        <Banner banners={banners} />
      </Frame>
      <Frame className="mx-auto flex w-full max-w-[87.5rem]">
        <ContentFrame title="New AI Music">
          <div className="border-y-2 border-[#5a5a5a]"></div>
          <ol className="flex flex-col">
            <li className="rounded-[15px] border-[3px] px-6 py-4"></li>
          </ol>
        </ContentFrame>
      </Frame>
    </>
  );
}
