import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SwitchColorContext } from '../contexts/switchColorContext';

const Nav = () => {
    
    let {value,setValue}=useContext(SwitchColorContext)
  
    return (
        <>
      <ul className={`${value}`}>
        <li className='a'><Link style={{textDecoration:'none', color:'grey' }} to="/">Tugas 10</Link></li>
        <li><Link style={{textDecoration:'none', color:'grey' }} to="/tugas11">Tugas 11</Link></li>
        <li><Link style={{textDecoration:'none', color:'grey' }} to="/tugas12">Tugas 12</Link></li>
        <li><Link style={{textDecoration:'none', color:'grey' }} to="/dataContext">Tugas 13</Link></li>
        <li><Link style={{textDecoration:'none', color:'grey' }} to="/tugas14">Tugas 14</Link></li>
      </ul>

      <div className={`${value}`}> </div>

    </>
    
    )
}

export default Nav