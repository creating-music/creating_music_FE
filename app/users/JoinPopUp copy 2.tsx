"use client";
import { doCodeCheck, doMailCheck, doSignUp } from "./userUtil";
import React, { useState } from "react";
import { resMailCheck, resSignUp } from "./userUtil";

interface Props {
  getJoin: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;
  msgModal: (msg: string) => void;
}

const JoinPopUp: React.FC<Props> = ({
  getJoin,
  chModal,
  closeModal,
  msgModal,
}) => {
  const [getUserName, setUserName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getCode, setCode] = useState("");
  const [getPw1, setPw1] = useState("");
  const [getPw2, setPw2] = useState("");
  const [getHidden, setHidden] = useState(true);

  const sign = async () => {
    let ret: resSignUp;
    if (getPw1 === getPw2) {
      ret = await doSignUp(getUserName, getEmail, getPw1, getCode);
      if (ret.isSuccess) {
        setUserName("");
        setEmail("");
        setPw1("");
        setPw2("");
        setCode("");
        setHidden(false);
        chModal(1);
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
      let ret: resMailCheck = await doMailCheck(getEmail);
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
      <div className="bg-gray flex w-max max-w-sm flex-col gap-[12px] rounded-2xl bg-u-gray-400 p-8">
        <h5 className="w-full text-center text-xl font-bold">회원가입</h5>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="email" className="text-gray-200">
            닉네임
          </label>
          <input
            className="w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="이메일"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <button
              className="absolute right-0 top-0 mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={mailCheck}
            >
              Send
            </button> */}
          </div>
        </div>
        {getHidden && (<div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            {/* <label htmlFor="email" className="text-gray-200">
              
            </label> */}
            <button
              className="text-xs text-gray-200 underline"
              onClick={mailCheck}
            >
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="인증 코드"
              value={getEmail}
              onChange={(e) =>  setCode(e.target.value)}
            />
            <button
              className="rounded-tl-lg rounded-bl-lg absolute right-0 top-0 mt-0 mr-0 px-4 py-2 bg-blue-500  rounded-full bg-white text-black focus:outline-none focus:ring-2 "
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
            className="w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full border bg-u-gray-500 border-gray-300 rounded-full pl-4 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="비밀번호 확인"
            name="password2"
            value={getPw2}
            onChange={(e) => setPw2(e.target.value)}
          />
        </div>
        <div className="mt-3 flex items-center justify-center">
          <button
            className="mx-4 rounded-full border bg-white px-16 py-2 font-bold text-black"
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
            로그인 하기
          </button>
          <button
            className="text-xs text-gray-200 underline"
            onClick={() => chModal(3)}
          >
            아이디/비밀번호 찾기
          </button>
        </div>
      </div>
    );
  }
};

export default JoinPopUp;
