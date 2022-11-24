const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const repetition = (input) => {
    let maxNumber = 0;

    let repetitionCounterA = 0;
    let repetitionCounterT = 0;
    let repetitionCounterG = 0;
    let repetitionCounterC = 0;

    input.map((i, index) => {
        switch (i) {
            case 'T': {
                if(input[index-1] != 'T') {
                    repetitionCounterT = 0;
                }
                repetitionCounterT++;
                if(repetitionCounterT > maxNumber) maxNumber = repetitionCounterT;
                break;
            }
            case 'G': {
                if(input[index-1] != 'G') {
                    repetitionCounterG = 0;
                }
                repetitionCounterG++;
                if(repetitionCounterG > maxNumber) maxNumber = repetitionCounterG;
                break;
            }
            case 'A': {
                if(input[index-1] != 'A') {
                    repetitionCounterA = 0;
                }
                repetitionCounterA++;
                if(repetitionCounterA > maxNumber) maxNumber = repetitionCounterA;
                break;
            }
            case 'C': {
                if(input[index-1] != 'C') {
                    repetitionCounterC = 0;
                }
                repetitionCounterC++;
                if(repetitionCounterC > maxNumber) maxNumber = repetitionCounterC;
                break;
            }
        }
    })
    return maxNumber;
}

readline.question("", (input) => {
    console.log(repetition(Array.from(input)));
    readline.close();
});
