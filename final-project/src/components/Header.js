import Cookies from "js-cookie";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () =>{
    let history = useHistory()
    let dataUser = JSON.parse(Cookies.get('user'))
    const[drop,setDrop]=useState(false)

    return(
        <>
                <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                            <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                                <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                <div className="relative flex items-center w-full lg:w-64 h-full group">
                                                    
                                </div>
                                </div>


                                <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                    <button onClick={()=>{
                                        setDrop(!drop)
                                    }} type="button" className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                                    <span className="sr-only">Open user menu</span>
                                    <img alt="profil" src={dataUser.image_url} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    <h5 className="font-medium py-2 px-2">Hi, {dataUser.name}!</h5>
                                    </button>
                                    
                                 </div>
                                 
                                    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow" id="dropdown">
                                    <div className="py-3 px-4">
                                    <span className="block text-sm text-gray-900 ">{dataUser.name}</span>
                                    <span className="block text-sm font-medium text-gray-500 truncate">{dataUser.email}</span>
                                    </div>
                                    <ul className="py-1" aria-labelledby="dropdown">
                                    <Link to="/profile"> <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</li> </Link>
                                        <li onClick={()=>{
                                        Cookies.remove('token')
                                        Cookies.remove('user')
                                        history.push('/login')}} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Sign out</li>
                                    </ul>
                                </div>


                            </div>
                            </div>
                        </header>
        </>
    )
}

export default Header