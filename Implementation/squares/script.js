const sampleInput = [
  [3, 9],
  [17, 24],
  [35, 70],
  [100, 1000],
];

function squares(a, b) {
  // Write your code here
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      count++;
      i += Math.sqrt(i) * 2;
    }
  }
  return count;
}

for (const sample of sampleInput) {
  console.log(squares(...sample));
}
