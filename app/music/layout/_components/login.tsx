"use client";

import Button from "@/app/_components/Button";
import Icon from "@/app/_components/Icon";
import ClientIcon from "@/app/_components/icon/ClientIcon";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  // 임시, 민석님이 만드신 로그인 상태 머지 되면 수정할게요 ~
  const [login, setLogin] = useState<boolean>(false);
  const onClickSignUp = () => {};
  const onClickLogin = () => setLogin(!login);
  const onClickLogout = () => setLogin(!login);

  return (
    <div className="flex items-center gap-[1rem]">
      {login ? (
        <Link href="/mypage">
          {/** 마이페이지 라우트 수정필요 */}
          <ClientIcon iconUrl="https://creating-music.s3.ap-northeast-2.amazonaws.com/icons/avatar.svg" />
        </Link>
      ) : (
        <Button
          label="회원가입"
          onClick={onClickSignUp}
          filled={false}
          size="sm"
        />
      )}
      <Button
        label={login ? "로그아웃" : "로그인"}
        onClick={login ? onClickLogout : onClickLogin}
        filled
        size="sm"
      />
    </div>
  );
};
export default Login;
