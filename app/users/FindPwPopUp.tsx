"use client";
import { doSendEmail } from "./userUtil";
import React, { useState } from "react";
import { resDefult } from "./userUtil";
import GoogleAuthLogin1 from "./GoogleAuthLogin1";
import KakaoAuthLogin from "./KakaoAuthLogin1";

interface Props {
  getFind: boolean;
  chModal: (value: number) => void;
  closeModal: () => void;

}

const FindPwPopUp: React.FC<Props> = ({
  getFind,
  chModal,
  closeModal,
}) => {
  
  const [getEmail, setEmail] = useState("");

  const sendEmail=async ()=>{

    let ret:resDefult=await doSendEmail(getEmail);
    if(ret.isSuccess==true){
      alert("요청 성공");
      // alert(ret.result);
        setTimeout(() => {
          closeModal();
        }, 2000);

    }
  }

  if (!getFind) {
    return null;
  } else {
    return (
      <div className="bg-gray flex w-max max-w-sm flex-col gap-[12px] rounded-3xl bg-u-gray-400 px-10 py-8">
        <h5 className="w-full text-center text-xl font-bold">비밀번호 변경</h5>
       
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <label htmlFor="email" className="text-gray-200">
              이메일
            </label>
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
        
        <div className="mt-3 flex items-center justify-center">
          <button
            className="mx-4 rounded-full border bg-white px-12 py-1 font-bold text-black"
            onClick={sendEmail}
          >
            이메일 전송
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
            onClick={() => chModal(2)}
          >
            회원가입
          </button>
          
        </div>
        
          
      </div>
    );
  }
};

export default FindPwPopUp;
