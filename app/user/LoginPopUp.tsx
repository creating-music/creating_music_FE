"use client";
import { doLogin } from "./userUtil";
import React, { useState } from "react";

interface Props {
  //   getSign: boolean;
  getLogin:boolean;
  // chLogin:(value:boolean)=>void;
  // chJoin:(value:boolean)=>void;
  chModal:(value:number)=>void;
  closeModal:()=>void;
  //   setSign: (value: boolean) => void;
}

const LoginPopUp:React.FC<Props>= ({getLogin,chModal,closeModal}) => {
  const [getEmail,setEmail]=useState('');
  const [getPw,setPw]=useState('');
  
  const login=async ()=>{
    let ret=await doLogin(getEmail,getPw);
    if(ret==true){
      closeModal();
    }else{
      setEmail('');
      setPw('');
    }
  }

  if(getLogin==false){
    return null;
  }else{
    return (
      <div>
        {/* 모달 div */}
        <div className="bg-u-gray-400 max-w-sm rounded-md bg-gray p-8 ">
          <h5 className="font-bold flex justify-center text-xl">로그인</h5>
          <br></br>
          <p className="text-gray-200" >이메일</p>
              <input
                className="border bg-u-gray-500 rounded-full p-2"
                type="email"
                placeholder="email"
                name="email"
                value={getEmail}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <p className="text-gray-200">비밀번호</p>
              <input
                className="border bg-u-gray-500 rounded-full p-2"
                type="password"
                placeholder="passwd"
                name="password"
                value={getPw}
                onChange={(e) => {
                  setPw(e.target.value)
                }}
              />
              <br/><br/>
              <div className="flex justify-center ">
              <button
                // className="rounded-full bg-white text-black px-4 py-2 center"
                // className="mx-auto rounded-full bg-white text-black px-6 py-3"
                className="rounded-full bg-white text-black px-16 mx-4 border font-bold"
                onClick={(e) => {
                  login()
                }}
              >로그인</button>
              </div> 
              {/* <p> */}
              <div className="flex justify-center ">
              {/* <br/> */}
                <button
                className=" text-gray-200   text-xs underline"
                onClick={(e) => {
                  chModal(2);
                }}
                >회원가입  </button>
                {/* 여기 */}
                {'\u00A0'}
                {'\u00A0'}
                <button
                className=" text-gray-200 text-xs underline"
                onClick={(e) => {
                  chModal(3)
                }}
                >  아이디/비밀번호 찾기</button>
                </div>
                {/* </p> */}
        </div>
        <div>
        </div>
      </div>
    );
  };
}
export default LoginPopUp;

