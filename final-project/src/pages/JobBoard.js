import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/context";

const JobBoard = () => {

    const {state,handleFunction}=useContext(DataContext)

    const {data, setData, fetchStatus,setFetchStatus, searchStatus, setSearchStatus} = state

    const{fetchData,jobStatus} = handleFunction
    

    useEffect(()=>{
        if (fetchStatus){
            fetchData()
            setFetchStatus(false)      
        }
    }, [fetchStatus, setFetchStatus, fetchData])

    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState({
        job_tenure:"",
        company_city:"",
        job_type:""
    })

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
        })
        .catch((err)=>{
            alert(err)
        })
      }

    return(
        <>
        <div className="container mx-auto bg-gray-300 px-4 py-4">
        <form onSubmit={handleFilter} method="POST" className="flex flex-row mb-4 ml-3 mr-3">
                <input onChange={handleChangeFilter} value={filtered.job_tenure} type="text" name="job_tenure" placeholder="Input Tenure" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
                <input onChange={handleChangeFilter} value={filtered.company_city} type="text" name="company_city" placeholder="Input City" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
                <input onChange={handleChangeFilter} value={filtered.job_type} type="text" name="job_type" placeholder="Input Job Type" className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mr-2"/>
                <input type="submit" value="Filter" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
        </form>

        <form onSubmit={handleSearch} method="POST" className="grid grid-cols-2 mb-4 ml-3 mr-3">
                <input onChange={handleChangeSearch} value={search} type="text" name="search" placeholder="Search job..." className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>

                <input type="submit" value="Search" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
        </form>
                <button onClick={()=>{
                    setFetchStatus(true)
                }} className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 cursor-pointer ml-3">Reset</button>
        </div>
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