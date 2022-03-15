// Soal 1
{
    let dataPeserta = ["john", "laki-laki", "programmer", "30"];
    const [a,b,c,d] = dataPeserta;
    
   
    let output = `Halo, nama saya ${a}. saya ${b} berumur ${d} bekerja sebagai seorang ${c}`;
       
    console.log(output);
}
console.log('\n')

// Soal 2
{
    let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
    for (let i=0; i<array1.length ; i++){
        console.log(array1[i])
    }
}
console.log('\n')

// Soal 3
{
    let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
    for(let i=1; i<array2.length; i+=2){
        console.log(array2[i])
    }
}
console.log('\n')

// Soal 4
{
    let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
    kalimat.shift()
    kalimat.splice(1,1)
    let gabung = kalimat.join(' ')
    console.log(gabung)
}
console.log('\n')

// Soal 5
{
    let sayuran=[]
    sayuran.push('Kangkung','Bayam','Buncis','Kubis','Timun','Seledri','Tauge')
    sayuran.sort()

    for (let i=0; i<sayuran.length; i++){
        
        console.log(i+1 +'. '+ sayuran[i])
    }
}