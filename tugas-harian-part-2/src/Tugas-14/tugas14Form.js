import React, { useContext, useState, useEffect } from "react"
import { DataContext } from "../contexts/dataContext"
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Tugas14Form = () => {

    const {state, handleFunction} = useContext(DataContext)

    const {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state

    const {handleDelete,handleEdit,handleChange,handleSubmit,handleIndexScore} = handleFunction

    let {slug}= useParams

    useEffect(()=>{

        if (slug !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${slug}`)
            .then((res)=>{
            let data=res.data
            setInput({name:data.name,course:data.course,score:data.score})
            setCurrentId(data.id)

            })
            } 

            return ()=>{
            setInput({name:'',course:'',score:0})
            setCurrentId(-1)
            }
            },[])

    return(
        <>
            <div className='headerForm'>
            <h1>Form Nilai Mahasiswa</h1>
            </div>
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
            <Link to="/tugas14">Back</Link>
        </div>
        </>
    )
}

export default Tugas14Form