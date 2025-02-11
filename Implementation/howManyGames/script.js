const sampleInput = [
  [20, 3, 6, 70],
  [20, 3, 6, 85],
  [20, 3, 6, 80],
];

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let currPrice = p;
  let count = 0;
  while (s > 0) {
    s -= currPrice;
    if (s >= 0) {
      count++;
      if (currPrice - d >= m) {
        currPrice -= d;
      } else if (currPrice != m) {
        currPrice = m;
      }
    }
  }
  return count;
}

sampleInput.forEach((sample) => console.log(howManyGames(...sample)));
