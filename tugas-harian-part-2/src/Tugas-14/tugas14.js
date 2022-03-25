import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../contexts/dataContext";
import axios from 'axios';
import { Link } from "react-router-dom";
import ButtonSwitch from "../components/buttonSwitch";

const Tugas14 = () =>{
  const {state, handleFunction} = useContext(DataContext)

  const {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state

  const {handleDelete,handleEdit1,handleChange,handleSubmit,handleIndexScore} = handleFunction

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
        <div>
            <ButtonSwitch/>
            <div className='tabel'>
            <h1>Daftar Nilai Mahasiswa</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Mata Kuliah</th>
                        <th>Nilai</th>
                        <th>Index Nilai</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMahasiswa !== null &&(
                        <>
                        {dataMahasiswa.map((res,index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{res.name}</td>
                                <td>{res.course}</td>
                                <td>{res.score}</td>
                                <td>{handleIndexScore(res.score)}</td>
                                <td> <button onClick={handleEdit1} value={res.id}>Edit</button>
                                     <button onClick={handleDelete} value={res.id}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                        </>
                    )}
                </tbody>
            </table>
            <Link to='/tugas14/create'><button style={{marginTop:'30px',marginLeft:'300px'}}>Add Data</button></Link>
            </div>
            </div>  
  )

}

export default Tugas14