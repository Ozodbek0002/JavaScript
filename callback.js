

function printString(string, callback) {
    const time = Math.floor(Math.random() * 100) + 1;

    setTimeout (() => {
        console.log(string);
        callback();
    }, time);

    console.log(`printString(${string}) -> ${time}`);
}

function printall() {
    printString("A", printString("B", printString("C",  {})));
} 


printall();


// function printString(string) {

//     const time = Math.floor(Math.random() * 100) + 1;

//     setTimeout (() => {
//         console.log(string);
//     }, time);

//     console.log(`printString(${string}) -> ${time}`);

// }


// printString("A");
// printString("B");
// printString("C");



