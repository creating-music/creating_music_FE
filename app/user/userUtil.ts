import { redirect } from "next/dist/server/api-utils"
import { error } from "node:console"
import { promises } from "node:dns";
import { json } from "node:stream/consumers"
// 서버 주소 여기에
const serveraddr="http://192.168.187.163:8080";
// }
//로그인 
interface resLogin{
    msg:string;
    state:boolean;
}
interface resSignUp{
    msg:string;
    state:boolean;
}
interface resIdCheck{
    msg:string;
    state:boolean;
}
// const doLogin=async (inEmail:string,inPw:string):Promise<resLogin>=>{
const doLogin= async (inEmail:string,inPw:string):Promise<resLogin> =>{
    let ret:resLogin;
    ret={
        msg:"fail",
        state:false
    }
    const addr=serveraddr+"/user/login"
    let jsondata={
        email:inEmail,
        password:inPw
    }
    try {
        const res=await fetch(addr,{
            method:"POST",
            credentials:"include",
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'http:/localhost:3000',
            },
            body:JSON.stringify(jsondata),
        })
        if(res.status===200){
            ret=await res.json();
            if (ret.state==true){
                // 로그인 성공
                return ret;
            }else{
                // 로그인 실패
                return ret;
            }
        }
        return ret;
    } catch (error) {
        alert("네트워크 연결 상태가 좋지 않습니다 !");
        return ret;
    }
    
}
const doFindPass=async ()=>{
    const addr=serveraddr+""
    let ret
    let jsondata={
    }
    try {
        
    } catch (error) {
        
    }
    const res=await fetch(addr,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(jsondata),
    })
    
}
// 회원가입 
const doSignUp= async (INusername:string,INEmail:string,INPw1:string):Promise<resSignUp>=>{
    let ret:resSignUp;
    
    const addr=serveraddr+"/user/signup"
    const jsondata={
        username:INusername,
        email:INEmail,
        password:INPw1
    }
    try {
        const res=await fetch(addr,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(jsondata)
        })
        ret=await res.json();
    } catch (error) {
        console.log(error);
        ret={
            msg:"fail",
            state:false
        }
    }
    return ret;
}

// 메일 인증
const doMailCheck=async ()=>{
    let ret
    const addr=serveraddr+""
    const res=await fetch(addr,{
        method:"",
    })

}
const doIdCheck=async (inId:string):Promise<resIdCheck>=>{
    let ret:resIdCheck;
    ret={
        msg:"net error",
        state:false
    }
    const addr=serveraddr+"/user/idcheck"
    const jsondata={
        id:inId
    }
    try {
        const res=await fetch(addr,{
            method:"GET",
            body:JSON.stringify(jsondata)
        })
        ret=await res.json();
    } catch (error) {
        
    }
    return ret
}

const doLogOut=async ()=>{
    const addr=serveraddr+"/user/logout";
    let ret;
    // csrf 로 강제 로그 아웃 방지를 위한 POST 요청 하지만 과연?
    const res=await fetch(addr,{
        method:"POST",
        
    })
} 

export {doLogin,doFindPass,doSignUp,doMailCheck,doIdCheck,doLogOut} 

// let ret
// const addr=""
// await fetch(addr,{
//     method:"",
// })
// .then((res:Response)=>{
//     console.log("");
// })
// .catch((err)=>{
//     ret=false
//     console.log(err);
// })
// return ret