"use client";
import { useState } from "react";
import LoginPopup from "./LoginPop";
import { SignUpPopUp } from "./SignUpPop";
import ModalUnstyled from "./LoginPop1";
import MainModalPopup from "./mainModal";
export const UserBT = () => {
  const [getLoginBt, setLoginBt] = useState(false);
  const [getSighUpBt, setSignUpBt] = useState(false);
  // const [getLoginBt,setBt] = useState(false);
  const LoginClick = () => {
    setSignUpBt(false);
    setLoginBt(!getLoginBt);
  };
  const SignUpClick = () => {
    setLoginBt(false);
    setSignUpBt(!getSighUpBt);
  };
  const closeLoginBt = () => {
    setLoginBt(false);
  };
  const closeSignUpBt = () => {
    setSignUpBt(false);
  };
  const openLogin = () => {
    setLoginBt(true);
  };
  return (
    <>
      <div>
        <MainModalPopup></MainModalPopup>
        <button
          onClick={LoginClick}
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          login
        </button>
        {/* <button onClick={SignUpClick}>SignUp</button> */}
        <LoginPopup
          setLogin={setLoginBt}
          getLogin={getLoginBt}
          setSign={setSignUpBt}
          getSign={getSighUpBt}
          onClose={closeLoginBt}
        ></LoginPopup>
        {/* <SignUpPopUp set={setSignUpBt} get={getSighUpBt} setLogin={setLoginBt} getLogin={getLoginBt} onClose={closeSignUpBt} openLogin={openLogin} ></SignUpPopUp> */}
        {/* <button onClick={}></button> */}
        <ModalUnstyled></ModalUnstyled>
      </div>
    </>
  );
};
