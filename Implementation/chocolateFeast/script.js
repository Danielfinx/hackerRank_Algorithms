const sampleInput = [
  [10, 2, 5],
  [12, 4, 4],
  [6, 2, 2],
  [7, 3, 2],
];

function chocolateFeast(n, c, m) {
  // Write your code here
  let totalChocolates = Math.floor(n / c);
  let wrappers = totalChocolates;

  while (wrappers >= m) {
    wrappers -= m;
    wrappers++;
    totalChocolates++;
  }
  return totalChocolates;
}

for (let sample of sampleInput) {
  console.log(chocolateFeast(...sample));
}
