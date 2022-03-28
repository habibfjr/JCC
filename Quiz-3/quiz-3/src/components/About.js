import React from 'react'



function About (){
    return(
    <div>
        <div className="about" style={{border: '1px solid black', marginBottom: '2%'}}>
          <h1 style={{textAlign: 'center'}}>Data Peserta Jabarcodingcamp 2022</h1>
          <ol>
            <li><b>Nama</b>: Yusuf Habib Fajr</li>
            <li><b>Email</b>: habibf99@gmail.com</li>
            <li><b>Sistem Operasi</b>: Microsoft Windows 10 64-bit</li>
            <li><b>Akun Gitlab</b>: habibfjr</li>
            <li><b>Akun Telegram</b>: habibfjr</li>
          </ol>
          <br />
        </div>
        <a href="home.html"><button>Kembali Ke Home</button></a>
        <footer>
          <h5>© Quiz 3 ReactJS Jabarcodingcamp</h5>
        </footer>
      </div>
    )
}
export default About