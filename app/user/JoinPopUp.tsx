"use client";
import test from "node:test";
import { doSignUp } from "./userUtil";
import React, { useState } from "react";

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
  const [getPw1, setPw1] = useState("");
  const [getPw2, setPw2] = useState("");
  const sign = async () => {
    interface signret {
      msg: string;
      state: boolean;
    }
    let ret: signret;
    if (getPw1 == getPw2) {
      ret = await doSignUp(getUserName, getEmail, getPw1);
      if (ret.state == true) {
        msgModal(ret.msg);
        msgModal("");
        setUserName("");
        setEmail("");
        setPw1("");
        setPw2("");
        chModal(1);
        setTimeout(() => {
          alert("회원 가입 성공");
        }, 1000);
      } else {
        alert("실패" + ret.msg);
        // msgModal(ret.msg);
        // 10 초 정도 보여주고 msg 만 닫기
        // setTimeout(()=>{msgModal('');},20000);
      }
    } else {
      // msgModal('비밀번호가 같지 않습니다');
      alert("비밀 번호가 같지 않습니다");
      // setTimeout(()=>{msgModal('');},20000);
    }
  };

  if (getJoin == false) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-gray max-w-sm rounded-md bg-u-gray-400 p-8 ">
          <h5 className="flex justify-center text-xl font-bold">회원가입</h5>
          <br></br>
          <p className="flex items-center">
            <span className="flex-grow text-gray-200">닉네임</span>
            <span className="text-right text-gray-200 ">
              {/* 좌우 로 가르는데 나중에 비번 같은지 표시하는것도 이걸로 만들어보자*/}
              <button
                className=" text-xs   text-gray-200 underline "
                onClick={(e) => {}}
              >
                중복 확인
              </button>
            </span>
          </p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="text"
            placeholder="사용할 닉네임"
            name="UserName"
            value={getUserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <p className="text-gray-200">이메일</p>
          <input
            className="rounded-full border bg-u-gray-500 p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={getEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <p className="text-gray-200">비밀번호</p>

          <p>
            <input
              className="rounded-full border bg-u-gray-500 p-2"
              type="password"
              placeholder="New Password"
              name="password1"
              value={getPw1}
              onChange={(e) => {
                setPw1(e.target.value);
              }}
            />
          </p>
          <p>
            <input
              className="rounded-full border bg-u-gray-500 p-2"
              type="password"
              placeholder="New Password"
              name="password2"
              value={getPw2}
              onChange={(e) => {
                setPw2(e.target.value);
              }}
            />
          </p>
          <br></br>
          <div className="flex justify-center ">
            <button
              // className="rounded-full bg-white text-black px-4 py-2 center"
              // className="mx-auto rounded-full bg-white text-black px-6 py-3"
              className="mx-4 rounded-full border bg-white px-16 font-bold text-black"
              onClick={(e) => {
                sign();
              }}
            >
              회원가입
            </button>
          </div>
          {/* <p> */}
          <div className="flex justify-center ">
            {/* <br/> */}
            <button
              className=" text-xs   text-gray-200 underline"
              onClick={(e) => {
                chModal(1);
              }}
            >
              로그인하기{" "}
            </button>
            {/* 여기 */}
            {"\u00A0"}
            {"\u00A0"}
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
          {/* </p> */}
        </div>
        <div></div>
      </div>
    );
  }
};
export default JoinPopUp;
