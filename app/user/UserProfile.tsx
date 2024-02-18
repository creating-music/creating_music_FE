"use client";
import React from "react";
interface Props {
  getLoginStatus:boolean
  getProfileIMG:string
}

const UserProfile:React.FC<Props>= ({getLoginStatus,getProfileIMG}) => {

  if(getLoginStatus==false){
    return null;
  }else{
    return (
      <>
      <div className="w-12 h-12 rounded-full overflow-hidden">
      <a href='/userinfo'><img src={getProfileIMG} alt="tmp" className="w-full h-full object-cover" /></a>
    </div>
      {/* <div >
        <img src="#" ></img>
      </div> */}
      </>
    );
  };
}
export default UserProfile;

