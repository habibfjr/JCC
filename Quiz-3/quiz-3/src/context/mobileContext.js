import React, { useState, createContext } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const MobileContext = createContext();

export const MobileProvider = props => {
    let history = useHistory()
  const [dataMobile, setDataMobile] = useState([]);
  const [input, setInput] =  useState({
                name:'',category:'',description:'',
                year:2007,size:0,price:0,rating:0,
                image_url:'',is_android_app:true,is_ios_app:true
})
  const [currentId, setCurrentId] = useState(-1)
  const [fetchStatus,setFetchStatus] = useState(true)



  const handleDelete = (event)=>{
    let dataId = parseInt(event.target.value)
  axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${dataId}`)
  .then((res)=>{
      let newDataMobile = dataMobile.filter(x=> {return x.id !== dataId})
      setDataMobile(newDataMobile)
      setFetchStatus(true)
      
  })
  .catch((err)=>{
      console.log(err)
  })
}

const handleEdit = (event)=>{
  let dataId = parseInt(event.target.value)
  history.push(`/mobile-form/edit/${dataId}`)
  axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${dataId}`)
  .then((res)=>{
      let data=res.data
      setInput({name:data.name,category:data.category,description:data.description,
                year:data.release_year,size:data.size,price:data.price,rating:data.rating,
                image_url:data.image_url,is_android_app:data.is_android_app,is_ios_app:data.is_ios_app
            })
      setCurrentId(data.id)
      setFetchStatus(true)
      
  })
  .catch((err)=>{
      console.log(err)
  })
}


const handleChange = (event) => {
    let {name,value} = event.target;
    setInput({...input, [name]: value});
  }

 
  const handleSubmit = (event) => {
    event.preventDefault()
    
    let{name, category,description,release_year,size,price,rating,image_url,is_android_app,is_ios_app} = input
    if(currentId === -1){
        axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {name, category,description,release_year,size,price,rating,image_url,is_android_app,is_ios_app})
        .then((res)=>{
            let data = res.data
            setDataMobile([...dataMobile,{name, category,description,release_year,size,price,rating,image_url,is_android_app,is_ios_app}])
            history.push('/mobile-list')
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }else{
        axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,{name, category,description,release_year,size,price,rating,image_url,is_android_app,is_ios_app})
        .then((res)=>{
            let editData = dataMobile.find(x=>x.id === currentId)
            editData.id = input
            setDataMobile([...dataMobile])
            history.push('/mobile-list')
            setFetchStatus(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    setInput({name:'',category:'',description:'',
            year:2007,size:0,price:0,rating:0,
            image_url:'',is_android_app:true,is_ios_app:true
        })
    setCurrentId(-1)
  }

  


    let state = {dataMobile,setDataMobile,input,setInput,currentId,setCurrentId,fetchStatus,setFetchStatus}

    let handleFunction = {handleDelete,handleEdit,handleChange,handleSubmit}

  return (
    <MobileContext.Provider value={{
        state,handleFunction
    }}>
      {props.children}
    </MobileContext.Provider>
  );
};