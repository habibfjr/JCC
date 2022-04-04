import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/context";

const JobDesc = () => {

    const {state,handleFunction}=useContext(DataContext)

    const {data, fetchStatus,setFetchStatus} = state

    const{fetchData,jobStatus} = handleFunction

    let {jobId} =useParams()

    const[dataJob,setDataJob]=useState([])
    

    useEffect(()=>{
        if (jobId !== undefined){
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${jobId}`)
            .then((res)=>{
                let detail = res.data
                setDataJob([detail])
            })
            .catch((err)=>{
                alert(err)
            })   
        }
    }, [])

    return(
        <>
            <div className = "card ml-12">
                {dataJob !== null && (
                    <>
                        {dataJob.map ((res)=>{
                            return(
                                <>
                                  <div className = "display-content mt-12">
                                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-3">
                                      
                                        <img className="rounded-t-lg object-cover" src={res.company_image_url} alt="company logo" />
                                      
                                      
                                    </div>
                                    <div className="p-5">
                                       
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{res.title}</h5>
                                       
                                        <p className="mb-3 font-normal text-gray-700 ">{res.company_name}</p>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.company_city}</p>
                                        <p className="mb-3 font-normal text-gray-700 ">IDR {res.salary_min} - {res.salary_max}</p>
                                        <p className="mb-3 font-normal text-gray-700 ">{jobStatus(res.job_status)}</p>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Description:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_description}</p>
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Qualification:</h5>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_qualification}</p>
                                        <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Type:</h8>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_type}</p>
                                        <h8 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Tenure:</h8>
                                        <p className="mb-3 font-normal text-gray-700 ">{res.job_tenure}</p>
                                        
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

export default JobDesc