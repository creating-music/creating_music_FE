import Frame from "@/app/music/list/_components/Frame";
import Banner from "@/app/music/list/_components/Banner";

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
    </>
  );
}
