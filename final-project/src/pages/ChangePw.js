import axios from "axios";
import React, { useState } from "react";

const ChangePw = () => {

    const [input,setInput]=useState({
        current_password:"", new_password:"", new_confirm_password:""
    })
    const handleChange = (event) =>{
        let {name, value} = event.target
        setInput({...input, [name]: value})
    }

    const handlePassword = (event) =>{
        event.preventDefault()
        let {current_password,new_password,new_confirm_password} = input
        axios.post(`https://dev-example.sanbercloud.com/api/change-password`, {current_password,new_password,new_confirm_password})
        .then((res)=>{
            window.location="/dashboard"
        })
        .catch((err)=>{
            alert(err)
        })
    }

    return(
        <>
        
        <div className="flex flex-col w-full max-w-md mx-auto mt-16 px-4 py-8 bg-gray-100 rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Reset Your Password</div>
        
        <div className="mt-8">

        <form onSubmit={handlePassword}>
            

            <label>Current Password</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="password" pattern=".{8,}" name="current_password" value={input.current_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Current Password" required/>
            </div>
            </div>

            <label>New Password</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="password" pattern=".{8,}" name="new_password" value={input.new_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your New Password" required/>
            </div>
            </div>

            <label>Confirm New Password</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="password" pattern=".{8,}" name="new_confirm_password" value={input.new_confirm_password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Re-enter New Password" required/>
            </div>
            </div>

            <div className="flex w-full">
            <input type="submit" value="Confirm Changes" className="py-2 px-4  bg-blue-700 hover:bg-blue-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "/>
            </div>

        </form>
        </div>
        </div>

        </>
    )

    
}

export default ChangePw