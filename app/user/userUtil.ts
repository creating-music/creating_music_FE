import { redirect } from "next/dist/server/api-utils"
import { error } from "node:console"
import { json } from "node:stream/consumers"
// 서버 주소 여기에
const serveraddr="http://127.0.0.1:8080";
// }
//로그인 
const doLogin=async (inEmail:string,inPw:string)=>{
    let ret
    const addr=serveraddr+"/user/login"
    let jsondata={
        email:inEmail,
        password:inPw
    }
    await fetch(addr,{
        method:"POST",
        credentials:"include",
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'http:/localhost:3000',
        },
        body:JSON.stringify(jsondata),
    })
    .then((res:Response)=>{
        if(res.status===200){
            ret=res.json();
            // if(){
            //     ret=true;
            // }
        }
    })
    .catch((err:Error)=>{
        ret=false;
        console.error(err);
    })
    return ret;
}
const doFindPass=async ()=>{
    const addr=serveraddr+""
    let ret
    let jsondata={
    }
    await fetch(addr,{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(jsondata),
    })
    .then((res:Response)=>{
        ret=res.json()
        console.log("find password success");
    })
    .catch((err:any)=>{
        ret=false
        console.error(err)
    })
    return ret
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
    await fetch(addr,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(jsondata)
    })
    .then((res:Response)=>{
        let ret=res.json()
        if(!ret){
            
        }
        console.log("");
    })
    .catch((err)=>{
        ret=false
        console.log(err);
    })
    return ret
}

// 메일 인증
const doMailCheck=async ()=>{
    let ret
    const addr=serveraddr+""
    await fetch(addr,{
        method:"",
    })
    .then((res:Response)=>{
        console.log("");
    })
    .catch((err)=>{
        ret=false
        console.log(err);
    })
    return ret
}
const doIdCheck=async (inId:string)=>{
    let ret
    const addr=serveraddr+""
    await fetch(addr,{
        method:"",
    })
    .then((res:Response)=>{
        console.log("");
    })
    .catch((err)=>{
        ret=false
        console.log(err);
    })
    return ret
}

const doLogout=async ()=>{
    const addr=serveraddr+"";
    let ret;
    await fetch(addr,{
        method:"POST",
    })
    .then((res:Response)=>{
        // redirect 시키고 싶은데 
        //이게 맞어?
        // redirect('/')
    })
    .catch((err)=>{
        ret=false;
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