let persons1 = [];

for(let i = 0 ; i < 10 ; i++)
    persons1.push({name: "홍길동", age: 16 + i});

let persons2 = [];

for(let i = 0 ; i < 10 ; i++)
    persons2.push(Object.assign({ }, persons1[i]));

console.log(persons2);