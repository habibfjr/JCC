import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";


export const DataContext = createContext();

export const DataProvider = props =>{
    
    let history = useHistory()

    const[data,setData]=useState([])

    const[fetchStatus,setFetchStatus]=useState(true)

    const[searchStatus,setSearchStatus]=useState(true)

    const[currentId,setCurrentId]=useState(-1)

    const[input,setInput]=useState({
        title:"", job_description:"", job_qualification:"", job_type:"", job_tenure:"", job_status:0, company_name:"", company_image_url:"", company_city:"", salary_min:0, salary_max:1
    })

    const fetchData = async ()=>{
        let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        let fetchResult = result.data.data
        
        setData(
            fetchResult.map((res)=>{
            
            let {
                id, title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max} = res

            return {
                id, title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max}
        }))
    }

    const handleEdit = (event)=>{
        let dataId = parseInt(event.target.value)
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${dataId}`)
        .then((res)=>{
            history.push(`/dashboard/list-job-vacancy/form/edit/${dataId}`)
            let data=res.data
            setInput({
                title:data.title, job_description:data.job_description, job_qualification:data.job_qualification, job_type:data.job_type, job_tenure:data.job_tenure, job_status:data.job_status, company_name:data.company_name, company_image_url:data.company_image_url, company_city:data.company_city, salary_min:data.salary_min, salary_max:data.salary_max})
            
            setCurrentId(data.id)
            setFetchStatus(true)
            
        })
        .catch((err)=>{
            alert(err)
        })
      }

    //   delete wajib token
      const handleDelete = (event)=>{
        let dataId = parseInt(event.target.value)
      axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${dataId}`,
      {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
      .then((res)=>{
          let newData = data.filter(x=> {return x.id !== dataId})
          setData(newData)
          setFetchStatus(true)
      })
      .catch((err)=>{
          alert(err)
      })
    }
    
    const handleChange = (event)=>{
        let {name,value} = event.target
        setInput({...input, [name]: value})
    }

    // submit wajib token
    const handleSubmit = (event)=>{
        event.preventDefault()
        let {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max} = input
        
        if (currentId === -1){
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, 
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}} ,{title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max})
            .then((res)=>{
                let data = res.data.data
                setData([...data, {title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max}])
                setFetchStatus(true)
            })
            .catch((err)=>{
                alert(err)
            })
        }else{
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, 
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}},{title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max})
            .then((res)=>{
                let editData = data.find(x=>x.id === currentId)
                editData.id = input
                setData([...data])
                setFetchStatus(true)
            })
            .catch((err)=>{
                alert(err)
            })
        }
        setInput({title:"", job_description:"", job_qualification:"", job_type:"", job_tenure:"", job_status:0, company_name:"", company_image_url:"", company_city:"", salary_min:0, salary_max:1})
        setCurrentId(-1)
    }

    const shortenText=(text, max)=>{
        if(text === undefined){
            return ""
        }else {
            return text.slice(0, max) + "..."
        }
    }

    const jobStatus=(val)=>{
        if (val === 0){
            return "Closed"
        }else{
            return "Open"
        }
    }

    let state = {data,setData, fetchStatus,setFetchStatus, currentId,setCurrentId, input,setInput,searchStatus, setSearchStatus}
    let handleFunction = {fetchData,handleEdit, handleDelete, handleChange, handleSubmit, shortenText, jobStatus}
    
    return (
        <DataContext.Provider value={{
            state,handleFunction
        }}>
          {props.children}
        </DataContext.Provider>
      )
    
}