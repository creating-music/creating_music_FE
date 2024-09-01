"use client";
import GoogleAuthLogin1 from "./GoogleAuthLogin1";
import KakaoAuthLogin from "./KakaoAuthLogin1";
import { doLogin, resLogin } from "./userUtil";
import React, { useState } from "react";

interface Props {
  getLogin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
  msgModal: (INmsg: string) => void;
  chLogin: () => void;
  chLogout: () => void;
  // setLoginStatus: (status: boolean) => void;
}

const LoginPopUp: React.FC<Props> = ({
  getLogin,
  chModal,
  closeModal,
  chLogin,
  chLogout,
  // setLoginStatus,
}) => {
  const [getEmail, setEmail] = useState("");
  const [getPw, setPw] = useState("");
  const enterevent = async (event: any) => {
    console.log("enter");
    if (event.key === "Enter") {
      console.log("enter");
      login();
    }
  };
  const login = async () => {
    let ret: resLogin = await doLogin(getEmail, getPw);
    if (ret.isSuccess == true) {
      // msgModal(ret.msg);
      // 2 초 정도 알림 보여주고 로그인 msg 닫기
      // setTimeout(()=>{closeModal();msgModal('');},2000);
      alert("로그인에 성공했습니다");
      // 로그인 성공시 로그인버튼 -> 로그 아웃 버튼
      // setLoginStatus(true);
      console.log("1입니다");
      chLogin();
      console.log("2입니다");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      // setEmail('');
      // setPw('');
      alert("로그인 실패");
      // 10 초 정도 보여주고 msg 만 닫기
      // msgModal('fail');
      // setTimeout(()=>{msgModal('');},10000);
    }
  };
  if (getLogin == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray flex w-max max-w-sm flex-col gap-[12px]  rounded-3xl bg-u-gray-400 px-12 py-8">
          <h5 className="w-full text-center text-xl font-bold">로그인</h5>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="email" className="text-gray-200">
              이메일
            </label>
            <input
              id="email"
              className="rounded-full border-0 pr-15 py-1.5 bg-u-gray-500 pl-4 focus:outline-none"
              type="email"
              placeholder="Email"
              name="email"
              value={getEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onKeyDown={enterevent}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="password" className="text-gray-200">
              비밀번호
            </label>
            <input
              id="password"
              // w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
              // w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-20 py-1.5 focus:outline-none
              className="rounded-full border-0 pr-15 py-1.5 bg-u-gray-500 pl-4 focus:outline-none"
              type="password"
              placeholder="Password"
              name="password"
              value={getPw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              onKeyDown={enterevent}
            />
          </div>

          <div className="mt-3 flex items-center justify-center">
            <button
              // className="rounded-full bg-white text-black px-4 py-2 center"
              // className="mx-auto rounded-full bg-white text-black px-6 py-3"
              className="mx-4 rounded-full border bg-white px-12 py-1 font-bold text-black"
              onClick={(e) => {
                login();
              }}
            >
              로그인
            </button>
          </div>
          <div className="flex justify-center gap-[12px]">
            <button
              className=" text-xs text-gray-200 underline "
              onClick={(e) => {
                chModal(2);
              }}
            >
              회원가입{" "}
            </button>
            <button
              className=" text-xs text-gray-200 underline"
              onClick={(e) => {
                chModal(3);
              }}
            >
              {" "}
              아이디/비밀번호 찾기
            </button>
          </div>
          <hr className="h-0 w-full border-[2px] border-[#5A5A5A] mb-4" />
          <div className="flex items-center justify-center gap-[60px]">
            <GoogleAuthLogin1></GoogleAuthLogin1>
            <KakaoAuthLogin></KakaoAuthLogin>
          </div>
        </div>
      </div>
    );
  }
};
export default LoginPopUp;
