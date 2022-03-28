import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MobileContext } from '../context/mobileContext';
import { Link } from 'react-router-dom';

const MobileList=()=>{
    const {state, handleFunction} = useContext(MobileContext)
    const {dataMobile,setDataMobile,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state
    const {handleDelete,handleEdit,handleChange,handleSubmit} = handleFunction
    
    useEffect(()=>{

        let fetchData = async () => {
            let {data} = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
            let result = data.map((res)=>{
                let {description, id, name, category,size,price,rating,image_url,release_year,is_android_app,is_ios_app} = res
                return {description,id,name,category,size,price,rating,image_url,release_year,is_android_app,is_ios_app}
            })
            setDataMobile([...result] )
          }
          if (fetchStatus){
            fetchData()
            setFetchStatus(false)
          }
          
    },[fetchStatus,setFetchStatus])

    return (
        <div>
            <div className='tabel-data'>
            <h1 className = 'text-center font-bold py-8'>List Mobile Apps</h1>
            <Link to='/mobile-form'><button type="button" className="py-2 px-4  bg-gray-800 hover:bg-gray-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white ml-10 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">Add Data</button></Link>
            <div className="container mx-auto max-w-7xl">
                <div >
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg truncate">

            <table className="min-w-full leading-normal table-auto">
                <thead>
                    <tr>
                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">No</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Name</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Category</p></th>

                        <th scope="col" className=" px-5 py-3 bg-white  border-b border-gray-200 text-gray-900  text-center w-1/12 text-sm uppercase font-normal">
                        <p className="text-gray-900  text-center w-1/12 ">Description</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Year</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Size</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Price</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Rating</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Image URL</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Android</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">iOS</p></th>

                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal ">
                        <p className="text-gray-900  text-center w-1/12 ">Action</p></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {dataMobile !== null &&(
                        <>
                        {dataMobile.map((res,index)=>{
                        return (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{index+1}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.name}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.category}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center  truncate w-20 h-10">{res.description}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.release_year}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.size}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.price}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.rating}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center h-1/12 truncate w-10">{res.image_url}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.is_android_app}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900  text-center w-1/12">{res.is_ios_app}</p></td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"> <button onClick={handleEdit} value={res.id}className="py-2 px-4  bg-white hover:bg-slate-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-1/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Edit</button>
                                     <button onClick={handleDelete} value={res.id} className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/2  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Delete</button>
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
            </div>
            <footer>
          <h5>© Quiz 3 ReactJS Jabarcodingcamp</h5>
        </footer>
            </div>

    )
}
export default MobileList