const sampleInput = [
  [
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ],
  ],
];

//changed the argument of the function from 'n' to 'width' bc otherwise it makes no sense

function serviceLane(width, cases) {
  // Write your code here
  const outp = [];
  for (let i = 0; i < cases.length; i++) {
    const aux = width.slice(cases[i][0], cases[i][1] + 1).sort((a, b) => a - b);
    outp.push(aux[0]);
  }
  return outp;
}

for (let sample of sampleInput) {
  console.log(serviceLane(...sample));
}
