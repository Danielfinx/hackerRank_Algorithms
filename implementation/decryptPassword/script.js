const sampleInput = ["51Pa*0Lp*0e"];

function decryptPassword(s) {
  // Write your code here
  const ogPass = [];
  const numArr = [];

  for (let i = 0; i < s.length; i++) {
    if (typeof +s[i] === "number" && !isNaN(+s[i]) && s[i] != 0) {
      numArr.push(s[i]);
    } else if (s[i] == 0) {
      ogPass.push(numArr.pop());
    } else if (s[i] !== "*") {
      ogPass.push(s[i]);
    } else {
      const temp = ogPass[ogPass.length - 1];
      ogPass[ogPass.length - 1] = ogPass[ogPass.length - 2];
      ogPass[ogPass.length - 2] = temp;
    }
  }

  return ogPass.join("");
}

for (const sample of sampleInput) {
  console.log(decryptPassword(sample));
}
