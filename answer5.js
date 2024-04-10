function sumAll(...numN) {
    return numN.reduce((sum, numN) => sum + numN, 0);
}
console.log(sumAll(1,2));
console.log(sumAll(1,2,3));
console.log(sumAll(1,2,3,4,5));
console.log(sumAll(10,20,30,40,50));