'use client'
import React, {useState} from "react";

interface Props{
    get:boolean;
    set:(value:boolean)=>void;
    PopClose:()=>void;
}

const FindPassPopUp:React.FC<Props>=({get,set,PopClose})=>{
    const notModal=(e:React.MouseEvent)=>{
        if(e.target===e.currentTarget){
            PopClose();
        }
    }
    if(!get){
        return null;
    }
    else {
        return (
            <>
            <div></div>
            </>
        );
    }

}