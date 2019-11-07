const sendMessageWithTokenFactory = token => message => ({ token, message });

const sendMessageTokenOne = sendMessageWithTokenFactory('1111');
const sendMessageTokenTwo = sendMessageWithTokenFactory('2222');

console.log(sendMessageTokenOne('hi from one'));
console.log(sendMessageTokenTwo('hi from two'));

const add1 = n => n + 1;
const things = [1, 2, 3, 4];

for (var i = 0; i < things.length; i++) {
  console.log(i + 1);
}

console.log(things.map(add1).filter(x => x > 3));
