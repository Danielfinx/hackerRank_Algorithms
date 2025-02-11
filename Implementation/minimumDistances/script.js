const sampleInput = [
  [7, 1, 3, 4, 1, 7],
  [1, 2, 3, 4, 10],
];

function minimumDistances(a) {
  let minimum = null;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] === a[i]) {
        const diff = j - i;
        if (!minimum || diff < minimum) {
          minimum = diff;
          break;
        }
      }
    }
  }
  return minimum ? minimum : -1;
}

sampleInput.forEach((sample) => console.log(minimumDistances(sample)));
