let subarray = []
let purearray = []
let fs = require('fs');
let array = fs.readFileSync('rawdata').toString().split("\n");
for(i in array) {
    subarray.push(array[i].split(' '))
    purearray.push(subarray[i].filter(ip => ip !== '*'))
}

console.log(purearray[1]);
