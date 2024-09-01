import React, { useState, useEffect } from "react";

// import logoimg from "@/tmp/google.png";
// 로고 활성화 여기
// import logoimg from "@/tmp/googebt.png";
// const logoimg = "https://showpang.org/images/icons/google.svg";

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
          className="flex  items-center justify-center rounded-full focus:outline-none">
          google
          <Image
            alt={`로고`}
            src={`${process.env.NEXT_PUBLIC_IMAGE}/showpang_logo.png`}
            // 로고 활성화 여기
            // src={logoimg}
            width={240}
            height={48}
            className="h-[36px] w-[180px] flex-shrink-0 object-cover"
          />
        </button>
      </div>

      {/* <button onClick={handleLogin}>google login</button> */}
    </>
  );
};

export default GoogleAuthLogin;
