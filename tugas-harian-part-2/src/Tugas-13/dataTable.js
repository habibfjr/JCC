import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "./dataContext";
import axios from 'axios';

const DataTable = () =>{
  const {state, handleFunction} = useContext(DataContext)

  const {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus} = state

  const {handleDelete,handleEdit,handleChange,handleSubmit,handleIndexScore} = handleFunction

//   const [input, setInput] =  useState({
//     name: '', course:'', score:0
// })
//   const [currentId, setCurrentId] = useState(-1)
//   const [fetchStatus,setFetchStatus] = useState(true)

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
            <h1>Daftar Nilai Mahasiswa</h1>
            <div className='tabel'>
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
                                <td> <button onClick={handleEdit} value={res.id}>Edit</button>
                                     <button onClick={handleDelete} value={res.id}>Delete</button>
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
  )

}

export default DataTable