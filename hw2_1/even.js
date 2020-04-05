let s = [];
for(let i = 0 ; i < 100 ; i++)
    s[i] = Math.floor(Math.random() * 100 + 1);

console.log(s);

for(let i = 0 ; i < 100 ;) {
    if(s[i]%2 == 0)
        s.splice(i, 1);
    else
        i++;
}

console.log(s);