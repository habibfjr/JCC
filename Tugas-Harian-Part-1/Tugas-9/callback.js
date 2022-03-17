{
    function readBooks(time, book, callback) {
        console.log("saya membaca " + book.name )
        setTimeout(function(){
            let sisaWaktu = 0
            if(time >= book.timeSpent) {
                sisaWaktu = time - book.timeSpent
                console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
                callback(sisaWaktu)
            } else {
                console.log('waktu saya habis')
                callback(time)
            }   
        }, book.timeSpent)
    }
    
    var books = [
        {name: 'LOTR', timeSpent: 3000}, 
        {name: 'Fidas', timeSpent: 2000}, 
        {name: 'Kalkulus', timeSpent: 4000},
        {name: 'komik', timeSpent: 1000}
    ]

    readBooks(10000,books[0],(baca)=>{
        readBooks(baca,books[1],(baca1)=>{
            readBooks(baca1,books[2],(baca2)=>{
                readBooks(baca2,books[3],(baca3)=>{
                return baca3 
                })
            })
        })
      })
    
}