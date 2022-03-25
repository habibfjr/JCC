import React, { useState, createContext } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = props => {
  let history = useHistory()
  const [dataMahasiswa, setDataMahasiswa] = useState([]);
  const [input, setInput] =  useState({
    name: '', course:'', score:0
})
  const [currentId, setCurrentId] = useState(-1)
  const [fetchStatus,setFetchStatus] = useState(true)

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
  history.push(`/tugas14/edit/${dataId}`)
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
            history.push('/tugas14')
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
            history.push('/tugas14')
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    setInput({name:'',course:'' ,score:0})
    setCurrentId(-1)
  }

    let state = {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus}

    let handleFunction = {handleDelete,handleEdit,handleChange,handleSubmit,handleIndexScore}

  return (
    <DataContext.Provider value={{
        state,handleFunction
    }}>
      {props.children}
    </DataContext.Provider>
  );
};