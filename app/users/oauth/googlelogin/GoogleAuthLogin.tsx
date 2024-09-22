// `use client`;
import React, { useState, useEffect } from "react";
import { doGoogleLogin, resLogin } from "../../userUtil";
import { useLogin } from "@/app/LoginContext";
const GoogleAuthLogin = () => {
  //   const [getCode, setCode] = useState<string | null>("");
  const { getLoginStatus, chLogin } = useLogin();
  const sendCode = async (inaccessCode: string | null) => {
    let ret: resLogin = await doGoogleLogin(inaccessCode);
    if (ret.isSuccess == true) {
      chLogin();
      window.location.href = "/";
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };
  useEffect(() => {
    var url = window.location.search;
    const parsedUrl = new URLSearchParams(url);
    const accessCode = parsedUrl.get("code");
    sendCode(accessCode);
  }, []);
  return (
    <>
      <h3></h3>
      <br></br>
    </>
  );
};

export default GoogleAuthLogin;
