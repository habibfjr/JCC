import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { DataContext } from "../contexts/context";
import { useParams } from "react-router-dom";


const VacancyList = () => {

    const {state,handleFunction}=useContext(DataContext)

    const {data, setData, fetchStatus,setFetchStatus, searchStatus, setSearchStatus} = state

    const{fetchData, handleEdit, handleDelete, shortenText, jobStatus} = handleFunction
    
    

    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState({
        job_tenure:"",
        company_city:"",
        job_type:""
    })

    useEffect(()=>{
        if (fetchStatus){
            fetchData()
            
            setFetchStatus(false)      
        }
    }, [fetchStatus, setFetchStatus, fetchData]) 
    

    const handleChangeSearch = (event)=>{
        setSearch(event.target.value)
      }
    
      const handleSearch = (event)=>{
        event.preventDefault()
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res)=>{
            let fetchRes = res.data.data
            let result = fetchRes.filter((e)=>{
                return Object.values(e).join("").toLowerCase().includes(search.toLowerCase())
        })
        setData([...result])
        setSearchStatus(true)
        })
        .catch((err)=>{
            alert(err)
        })
        if (searchStatus){
            setSearchStatus(false)      
        }        
      }

      const handleChangeFilter = (event)=>{
        let {name,value} = event.target
        setFiltered({...filtered, [name] : value})
      }

      const handleFilter = (event)=>{
        event.preventDefault()
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res)=>{
            let fetchRes = res.data.data
            let result = fetchRes.filter((e)=>{
                return e.job_tenure.toLowerCase() === filtered.job_tenure.toLowerCase() ||
                e.company_city.toLowerCase() === filtered.company_city.toLowerCase() ||
                e.job_type.toLowerCase() === filtered.job_type.toLowerCase()
        })
        setData([...result])
        // setSearchStatus(true)
        })
        .catch((err)=>{
            alert(err)
        })
        // if (searchStatus){
        //     setSearchStatus(false)      
        // }        
      }
    

    return(
        <>

        <form onSubmit={handleFilter} method="POST" className="flex flex-row">
            <input onChange={handleChangeFilter} value={filtered.job_tenure} type="text" name="job_tenure" placeholder="Input Tenure" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
            <input onChange={handleChangeFilter} value={filtered.company_city} type="text" name="company_city" placeholder="Input City" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
            <input onChange={handleChangeFilter} value={filtered.job_type} type="text" name="job_type" placeholder="Input Job Type" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
            <input type="submit" value="Filter" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
        </form>

        <form onSubmit={handleSearch} method="POST" className="grid grid-cols-2">
            <input onChange={handleChangeSearch} value={search} type="text" name="search" placeholder="Search job..." className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>

            <input type="submit" value="Search" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
        </form>
        <button onClick={()=>{
            setFetchStatus(true)
        }} className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer">Reset</button>
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