"use client";
import React, { useState } from "react";
import LoginPopUp from "./LoginPopUp";
import JoinPopUp from "./JoinPopUp";
import FindIdPwPopUp from "./FindIdPwPopUp";

interface Props {
  getModal:boolean;
  setModal:(value:boolean)=>void
  setLoginStatus:(status:boolean)=>void;
}

const MainModalPopup: React.FC<Props> = ({getModal,setModal,setLoginStatus}) => {
  // const [getState, setState] = useState(true);
  const [getLogin,setLogin] = useState(true);
  const [getJoin,setJoin]=useState(false);
  const [getFind,setFind]=useState(false);
  // const [getMsg,setMsg]=useState(false);
  const [getmsgstr,setmsgstr]=useState('');
  //   1 Login 2 Join 3 Find
  const chModal=(InputNum:number)=>{
    if(InputNum==1){
      setLogin(true);
      setJoin(false);
      setFind(false);
    }else if(InputNum==2){
      setJoin(true);
      setLogin(false);
      setFind(false);
    }else if(InputNum==3){
      setFind(true);
      setLogin(false);
      setJoin(false);
    }
  }
  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const closeModal=()=>{
    setModal(false);
    setLogin(true);
    setJoin(false);
    setFind(false);
  }
  const msgModal=(INmsg:string)=>{
    setmsgstr(INmsg);
  }
  if (getModal == false) {
    return null;  
  } else if(getModal==true){
    return (
      <div>
        {/* 모달 밖 div */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={notModal}
        >
          <div>
            {/* <MsgPopUp getmsgstr={getmsgstr} msgModal={msgModal}></MsgPopUp> */}
            <LoginPopUp getLogin={getLogin} chModal={chModal} closeModal={closeModal} msgModal={msgModal} setLoginStatus={setLoginStatus}></LoginPopUp>
            <JoinPopUp getJoin={getJoin} chModal={chModal} closeModal={closeModal} msgModal={msgModal}></JoinPopUp>
            <FindIdPwPopUp getFind={getFind} chModal={chModal}clocseModal={closeModal}></FindIdPwPopUp>
          </div>
        </div>
      </div>
    );
  }
};
export default MainModalPopup;
