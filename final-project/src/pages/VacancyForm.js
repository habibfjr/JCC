import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/context";

const VacancyForm = () => {
    
    const {state,handleFunction}=useContext(DataContext)

    const {setCurrentId, input,setInput} = state

    const {handleEdit, handleChange, handleSubmit} = handleFunction
    
    let {Id} = useParams


    useEffect(()=>{
        if (Id !== undefined){
            handleEdit(Id)
        }
        return ()=>{
            setInput({title:"", job_description:"", job_qualification:"", job_type:"", job_tenure:"", job_status:0, company_name:"", company_image_url:"", company_city:"", salary_min:0, salary_max:1})
            setCurrentId(-1)
        }
    },[])

    return(
        <>
        
        <div className='headerForm'>
            <h1 className="text-center font-bold ">Data Form</h1>
            </div>

            <div className='form mt-16'>
            <form onSubmit={handleSubmit} method="POST">

            <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                <input type="text" name='title' value={input.title} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" /><br /><br />
            </div>

            <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description</label>
                <textarea type="text" name='job_description' value={input.job_description} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
            </div>

            <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qualification</label>
                <textarea type="text" name='job_qualification' value={input.job_qualification} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                <input type="text" name='job_type' value={input.job_type} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tenure</label>
                <input type="text" name='job_tenure' value={input.job_tenure} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</label>
                <input type="number" name='job_status' value={input.job_status} onChange={handleChange} min={0} max={1} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                <input type="text" name='company_name' value={input.company_name} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
                <input type="text" name='company_image_url' value={input.company_image_url} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                <input type="text" name='company_city' value={input.company_city} onChange={handleChange} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                
                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary Min</label>
                <input type="number" name='salary_min' value={input.salary_min} onChange={handleChange} min={0} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>

                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary Max</label>
                <input type="number" name='salary_max' value={input.salary_max} onChange={handleChange} min={1} required className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/><br /><br />
                </div>
                
                <div className="relative z-0 mb-6 w-1/2 group mx-auto">
                <input type="submit" value="Submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "/>
                </div>
            </form>
        </div>

        </>
    )

    
}

export default VacancyForm