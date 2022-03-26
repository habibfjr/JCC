import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../contexts/dataContext";
import axios from 'axios';
import { Link } from "react-router-dom";
import PopDel from "../components/PopDel";
import PopSub from "../components/PopSub";
import PopEdSub from "../components/PopEdSub";

const Tugas15 = () =>{
  const {state, handleFunction} = useContext(DataContext)

  const {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus,popDel,setPopDel, popSub,setPopSub, popEdsub,setPopEdsub} = state

  const {handleDelete,handleEdit2,handleChange,handleSubmit2,handleIndexScore} = handleFunction

  useEffect(()=>{

      let fetchData = async () => {
          let {data} = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
          let result = data.map((res)=>{
              let {course, id, name, score} = res
              return {course,id,name,score}
          })
          setDataMahasiswa([...result])
        }
        if (fetchStatus){
          fetchData()
          setFetchStatus(false)
        }
        if (popDel){           
            setTimeout(() => {
                setPopDel(false)
            }, 2000);
        }
        if (popSub){
            setTimeout(() => {
                setPopSub(false)
            }, 2000);
        }       
        if (popEdsub){
                setTimeout(() => {
                    setPopEdsub(false)
                }, 2000);
            }
    
  },[fetchStatus,setFetchStatus, dataMahasiswa,setDataMahasiswa, popDel,setPopDel,popSub,setPopSub, popEdsub,setPopEdsub])

  return(
        <div>
            
            <Link to='/tugas15/create'><button type="button" className="py-2 px-4  bg-gray-800 hover:bg-gray-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/2 ml-80 mt-24 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">Add Data</button></Link>
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal table-auto">
                            
                <thead>
                    <tr>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">No</th>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">Name</th>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">Course</th>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">Score</th>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">Index Score</th>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMahasiswa !== null &&(
                        <>
                        {dataMahasiswa.map((res,index)=>{
                        return (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{index+1}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{res.name}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{res.course}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{res.score}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{handleIndexScore(res.score)}</p></td>
                                <td> <button onClick={handleEdit2} value={res.id} type="button" className="py-2 px-4  bg-white hover:bg-slate-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Edit
                                    </button>
                                     <button onClick={handleDelete} value={res.id} type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/2  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                         Delete
                                         </button>
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
            </div>
            </div>
            {popDel && <PopDel/>}
            {popSub && <PopSub/>}
            {popEdsub && <PopEdSub/>}
            </div> 
  )

}

export default Tugas15