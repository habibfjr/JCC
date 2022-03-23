import React, { useContext, useState, useEffect } from "react"
import { DataContext } from "./dataContext"
import axios from 'axios';

const DataForm = () => {

    const {state, handleFunction} = useContext(DataContext)

    const {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state

    const {handleDelete,handleEdit,handleChange,handleSubmit,handleIndexScore} = handleFunction

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
          
    },[fetchStatus,setFetchStatus, dataMahasiswa,setDataMahasiswa])

    return(
        <>
        <h1>Form Nilai Mahasiswa</h1>
            <div className='form'>
            <form onSubmit={handleSubmit} method="POST">
                <label>Nama:</label>
                <input type="text" name='name' value={input.name} onChange={handleChange} required /><br /><br />
                <label>Mata Kuliah:</label>
                <input type="text" name='course' value={input.course} onChange={handleChange} required /><br /><br />
                <label>Nilai:</label>
                <input type="number" name='score' value={input.score} onChange={handleChange} min={0} max={100} required /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    )
}

export default DataForm