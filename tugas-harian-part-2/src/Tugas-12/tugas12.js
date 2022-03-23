import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Tugas12=()=>{

    const [dataMahasiswa, setDataMahasiswa]= useState([])
    const [input, setInput] =  useState({
        name: '', course:'', score:0
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus,setFetchStatus] = useState(true)

    useEffect(()=>{

        let fetchData = async () => {
            let {data} = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
            let result = data.map((res)=>{
                let {course, id, name, score} = res
                return {course,id,name,score}
            })
            setDataMahasiswa([...result] )
          }
          if (fetchStatus){
            fetchData()
            setFetchStatus(false)
          }
          
    },[fetchStatus,setFetchStatus])

    const handleChange = (event) => {
        let {name,value} = event.target;
        setInput({...input, [name]: value});
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        
        let{name,course,score} = input
        if(currentId === -1){
            axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, {name,score,course})
            .then((res)=>{
                let data = res.data
                setDataMahasiswa([...dataMahasiswa,{name,score,course}])
                setFetchStatus(true)
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,{name,score,course})
            .then((res)=>{
                let editData = dataMahasiswa.find(x=>x.id === currentId)
                editData.id = input
                setDataMahasiswa([...dataMahasiswa])
                setFetchStatus(true)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        setInput({name:'',course:'' ,score:0})
        setCurrentId(-1)
      }

      const handleDelete = (event)=>{
          let dataId = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
        .then((res)=>{
            let newDataMahasiswa = dataMahasiswa.filter(x=> {return x.id !== dataId})
            setDataMahasiswa(newDataMahasiswa)
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err)
        })
      }

      const handleEdit = (event)=>{
        let dataId = parseInt(event.target.value)
        
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
        .then((res)=>{
            let data=res.data
            setInput({name:data.name,course:data.course ,score:data.score})
            setCurrentId(data.id)
            setFetchStatus(true)
            
        })
        .catch((err)=>{
            console.log(err)
        })
      }

      const handleIndexScore = (param)=>{
          
          if (param >= 80) return 'A'
          else if(param <80 && param >= 70) return 'B'
          else if(param <70 && param >= 60) return 'C'
          else if(param <60 && param >= 50) return 'D'
          else return 'E'
      }

    return (
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
            
            <h1>Form Nilai Mahasiswa</h1>
            <div className='form'>
            <form onSubmit={handleSubmit} method="POST">
                <label>Nama:</label>         
                <input type="text" name='name' value={input.name} onChange={handleChange} required/><br/><br/>
                <label>Mata Kuliah:</label>
                <input type="text" name='course' value={input.course} onChange={handleChange} required/><br/><br/>
                <label>Nilai:</label>
                <input type="number" name='score' value={input.score} onChange={handleChange} min={0} max={100} required/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            
        </div>

    )
}

export default Tugas12;