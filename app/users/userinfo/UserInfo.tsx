import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import userInfoData from "./user-info.json";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserInfo {
  username: string;
  profile: string;
  email: string;
}

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const getUserInfo = async () => {
    try {
      // const response = axios.get(`${processnv.NEXT_PUBLIC_DOMAIN}/api/users`);
      setUserInfo(userInfoData.result); // * 일단 데이터 불러오는거 임의 파일에서 가져옴
    } catch (error: any) {
      // TODO: 에러처리
      console.log("에러발생", error);
    }
  };

  // 유저정보 불러오기
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="m-auto h-full w-1/2">
      <section className="flex w-full gap-10">
        <Image
          src={userInfo?.profile ?? ""}
          alt="profile-image"
          width={100}
          height={100}
          className="h-36 w-36"
        />
        <aside className="flex w-full flex-col gap-10">
          <div>
            <h4 className="text-2xl font-semibold">{userInfo?.username} </h4>
            <span>{userInfo?.email}</span>
          </div>
          <div className="flex w-full gap-3">
            <div className="flex gap-[0.5rem]">
              <span>무료 플랜</span>
              <AiOutlineInfoCircle className="mt-1" />
            </div>
            <div className="w-72 rounded-3xl bg-gray-500 px-6	py-5 text-sm">
              {userInfo?.username}님은 현재 무료 플랜 유저입니다. 추후
              업데이트를 통해 유료 플랜이 추가될 수 있습니다.
            </div>
          </div>
        </aside>
      </section>
      <h1 className="my-10 text-xl font-semibold">계정 정보</h1>
      <form className="gap-30 flex justify-end">
        <aside className="flex flex-col gap-2 ">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            placeholder={userInfo?.username}
            readOnly
            className="h-8 w-80 rounded-full	bg-zinc-600 placeholder:text-gray-400	"
          />
          <label htmlFor="email">연결된 계정</label>
          <input
            id="email"
            type="email"
            placeholder={userInfo?.email}
            readOnly
            className="h-8 w-80 rounded-full	bg-zinc-600 placeholder:text-gray-400	"
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="text"
            placeholder="********"
            readOnly
            className="h-8 w-80 rounded-full	bg-zinc-600 placeholder:text-gray-400	"
          />
        </aside>
      </form>
    </div>
  );
}
