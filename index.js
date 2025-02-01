
function servergaSorov(callback) {

   console.log("1. Serverga so'rov yuborildi");

   setTimeout(() => {
       console.log("2. Ma'lumot kelib tushdi");
       callback(); // Ma'lumot kelib tushgandan keyin callback chaqiriladi
   }, 2000);
   
}

function davomEtish() {
   console.log("3. Dastur ishlashda davom etmoqda");
}


// Callback funksiyani uzatamiz
servergaSorov(davomEtish);
