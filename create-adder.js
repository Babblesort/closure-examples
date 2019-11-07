const adderFactory = x => y => x + y;

const addFive = adderFactory(5);
const addTen = adderFactory(10);

console.log(addFive(1));
console.log(addTen(2));
