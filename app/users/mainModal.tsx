"use client";
import React, { useState } from "react";
import LoginPopUp from "./LoginPopUp";
import JoinPopUp from "./JoinPopUp";
import FindIdPwPopUp from "./FindIdPwPopUp";
import SelectJoinPopUp from "./SelectJoinPopUp";

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
  // const [getSelectJoin, setSelectJoin] = useState(false);
  const [getJoin, setJoin] = useState(false);
  const [getFind, setFind] = useState(false);
  const [getmsgstr, setmsgstr] = useState("");
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
      // setSelectJoin(false);
    } 
    // else if (InputNum == 4) {
    //   setFind(false);
    //   setLogin(false);
    //   setJoin(false);
    //   setSelectJoin(true);
    // }

  };
  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const closeModal = () => {
    setModal(false);
    setLogin(true);
    setJoin(false);
    setFind(false);
    // setSelectJoin(false);
  };
  const msgModal = (INmsg: string) => {
    setmsgstr(INmsg);
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
              msgModal={msgModal}
              chLogin={chLogin}
              chLogout={chLogout}
            ></LoginPopUp>
            {/* <SelectJoinPopUp
              getSelectJoin={getSelectJoin}
              chModal={chModal}
              closeModal={closeModal}
              msgModal={msgModal}
            ></SelectJoinPopUp> */}

            <JoinPopUp
              getJoin={getJoin}
              chModal={chModal}
              closeModal={closeModal}
              msgModal={msgModal}
            ></JoinPopUp>
            <FindIdPwPopUp
              getFind={getFind}
              chModal={chModal}
              clocseModal={closeModal}
            ></FindIdPwPopUp>
          </div>
        </div>
      </div>
    );
  }
};
export default MainModalPopup;
