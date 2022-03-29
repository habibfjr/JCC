import React, { useState, createContext } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie'

export const DataContext = createContext();

export const DataProvider = props => {
  let history = useHistory()
  const [dataMahasiswa, setDataMahasiswa] = useState([]);
  const [input, setInput] =  useState({
    name: '', course:'', score:0
})
  const [currentId, setCurrentId] = useState(-1)
  const [fetchStatus,setFetchStatus] = useState(true)
  const [popDel,setPopDel]=useState(false)
  const [popSub,setPopSub]=useState(false)
  const [popEdsub,setPopEdsub]=useState(false)
  const [input1,setInput1]=useState({name:'',email:'',password:''})
  const [input2,setInput2]=useState({email:'',password:''})

    const handleLogin=(event)=>{
        event.preventDefault()
        let {email,password} = input2
        axios.post(`https://backendexample.sanbersy.com/api/user-login`, {email,password})
        .then((res)=>{
            console.log(res)
            let {token} = res.data
            Cookies.set('token',token)
            window.location='/'
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleRegister=(event)=>{
        event.preventDefault()
        let{name,email,password}=input1
        axios.post(`https://backendexample.sanbersy.com/api/register`, {name,email,password})
        .then((res)=>{
            window.location='/login'
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  const handleDelete = (event)=>{
    let dataId = parseInt(event.target.value)
  axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${dataId}`)
  .then((res)=>{
      let newDataMahasiswa = dataMahasiswa.filter(x=> {return x.id !== dataId})
      setDataMahasiswa(newDataMahasiswa)
      setFetchStatus(true)
      setPopDel(true)
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

const handleEdit1 = (event)=>{
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

const handleEdit2 = (event)=>{
  let dataId = parseInt(event.target.value)
  history.push(`/tugas15/edit/${dataId}`)
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

  const handleSubmit1 = (event) => {
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

  const handleSubmit2 = (event) => {
    event.preventDefault()
    
    let{name,course,score} = input
    if(currentId === -1){
        axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, {name,score,course})
        .then((res)=>{
            let data = res.data
            setDataMahasiswa([...dataMahasiswa,{name,score,course}])
            history.push('/tugas15')
            setFetchStatus(true)
            setPopSub(true)
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
            history.push('/tugas15')
            setFetchStatus(true)
            setPopEdsub(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    setInput({name:'',course:'' ,score:0})
    setCurrentId(-1)
  }

    let state = {dataMahasiswa,setDataMahasiswa,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus,popDel,setPopDel,popSub,setPopSub,popEdsub,setPopEdsub,input1,setInput1,input2,setInput2}

    let handleFunction = {handleDelete,handleEdit,handleEdit1,handleEdit2,handleChange,handleSubmit,handleSubmit1,handleSubmit2,handleIndexScore,handleRegister,handleLogin}

  return (
    <DataContext.Provider value={{
        state,handleFunction
    }}>
      {props.children}
    </DataContext.Provider>
  );
};