import React, { useState } from 'react';
import '../assets/css/tugas11.css'

const Tugas11=()=>{

    const [daftarBuah, setDaftarBuah]= useState([
            {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
            {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
            {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
            {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
            {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
          ])
    
    const [inputBuah, setInputBuah] =  useState(
        {nama:'',hargaTotal:'' ,beratTotal:''}
    )

    const [indexNow, setIndexNow] = useState(-1)

    const handleChange = (event) => {
        let {name,value} = event.target;
        setInputBuah({...inputBuah, [name]: value});
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        let newDaftar = daftarBuah
        if(indexNow === -1){
            newDaftar = [...daftarBuah,inputBuah]
        } else {
            newDaftar[indexNow] = inputBuah
        }
        
        setDaftarBuah(newDaftar)
        setInputBuah({nama:'',hargaTotal:'' ,beratTotal:''})
      }

      const handleDelete = (event)=>{
          let index = parseInt(event.target.value)
          let hapus = daftarBuah[index]
          let upDaftar = daftarBuah.filter((x)=>{return x !==hapus})
        setDaftarBuah(upDaftar)
      }

      const handleEdit = (event)=>{
        let index = parseInt(event.target.value)
        let editItem = daftarBuah[index]
        setInputBuah(editItem)
        setIndexNow(index)
      }

    return (
        <div>
            <h1>Daftar Harga Buah</h1>
            <div className='tabel'>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga Total</th>
                        <th>Berat Total</th>
                        <th>Harga per Kg</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {daftarBuah.map((buah,index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{buah.nama}</td>
                                <td>{buah.hargaTotal}</td>
                                <td>{buah.beratTotal / 1000} Kg</td>
                                <td>{buah.hargaTotal / (buah.beratTotal/1000)}</td>
                                <td> <button onClick={handleEdit} value={index}>Edit</button>
                                     <button onClick={handleDelete} value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            
            <h1>Form Daftar Harga Buah</h1>
            <div className='form'>
            <form onSubmit={handleSubmit} method="POST">
                <label>Nama:</label>         
                <input type="text" name='nama' value={inputBuah.nama} onChange={handleChange} required/><br/><br/>
                <label>Harga Total:</label>
                <input type="number" name='hargaTotal' value={inputBuah.hargaTotal} onChange={handleChange} required/><br/><br/>
                <label>Berat Total (gram):</label>
                <input type="number" name='beratTotal' value={inputBuah.beratTotal} onChange={handleChange} min={2000} required/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            
        </div>

    )
}

export default Tugas11;