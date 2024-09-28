import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import userInfoData from "./user-info.json";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserInfo {
  username: string;
  profile: string | File;
  email?: string;
}

export default function UserInfo() {
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [openPlan, setOpenPlan] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      // const response = axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users`);
      setUserInfo(userInfoData.result); // * 일단 데이터 불러오는거 임의 파일에서 가져옴
    } catch (error: any) {
      // TODO: 에러처리
      console.log("에러발생", error);
    }
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevFormData) => ({
      ...(prevFormData || { username: "", profile: "" }), // null일 경우 기본값 설정
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUserInfo((prevFormData) => ({
        profile: file,
        username: prevFormData?.username || "",
      }));
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     // await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users`, userInfo);
  //     console.log("수정된 정보:", userInfo);
  //     setIsEdit(false);
  //   } catch (error: any) {
  //     console.log("에러발생", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();

    // formData에 username 추가 (JSON 형식으로 전송하지 않고 FormData로 문자열을 추가)
    if (userInfo?.username) {
      formData.append("username", userInfo.username);
    }

    // profile이 파일이라면 FormData에 추가
    if (userInfo?.profile instanceof File) {
      formData.append("profile", userInfo.profile);
    }

    try {
      // FormData로 한번에 전송
      // await axios.patch(
      //   `${process.env.NEXT_PUBLIC_DOMAIN}/api/users`,
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data", // FormData 전송을 위한 헤더 설정
      //     },
      //   },
      // );
      console.log("수정된 정보:", formData);
    } catch (error: any) {
      console.log("에러발생", error);
    }
  };

  return (
    <div className="flex flex-col">
      <form className="m-auto flex w-1/2 flex-col gap-10 rounded-2xl bg-zinc-800 p-7 px-12">
        <h1 className="text-xl font-semibold">계정 정보</h1>
        <div className="flex items-center ">
          <aside className="flex w-1/3 justify-end">
            <Image
              src={imagePreview ?? userInfo?.profile ?? ""}
              alt="profile-image"
              width={100}
              height={100}
              className={`h-36 w-36 rounded-3xl opacity-${
                isEdit ? "80" : "100"
              }`}
            />
            {isEdit && (
              <div className="relative">
                <input
                  id="profileImage"
                  name="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="profileImage"
                  className="absolute right-[53px] top-[57px] cursor-pointer rounded-full bg-zinc-800 p-2 text-white opacity-80"
                >
                  <CiImageOn size="20" />
                </label>
              </div>
            )}
          </aside>
          <aside className="flex w-2/3 flex-col items-center gap-3 ">
            <div className="flex w-2/3 flex-col	gap-1">
              <label htmlFor="name">계정 이름</label>
              <input
                className="placeholder:text-gray-4 h-8 w-full  rounded-full  border-none	 bg-zinc-900 "
                name="username"
                value={isEdit ? userInfo?.username : userInfo?.username}
                onChange={handleInfoChange}
                readOnly={!isEdit}
                placeholder={userInfo?.username}
              />
            </div>
            <div className="flex w-2/3 flex-col gap-1">
              <label htmlFor="name">이메일</label>
              <input
                className="placeholder:text-gray-4 h-8 w-80 w-full rounded-full border-none	 bg-zinc-900 "
                readOnly
                value={userInfo?.email}
              />
            </div>
            <div className="relative mt-3 flex w-2/3 gap-3">
              <div className="flex gap-[0.5rem]">
                <span>무료 플랜</span>
                <AiOutlineInfoCircle
                  onClick={() => setOpenPlan(!openPlan)}
                  className=" mt-1"
                />
              </div>
              {openPlan && (
                <div className="absolute left-24 w-72 rounded-3xl bg-gray-500	px-6 py-5 text-sm">
                  {userInfo?.username}님은 현재 무료 플랜 유저입니다. 추후
                  업데이트를 통해 유료 플랜이 추가될 수 있습니다.
                </div>
              )}
            </div>
          </aside>
        </div>
        <div className="flex justify-end gap-3">
          <button className=" rounded-full border-2	border-white px-4 py-1">
            비밀번호 변경
          </button>
          <div>
            <button
              className="rounded-full border-2 bg-white px-4  py-1 text-black"
              onClick={(e) => {
                e.preventDefault();
                setIsEdit(!isEdit);
              }}
            >
              {isEdit ? "수정 취소" : "정보 수정"}
            </button>
            {isEdit && (
              <button
                onClick={handleSubmit}
                className="ml-3 rounded-full border-2 bg-white  px-4 py-1 text-black"
              >
                수정완료
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
