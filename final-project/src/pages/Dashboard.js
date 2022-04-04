import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {


    return(
        <>
            <div className = "card">
                <div>
                                  <div className = "display-content">
                                    <div className=" bg-white rounded-lg border border-gray-200 shadow-md mb-3">
                                    <Link to="/dashboard/list-job-vacancy">
                                        <img className="rounded-t-lg object-cover h-20 w-30 mx-auto mt-4" src="https://cdn3.iconfinder.com/data/icons/job-recruitment/100/job_recruitment_job_search_find_vacancy-512.png" alt="icon" />
                                        </Link>
                                      <div className="p-5">
                                        <Link to="/dashboard/list-job-vacancy">
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 cursor-pointer text-center hover:text-gray-600">Job Vacancy List</h5>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>

                                  <div className = "display-content">
                                    <div className=" bg-white rounded-lg border border-gray-200 shadow-md mb-3">
                                    <Link to="/dashboard/list-job-vacancy/form/create">
                                        <img className="rounded-t-lg object-cover h-20 w-30 mx-auto mt-4" src="https://icon-library.com/images/add-icon/add-icon-6.jpg" alt="icon" />
                                        </Link>
                                      <div className="p-5">
                                        <Link to="/dashboard/list-job-vacancy/form/create">
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 cursor-pointer text-center hover:text-gray-600">Create a Job Vacancy</h5>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
            </div>


            

        </>
    )

    
}

export default Dashboard