import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Register =()=>{
    
    let history = useHistory()

    const[input,setInput]=useState({
        name:"", image_url:"", email:"", password:""
    })

    const handleChange = (event) =>{
        let {name, value} = event.target
        setInput({...input, [name]: value})
    }

    const handleRegister = (event) =>{
        event.preventDefault()
        let {name, image_url, email, password} = input
        axios.post(`https://dev-example.sanbercloud.com/api/register`, {name, image_url, email, password})
        .then((res)=>{
            history.push("/login")
        })
        .catch((err)=>{
            alert(err)
        })
    }


    return(
        <>

    <div className="flex flex-col w-full max-w-md mx-auto mt-16 px-4 py-8 bg-gray-100 rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
                Create An Account</div>
        
        <div className="mt-8">

        <form onSubmit={handleRegister}>
            

            <label>Name</label>
        <div className="flex flex-col mb-2">
            <div className="flex relative ">
          
            <input onChange={handleChange} type="text" name="name" value={input.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Name" required/>
            </div>
      </div>

            <label>Profile Picture</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="text" name="image_url" value={input.image_url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Insert Image URL" required />
            </div>
      </div>

            <label>Email</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="text" name="email" value={input.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Email" required/>
            </div>
      </div>

            <label>Password</label>
            <div className="flex flex-col mb-2">
            <div className="flex relative ">
            <input onChange={handleChange} type="password" pattern=".{8,}" name="password" value={input.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your Password" required/>
            </div>
      </div>

            <div className="flex w-full">
            <input type="submit" value="Sign Up" className="py-2 px-4  bg-blue-700 hover:bg-blue-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "/>
            </div>

        </form>
        </div>
        </div>
        
        </>
    )
}

export default Register