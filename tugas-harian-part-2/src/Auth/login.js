import React, { useContext, useState } from 'react'
import { DataContext } from '../contexts/dataContext'

const Login = () => {
    const {state,handleFunction} = useContext(DataContext)
    const {input2,setInput2} = state
    const {handleLogin} = handleFunction

    const handleChange2 = (event) => {
        let {name,value} = event.target;
        setInput2({...input2, [name]: value});
      }

    return (
        <>
            <form onSubmit={handleLogin} className='container mx-auto mt-36 px-4 sm:px-8 py-8 shadow max-w-xl'>

            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl text-center">
                Login
            </div>

                <label>Email</label>
                <input onChange={handleChange2} value={input2.email} type={'text'} name="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/><br/>

                <label>Password</label>
                <input onChange={handleChange2} value={input2.password} type={'password'} name="password" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/><br/><br/>

                <input type={'submit'} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg hover:cursor-pointer"/>

            </form>
        </>
    )
}
export default Login