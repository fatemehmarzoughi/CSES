const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var result = []; // [1]
function weird(n) {
  if (n < 0) throw Error("must be positive");
  if (result.length === 0) result.push(n / 1);
  if (n == 1) return result;
  if (n % 2 == 0) result.push(n / 2);
  else result.push(n * 3 + 1);

  weird(result[result.length - 1]);
  return result;
}

readline.question("", (val) => {
  const inlineArray = JSON.stringify(weird(val))
    .replace(/]/g, '')
    .replace(/\[/g, '')
    .replace(/,/g, " ");
  for (let index = 0; index < inlineArray.length; index++) {
    inlineArray;
  }

  console.log(inlineArray);
  readline.close();
});
