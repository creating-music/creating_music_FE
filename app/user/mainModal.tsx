"use client";
import React, { useState } from "react";
import { doLogin, doFindPass } from "./userUtil";
import { SignUpPopUp } from "./SignUpPop";
import LoginPopUp from "./LoginPopUp";
import JoinPopUp from "./JoinPopUp";
import FindIdPwPopUp from "./FindIdPwPopUp";
interface Props {
  getModal:boolean;
  setModal:(value:boolean)=>void
}

const MainModalPopup: React.FC<Props> = ({getModal,setModal}) => {
  // const [getState, setState] = useState(true);
  const [getLogin,setLogin] = useState(true);
  const [getJoin,setJoin]=useState(false);
  const [getFind,setFind]=useState(false)
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
            <LoginPopUp getLogin={getLogin} chModal={chModal} closeModal={closeModal}></LoginPopUp>
            <JoinPopUp getJoin={getJoin} chModal={chModal} closeModal={closeModal}></JoinPopUp>
            <FindIdPwPopUp getFind={getFind} chModal={chModal}clocseModal={closeModal}></FindIdPwPopUp>
          </div>
        </div>
      </div>
    );
  }
};
export default MainModalPopup;
