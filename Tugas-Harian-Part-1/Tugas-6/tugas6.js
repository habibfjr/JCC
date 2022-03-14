// Soal 1
console.log('----------------SOAL 1---------------\n');
let nilaiJohn = 80;
let nilaiDoe = 50;
if (nilaiJohn >= 80) {
    console.log("Nilai John = A")
} else if (nilaiJohn >=70 && nilaiJohn <80){
        console.log("Nilai John = B")
} else if (nilaiJohn >=60 && nilaiJohn <70){
        console.log("Nilai John = C")
} else if (nilaiJohn >=50 && nilaiJohn <60){
        console.log("Nilai John = D")
} else if (nilaiJohn <50) {
        console.log("Nilai John = E")
}
if (nilaiDoe >=80){
    console.log("Nilai Doe = A")
} else if (nilaiDoe >=70 && nilaiDoe <80){
    console.log("Nilai Doe = B")
} else if (nilaiDoe >=60 && nilaiDoe <70){
    console.log("Nilai Doe = C")
} else if (nilaiDoe >=50 && nilaiDoe <60){
    console.log("Nilai Doe = D")
} else if (nilaiDoe <50){
    console.log("Nilai Doe = E")
}

// Soal 2
console.log('\n----------------SOAL 2---------------\n');
let tanggal = 27;
let bulan = 4;
let tahun = 1999;
switch (bulan){
    case 1:   {console.log(tanggal +" "+ 'Januari'+" "+ tahun); break;}
    case 2:   {console.log(tanggal +" "+ 'Februari'+" "+ tahun); break;}
    case 3:   {console.log(tanggal +" "+ 'Maret'+" "+ tahun); break;}
    case 4:   {console.log(tanggal +" "+ 'April'+" "+ tahun); break;}
    case 5:   {console.log(tanggal +" "+ 'Mei'+" "+ tahun); break;}
    case 6:   {console.log(tanggal +" "+ 'Juni'+" "+ tahun); break;}
    case 7:   {console.log(tanggal +" "+ 'Juli'+" "+ tahun); break;}
    case 8:   {console.log(tanggal +" "+ 'Agustus'+" "+ tahun); break;}
    case 9:   {console.log(tanggal +" "+ 'September'+" "+ tahun); break;}
    case 10:  {console.log(tanggal +" "+ 'Oktober'+" "+ tahun); break;}
    case 11:  {console.log(tanggal +" "+ 'November'+" "+ tahun); break;}
    case 12:  {console.log(tanggal +" "+ 'Desember'+" "+ tahun); break;}
    default:  {console.log('Lengkapi Data');}
}

// Soal 3
console.log('\n----------------SOAL 3---------------\n');
console.log('LOOPING PERTAMA')
for (let x=2; x<=20; x +=2){
    console.log(x + ' - I love coding')
}
console.log('LOOPING KEDUA');
for (let x=20; x>=2; x -=2){
    console.log(x + ' - I will become a frontend developer')
}

// Soal 4
console.log('\n----------------SOAL 4---------------\n');
for (let x=1; x<=20; x++){
    if(x%2 === 0){
        console.log(x+' - Berkualitas')
    }else if(x%3 === 0){
        console.log(x+' - I Love Coding')
    }else{
        console.log(x+' - Santai')
    }
}

// Soal 5
console.log('\n----------------SOAL 5---------------\n');
let st='';
for (x=0; x<7; x++){
    for (y=0; y<=x; y++){
        st+='#';
    }
    st+='\n'
      
}
console.log(st)