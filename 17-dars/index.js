// 17. while va do...while


for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9

let j = 0;

while (j < 10) {
    console.log(j);
    j++;
}
// 0 1 2 3 4 5 6 7 8 9


do {
    console.log(j);
    j++;
}
while (j < 10);

// 0 1 2 3 4 5 6 7 8 9 10
