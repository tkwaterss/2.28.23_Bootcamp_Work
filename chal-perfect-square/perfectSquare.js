const test1 = 16;
const test2 = 324;
const test3 = 3000;

const perfectSquare = (num) => {
    if (Number.isInteger(Math.sqrt(num))) {
        let newBase = Math.sqrt(num) + 1;
        return newBase * newBase;
    } else {
        return -1;
    }
}

console.log(perfectSquare(test1));
console.log(perfectSquare(test2));
console.log(perfectSquare(test3));

//Lets shorten it
const shortSquare = (num) => Number.isInteger(Math.sqrt(num)) ? (Math.sqrt(num) + 1)**2 : -1;

console.log(shortSquare(test1));
console.log(shortSquare(test2));
console.log(shortSquare(test3));

//Lets do it long hand
const longSquare = (num) => {
    let sqrt = num / 2;
    let temp = 0;
    while (sqrt != temp) {
        temp = sqrt;
        sqrt = (num / temp + temp) / 2;
    }
    if (Number.isInteger(sqrt)) {
        let newBase = sqrt + 1;
        return newBase * newBase;
    } else {
        return -1;
    }
}

console.log(longSquare(test1))
console.log(longSquare(test2))
console.log(longSquare(test3))