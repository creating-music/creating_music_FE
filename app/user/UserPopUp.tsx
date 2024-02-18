"use client";
import { doLogin } from "./userUtil";
import React, { useState } from "react";

interface Props {
  getLogin:boolean;
  chModal:(value:number)=>void;
  closeModal:()=>void;
  msgModal:(INmsg:string)=>void;
}

const UserPopUp:React.FC<Props>= ({getLogin,chModal,closeModal,msgModal}) => {
  const [getEmail,setEmail]=useState('');
  const [getPw,setPw]=useState('');

  const login=async ()=>{
    interface loginret{msg:string;state:boolean}
    let ret:loginret=await doLogin(getEmail,getPw);
    if(ret.state==true){
      // msgModal(ret.msg);
      // 2 초 정도 알림 보여주고 로그인 msg 닫기
      // setTimeout(()=>{closeModal();msgModal('');},2000);
      alert("로그인 성공")
      setTimeout(()=>{closeModal();},2000);
    }else{
      // setEmail('');
      // setPw('');
      alert("로그인 실패");
      // 10 초 정도 보여주고 msg 만 닫기 
      // msgModal('fail');
      // setTimeout(()=>{msgModal('');},10000);
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
          
        </div>
        <div>
        </div>
      </div>
    );
  };
}
export default UserPopUp;

