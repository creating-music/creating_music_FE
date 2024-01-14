'use client'
import { useState } from "react"
import MainModalPopup from "./mainModal";
import {} from "./cookieUtill";
import {doLogOut} from "./userUtil"
import UserProfile from "./UserProfile";

interface Props {
    getLoginStatus :boolean;
    setLoginStatus : (status:boolean)=>void;
}

const LoginBt:React.FC<Props>=({getLoginStatus,setLoginStatus})=>{
    const [getLoginBt,setLoginBt] = useState(false);
    
    const LoginOpen=()=>{
        setLoginBt(true);
        
    }
    
    
    const [getModal,setModla] = useState(false);
    const ModalOpen=()=>{
        setModla(true);
    }
    if(getLoginStatus==true){
        return(
            <>
            {/* 로그 아웃 */}
            {/* 유저 프로파일 컴포넌트 아직 미완성 */}
            {/* <UserProfile getLoginStatus={getLoginStatus}></UserProfile> */}
            <button className="rounded-full bg-white text-black px-6 mx-2 border font-bold" onClick={doLogOut}>Logout</button>
            </>
        )
    }else{
        return(
            <>
            
            {/* 로그인 */}
            <button className="rounded-full bg-white text-black px-6 mx-2 border font-bold" onClick={ModalOpen}>Login</button>
                <MainModalPopup getModal={getModal} setModal={setModla} setLoginStatus={setLoginStatus}></MainModalPopup>
            </>
        )
    }
} 
export default LoginBt