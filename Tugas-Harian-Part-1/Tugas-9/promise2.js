{
    function filterBooksPromise(colorful, amountOfPage){
        return new Promise(function(resolve, reject){
          var books=[
              {name: "shinchan", totalPage: 50, isColorful: true},
              {name: "Kalkulus", totalPage: 250, isColorful: false},
              {name: "doraemon", totalPage: 40, isColorful: true},
              {name: "algoritma", totalPage: 250, isColorful: false},
          ]
          if (amountOfPage >= 40) {
              resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
            } else {
              var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
              reject(reason);
            }
        });
      }
      
      async function book(){
        try {
         var p1 = await filterBooksPromise(true,40)
         console.log(p1)
         var p2 = await filterBooksPromise(false,250)
         console.log(p2)
         var p3 = await filterBooksPromise(true,30)
         console.log(p3)
        } catch(err){
          console.log(err.message)
        }
      }
      book()
}