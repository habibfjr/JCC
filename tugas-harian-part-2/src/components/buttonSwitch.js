import React, { useContext, useState } from "react";
import { SwitchColorContext } from "../contexts/switchColorContext";

const ButtonSwitch = ()=>{
    
    let {value,setValue}=useContext(SwitchColorContext)
    let [text,setText]=useState('Switch to Dark')
    
    let handleSwitch = () =>{
        if(value === 'nav-light'){
            setValue('nav-dark')
            setText('Switch to Light')
        }else {
            setValue('nav-light')
            setText('Switch to Dark')
        }
    }

    return(
        <>
   <button onClick={handleSwitch} style={{marginTop:'70px',marginLeft:'620px'}}>{text}</button>
    
    </>
    )
}

export default ButtonSwitch