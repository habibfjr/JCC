import React from 'react';
import logo from '../assets/img/logo.png';
import '../assets/css/tugas10.css';

const Tugas10=()=>{

  const ToDoList=(props)=>{
    return(
      <div className='toDoList'>
        <input type={'checkbox'}/>{props.text}
        <hr/>
      </div>   
    )
  }

  return(
    <div className='card'>
      <img src={logo} />
      <h1>THINGS TO DO</h1>
      <p>During Bootcamp in Jabarcodingcamp</p>
      <hr/>

      <div className='containerList'></div>
        <ToDoList text={'Belajar GIT & CLI'}/>
        <ToDoList text={'Belajar HTML & CSS'}/>
        <ToDoList text={'Belajar Javascript'}/>
        <ToDoList text={'Belajar ReactJS Dasar'}/>
        <ToDoList text={'Belajar ReactJS Advance'}/>
    
      <div className='button'>
        <input type={'submit'} name={'send'} value={'Send'} />
      </div>
    </div>
  )
}

export default Tugas10;
