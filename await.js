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



async function printAll(){
  await printString("A")
  await printString("B")
  await printString("C")
}
printAll()