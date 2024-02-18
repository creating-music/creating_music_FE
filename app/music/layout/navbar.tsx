import Image from "next/image";
import Search from "./_components/search";
import Href from "./_components/href";
import Login from "./_components/login";

export default function Navbar() {
   return (
    <nav>
      <div className="flex w-[75rem] h-[3rem] items-center justify-between gap-[1rem] bg-u-gray-400 mx-auto" >
        <div className="flex items-center">
          <Image
            alt={`로고`}
            src={
              "https://creating-music.s3.ap-northeast-2.amazonaws.com/statics/showpang_logo.png"
            }
            width={200}
            height={56}
          />
          <Search />
          <Href/>
        </div>
        <Login/>         
      </div>
    </nav>
  );
}
