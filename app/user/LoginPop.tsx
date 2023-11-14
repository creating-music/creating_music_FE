"use client";
import React, { useState } from "react";
import { doLogin, doFindPass } from "./userUtil";
import { SignUpPopUp } from "./SignUpPop";
interface Props {
  getSign: boolean;
  setSign: (value: boolean) => void;
  getLogin: boolean;
  setLogin: (value: boolean) => void;
  onClose: () => void;
}

const LoginPopup: React.FC<Props> = ({
  getSign,
  setSign,
  getLogin,
  setLogin,
  onClose,
}) => {
  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const SignUpPop = () => {
    setLogin(false);
    setSign(true);
  };
  const [getEmail, setEmail] = useState("");
  const [getPw, setPw] = useState("");
  const EmailHandle = (inEmail: string) => {
    setEmail(inEmail);
  };
  const PwHandle = (inPw: string) => {
    setPw(inPw);
  };

  const doLoginHan = async (inEmail: string, inPw: string) => {
    let ret = await doLogin(inEmail, inPw);
    // 여기가 문제 어떤값으로 확인할지
    if (ret == true) {
      onClose();
    } else {
      alert("login Fail");
    }
  };
  if (!getLogin) {
    return null;
  } else {
    return (
      <div>
        {/* 모달 밖 div */}
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={notModal}
        >
          {/* 모달 div */}
          <div className="dark:bg-gray-900 max-w-sm rounded-lg bg-gray p-8">
            <h2>Showpang Login</h2>
            <p>email</p>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={getEmail}
              onChange={(e) => {
                EmailHandle(e.target.value);
              }}
            />
            <p>passwd</p>
            <input
              type="password"
              placeholder="passwd"
              name="password"
              value={getPw}
              onChange={(e) => {
                PwHandle(e.target.value);
              }}
            />
            <br />
            <button
              className=" text-gray-500  text-xs underline"
              onClick={(e) => {
                doFindPass();
              }}
            >
              Find Passwd
            </button>
            <br />
            <div className="">
              <button
                className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                onClick={(e) => {
                  doLoginHan(getEmail, getPw);
                }}
              >
                login
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                onClick={SignUpPop}
              >
                SignUp
              </button>

              <SignUpPopUp
                getSign={getSign}
                setSign={setSign}
                getLogin={getLogin}
                setLogin={setLogin}
              ></SignUpPopUp>
              <br />
              <p></p>
              <button className="rounded bg-yellow-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                kakao
              </button>
              <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LoginPopup;
