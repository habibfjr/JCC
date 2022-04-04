import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Profile = () => {

    let dataUser = JSON.parse(Cookies.get('user'))

    return(
        <>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mx-auto px-20">
            
  
                <div className="flex flex-col items-center pb-10 mt-8">
                    <strong><h2>PROFILE</h2></strong> <br/> 
                    <img alt="profil" src={dataUser.image_url} className="mx-auto object-cover rounded-full h-20 w-20 shadow-lg" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">{dataUser.name}</h5>
                    <span className="text-sm text-gray-500 ">{dataUser.email}</span>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                    <Link to="/change-password" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Change Password</Link>
                </div>
                </div>
        </div>
        
        </>
    )

    
}

export default Profile