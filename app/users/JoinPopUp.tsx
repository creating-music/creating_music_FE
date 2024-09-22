"use client";
import { doCodeCheck, doMailCheck, doSignUp } from "./userUtil";
import React, { useState } from "react";
import { resDefult } from "./userUtil";
import GoogleAuthLogin1 from "./GoogleAuthLogin1";
import KakaoAuthLogin from "./KakaoAuthLogin1";

interface Props {
  getJoin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
}

const JoinPopUp: React.FC<Props> = ({
  getJoin,
  chModal,
  closeModal,
}) => {
  const [getUserName, setUserName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getCode, setCode] = useState("");
  const [getPw1, setPw1] = useState("");
  const [getPw2, setPw2] = useState("");
  const [getHidden, setHidden] = useState(false);

  const sign = async () => {
    let ret: resDefult;
    if (getPw1 === getPw2) {
      ret = await doSignUp(getUserName, getEmail, getPw1, getCode);
      if (ret.isSuccess) {
        setUserName("");
        setEmail("");
        setPw1("");
        setPw2("");
        setCode("");
        setHidden(false);
        alert(ret.result);
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        alert("실패: " + ret.result);
      }
    } else {
      alert("비밀번호가 같지 않습니다");
    }
  };

  const mailCheck = async () => {
    if (!getEmail) {
      alert("메일을 입력 해주세요");
    } else {
      let ret: resDefult = await doMailCheck(getEmail);
      if (ret.code === 200) {
        setHidden(true);
        alert(ret.message);
      } else if (ret.code === 400) {
        alert(ret.message);
      }
    }
  };

  const codeCheck = async () => {
    if (!getCode) {
      alert("코드를 입력 해주세요");
    } else {
      let ret = await doCodeCheck(getEmail, getCode);
      if (ret.isSuccess) {
        alert("인증 성공");
        setHidden(false);
      } else {
        alert("인증 실패");
      }
    }
  };

  if (!getJoin) {
    return null;
  } else {
    return (
      <div className="bg-gray flex w-max max-w-sm flex-col gap-[12px] rounded-3xl bg-u-gray-400 px-10 py-8">
        <h5 className="w-full text-center text-xl font-bold">회원가입</h5>
        <div className="flex flex-col gap-[8px] ">
          <label htmlFor="email" className="text-gray-200">
            닉네임
          </label>
          <input
            className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-20 py-1.5 focus:outline-none"
            type="text"
            placeholder="닉네임"
            name="UserName"
            value={getUserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <label htmlFor="email" className="text-gray-200">
              이메일
            </label>
            <button
              className="text-xs text-gray-200 underline"
              onClick={mailCheck}
            >
              인증 코드 요청
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-20 py-1.5 focus:outline-none"
              placeholder="이메일"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {getHidden && (
          <div>
          <div className="flex justify-between">
            {/* <label htmlFor="email" className="text-gray-200">
              
            </label> */}
            <button
              className="text-xs text-gray-200 underline"
              onClick={mailCheck}
            >
            </button>
          </div>
            <div className="flex items-center">
            <input
              type="text"
              className="flex-1 border-0 bg-u-gray-500 rounded-l-full pl-4 pr-4 py-1.5 focus:outline-none"
              placeholder="인증 코드"
              value={getCode}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              // className="border-0 bg-blue-500 rounded-r-full px-4 py-1.5 text-white focus:outline-none"
              className="border-0 bg-u-gray-300 rounded-r-full px-3 py-1.5 font-bold text-white focus:outline-none"
              onClick={codeCheck}
            >
              전송
            </button>
          </div>
          </div>
        )}
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="password1" className="text-gray-200">
            비밀번호
          </label>
          <input
            className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-20 py-1.5 focus:outline-none "
            type="password"
            placeholder="비밀번호"
            name="password1"
            value={getPw1}
            onChange={(e) => setPw1(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          {/* <label htmlFor="password2" className="text-gray-200">
            비밀번호 확인
          </label> */}
          <input
            className="w-full border-0 bg-u-gray-500 rounded-full pl-4 pr-20 py-1.5 focus:outline-none "
            type="password"
            placeholder="비밀번호 확인"
            name="password2"
            value={getPw2}
            onChange={(e) => setPw2(e.target.value)}
          />
        </div>
        <div className="mt-3 flex items-center justify-center">
          <button
            className="mx-4 rounded-full border bg-white px-12 py-1 font-bold text-black"
            onClick={sign}
          >
            회원가입
          </button>
        </div>
        <div className="flex justify-center gap-[12px]">
          <button
            className="text-xs text-gray-200 underline"
            onClick={() => chModal(1)}
          >
            로그인
          </button>
          <button
            className="text-xs text-gray-200 underline"
            onClick={() => chModal(3)}
          >
            비밀번호 찾기
          </button>
          
        </div>
        <hr className="h-0 w-full border-[2px] border-[#5A5A5A] mb-4" />
          <div className="flex items-center justify-center gap-[60px]">
            <GoogleAuthLogin1></GoogleAuthLogin1>
            <KakaoAuthLogin></KakaoAuthLogin>
          </div>
      </div>
    );
  }
};

export default JoinPopUp;
