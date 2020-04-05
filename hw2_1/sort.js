let s = [];
for(let i = 0 ; i < 100 ; i++)
    s[i] = Math.floor(Math.random() * 100 + 1);

console.log(s);

s.sort(compare);

console.log(s);

function compare(a, b) {
    return a - b ;
}