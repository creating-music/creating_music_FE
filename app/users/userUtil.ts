import axios from "../_api/axiosinterceptors";

const serveraddr = process.env.NEXT_PUBLIC_DOMAIN;

export interface resLogin {
  isSuccess: boolean; // 성공 여부 (true/false)
  code: number; // 응답 코드
  message: string;
  result: resUserInfo;
}
interface resUserInfo {
  accessToken: string;
  email: string;
  nickname: string;
  profileUrl: string;
}
export interface resDefult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}
interface resIdCheck {
  msg: string;
  state: boolean;
}

// const doLogin=async (inEmail:string,inPw:string):Promise<resLogin>=>{
export const doLogin = async (inEmail: string, inPw: string): Promise<resLogin> => {
  let ret: resLogin;
  ret = {
    isSuccess: false, // 성공 여부 (true/false)
    code: 0, // 응답 코드
    message: "fail", // 응답 메세지
    result: {
      accessToken: "",
      email: "",
      nickname: "",
      profileUrl: "",
    },
  };
  const addr = serveraddr + "/users/login";
  let jsondata = {
    email: inEmail,
    password: inPw,
  };
  try {
    const res = await fetch(addr, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    });
    if (res.status === 200) {
      ret = await res.json();
      if (ret.isSuccess == true) {
        // 로그인 성공 토큰 ,정보 세션에 저장
        const Token = ret.result.accessToken;
        setSession("accessToken", ret.result.accessToken);
        setSession("email", ret.result.email);
        setSession("nickname", ret.result.nickname);
        setSession("profileUrl", ret.result.profileUrl);
        return ret;
      } else {
        // 로그인 실패
        return ret;
      }
    }
    return ret;
  } catch (error) {
    alert("네트워크 연결 상태가 좋지 않습니다 !");
    return ret;
  }
};
export const doGoogleLogin = async (inCode: string | null): Promise<resLogin> => {
  let ret: resLogin;
  ret = {
    isSuccess: false, // 성공 여부 (true/false)
    code: 0, // 응답 코드
    message: "fail", // 응답 메세지
    result: {
      accessToken: "",
      email: "",
      nickname: "",
      profileUrl: "",
    },
  };
  const addr = serveraddr + "/users/login/google";
  let jsondata = {
    code: inCode,
  };
  try {
    // // withCredentials: true,
    // axios.defaults.withCredentials = true;
    // const res = await axios.post(`${serveraddr}/users/login`, jsondata);

    const res = await fetch(addr, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org; http://192.168.187.163:3000",
      },
      body: JSON.stringify(jsondata),
    });
    if (res.status === 200) {
      ret = await res.json();
      if (ret.isSuccess == true) {
        // alert`doGoogleLogin`;
        // 로그인 성공 토큰 ,정보 세션에 저장
        const Token = ret.result.accessToken;
        setSession("accessToken", ret.result.accessToken);
        setSession("email", ret.result.email);
        setSession("nickname", ret.result.nickname);
        setSession("profileUrl", ret.result.profileUrl);
        return ret;
      } else {
        // 로그인 실패
        return ret;
      }
    }
    return ret;
  } catch (error) {
    alert("네트워크 연결 상태가 좋지 않습니다 !");
    return ret;
  }
};
export const doKakaoLogin = async (inCode: string | null): Promise<resLogin> => {
  let ret: resLogin;
  ret = {
    isSuccess: false, // 성공 여부 (true/false)
    code: 0, // 응답 코드
    message: "fail", // 응답 메세지
    result: {
      accessToken: "",
      email: "",
      nickname: "",
      profileUrl: "",
    },
  };
  const addr = serveraddr + "/users/login/kakao";
  let jsondata = {
    code: inCode,
  };
  try {
    const res = await fetch(addr, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    });
    if (res.status === 200) {
      ret = await res.json();
      if (ret.isSuccess == true) {
        const Token = ret.result.accessToken;
        setSession("accessToken", ret.result.accessToken);
        setSession("email", ret.result.email);
        setSession("nickname", ret.result.nickname);
        setSession("profileUrl", ret.result.profileUrl);
        return ret;
      } else {
        // 로그인 실패
        return ret;
      }
    }
    return ret;
  } catch (error) {
    alert("네트워크 연결 상태가 좋지 않습니다 !");
    return ret;
  }
};
export const doFindPass = async () => {
  const addr = serveraddr + "";
  let ret;
  let jsondata = {};
  try {
  } catch (error) {}
  const res = await fetch(addr, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsondata),
  });
};
// 회원가입
export const doSignUp = async (
  INusername: string,
  INEmail: string,
  INPw1: string,
  INCode: string,
): Promise<resDefult> => {
  let ret: resDefult={
    message: "fail",
    isSuccess: false,
    result: "회원가입 실패 네트워크 에러",
    code: 400,
  };
  const addr = serveraddr + "/users/signup";
  const jsondata = {
    nickname: INusername,
    email: INEmail,
    password: INPw1,
    code: INCode,
  };
  try {
    const res = await fetch(addr, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org",
      },
      body: JSON.stringify(jsondata),
    });
    ret = await res.json();
  } catch (error) {
    console.log(error);
  }
  return ret;
};
// const errorHandler = async (error: string) => {};
export const doReSession = async (inerror: any): Promise<string | void> => {
  try {
    // refresh token 을 같이 요청 하기 access 는 헤더에 존재
    const addr = "/users/reissue";

    // userUtil 밑에 해당 로직 넣기
    const ret: resLogin = await axios(addr, {
      method: "POST",
      withCredentials: true,
    });
    if (ret.result.accessToken !== null) {
      console.log("true resession");
      setSession("accessToken", ret.result.accessToken);
      setSession("email", ret.result.email);
      setSession("nickname", ret.result.nickname);
      setSession("profileUrl", ret.result.profileUrl);
    }
    // 여기까지
    // 재요청 이게 실패하면 catch 가 되어 세션 삭제됨 원인 일지도 본래
    // 즉 서버 문제라도 세션이 밑에 때문에 날아감
    return axios.request(inerror.config);
  } catch (error) {
    console.log("error resession");
    delSession("nickname");
    delSession("email");
    delSession("profileUrl");
    delSession("accessToken");
    return Promise.reject(inerror);
  }
};

