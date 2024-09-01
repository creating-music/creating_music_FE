import React, { useState, useEffect } from "react";

// import logoimg from "@/tmp/google.png";
// import logoimg from "@/tmp/googlesvg.svg";
const logoimg = "https://showpang.org/images/icons/google.svg";

import Image from "next/image";
const GoogleAuthLogin = () => {
  // popup { 열릴때 WindowProxy , 닫칠때 null } 반환
  const [getPopup, setPopup] = useState<WindowProxy | null>();
  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=607016687590-ms0vlgq7l4vaod00rhmko67vabdoium9.apps.googleusercontent.com
		&redirect_uri=https://showpang.org/users/oauth/googlelogin
		&response_type=code
		&scope=email profile`;
  };
  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={handleLogin}
          className="flex h-11 w-11 items-center justify-center rounded-full focus:outline-none"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_ICON}/google.svg`}
            alt="GOOGLE"
            className="h-full w-full rounded-full object-cover"
            width={11}
            height={11}
            // onClick={handleLogin}
          />
        </button>
      </div>

      {/* <button onClick={handleLogin}>google login</button> */}
    </>
  );
};

export default GoogleAuthLogin;
