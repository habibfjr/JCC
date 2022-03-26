import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SwitchColorContext } from '../contexts/switchColorContext';
import logo from '../assets/img/logo.png';
import ButtonSwitch from './buttonSwitch';

const Nav = () => {
    
    let {value,setValue}=useContext(SwitchColorContext)
  
    return (
        <>
      <div className={`${value}`}>

      <nav class="nav-light:bg-white nav-dark:bg-darkslategrey-800  ">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                <a class="flex-shrink-0" href="/">
                        <img class="h-12 w-52 " src={logo} alt="Workflow"/>
                    </a>
      <ul>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Tugas 10</Link></li>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/tugas11">Tugas 11</Link></li>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/tugas12">Tugas 12</Link></li>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/dataContext">Tugas 13</Link></li>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/tugas14">Tugas 14</Link></li>
        <li><Link class="text-gray-300  hover:text-gray-800 nav-dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/tugas15">Tugas 15</Link></li>
        
      </ul>
      
      </div>
      <ButtonSwitch class="absolute top-0 right-0"/>
      </div>
      </div>
      
    </nav>
    
    </div>
    
    </>
    
    )
}

export default Nav