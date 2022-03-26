import React, { useContext, useState } from "react";
import { SwitchColorContext } from "../contexts/switchColorContext";

const ButtonSwitch = ()=>{
    
    let {value,setValue}=useContext(SwitchColorContext)
    let [text,setText]=useState('Dark')
    
    let handleSwitch = () =>{
        if(value === 'nav-light'){
            setValue('nav-dark')
            setText('Light')
        }else {
            setValue('nav-light')
            setText('Dark')
        }
    }

    return(
        <>
   <button onClick={handleSwitch} type="button" class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">{text}</button>
    
    </>
    )
}

export default ButtonSwitch