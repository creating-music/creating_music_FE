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
// const doLogin=async (inEmail:string,inPw:string):Promise<resLogin>=>{
const doLogin= async (inEmail:string,inPw:string):Promise<boolean> =>{
    let ret:resLogin
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
            ret=await res.json()
            if (ret.state==true){
                alert('login msg:' + ret.msg);
                return ret.state
            }else{
                alert("login msg:"+ret.msg);
                return ret.state
            }
        }
        return false
    } catch (error) {
        alert("네트워크 연결 상태가 좋지 않습니다")
        return false
    }
    
}
const doFindPass=async ()=>{
    const addr=serveraddr+""
    let ret
    let jsondata={
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
const doSingUp= async (inId:string,inEmail:string,inPw1:string)=>{
    let ret
    const addr=serveraddr+""
    const jsondata={
        id:inId,
        email:inEmail,
        pw:inPw1
    }
    const res=await fetch(addr,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(jsondata)
    })

}

// 메일 인증
const doMailCheck=async ()=>{
    let ret
    const addr=serveraddr+""
    const res=await fetch(addr,{
        method:"",
    })

}
const doIdCheck=async (inId:string)=>{
    let ret
    const addr=serveraddr+""
    const res=await fetch(addr,{
        method:"",
    })

}

const doLogout=async ()=>{
    const addr=serveraddr+"";
    let ret;
    const res=await fetch(addr,{
        method:"POST",
    })

} 

export {doLogin,doFindPass,doSingUp,doMailCheck,doIdCheck} 

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