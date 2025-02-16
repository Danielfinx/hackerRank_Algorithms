const sampleInput = [
  [3, 1, 2],
  [4, 10, 100],
  [7, 9, 11],
  [4, 8, 16],
];

function stones(n, a, b) {
  // Write your code here
  const outp = [];
  const actLength = n - 1;

  for (let i = 0; i <= actLength; i++) {
    const aux = a * i + b * (actLength - i);
    if (!outp.find((item) => item == aux)) {
      outp.push(aux);
    }
  }

  return outp.sort((a, b) => a - b);
}

for (let sample of sampleInput) {
  console.log(stones(...sample));
}
