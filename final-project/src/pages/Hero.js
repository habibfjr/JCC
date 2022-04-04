import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataContext } from "../contexts/context";


const Hero = () => {
  
  const {state,handleFunction}=useContext(DataContext)
  const {data, searchStatus, setSearchStatus} = state
  const{fetchData, handleEdit, handleDelete, shortenText, jobStatus} = handleFunction

  let history = useHistory()
  const [search, setSearch] = useState("")

  const handleChange = (event)=>{
    setSearch(event.target.value)
  }

  const handleSearch = (event)=>{
    event.preventDefault()
    setSearchStatus(true)
    history.push(`/job-vacancy/search/${search}`)
  }
  return(
 
            <div>
              <div className="hero">
              <div className=" bg-white relative overflow-hidden h-screen">
                <div className="bg-white flex relative z-20 items-center overflow-hidden">
                  <div className="px-16 mx-auto px-6 flex relative py-16 w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="flex flex-col relative z-20">
                      <span className="w-20 h-2 bg-gray-800 mb-12">
                      </span>
                      <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                        Hire
                        <span className="text-5xl md:text-6xl sm:text-7xl">
                          Today
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base text-gray-700 py-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tincidunt tellus, venenatis mollis nibh. Proin dignissim metus sed maximus fringilla. Donec luctus nisl ac mi efficitur, sed fermentum dolor eleifend.
                      </p>
                      <br/>
                      <form onSubmit={handleSearch} method="POST" className="grid grid-cols-2">
                                <input onChange={handleChange} value={search} type="text" name="search" placeholder="Search by title, company, or location..." className=" rounded-l-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>

                                <input type="submit" value="Go" className="md:max-w-sm inline-flex w-1/6 justify-center align-center text-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"/>
                              </form>
                        
                      
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative object-cover">
                      <img src="https://cosmopolitanfm.com/wp-content/uploads/2016/09/2016-08-02-1470160665-5075249-networking.jpg" className="max-w-xs md:max-w-sm m-auto opacity-80 " />
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          

    )
}

export default Hero