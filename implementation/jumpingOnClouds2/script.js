const sampleInput = [
  [0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0],
];

function jumpingOnClouds(c) {
  // Write your code here
  let steps = 0;
  for (let i = 0; i < c.length - 1; i++) {
    if (c[i + 2] === 0) {
      i++;
    }
    steps++;
  }
  return steps;
}

sampleInput.forEach((sample) => console.log(jumpingOnClouds(sample)));
