import React, { useState, createContext } from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

export const SwitchColorContext = createContext();

export const SwitchColorContextProvider = props => {
  
    let [value,setValue]= useState('nav-light')

    let handleSwitch = () =>{
        if(value === 'nav-light'){
            setValue('nav-dark')
        }else {
            setValue('nav-light')
        }
    }

  return (
    <SwitchColorContext.Provider
    value={{
        value,setValue,handleSwitch
    }}>
      {props.children}
    </SwitchColorContext.Provider>
  );
};