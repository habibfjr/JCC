import React, { useContext, useState, useEffect } from "react"
import axios from 'axios';
import { MobileContext } from "../context/mobileContext";
import { useParams } from "react-router-dom";

const MobileForm=()=>{
    const {state, handleFunction} = useContext(MobileContext)
    const {dataMobile,setDataMobile,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state
    const {handleDelete,handleEdit,handleChange,handleSubmit} = handleFunction
    
    let {slug}= useParams

    useEffect(()=>{

        if (slug !== undefined){
            axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${slug}`)
            .then((res)=>{
            let data=res.data
            setInput({
                name:data.name,category:data.category,description:data.description,
                year:data.release_year,size:data.size,price:data.price,rating:data.rating,
                image_url:data.image_url,is_android_app:data.is_android_app,is_ios_app:data.is_ios_app
            })
            setCurrentId(data.id)

            })
            } 

            return ()=>{
            setInput({
                name:'',category:'',description:'',
                year:2007,size:0,price:0,rating:0,
                image_url:'',is_android_app:true,is_ios_app:true
            })
            setCurrentId(-1)
            }
            },[])

    return(
        <>
            <div className='headerForm'>
            <h1 className = 'text-center font-bold py-8'>Mobile Apps Form</h1>
            </div>
            <div className='form'>
            <form onSubmit={handleSubmit} method="POST">
            <div class="px-4 py-8 sm:px-10">
                <label>Name:</label>
                <input type="text" name='name' value={input.name} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name..."/><br /><br />

                <label>Category:</label>
                <input type="text" name='category' value={input.category} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Category..." /><br /><br />

                <label>Description:</label>
                <textarea type="text" name='description' value={input.description} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description..." /><br /><br />

                <label>Year:</label>
                <input type="number" name='release_year' value={input.release_year} onChange={handleChange} min={2007} max={2021} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="2007 to 2021"/><br /><br />

                <label>Size:</label>
                <input type="number" name='size' value={input.size} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Size"/><br /><br />

                <label>Price:</label>
                <input type="number" name='price' value={input.price} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Price"/><br /><br />

                <label>Rating:</label>
                <input type="number" name='rating' value={input.rating} onChange={handleChange} min={0} max={5} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="0 to 5"/><br /><br />

                <label>Image URL:</label>
                <input type="text" name='image_url' value={input.image_url} onChange={handleChange} required className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Insert Link"/><br /><br />

                <label>Android:</label>
                <input type="checkbox" name='is_android_app' value={input.is_android_app} onClick={handleChange} className="hover:cursor-pointer"/><br /><br />

                <label>iOS:</label>
                <input type="checkbox" name='is_ios_app' value={input.is_ios_app} onClick={handleChange} className="hover:cursor-pointer" /><br /><br />

                <input type="submit" value="Submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg hover:cursor-pointer" />
                </div>
            </form>
            <footer>
          <h5>© Quiz 3 ReactJS Jabarcodingcamp</h5>
        </footer>
        </div>
        </>
    )

}
export default MobileForm