const sampleInput = [
  [5, 2, 1, 3, 4],
  [2, 3, 1],
  [4, 3, 5, 1, 2],
];

function permutationEquation(p) {
  const positions = {};
  const result = [];

  for (let i = 0; i < p.length; i++) {
    positions[p[i]] = i + 1;
  }

  for (let y = 1; y <= p.length; y++) {
    const x = positions[positions[y]];
    result.push(x);
  }

  return result;
}

for (sample of sampleInput) {
  console.log(permutationEquation(sample));
}
