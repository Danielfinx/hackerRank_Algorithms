const sampleInput = [
  ["1112", "1912", "1892", "1234"],
  ["111212", "191223", "189287", "123463", "191223", "189287"],
];

function cavityMap(grid) {
  // Write your code here

  const outp = grid.map((item) => item.split(""));
  const length = grid.length;

  for (let i = 1; i < length - 1; i++) {
    for (let j = 1; j < length - 1; j++) {
      if (
        outp[i][j] > outp[i - 1][j] &&
        outp[i][j] > outp[i][j - 1] &&
        outp[i][j] > outp[i + 1][j] &&
        outp[i][j] > outp[i][j + 1]
      ) {
        outp[i][j] = "X";
      }
    }
  }
  return outp.map((item) => item.join(""));
}

sampleInput.forEach((sample) => console.log(cavityMap(sample)));
