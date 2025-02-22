const sampleInput = [
  [5, 2, 1, 3, 4],
  [2, 3, 1],
  [4, 3, 5, 1, 2],
];

function permutationEquation(p) {
  // Write your code here
  const index = {};

  p.forEach((element, i) => {
    index[element] = p.indexOf(i + 1) + 1;
  });

  return Object.values(index);
}

for (sample of sampleInput) {
  console.log(permutationEquation(sample));
}
