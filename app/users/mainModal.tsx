"use client";
import React, { useState } from "react";
import LoginPopUp from "./LoginPopUp";
import JoinPopUp from "./JoinPopUp";
import FindPwPopUp from "./FindPwPopUp";
import { chmod } from "fs";

interface Props {
  getModal: boolean;
  setModal: (value: boolean) => void;
  chLogin: () => void;
  chLogout: () => void;
}
const MainModalPopup: React.FC<Props> = ({
  getModal,
  setModal,
  chLogin,
  chLogout,
}) => {
  const [getLogin, setLogin] = useState(true);
  const [getJoin, setJoin] = useState(false);
  const [getFind, setFind] = useState(false);
  const chModal = (InputNum: number) => {
    if (InputNum == 1) {
      setLogin(true);
      setJoin(false);
      setFind(false);
      // setSelectJoin(false);
    } else if (InputNum == 2) {
      setJoin(true);
      setLogin(false);
      setFind(false);
      // setSelectJoin(false);
    } else if (InputNum == 3) {
      setFind(true);
      setLogin(false);
      setJoin(false);
    }
  };
  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const closeModal = (inNum: number | null = 1) => {
    // `inNum`이 `null`일 경우 기본값을 설정
    const num = inNum !== null ? inNum : 1;
    chModal(num);
    setModal(false);
    setLogin(true);
    setJoin(false);
    setFind(false);
  };

  if (getModal == false) {
    return null;
  } else if (getModal == true) {
    return (
      <div>
        {/* 모달 밖 div */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={notModal}
        >
          <div>
            <LoginPopUp
              getLogin={getLogin}
              chModal={chModal}
              closeModal={closeModal}
              
              chLogin={chLogin}
              chLogout={chLogout}
            ></LoginPopUp>
            <JoinPopUp
              getJoin={getJoin}
              chModal={chModal}
              closeModal={closeModal}
              
            ></JoinPopUp>
            <FindPwPopUp
              getFind={getFind}
              chModal={chModal}
              closeModal={closeModal}
            ></FindPwPopUp>
          </div>
        </div>
      </div>
    );
  }
};
export default MainModalPopup;
