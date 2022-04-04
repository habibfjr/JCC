import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DataContext } from "../contexts/context";
import { useParams } from "react-router-dom";

const VacancyList = () => {

    const {state,handleFunction}=useContext(DataContext)

    const {data, fetchStatus,setFetchStatus, searchStatus, setSearchStatus} = state

    const{fetchData, handleEdit, handleDelete, shortenText, jobStatus} = handleFunction
    
    

    const [searchData, setSearchData]=useState([])
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState({
        salary_min:"",
        company_city:"",
        job_type:""
    })

    useEffect(()=>{
        if (fetchStatus){
            fetchData()
            setFetchStatus(false)      
        }
    }, [fetchStatus, setFetchStatus, fetchData]) 
    

    const handleChange = (event)=>{
        setSearch(event.target.value)
      }
    
      const handleSearch = (event)=>{
        event.preventDefault()
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res)=>{
            let fetchRes = res.data.data
            let filterData = fetchRes.filter((e)=>{
                return Object.values(e).join("").toLowerCase().includes(search.toLowerCase())
        })
        setSearchData([...filterData])
        setSearchStatus(true)
        })
        .catch((err)=>{
            alert(err)
        })
        if (searchStatus){
            setSearchStatus(false)      
        }       
            
        
      }

    return(
        <>
        <form onSubmit={handleSearch} method="POST" className="grid grid-cols-2">
            <input onChange={handleChange} value={search} type="text" name="search" placeholder="Search job..." className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>

            <input type="submit" value="Search" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
        </form>
        <div className="table">
            <h1 className="text-center font-bold">List of Jobs</h1>

            <div className="container mx-auto ">
            <table className=" leading-normal table-auto text-sm text-left text-gray-500 mt-4">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                    <tr>
                        
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Job Description</th>
                        <th className="px-6 py-3">Qualification</th>
                        <th className="px-6 py-3">Type</th>
                        <th className="px-6 py-3">Tenure</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Company</th>
                        <th className="px-6 py-3">City</th>
                        <th className="px-6 py-3">Salary</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data !== null &&(
                        <>
                        {data.map((res,index)=>{
                        return (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50 text-center">
                                
                                <td className="px-6 py-4 font-medium"> {res.title}</td>
                                <td className="px-6 py-4">{shortenText(res.job_description, 10)}</td>
                                <td className="px-6 py-4">{shortenText(res.job_qualification, 10)}</td>
                                <td className="px-6 py-4">{res.job_type}</td>
                                <td className="px-6 py-4">{res.job_tenure}</td>
                                <td className="px-6 py-4">{jobStatus(res.job_status)}</td>
                                <td className="px-6 py-4">{res.company_name}</td>
                                <td className="px-6 py-4">{res.company_city}</td>
                                <td className="px-6 py-4">IDR {res.salary_min} - {res.salary_max}</td>

                                <td className="px-6 py-4"> <button onClick={handleEdit} value={res.id} className="font-medium text-blue-600 hover:underline">Edit</button>
                                     <button onClick={handleDelete} value={res.id} className="font-medium text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                        </>
                    )}
                </tbody>
            </table>
            </div>
            </div>

        </>
    )

    
}

export default VacancyList