'use client'
import React, {useState} from "react";
import {doSingUp,doIdCheck} from './userUtil';

// 리엑트에서 input 많을때 사용하면 좋은거
// https://react.vlpt.us/basic/09-multiple-inputs.html

interface Props{
    getLogin:boolean;
    setLogin:(value:boolean)=>void;
    getSign:boolean;
    setSign:(value:boolean)=>void;
}

export const SignUpPopUp:React.FC<Props>=({getSign,setSign,setLogin,getLogin})=>{
    const [getId,setId]=useState('');
    const [getEmail,setEmail]=useState('');
    const [getPw,setPw]=useState(['','']);
    const notModal=(e:React.MouseEvent)=>{
        if(e.target===e.currentTarget){
            setSign(false)
        }
    }
    const sendSing=async (inId:string,inEmail:string,inPw1:string,inPw2:string)=>{
        if(inPw1==inPw2){
            let cpPw = [...getPw];
            // 입력한 비밀번호 초기화
            cpPw[0]='';
            cpPw[1]='';
            setPw(cpPw);
            alert("입력하신 비밀 번호가 다릅니다! ");
        }
        let ret=await doSingUp(inId,inEmail,inPw1);
        if(!ret){
            alert("회원 가입에 실패 하였습니다! ");
        }else{
            alert("회원가입에 성공하였습니다! ")
            setLogin(true);
        }
    }
    const sendId=async (inId:string)=>{
        let ret=await doIdCheck(inId);
        if(ret){
            alert("사용가능한 아이디 입니다");
        }else{
            setId('');
            alert("중복된 아이디 입니다");
        }
    }
    if(!getSign){
        return null;
    }
    else {
        return (
            <>
            {/* 모달 오버 레이가 들아가야함 */}
            <div className="modal-overlay" onClick={notModal}>
                <div className="">
                <h2>Showpang SingUp</h2>
                    <input
                        type="text"
                        placeholder=""
                        name="id"
                        value={getId}
                        onChange={(e)=>{setId(e.target.value)}}
                    />
                    <input
                        type="text"
                        placeholder=""
                        name="email"
                        value={getEmail}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input
                        type="password"
                        placeholder=""
                        name="passwd"
                        value=""
                        onChange={(e)=>{
                            let cpPw=[...getPw];
                            cpPw[0]=e.target.value;
                            setPw(cpPw);
                        }}
                    />
                    <input
                        type="password"
                        placeholder=""
                        name="passwd"
                        value=""
                        onChange={(e)=>{
                            let cpPw=[...getPw];
                            cpPw[1]=e.target.value;
                            setPw(cpPw);
                        }}
                    />
                    <input
                        type="text"
                        placeholder=""
                        name=""
                        value=""
                        onChange={(e)=>{}}
                    />
                    <div>
                    <button onClick={(e)=>{sendSing(getId,getEmail,getPw[0],getPw[1])}} >SINGUP</button>
                    
                    </div>
                </div>
            </div>
            </>
        );
    }

}