// 메일 인증
export const doMailCheck = async (inMail: string): Promise<resDefult> => {
  // 이메일이 존재 할수 없는 경우 중복인 경우
  let ret: resDefult = {
    message: "",
    code: 0,
    isSuccess: false,
    result: "요청 실패",
  };
  let jsondata = {
    email: inMail,
  };
  let res;
  const addr=serveraddr+"/users/email/code-request";
   
  res = await fetch(addr, {
    method: "POST",
    body: JSON.stringify(jsondata),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org",
    },
  });
  ret = await res.json();
  return ret;
};
export const doSendEmail=async (inMail:string ):Promise<resDefult>=>{
  const addr=serveraddr+"/users/reset-password-request"
  let ret:resDefult={
    message: "",
    code: 0,
    isSuccess: false,
    result: "요청 실패",
  };
  let jsondata = {
    email: inMail,
  };
  let res = await fetch(addr, {
    method: "POST",
    body: JSON.stringify(jsondata),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org",
    },
  });
  ret = await res.json();
  return ret;
}
export const doResetPasswd=async (inToken:string, inNewPasswd:string):Promise<resDefult>=>{
  const addr=serveraddr+"/users/reset-password";
  let ret:resDefult={
    message: "",
    code: 0,
    isSuccess: false,
    result: "요청 실패",
  };
  let jsondata={
    token:inToken,
    newPassword:inNewPasswd
  }
  let res = await fetch(addr, {
    method: "POST",
    body: JSON.stringify(jsondata),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org",
    },
  });
  ret = await res.json();
  return ret;
}
export const doCodeCheck = async (
  inMail: string,
  inCode: string,
): Promise<resDefult> => {
  // 이메일이 존재 할수 없는 경우 중복인 경우
  let ret: resDefult= {
    message: "",
    code: 0,
    isSuccess: false,
    result: "요청 실패",
  };
  let jsondata = {
    email: inMail,
    code: inCode,
  };
  let res;
  const addr = serveraddr + "/users/email/code-check";
  res = await fetch(addr, {
    method: "POST",
    body: JSON.stringify(jsondata),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin":
        "http://192.168.0.15:*; http://127.0.0.1; https://showpang.org",
    },
  });
  ret = await res.json();
  return ret;
};

export const doIdCheck = async (inId: string): Promise<resIdCheck> => {
  let ret: resIdCheck;
  ret = {
    msg: "net error",
    state: false,
  };
  const addr = serveraddr + "/users/idcheck";
  const jsondata = {
    id: inId,
  };
  try {
    const res = await fetch(addr, {
      method: "GET",
      body: JSON.stringify(jsondata),
    });
    ret = await res.json();
  } catch (error) {}
  return ret;
};

export const doLogOut = async () => {
  const addr = serveraddr + "/users/logout";
  let ret;
  delSession("nickname");
  delSession("email");
  delSession("profileUrl");
  delSession("accessToken");
  // csrf 로 강제 로그 아웃 방지를 위한 POST 요청 하지만 과연?
  // http only 인 Refresh Token 을 지우는 로직
  const res = await fetch(addr, {
    method: "POST",
  });

  return null;
};

// export {
//   doLogin,
//   doFindPass,
//   doSignUp,
//   doMailCheck,
//   doIdCheck,
//   doLogOut,
//   doGoogleLogin,
//   doKakaoLogin,
//   doReSession,
//   doCodeCheck,
// };

export const users = async () => {
  var addr = serveraddr + "/users";
  const res = await axios.get(addr, {});
};
const getSession = (inKey: string): string => {
  const ret = sessionStorage.getItem(inKey);
  if (ret === null) {
    return "";
  }
  return ret;
};
const setSession = (inKey: string, inValue: string) => {
  sessionStorage.setItem(inKey, inValue);
};

const delSession = (inKey: string) => {
  sessionStorage.removeItem(inKey);
};
