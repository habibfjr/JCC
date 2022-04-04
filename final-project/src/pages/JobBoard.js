import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/context";

const JobBoard = () => {

    const {state,handleFunction}=useContext(DataContext)

    const {data, fetchStatus,setFetchStatus} = state

    const{fetchData,jobStatus} = handleFunction
    

    useEffect(()=>{
        if (fetchStatus){
            fetchData()
            setFetchStatus(false)      
        }
    }, [fetchStatus, setFetchStatus, fetchData])

    return(
        <>
            <div className = "card grid grid-cols-3">
                {data !== null && (
                    <>
                        {data.map ((res)=>{
                            return(
                                <>
                                  <div className = "display-content mt-12">
                                    <div className=" bg-white rounded-lg border border-gray-200 shadow-md mb-3 mr-3 ml-3">
                                      <Link to={`/job-vacancy/${res.id}`}>
                                        <img className="rounded-t-lg object-cover h-20 w-30" src={res.company_image_url} alt="company logo" />
                                      </Link>
                                      <div className="p-5">
                                        <Link to={`/job-vacancy/${res.id}`}>
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:underline hover:text-blue-600">{res.title}</h5>
                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.company_name}</p>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.company_city} | IDR {res.salary_min} - {res.salary_max}</p>
                                        <p className="mb-3 font-normal text-gray-700 ">{jobStatus(res.job_status)}</p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                            )
                        })}
                    </>
                )}
            </div>
        </>
    )

    
}

export default JobBoard