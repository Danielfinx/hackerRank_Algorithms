const sampleInput = [
  [[1]],
  [
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4],
  ],
];

function surfaceArea(A) {
  // Write your code here
  let price = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] > 0) {
        price += 2;
      }
      if (i + 1 === A.length || A[i + 1][j] < A[i][j]) {
        price += A[i][j] - (i + 1 === A.length ? 0 : A[i + 1][j]);
      }
      if (j + 1 === A[0].length || A[i][j + 1] < A[i][j]) {
        price += A[i][j] - (j + 1 === A[0].length ? 0 : A[i][j + 1]);
      }
      if (i - 1 < 0 || A[i - 1][j] < A[i][j]) {
        price += A[i][j] - (i - 1 < 0 ? 0 : A[i - 1][j]);
      }
      if (j - 1 < 0 || A[i][j - 1] < A[i][j]) {
        price += A[i][j] - (j - 1 < 0 ? 0 : A[i][j - 1]);
      }
    }
  }
  return price;
}

for (const sample of sampleInput) {
  console.log(surfaceArea(sample));
}
