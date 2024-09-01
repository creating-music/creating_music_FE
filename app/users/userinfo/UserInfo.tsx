import Image from "next/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
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
      // const response = axios.get(`${processnv.NEXT_PUBLIC_DOMAIN}/api/users`);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users`, userInfo);
      console.log("수정된 정보:", userInfo);
      setIsEdit(false);
    } catch (error: any) {
      console.log("에러발생", error);
    }
  };

  return (
    <div className="m-auto h-full w-1/2">
      <form className="flex w-full gap-10">
        <div className="h-36 w-64">
          <Image
            src={imagePreview ?? userInfo?.profile ?? ""}
            alt="profile-image"
            width={100}
            height={100}
            className="h-36 w-36 rounded-full"
          />
          {isEdit && (
            <div>
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
                className=" cursor-pointer text-blue-500"
              >
                이미지 업로드
              </label>
            </div>
          )}
        </div>
        <aside className="flex w-full flex-col gap-3">
          <div className="flex flex-col	gap-1">
            <label htmlFor="name">계정 이름</label>
            <input
              className="placeholder:text-gray-4 h-8 w-80 rounded-full bg-zinc-600"
              name="username"
              value={isEdit ? userInfo?.username : userInfo?.username}
              onChange={handleInfoChange}
              readOnly={!isEdit}
              placeholder={userInfo?.username}
            />
          </div>
          <div className="flex flex-col	gap-1">
            <label htmlFor="name">이메일</label>
            <input
              className="placeholder:text-gray-4 h-8 w-80 rounded-full bg-zinc-600"
              readOnly
              value={userInfo?.email}
            />
          </div>
          <div className="mt-7 flex w-full gap-3">
            <div className="flex gap-[0.5rem]">
              <span>무료 플랜</span>
              <AiOutlineInfoCircle
                onClick={() => setOpenPlan(!openPlan)}
                className="mt-1"
              />
            </div>
            {openPlan && (
              <div className="w-72 rounded-3xl bg-gray-500 px-6	py-5 text-sm">
                {userInfo?.username}님은 현재 무료 플랜 유저입니다. 추후
                업데이트를 통해 유료 플랜이 추가될 수 있습니다.
              </div>
            )}
          </div>
        </aside>
      </form>
      <button onClick={() => setIsEdit(!isEdit)}>
        {isEdit ? "수정 취소" : "정보 수정"}
      </button>
      {isEdit && (
        <button onClick={handleSubmit} className="ml-5">
          수정완료
        </button>
      )}
    </div>
  );
}
