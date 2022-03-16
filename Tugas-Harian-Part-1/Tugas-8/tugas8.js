// Soal 1
console.log('-----Soal 1-----')
{
    const luasPersegiPanjang = () =>{
        return panjang * lebar
    }
    const kelilingPersegiPanjang = () =>{
        return 2 * (panjang+lebar)
    }
    const volumeBalok = () =>{
        return panjang * lebar * tinggi
    }

    let panjang= 12
    let lebar= 4
    let tinggi = 8
 
    let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
    let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
    let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang) 
console.log(HasilkelilingPersegiPanjang)
console.log(HasilvolumeBalok)
}

// Soal 2
console.log('\n-----Soal 2-----')
{
    const introduce = (...rest) =>{
        let [nama, umur, gender, pekerjaan] = rest
        if (rest[2] === "Laki-Laki"){
            gender = "Pak"
        } else if(rest[2] === "Perempuan"){
            gender = "Ibu"
        }
        return `${gender} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`
    }

    const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")

console.log(perkenalan)
}

// Soal 3
console.log('\n-----Soal 3-----')
{  
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
    let objDaftarPeserta = {}
    objDaftarPeserta.nama = 'John Doe'
    objDaftarPeserta['jenis kelamin'] = 'laki-laki'
    objDaftarPeserta.hobi = 'baca buku'
    objDaftarPeserta['tahun lahir'] = 1992
console.log(objDaftarPeserta)
}

// Soal 4
console.log('\n-----Soal 4-----')
{
    let buah = [{nama: 'Nanas',warna: 'Kuning',adaBijinya: 'tidak',harga: 9000}, 
        {nama: 'Jeruk',warna: 'Oranye',adaBijinya: 'ada',harga: 8000},
        {nama: 'Semangka',warna: 'Hijau & Merah',adaBijinya: 'ada',harga: 10000},
        {nama: 'Pisang',warna: 'Kuning',adaBijinya: 'tidak',harga: 5000}]
    let arrayBuahFilter = buah.filter(function(item){
        return item.adaBijinya != 'ada'
    })
    console.log(arrayBuahFilter)
}

//Soal 5
console.log('\n-----Soal 5-----')
{
    let phone = {
        name: "Galaxy Note 20",
        brand: "Samsung",
        year: 2020,
        colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
     }     
    const {name, brand, year, colors} = phone
    let phoneName = phone.name
    let phoneBrand = phone.brand
    let colorBronze = phone.colors[0]
    let colorWhite = phone.colors[1]
    let colorBlack = phone.colors[2]
     
     
     console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)
}

//Soal 6
console.log('\n-----Soal 6-----')
{
    let warna = ["biru", "merah", "kuning" , "hijau"]

    let dataBukuTambahan= {
        penulis: "john doe",
        tahunTerbit: 2020 
}
    let buku = {
        nama: "pemograman dasar",
        jumlahHalaman: 172,
        warnaSampul:["hitam"]
}
    let warnaBaru = buku.warnaSampul
        warnaBaru.push(warna[0],warna[1],warna[2],warna[3])
    let bukuBaru = {...buku,...dataBukuTambahan}

    console.log(bukuBaru)
}

// Soal 7
console.log('\n-----Soal 7-----')
{
    const tambahDataFilm = (nama,durasi,genre,tahun) =>{
        let film = {nama,durasi,genre,tahun}
        return dataFilm.push(film)
    }

    let dataFilm = []
    
    tambahDataFilm("LOTR", "2 jam", "action", "1999")
    tambahDataFilm("avenger", "2 jam", "action", "2019")
    tambahDataFilm("spiderman", "2 jam", "action", "2004")
    tambahDataFilm("juon", "2 jam", "horror", "2004")
    
console.log(dataFilm)
}