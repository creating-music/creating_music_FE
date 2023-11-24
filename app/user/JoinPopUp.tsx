"use client";
import test from "node:test";
import {} from "./userUtil";
import React, { useState } from "react";

interface Props {
  getJoin:boolean;
  chModal:(value:number)=>void;
  closeModal:()=>void;
}

const JoinPopUp:React.FC<Props>= ({getJoin,chModal,closeModal}) => {
  const [getUserName,setUserName]=useState('');
  const [getEmail,setEmail]=useState('');
  const [getPw1,setPw1]=useState('');
  const [getPw2,setPw2]=useState('');
  
  if(getJoin==false){
    return null;
  }
  else{
    return  (
      <div>
        {/* 모달 div */}
        <div className="bg-u-gray-400 max-w-sm rounded-md bg-gray p-8 ">
          <h5 className="font-bold flex justify-center text-xl">회원가입</h5>
          <br></br>
          <p  className="flex items-center">
              <span className="text-gray-200 flex-grow">사용할 닉네임</span>
              <span className="text-right text-gray-200 "> 
              {/* 좌우 로 가르는데 나중에 비번 같은지 표시하는것도 이걸로 만들어보자*/}
                  <button
                className=" text-gray-200   text-xs underline "
                onClick={(e) => {
                }}
                >중복 확인</button>
              </span>
          </p>
              <input
                className="border bg-u-gray-500 rounded-full p-2"
                type="text"
                placeholder="닉네임"
                name="UserName"
                value={getEmail}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br/><br/>
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

              <p>
              <input
                className="border bg-u-gray-500 rounded-full p-2"
                type="password"
                placeholder="New Password"
                name="password1"
                value={getPw1}
                onChange={(e) => {
                  setPw1(e.target.value)
                }}
              />
              </p>
              <p>
              <input
                className="border bg-u-gray-500 rounded-full p-2"
                type="password"
                placeholder="New Password"
                name="password2"
                value={getPw2}
                onChange={(e) => {
                  setPw2(e.target.value)
                }}
              />
              </p>
              <br></br>
              <div className="flex justify-center ">
              <button
                // className="rounded-full bg-white text-black px-4 py-2 center"
                // className="mx-auto rounded-full bg-white text-black px-6 py-3"
                className="rounded-full bg-white text-black px-16 mx-4 border font-bold"
                onClick={(e) => {
                  
                }}
              >회원가입</button>
              </div> 
              {/* <p> */}
              <div className="flex justify-center ">
              {/* <br/> */}
                <button
                className=" text-gray-200   text-xs underline"
                onClick={(e) => {
                  chModal(1);
                }}
                >로그인하기  </button>
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
};
export default JoinPopUp;

