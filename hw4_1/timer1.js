let a = 0;

let timer = setInterval(printTime, 1000);

function printTime() {
    console.log(new Date());
    a++;
    if(a == 10)
        clearInterval(timer);
}