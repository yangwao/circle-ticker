let subarray = []
let purearray = []
let bytes = []
let sumBytes = 0
let fs = require('fs');
let array = fs.readFileSync('rawdata').toString().split("\n");
for(i in array) {
    subarray.push(array[i].split(' '))
    purearray.push(subarray[i].filter(col => col !== '*'))

    if (purearray[i][2] !== undefined) {
      bytes.push(parseInt(purearray[i][2]))
    }

    if (typeof bytes[i] === 'number') {
      sumBytes += bytes[i]
    }
}

console.log('totalBytes', sumBytes);
