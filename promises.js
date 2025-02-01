function printString(string) {

    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 100) + 1;

        setTimeout(() => {
            console.log(string);
            resolve();
        }, time);

        console.log(`printString(${string}) -> ${time}`);
    });


}


function printAll(){
    printString("A")
        .then(() => printString("B"))
        .then(() =>  printString("C"))
}

  printAll()