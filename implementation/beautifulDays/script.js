const sampleInput = [
  [20, 23, 6],
  [13, 45, 3],
];

const BeautifulDays = (i, j, k) => {
  let count = 0;
  for (let index = i; i <= j; i++) {
    const rev = i.toString().split("").reverse().join("");
    const eval = (i - +rev) % k;
    if (eval === 0) {
      count++;
    }
  }
  return count;
};

sampleInput.forEach((sample) => console.log(BeautifulDays(...sample)));
