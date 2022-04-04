import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    
    
    return(
        <>
                
                <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <div className="flex items-center justify-center pt-6">
                            <Link to="/"> <img alt="side" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" style={{width:"75px", height:"45px"}} /></Link>
                            </div>
                            <nav className="mt-6">
                            <div>
                                <Link className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500" to="/dashboard">
                                <span className="text-left">
                                </span>
                                <span className="mx-4 text-sm font-normal">
                                    Dashboard
                                </span>
                                </Link>

                                <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to="/dashboard/list-job-vacancy">
                                <span className="text-left">
                                </span>
                                <span className="mx-4 text-sm font-normal">
                                    Job Vacancy List
                                </span>
                                </Link>


                                <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to="/dashboard/list-job-vacancy/form/create">
                                <span className="text-left">
                                </span>
                                <span className="mx-4 text-sm font-normal">
                                    Create a Job Vacancy
                                </span>
                                </Link>

                                <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to="/profile">
                                <span className="text-left">
                                </span>
                                <span className="mx-4 text-sm font-normal">
                                    Profile
                                </span>
                                </Link>
                                <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to="/change-password">
                                <span className="text-left">
                                </span>
                                <span className="mx-4 text-sm font-normal">
                                    Change Password
                                </span>
                                </Link>
                            </div>
                            </nav>
                        </div>
                        </div>
        </>
    )
}

export default Sidebar