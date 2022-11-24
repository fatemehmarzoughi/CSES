
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function find(input, array) {
    let missingNumber;
    let existsIndexes = [];
    for (let x = 1; x <= input; x++) {        
        for (let index = 0; index <= array.length; index++) {
            if(x == array[index]) {
                existsIndexes.push(x);
            }
        }
    }

    for (let x = 1; x <= input; x++) {
        if(!existsIndexes.includes(x)) {
            missingNumber = x;
        }
    }
    return missingNumber;
}



readline.question("", (input) => {
    readline.question('', (inputArray) => {
        console.log(find(input, Array.from(inputArray.split(' '))));
        readline.close();
    });
});
