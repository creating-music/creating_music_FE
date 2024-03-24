import { resLogin } from "../user/userUtil";
import { resolveSoa } from "dns";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

const REFRESH_URL = "http://192.168.0.15:8080";

axios.interceptors.request.use((config: any) => {
  if (!config.headers) return config;
  let token: string | null = null;
  // 리프레쉬 요청이 아니라면 token을 헤더에 넣기
  if (config.url !== REFRESH_URL) {
    token = sessionStorage.getItem("accessToken");
  }
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const getAccessToken = async (): Promise<string | void> => {
  try {
    // refresh token 을 같이 요청 하기 access 는 헤더에 존재
    var addr = "/users/reissue";
    // axios.defaults.withCredentials = true;
    const {
      data: { resLogin },
    } = await axios(REFRESH_URL + addr, {
      method: "POST",
      withCredentials: true,
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin":
      //     "http://192.168.0.15:8080; http://127.0.0.1",
      //   // withCredentials: true,
      // },
    });

    if (resLogin.result.accessToken !== null) {
      sessionStorage.setItem("accessToken", resLogin.result.accessToken);
      sessionStorage.setItem("email", resLogin.result.email);
      sessionStorage.setItem("nickname", resLogin.result.nickname);
      sessionStorage.setItem("profileUrl", resLogin.result.profileUrl);
    }
    return "a";
  } catch (error) {
    // localStorage.removeItem("accessToken");
    // config.headers.Authorization = "";
    // 서버에서 지우기때문에
    localStorage.removeItem("accessToken");
    return;
  }
};

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    // if (config.url === REFRESH_URL || status == 401 || config.sent) {
    if (status !== 401 || config.sent) {
      alert(1);
      return Promise.reject(err);
    }

    // 만약 만료 시간이 다 끝난 경우
    config.sent = true;
    const acToken = await getAccessToken();
    // access 토큰이 없는 경우
    if (!acToken) {
      return Promise.reject(err);
    }
    // config.headers.
    return axios(config);
  },
);
export default axios;
