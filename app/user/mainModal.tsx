"use client";
import React, { useState } from "react";
import { doLogin, doFindPass } from "./userUtil";
import { SignUpPopUp } from "./SignUpPop";
import LoginPopUp from "./LoginPopUp";
interface Props {
  //   getSign: boolean;
  //   setSign: (value: boolean) => void;
  //   getLogin: boolean;
  //   setLogin: (value: boolean) => void;
  //   onClose: () => void;
}

const MainModalPopup: React.FC<Props> = ({}) => {
  const [getState, setState] = useState(true);
  const [getLogin, setLogin] = useState(false);

  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setState(false);
    }
  };
  //   1 login 2 sing up 3
  if (getState == false) {
    return null;
  } else if (getState == true) {
    return (
      <div>
        {/* 모달 밖 div */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={notModal}
        >
          <div>
            <LoginPopUp></LoginPopUp>
          </div>
        </div>
      </div>
    );
  }
};
export default MainModalPopup;
