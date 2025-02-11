const sampleInput = [
  [5, 2, 1],
  [5, 2, 2],
  [7, 19, 2],
  [3, 7, 3],
];

function saveThePrisoner(n, m, s) {
  const realPos = m + s - 1;
  let mult = 1;
  while (n * mult < realPos) {
    mult++;
  }
  return realPos - n * (mult - 1);
}

sampleInput.forEach((sample) => console.log(saveThePrisoner(...sample)));
