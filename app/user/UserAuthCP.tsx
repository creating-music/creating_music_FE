'use client'
import { useState } from "react";
import LoginBt from "./LoginBt";
import UserProfile from "./UserProfile";

class UserInfo{ //최상단 유저 겍체 + useStatus 를 합쳐서관리하자
    // 이름 이미지 경로 등등 .. 겍체 
}
// 설정 해야하느것 프로필 경로 , 로그인 상테 , 닉네임 , 
const UserAuthCP=()=>{
    // 관리할 데이터 use state 작성
    // 1 이면 로그 아웃 0 이면 로그인 
    // const [getLoginStatus,setLoginStatus]=useState(false);
    const [getLoginStatus,setLoginStatus]=useState(true);
    const [getProfileIMG,setProfileIMG]=useState('https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png');
    const [getName,setName]=useState('');
    return(
        // 로그인 버튼 로그 아웃 버튼 유저 프로필 
        <>  
        <div className="flex gap-1">
                <UserProfile getLoginStatus={getLoginStatus} getProfileIMG={getProfileIMG}></UserProfile>
                <LoginBt getLoginStatus={getLoginStatus} setLoginStatus={setLoginStatus}></LoginBt>
                {/* <p>{process.env.PUBLIC_URL}}</p> */}  
        </div>            
        </>
    )

} 
export default UserAuthCP;