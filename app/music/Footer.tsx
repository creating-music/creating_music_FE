import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex h-[10rem] items-center justify-between bg-u-gray-400 px-[16.25rem]">
        <div className="flex flex-col  justify-center">
          {/* <p className="text-[1.25rem] text-u-gray-300">
            문의 : ㅇㅇㅇㅇ@gmail.com
          </p> */}
          <p className="text-[1.25rem] text-u-gray-300">
            COPYRIGHT © 2024 CreateMusic. All rights reserved.
          </p>
          <p className="text-[1.25rem] text-u-gray-300">
            Developed by 김민석 김은경 박지선 유성민 이예진 Designed by 정예나
          </p>
        </div>
        <Image
          alt={`흑백 로고`}
          src={
            "https://creating-music.s3.ap-northeast-2.amazonaws.com/statics/showpang_logo_grayscale.png"
          }
          width={200}
          height={56}
        />
      </div>
    </footer>
  );
}
