'use client'
import React, {useState} from "react";

interface Props{
    get:boolean;
    set:(value:boolean)=>void;
    PopClose:()=>void;
}

const PopUp:React.FC<Props>=({get,set,PopClose})=>{
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
            <div className="modal-overlay" onClick={notModal}>
                <div className="">
                <h2>Showpang</h2>
                    
                </div>
            </div>
            </>
        );
    }

}